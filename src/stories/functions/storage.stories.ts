import type { Meta, StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../composables/parameters.ts'
import { getStoryForFunction } from '../composables/stories.ts'

import { getSession, getStorage, setSession, setStorage } from '../../../functions/storage.ts'

import { demoNumberRandom } from '../demo/number.ts'
import { demoStringName } from '../demo/string.ts'
import { demoFunction } from '../demo/function.ts'

const meta = {
  title: 'Functions/storage',
  parameters: getComponentParameters([
    'Function for working with storages.',
    'Функция для работы с хранилищами.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>;

export default meta

export const StorageLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/storage.ts' })
}

export const StorageGetStorage: Story = {
  name: 'getStorage',
  ...getStoryForFunction(
    getStorage,
    [
      'Getting data from local storage.',
      'Получение данных из локального хранилища.'
    ],
    [
      demoStringName,
      [
        ...demoNumberRandom,
        ...demoFunction
      ],
      [5]
    ]
  )
}

export const StorageSetStorage: Story = {
  name: 'setStorage',
  ...getStoryForFunction(
    setStorage,
    [
      'Changing data in local storage.',
      'Изменение данных в локальном хранилище.'
    ],
    [
      demoStringName,
      demoNumberRandom
    ]
  )
}

export const StorageGetSession: Story = {
  name: 'getSession',
  ...getStoryForFunction(
    getSession,
    [
      'Getting data from the session.',
      'Получение данных из сессии.'
    ],
    [
      demoStringName,
      [
        ...demoNumberRandom,
        ...demoFunction
      ],
      [5]
    ]
  )
}

export const StorageSetSession: Story = {
  name: 'setSession',
  ...getStoryForFunction(
    setSession,
    [
      'Changing data in storage.',
      'Изменение данных в хранилище.'
    ],
    [
      demoStringName,
      demoNumberRandom
    ]
  )
}
