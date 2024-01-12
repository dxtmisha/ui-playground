<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { ProgressDesign } from '../../constructors/Progress/ProgressDesign.ts'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type ProgressEmits,
  type ProgressSlots
} from '../../constructors/Progress/types.ts'

import {
  propsInstruction,
  propsValues
} from './props.ts'

const emits = defineEmits<ProgressEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // TODO: User state classes / Пользовательские классы состояния
    // :classes-values [!] System label / Системная метка
    'c2-progress': true,
    'c2-progress--linear': props.linear && !props.circular,
    'c2-progress--circular': props.circular,
    [`c2-progress--indeterminate--${props.indeterminate}`]: inArray(propsValues.indeterminate, props.indeterminate),
    [`c2-progress--position--${props.position}`]: inArray(propsValues.position, props.position),
    'c2-progress--dense': props.dense,
    'c2-progress--inverse': props.inverse
    // :classes-values [!] System label / Системная метка
  }
  // TODO: User subclasses / Пользовательские подклассы
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // TODO: User styles / Пользовательские стили
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ProgressDesign(
  'c2.progress',
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

@include initDesignBasic('c2.progress') {
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
