import { type Meta, type StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../composables/parameters.ts'
import { getStoryForFunction } from '../composables/stories.ts'

import { toDate } from '../../../functions/date.ts'

const meta = {
  title: 'Functions/date',
  parameters: getComponentParameters([
    'Function for working with dates.',
    'Функция для работы с датами.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

const demoArgs = [
  undefined,
  null,
  '20100819',
  '201008',
  '2010',
  '2010-08-19T20:10:05+20:00',
  '2010-08-19T20:10:05+2000',
  '2010-08-19 20:10:05+2000',
  '2010-08-19 20:10:05',
  '2010-08-19 20:10',
  '2010-08-19',
  '2010-08',
  new Date(),
  1691923717503
]

export const DateLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/date.ts' })
}

export const DateToDate: Story = {
  name: 'toDate',
  ...getStoryForFunction(
    toDate,
    [
      'Conversion to Date object.',
      'Преобразование в объект Date.'
    ],
    [demoArgs]
  )
}
