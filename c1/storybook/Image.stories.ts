import type { Meta, StoryObj } from '@storybook/vue3'

import C1Image from '../Image/C1Image.vue'

import {
  imageArgs,
  imageValues
} from './argTypes/image'

const meta = {
  title: 'C1/Image',
  component: C1Image,
  tags: ['autodocs'],
  parameters: {
    design: 'c1',
    docs: {
      description: {
        component: 'Компонент для отображения графических материалов. ' +
          'Компонент используется для работы с SVG файлами, графическими файлами (загруженными через input или по url) и иконками.'
      }
    }
  },
  argTypes: imageArgs,
  args: imageValues
} satisfies Meta<typeof C1Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}
