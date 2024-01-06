import type { Meta, StoryObj } from '@storybook/vue3'

import C2Image from '../Image/C2Image.vue'

import {
  imageArgs,
  imageValues
} from './argTypes/image.ts'

const meta = {
  title: 'C2/Basic/Image',
  component: C2Image,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: '[<b>В разработке</b>] Базовый компонент для отображения графических материалов. ' +
          'Компонент используется для работы с SVG файлами, графическими файлами (загруженными через input или по url) и иконками.'
      }
    }
  },
  argTypes: imageArgs,
  args: imageValues
} satisfies Meta<typeof C2Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}
