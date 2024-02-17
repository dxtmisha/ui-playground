import type { Meta, StoryObj } from '@storybook/vue3'

import M3FieldMessage from './../../m3/FieldMessage/M3FieldMessage.vue'

import {
  fieldMessageArgs,
  fieldMessageValues
} from './argTypes/fieldMessage'

const meta = {
  title: 'M3/FieldMessage',
  component: M3FieldMessage,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: 'Component for outputting additional text and error text.<br>' +
          '<small>Компонент для вывода дополнительного текста и текста ошибки.</small>'
      }
    }
  },
  argTypes: fieldMessageArgs,
  args: fieldMessageValues
} satisfies Meta<typeof M3FieldMessage>

export default meta

type Story = StoryObj<typeof meta>

export const FieldMessage: Story = {}
