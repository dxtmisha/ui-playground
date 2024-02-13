import type { Meta, StoryObj } from '@storybook/vue3'

import M3Button from '../Button/M3Button.vue'

import {
  buttonArgs,
  buttonValues
} from './argTypes/button'

const meta = {
  title: 'M3/Button',
  component: M3Button,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: 'Common buttons prompt most actions in a UI.<br>' +
          '<small>Общие кнопки позволяют выполнять большинство действий в пользовательском интерфейсе.</small>'
      }
    }
  },
  argTypes: buttonArgs,
  args: buttonValues
} satisfies Meta<typeof M3Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {}
