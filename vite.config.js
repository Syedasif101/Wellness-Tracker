import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Here i have changed port by default 5173

  server: {
    port: 3000,
  },
});
