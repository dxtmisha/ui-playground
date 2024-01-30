import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../c1/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../c2/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../m2/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../m3/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
