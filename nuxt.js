import { defineNuxtModule, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  hooks: {
    'components:dirs': (dirs) => {
      const { resolve } = createResolver(import.meta.url)
      console.log('ui components:dirs')
      dirs.push(
        {
          path: resolve('./c1'),
          prefix: 'c1'
        },
        {
          path: resolve('./c2'),
          prefix: 'c2'
        },
        {
          path: resolve('./m2'),
          prefix: 'm2'
        },
        {
          path: resolve('./m3'),
          prefix: 'm3'
        }
      )
    }
  }
})
