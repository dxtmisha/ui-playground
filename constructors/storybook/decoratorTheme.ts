import { computed, ref } from 'vue'

import { GeoRef } from '../../classes/GeoRef.ts'

import { globalTypes } from '../../c2/storybook/globalTypes.ts'

const design = ref<string>('')
const theme = ref<string>(globalTypes.theme.defaultValue)

export const decoratorTheme = (story: any, {
  globals,
  parameters
}: any) => {
  design.value = parameters?.design
  theme.value = globals.theme || globalTypes.theme.defaultValue

  return {
    components: { story },
    setup () {
      const classes = computed(() => {
        return {
          [`${design.value}-main`]: design.value,
          [`${design.value}-${theme.value}`]: design.value && theme.value,
          'dir-rtl': GeoRef.getCountry().value === 'IL',
          'sb-preview': true
        }
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
