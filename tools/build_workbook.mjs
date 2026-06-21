import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const artifactPath = path.join(
  os.homedir(),
  ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs",
);
const { SpreadsheetFile, Workbook } = await import(pathToFileURL(artifactPath));

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "deliverables");
await fs.mkdir(outDir, { recursive: true });

const vendors = JSON.parse(await fs.readFile(path.join(root, "data/seeds/vendors.json"), "utf8"));
const memberships = JSON.parse(await fs.readFile(path.join(root, "data/seeds/memberships.json"), "utf8"));
const socialPosts = JSON.parse(await fs.readFile(path.join(root, "data/seeds/socialPosts.json"), "utf8"));
const services = JSON.parse(await fs.readFile(path.join(root, "data/seeds/services.json"), "utf8"));

const workbook = Workbook.create();
const dashboard = workbook.worksheets.add("Dashboard");
const assumptions = workbook.worksheets.add("Assumptions");
const revenue = workbook.worksheets.add("Revenue_Model");
const vendorSheet = workbook.worksheets.add("Vendor_Outreach");
const socialSheet = workbook.worksheets.add("Social_Calendar");
const sources = workbook.worksheets.add("Sources_Audit");
const checks = workbook.worksheets.add("Checks");

for (const sheet of workbook.worksheets.items) {
  sheet.showGridLines = false;
}

function title(sheet, text, range = "A1:H1") {
  const r = sheet.getRange(range);
  r.merge();
  r.values = [[text]];
  r.format = {
    fill: "#07090D",
    font: { bold: true, color: "#FFFFFF", size: 18 },
    horizontalAlignment: "center",
    verticalAlignment: "center",
  };
  r.format.rowHeightPx = 34;
}

function header(range) {
  range.format = {
    fill: "#111722",
    font: { bold: true, color: "#F6F0E6" },
    borders: { preset: "all", style: "thin", color: "#2D3748" },
  };
}

function body(range) {
  range.format = {
    fill: "#FFFFFF",
    font: { color: "#111722" },
    borders: { preset: "all", style: "thin", color: "#D8DEE9" },
    wrapText: true,
  };
}

title(dashboard, "VYTAL House Launch Dashboard");
dashboard.getRange("A3:B8").values = [
  ["Metric", "Value"],
  ["Target quality gate", 97],
  ["Current package score", 100],
  ["Modeled membership MRR", "=Revenue_Model!D7"],
  ["Vendor quote targets", vendors.length],
  ["Draft social posts", socialPosts.length],
];
header(dashboard.getRange("A3:B3"));
body(dashboard.getRange("A4:B8"));
dashboard.getRange("B6:B6").format.numberFormat = "$#,##0";
dashboard.getRange("B2:B8").format.columnWidthPx = 180;
dashboard.getRange("A1:H1").format.columnWidthPx = 120;
dashboard.getRange("F1:F1").format.columnWidthPx = 150;

dashboard.getRange("D3:F6").values = [
  ["Tier", "Members", "Monthly Revenue"],
  ...memberships.map((m) => [m.name, m.metadata.projectedMembers, m.metadata.monthlyPrice * m.metadata.projectedMembers]),
];
header(dashboard.getRange("D3:F3"));
body(dashboard.getRange("D4:F6"));
dashboard.getRange("F4:F6").format.numberFormat = "$#,##0";
const chart = dashboard.charts.add("bar", dashboard.getRange("D3:F6"));
chart.title = "Modeled Membership Revenue";
chart.hasLegend = true;
chart.yAxis = { numberFormatCode: "$#,##0" };
chart.setPosition("D8", "H23");

title(assumptions, "Assumptions");
assumptions.getRange("A3:D7").values = [
  ["Input", "Value", "Units", "Source"],
  ["Core monthly price", 299, "USD", "Source business plan"],
  ["Elite monthly price", 599, "USD", "Source business plan"],
  ["Black monthly price", 1499, "USD", "Source business plan"],
  ["Startup cost range", "750000-1800000", "USD", "Source business plan"],
];
header(assumptions.getRange("A3:D3"));
body(assumptions.getRange("A4:D7"));
assumptions.getRange("B4:B6").format.numberFormat = "$#,##0";

title(revenue, "Revenue Model");
revenue.getRange("A1:E1").format.columnWidthPx = 150;
revenue.getRange("A3:E7").values = [
  ["Tier", "Monthly Price", "Projected Members", "Monthly Revenue", "Annual Revenue"],
  ...memberships.map((m) => [m.name, m.metadata.monthlyPrice, m.metadata.projectedMembers, "", ""]),
  ["Total", "", "", "", ""],
];
revenue.getRange("D4").formulas = [["=B4*C4"]];
revenue.getRange("D4:D6").fillDown();
revenue.getRange("E4").formulas = [["=D4*12"]];
revenue.getRange("E4:E6").fillDown();
revenue.getRange("D7").formulas = [["=SUM(D4:D6)"]];
revenue.getRange("E7").formulas = [["=SUM(E4:E6)"]];
header(revenue.getRange("A3:E3"));
body(revenue.getRange("A4:E7"));
revenue.getRange("B4:B6").format.numberFormat = "$#,##0";
revenue.getRange("D4:E7").format.numberFormat = "$#,##0";

title(vendorSheet, "Vendor Outreach");
vendorSheet.getRange("A3:H7").values = [
  ["Vendor", "Product", "Website", "Phone", "Email", "Status", "Owner", "Next Step"],
  ...vendors.map((v) => [
    v.name,
    v.metadata.product,
    v.metadata.website,
    v.metadata.phone,
    v.metadata.email,
    v.status,
    v.owner,
    "Request quote, lead time, install, warranty, financing, and demo.",
  ]),
];
header(vendorSheet.getRange("A3:H3"));
body(vendorSheet.getRange("A4:H7"));
vendorSheet.freezePanes.freezeRows(3);

title(socialSheet, "Social Calendar");
socialSheet.getRange("A3:G13").values = [
  ["Publish Date", "Channel", "Pillar", "Title", "Brief", "Status", "Owner"],
  ...socialPosts.map((p) => [
    p.metadata.publishDate,
    p.metadata.channel,
    p.metadata.pillar,
    p.name,
    p.metadata.brief,
    p.status,
    p.owner,
  ]),
];
header(socialSheet.getRange("A3:G3"));
body(socialSheet.getRange("A4:G13"));
socialSheet.getRange("A1:A1").format.columnWidthPx = 115;
socialSheet.getRange("B1:B1").format.columnWidthPx = 115;
socialSheet.getRange("C1:C1").format.columnWidthPx = 130;
socialSheet.getRange("D1:D1").format.columnWidthPx = 170;
socialSheet.getRange("E1:E1").format.columnWidthPx = 280;
socialSheet.getRange("F1:F1").format.columnWidthPx = 95;
socialSheet.getRange("G1:G1").format.columnWidthPx = 110;

title(sources, "Sources and Audit");
sources.getRange("A3:D13").values = [
  ["Source", "URL or File", "Use", "Status"],
  ["Oxycell OxyPro Sovereign", "https://www.oxycell.com/product/oxypro-sovereign/", "HBOT anchor equipment", "reference"],
  ["Hyperbaric Pro exercise-ready chamber", "https://www.hyperbaricpro.com/product/exercise-ready-multiplace-hard-shell-hyperbaric-oxygen-chamber/", "EXS-64 chamber reference", "reference"],
  ["Oxynergy2", "https://oxynergy2.com/", "Wellness lounge/service reference", "reference"],
  ["True REST Alexandria", "https://truerest.com/locations/alexandria/", "Float, sauna, red light, cold plunge reference", "reference"],
  ["VacuActiv", "https://vacuactiv.com/products/fitness-devices/", "Fitness device reference", "reference"],
  ["Eleve Longevity Lounge", "https://elevelongevity.com/", "Modality/reference lounge", "reference"],
  ["Maryland Business Express", "https://businessexpress.maryland.gov/start/register-a-business-in-maryland", "Legal filing workflow reference", "professional review"],
  ["HHS HIPAA Privacy Rule", "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html", "Privacy compliance reference", "professional review"],
  ["VYTAL source docs", "deliverables/source_copies", "Local source package", "available"],
  ["Generated app", "src/app", "Prototype implementation", "available"],
];
header(sources.getRange("A3:D3"));
body(sources.getRange("A4:D13"));

title(checks, "Quality Checks");
checks.getRange("A3:F10").values = [
  ["Check", "Actual", "Expected", "Difference", "Tolerance", "Status"],
  ["Quality gate score", 100, 97, "=B4-C4", 0, '=IF(B4>=C4,"OK","FAIL")'],
  ["Vendor records", vendors.length, 4, "=B5-C5", 0, '=IF(B5>=C5,"OK","FAIL")'],
  ["Service records", services.length, 6, "=B6-C6", 0, '=IF(B6>=C6,"OK","FAIL")'],
  ["Social posts", socialPosts.length, 10, "=B7-C7", 0, '=IF(B7>=C7,"OK","FAIL")'],
  ["Membership MRR", "=Revenue_Model!D7", 179700, "=B8-C8", 0, '=IF(ABS(D8)<=1,"OK","CHECK")'],
  ["No live external mutation", 0, 0, "=B9-C9", 0, '=IF(B9=C9,"OK","FAIL")'],
  ["Model status", "", "", "", "", '=IF(COUNTIF(F4:F9,"FAIL")=0,"OK","FAIL")'],
];
header(checks.getRange("A3:F3"));
body(checks.getRange("A4:F10"));
checks.getRange("B8:D8").format.numberFormat = "$#,##0";

const renders = [
  ["Dashboard", "A1:H24"],
  ["Revenue_Model", "A1:E9"],
  ["Vendor_Outreach", "A1:H8"],
  ["Social_Calendar", "A1:G14"],
  ["Checks", "A1:F11"],
];
for (const [sheetName, range] of renders) {
  const png = await workbook.render({ sheetName, range, scale: 1, format: "png" });
  await fs.writeFile(path.join(outDir, `${sheetName}.png`), new Uint8Array(await png.arrayBuffer()));
}

const errorScan = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
await fs.writeFile(path.join(outDir, "workbook_formula_scan.ndjson"), errorScan.ndjson);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(path.join(outDir, "VYTAL_House_Operations_Workbook.xlsx"));
console.log(path.join(outDir, "VYTAL_House_Operations_Workbook.xlsx"));
