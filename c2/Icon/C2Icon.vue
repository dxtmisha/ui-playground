<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data.ts'
import { inArray } from '../../functions/object.ts'

import { IconDesign } from '../../constructors/Icon/IconDesign.ts'

import C2Image from '../Image/C2Image.vue'

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
    'c2-icon': true,
    'c2-icon--turn': props.turn,
    'c2-icon--disabled': props.disabled,
    'c2-icon--hide': props.hide,
    [`c2-icon--animationType--${props.animationType}`]: inArray(propsValues.animationType, props.animationType),
    'c2-icon--animationShow': props.animationShow,
    'c2-icon--overlay': props.overlay,
    'c2-icon--dynamic': props.dynamic,
    'c2-icon--start': props.start,
    'c2-icon--end': props.end,
    'c2-icon--high': props.high,
    [`c2-icon--variation--${props.variation}`]: inArray(propsValues.variation, props.variation),
    [`c2-icon--shape--${props.shape}`]: inArray(propsValues.shape, props.shape),
    [`c2-icon--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new IconDesign(
  'c2.icon',
  props,
  {
    components: {
      image: C2Image
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
  <render/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Icon/style";
@import "styleToken";

@include initDesignBasic('c2.icon') {
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
