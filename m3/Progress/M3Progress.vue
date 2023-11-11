<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { ProgressDesign } from '../../constructors/Progress/ProgressDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type ProgressEmits,
  type ProgressSlots
} from '../../constructors/Progress/types'

import {
  propsInstruction,
  propsValues
} from './props'

const emits = defineEmits<ProgressEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-progress': true,
    'm3-progress--linear': props.linear && !props.circular,
    'm3-progress--circular': props.circular,
    [`m3-progress--indeterminate--${props.indeterminate}`]: inArray(propsValues.indeterminate, props.indeterminate),
    [`m3-progress--position--${props.position}`]: inArray(propsValues.position, props.position),
    'm3-progress--dense': props.dense,
    'm3-progress--inverse': props.inverse
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ProgressDesign(
  'm3.progress',
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

defineSlots<ProgressSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Progress/style";
@import "styleToken";

@include initDesignBasic('m3.progress') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinProgress;

  // Styles from tokens
  // Стили из токенов
  @include mixinProgressToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
