import { type Meta, type StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../../../stories/parameters.ts'
import { getStoryForFunction } from '../../../stories/stories.ts'

import { getRef, toRefItem } from '../../../functions/ref.ts'

import { demoRef } from '../../../stories/demo/ref.ts'
import { demoString } from '../../../stories/demo/string.ts'

const meta = {
  title: 'Functions/ref',
  parameters: getComponentParameters([
    'Function to work with Vue reactive variables.',
    'Функция для работы с реактивными переменными Vue.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const RefLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/ref.ts' })
}

export const RefGetRef: Story = {
  name: 'getRef',
  ...getStoryForFunction(
    getRef,
    [
      'You return the values of the ref variable or the variable itself if it is not reactive.',
      'Возвращаешь значения ref переменной или саму переменную, если она не реактивная.'
    ],
    [
      [
        ...demoRef,
        ...demoString
      ]
    ]
  )
}

export const RefToRefItem: Story = {
  name: 'toRefItem',
  ...getStoryForFunction(
    toRefItem,
    [
      'Returns a regular variable or wraps it in a regular variable if it is an ordinary variable.',
      'Возвращает регулярный переменный или оборачивает его в регулярный переменный, если является обычным переменным.'
    ],
    [
      [
        ...demoRef,
        ...demoString
      ]
    ]
  )
}
