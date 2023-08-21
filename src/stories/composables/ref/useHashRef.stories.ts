import { type Meta, type StoryObj } from '@storybook/vue3'
import { type Ref } from 'vue'

import { getComponentParameters } from '../../../../stories/parameters.ts'
import { getStoryForComposablesRef } from '../../../../stories/stories.ts'

import { useHashRef } from '../../../../composables/ref/useHashRef.ts'
import { category } from '../../../../stories/media.ts'

const meta = {
  title: 'Composables/Vue/useHashVue',
  parameters: getComponentParameters([
    'Creates a reactive variable to manage hash.',
    'Создает реактивную переменную для управления hash.'
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

type Story = StoryObj<typeof meta>;

export default meta

export const UseHashRefStory: Story = {
  name: 'useHashRef',
  ...getStoryForComposablesRef(
    useHashRef,
    (item: Ref<string>, valuesRef: { value: string }) => {
      item.value = valuesRef.value
    }
  )
}
