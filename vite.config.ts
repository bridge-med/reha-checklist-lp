import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 公開時に GitHub Pages のサブパスでホストする可能性を考慮し、
// 必要なら base を変更する。
export default defineConfig({
  plugins: [react()],
  base: './',
});
