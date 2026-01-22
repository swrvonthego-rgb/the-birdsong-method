import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // Note: process.env.API_KEY is automatically injected by the environment. 
      // Manual definition is removed to comply with security and integration guidelines.
      resolve: {
        alias: {
          // Fixed: Use path.resolve('.') instead of __dirname to avoid "Cannot find name '__dirname'" error in ESM/Vite
          '@': path.resolve('.'),
        }
      }
    };
});
