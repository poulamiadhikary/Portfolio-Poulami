import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',
  plugins: [react()],
  base: './', // Ensure this is set to the root path
  build: {
    outDir: 'dist', // Output directory for the build
  },
})
