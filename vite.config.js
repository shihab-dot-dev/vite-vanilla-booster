import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
  },
  plugins: [mkcert()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
