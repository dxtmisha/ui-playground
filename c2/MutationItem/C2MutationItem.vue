<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data'
// import { inArray } from '../../functions/object'

import { MutationItemDesign } from '../../constructors/MutationItem/MutationItemDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type MutationItemEmits,
  type MutationItemSlots
} from '../../constructors/MutationItem/types'

import {
  propsInstruction //,
  // propsValues
} from './props'

defineOptions({
  name: 'C2MutationItem'
})

const emits = defineEmits<MutationItemEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-mutationItem': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MutationItemDesign(
  'c2.mutationItem',
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
  <render/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/MutationItem/style";
@import "styleToken";

@include initDesignBasic('c2.mutationItem') {
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
