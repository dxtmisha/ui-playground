import {
  defaults,
  propsValues
} from '../../Button/props.ts'

import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook.ts'

import { StorybookCategory } from '../types.ts'

export const buttonArgs: StorybookArgs = {
  label: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'Текст на кнопке. Не обязательно, если есть иконка'
  },
  size: {
    control: StorybookControl.select,
    options: propsValues.size,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults.size },
      type: { summary: propsValues.size.join(' | ') }
    },
    description: 'Размер кнопки'
  }
}

export const buttonValues: StorybookArgsValue = {
  label: 'Label'
}
