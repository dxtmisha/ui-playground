import { computed, ref, watchEffect } from 'vue'

import { GeoRef } from '../../classes/GeoRef'

import { globalTypes } from '../../c2/storybook/globalTypes'

const design = ref<string>('')
const theme = ref<string>(globalTypes.theme.defaultValue)

export const decoratorTheme = (story: any, {
  globals,
  parameters
}: any) => {
  if (
    typeof globals.language === 'object' &&
    'value' in globals.language
  ) {
    GeoRef.set(globals.language.value ?? 'en')
  } else {
    GeoRef.set(globals.language ?? 'en')
  }

  design.value = parameters?.design
  theme.value = globals.theme || globalTypes.theme.defaultValue

  return {
    components: { story },
    setup () {
      const isIL = computed(() => GeoRef.getCountry().value === 'IL')
      const classes = computed(() => {
        return {
          [`${design.value}-main`]: design.value,
          [`${design.value}-${theme.value}`]: design.value && theme.value,
          'dir-rtl': isIL.value,
          'sb-preview': true
        }
      })

      watchEffect(() => {
        document.documentElement.dir = isIL.value ? 'rtl' : 'ltr'
      })

      return {
        classes
      }
    },
    template: `
      <div :class="classes">
        <div class="sb-preview__body">
          <story />
        </div>
      </div>
    `
  }
}
