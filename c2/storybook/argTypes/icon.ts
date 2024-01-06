import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook.ts'
import { StorybookCategory } from '../types.ts'

import { imageArgs } from './image.ts'

export const iconArgs: StorybookArgs = {
  icon: {
    ...imageArgs.value,
    description: 'Значение иконки или объект со всеми свойствами для иконки'
  },
  iconActive: {
    ...imageArgs.value,
    description: 'Значение активной иконки или объект со всеми свойствами для активной иконки. ' +
      'Эта иконка используется при включении свойства \'active\''
  },
  active: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Анимированный переход на активную иконку'
  },
  turn: imageArgs.turn,
  disabled: imageArgs.disabled,
  hide: imageArgs.hide,
  animationType: {
    control: StorybookControl.select,
    options: [
      'type1',
      'type2'
    ],
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'type1' },
      type: { summary: 'type1 | type2' }
    },
    description: 'Тип анимации при скрытии элемента'
  },
  animationShow: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Анимация появления после загрузки элемента'
  },
  start: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Добавление сортировки элемента в начале узла DOM (order: 1)'
  },
  end: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Добавление сортировки элемента в конец узла DOM (order: 9999)'
  },
  high: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Добавление высоко позиционированного элемента (z-index: 16)'
  }
}

export const iconValues: StorybookArgsValue = {
  icon: 'search',
  iconActive: 'home'
}
