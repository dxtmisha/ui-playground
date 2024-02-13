import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import M3Button from '../Button/M3Button.vue'
import M3Checkbox from '../Checkbox/M3Checkbox.vue'

import {
  checkboxArgs,
  checkboxArgsValues
} from './argTypes/checkbox'

const meta = {
  title: 'M3/Checkbox',
  component: M3Checkbox,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: 'Checkboxes let users select one or more items from a list, or turn an item on or off.<br>' +
          '<small>Флажки позволяют пользователям выбирать один или несколько элементов из списка, а также включать или отключать элемент.</small>'
      }
    }
  },
  argTypes: checkboxArgs,
  args: checkboxArgsValues
} satisfies Meta<typeof M3Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Checkbox: Story = {}

export const CheckboxModel: Story = {
  name: 'v-model',
  parameters: {
    docs: {
      description: {
        story: '<p>There is support for the v-model property to change the value.<br> ' +
          '<small>Есть поддержка свойства v-model для изменения значения.</small></p>'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Button,
      M3Checkbox
    },
    setup () {
      const value = ref<boolean>(false)

      return {
        args,
        value,
        onClick: () => {
          value.value = !value.value
        }
      }
    },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; justify-content: center;">
        <div>
          <m3-button @click="onClick">Value: {{ value }}</m3-button>
        </div>
        <div>
          <m3-checkbox v-model="value" v-bind="args" />
        </div>
      </div>
    `
  })
}
