import type { StorybookArgs, StorybookArgsValue } from '../../../types/storybook'
import { StorybookControl } from '../../../types/storybook'
import { StorybookCategory } from '../types'

export const scrollbarArgs: StorybookArgs = {
  // Options
  tag: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.option,
      defaultValue: { summary: 'div' },
      type: { summary: 'string' }
    },
    description: 'The tag used in the component<br>' +
      '<small>Использованный тег у компонента</small>'
  },
  visible: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'Display all content without hiding and scrolling<br>' +
      '<small>Отображать все содержимое без скрытия и скролла</small>'
  },
  border: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'Display the border at the top if the scroll is not at the beginning, and at the bottom if the scroll is not scrolled to the end<br>' +
      '<small>Отображать бордер сверху, если скролл не в начале, и снизу, если скролл не прокручен до конца</small>'
  },
  inverse: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'Reverses the behavior of the border’s operation. Works if the border parameter is enabled<br>' +
      '<small>Изменяет поведение работы бордера на обратное. Работает, если включен параметр border</small>'
  }
}

export const scrollbarValues: StorybookArgsValue = {}
