import { defineConfig } from 'vite'

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: mode === 'development' ? 'dev' : undefined,
    base: '/test/',
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      vue()
    ]
  }
})
