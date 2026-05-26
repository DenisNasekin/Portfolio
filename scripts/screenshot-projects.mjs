// Captures hero/above-the-fold screenshots of each project site for the
// Projects section. Run once via `npm run screenshots`, then commit the PNGs
// in public/projects/.
//
// Keep PROJECTS below in sync with src/constants/projects.ts.

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../public/projects");

// Page renders at full desktop height (900) so hero/above-the-fold content
// lays out correctly, but we crop the screenshot to 810 (16:9). The trimmed
// 90 px is where cookie banners and other bottom toasts typically sit —
// cropping them out is simpler than chasing every site's dismiss selectors.
const VIEWPORT = { width: 1440, height: 900 };
const CLIP = { x: 0, y: 0, width: 1440, height: 810 };
const NAV_TIMEOUT_MS = 45_000;
// Pause for above-the-fold animations / fonts / hero videos to settle before
// snapping. Tilda/WordPress sites in particular fade content in late.
const SETTLE_MS = 1500;

const PROJECTS = [
  { id: "unisender", url: "https://www.unisender.com/" },
  { id: "uncoEco", url: "https://unco.bio/ru" },
  { id: "issDigital", url: "https://iss.digital/" },
  { id: "foodFutures", url: "https://foodfutures.club/ru" },
  { id: "pinkit", url: "https://pinkit.io/" },
  { id: "overseer", url: "https://overseer.observer/" },
  { id: "taigaClub", url: "https://taigaclub.ru/" },
  { id: "premiaTogether", url: "https://xn--e1aglkf7g.xn--b1agazb5ah1e.xn--p1ai/" },
];

// Best-effort dismissal of cookie banners, "what's new" modals, and other
// first-visit overlays that obscure the hero on a clean Playwright session.
// Uses `:text-is()` (exact case-insensitive match) instead of substring —
// substring matching is too greedy and can click navigation links on
// text-heavy pages.
const DISMISS_TEXTS = [
  "Принято",
  "Принять",
  "Принять все",
  "Понятно",
  "Согласен",
  "Согласиться",
  "Хорошо",
  "Окей",
  "Ок",
  "ОК",
  "Accept",
  "Accept all",
  "Got it",
  "OK",
];

async function dismissOverlays(page) {
  // Build a case-insensitive set of acceptable button labels, then walk every
  // button/anchor/[role=button] on the page and match by full innerText. This
  // is more deterministic than Playwright's text selectors when buttons wrap
  // their label in a <span> or use <div role="button"> (common in Tilda).
  const target = new Set(DISMISS_TEXTS.map((t) => t.toLowerCase()));
  const handles = await page.locator('button, a, [role="button"]').all();
  for (const handle of handles) {
    try {
      const raw = await handle.innerText({ timeout: 300 });
      const text = raw.trim().toLowerCase();
      if (!target.has(text)) continue;
      if (!(await handle.isVisible())) continue;
      await handle.click({ timeout: 800 });
      // One dismissal per pass — over-clicking can trigger unrelated nav.
      return;
    } catch {
      // Element became detached or hidden between query and click — skip.
    }
  }
}

async function capture(context, { id, url }) {
  const page = await context.newPage();
  try {
    console.log(`→ ${id}  ${url}`);
    // `networkidle` is the strictest wait — gives the page time to finish
    // late-loading hero assets. We still fall back to a `load` event if
    // networkidle times out (some sites keep long-poll connections open).
    await page.goto(url, { waitUntil: "networkidle", timeout: NAV_TIMEOUT_MS }).catch(async () => {
      console.warn(`  ⚠ networkidle timed out, falling back to load`);
      await page.goto(url, { waitUntil: "load", timeout: NAV_TIMEOUT_MS });
    });
    // Two passes around the settle wait: some overlays appear after a delay.
    await dismissOverlays(page);
    await page.waitForTimeout(SETTLE_MS);
    await dismissOverlays(page);
    await page.waitForTimeout(400);

    const outPath = resolve(OUT_DIR, `${id}.png`);
    await page.screenshot({ path: outPath, type: "png", clip: CLIP });
    console.log(`  ✓ public/projects/${id}.png`);
  } catch (err) {
    console.error(`  ✗ ${id}: ${err.message}`);
  } finally {
    await page.close();
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    // A common UA helps avoid bot-blocking heuristics on a few sites.
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
      "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  });

  try {
    for (const project of PROJECTS) {
      await capture(context, project);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
