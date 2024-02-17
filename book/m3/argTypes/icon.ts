import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from './../../../types/storybook'
import { StorybookCategory } from '../types'

import { imageArgs } from './image'
import { defaults, propsValues } from './../../../m3/Icon/props'

export const iconArgs: StorybookArgs = {
  // Status
  active: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  },
  turn: imageArgs.turn,
  disabled: imageArgs.disabled,
  hide: imageArgs.hide,
  icon: {
    ...imageArgs.value,
    description: 'Icon for normal mode<br>' +
      '<small>Иконка обычного режима</small>'
  },
  iconActive: {
    ...imageArgs.value,
    description: 'Icon for active mode<br>' +
      '<small>Иконка активного режима</small>'
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
    }
  },
  rounded: {
    control: StorybookControl.select,
    options: propsValues.rounded,
    table: {
      category: StorybookCategory.token,
      type: { summary: propsValues.rounded.join(' | ') }
    }
  }
}

export const iconValues: StorybookArgsValue = {
  active: false,
  turn: false,
  disabled: false,
  hide: false,
  icon: 'visibility',
  iconActive: 'visibility_off'
}
