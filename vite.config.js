import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // Adicionando a importação do módulo 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // Alias para a pasta 'src'
    }
  }
})
