<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

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

const emits = defineEmits<ChipEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-chip': true,
    'm3-chip--focus': props.focus,
    'm3-chip--selected': props.selected,
    'm3-chip--progress': props.progress,
    'm3-chip--readonly': props.readonly,
    'm3-chip--disabled': props.disabled,
    [`m3-chip--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`m3-chip--height--${props.height}`]: inArray(propsValues.height, props.height),
    'm3-chip--outlined': props.outlined && !props.elevated,
    'm3-chip--outlined--disabled': props.outlined && !props.elevated && props.disabled,
    'm3-chip--outlined--selected': props.outlined && !props.elevated && props.selected,
    'm3-chip--elevated': props.elevated,
    'm3-chip--elevated--disabled': props.elevated && props.disabled,
    'm3-chip--elevated--selected': props.elevated && props.selected,
    'm3-chip--input': props.input && !props.assist && !props.filter && !props.suggestion,
    'm3-chip--input--outlined': props.input && !props.assist && !props.filter && !props.suggestion && props.outlined,
    'm3-chip--input--outlined--dragged': props.input && !props.assist && !props.filter && !props.suggestion && props.outlined && props.dragged,
    'm3-chip--assist': props.assist,
    'm3-chip--assist--elevated': props.assist && props.elevated,
    'm3-chip--assist--elevated--dragged': props.assist && props.elevated && props.dragged,
    'm3-chip--filter': props.filter,
    'm3-chip--filter--selected': props.filter && props.selected,
    'm3-chip--filter--outlined': props.filter && props.outlined,
    'm3-chip--filter--outlined--dragged': props.filter && props.outlined && props.dragged,
    'm3-chip--filter--outlined--selected': props.filter && props.outlined && props.selected,
    'm3-chip--filter--outlined--selected--dragged': props.filter && props.outlined && props.selected && props.dragged,
    'm3-chip--filter--elevated': props.filter && props.elevated,
    'm3-chip--filter--elevated--dragged': props.filter && props.elevated && props.dragged,
    'm3-chip--suggestion': props.suggestion,
    'm3-chip--suggestion--outlined': props.suggestion && props.outlined,
    'm3-chip--suggestion--outlined--dragged': props.suggestion && props.outlined && props.dragged,
    'm3-chip--suggestion--outlined--selected': props.suggestion && props.outlined && props.selected,
    'm3-chip--suggestion--outlined--selected--dragged': props.suggestion && props.outlined && props.selected && props.dragged,
    'm3-chip--suggestion--elevated': props.suggestion && props.elevated,
    'm3-chip--suggestion--elevated--dragged': props.suggestion && props.elevated && props.dragged,
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
