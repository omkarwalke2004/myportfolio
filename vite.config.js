import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myportfolio/', // Update with your actual GitHub repository name
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-icons/fa', 
        'react-icons/io5', 
        'react-icons/md', 
        'react-icons/si'
      ]
    }
  }
})
