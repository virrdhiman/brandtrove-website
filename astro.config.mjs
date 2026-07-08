import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://brandtroveglobal.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
