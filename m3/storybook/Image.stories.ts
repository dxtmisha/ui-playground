import type { Meta, StoryObj } from '@storybook/vue3'

import M3Image from '../Image/M3Image.vue'

import {
  imageArgs,
  imageValues
} from './argTypes/image'

import galaxyZFold5 from './images/Galaxy_Z_Fold5.png'
import galaxyZFlip5 from './images/Galaxy_Z_Flip5.png'
import galaxyS23p from './images/Galaxy_S23p.png'
import pad from './images/pad.png'

const meta = {
  title: 'M3/Image',
  component: M3Image,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
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
} satisfies Meta<typeof M3Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}

export const ImageAdaptive: Story = {
  name: 'Adaptive',
  parameters: {
    docs: {
      description: {
        story: '<p>For an image with products, you can align the sizes of the elements ' +
          'with each other so that the products in the image are on the same scale. ' +
          'For work, you need to specify the size of the product, and the image should not have empty margins. ' +
          'The size of the image itself can be anything and is not equal to others.<br> ' +
          '<small>Для изображения с продуктами можно выравнивать размеры элементов между собой, ' +
          'чтобы продукты на изображении были в одном масштабе. ' +
          'Для работы необходимо указать размер продукта, и у изображения не должно быть пустых отступов. ' +
          'Сам размер изображения может быть любым и не равен другим.</small></p>'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Image
    },
    setup () {
      return {
        args,
        galaxyZFold5,
        galaxyZFlip5,
        galaxyS23p,
        pad
      }
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <div style="position: relative; width: 192px; height: 192px;">
          <m3-image v-bind="args" :value="galaxyS23p" adaptive object-width="76.2" />
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <m3-image v-bind="args" :value="galaxyZFlip5" adaptive object-width="71.9" />
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <m3-image v-bind="args" :value="galaxyZFold5" adaptive object-width="129.9" />
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <m3-image v-bind="args" :value="pad" adaptive object-width="254.3" />
        </div>
      </div>
    `
  })
}
