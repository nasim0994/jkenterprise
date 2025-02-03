import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3500,
  },
  server: {
    port: 3800,
  },
  preview: {
    port: 3800,
  },
});
