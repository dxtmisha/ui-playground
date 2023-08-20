import type { Meta, StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../composables/parameters.ts'
import { getStoryForFunction } from '../composables/stories.ts'

import {
  arrFill,
  copyObject,
  getColumn,
  getMaxLength,
  getMinLength,
  intersectKey,
  isDifferent,
  replaceRecursive,
  splice,
  toArray,
  uniqueArray
} from '../../../functions/object.ts'

import { demoUndefined } from '../demo/undefined.ts'
import { demoString } from '../demo/string.ts'
import { demoArray, demoArrayText } from '../demo/array.ts'
import { demoObject, demoObjectBig } from '../demo/object.ts'

const meta = {
  title: 'Functions/object',
  parameters: getComponentParameters([
    'Function for working with objects.',
    'Функция для работы с объектами.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const ObjectLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/object.ts' })
}

export const ObjectIsDifferent: Story = {
  name: 'isDifferent',
  ...getStoryForFunction(
    isDifferent,
    [
      'Checks if the values of two objects are different.',
      'Проверяет, различаются ли значения двух объектов.'
    ],
    [
      demoObject,
      [demoObject[demoObject.length - 1]]
    ]
  )
}

export const ObjectGetColumn: Story = {
  name: 'getColumn',
  ...getStoryForFunction(
    getColumn,
    [
      'Returns an array of values for a specific column in the input array.',
      'Возвращает массив значений для определенного столбца входного массива.'
    ],
    [
      demoObjectBig,
      ['d']
    ]
  )
}

export const ObjectGetMinLength: Story = {
  name: 'getMinLength',
  ...getStoryForFunction(
    getMinLength,
    [
      'Searches for the shortest string in the array and returns its length.',
      'Ищет самую короткую строку в массиве и возвращает её длину.'
    ],
    [
      demoArrayText
    ]
  )
}

export const ObjectGetMaxLength: Story = {
  name: 'getMaxLength',
  ...getStoryForFunction(
    getMaxLength,
    [
      'Searches for the longest string in the array and returns its length.',
      'Ищет самую длинную строку в массиве и возвращает её длину.'
    ],
    [
      demoArrayText
    ]
  )
}

export const ObjectCopyObject: Story = {
  name: 'copyObject',
  ...getStoryForFunction(
    copyObject,
    [
      'Creates a copy of a simple object.',
      'Создает копию простого объекта.'
    ],
    [
      demoObject
    ]
  )
}

export const ObjectUniqueArray: Story = {
  name: 'uniqueArray',
  ...getStoryForFunction(
    uniqueArray,
    [
      'Removes duplicate entries in an array.',
      'Удаляет повторяющиеся записи в массиве.'
    ],
    [
      demoArrayText
    ]
  )
}

export const ObjectArrFill: Story = {
  name: 'arrFill',
  ...getStoryForFunction(
    arrFill,
    [
      'The method creates an array of "count" elements with values equal to "value".',
      'Метод создает массив из "count" элементов со значениями равными "value"'
    ],
    [
      ['a', 'hi'],
      [3, 9]
    ]
  )
}

export const ObjectReplaceRecursive: Story = {
  name: 'replaceRecursive',
  ...getStoryForFunction(
    replaceRecursive,
    [
      'Merge one or more arrays recursively.',
      'Рекурсивное слияние одного или более массивов'
    ],
    [
      demoObjectBig,
      [demoObjectBig[demoObjectBig.length - 2]]
    ]
  )
}

export const ObjectSplice: Story = {
  name: 'splice',
  ...getStoryForFunction(
    splice,
    [
      'This method is used to copy the values of all enumerable own properties from one source object to a target object. In priority according to the processing list.',
      'Метод используется для копирования значений всех перечисляемых свойств одного объекта в другой. В приоритете по списку обработки.'
    ],
    [
      demoObjectBig,
      [demoObjectBig[demoObjectBig.length - 2]],
      ['b']
    ]
  )
}

export const ObjectIntersectKey: Story = {
  name: 'intersectKey',
  ...getStoryForFunction(
    intersectKey,
    [
      'Computes the intersection of arrays using keys for comparison.',
      'Вычислить пересечение массивов, сравнивая ключи.'
    ],
    [
      demoObjectBig,
      [demoObjectBig[demoObjectBig.length - 2]]
    ]
  )
}

export const ObjectToArray: Story = {
  name: 'toArray',
  ...getStoryForFunction(
    toArray,
    [
      'Conversion to array.',
      'Преобразование в массив.'
    ],
    [
      [
        ...demoUndefined,
        ...demoString,
        ...demoArray
      ]
    ]
  )
}
