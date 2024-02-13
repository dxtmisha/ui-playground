import type { Meta, StoryObj } from '@storybook/vue3'

import C1Icon from '../Icon/C1Icon.vue'

import {
  iconArgs,
  iconValues
} from './argTypes/icon'

const meta = {
  title: 'C1/Icon',
  component: C1Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'c1',
    docs: {
      description: {
        component: 'Компонент для работы с иконками и аватарами.'
      }
    }
  },
  argTypes: iconArgs,
  args: iconValues
} satisfies Meta<typeof C1Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}
