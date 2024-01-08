import type { Meta, StoryObj } from '@storybook/vue3'

import C2Button from '../Button/C2Button.vue'

import {
  buttonArgs,
  buttonValues
} from './argTypes/button.ts'
import { propsValues } from '../Button/props.ts'

const meta = {
  title: 'C2/Button',
  component: C2Button,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: 'Кнопки - это элементы управления, которые позволяют пользователям действовать, делать выборы и двигаться вперед.'
      }
    }
  },
  argTypes: buttonArgs,
  args: buttonValues
} satisfies Meta<typeof C2Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {}

export const ButtonHierarchy: Story = {
  name: 'Иерархия',
  parameters: {
    docs: {
      description: {
        story: '<p>Иерархия кнопок подчеркивает, какая кнопка более важна в данном контексте, чтобы пользователь мог немедленно принимать меры.</p>' +
          '<p>Кнопки используют цвет и контраст для создания акцентов и иерархии. ' +
          'Кнопки с наибольшим акцентом имеют максимальный приоритет. ' +
          'Кнопки с пониженным и низким акцентом имеют пониженный и низкий приоритет соответственно.</p>'
      }
    }
  },
  render: (args: any) => ({
    components: { C2Button },
    setup () {
      return {
        args,
        size: propsValues.size,
        label: buttonValues.label
      }
    },
    template: `
      <div style="display: flex; gap: 16px; width: 100%;">
        <div
          style="display: flex; flex-basis: 1px; flex-grow: 1; flex-direction: column; align-items: center; gap: 24px;">
          <div class="c2-font--body--b1medium">Primary</div>
          <div v-for="sizeValue in size">
            <c2-button v-bind="args" :label="label" :size="sizeValue" />
          </div>
        </div>
        <div
          style="display: flex; flex-basis: 1px; flex-grow: 1; flex-direction: column; align-items: center; gap: 24px;">
          <div class="c2-font--body--b1medium">Secondary</div>
          <div v-for="sizeValue in size">
            <c2-button v-bind="args" :label="label" :size="sizeValue" secondary />
          </div>
        </div>
        <div
          style="display: flex; flex-basis: 1px; flex-grow: 1; flex-direction: column; align-items: center; gap: 24px;">
          <div class="c2-font--body--b1medium">Secondary Outline</div>
          <div v-for="sizeValue in size">
            <c2-button v-bind="args" :label="label" :size="sizeValue" outline />
          </div>
        </div>
        <div
          style="display: flex; flex-basis: 1px; flex-grow: 1; flex-direction: column; align-items: center; gap: 24px;">
          <div class="c2-font--body--b1medium">Ghost</div>
          <div v-for="sizeValue in size">
            <c2-button v-bind="args" :label="label" :size="sizeValue" ghost />
          </div>
        </div>
      </div>
    `
  })
}

export const ButtonPrimary: Story = {
  name: 'Primary',
  parameters: {
    docs: {
      description: {
        story: '<p>Используйте одну основную кнопку в каждом контексте, чтобы позволить ' +
          'пользователям выполнить конкретное действие, продвигаться в процессе, подтверждать ' +
          'и отклонять или завершать задачу.</p>' +
          '<p>*<b>Исключения</b>: В веб-приложениях можно использовать более одной Primary кнопки, ' +
          'если на экране размещено несколько панелей. В этом случае стремитесь к тому, чтобы ' +
          'в каждой панели было по одной кнопке</p>'
      }
    }
  },
  args: {
    primary: true
  },
  render: (args: any) => ({
    components: { C2Button },
    setup () {
      return {
        args,
        label: buttonValues.label
      }
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <c2-button v-bind="args" :label="label" icon="home" />
        <c2-button v-bind="args" :label="label" />
        <c2-button v-bind="args" :label="undefined" icon="home" />
      </div>
    `
  })
}

export const ButtonSecondary: Story = {
  name: 'Secondary',
  parameters: {
    docs: {
      description: {
        story: '<p>Secondary кнопки - основа интерфейса. Отдавайте им ' +
          'предпочтение всякий раз, когда это возможно. Серый фон обеспечивает ' +
          'лучшую видимость и делает их более доступными по сравнению ' +
          'с Ghost кнопками</p>'
      }
    }
  },
  args: {
    secondary: true
  },
  render: (args: any) => ({
    components: { C2Button },
    setup () {
      return {
        args,
        label: buttonValues.label
      }
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <c2-button v-bind="args" :label="label" icon="home" />
        <c2-button v-bind="args" :label="label" />
        <c2-button v-bind="args" :label="undefined" icon="home" />
      </div>
    `
  })
}

export const ButtonOutline: Story = {
  name: 'Outline',
  parameters: {
    docs: {
      description: {
        story: '<p>Outline кнопки менее приоритетны, чем Secondary кнопки. Они используются ' +
          'для обозначения дополнительных действий, таких, как открытие фильтров, либо в тех случаях, ' +
          'когда Primary кнопка уже есть на странице, а между двумя другими действиями все ' +
          'еще необходимо обозначить приоритет. Также Outline кнопки должны использоваться ' +
          'для обозначения действия с пониженным приоритетом на цветном, или сером фоне</p>'
      }
    }
  },
  args: {
    outline: true
  },
  render: (args: any) => ({
    components: { C2Button },
    setup () {
      return {
        args,
        label: buttonValues.label
      }
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <c2-button v-bind="args" :label="label" icon="home" />
        <c2-button v-bind="args" :label="label" />
        <c2-button v-bind="args" :label="undefined" icon="home" />
      </div>
    `
  })
}

export const ButtonGhost: Story = {
  name: 'Ghost',
  parameters: {
    docs: {
      description: {
        story: '<p>Ghost кнопки имеют наименьший приоритет. Они используются для ' +
          'обозначения действий отмены, действий позволяющих пользователю пропустить, ' +
          'отказаться, или игнорировать. Так же они могут быть использованы в качестве ' +
          'акцентированных ссылок для скачивания файлов, оформления элементов управления ' +
          '(слайдеров, элементов пагинации и т. д.)</p>'
      }
    }
  },
  args: {
    ghost: true
  },
  render: (args: any) => ({
    components: { C2Button },
    setup () {
      return {
        args,
        label: buttonValues.label
      }
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <c2-button v-bind="args" :label="label" icon="home" />
        <c2-button v-bind="args" :label="label" />
        <c2-button v-bind="args" :label="undefined" icon="home" />
      </div>
    `
  })
}

export const ButtonSize: Story = {
  name: 'Размеры кнопок и радиус угла',
  parameters: {
    docs: {
      description: {
        story: `<p>У кнопки есть ${propsValues.size.length} размеров, от которых зависят размеры используемых в них иконок и шрифта</p>`
      }
    }
  },
  render: (args: any) => ({
    components: { C2Button },
    setup () {
      return {
        args,
        size: propsValues.size
      }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <c2-button v-for="sizeValue in size" v-bind="args" :size="sizeValue" icon="home" />
      </div>
    `
  })
}

export const ButtonIntent: Story = {
  name: 'Роли',
  parameters: {
    docs: {
      description: {
        story: '<p>Кнопки распределены по ролям, для обозначения типов действия. ' +
          'Если тип действия не подходит ни под одну роль, рекомендуется использовать Default кнопки</p>'
      }
    }
  },
  render: (args: any) => ({
    components: { C2Button },
    setup () {
      return {
        args,
        intent: propsValues.intent
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div class="c2-font--body--c1medium">Primary</div>
          <div style="display: flex; align-items: center; gap: 16px; padding-top: 4px;">
            <c2-button v-for="intentValue in intent" v-bind="args" :intent="intentValue" icon="home" />
          </div>
        </div>
        <div>
          <div class="c2-font--body--c1medium">Secondary</div>
          <div style="display: flex; align-items: center; gap: 16px; padding-top: 4px;">
            <c2-button v-for="intentValue in intent" v-bind="args" :intent="intentValue" icon="home" secondary />
          </div>
        </div>
        <div>
          <div class="c2-font--body--c1medium">Outline</div>
          <div style="display: flex; align-items: center; gap: 16px; padding-top: 4px;">
            <c2-button v-for="intentValue in intent" v-bind="args" :intent="intentValue" icon="home" outline />
          </div>
        </div>
        <div>
          <div class="c2-font--body--c1medium">Ghost</div>
          <div style="display: flex; align-items: center; gap: 16px; padding-top: 4px;">
            <c2-button v-for="intentValue in intent" v-bind="args" :intent="intentValue" icon="home" ghost />
          </div>
        </div>
      </div>
    `
  })
}
