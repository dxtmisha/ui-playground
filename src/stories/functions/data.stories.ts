import { Meta, StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../composables/parameters.ts'
import { getStoryForFunction } from '../composables/stories.ts'

import {
  executeFunction,
  isFilled,
  isFunction,
  isNull,
  isObject,
  isSelected,
  isSelectedByList,
  transformation
} from '../../../functions/data.ts'

import { demoUndefined, demoUndefinedString } from '../demo/undefined.ts'
import { demoBoolean, demoBooleanString } from '../demo/boolean.ts'
import { demoNumber, demoNumberString } from '../demo/number.ts'
import { demoString } from '../demo/string.ts'
import { demoArray, demoArrayString, demoArrayText } from '../demo/array.ts'
import { demoObject, demoObjectString } from '../demo/object.ts'
import { demoFunction } from '../demo/function.ts'

const meta = {
  title: 'Functions/data',
  parameters: getComponentParameters([
    'Basic function for working with data.',
    'Базовая функция для работы с данными.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const DataLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/data.ts' })
}

export const DataIsNull: Story = {
  name: 'isNull',
  ...getStoryForFunction(
    isNull,
    [
      'Is the variable equal to null or undefined.',
      'Является ли переменная равной null или undefined.'
    ],
    [
      [
        ...demoUndefined,
        ...demoString
      ]
    ]
  )
}

export const DataIsObject: Story = {
  name: 'isObject',
  ...getStoryForFunction(
    isObject,
    [
      'Checks if a value is an object.',
      'Проверяет, является ли значение объектом.'
    ],
    [
      [
        ...demoUndefined,
        ...demoString,
        ...demoArray,
        ...demoObject
      ]
    ]
  )
}

export const DataIsFunction: Story = {
  name: 'isFunction',
  ...getStoryForFunction(
    isFunction,
    [
      'Checks if the function is a callback function.',
      'Проверяет, является ли функция обратного вызова.'
    ],
    [
      [
        ...demoUndefined,
        ...demoFunction
      ]
    ]
  )
}

export const DataIsFilled: Story = {
  name: 'isFilled',
  ...getStoryForFunction(
    isFilled,
    [
      'Checks if the field is filled.',
      'Проверяет, заполнено ли поле.'
    ],
    [
      [
        ...demoUndefined,
        ...demoUndefinedString,
        ...demoBoolean,
        ...demoBooleanString,
        ...demoNumber,
        ...demoNumberString,
        ...demoString,
        ...demoObject,
        ...demoArray
      ]
    ]
  )
}

export const DataIsSelected: Story = {
  name: 'isSelected',
  ...getStoryForFunction(
    isSelected,
    [
      'Checks if value is in the array selected or if value equals selected, if selected is a string.',
      'Проверяет, есть ли value в массиве selected или равен ли value selected, если selected - строка.'
    ],
    [
      [
        ...demoString
      ],
      [
        ...demoString,
        ...demoArrayText
      ]
    ]
  )
}

export const DataIsSelectedByList: Story = {
  name: 'isSelectedByList',
  ...getStoryForFunction(
    isSelectedByList,
    [
      'Testing isSelected property for the entire list of values.',
      'Проверка свойства isSelected для всех значений списка.'
    ],
    [
      [
        ...demoArrayText
      ],
      [
        ...demoString,
        ...demoArrayText
      ]
    ]
  )
}

export const DataExecuteFunction: Story = {
  name: 'executeFunction',
  ...getStoryForFunction(
    executeFunction,
    [
      'The function is executed and returns its result. Or returns the input data, if it is not a function.',
      'Выполняется функция и возвращает ее результат. Или возвращает входные данные, если это не функция.'
    ],
    [
      [
        ...demoUndefined,
        ...demoNumber,
        ...demoFunction
      ]
    ]
  )
}

export const DataTransformation: Story = {
  name: 'transformation',
  ...getStoryForFunction(
    transformation,
    [
      'Converts the input value to one of the available types.',
      'Преобразует входное значение в один из доступных типов.'
    ],
    [
      [
        ...demoUndefinedString,
        ...demoBooleanString,
        ...demoNumberString,
        ...demoString,
        ...demoObjectString,
        ...demoArrayString,
        ...demoFunction
      ]
    ]
  )
}
