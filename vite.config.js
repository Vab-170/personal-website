import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Use VITE_BASE env variable if set, otherwise default to GitHub Pages base
const base = process.env.VITE_BASE || '/personal-website/';

export default defineConfig({
  base,
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
        passes: 2,           // Multiple compression passes
      },
      mangle: true, // Mangle variable names
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    // CSS optimization
    cssCodeSplit: true,
    cssMinify: true,
    // Optimize for production
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'motion': ['framer-motion'],
          'icons': ['react-icons', 'lucide-react'],
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
