import type { Meta, StoryObj } from '@storybook/vue3'

import M3Image from '../Image/M3Image.vue'

import {
  imageArgs,
  imageValues
} from './argTypes/image.ts'

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
        component: 'Basic component for displaying graphic materials. ' +
          'The component is used to work with SVG files, graphic files (uploaded via input or by url) and icons.<br>' +
          '<small>Базовый компонент для отображения графических материалов. ' +
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
        story: '<p>[Experiments] If the product image has no borders, then you can display them by adapting the size.<br> ' +
          '<small>[Эксперименты] Если у картинки продукта нет границ, то можно отображать их, адаптируя размер. Размер картина можеть быть любой. Надо просто указывать физический размер в свойство object-width.</small></p>'
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
          <m3-image :value="galaxyS23p" adaptive object-width="76.2"/>
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <m3-image :value="galaxyZFlip5" adaptive object-width="71.9"/>
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <m3-image :value="galaxyZFold5" adaptive object-width="129.9"/>
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <m3-image :value="pad" adaptive object-width="254.3"/>
        </div>
      </div>
    `
  })
}
