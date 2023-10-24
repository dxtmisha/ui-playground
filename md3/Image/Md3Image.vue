<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
// import { isArray } from '../../functions/object.ts'

import { ImageDesign } from '../../constructors/Image/ImageDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type ImageEmits,
  type ImageSlots
} from '../../constructors/Image/types'

import {
  propsInstruction// ,
  // propsValues
} from './props'

const emits = defineEmits<ImageEmits>()
const props = defineProps(propsInstruction)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // TODO: User state classes / Пользовательские классы состояния
    // :classes-values [!] System label / Системная метка
    // :classes-values [!] System label / Системная метка
  }
  // TODO: User subclasses / Пользовательские подклассы
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // TODO: User styles / Пользовательские стили
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ImageDesign(
  'md3.image',
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

@include initDesign('[design].[component]') {
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
