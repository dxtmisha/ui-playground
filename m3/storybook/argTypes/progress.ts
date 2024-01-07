import type { StorybookArgs, StorybookArgsValue } from '../../../types/storybook.ts'

import { StorybookControl } from '../../../types/storybook.ts'
import { StorybookCategory } from '../types.ts'
import { defaults, propsValues } from '../../Progress/props.ts'

export const progressArgs: StorybookArgs = {
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
    // Указывать конкретные значения для полосы загрузчика. Если не указать, загрузчик будет отображать эмуляцию загрузки
    description: 'Specify specific values for the loader bar. If not specified, the loader will display a loading emulation'
  },
  max: {
    control: StorybookControl.number,
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: '100' },
      type: { summary: 'string | number' }
    },
    // Указывать максимальное допустимое значение
    description: 'Specify the maximum allowable value'
  },
  visible: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'string | number' }
    },
    // Отображать загрузчик. Если указать значение (‘value’), загрузчик будет отображаться автоматически
    description: 'Display the loader. If you specify a value (‘value’), the loader will display automatically'
  },
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
    // Задержка отображения. Это нужно, чтобы не было скачков в анимации, когда загрузка происходит слишком быстро
    description: 'Display delay. This is necessary to avoid jumps in animation when loading happens too quickly'
  },
  inverse: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    // Изменять цвет загрузчика на цвет текста
    description: 'Change the loader color to the text color'
  },
  linear: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.linear },
      type: { summary: 'boolean' }
    },
    // Отображать линейный загрузчик
    description: 'Display the linear loader'
  },
  circular: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    // Отображать круглый загрузчик
    description: 'Display the circular loader'
  },
  indeterminate: {
    control: StorybookControl.select,
    options: propsValues.indeterminate,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.indeterminate },
      type: { summary: propsValues.indeterminate.join(' | ') }
    },
    // Тип анимации для загрузчика. Анимированный загрузчик отображается только в том случае, если не указать значение 'value'
    description: 'Type of animation for the loader. An animated loader is displayed only if the \'value\' is not specified'
  },
  position: {
    control: StorybookControl.select,
    options: propsValues.position,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.position },
      type: { summary: propsValues.position.join(' | ') }
    },
    // Место отображения загрузчика. Это поле только для загрузчика типа 'linear'
    description: 'The place of displaying the loader. This field is only for the \'linear\' type loader'
  },
  dense: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    // Убирает отступы у загрузчика типа 'circular'
    description: 'Removes margins from the \'circular\' type loader'
  }
}

export const progressValues: StorybookArgsValue = {
  visible: true
}
