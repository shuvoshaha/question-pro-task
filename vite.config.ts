import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    "store": path.resolve(__dirname, "./src/store"),
    "utils": path.resolve(__dirname, "./src/utils"),
    "components": path.resolve(__dirname, "./src/components"),
    "pages": path.resolve(__dirname, "./src/pages"),
    "layouts": path.resolve(__dirname, "./src/layouts"),
    "routers": path.resolve(__dirname, "./src/routers"),
  },
},
})
