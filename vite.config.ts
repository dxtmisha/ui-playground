import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
// import legacy from '@vitejs/plugin-legacy'
import dtsPlugin from 'vite-plugin-dts'

import components from './lib/components.json'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      // legacy({
      //   targets: ['defaults', 'not IE 11']
      // }),
      dtsPlugin({
        clearPureImport: false,
        copyDtsFiles: true,
        include: [
          'classes/**/*.ts',
          'composables/**/*.ts',
          'constructors/**/*.ts',
          'functions/**/*.ts',
          'lib/**/*.(ts|d.ts)',
          'types/**/*.ts',
          'c1/**/*.(ts|vue)',
          'c2/**/*.(ts|vue)',
          'm2/**/*.(ts|vue)',
          'm3/**/*.(ts|vue)'
        ],
        exclude: [
          'classes/design/DesignCommand.ts',
          'classes/mutation/**/*.ts',
          'classes/services/**/*.ts'
        ]
      })
    ],
    build: {
      lib: {
        entry: {
          index: resolve(__dirname, 'lib/index.ts'),
          ...(() => {
            const data: Record<string, any> = {}

            components.forEach(item => {
              data[item.name] = resolve(__dirname, `${item.path}/index.ts`)
            })

            return data
          })()
        },
        name: 'ui',
        fileName: (format, entryName) => {
          if (format === 'es') {
            return `${entryName}.js`
          }

          return `${entryName}.umd.${format}`
        }
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
  }
})
