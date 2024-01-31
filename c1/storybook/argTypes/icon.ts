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
      type: { summary: 'boolean' }
    }
  },
  turn: imageArgs.turn,
  disabled: imageArgs.disabled,
  hide: imageArgs.hide,
  icon: {
    ...imageArgs.value,
    description: 'Иконка обычного режима'
  },
  iconActive: {
    ...imageArgs.value,
    description: 'Иконка активного режима'
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
    description: 'Тип анимации при скрытии элемента'
  },
  animationShow: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Анимация появления после загрузки элемента'
  },
  overlay: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Добавление фона к элементу'
  },
  start: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Добавление сортировки элемента в начале узла DOM (order: 1)'
  },
  end: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Добавление сортировки элемента в конец узла DOM (order: 9999)'
  },
  high: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Добавление высоко позиционированного элемента (z-index: 16)'
  },

  // Tokens
  size: {
    control: StorybookControl.select,
    options: propsValues.size,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults?.size },
      type: { summary: propsValues.size.join(' | ') }
    }
  },
  rounded: {
    control: StorybookControl.select,
    options: propsValues.rounded,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults?.rounded },
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
