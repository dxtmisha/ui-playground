import type { Meta, StoryObj } from '@storybook/vue3'

import M2Image from '../Image/M2Image.vue'

import {
  imageArgs,
  imageValues
} from '../../m3/storybook/argTypes/image'

const meta = {
  title: 'M2/Image',
  component: M2Image,
  tags: ['autodocs'],
  parameters: {
    design: 'm2',
    docs: {
      description: {
        component: 'Component for displaying graphic materials. ' +
          'The component is used to work with SVG files, graphic files (uploaded via input or by url) and icons.<br>' +
          '<small>Компонент для отображения графических материалов. ' +
          'Компонент используется для работы с SVG файлами, графическими файлами (загруженными через input или по url) и иконками.</small>'
      }
    }
  },
  argTypes: imageArgs,
  args: imageValues
} satisfies Meta<typeof M2Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}
