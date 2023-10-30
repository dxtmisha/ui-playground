<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { IconDesign } from '../../constructors/Icon/IconDesign'

import Md3Image from '../Image/Md3Image.vue'

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
    'md3-icon': true,
    'md3-icon--turn': props.turn,
    'md3-icon--disabled': props.disabled,
    'md3-icon--hide': props.hide,
    [`md3-icon--animationType--${props.animationType}`]: inArray(propsValues.animationType, props.animationType),
    'md3-icon--animationShow': props.animationShow,
    'md3-icon--overlay': props.overlay,
    'md3-icon--dynamic': props.dynamic,
    'md3-icon--start': props.start,
    'md3-icon--end': props.end,
    'md3-icon--high': props.high,
    [`md3-icon--rounded--${props.rounded}`]: inArray(propsValues.rounded, props.rounded),
    [`md3-icon--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new IconDesign(
  'md3.icon',
  props,
  {
    components: {
      image: Md3Image
    },
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

@include initDesign('md3.icon') {
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
