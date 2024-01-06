import type { Meta, StoryObj } from '@storybook/vue3'

import M3Icon from '../Icon/M3Icon.vue'

import {
  iconArgs,
  iconValues
} from './argTypes/icon.ts'

const meta = {
  title: 'M3/Basic/Icon',
  component: M3Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: 'A basic component that extends the Image component, ' +
          'adding the ability to work with two icons and transition between them.'
      }
    }
  },
  argTypes: iconArgs,
  args: iconValues
} satisfies Meta<typeof M3Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}
