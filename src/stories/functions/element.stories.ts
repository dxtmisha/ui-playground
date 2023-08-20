import type { Meta, StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../../../stories/parameters.ts'
import { getStoryForFunction } from '../../../stories/stories.ts'

import {
  createElement,
  getAttributes,
  getElement,
  getElementId,
  getElementItem,
  getElementOrWindow,
  isInDom,
  isWindow,
  setElementItem
} from '../../../functions/element.ts'

import {
  demoElement,
  demoElementItem,
  demoElementString,
  demoElementWindow
} from '../../../stories/demo/element.ts'

const meta = {
  title: 'Functions/element',
  parameters: getComponentParameters([
    'Function for working with elements.',
    'Функция для работы с элементами.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const ElementLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/element.ts' })
}

export const ElementIsWindow: Story = {
  name: 'isWindow',
  ...getStoryForFunction(
    isWindow,
    [
      'Checks if object is Window.',
      'Проверяет, является ли объект Window.'
    ],
    [
      demoElementWindow
    ]
  )
}

export const ElementIsInDom: Story = {
  name: 'isInDom',
  ...getStoryForFunction(
    isInDom,
    [
      'Checks if an element is still in the DOM tree.',
      'Проверяет, находится ли еще элемент в дереве DOM.'
    ],
    [
      demoElement
    ]
  )
}

export const ElementGetElement: Story = {
  name: 'getElement',
  ...getStoryForFunction(
    getElement,
    [
      'Returns the first Element in the document that matches the specified selector or the element.',
      'Возвращает первый Element документа, который соответствует указанному селектору или саму element.'
    ],
    [
      [
        ...demoElement,
        ...demoElementString
      ]
    ]
  )
}

export const ElementGetElementOrWindow: Story = {
  name: 'getElementOrWindow',
  ...getStoryForFunction(
    getElementOrWindow,
    [
      'Returns window or element.',
      'Возвращает окно или элемент.'
    ],
    [
      [
        ...demoElementWindow,
        ...demoElementString
      ]
    ]
  )
}

export const ElementGetElementId: Story = {
  name: 'getElementId',
  ...getStoryForFunction(
    getElementId,
    [
      'Returns the identifier (ID) of the element or creates it if the element has no ID.',
      'Возвращает идентификатор (ID) элемента или создает его, если у элемента нет ID.'
    ],
    [
      demoElement
    ]
  )
}

export const ElementGetElementItem: Story = {
  name: 'getElementItem',
  ...getStoryForFunction(
    getElementItem,
    [
      'Returns the value of an element by its key.',
      'Возвращает значение элемента по его ключу.'
    ],
    [
      demoElement,
      demoElementItem
    ]
  )
}

export const ElementGetAttributes: Story = {
  name: 'getAttributes',
  ...getStoryForFunction(
    getAttributes,
    [
      'Gets a list of attributes of an element.',
      'Получает список атрибутов у элемента.'
    ],
    [
      demoElement
    ]
  )
}

export const ElementSetElementItem: Story = {
  name: 'setElementItem',
  ...getStoryForFunction(
    setElementItem,
    [
      'Modifies the value of an element identified by its key.',
      'Изменяет значение элемента, определенного ключом.'
    ],
    [
      demoElement,
      ['dataset'],
      [{ name: 'Andy' }]
    ]
  )
}

export const ElementCreateElement: Story = {
  name: 'createElement',
  ...getStoryForFunction(
    createElement,
    [
      'In an HTML document.',
      'В HTML-документах создаёт элемент c тем тегом, что указан в аргументе.'
    ],
    [
      demoElement,
      ['dev'],
      [
        {
          class: 'new-item',
          dataset: { name: 'Andy' }
        },
        () => (element: HTMLElement) => {
          element.className = 'new-function'
        }
      ]
    ]
  )
}
