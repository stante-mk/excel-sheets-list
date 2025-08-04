import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import officeAddin from "vite-plugin-office-addin";

export default defineConfig({
  plugins: [react(), officeAddin()],
});
