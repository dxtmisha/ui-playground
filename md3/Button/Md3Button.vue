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
    'md3-button--selected': props.selected,
    'md3-button--progress': props.progress,
    'md3-button--disabled': props.disabled,
    [`md3-button--adaptive--${props.adaptive}`]: isArray(propsValues.adaptive, props.adaptive),
    [`md3-button--height--${props.height}`]: isArray(propsValues.height, props.height),
    'md3-button--filled': props.filled,
    'md3-button--filled--disabled': props.filled && props.disabled,
    'md3-button--filled--selected': props.filled && props.selected,
    'md3-button--outlined': props.outlined,
    'md3-button--outlined--test': props.outlined && props.test,
    'md3-button--outlined--disabled': props.outlined && props.disabled,
    'md3-button--outlined--selected': props.outlined && props.selected,
    'md3-button--text': props.text,
    'md3-button--elevated': props.elevated,
    'md3-button--elevated--disabled': props.elevated && props.disabled,
    'md3-button--elevated--selected': props.elevated && props.selected,
    'md3-button--tonal': Boolean(props.tonal),
    'md3-button--tonal--disabled': Boolean(props.tonal) && props.disabled,
    'md3-button--tonal--selected': Boolean(props.tonal) && props.selected,
    [`md3-button--tonal--${props.tonal}`]: isArray(propsValues.tonal, props.tonal),
    'md3-button--test': props.test,
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
