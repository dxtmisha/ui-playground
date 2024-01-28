import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../../types/storybook.ts'

import { buttonArgs } from './button.ts'

export const rippleArgs: StorybookArgs = {
  // Status
  disabled: buttonArgs.disabled
}

export const rippleValues: StorybookArgsValue = {
  disabled: false
}
