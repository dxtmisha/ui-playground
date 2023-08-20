import { type Meta, type StoryObj } from '@storybook/vue3'
import { type Ref } from 'vue'

import { getComponentParameters } from '../../../../stories/parameters.ts'
import { getStoryForComposablesRef } from '../../../../stories/stories.ts'

import { useCookieVue } from '../../../../composables/ref/useCookieRef.ts'
import { category } from '../../../../stories/media.ts'

const meta = {
  title: 'Composables/Vue/useCookieVue',
  parameters: getComponentParameters([
    'Creates a reactive variable to manage cookies.',
    'Создает реактивную переменную для управления cookie.'
  ]),
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'cookie name / название cookie',
      table: {
        category: category.arg,
        type: { summary: 'string' }
      }
    },
    defaultValue: {
      control: 'text',
      description: 'value or function to change data / значение или функция для изменения данных',
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

export const UseCookieVueStory: Story = {
  name: 'useCookieVue',
  ...getStoryForComposablesRef(
    useCookieVue,
    (item: Ref<string>, valuesRef: { value: string }) => {
      item.value = valuesRef.value
    }
  )
}
