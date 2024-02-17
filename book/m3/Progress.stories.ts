import type { Meta, StoryObj } from '@storybook/vue3'

import M3Progress from './../../m3/Progress/M3Progress.vue'

import {
  progressArgs,
  progressValues
} from './argTypes/progress'

const meta = {
  title: 'M3/Progress',
  component: M3Progress,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: 'Component for working with the display of the loader.<br>' +
          '<small>Компонент для работы с отображением загрузчика.</small>'
      }
    }
  },
  argTypes: progressArgs,
  args: progressValues
} satisfies Meta<typeof M3Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Progress: Story = {}
