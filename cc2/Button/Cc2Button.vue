<script setup lang="ts">
import { computed } from 'vue'

import { inArray } from '../../functions/object.ts'

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

const emits = defineEmits<ButtonEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // TODO: User state classes / Пользовательские классы состояния
    // :classes-values [!] System label / Системная метка
    'cc2-button': true,
    'cc2-button--focus': props.focus,
    'cc2-button--disabled': props.disabled,
    'cc2-button--selected': props.selected,
    'cc2-button--progress': props.progress,
    'cc2-button--readonly': props.readonly,
    [`cc2-button--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`cc2-button--intent--${props.intent}`]: inArray(propsValues.intent, props.intent),
    [`cc2-button--size--${props.size}`]: inArray(propsValues.size, props.size),
    'cc2-button--normal': props.normal,
    'cc2-button--loading': props.loading,
    'cc2-button--primary': props.primary && !props.secondary && !props.outline && !props.ghost && !props.link,
    'cc2-button--secondary': props.secondary,
    'cc2-button--outline': props.outline,
    'cc2-button--ghost': props.ghost,
    'cc2-button--link': props.link
    // :classes-values [!] System label / Системная метка
  }
  // TODO: User subclasses / Пользовательские подклассы
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // TODO: User styles / Пользовательские стили
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ButtonDesign(
  'cc2.button',
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

@include initDesignBasic('cc2.button') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinButton;

  // Styles from tokens
  // Стили из токенов
  @include mixinButtonToken;

  padding: var(--cc2-button-padding);

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
