<script setup lang="ts">
import { computed } from 'vue'

import { isFilled } from '../../functions/data'
import { inArray } from '../../functions/object'

import { WindowDesign } from '../../constructors/Window/WindowDesign'

import M3Scrollbar from '../Scrollbar/M3Scrollbar.vue'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type WindowEmits,
  type WindowSlots
} from '../../constructors/Window/types'

import {
  propsInstruction,
  propsValues
} from './props'

defineOptions({
  name: 'M3Window'
})

const emits = defineEmits<WindowEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-window': true,
    'm3-window--width--custom': isFilled(props.width) && !inArray(propsValues.width, props.width),
    [`m3-window--width--${props.width}`]: inArray(propsValues.width, props.width),
    'm3-window--height--custom': isFilled(props.height) && !inArray(propsValues.height, props.height),
    [`m3-window--height--${props.height}`]: inArray(propsValues.height, props.height),
    [`m3-window--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    'm3-window--overscroll': props.overscroll,
    'm3-window--dense': props.dense,
    'm3-window--fullscreen': props.fullscreen,
    [`m3-window--alignment--${props.alignment}`]: inArray(propsValues.alignment, props.alignment),
    [`m3-window--origin--${props.origin}`]: inArray(propsValues.origin, props.origin)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  'm3-window-sys-width': props.width ?? null,
  'm3-window-sys-height': props.height ?? null
  // :styles-values [!] System label / Системная метка
}))

const design = new WindowDesign(
  'm3.window',
  props,
  {
    emits,
    components: {
      scrollbar: M3Scrollbar
    },
    classes: classesToken,
    styles: stylesToken
  }
)

// const {
//   classes,
//   styles
// } = design.setup()
const render = design.render()

defineSlots<WindowSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Window/style";
@import "styleToken";

@include initDesignBasic('m3.window') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinWindow;

  // Styles from tokens
  // Стили из токенов
  @include mixinWindowToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
