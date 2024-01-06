import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook.ts'
import { StorybookCategory } from '../types.ts'

import { imageArgs } from './image.ts'
import { defaults, propsValues } from '../../Icon/props.ts'

export const iconArgs: StorybookArgs = {
  icon: {
    ...imageArgs.value,
    description: 'The value of the icon or an object with all properties for the icon'
  },
  iconActive: {
    ...imageArgs.value,
    description: 'The value of the active icon or an object with all properties for the active icon. ' +
      'This icon is used when the \'active\' property is enabled'
  },
  active: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Animated transition to the active icon'
  },
  turn: imageArgs.turn,
  disabled: imageArgs.disabled,
  hide: imageArgs.hide,
  animationType: {
    control: StorybookControl.select,
    options: propsValues.animationType,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults.animationType },
      type: { summary: propsValues.animationType.join(' | ') }
    },
    // Тип анимации при скрытии элемента
    description: 'Type of animation when hiding an element'
  },
  animationShow: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    // Анимация появления после загрузки элемента
    description: 'Animation of appearance after element loading'
  },
  overlay: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    // Добавление фона к элементу
    description: 'Adding a background to the element'
  },
  dynamic: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    // Добавление реакции на события hover/active/focus
    description: 'Adding a reaction to hover/active/focus events'
  },
  start: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    // Добавление сортировки элемента в начале узла DOM (order: 1)
    description: 'Adding sorting of the element at the beginning of the DOM node (order: 1)'
  },
  end: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    // Добавление сортировки элемента в конец узла DOM (order: 9999)
    description: 'Adding sorting of the element at the end of the DOM node (order: 9999)'
  },
  high: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    // Добавление высоко позиционированного элемента (z-index: 16)
    description: 'Adding a highly positioned element (order: 16)'
  },
  size: {
    control: StorybookControl.select,
    options: propsValues.size,
    table: {
      category: StorybookCategory.token,
      type: { summary: propsValues.size.join(' | ') }
    },
    // Задает размер элемента
    description: 'Sets the size of the element'
  },
  rounded: {
    control: StorybookControl.select,
    options: propsValues.rounded,
    table: {
      category: StorybookCategory.token,
      type: { summary: propsValues.rounded.join(' | ') }
    },
    // Задает закругленность углов элемента
    description: 'Sets the roundness of the element’s corners'
  }
}

export const iconValues: StorybookArgsValue = {
  icon: 'search',
  iconActive: 'home'
}
