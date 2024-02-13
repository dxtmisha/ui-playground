import type { StorybookArgs, StorybookArgsValue } from '../../../types/storybook'
import { StorybookControl } from '../../../types/storybook'
import { StorybookCategory } from '../types'

import {
  defaults,
  propsValues
} from '../../Progress/props'

export const progressArgs: StorybookArgs = {
  // Status
  visible: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'string | number' }
    },
    description: 'Display the loader. If you specify a value (\'value\'), the loader will display automatically<br>' +
      '<small>Отображать загрузчик. Если указать значение (\'value\'), загрузчик будет отображаться автоматически</small>'
  },

  // Values
  value: {
    control: {
      type: StorybookControl.number,
      min: 0,
      max: 100
    },
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string | number' }
    },
    description: 'Specify specific values for the loader bar. If not specified, the loader will display a loading emulation<br>' +
      '<small>Указывать конкретные значения для полосы загрузчика. Если не указать, загрузчик будет отображать эмуляцию загрузки</small>'
  },
  max: {
    control: StorybookControl.number,
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: '100' },
      type: { summary: 'string | number' }
    },
    description: 'Specify the maximum allowable value<br>' +
      '<small>Указывать максимальное допустимое значение</small>'
  },

  // Style
  delay: {
    control: {
      type: StorybookControl.number,
      min: 0
    },
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults.delay },
      type: { summary: 'string | number' }
    },
    description: 'Display delay. This is necessary to avoid jumps in animation when loading happens too quickly<br>' +
      '<small>Задержка отображения. Это нужно, чтобы не было скачков в анимации, когда загрузка происходит слишком быстро</small>'
  },
  inverse: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Change the loader color to the text color<br>' +
      '<small>Изменять цвет загрузчика на цвет текста</small>'
  },

  // Tokens
  linear: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.linear },
      type: { summary: 'boolean' }
    },
    description: 'Display the linear loader<br>' +
      '<small>Отображать линейный загрузчик</small>'
  },
  circular: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Display the circular loader<br>' +
      '<small>Отображать круглый загрузчик</small>'
  },
  indeterminate: {
    control: StorybookControl.select,
    options: propsValues.indeterminate,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.indeterminate },
      type: { summary: propsValues.indeterminate.join(' | ') }
    },
    description: 'Type of animation for the loader. An animated loader is displayed only if the \'value\' is not specified<br>' +
      '<small>Тип анимации для загрузчика. Анимированный загрузчик отображается только в том случае, если не указать значение \'value\'</small>'
  },
  position: {
    control: StorybookControl.select,
    options: propsValues.position,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.position },
      type: { summary: propsValues.position.join(' | ') }
    },
    description: 'The place of displaying the loader. This field is only for the \'linear\' type loader<br>' +
      '<small>Место отображения загрузчика. Это поле только для загрузчика типа \'linear\'</small>'
  },
  dense: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Removes margins from the \'circular\' type loader<br>' +
      '<small>Убирает отступы у загрузчика типа \'circular\'</small>'
  }
}

export const progressValues: StorybookArgsValue = {
  visible: true
}
