import type { StorybookArgs, StorybookArgsValue } from '../../../types/storybook'

import { StorybookControl } from '../../../types/storybook'
import { StorybookCategory } from '../types'
import { defaults, propsValues } from '../../Progress/props'

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
    description: 'Указывать конкретные значения для полосы загрузчика. Если не указать, загрузчик будет отображать эмуляцию загрузки'
  },
  max: {
    control: StorybookControl.number,
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: '100' },
      type: { summary: 'string | number' }
    },
    description: 'Указывать максимальное допустимое значение'
  },
  visible: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'string | number' }
    },
    description: 'Отображать загрузчик. Если указать значение (‘value’), загрузчик будет отображаться автоматически'
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
    description: 'Задержка отображения. Это нужно, чтобы не было скачков в анимации, когда загрузка происходит слишком быстро'
  },
  inverse: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Изменять цвет загрузчика на цвет текста'
  },
  linear: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.linear },
      type: { summary: 'boolean' }
    },
    description: 'Отображать линейный загрузчик'
  },
  circular: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Отображать круглый загрузчик'
  },
  indeterminate: {
    control: StorybookControl.select,
    options: propsValues.indeterminate,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.indeterminate },
      type: { summary: propsValues.indeterminate.join(' | ') }
    },
    description: 'Тип анимации для загрузчика. Анимированный загрузчик отображается только в том случае, если не указать значение \'value\''
  },
  position: {
    control: StorybookControl.select,
    options: propsValues.position,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.position },
      type: { summary: propsValues.position.join(' | ') }
    },
    description: 'Место отображения загрузчика. Это поле только для загрузчика типа \'linear\''
  },
  dense: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Убирает отступы у загрузчика типа \'circular\''
  }
}

export const progressValues: StorybookArgsValue = {
  visible: true
}
