import type { Meta, StoryObj } from '@storybook/vue3'
import { random } from '../../../functions/number.ts'

import { getComponentParameters } from '../../../stories/parameters.ts'
import { getStoryForFunction } from '../../../stories/stories.ts'

import { getCache } from '../../../functions/cache.ts'

import { demoStringName } from '../../../stories/demo/string.ts'

const meta = {
  title: 'Functions/cache',
  parameters: getComponentParameters([
    'Function for working with simple data caching.',
    'Функция для работы с простым кешированием данных.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const CacheLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/cache.ts' })
}

export const CacheGetCache: Story = {
  name: 'getCache',
  ...getStoryForFunction(
    getCache,
    [
      'Getting data for the cache, and if there is no cache, it performs a function to save the cache.',
      'Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.'
    ],
    [
      demoStringName,
      [
        () => random(100, 999),
        () => random(100, 999),
        () => () => random(1000, 9999)
      ]
    ]
  )
}
