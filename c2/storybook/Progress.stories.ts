import type { Meta, StoryObj } from '@storybook/vue3'

import C2Progress from '../Progress/C2Progress.vue'

import {
  progressArgs,
  progressValues
} from './argTypes/progress.ts'

const meta = {
  title: 'C2/Progress',
  component: C2Progress,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: 'Компонент для работы с отображением загрузчика.'
      }
    }
  },
  argTypes: progressArgs,
  args: progressValues
} satisfies Meta<typeof C2Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Progress: Story = {}
