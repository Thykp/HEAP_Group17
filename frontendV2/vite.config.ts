import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // Ensure the output directory is 'dist'
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Proxy API requests to your local backend
    },
  },
});
