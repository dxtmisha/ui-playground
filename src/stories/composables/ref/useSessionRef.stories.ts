import { type Meta, type StoryObj } from '@storybook/vue3'
import { type Ref } from 'vue'

import { getComponentParameters } from '../../../../stories/parameters.ts'
import { getStoryForComposablesRef } from '../../../../stories/stories.ts'

import { useSessionRef } from '../../../../composables/ref/useSessionRef.ts'
import { category } from '../../../../stories/media.ts'

const meta = {
  title: 'Composables/Vue/useSessionRef',
  parameters: getComponentParameters([
    'Creates a reactive variable to manage session storage.',
    'Создает реактивную переменную для управления сессией хранения.'
  ]),
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'value name / название значения',
      table: {
        category: category.arg,
        type: { summary: 'string' }
      }
    },
    defaultValue: {
      control: 'text',
      description: 'default value / значение по умолчанию',
      table: {
        category: category.arg,
        type: { summary: 'any' }
      }
    },
    value: {
      control: 'text',
      description: 'new values / новые значения',
      table: {
        category: category.value,
        type: { summary: 'any' }
      }
    }
  },
  args: {
    name: 'name1',
    defaultValue: 'defaultValue'
  }
} satisfies Meta

type Story = StoryObj<typeof meta>

export default meta

export const UseSessionRefStory: Story = {
  name: 'useSessionRef',
  ...getStoryForComposablesRef(
    useSessionRef,
    (item: Ref<string>, valuesRef: { value: string }) => {
      item.value = valuesRef.value
    }
  )
}