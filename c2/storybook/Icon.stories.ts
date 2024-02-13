import type { Meta, StoryObj } from '@storybook/vue3'

import C2Icon from '../Icon/C2Icon.vue'

import '../icons'

import {
  iconArgs,
  iconValues
} from './argTypes/icon'
import { Icons } from '../../classes/Icons'

const meta = {
  title: 'C2/Icon',
  component: C2Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: 'Компонент для работы с иконками и аватарами.'
      }
    }
  },
  argTypes: iconArgs,
  args: iconValues
} satisfies Meta<typeof C2Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {
  render: (args: any) => ({
    components: { C2Icon },
    setup () {
      return {
        args
      }
    },
    template: `
      <c2-icon v-bind="args" />
    `
  })
}

export const IconList: Story = {
  name: 'Список',
  render: (args: any) => ({
    components: { C2Icon },
    setup () {
      const icons = Icons.getNameList()

      return {
        args,
        icons
      }
    },
    template: `
      <div style="column-count: 4;">
        <div
          v-for="(icon, key) of icons"
          :key="key"
          style="display: flex; gap: 8px; align-items: center;"
        >
          <c2-icon v-bind="args" :icon="icon" />
          <span>{{ icon }}</span>
        </div>
      </div>
    `
  })
}
