/**
 * Generates the social preview image and the Apple touch icon.
 *
 *   npm run og
 *
 * Text is pulled straight out of src/data/site.ts, so change the copy there and
 * re-run this. If you would rather design the card yourself, just drop your own
 * 1200×630 PNG at public/images/og-image.png and never run this again.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sharp = createRequire(join(root, 'package.json'))('sharp');

/* ── Pull copy out of site.ts ─────────────────────────────────────────────── */
const site = readFileSync(join(root, 'src/data/site.ts'), 'utf8');
const read = (key, fallback) => {
  const match = site.match(new RegExp(`${key}:\\s*'((?:\\\\.|[^'])*)'`));
  return match ? match[1].replace(/\\'/g, "'") : fallback;
};

const brandName = read('name', 'J & Silent Scotty');
const appName = read('appName', '[App Name]');
const description = read(
  'defaultDescription',
  'The iOS and Apple Watch training app for people who actually train.'
);

/* ── Layout helpers ───────────────────────────────────────────────────────── */
const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Crude but reliable word wrap — averages character width for the font size. */
function wrap(text, maxWidth, fontSize, factor = 0.52) {
  const perLine = Math.floor(maxWidth / (fontSize * factor));
  const lines = [];
  let line = '';

  for (const word of text.split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > perLine && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const W = 1200;
const H = 630;
const PAD = 84;

const titleLines = wrap(appName, W - PAD * 2, 92, 0.55).slice(0, 2);
const descLines = wrap(description, W - PAD * 2 - 40, 32).slice(0, 3);

const titleSvg = titleLines
  .map((line, i) => `<tspan x="${PAD}" dy="${i === 0 ? 0 : 104}">${escape(line)}</tspan>`)
  .join('');

const descSvg = descLines
  .map((line, i) => `<tspan x="${PAD}" dy="${i === 0 ? 0 : 46}">${escape(line)}</tspan>`)
  .join('');

const titleTop = 300 - (titleLines.length - 1) * 52;
const descTop = titleTop + 52 + (titleLines.length - 1) * 104 + 40;

const FONT =
  "'Hanken Grotesk', -apple-system, 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif";

/* The app mark, drawn at 64×64 — the same pulse trace as public/favicon.svg. */
const mark = `<rect width="64" height="64" rx="15" fill="#0b0f11"/>
    <circle cx="32" cy="32" r="19" fill="#101416"/>
    <path d="M2 32h10l2.5-5 2.5 9 2-4h3l4-20 4.5 36 4.5-28 2.5 12 2.5-5 2 5h20"
          fill="none" stroke="#9fd797" stroke-width="3"
          stroke-linecap="round" stroke-linejoin="round"/>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="18%" cy="0%" r="85%">
      <stop offset="0%" stop-color="#9fd797" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#9fd797" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9fd797" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#c0c7d5" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#101416"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="${H - 8}" width="${W}" height="8" fill="url(#rule)"/>

  <!-- brand mark -->
  <g transform="translate(${PAD} 78)">
    ${mark}
    <text x="86" y="42" font-family="${FONT}" font-size="27" font-weight="600" fill="#e0e3e6">
      ${escape(brandName)}
    </text>
  </g>

  <text font-family="${FONT}" font-size="92" font-weight="700" letter-spacing="-3"
        fill="#e0e3e6" y="${titleTop}">${titleSvg}</text>

  <text font-family="${FONT}" font-size="32" font-weight="400"
        fill="#c5c6cc" y="${descTop}">${descSvg}</text>

  <g transform="translate(${PAD} ${H - 96})" font-family="${FONT}" font-size="25" font-weight="600">
    <rect width="14" height="14" rx="7" fill="#9fd797" y="4"/>
    <text x="30" y="17" fill="#9fd797">iPhone</text>
    <text x="132" y="17" fill="#8f9096">•</text>
    <text x="158" y="17" fill="#9fd797">Apple Watch</text>
    <text x="324" y="17" fill="#8f9096">•</text>
    <text x="350" y="17" fill="#8f9096">Built by ${escape(brandName)}</text>
  </g>
</svg>`;

mkdirSync(join(root, 'public/images'), { recursive: true });

writeFileSync(join(root, 'public/images/og-image.svg'), og);
await sharp(Buffer.from(og)).png().toFile(join(root, 'public/images/og-image.png'));

/* The touch icon is the real app icon, not a redraw of it. */
await sharp(join(root, 'public/images/app-icon-dark.png'))
  .resize(180, 180)
  .png()
  .toFile(join(root, 'public/apple-touch-icon.png'));

console.log('✓ public/images/og-image.png  (1200×630)');
console.log('✓ public/apple-touch-icon.png (180×180)');
