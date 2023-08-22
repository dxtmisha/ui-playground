import { type Meta, type StoryObj } from '@storybook/vue3'

import { getComponentParameters } from '../../../stories/parameters.ts'
import { getStoryForFunction } from '../../../stories/stories.ts'

import {
  findGeo,
  getCountry,
  getGeo,
  getGeoCode,
  getGeoStandard,
  getLanguage,
  setGeo
} from '../../../functions/geo.ts'

const meta = {
  title: 'Functions/geo',
  parameters: getComponentParameters([
    'A function for working with geolocation.',
    'Функция для работы с геопозиции.'
  ]),
  tags: ['autodocs']
} satisfies Meta

type Story = StoryObj<typeof meta>

export default meta

export const GeoLink: Story = {
  name: 'Link',
  render: () => ({ template: 'functions/geo.ts' })
}

export const GeoGetGeo: Story = {
  name: 'getGeo',
  ...getStoryForFunction(
    getGeo,
    [
      'Information about the current country.',
      'Информация об текущей стране.'
    ],
    [[undefined]]
  )
}

export const GeoGetLanguage: Story = {
  name: 'getLanguage',
  ...getStoryForFunction(
    getLanguage,
    [
      'Current language.',
      'Текущий язык.'
    ],
    [[undefined]]
  )
}

export const GeoGetCountry: Story = {
  name: 'getCountry',
  ...getStoryForFunction(
    getCountry,
    [
      'Current country.',
      'Текущая страна.'
    ],
    [[undefined]]
  )
}

export const GeoGetGeoStandard: Story = {
  name: 'getGeoStandard',
  ...getStoryForFunction(
    getGeoStandard,
    [
      'Full format according to the standard.',
      'Полный формат согласно стандарту.'
    ],
    [[undefined, findGeo('KR')]]
  )
}

export const GeoGetGeoCode: Story = {
  name: 'getGeoCode',
  ...getStoryForFunction(
    getGeoCode,
    [
      'Full format.',
      'Полный формат.'
    ],
    [[undefined]]
  )
}

export const GeoSetGeo: Story = {
  name: 'setGeo',
  ...getStoryForFunction(
    setGeo,
    [
      'Changes the data by the full code.',
      'Изменяет данные по полному коду.'
    ],
    [['vi-VN'], [true]]
  )
}

export const GeoFindGeo: Story = {
  name: 'findGeo',
  ...getStoryForFunction(
    findGeo,
    [
      'Determines the current country by its full name.',
      'Определяет текущую страну по ее полному названию.'
    ],
    [['en-US', 'us-US', 'ru-RU', 'vi-VN', 'KR']]
  )
}
