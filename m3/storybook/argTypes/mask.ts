import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../../types/storybook.ts'
import { StorybookCategory } from '../types.ts'

export const maskArgs: StorybookArgs = {
  // Values
  type: {
    control: StorybookControl.select,
    options: [
      'text',
      'number',
      'currency',
      'datetime',
      'date',
      'year-month',
      'time',
      'hour-minute'
    ],
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: 'text' },
      type: { summary: 'string' }
    },
    description: 'Mask type. This is a list of prepared masks<br>' +
      '<small>Тип маски. Это список заготовленных масок</small>'
  },
  name: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'Field name. This property corresponds to the name attribute of the input<br>' +
      '<small>Название поля. Это свойство соответствует атрибуту name у input</small>'
  },
  value: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'Mask value<br>' +
      '<small>Значение маски</small>'
  },
  mask: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'Values for the mask<br>' +
      '<small>Значения для маски</small>'
  },
  special: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: '*' },
      type: { summary: 'string' }
    },
    description: 'The symbol that defines the symbol for replacement<br>' +
      '<small>Символ, который определяет символ для замены</small>'
  },
  match: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: '/[0-9]/' },
      type: { summary: 'string' }
    },
    description: 'A regular expression that checks the input symbol. ' +
      'If the input symbol meets the condition, the symbol is skipped<br>' +
      '<small>Регулярное выражение, проверяющее вводимый символ. ' +
      'Если вводимый символ соответствует условию, символ пропускается</small>'
  },
  pattern: {
    control: StorybookControl.object,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string | object' }
    },
    description: 'Object with the value property from HTMLInputElement. ' +
      'Used to check the correctness of the input data. ' +
      'If the input data is a string, it is inserted into the pattern field of the input<br>' +
      '<small>Объект со свойством значения из HTMLInputElement. ' +
      'Используется для проверки правильности вводимых данных. ' +
      'Если входные данные - это строка, вставляется в поле pattern у input</small>'
  },
  check: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'Regular expression for checking complete input data<br>' +
      '<small>Регулярное выражение для проверки полных вводимых данных</small>'
  },

  // Number
  fraction: {
    control: StorybookControl.number,
    table: {
      category: 'Number',
      type: { summary: 'number' }
    },
    description: 'Indicates the number of remainder characters in the number. Works only for the number type<br>' +
      '<small>Указывает количество символов остатка у числа. Работает только для типа число</small>'
  },
  currency: {
    control: StorybookControl.text,
    table: {
      category: 'Number',
      type: { summary: 'string' }
    },
    description: 'Currency type. Works only for the currency type<br>' +
      '<small>Тип валюты. Работает только для типа валюты</small>'
  },

  // Styles
  language: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'string' }
    },
    description: '[<b>Just for testing</b>] Formatting language. ' +
      'By default, mask formatting will be oriented according to the lang field in the html tag<br>' +
      '<small>[<b>Только для теста</b>] Язык форматирования. ' +
      'По умолчанию форматирование маски будет ориентироваться по полю lang в теге html</small>'
  },
  view: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: '_' },
      type: { summary: 'string' }
    },
    description: 'Replacement symbol for those places where the user has not yet entered data<br>' +
      '<small>Символ замены для тех мест, где пользователь еще не ввел данные</small>'
  },
  visible: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Hides part of the mask where the user has not yet entered data<br>' +
      '<small>Скрывает часть маски, где пользователь еще не ввел данные</small>'
  },
  right: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Aligns text to the right<br>' +
      '<small>Выравнивает текст направо</small>'
  }
}

export const maskValues: StorybookArgsValue = {
  type: 'text',
  name: undefined,
  value: undefined,
  mask: '+7 (***) **-**-**'
}
