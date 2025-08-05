import { existsSync } from "node:fs";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Check if HTTPS certificates exist (required for Kontent.ai custom apps)
const httpsConfig =
  existsSync("./localhost.pem") && existsSync("./localhost-key.pem")
    ? {
        key: "./localhost-key.pem",
        cert: "./localhost.pem",
      }
    : false;

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
    https: httpsConfig,
  },
});
