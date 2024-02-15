<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data'
import { inArray } from '../../functions/object'

import { ChipDesign } from '../../constructors/Chip/ChipDesign'

import M3Icon from '../Icon/M3Icon.vue'
import M3Progress from '../Progress/M3Progress.vue'

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

defineOptions({
  name: 'M3Chip'
})

const emits = defineEmits<ChipEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-chip': true,
    'm3-chip--focus': props.focus,
    'm3-chip--disabled': props.disabled,
    'm3-chip--selected': props.selected,
    'm3-chip--loading': props.loading,
    'm3-chip--readonly': props.readonly,
    [`m3-chip--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`m3-chip--height--${props.height}`]: inArray(propsValues.height, props.height),
    'm3-chip--outlined': props.outlined && !props.elevated,
    'm3-chip--elevated': props.elevated,
    'm3-chip--input': props.input && !props.assist && !props.filter && !props.suggestion,
    'm3-chip--assist': props.assist,
    'm3-chip--filter': props.filter,
    'm3-chip--suggestion': props.suggestion,
    'm3-chip--avatar': props.avatar,
    'm3-chip--dragged': props.dragged,
    [`m3-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ChipDesign(
  'm3.chip',
  props,
  {
    emits,
    components: {
      icon: M3Icon,
      progress: M3Progress
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

@include initDesignBasic('m3.chip') {
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
