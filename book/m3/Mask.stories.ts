import type { Meta, StoryObj } from '@storybook/vue3'

import M3Mask from './../../m3/Mask/M3Mask.vue'

import {
  maskArgs,
  maskValues
} from './argTypes/mask'

const meta = {
  title: 'M3/Mask',
  component: M3Mask,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: 'Component for working with input mask.<br>' +
          '<small>Компонент для работы с маской ввода.</small>'
      }
    }
  },
  argTypes: maskArgs,
  args: maskValues
} satisfies Meta<typeof M3Mask>

export default meta

type Story = StoryObj<typeof meta>

export const Mask: Story = {
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <m3-mask v-bind="args" style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px;"/>
    `
  })
}

export const MaskNumber: Story = {
  name: 'Number',
  parameters: {
    docs: {
      description: {
        story: '<p>This is a ready-made mask for entering a number. ' +
          'Through the fraction property, you can specify the number of remainders. ' +
          'If fraction is true, the remainder will be reserved.<br> ' +
          '<small>Это готовая маска для ввода числа. ' +
          'Через свойство fraction можно указывать количество остатков. ' +
          'Если fraction равно true, остаток будет резервным.</small></p>'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <div>
        <div>
          <div class="m3-font--bodyMedium">EN</div>
          <m3-mask
            v-bind="args"
            type="number"
            language="en"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">RU</div>
          <m3-mask
            v-bind="args"
            type="number"
            language="ru"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">VN</div>
          <m3-mask
            v-bind="args"
            type="number"
            language="vn"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
      </div>
    `
  })
}

export const MaskCurrency: Story = {
  name: 'Currency',
  parameters: {
    docs: {
      description: {
        story: '<p>This is a ready-made mask for entering a price. ' +
          'Through the currency property, you can specify the currency. ' +
          'If you do not specify currency, it will behave as a number type.<br> ' +
          '<small>Это готовая маска для ввода цены. ' +
          'Через свойство currency можно указывать валюту. ' +
          'Если не указать currency, то будет вести как тип number</small></p>'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <div>
        <div>
          <div class="m3-font--bodyMedium">USD</div>
          <m3-mask
            v-bind="args"
            type="currency"
            currency="USD"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">RUB</div>
          <m3-mask
            v-bind="args"
            type="currency"
            currency="RUB"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">VND</div>
          <m3-mask
            v-bind="args"
            type="currency"
            currency="VND"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
      </div>
    `
  })
}

export const MaskDatetime: Story = {
  name: 'Datetime',
  parameters: {
    docs: {
      description: {
        story: '<p>There are several types for entering dates: datetime, date, year-month, time, hour-minute.<br> ' +
          '<small>Есть несколько типов для ввода даты: datetime, date, year-month, time, hour-minute.</small></p>'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <div>
          <div>
            <div class="m3-font--bodyMedium">datetime</div>
            <m3-mask
              v-bind="args"
              type="datetime"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">date</div>
            <m3-mask
              v-bind="args"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">year-month</div>
            <m3-mask
              v-bind="args"
              type="year-month"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">time</div>
            <m3-mask
              v-bind="args"
              type="time"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">hour-minute</div>
            <m3-mask
              v-bind="args"
              type="hour-minute"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
        </div>
        <div>
          <div>
            <div class="m3-font--bodyMedium">US</div>
            <m3-mask
              v-bind="args"
              type="date"
              language="US"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">RU</div>
            <m3-mask
              v-bind="args"
              type="date"
              language="RU"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">VN</div>
            <m3-mask
              v-bind="args"
              type="date"
              language="VN"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
            />
          </div>
        </div>
      </div>
    `
  })
}

export const MaskMultiMask: Story = {
  name: 'Multi mask',
  parameters: {
    docs: {
      description: {
        story: '<p>The mask property can pass several masks as an array. The mask will change between them depending on the number of input characters.<br> ' +
          '<small>Свойство mask можно передавать несколько масок в виде массива. Маска будет меняться между ними в зависимости от количества вводимых символов.</small></p>'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <m3-mask
        v-bind="args"
        :mask="['+7 (***) **-**-**', '+84 *** ***-****', '+84 *** ***-***-**']"
        style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
      />
    `
  })
}

export const MaskGroup: Story = {
  name: 'Group',
  parameters: {
    docs: {
      description: {
        story: '<p>You can pass an object to the special property to configure a mask with different groups of input characters. ' +
          'For example, you need to make a mask where the first 4 characters are letters, and the last 6 are numbers.<br> ' +
          '<small>Можно передать в свойство special объект для настройки маски с разными группами вводимых символов. ' +
          'Например, нужно сделать маску, где первые 4 символа - это буквы, а последние 6 - числа.</small></p>'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <m3-mask
        v-bind="args"
        mask="####-******"
        :special="{
          '#': {
            match: /[a-z]/,
            view: 'A'
          },
          '*': {
            match: /[0-9]/,
            view: '0'
          }
        }"
        style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
      />
    `
  })
}
