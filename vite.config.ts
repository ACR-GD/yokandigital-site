import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // C'est cette ligne qui corrige ton erreur :
  root: "client", 
  build: {
    // On veut que le dossier final "dist" soit à la racine du projet, pas dans client/dist
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "client/src/assets"), // <--- On ajoute ça
    },
  },
});