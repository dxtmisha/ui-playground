import type { Meta, StoryObj } from '@storybook/vue3'

import M3Icon from '../Icon/M3Icon.vue'

import {
  iconArgs,
  iconValues
} from './argTypes/icon'

const meta = {
  title: 'M3/Icon',
  component: M3Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component:
          'Component for working with icons and avatars.<br>' +
          '<small>Компонент для работы с иконками и аватарами.</small>'
      }
    }
  },
  argTypes: iconArgs,
  args: iconValues
} satisfies Meta<typeof M3Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}
