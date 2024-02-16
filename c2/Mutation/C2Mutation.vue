<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data'
// import { inArray } from '../../functions/object'

import { MutationDesign } from '../../constructors/Mutation/MutationDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type MutationEmits,
  type MutationSlots
} from '../../constructors/Mutation/types'

import {
  propsInstruction // ,
  // propsValues
} from './props'

defineOptions({
  name: 'C2Mutation'
})

const emits = defineEmits<MutationEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-mutation': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MutationDesign(
  'c2.mutation',
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

defineSlots<MutationSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Mutation/style";
@import "styleToken";

@include initDesignBasic('c2.mutation') {
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
