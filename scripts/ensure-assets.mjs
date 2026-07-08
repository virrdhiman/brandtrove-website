#!/usr/bin/env node
/**
 * Ensures public/logo.png and public/images/* exist before build.
 * Works on Windows, macOS, and Linux (VPS). Skips download if files already present.
 */
import { mkdir, access, copyFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const imagesDir = join(publicDir, 'images');

const STOCK = {
  'hero-partnerships.jpg':
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=85',
  'sports.jpg':
    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85',
  'influencer.jpg':
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=85',
  'entertainment.jpg':
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85',
  'events.jpg':
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85',
  'global.jpg':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=85',
  'strategy.jpg':
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=85',
};

const LOCAL_SOURCES = [
  {
    dest: join(publicDir, 'logo.png'),
    sources: [
      join(root, 'assets', 'logo.png'),
      'C:/Users/virrd/.cursor/projects/c-Users-virrd-OneDrive-Desktop-Programs/assets/c__Users_virrd_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Logo-e56ac0a5-947e-42e6-ae9a-2d275df3ba5e.png',
    ],
  },
  {
    dest: join(imagesDir, 'founder-virender.png'),
    sources: [
      join(root, 'assets', 'founder-virender.png'),
      'C:/Users/virrd/.cursor/projects/c-Users-virrd-OneDrive-Desktop-Programs/assets/c__Users_virrd_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_248e51_84f6fbf5ef2c486484c01a74b402fbb1_mv2-94fd9dab-095e-49e8-ac9c-89d044b2499b.png',
    ],
  },
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  await pipeline(res.body, createWriteStream(dest));
}

async function ensureFromSources(dest, sources) {
  if (await exists(dest)) return;
  for (const src of sources) {
    if (await exists(src)) {
      await copyFile(src, dest);
      console.log(`Copied ${src} -> ${dest}`);
      return;
    }
  }
}

async function main() {
  await mkdir(imagesDir, { recursive: true });

  for (const { dest, sources } of LOCAL_SOURCES) {
    await ensureFromSources(dest, sources);
  }

  for (const [name, url] of Object.entries(STOCK)) {
    const dest = join(imagesDir, name);
    if (await exists(dest)) continue;
    try {
      await download(url, dest);
      console.log(`Downloaded ${name}`);
    } catch (err) {
      console.warn(`Warning: could not fetch ${name}:`, err.message);
    }
  }

  const logoPath = join(publicDir, 'logo.png');
  if (!(await exists(logoPath))) {
    console.warn('Warning: logo.png missing — add public/logo.png before production deploy.');
  }

  const manifest = join(publicDir, 'site.webmanifest');
  if (await exists(manifest)) {
    // noop — manifest ships with repo
  }

  console.log('Assets check complete:', publicDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
