import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/app-lince/' : '/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@':  path.resolve(__dirname,'src'),
      '@assets':  path.resolve(__dirname,'src/assets'),
      '@components':  path.resolve(__dirname,'src/components'),
      '@layouts':  path.resolve(__dirname,'src/layouts'),
      '@pages':  path.resolve(__dirname,'src/pages'),
      '@hooks':  path.resolve(__dirname,'src/hooks'),
      '@utils':  path.resolve(__dirname,'src/utils'),
    },
  },
}))
