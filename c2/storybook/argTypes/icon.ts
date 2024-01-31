import { Icons } from '../../../classes/Icons.ts'

import { type StorybookArgs, type StorybookArgsValue, StorybookControl } from '../../../types/storybook.ts'

import { iconArgs as iconArgsC1, iconValues as iconValuesC1 } from '../../../c1/storybook/argTypes/icon.ts'

import '../../icons.ts'
import { defaults, propsValues } from '../../Icon/props.ts'
import { StorybookCategory } from '../types.ts'

const icons = Icons.getNameList()

export const iconArgs: StorybookArgs = {
  ...iconArgsC1,
  icon: {
    ...iconArgsC1.icon,
    options: icons
  },
  iconActive: {
    ...iconArgsC1.iconActive,
    options: icons
  },

  // Tokens
  variation: {
    control: StorybookControl.select,
    options: propsValues.variation,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.variation },
      type: { summary: propsValues.variation.join(' | ') }
    }
  },
  shape: {
    control: StorybookControl.select,
    options: propsValues.shape,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.shape },
      type: { summary: propsValues.shape.join(' | ') }
    }
  },
  size: {
    control: StorybookControl.select,
    options: propsValues.size,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.size },
      type: { summary: propsValues.size.join(' | ') }
    }
  }
}

delete iconArgs.overlay
delete iconArgs.rounded

export const iconValues: StorybookArgsValue = {
  ...iconValuesC1,
  icon: 'notification',
  iconActive: 'notification-off'
}
