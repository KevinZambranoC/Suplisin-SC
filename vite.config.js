import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: ('./src/components/Home/Carousel.jsx'),
      name: 'react-icons',
      filename: '"react-icons": "^4.10.1",'
    },
    rollupOptions: {
      external: ['react', 'react-icons": "^4.10.1'],
      output: {
        globals: {
          react: 'react'
        }
      }
    }
  }
})
