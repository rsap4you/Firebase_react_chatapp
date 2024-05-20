import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000 // Set the limit to 1000 kB
  }
});
