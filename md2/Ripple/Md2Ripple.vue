<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
// import { inArray } from '../../functions/object.ts'

import { RippleDesign } from '../../constructors/Ripple/RippleDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type RippleEmits,
  type RippleSlots
} from '../../constructors/Ripple/types'

import {
  propsInstruction// ,
  // propsValues
} from './props'

const emits = defineEmits<RippleEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'md2-ripple': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new RippleDesign(
  'md2.ripple',
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

defineSlots<RippleSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Ripple/style";
@import "styleToken";

@include initDesign('md2.ripple') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinRipple;

  // Styles from tokens
  // Стили из токенов
  @include mixinRippleToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
