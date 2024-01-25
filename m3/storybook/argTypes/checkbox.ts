import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook.ts'
import { StorybookCategory } from '../types.ts'

export const checkboxArgs: StorybookArgs = {
  // Values
  value: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    },
    description: 'Value<br>' +
      '<small>Значение</small>'
  }
}

export const checkboxArgsValues: StorybookArgsValue = {}
