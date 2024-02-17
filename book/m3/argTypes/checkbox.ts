import { StorybookCategory } from '../types'
import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook'

import {
  buttonArgs,
  buttonValues
} from './button'
import {
  fieldMessageArgs, fieldMessageValues
} from './fieldMessage'

export const checkboxArgs: StorybookArgs = {
  // Values
  label: buttonArgs.label,
  value: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Value<br>' +
      '<small>Значение</small>'
  },

  // Input
  required: {
    control: StorybookControl.boolean,
    table: {
      category: 'Input',
      type: { summary: 'boolean' }
    },
    description: 'Required for filling out<br>' +
      '<small>Обязательно для заполнения</small>'
  },

  // Message
  helperMessage: fieldMessageArgs.helperMessage,
  validationMessage: fieldMessageArgs.validationMessage
}

export const checkboxArgsValues: StorybookArgsValue = {
  label: buttonValues.label,
  helperMessage: fieldMessageValues.helperMessage
}
