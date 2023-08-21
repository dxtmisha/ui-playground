import { type Meta, type StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../../../../stories/parameters.ts'
import { getStoryForComposablesRef } from '../../../../stories/stories.ts'

import { ElementItemRefType, useElementRef } from '../../../../composables/ref/useElementRef.ts'
import { category } from '../../../../stories/media.ts'

const meta = {
  title: 'Composables/Vue/useElementRef',
  parameters: getComponentParameters([
    'Reactive object to work with elements.',
    'Реактивный объект для работы с элементами.'
  ]),
  tags: ['autodocs'],
  argTypes: {
    element: {
      control: 'text',
      description: 'selectors for matching or an Element / селекторов для сопоставления или Element',
      table: {
        category: category.arg,
        type: { summary: 'string' }
      }
    },
    value: {
      control: 'text',
      description: 'new values / новые значения',
      table: {
        category: category.value,
        type: { summary: 'string | Element' }
      }
    }
  },
  args: {
    element: 'body',
    value: undefined
  }
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const UseElementRefStory: Story = {
  name: 'useElementRef',
  ...getStoryForComposablesRef(
    useElementRef,
    (item: ElementItemRefType, valuesRef: { value: string }) => {
      item.set(valuesRef.value)
    },
    undefined,
    ['set']
  )
}
