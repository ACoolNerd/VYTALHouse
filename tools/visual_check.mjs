import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.VYTAL_BASE_URL ?? "http://127.0.0.1:3001";
const outDir = path.resolve("quality/screenshots");
await fs.mkdir(outDir, { recursive: true });

const routes = ["/", "/services", "/memberships", "/facility", "/member", "/admin", "/vendor"];
const browser = await chromium.launch();

async function checkViewport(name, viewport) {
  const page = await browser.newPage({ viewport });
  const failures = [];
  for (const route of routes) {
    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    if (!response?.ok()) {
      failures.push(`${name} ${route} returned ${response?.status() ?? "no response"}`);
      continue;
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 1) {
      failures.push(`${name} ${route} horizontal overflow ${overflow}px`);
    }
  }
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, `home-${name}.png`), fullPage: true });
  await page.close();
  return failures;
}

const desktopFailures = await checkViewport("desktop", { width: 1440, height: 1000 });
const mobileFailures = await checkViewport("mobile", { width: 390, height: 844 });

const formPage = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await formPage.goto(`${baseUrl}/#waitlist`, { waitUntil: "networkidle" });
await formPage.fill("#name", "VYTAL Prototype Tester");
await formPage.fill("#email", "tester@example.com");
await formPage.selectOption("#interest", "Book a tour");
await formPage.selectOption("#tier", "Elite");
await formPage.fill("#message", "Prototype visual verification inquiry.");
await formPage.click("button[type='submit']");
await formPage.waitForSelector("text=Inquiry captured locally by the prototype API.", { timeout: 10000 });
await formPage.screenshot({ path: path.join(outDir, "lead-form-submitted.png"), fullPage: true });
await formPage.close();

await browser.close();

const failures = [...desktopFailures, ...mobileFailures];
const report = [
  "# VYTAL House Visual Check",
  "",
  `- Base URL: ${baseUrl}`,
  `- Desktop screenshot: quality/screenshots/home-desktop.png`,
  `- Mobile screenshot: quality/screenshots/home-mobile.png`,
  `- Lead form screenshot: quality/screenshots/lead-form-submitted.png`,
  `- Status: ${failures.length === 0 ? "PASS" : "FAIL"}`,
  "",
  "## Failures",
  ...(failures.length ? failures.map((failure) => `- ${failure}`) : ["- None"]),
  "",
];
await fs.writeFile(path.resolve("quality/VISUAL_CHECK.md"), report.join("\n"));
console.log(report.join("\n"));

if (failures.length > 0) {
  process.exit(1);
}
