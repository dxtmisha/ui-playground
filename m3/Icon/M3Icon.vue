<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { IconDesign } from '../../constructors/Icon/IconDesign'

import M3Image from '../Image/M3Image.vue'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type IconEmits,
  type IconSlots
} from '../../constructors/Icon/types'

import {
  propsInstruction,
  propsValues
} from './props'

const emits = defineEmits<IconEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-icon': true,
    'm3-icon--turn': props.turn,
    'm3-icon--disabled': props.disabled,
    'm3-icon--hide': props.hide,
    [`m3-icon--animationType--${props.animationType}`]: inArray(propsValues.animationType, props.animationType),
    'm3-icon--animationShow': props.animationShow,
    'm3-icon--overlay': props.overlay,
    'm3-icon--dynamic': props.dynamic,
    'm3-icon--start': props.start,
    'm3-icon--end': props.end,
    'm3-icon--high': props.high,
    [`m3-icon--rounded--${props.rounded}`]: inArray(propsValues.rounded, props.rounded),
    [`m3-icon--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new IconDesign(
  'm3.icon',
  props,
  {
    emits,
    components: {
      image: M3Image
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

defineSlots<IconSlots>()
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
@import "../../constructors/Icon/style";
@import "styleToken";

@include initDesignBasic('m3.icon') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinIcon;

  // Styles from tokens
  // Стили из токенов
  @include mixinIconToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
