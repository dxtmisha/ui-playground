import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook.ts'
import { StorybookCategory } from '../types.ts'

const percentValue: string[] = [
  '0%',
  '10%',
  '25%',
  '50%',
  '75%',
  '100%'
]

export const imageArgs: StorybookArgs = {
  // Status
  turn: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    },
    description: 'Flips the icon or image upside down<br>' +
      '<small>Переворачивает иконку или изображение вниз</small>'
  },
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    },
    description: 'If true, the icon or image is transformed into an inactive state<br>' +
      '<small>Если true, иконка или изображение преобразуется в неактивное состояние</small>'
  },
  hide: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    },
    description: 'Hides the icon or image<br>' +
      '<small>Скрывает иконку или изображение</small>'
  },

  // Values
  value: {
    control: StorybookControl.select,
    options: {
      Search: 'search',
      Home: 'home',
      'Account circle': 'account_circle',
      Settings: 'settings',
      Done: 'done',
      Info: 'info',
      'Check circle': 'check_circle',
      Delete: 'delete',
      Visibility: 'visibility',
      'Image (1)': 'https://drscdn.500px.org/photo/294267357/q%3D80_m%3D2000/v2?sig=03989c1970e5921d8ab67b23e03e79b8db13b7e7d3bc3f72829cc9eecbb42cf4',
      'Image (2)': 'https://drscdn.500px.org/photo/292683549/q%3D80_m%3D2000/v2?sig=bcf16bbbd7b11052a17012bf2be91a0c95edb8d0a45f2928ab72b027ca30fb85'
    },
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'The input value can be the name of an icon, a link to an image, or a File object<br>' +
      '<small>Входное значение может быть названием иконки, ссылкой на изображение или объектом File</small>'
  },

  // Image
  coordinator: {
    control: StorybookControl.object,
    table: {
      category: 'Image',
      type: { summary: 'number[]' }
    },
    description: 'Coordinates by which the central part of the image will be determined. Works only for images<br>' +
      '<small>Координаты, по которым будет определяться центральная часть изображения. Работает только для изображений</small>'
  },
  size: {
    control: StorybookControl.select,
    options: [
      'auto',
      'contain',
      'cover',
      ...percentValue
    ],
    table: {
      category: 'Image',
      defaultValue: { summary: 'cover' },
      type: { summary: 'auto | contain | cover | percent' }
    },
    description: 'Image scaling. You can enter the type of scaling or the value in percent<br>' +
      '<small>Масштабирование изображения. Можно ввести тип масштабирования или значение в процентах</small>'
  },
  x: {
    control: StorybookControl.select,
    options: percentValue,
    table: {
      category: 'Image',
      type: { summary: 'percent' }
    },
    description: 'Image shift along the x-plane. Does not work with coordinates/size<br>' +
      '<small>Сдвиг изображения по x-плоскости. Не работает с coordinates/size</small>'
  },
  y: {
    control: StorybookControl.select,
    options: percentValue,
    table: {
      category: 'Image',
      type: { summary: 'percent' }
    },
    description: 'Image shift along the y-plane. Does not work with coordinates/size<br>' +
      '<small>Сдвиг изображения по y-плоскости. Не работает с coordinates/size</small>'
  }
}

export const imageValues: StorybookArgsValue = {
  turn: false,
  value: 'search'
}
