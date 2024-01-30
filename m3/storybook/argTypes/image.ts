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
    }
  },
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  },
  hide: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
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
      'Visibility (off)': 'visibility_off',
      'Image (1)': 'https://drscdn.500px.org/photo/294267357/q%3D80_m%3D2000/v2?sig=03989c1970e5921d8ab67b23e03e79b8db13b7e7d3bc3f72829cc9eecbb42cf4',
      'Image (2)': 'https://drscdn.500px.org/photo/292683549/q%3D80_m%3D2000/v2?sig=bcf16bbbd7b11052a17012bf2be91a0c95edb8d0a45f2928ab72b027ca30fb85'
    },
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'The value can be the name of an icon, a link to an image, or a File object<br>' +
      '<small>Значение может быть названием иконки, ссылкой на изображение или объектом File</small>'
  },

  // Image
  coordinator: {
    control: StorybookControl.object,
    table: {
      category: 'Image',
      type: { summary: 'number[]' }
    },
    description: 'Crop image<br>' +
      '<small>Кроп изображения</small>'
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
    description: 'You can enter the type of scaling or the value in percent<br>' +
      '<small>Можно ввести тип масштабирования или значение в процентах</small>'
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
  },

  // Image/ Adaptive
  adaptive: {
    control: StorybookControl.boolean,
    table: {
      category: 'Image/ Adaptive',
      type: { summary: 'boolean' }
    },
    description: 'Enabling the mode of adapting the size of the image<br>' +
      '<small>Включение режима адаптации размера изображения</small>'
  },
  adaptiveGroup: {
    control: StorybookControl.text,
    table: {
      category: 'Image/ Adaptive',
      defaultValue: { summary: 'main' },
      type: { summary: 'string' }
    },
    description: 'Group name<br>' +
      '<small>Название группы</small>'
  },
  adaptiveAlways: {
    control: StorybookControl.boolean,
    table: {
      category: 'Image/ Adaptive',
      type: { summary: 'boolean' }
    },
    description: 'Always adapts the size of the image, even if the element has gone beyond the screen<br>' +
      '<small>Всегда адаптирует размер изображения, даже если элемент вышел за пределы экрана</small>'
  },
  objectWidth: {
    control: StorybookControl.number,
    table: {
      category: 'Image/ Adaptive',
      type: { summary: 'number' }
    },
    description: 'The width of the product in the image<br>' +
      '<small>Ширина продукта на изображении</small>'
  },
  objectHeight: {
    control: StorybookControl.number,
    table: {
      category: 'Image/ Adaptive',
      type: { summary: 'number' }
    },
    description: 'The height of the product in the image<br>' +
      '<small>Высота продукта на изображении</small>'
  }
}

export const imageValues: StorybookArgsValue = {
  turn: false,
  disabled: false,
  hide: false,
  value: 'search'
}
