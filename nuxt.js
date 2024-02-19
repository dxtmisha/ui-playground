import { defineNuxtModule, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  hooks: {
    'components:dirs': (dirs) => {
      const { resolve } = createResolver(import.meta.url)

      dirs.push(
        {
          path: resolve('./c1'),
          prefix: 'c1',
          extensions: ['.vue']
        },
        {
          path: resolve('./c2'),
          prefix: 'c2',
          extensions: ['.vue']
        },
        {
          path: resolve('./m2'),
          prefix: 'm2',
          extensions: ['.vue']
        },
        {
          path: resolve('./m3'),
          prefix: 'm3',
          extensions: ['.vue']
        }
      )
    }
  }
})
