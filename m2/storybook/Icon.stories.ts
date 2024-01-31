import type { Meta, StoryObj } from '@storybook/vue3'

import M2Icon from '../Icon/M2Icon.vue'

import {
  iconArgs,
  iconValues
} from '../../m3/storybook/argTypes/icon.ts'

const meta = {
  title: 'M2/Icon',
  component: M2Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'm2',
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
} satisfies Meta<typeof M2Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}
