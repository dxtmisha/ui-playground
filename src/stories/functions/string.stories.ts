import type { Meta, StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../../../stories/parameters.ts'
import { getStoryForFunction } from '../../../stories/stories.ts'

import {
  getExp,
  replaceTemplate,
  strFill,
  toCamelCase,
  toCamelCaseFirst,
  toKebabCase
} from '../../../functions/string.ts'

import { demoString } from '../../../stories/demo/string.ts'

const meta = {
  title: 'Functions/string',
  parameters: getComponentParameters([
    'Function for working with strings.',
    'Функция для работы со строками.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

const demoArgs = [
  '(as a string)',
  'event?: ClipboardEvent',
  'The method',
  'is-date-value',
  'IS-DATE-VALUE',
  'isDateValue',
  'IsDateValue',
  'Is002DateValue001'
]

export const StringLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/string.ts' })
}

export const StringGetExp: Story = {
  name: 'getExp',
  ...getStoryForFunction(
    getExp,
    [
      'The object is used for matching text with a pattern.',
      'Конструктор создаёт объект регулярного выражения для сопоставления текста с шаблоном.'
    ],
    [
      demoString,
      ['i'],
      [undefined, '[:value]+']
    ]
  )
}

export const StringToCamelCase: Story = {
  name: 'toCamelCase',
  ...getStoryForFunction(
    toCamelCase,
    [
      'The method retrieves drag data (as a string) for the specified type. If the drag operation does not include data, this method returns an empty string.',
      'Метод извлекает данные перетаскивания (в виде строки) для указанного типа.'
    ],
    [demoArgs]
  )
}

export const StringToCamelCaseFirst: Story = {
  name: 'toCamelCaseFirst',
  ...getStoryForFunction(
    toCamelCaseFirst,
    [
      'Convert a String to Camel Case (+ first letter).',
      'Преобразование строки в Camel Case (+ первая буква).'
    ],
    [demoArgs]
  )
}

export const StringToKebabCase: Story = {
  name: 'toKebabCase',
  ...getStoryForFunction(
    toKebabCase,
    [
      'Convert a string to kebab case (lower).',
      'Преобразование строки в kebab case (lower).'
    ],
    [demoArgs]
  )
}

export const StringReplaceTemplate: Story = {
  name: 'replaceTemplate',
  ...getStoryForFunction(
    replaceTemplate,
    [
      'Replacing the value from replaces in value.',
      'Замена значения из replaces в value.'
    ],
    [
      ['[replaces] ... [value] / [replaces]'],
      [{
        value: 'new value',
        replaces: 'new replaces'
      }]
    ]
  )
}

export const StringStrFill: Story = {
  name: 'strFill',
  ...getStoryForFunction(
    strFill,
    [
      'The method creates a string of length count, consisting of the characters value.',
      'Метод создает строку длиной count, состоящую из символов value.'
    ],
    [
      ['a', 'hi'],
      [3, 9]
    ]
  )
}
