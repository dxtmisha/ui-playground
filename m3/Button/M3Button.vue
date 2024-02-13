<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data'
import { inArray } from '../../functions/object'

import { ButtonDesign } from '../../constructors/Button/ButtonDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type ButtonEmits,
  type ButtonSlots
} from '../../constructors/Button/types'

import {
  propsInstruction,
  propsValues
} from './props'
import M3Icon from '../Icon/M3Icon.vue'
import M3Progress from '../Progress/M3Progress.vue'

const emits = defineEmits<ButtonEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-button': true,
    'm3-button--focus': props.focus,
    'm3-button--disabled': props.disabled,
    'm3-button--selected': props.selected,
    'm3-button--loading': props.loading,
    'm3-button--readonly': props.readonly,
    [`m3-button--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`m3-button--height--${props.height}`]: inArray(propsValues.height, props.height),
    'm3-button--filled': props.filled && !props.outlined && !props.text && !props.elevated && !props.tonal,
    'm3-button--outlined': props.outlined,
    'm3-button--text': props.text,
    'm3-button--elevated': props.elevated,
    'm3-button--tonal': props.tonal,
    [`m3-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ButtonDesign(
  'm3.button',
  props,
  {
    emits,
    components: {
      icon: M3Icon,
      progress: M3Progress
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

defineSlots<ButtonSlots>()
defineExpose(design.expose())
</script>

<template>
  <render>
    <slot />
  </render>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Button/style";
@import "styleToken";

@include initDesignBasic('m3.button') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinButton;

  // Styles from tokens
  // Стили из токенов
  @include mixinButtonToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
