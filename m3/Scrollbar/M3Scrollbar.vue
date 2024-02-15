<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data'
// import { inArray } from '../../functions/object'

import { ScrollbarDesign } from '../../constructors/Scrollbar/ScrollbarDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type ScrollbarEmits,
  type ScrollbarSlots
} from '../../constructors/Scrollbar/types'

import {
  propsInstruction// ,
  // propsValues
} from './props'

defineOptions({
  name: 'M3Scrollbar'
})

const emits = defineEmits<ScrollbarEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // TODO: User state classes / Пользовательские классы состояния
    // :classes-values [!] System label / Системная метка
    'm3-scrollbar': true,
    'm3-scrollbar--visible': props.visible,
    'm3-scrollbar--border': props.border,
    'm3-scrollbar--inverse': props.inverse
    // :classes-values [!] System label / Системная метка
  }
  // TODO: User subclasses / Пользовательские подклассы
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // TODO: User styles / Пользовательские стили
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ScrollbarDesign(
  'm3.scrollbar',
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

defineSlots<ScrollbarSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Scrollbar/style";
@import "styleToken";

@include initDesignBasic('m3.scrollbar') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinScrollbar;

  // Styles from tokens
  // Стили из токенов
  @include mixinScrollbarToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
