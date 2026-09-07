import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the same build works both at the steellabs.io custom-domain root
// and at the https://tapioteras.github.io/steellabs-homepage/ fallback subpath.
export default defineConfig({
  plugins: [react()],
  base: './',
})
