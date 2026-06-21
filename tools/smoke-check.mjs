import { existsSync, readFileSync } from "node:fs";

const required = [
  "next.config.ts",
  "src/app/page.tsx",
  "src/app/api/leads/route.ts",
  "src/app/inventory/page.tsx",
  "src/components/InventoryClient.tsx",
  "src/components/LeadForm.tsx",
  "src/lib/inventory.ts",
  "public/images/vytal-floor-plan.png",
  "public/images/vytal-interior-reference.png",
  ".env.example",
];

const failures = [];
for (const path of required) {
  if (!existsSync(path)) failures.push(`Missing required release asset: ${path}`);
}

const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
for (const script of ["build", "typecheck", "smoke", "validate"]) {
  if (!packageJson.scripts?.[script]) failures.push(`Missing package script: ${script}`);
}

const nextConfig = readFileSync("next.config.ts", "utf8");
if (!nextConfig.includes('output: "standalone"')) {
  failures.push('next.config.ts must include output: "standalone"');
}

if (failures.length) {
  console.error("VYTAL release smoke checks failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log("VYTAL release smoke checks passed.");
