import { existsSync, readFileSync } from "node:fs";

const required = [
  "src/app/page.tsx",
  "src/app/api/leads/route.ts",
  "src/components/LeadForm.tsx",
  "public/images/vytal-floor-plan.png",
  "public/images/vytal-interior-reference.png",
  ".env.example",
];

const failures = [];
for (const path of required) {
  if (!existsSync(path)) failures.push(`Missing required release asset: ${path}`);
}

const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
for (const script of ["build", "typecheck", "validate"]) {
  if (!packageJson.scripts?.[script]) failures.push(`Missing package script: ${script}`);
}

const env = readFileSync(".env.example", "utf8");
if (/AIza[0-9A-Za-z_-]{20,}|-----BEGIN PRIVATE KEY-----/.test(env)) {
  failures.push("A credential-like value appears in .env.example");
}

if (failures.length) {
  console.error("VYTAL release smoke checks failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log("VYTAL release smoke checks passed.");
