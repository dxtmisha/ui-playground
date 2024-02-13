<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data'
// import { inArray } from '../../functions/object'

import { FieldMessageDesign } from '../../constructors/FieldMessage/FieldMessageDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type FieldMessageEmits,
  type FieldMessageSlots
} from '../../constructors/FieldMessage/types'

import {
  propsInstruction // ,
  // propsValues
} from './props'

const emits = defineEmits<FieldMessageEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-fieldMessage': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new FieldMessageDesign(
  'm3.fieldMessage',
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

defineSlots<FieldMessageSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/FieldMessage/style";
@import "styleToken";

@include initDesignBasic('m3.fieldMessage') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinFieldMessage;

  // Styles from tokens
  // Стили из токенов
  @include mixinFieldMessageToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
