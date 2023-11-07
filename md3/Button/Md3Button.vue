<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { ButtonDesign } from '../../constructors/Button/ButtonDesign'

import Md3Icon from '../Icon/Md3Icon.vue'
import Md3Progress from '../Progress/Md3Progress.vue'

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

const emits = defineEmits<ButtonEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'md3-button': true,
    'md3-button--focus': props.focus,
    'md3-button--selected': props.selected,
    'md3-button--progress': props.progress,
    'md3-button--disabled': props.disabled,
    [`md3-button--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`md3-button--height--${props.height}`]: inArray(propsValues.height, props.height),
    'md3-button--filled': props.filled && !props.outlined && !props.text && !props.elevated && !props.tonal,
    'md3-button--filled--disabled': props.filled && !props.outlined && !props.text && !props.elevated && !props.tonal && props.disabled,
    'md3-button--filled--selected': props.filled && !props.outlined && !props.text && !props.elevated && !props.tonal && props.selected,
    'md3-button--outlined': props.outlined,
    'md3-button--outlined--focus': props.outlined && props.focus,
    'md3-button--outlined--disabled': props.outlined && props.disabled,
    'md3-button--outlined--selected': props.outlined && props.selected,
    'md3-button--text': props.text,
    'md3-button--elevated': props.elevated,
    'md3-button--elevated--disabled': props.elevated && props.disabled,
    'md3-button--elevated--selected': props.elevated && props.selected,
    'md3-button--tonal': props.tonal,
    'md3-button--tonal--disabled': props.tonal && props.disabled,
    'md3-button--tonal--selected': props.tonal && props.selected,
    [`md3-button--palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ButtonDesign(
  'md3.button',
  props,
  {
    emits,
    components: {
      icon: Md3Icon,
      progress: Md3Progress
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
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Button/style";
@import "styleToken";

@include initDesign('md3.button') {
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
