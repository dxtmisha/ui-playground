import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

const BASE_URL = '/'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'development' ? '/' : BASE_URL
  const root = mode === 'development' ? './dev' : './dev'

  return {
    root,
    base,
    publicDir: `${root}/public`,
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      vue()
    ]
  }
})
