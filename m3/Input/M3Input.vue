<script setup lang="ts">
import { computed } from 'vue'

import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { InputDesign } from '../../constructors/Input/InputDesign.ts'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type InputEmits,
  type InputSlots
} from '../../constructors/Input/types.ts'

import {
  propsInstruction,
  propsValues
} from './props.ts'

const emits = defineEmits<InputEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // TODO: User state classes / Пользовательские классы состояния
    // :classes-values [!] System label / Системная метка
    'm3-input': true
    // :classes-values [!] System label / Системная метка
  }
  // TODO: User subclasses / Пользовательские подклассы
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // TODO: User styles / Пользовательские стили
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputDesign(
  'm3.input',
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

defineSlots<InputSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Input/style";
@import "styleToken";

@include initDesignBasic('m3.input') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinInput;

  // Styles from tokens
  // Стили из токенов
  @include mixinInputToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
