import { resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ViteImageOptimizer({})],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
})
