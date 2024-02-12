import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'UI',
      fileName: 'ui'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name]-[hash].mjs',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
