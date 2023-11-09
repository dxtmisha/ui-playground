<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { ChipDesign } from '../../constructors/Chip/ChipDesign'

import Md3Icon from '../Icon/Md3Icon.vue'
import Md3Progress from '../Progress/Md3Progress.vue'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type ChipEmits,
  type ChipSlots
} from '../../constructors/Chip/types'

import {
  propsInstruction,
  propsValues
} from './props'

const emits = defineEmits<ChipEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'md3-chip': true,
    'md3-chip--focus': props.focus,
    'md3-chip--selected': props.selected,
    'md3-chip--progress': props.progress,
    'md3-chip--disabled': props.disabled,
    [`md3-chip--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`md3-chip--height--${props.height}`]: inArray(propsValues.height, props.height),
    'md3-chip--outlined': props.outlined && !props.elevated,
    'md3-chip--outlined--disabled': props.outlined && !props.elevated && props.disabled,
    'md3-chip--outlined--selected': props.outlined && !props.elevated && props.selected,
    'md3-chip--elevated': props.elevated,
    'md3-chip--elevated--disabled': props.elevated && props.disabled,
    'md3-chip--elevated--selected': props.elevated && props.selected,
    'md3-chip--avatar': props.avatar,
    'md3-chip--dragged': props.dragged,
    [`md3-chip--palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ChipDesign(
  'md3.chip',
  props,
  {
    emits,
    components: {
      icon: Md3Icon,
      progress: Md3Progress
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

defineSlots<ChipSlots>()
defineExpose(design.expose())
</script>

<template>
  <render>
    <slot />
  </render>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Chip/style";
@import "styleToken";

@include initDesignBasic('md3.chip') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinChip;

  // Styles from tokens
  // Стили из токенов
  @include mixinChipToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
