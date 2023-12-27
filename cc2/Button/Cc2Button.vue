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
    [`cc2-button--icon--${props.icon}`]: inArray(propsValues.icon, props.icon),
    'cc2-button--selected': props.selected,
    'cc2-button--progress': props.progress,
    'cc2-button--readonly': props.readonly,
    'cc2-button--disabled': props.disabled,
    'cc2-button--adaptive': props.adaptive,
    [`cc2-button--size--${props.size}`]: inArray(propsValues.size, props.size),
    'cc2-button--intent': Boolean(props.intent),
    [`cc2-button--intent--${props.intent}`]: inArray(propsValues.intent, props.intent),
    'cc2-button--primary': Boolean(props.primary) && !props.secondary && !props.outline && !props.ghost,
    [`cc2-button--primary--${props.primary}`]: inArray(propsValues.primary, props.primary),
    'cc2-button--secondary': Boolean(props.secondary),
    [`cc2-button--secondary--${props.secondary}`]: inArray(propsValues.secondary, props.secondary),
    'cc2-button--outline': Boolean(props.outline),
    [`cc2-button--outline--${props.outline}`]: inArray(propsValues.outline, props.outline),
    'cc2-button--ghost': Boolean(props.ghost),
    [`cc2-button--ghost--${props.ghost}`]: inArray(propsValues.ghost, props.ghost),
    'cc2-button--disable': props.disable
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

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
