import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook'
import { StorybookCategory } from '../types'

export const rippleArgs: StorybookArgs = {
  // Status
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  }
}

export const rippleValues: StorybookArgsValue = {
  disabled: false
}
