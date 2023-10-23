<script setup lang="ts">
import { computed } from 'vue'
import { isArray } from '../../functions/object.ts'
import { ButtonDesign } from '../../constructors/Button/ButtonDesign'

import { type ConstrClasses } from '../../types/constructor'
import {
  type ButtonEmits,
  type ButtonSlots
} from '../../constructors/Button/types'

import {
  propsInstruction,
  propsValues
} from './props'

const emits = defineEmits<ButtonEmits>()
const props = defineProps(propsInstruction)
const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // TODO: User state classes / Пользовательские классы состояния
    // :classes-values [!] System label / Системная метка
    'md3-button--selected': Boolean(props.selected),
    'md3-button--progress': Boolean(props.progress),
    'md3-button--disabled': Boolean(props.disabled),
    [`md3-button--adaptive--${props.adaptive}`]: isArray(propsValues.adaptive, props.adaptive),
    [`md3-button--height--${props.height}`]: isArray(propsValues.height, props.height),
    'md3-button--filled': Boolean(props.filled),
    'md3-button--filled--disabled': Boolean(props.filled) && Boolean(props.disabled),
    'md3-button--filled--selected': Boolean(props.filled) && Boolean(props.selected),
    'md3-button--outlined': Boolean(props.outlined),
    'md3-button--outlined--test': Boolean(props.outlined) && Boolean(props.test),
    'md3-button--outlined--disabled': Boolean(props.outlined) && Boolean(props.disabled),
    'md3-button--outlined--selected': Boolean(props.outlined) && Boolean(props.selected),
    'md3-button--text': Boolean(props.text),
    'md3-button--elevated': Boolean(props.elevated),
    'md3-button--elevated--disabled': Boolean(props.elevated) && Boolean(props.disabled),
    'md3-button--elevated--selected': Boolean(props.elevated) && Boolean(props.selected),
    'md3-button--tonal': Boolean(props.tonal),
    'md3-button--tonal--disabled': Boolean(props.tonal) && Boolean(props.disabled),
    'md3-button--tonal--selected': Boolean(props.tonal) && Boolean(props.selected),
    [`md3-button--tonal--${props.tonal}`]: isArray(propsValues.tonal, props.tonal),
    'md3-button--test': Boolean(props.test),
    [`md3-button--palette--${props.palette}`]: isArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
  // TODO: User subclasses / Пользовательские подклассы
}))

const design = new ButtonDesign(
  'md3.button',
  props,
  {
    emits,
    classes: classesToken
  }
)

// const {
//   classes
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

@include initDesign('[design].[component]') {
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
