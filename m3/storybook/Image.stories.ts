import type { Meta, StoryObj } from '@storybook/vue3'

import M3Image from '../Image/M3Image.vue'

import {
  imageArgs,
  imageValues
} from './argTypes/image.ts'

const meta = {
  title: 'M3/Basic/Image',
  component: M3Image,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        // Базовый компонент для отображения графических материалов.
        // Компонент используется для работы с SVG файлами, графическими файлами (загруженными через input или по url) и иконками
        component: 'Basic component for displaying graphic materials. ' +
          'The component is used to work with SVG files, graphic files (uploaded via input or by url) and icons'
      }
    }
  },
  argTypes: imageArgs,
  args: imageValues
} satisfies Meta<typeof M3Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}
