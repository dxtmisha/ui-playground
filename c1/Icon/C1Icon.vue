<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { IconDesign } from '../../constructors/Icon/IconDesign.ts'

import C1Image from '../Image/C1Image.vue'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type IconEmits,
  type IconSlots
} from '../../constructors/Icon/types.ts'

import {
  propsInstruction,
  propsValues
} from './props.ts'

const emits = defineEmits<IconEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c1-icon': true,
    'c1-icon--turn': props.turn,
    'c1-icon--disabled': props.disabled,
    'c1-icon--hide': props.hide,
    [`c1-icon--animationType--${props.animationType}`]: inArray(propsValues.animationType, props.animationType),
    'c1-icon--animationShow': props.animationShow,
    'c1-icon--overlay': props.overlay,
    'c1-icon--dynamic': props.dynamic,
    'c1-icon--start': props.start,
    'c1-icon--end': props.end,
    'c1-icon--high': props.high,
    [`c1-icon--rounded--${props.rounded}`]: inArray(propsValues.rounded, props.rounded),
    [`c1-icon--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new IconDesign(
  'c1.icon',
  props,
  {
    emits,
    components: {
      image: C1Image
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
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Icon/style";
@import "styleToken";

@include initDesignBasic('c1.icon') {
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
