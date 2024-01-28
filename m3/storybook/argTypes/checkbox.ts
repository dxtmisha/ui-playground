import { StorybookCategory } from '../types.ts'
import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook.ts'

import {
  buttonArgs,
  buttonValues
} from './button.ts'
import {
  fieldMessageArgs, fieldMessageValues
} from './fieldMessage.ts'

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

  // Message
  helperMessage: fieldMessageArgs.helperMessage,
  validationMessage: fieldMessageArgs.validationMessage
}

export const checkboxArgsValues: StorybookArgsValue = {
  label: buttonValues.label,
  helperMessage: fieldMessageValues.helperMessage
}
