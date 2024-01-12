import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook.ts'
import { StorybookCategory } from '../types.ts'

import { imageArgs } from './image.ts'
import { defaults, propsValues } from '../../Icon/props.ts'

export const iconArgs: StorybookArgs = {
  // Status
  active: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Animated transition to the active icon<br>' +
      '<small>Анимированный переход на активную иконку</small>'
  },
  turn: imageArgs.turn,
  disabled: imageArgs.disabled,
  hide: imageArgs.hide,
  icon: {
    ...imageArgs.value,
    description: 'The value of the icon or an object with all properties for the icon<br>' +
      '<small>Значение иконки или объект со всеми свойствами для иконки</small>'
  },
  iconActive: {
    ...imageArgs.value,
    description: 'The value of the active icon or an object with all properties for the active icon. ' +
      'This icon is used when the \'active\' property is enabled<br>' +
      '<small>Значение активной иконки или объект со всеми свойствами для активной иконки. ' +
      'Эта иконка используется при включении свойства \'active\'.</small>'
  },

  // Style
  animationType: {
    control: StorybookControl.select,
    options: propsValues.animationType,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults.animationType },
      type: { summary: propsValues.animationType.join(' | ') }
    },
    description: 'Type of animation when hiding an element<br>' +
      '<small>Тип анимации при скрытии элемента</small>'
  },
  animationShow: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Animation of appearance after element loading<br>' +
      '<small>Анимация появления после загрузки элемента</small>'
  },
  overlay: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Adding a background to the element<br>' +
      '<small>Добавление фона к элементу</small>'
  },
  dynamic: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Adding a reaction to hover/active/focus events<br>' +
      '<small>Добавление реакции на события hover/active/focus</small>'
  },
  start: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Adding sorting of the element at the beginning of the DOM node (order: 1)<br>' +
      '<small>Добавление сортировки элемента в начале узла DOM (order: 1)</small>'
  },
  end: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Adding sorting of the element at the end of the DOM node (order: 9999)<br>' +
      '<small>Добавление сортировки элемента в конец узла DOM (order: 9999)</small>'
  },
  high: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Adding a highly positioned element (order: 16)<br>' +
      '<small>Добавление высоко позиционированного элемента (z-index: 16)</small>'
  },

  // Tokens
  size: {
    control: StorybookControl.select,
    options: propsValues.size,
    table: {
      category: StorybookCategory.token,
      type: { summary: propsValues.size.join(' | ') }
    },
    description: 'Sets the size of the element<br>' +
      '<small>Задает размер элемента</small>'
  },
  rounded: {
    control: StorybookControl.select,
    options: propsValues.rounded,
    table: {
      category: StorybookCategory.token,
      type: { summary: propsValues.rounded.join(' | ') }
    },
    description: 'Sets the roundness of the element’s corners<br>' +
      '<small>Задает закругленность углов элемента</small>'
  }
}

export const iconValues: StorybookArgsValue = {
  active: false,
  icon: 'search',
  iconActive: 'home'
}
