import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: "react",
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-slick"],
  },
});
