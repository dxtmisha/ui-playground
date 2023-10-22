<script setup lang="ts">
import { computed } from 'vue'
import { ButtonDesign } from '../../constructors/Button/ButtonDesign'

import { type ConstrClasses } from '../../types/constructor'
import {
  type ButtonEmits,
  type ButtonSlots
} from '../../constructors/Button/types'

import { propsInstruction } from './props'

const emits = defineEmits<ButtonEmits>()
const props = defineProps({ ...propsInstruction })
const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // TODO: User state classes / Пользовательские классы состояния
    // :classes [!] System label / Системная метка
    // :classes [!] System label / Системная метка
  }
  // TODO: User subclasses / Пользовательские подклассы
}))

const design = new ButtonDesign(
  'md3-button',
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
