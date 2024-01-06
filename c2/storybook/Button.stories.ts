import type { Meta, StoryObj } from '@storybook/vue3'

import C2Button from '../Button/C2Button.vue'

import {
  buttonArgs,
  buttonValues
} from './argTypes/button.ts'

const meta = {
  title: 'C2/Button',
  component: C2Button,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: 'Кнопки - это элементы управления, которые позволяют пользователям действовать, делать выборы и двигаться вперед.'
      }
    }
  },
  argTypes: buttonArgs,
  args: buttonValues
} satisfies Meta<typeof C2Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {}
