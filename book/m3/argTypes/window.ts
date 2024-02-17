import type { StorybookArgs, StorybookArgsValue } from '../../../types/storybook'
import { StorybookControl } from '../../../types/storybook'
import { StorybookCategory } from '../types'
import { propsValues } from './../../../m3/Window/props'

export const windowArgs: StorybookArgs = {
  // Status
  open: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    },
    description: 'Opening/ closing the window<br>' +
      '<small>Открытие/ закрытие окна</small>'
  },
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    },
    description: 'Turn off the window operation<br>' +
      '<small>Выключить работу окна</small>'
  },

  // Values
  overElement: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string| HTMLElement' }
    },
    description: 'The selected element in the window for focus. ' +
      'If this property is set, the element that meets the conditions ' +
      'will scroll to the middle of the window. It only works when axis equals on<br>' +
      '<small>Выбранный элемент в окне для фокусировки. ' +
      'Если задано это свойство, то элемент, подходящий по условиям, ' +
      'будет прокручиваться к середине окна. Работает только когда axis равно on</small>'
  },

  // Options
  contextmenu: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'Change the window opening to the right button<br>' +
      '<small>Изменить открытие окна на правую кнопку</small>'
  },
  adaptive: {
    control: StorybookControl.select,
    options: propsValues.adaptive,
    table: {
      category: StorybookCategory.option,
      defaultValue: { summary: 'auto' },
      type: { summary: propsValues.adaptive.join(' | ') }
    },
    description: 'Changes the behavior of the window operation. It is responsible for ' +
      'the behavior of the window transition between the modal window, menu, ' +
      'and static window<br>' +
      '<small>Изменяет поведение работы окна. Отвечает за поведение перехода окна между ' +
      'модальным окном, меню и статическим окном</small>'
  },
  overscroll: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      defaultValue: { summary: 'true' },
      type: { summary: 'boolean' }
    },
    description: 'Cancel scrolling of the body element if the mouse is over the window. Does not work on old browsers<br>' +
      '<small>Отмена скролла у элемента body, если мышь над окном. Не работает на старых браузерах</small>'
  },
  autoClose: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'Automatically closes the window when clicked on the window. ' +
      'If you need to cancel this action for a specific element, ' +
      'you need to add the m3-window–static class<br>' +
      '<small>Авто закрывает окно при нажатии на окне. Если нужно отменить это ' +
      'действие для конкретного элемента, надо добавить класс m3-window–static</small>'
  },
  flash: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'Fast opening/closing. ' +
      'This property cancels the animation to increase performance. ' +
      'This is necessary when there are too many elements in the window<br>' +
      '<small>Быстрое открытие/закрытие. ' +
      'Это свойство отменяет анимацию для увеличения производительности. ' +
      'Это нужно, когда в окне слишком много элементов</small>'
  },
  inDom: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'The window remains in the DOM and does not remove it when closing. ' +
      'To increase performance, if there are very heavy elements when opening<br>' +
      '<small>Окно остается в DOM и не убирает его при закрытии. ' +
      'Для увеличения производительности, если при открытии есть очень тяжелые элементы</small>'
  },

  // Menu
  axis: {
    control: StorybookControl.select,
    options: [
      'x',
      'y',
      'on'
    ],
    table: {
      category: 'Menu',
      defaultValue: { summary: 'y' },
      type: { summary: 'x | y | on' }
    },
    description: 'Axis of window alignment<br>' +
      '<small>Ось выравнивания окна</small>'
  },
  indent: {
    control: StorybookControl.number,
    table: {
      category: 'Menu',
      defaultValue: { summary: '4' },
      type: { summary: 'number' }
    },
    description: 'The distance between the control element and the window in menu mode. ' +
      'It only works when axis equals x or y<br>' +
      '<small>Расстояние между элементом управления и окном в режиме меню. ' +
      'Работает только когда axis равно x или y</small>'
  },

  // Modal
  alignment: {
    control: StorybookControl.select,
    options: propsValues.alignment,
    table: {
      category: 'Modal',
      defaultValue: { summary: 'center' },
      type: { summary: propsValues.alignment.join(' | ') }
    },
    description: 'Window location<br>' +
      '<small>Расположение окна</small>'
  },
  origin: {
    control: StorybookControl.select,
    options: propsValues.origin,
    table: {
      category: 'Modal',
      defaultValue: { summary: 'center' },
      type: { summary: propsValues.origin.join(' | ') }
    },
    description: 'Direction of window opening<br>' +
      '<small>Направление открытия окна</small>'
  },
  persistent: {
    control: StorybookControl.boolean,
    table: {
      category: 'Modal',
      type: { summary: 'boolean' }
    },
    description: 'Prohibits closing the window when clicking outside the modal window<br>' +
      '<small>Запрещает закрытие окна при нажатии за пределы модального окна</small>'
  },
  dense: {
    control: StorybookControl.boolean,
    table: {
      category: 'Modal',
      type: { summary: 'boolean' }
    },
    description: 'Removes margins from the window, pushing it to the edge<br>' +
      '<small>Убирает отступы у окна, прижимая к краю</small>'
  },
  fullscreen: {
    control: StorybookControl.boolean,
    table: {
      category: 'Modal',
      type: { summary: 'boolean' }
    },
    description: 'Increases the window to full size<br>' +
      '<small>Увеличивает окно до полного размера</small>'
  },

  // Static
  staticMode: {
    control: StorybookControl.boolean,
    table: {
      category: 'Static',
      type: { summary: 'boolean' }
    },
    description: 'Enabling static mode. This is when the window becomes just a div element and ' +
      'switches to window mode at low monitor resolution. The property only works when adaptive ' +
      'equals 1 from static properties<br>' +
      '<small>Включение статического режима. Это когда окно становится просто div элементом ' +
      'и переходит в оконный режим при маленьком разрешении монитора. Свойство работает только ' +
      'когда adaptive равно 1 из статических свойств</small>'
  },

  // Tokens
  width: {
    control: StorybookControl.select,
    options: propsValues.width,
    table: {
      category: StorybookCategory.token,
      type: { summary: `${propsValues.width.join(' | ')} | string` }
    },
    description: 'Window width<br>' +
      '<small>Ширина окна</small>'
  },
  height: {
    control: StorybookControl.select,
    options: propsValues.height,
    table: {
      category: StorybookCategory.token,
      type: { summary: `${propsValues.height.join(' | ')} | string` }
    },
    description: 'Window height<br>' +
      '<small>Высота окна</small>'
  }
}

export const windowValues: StorybookArgsValue = {}
