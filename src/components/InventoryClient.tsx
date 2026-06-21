"use client";

import { useEffect, useMemo, useState } from "react";
import { currency, inventoryItems, lowInventoryItems, totalAssets, weeklyGrowthRate, type InventoryItem } from "@/lib/inventory";

type SortKey = "stock" | "category";
type SortDirection = "asc" | "desc";

function nextDirection(current: SortDirection): SortDirection {
  return current === "asc" ? "desc" : "asc";
}

function escapePdfText(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildSimplePdf(items: InventoryItem[]): Blob {
  const rows = ["VYTAL House Inventory Report", `Generated: ${new Date().toLocaleString()}`, "", ...items.map((item) => `${item.category} | ${item.name} | Stock: ${item.stock} ${item.unit} | Value: ${currency(item.stock * item.unitValue)} | Status: ${item.status}`)];
  const textLines = rows.slice(0, 42).map((line, index) => `BT /F1 10 Tf 48 ${760 - index * 16} Td (${escapePdfText(line)}) Tj ET`).join("\n");
  const content = `${textLines}\n`;
  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj",
    `4 0 obj << /Length ${content.length} >> stream\n${content}endstream endobj`,
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (const object of objects) {
    offsets.push(pdf.length);
    pdf += `${object}\n`;
  }
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets.slice(1)) pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

export function InventoryClient() {
  const [sortKey, setSortKey] = useState<SortKey>("stock");
  const [direction, setDirection] = useState<SortDirection>("asc");
  const [toast, setToast] = useState("");
  const lowItems = lowInventoryItems(inventoryItems);

  useEffect(() => {
    if (!lowItems.length) return;
    setToast(`${lowItems.length} inventory item${lowItems.length === 1 ? "" : "s"} flagged low.`);
    const timeout = window.setTimeout(() => setToast(""), 6500);
    return () => window.clearTimeout(timeout);
  }, [lowItems.length]);

  const sortedItems = useMemo(() => {
    return [...inventoryItems].sort((a, b) => {
      const value = sortKey === "stock" ? a.stock - b.stock : a.category.localeCompare(b.category);
      return direction === "asc" ? value : -value;
    });
  }, [direction, sortKey]);

  function sort(nextKey: SortKey) {
    if (nextKey === sortKey) {
      setDirection(nextDirection(direction));
      return;
    }
    setSortKey(nextKey);
    setDirection("asc");
  }

  function downloadPdf() {
    try {
      const blob = buildSimplePdf(sortedItems);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `vytal-inventory-report-${new Date().toISOString().slice(0, 10)}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("inventory_pdf_download_failed", error);
      setToast("Inventory PDF could not be generated.");
    }
  }

  const growth = weeklyGrowthRate(inventoryItems) * 100;

  return (
    <section className="section">
      {toast ? <div className="toast" role="status" aria-live="polite">{toast}</div> : null}
      <div className="section-head dashboard-head">
        <div>
          <p className="eyebrow">Clinic Inventory</p>
          <h1>Inventory Command Center</h1>
          <p className="muted">Track stock levels, asset value, and category risk before member-facing operations begin.</p>
        </div>
        <div className="summary-card">
          <p className="eyebrow">Catalog Registry</p>
          <div className="stat">{currency(totalAssets(inventoryItems))}</div>
          <p className="muted">Total Assets · Weekly Growth {growth.toFixed(1)}%</p>
          <button className="pill-button primary" type="button" onClick={downloadPdf}>Download PDF Report</button>
        </div>
      </div>

      <div className="grid">
        <article className="card"><h3>Total Assets</h3><p className="stat">{currency(totalAssets(inventoryItems))}</p></article>
        <article className="card"><h3>Weekly Growth Rate</h3><p className="stat">{growth.toFixed(1)}%</p></article>
        <article className="card"><h3>Low Status Items</h3><p className="stat">{lowItems.length}</p></article>
      </div>

      <div className="wide-panel table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Item</th>
              <th><button type="button" onClick={() => sort("category")}>Category {sortKey === "category" ? direction === "asc" ? "↑" : "↓" : ""}</button></th>
              <th><button type="button" onClick={() => sort("stock")}>Stock {sortKey === "stock" ? direction === "asc" ? "↑" : "↓" : ""}</button></th>
              <th>Asset Value</th>
              <th>Status</th>
              <th>Vendor</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.stock} {item.unit}</td>
                <td>{currency(item.stock * item.unitValue)}</td>
                <td><span className={`status-badge ${item.status}`}>{item.status}</span></td>
                <td>{item.vendor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
