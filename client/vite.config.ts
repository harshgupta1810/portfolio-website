import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'recharts',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      '@react-three/postprocessing',
    ],
    force: true
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          'ui-vendor': ['@radix-ui/react-icons', '@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'chart-vendor': ['recharts']
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    cors: true,
    hmr: {
      protocol: 'ws',
      port: 5173
    }
  },
  preview: {
    port: 5173,
    strictPort: true,
    host: true
  }
})