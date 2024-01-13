<script setup lang="ts">
import { computed } from 'vue'

import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { WindowDesign } from '../../constructors/Window/WindowDesign.ts'

import M3Scrollbar from '../Scrollbar/M3Scrollbar.vue'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type WindowEmits,
  type WindowSlots
} from '../../constructors/Window/types.ts'

import {
  propsInstruction,
  propsValues
} from './props.ts'

const emits = defineEmits<WindowEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // TODO: User state classes / Пользовательские классы состояния
    // :classes-values [!] System label / Системная метка
    'm3-window': true,
    'm3-window--minWidth--custom': isFilled(props.minWidth) && !inArray(propsValues.minWidth, props.minWidth),
    [`m3-window--minWidth--${props.minWidth}`]: inArray(propsValues.minWidth, props.minWidth),
    'm3-window--minHeight--custom': isFilled(props.minHeight) && !inArray(propsValues.minHeight, props.minHeight),
    [`m3-window--minHeight--${props.minHeight}`]: inArray(propsValues.minHeight, props.minHeight),
    'm3-window--menu': props.menu
    // :classes-values [!] System label / Системная метка
  }
  // TODO: User subclasses / Пользовательские подклассы
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // TODO: User styles / Пользовательские стили
  // :styles-values [!] System label / Системная метка
  'm3-window-sys-minWidth': props.minWidth ?? null,
  'm3-window-sys-minHeight': props.minHeight ?? null
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
