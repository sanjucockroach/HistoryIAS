/**
 * Builds the History IAS Academy favicon set from public/brand/logo.png.
 * - public/brand/favicon.ico      (16/32/48, PNG-compressed ICO entries)
 * - public/brand/icon-192.png
 * - public/brand/icon-512.png
 * - public/brand/apple-touch-icon.png (180x180)
 * - src/app/favicon.ico (copy of the ICO so /favicon.ico resolves directly)
 *
 * Run: bun scripts/make-icons.mjs
 */
import sharp from 'sharp';
import { mkdirSync, writeFileSync, copyFileSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SRC = resolve('public/brand/logo.png');
const OUT_DIR = resolve('public/brand');
mkdirSync(OUT_DIR, { recursive: true });

async function pngAt(size, path, ring = false) {
  const img = sharp(SRC).resize(size, size, { fit: 'cover', position: 'centre' });
  let buf;
  if (ring) {
    // Circle-mask for crisp round favicons on dark browser tabs
    const r = size / 2;
    const svg = `<svg width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="white"/></svg>`;
    buf = await img
      .composite([{ input: Buffer.from(svg), blend: 'dest-in' }])
      .png()
      .toBuffer();
  } else {
    buf = await img.png().toBuffer();
  }
  writeFileSync(path, buf);
  return buf;
}

const entries = [];
for (const size of [16, 32, 48]) {
  const png = await pngAt(size, `${OUT_DIR}/favicon-${size}.png`, true);
  entries.push({ size, png });
}

/* Assemble an ICO container embedding the PNG blobs (supported by all
   modern browsers; keep byte fields little-endian). */
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(entries.length, 4);

const dirEntries = [];
let offset = 6 + entries.length * 16;
for (const { size, png } of entries) {
  const e = Buffer.alloc(16);
  e.writeUInt8(size === 256 ? 0 : size, 0); // width
  e.writeUInt8(size === 256 ? 0 : size, 1); // height
  e.writeUInt8(0, 2); // palette
  e.writeUInt8(0, 3); // reserved
  e.writeUInt16LE(1, 4); // planes
  e.writeUInt16LE(32, 6); // bpp
  e.writeUInt32LE(png.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += png.length;
  dirEntries.push(e);
}

const ico = Buffer.concat([header, ...dirEntries, ...entries.map((e) => e.png)]);
writeFileSync(`${OUT_DIR}/favicon.ico`, ico);
copyFileSync(`${OUT_DIR}/favicon.ico`, resolve('src/app/favicon.ico'));

await pngAt(192, `${OUT_DIR}/icon-192.png`, true);
await pngAt(512, `${OUT_DIR}/icon-512.png`, true);
await pngAt(180, `${OUT_DIR}/apple-touch-icon.png`, false);

console.log('favicon set generated from', SRC);
console.log(readFileSync(`${OUT_DIR}/favicon.ico`).length, 'bytes favicon.ico');
