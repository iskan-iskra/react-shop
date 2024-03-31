import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@api": resolve(__dirname, "./src/api"),
      "@components": resolve(__dirname, "./src/components"),
      "@layout": resolve(__dirname, "./src/layout"),
      "@type": resolve(__dirname, "./src/types"),
      "@use": resolve(__dirname, "./src/use"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@const": resolve(__dirname, "./src/const"),
      "@context": resolve(__dirname, "./src/context"),
      "@page": resolve(__dirname, "./src/page"),
    },
  },
});
