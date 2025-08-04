import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import officeAddin from 'vite-plugin-office-addin'

export default defineConfig({
  base: '/excel-sheets-list/',
  plugins: [
    react(),
    officeAddin({
      devUrl: 'https://localhost:3000',
      prodUrl: 'https://stante-mk.github.io/excel-sheets-list'
    })
  ]
})
