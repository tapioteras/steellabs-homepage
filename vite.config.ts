import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (steellabs.io) via CNAME, served from the repo root -> base '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
