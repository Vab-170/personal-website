import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages base path
  base: '/personal-website/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Disable source maps in production (harder to debug/reverse engineer)
    sourcemap: false,
    // Minify code
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.log statements
        drop_debugger: true, // Remove debugger statements
      },
      mangle: true, // Mangle variable names
    },
    // Optimize for production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons'],
        }
      }
    }
  },
  // Improve development experience
  server: {
    port: 5173,
    open: true
  }
})
