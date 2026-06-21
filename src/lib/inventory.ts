export type InventoryStatus = "healthy" | "watch" | "low";

export type InventoryItem = {
  id: string;
  name: string;
  category: string;
  stock: number;
  unit: string;
  unitValue: number;
  status: InventoryStatus;
  weeklyGrowthRate: number;
  vendor: string;
};

export const inventoryItems: InventoryItem[] = [
  { id: "hbot-mask", name: "HBOT Oxygen Masks", category: "Hyperbaric", stock: 42, unit: "units", unitValue: 185, status: "healthy", weeklyGrowthRate: 0.08, vendor: "Oxycell" },
  { id: "iv-nad", name: "NAD+ IV Kits", category: "IV Therapy", stock: 11, unit: "kits", unitValue: 220, status: "low", weeklyGrowthRate: -0.14, vendor: "Clinical Supply" },
  { id: "red-light", name: "Red Light Panel Set", category: "Recovery Equipment", stock: 6, unit: "sets", unitValue: 3200, status: "healthy", weeklyGrowthRate: 0.02, vendor: "Red Light Therapy Vendor" },
  { id: "cryo-gloves", name: "Cryotherapy Gloves", category: "Cryotherapy", stock: 9, unit: "pairs", unitValue: 65, status: "low", weeklyGrowthRate: -0.22, vendor: "Cryo Safety Supply" },
  { id: "compression-boots", name: "Compression Boots", category: "Recovery Equipment", stock: 14, unit: "units", unitValue: 950, status: "watch", weeklyGrowthRate: 0.04, vendor: "Recovery Systems" },
  { id: "peptide-cold", name: "Peptide Cold Storage Kits", category: "Clinical Storage", stock: 8, unit: "kits", unitValue: 425, status: "watch", weeklyGrowthRate: -0.06, vendor: "Medical Cold Chain" },
  { id: "clean-room", name: "Treatment Room Turnover Kits", category: "Operations", stock: 72, unit: "kits", unitValue: 18, status: "healthy", weeklyGrowthRate: 0.11, vendor: "Facility Supply" },
  { id: "biomarker", name: "Biomarker Collection Kits", category: "Diagnostics", stock: 13, unit: "kits", unitValue: 110, status: "low", weeklyGrowthRate: -0.18, vendor: "Diagnostics Partner" },
];

export function currency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function totalAssets(items: InventoryItem[] = inventoryItems): number {
  return items.reduce((sum, item) => sum + item.stock * item.unitValue, 0);
}

export function weeklyGrowthRate(items: InventoryItem[] = inventoryItems): number {
  const totalValue = totalAssets(items);
  if (!totalValue) return 0;
  return items.reduce((sum, item) => sum + item.stock * item.unitValue * item.weeklyGrowthRate, 0) / totalValue;
}

export function lowInventoryItems(items: InventoryItem[] = inventoryItems): InventoryItem[] {
  return items.filter((item) => item.status === "low");
}
