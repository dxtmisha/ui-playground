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
    description: 'Text on the button. Not necessary if there is an icon'
  },
  height: {
    control: StorybookControl.select,
    options: propsValues.height,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults.height },
      type: { summary: propsValues.height.join(' | ') }
    },
    description: 'Button height'
  }
}

export const buttonValues: StorybookArgsValue = {
  label: 'Label'
}
