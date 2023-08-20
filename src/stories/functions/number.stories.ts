import type { Meta, StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../../../stories/parameters.ts'
import { getStoryForFunction } from '../../../stories/stories.ts'

import { isIntegerBetween, random, toNumber } from '../../../functions/number.ts'

import { demoNumberStringBig } from '../../../stories/demo/number.ts'

const meta = {
  title: 'Functions/number',
  parameters: getComponentParameters([
    'Function for working with numbers.',
    'Функция для работы с числами.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const NumberLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/number.ts' })
}

export const NumberIsIntegerBetween: Story = {
  name: 'isIntegerBetween',
  ...getStoryForFunction(
    isIntegerBetween,
    [
      'Checks if the value is between integers.',
      'Проверяет, лежит ли значение между целыми числами.'
    ],
    [
      [1],
      [1, 1.1, 1.5, 1.9, 2, 2.1]
    ]
  )
}

export const NumberRandom: Story = {
  name: 'random',
  ...getStoryForFunction(
    random,
    [
      'Generate a random integer.',
      'Генерирует случайное число.'
    ],
    [
      [1, 100],
      [10, 999]
    ]
  )
}

export const NumberToNumber: Story = {
  name: 'toNumber',
  ...getStoryForFunction(
    toNumber,
    [
      'The method parses a string argument and returns a floating point number.',
      'Метод принимает строку в качестве аргумента и возвращает десятичное число.'
    ],
    [
      demoNumberStringBig
    ]
  )
}
