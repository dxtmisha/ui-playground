<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data'
// import { inArray } from '../../functions/object'

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

defineOptions({
  name: 'M3Image'
})

const emits = defineEmits<ImageEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-image': true,
    'm3-image--turn': props.turn,
    'm3-image--disabled': props.disabled,
    'm3-image--hide': props.hide,
    'm3-image--adaptive': props.adaptive
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ImageDesign(
  'm3.image',
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

@include initDesignBasic('m3.image') {
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
