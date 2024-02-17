import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook'
import { StorybookCategory } from '../types'

export const fieldMessageArgs: StorybookArgs = {
  // Status
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    },
    description: 'Transition to the state is disabled<br>' +
      '<small>Переход в состояние отключено</small>'
  },

  // Value
  counter: {
    control: StorybookControl.number,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'number' }
    },
    description: 'Transition to the disabled state<br>' +
      '<small>Переход в состояние отключено</small>'
  },
  maxlength: {
    control: StorybookControl.number,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'number' }
    },
    description: 'Displays the maximum allowable number of input characters<br>' +
      '<small>Отображает максимальное допустимое количество вводимых символов</small>'
  },

  // Message
  helperMessage: {
    control: StorybookControl.text,
    table: {
      category: 'Message',
      type: { summary: 'string' }
    },
    description: 'Outputs regular text<br>' +
      '<small>Выводит обычный текст</small>'
  },
  validationMessage: {
    control: StorybookControl.text,
    table: {
      category: 'Message',
      type: { summary: 'string' }
    },
    description: 'Outputs error text. If there is error text, the regular text is hidden<br>' +
      '<small>Выводит текст ошибки. Если есть текст ошибки, то обычный текст скрывается</small>'
  }
}

export const fieldMessageValues: StorybookArgsValue = {
  disabled: false,
  counter: 5,
  maxlength: 10,
  helperMessage: 'Supporting text'
}
