import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dtsPlugin({
      include: [
        'c1/**/*.vue'
      ]
    })
  ],
  build: {
    lib: {
      entry: {
        i: resolve(__dirname, 'lib')
      },
      name: 'UI',
      fileName: 'ui'
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
