import { type Meta, type StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../../../stories/parameters.ts'
import { getStoryForComposablesRef } from '../../../stories/stories.ts'

import { GeoRefType, useGeo } from '../../../composables/useGeo.ts'
import { category } from '../../../stories/media.ts'

const meta = {
  title: 'Composables/useGeo',
  parameters: getComponentParameters([
    'Creates a reactive variable to get data about the current country.',
    'Создает реактивную переменную для получения данных о текущей стране.'
  ]),
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'new values / новые значения',
      table: {
        category: category.value,
        type: { summary: 'string | Element' }
      }
    },
    save: {
      control: 'boolean',
      description: 'save the result / сохранить результат',
      table: {
        category: category.value,
        type: { summary: 'boolean' }
      }
    }
  },
  args: {
    value: undefined,
    save: undefined
  }
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const UseGeoStory: Story = {
  name: 'useGeo',
  ...getStoryForComposablesRef(
    useGeo,
    (
      item: GeoRefType,
      valuesRef: { value: string, save: boolean }
    ) => {
      item.setGeo(valuesRef.value, valuesRef.save)
    },
    undefined,
    ['setGeo']
  )
}
