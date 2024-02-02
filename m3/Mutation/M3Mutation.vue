<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
// import { inArray } from '../../functions/object.ts'

import { MutationDesign } from '../../constructors/Mutation/MutationDesign.ts'

import M3MutationItem from '../MutationItem/M3MutationItem.vue'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type MutationEmits,
  type MutationSlots
} from '../../constructors/Mutation/types.ts'

import {
  propsInstruction // ,
  // propsValues
} from './props.ts'

const emits = defineEmits<MutationEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-mutation': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MutationDesign(
  'm3.mutation',
  props,
  {
    emits,
    components: {
      item: M3MutationItem
    },
    classes: classesToken,
    styles: stylesToken
  }
)

// const {
//   classes,
//   styles
// } = design.setup()
const render = design.render()

defineSlots<MutationSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Mutation/style";
@import "styleToken";

@include initDesignBasic('m3.mutation') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinMutation;

  // Styles from tokens
  // Стили из токенов
  @include mixinMutationToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
