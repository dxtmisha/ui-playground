import { type Meta, type StoryObj } from '@storybook/vue3'
import { type Ref } from 'vue'

import { getComponentParameters } from '../../../../stories/parameters.ts'
import { getStoryForComposablesRef } from '../../../../stories/stories.ts'

import { useStorageRef } from '../../../../composables/ref/useStorageRef.ts'
import { category } from '../../../../stories/media.ts'

const meta = {
  title: 'Composables/Vue/useStorageRef',
  parameters: getComponentParameters([
    'Creates a reactive variable to manage a local storage.',
    'Создает реактивный переменный для управления локальным хранилищем.'
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
    cache: {
      control: 'number',
      description: 'cache time / время кэширования',
      table: {
        category: category.arg,
        type: { summary: 'number' }
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
    defaultValue: 'defaultValue',
    cache: 60
  }
} satisfies Meta

type Story = StoryObj<typeof meta>

export default meta

export const UseStorageRefStory: Story = {
  name: 'useStorageRef',
  ...getStoryForComposablesRef(
    useStorageRef,
    (item: Ref<string>, valuesRef: { value: string }) => {
      item.value = valuesRef.value
    }
  )
}
