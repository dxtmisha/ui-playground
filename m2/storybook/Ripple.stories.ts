import type { Meta, StoryObj } from '@storybook/vue3'

import M2Ripple from '../Ripple/M2Ripple.vue'

import {
  rippleArgs,
  rippleValues
} from '../../m3/storybook/argTypes/ripple.ts'

const meta = {
  title: 'M2/Ripple',
  component: M2Ripple,
  tags: ['autodocs'],
  parameters: {
    design: 'm2',
    docs: {
      description: {
        component: 'Component for displaying the wave effect.<br>' +
          '<small>Компонент для отображения эффекта волны.</small>'
      }
    }
  },
  argTypes: rippleArgs,
  args: rippleValues
} satisfies Meta<typeof M2Ripple>

export default meta

type Story = StoryObj<typeof meta>

export const Ripple: Story = {
  render: (args: any) => ({
    components: { M2Ripple },
    setup () {
      return {
        args
      }
    },
    template: `
      <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 256px;">
        <m2-ripple v-bind="args" />
        <span>Click</span>
      </div>
    `
  })
}
