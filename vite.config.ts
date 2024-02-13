import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dtsPlugin()
  ],
  build: {
    lib: {
      entry: {
        c: resolve(__dirname, 'lib/create.ts'),
        i: resolve(__dirname, 'lib/index.ts')
      },
      name: 'UI',
      fileName: 'lib/ui'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
