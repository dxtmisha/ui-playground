import { defaults, propsValues } from '../../Button/props.ts'

import { type StorybookArgs, type StorybookArgsValue, StorybookControl } from '../../../types/storybook.ts'
import { StorybookCategory } from '../types.ts'

import { iconArgs } from './icon.ts'

export const buttonArgs: StorybookArgs = {
  selected: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    // Enable selection state
    description: 'Включить состояние выделения'
  },
  iconHide: {
    ...iconArgs.hide,
    // Hides the left icon
    description: 'Скрывает левую иконку'
  },
  iconTurn: {
    ...iconArgs.turn,
    // Flips the right icon. If there is no right, it flips the left
    description: 'Переворачивает правую иконку. Если нет правой, переворачивает левую'
  },
  loading: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    // Display of loading state
    description: '[<b>В разработке</b>] Отображение состояния загрузки'
  },
  skeleton: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    // Display of skeleton state
    description: '[<b>Не реализовано</b>] Отображение состояния скелетона'
  },
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    // Transition to the state is disabled
    description: 'Переход в состояние отключено'
  },
  label: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'Текст на кнопке. Не обязательно, если есть иконка'
  },
  icon: {
    ...iconArgs.icon,
    // Icon on the left
    description: '[<b>В разработке</b>] Иконка слева'
  },
  iconTrailing: {
    ...iconArgs.icon,
    // Icon on the right
    description: '[<b>В разработке</b>] Иконка справа'
  },
  primary: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.primary },
      type: { summary: 'boolean' }
    },
    // Main button
    description: '<b>Основная кнопка</b>.<br>Используется для: самое важное действие для продвижения в процессе, подтверждения и закрытия, или завершения задачи'
  },
  secondary: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    // Secondary button
    description: '<b>Вторичная кнопка</b>.<br>Используется для: большая часть действий соответствующих другому содержанию'
  },
  outline: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: '<b>Outline кнопки менее приоритетны, чем Secondary кнопки</b>.<br>' +
      'Используется для: большая часть действий соответствующих другому содержанию'
  },
  ghost: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: '<b>Ghost кнопки имеют наименьший приоритет</b>.<br>' +
      'Используется для: действия для отмены предоставляют пользователям способ выйти из чего-либо, ' +
      'позволяя им отменить, ничего не делать, отклонить или пропустить'
  },
  link: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: '<b>Кнопка в виде ссылки</b>'
  },
  size: {
    control: StorybookControl.select,
    options: propsValues.size,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.size },
      type: { summary: propsValues.size.join(' | ') }
    },
    description: 'Размер кнопки'
  },
  intent: {
    control: StorybookControl.select,
    options: propsValues.intent,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.intent },
      type: { summary: propsValues.intent.join(' | ') }
    },
    description: 'Кнопки распределены по ролям, для обозначения типов действия. ' +
      'Если тип действия не подходит ни под одну роль, рекомендуется использовать Default кнопки'
  }
}

export const buttonValues: StorybookArgsValue = {
  selected: false,
  iconHide: false,
  iconTurn: false,
  loading: false,
  skeleton: false,
  disabled: false,
  label: 'Button'
}
