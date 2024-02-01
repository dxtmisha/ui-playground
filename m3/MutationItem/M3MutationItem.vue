<script setup lang="ts">
import { computed } from 'vue'

import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { MutationItemDesign } from '../../constructors/MutationItem/MutationItemDesign.ts'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type MutationItemEmits,
  type MutationItemSlots
} from '../../constructors/MutationItem/types.ts'

import {
  propsInstruction,
  propsValues
} from './props.ts'

const emits = defineEmits<MutationItemEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // TODO: User state classes / Пользовательские классы состояния
    // :classes-values [!] System label / Системная метка
    'm3-mutationItem': true
    // :classes-values [!] System label / Системная метка
  }
  // TODO: User subclasses / Пользовательские подклассы
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // TODO: User styles / Пользовательские стили
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MutationItemDesign(
  'm3.mutationItem',
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

defineSlots<MutationItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/MutationItem/style";
@import "styleToken";

@include initDesignBasic('m3.mutationItem') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinMutationItem;

  // Styles from tokens
  // Стили из токенов
  @include mixinMutationItemToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
