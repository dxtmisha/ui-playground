import { type Meta, type StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../../../stories/parameters.ts'
import { getStoryForFunction } from '../../../stories/stories.ts'

import { getHash, removeHash, setHash } from '../../../functions/hash.ts'

import { demoStringName } from '../../../stories/demo/string.ts'
import { demoNumberRandom } from '../../../stories/demo/number.ts'

const meta = {
  title: 'Functions/hash',
  parameters: getComponentParameters([
    'Function to work with hash.',
    'Функция для работы с hash.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const HashLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/hash.ts' })
}

export const HashGetHash: Story = {
  name: 'getHash',
  ...getStoryForFunction(
    getHash,
    [
      'Get data from hash.',
      'Получение данных из хэша.'
    ],
    [
      demoStringName,
      demoNumberRandom
    ]
  )
}

export const HashSetHash: Story = {
  name: 'setHash',
  ...getStoryForFunction(
    setHash,
    [
      'Change data in hash.',
      'Изменение данных в хэше.'
    ],
    [
      demoStringName,
      demoNumberRandom
    ]
  )
}

export const HashRemoveHash: Story = {
  name: 'removeHash',
  ...getStoryForFunction(
    removeHash,
    [
      'Delete values from hash.',
      'Удаление значений из хэша.'
    ],
    [
      demoStringName
    ]
  )
}
