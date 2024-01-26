import type { Meta, StoryObj } from '@storybook/vue3'

import M3Icon from '../Icon/M3Icon.vue'

import {
  iconArgs,
  iconValues
} from './argTypes/icon.ts'

const meta = {
  title: 'M3/Icon',
  component: M3Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component:
          'A basic component that extends the Image component, ' +
          'adding the ability to work with two icons and transition between them.<br>' +
          '<small>Базовый компонент, который расширяет компонент Image, ' +
          'добавляя ему возможность работы с двумя иконками и переходом между ними.</small>'
      }
    }
  },
  argTypes: iconArgs,
  args: iconValues
} satisfies Meta<typeof M3Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}
