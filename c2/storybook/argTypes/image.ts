import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook.ts'
import { StorybookCategory } from '../types.ts'

const nPlane: string[] = [
  '0%',
  '10%',
  '25%',
  '50%',
  '75%',
  '100%'
]

export const imageArgs: StorybookArgs = {
  value: {
    control: StorybookControl.select,
    options: {
      Search: 'search',
      Home: 'home',
      'Account circle': 'account_circle',
      'Image (1)': 'https://drscdn.500px.org/photo/294267357/q%3D80_m%3D2000/v2?sig=03989c1970e5921d8ab67b23e03e79b8db13b7e7d3bc3f72829cc9eecbb42cf4',
      'Image (2)': 'https://drscdn.500px.org/photo/292683549/q%3D80_m%3D2000/v2?sig=bcf16bbbd7b11052a17012bf2be91a0c95edb8d0a45f2928ab72b027ca30fb85'
    },
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'Входное значение может быть названием иконки, ссылкой на изображение или объектом File'
  },
  // Status
  turn: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Переворачивает иконку или изображение вниз'
  },
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Если true, иконка или изображение преобразуется в неактивное состояние'
  },
  hide: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Скрывает иконку или изображение'
  },
  // Image
  coordinator: {
    control: StorybookControl.object,
    table: {
      category: 'Image',
      type: { summary: 'number[]' }
    },
    description: 'Координаты, по которым будет определяться центральная часть изображения. Работает только для изображений'
  },
  size: {
    control: StorybookControl.select,
    options: [
      'auto',
      'contain',
      'cover',
      ...nPlane
    ],
    table: {
      category: 'Image',
      defaultValue: { summary: 'cover' },
      type: { summary: 'auto | contain | cover | процент' }
    },
    description: 'Масштабирование изображения. Можно ввести тип масштабирования или значение в процентах'
  },
  x: {
    control: StorybookControl.select,
    options: nPlane,
    table: {
      category: 'Image',
      type: { summary: 'процент' }
    },
    description: 'Сдвиг изображения по x-плоскости. Не работает с coordinates/size'
  },
  y: {
    control: StorybookControl.select,
    options: nPlane,
    table: {
      category: 'Image',
      type: { summary: 'процент' }
    },
    description: 'Сдвиг изображения по y-плоскости. Не работает с coordinates/size'
  }
}

export const imageValues: StorybookArgsValue = {
  value: 'search'
}
