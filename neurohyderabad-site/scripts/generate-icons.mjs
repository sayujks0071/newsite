#!/usr/bin/env node
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

// Create directories
await fs.mkdir('public/icons', { recursive: true });
await fs.mkdir('public/assets', { recursive: true });

// Generate default icon (simple blue square with white N)
const iconSvg = `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#3b82f6"/>
  <text x="256" y="330" font-family="Arial, sans-serif" font-size="300" text-anchor="middle" fill="white" font-weight="bold">N</text>
</svg>`;

// Generate icons
const sizes = [16, 32, 48, 72, 96, 144, 192, 256, 384, 512];

for (const size of sizes) {
  await sharp(Buffer.from(iconSvg))
    .resize(size, size)
    .png()
    .toFile(`public/icons/icon-${size}.png`);
}

// Generate apple touch icon
await sharp(Buffer.from(iconSvg))
  .resize(180, 180)
  .png()
  .toFile('public/icons/apple-touch-icon.png');

// Generate favicon
await sharp(Buffer.from(iconSvg))
  .resize(32, 32)
  .png()
  .toFile('public/favicon.png');

// Generate OG image (1200x630)
const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f8fafc"/>
  <rect x="50" y="50" width="1100" height="530" fill="#3b82f6" rx="20"/>
  <text x="600" y="380" font-family="Arial, sans-serif" font-size="200" text-anchor="middle" fill="white" font-weight="bold">NeuroHyderabad</text>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .png()
  .toFile('public/assets/og-default.jpg');

console.log('Icons and OG image generated successfully!');
