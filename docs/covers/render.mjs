// Renders each cover source in this folder to site/covers/<name>.webp.
// Usage (from the repository root, after `npm i -g playwright` and `npx playwright install chromium`):
//   node docs/covers/render.mjs            # all covers
//   node docs/covers/render.mjs loupe      # one cover
import { chromium } from 'playwright';
import { readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '../../site/covers');
const requested = process.argv.slice(2);
const names = requested.length
  ? requested
  : readdirSync(here).filter((f) => f.endsWith('.html')).map((f) => f.replace(/\.html$/, ''));

const browser = await chromium.launch();
for (const name of names) {
  const page = await browser.newPage({ viewport: { width: 600, height: 375 }, deviceScaleFactor: 2 });
  await page.goto('file://' + resolve(here, name + '.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(250);
  const png = await page.screenshot({ type: 'png' });
  await page.close();
  // Playwright screenshots are PNG; lossless WebP is about a third of the size.
  const { default: sharp } = await import('sharp').catch(() => ({ default: null }));
  if (sharp) {
    await sharp(png).webp({ lossless: true }).toFile(resolve(outDir, name + '.webp'));
  } else {
    const { writeFileSync } = await import('node:fs');
    writeFileSync(resolve(outDir, name + '.png'), png);
    console.warn(`sharp is not installed: wrote ${name}.png; convert it to lossless WebP (e.g. cwebp -lossless).`);
  }
  console.log('rendered', name);
}
await browser.close();
