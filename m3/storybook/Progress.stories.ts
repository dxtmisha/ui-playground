import type { Meta, StoryObj } from '@storybook/vue3'

import M3Progress from '../Progress/M3Progress.vue'

import {
  progressArgs,
  progressValues
} from './argTypes/progress.ts'

const meta = {
  title: 'M3/Progress',
  component: M3Progress,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        // Компонент для работы с отображением загрузчика
        component: 'Component for working with the display of the loader.'
      }
    }
  },
  argTypes: progressArgs,
  args: progressValues
} satisfies Meta<typeof M3Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Progress: Story = {}
