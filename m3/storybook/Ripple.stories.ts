import type { Meta, StoryObj } from '@storybook/vue3'

import M3Ripple from '../Ripple/M3Ripple.vue'

import {
  rippleArgs,
  rippleValues
} from './argTypes/ripple.ts'

const meta = {
  title: 'M3/Ripple',
  component: M3Ripple,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: 'Component for displaying the wave effect.<br>' +
          '<small>Компонент для отображения эффекта волны.</small>'
      }
    }
  },
  argTypes: rippleArgs,
  args: rippleValues
} satisfies Meta<typeof M3Ripple>

export default meta

type Story = StoryObj<typeof meta>

export const Ripple: Story = {}
