import type { Meta, StoryObj } from '@storybook/vue3'

import C2Icon from '../Icon/C2Icon.vue'

import {
  iconArgs,
  iconValues
} from './argTypes/icon.ts'

const meta = {
  title: 'C2/Icon',
  component: C2Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: '[<b>В разработке</b>] Базовый компонент, который расширяет компонент Image, ' +
          'добавляя ему возможность работы с двумя иконками и переходом между ними.'
      }
    }
  },
  argTypes: iconArgs,
  args: iconValues
} satisfies Meta<typeof C2Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}
