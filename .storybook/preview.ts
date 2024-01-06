import type { Preview } from '@storybook/vue3'

import { decoratorTheme } from '../constructors/storybook/decoratorTheme'
import { globalTypes } from '../c2/storybook/globalTypes'

import './style.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  globalTypes,
  decorators: [decoratorTheme]
}

export default preview
