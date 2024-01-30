import type { Meta, StoryObj } from '@storybook/vue3'

import C1Image from '../Image/C1Image.vue'

import {
  imageArgs,
  imageValues
} from './argTypes/image.ts'

import galaxyZFold5 from './images/Galaxy_Z_Fold5.png'
import galaxyZFlip5 from './images/Galaxy_Z_Flip5.png'
import galaxyS23p from './images/Galaxy_S23p.png'
import pad from './images/pad.png'

const meta = {
  title: 'C1/Image',
  component: C1Image,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
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

export const ImageAdaptive: Story = {
  name: 'Adaptive',
  parameters: {
    docs: {
      description: {
        story: 'Для изображения с продуктами можно выравнивать размеры элементов между собой, ' +
          'чтобы продукты на изображении были в одном масштабе. ' +
          'Для работы необходимо указать размер продукта, и у изображения не должно быть пустых отступов. ' +
          'Сам размер изображения может быть любым и не равен другим.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      C1Image
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
          <c1-image v-bind="args" :value="galaxyS23p" adaptive object-width="76.2" />
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <c1-image v-bind="args" :value="galaxyZFlip5" adaptive object-width="71.9" />
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <c1-image v-bind="args" :value="galaxyZFold5" adaptive object-width="129.9" />
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <c1-image v-bind="args" :value="pad" adaptive object-width="254.3" />
        </div>
      </div>
    `
  })
}
