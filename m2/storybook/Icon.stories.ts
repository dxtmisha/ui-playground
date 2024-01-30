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
          'A basic component that extends the Image component, ' +
          'adding the ability to work with two icons and transition between them.<br>' +
          '<small>Базовый компонент, который расширяет компонент Image, ' +
          'добавляя ему возможность работы с двумя иконками и переходом между ними.</small>'
      }
    }
  },
  argTypes: iconArgs,
  args: iconValues
} satisfies Meta<typeof M2Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}
