import { defaults, propsValues } from './../../../m3/Button/props'

import { type StorybookArgs, type StorybookArgsValue, StorybookControl } from '../../../types/storybook'
import { StorybookCategory } from '../types'

import { iconArgs } from './icon'

export const buttonArgs: StorybookArgs = {
  // Status
  selected: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Enable selection state<br>' +
      '<small>Включить состояние выделения</small>'
  },
  iconHide: {
    ...iconArgs.hide,
    description: 'Hides the left icon<br>' +
      '<small>Скрывает левую иконку</small>'
  },
  iconTurn: {
    ...iconArgs.turn,
    description: 'Flips the right icon. If there is no right, it flips the left<br>' +
      '<small>Переворачивает правую иконку. Если нет правой, переворачивает левую</small>'
  },
  loading: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Display of loading state<br>' +
      '<small>Отображение состояния загрузки</small>'
  },
  readonly: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Transition to read-only state<br>' +
      '<small>Переход в состояние только для чтения</small>'
  },
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Transition to the state is disabled<br>' +
      '<small>Переход в состояние отключено</small>'
  },

  // Value
  label: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'Label text<br>' +
      '<small>Текст метки</small>'
  },
  icon: {
    ...iconArgs.icon,
    description: 'Icon on the left<br>' +
      '<small>Иконка слева</small>'
  },
  iconTrailing: {
    ...iconArgs.icon,
    description: 'Icon on the right<br>' +
      '<small>Иконка справа</small>'
  },

  // Style
  adaptive: {
    control: StorybookControl.select,
    options: propsValues.adaptive,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults.adaptive },
      type: { summary: propsValues.adaptive.join(' | ') }
    },
    description: 'Adaptive hiding of button text depending on the screen width<br>' +
      '<small>Адаптивное скрытие текста кнопки в зависимости от ширины экрана</small>'
  },

  // Tokens
  elevated: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Elevated button<br>' +
      '<small>Повышенная кнопка</small>'
  },
  filled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: 'true' },
      type: { summary: 'boolean' }
    },
    description: 'Filled button<br>' +
      '<small>Заполненная кнопка</small>'
  },
  tonal: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Filled tonal button<br>' +
      '<small>Заполненная тональная кнопка</small>'
  },
  outlined: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Outlined button<br>' +
      '<small>Контурная кнопка</small>'
  },
  text: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Text button<br>' +
      '<small>Кнопка текст</small>'
  },
  height: {
    control: StorybookControl.select,
    options: propsValues.height,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.height },
      type: { summary: propsValues.height.join(' | ') }
    },
    description: 'Button height<br>' +
      '<small>Высота кнопки</small>'
  },
  palette: {
    control: StorybookControl.select,
    options: propsValues.palette,
    table: {
      category: StorybookCategory.token,
      type: { summary: propsValues.palette.join(' | ') }
    },
    description: 'Additional palettes. Use only if the task requires it<br>' +
      '<small>Дополнительные палитры. Использовать только если задача в этом требует</small>'
  }
}

export const buttonValues: StorybookArgsValue = {
  selected: false,
  label: 'Label'
}
