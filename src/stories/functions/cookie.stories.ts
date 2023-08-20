import { type Meta, type StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../composables/parameters.ts'
import { getStoryForFunction } from '../composables/stories.ts'

import {
  getCookie,
  removeCookie,
  setCookie
} from '../../../functions/cookie.ts'

import { demoString, demoStringName } from '../demo/string.ts'

const meta = {
  title: 'Functions/cookie',
  parameters: getComponentParameters([
    'Function for working with cookies.',
    'Функция для работы с cookie.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const CookieLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/cookie.ts' })
}

export const CookieGetCookie: Story = {
  name: 'getCookie',
  ...getStoryForFunction(
    getCookie,
    [
      'Get data or update if none.',
      'Получает данные или обновляет, если их нет.'
    ],
    [
      demoStringName,
      demoString
    ]
  )
}

export const CookieSetCookie: Story = {
  name: 'setCookie',
  ...getStoryForFunction(
    setCookie,
    [
      'Updates cookie data.',
      'Обновляет данные cookie.'
    ],
    [
      demoStringName,
      ['new value']
    ]
  )
}

export const CookieRemoveCookie: Story = {
  name: 'removeCookie',
  ...getStoryForFunction(
    removeCookie,
    [
      'Delete cookie data.',
      'Удаление данных из cookie.'
    ],
    [
      demoStringName
    ]
  )
}
