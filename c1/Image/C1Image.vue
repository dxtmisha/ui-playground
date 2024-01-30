<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
// import { inArray } from '../../functions/object.ts'

import { ImageDesign } from '../../constructors/Image/ImageDesign.ts'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type ImageEmits,
  type ImageSlots
} from '../../constructors/Image/types.ts'

import {
  propsInstruction // ,
  // propsValues
} from './props.ts'

const emits = defineEmits<ImageEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c1-image': true,
    'c1-image--turn': props.turn,
    'c1-image--disabled': props.disabled,
    'c1-image--hide': props.hide,
    'c1-image--adaptive': props.adaptive
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ImageDesign(
  'c1.image',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

// const {
//   classes,
//   styles
// } = design.setup()
const render = design.render()

defineSlots<ImageSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Image/style";
@import "styleToken";

@include initDesignBasic('c1.image') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinImage;

  // Styles from tokens
  // Стили из токенов
  @include mixinImageToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
