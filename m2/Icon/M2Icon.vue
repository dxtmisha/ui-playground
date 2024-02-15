<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data'
import { inArray } from '../../functions/object'

import { IconDesign } from '../../constructors/Icon/IconDesign'

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
import M2Image from '../Image/M2Image.vue'

defineOptions({
  name: 'M2Icon'
})

const emits = defineEmits<IconEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm2-icon': true,
    'm2-icon--turn': props.turn,
    'm2-icon--disabled': props.disabled,
    'm2-icon--hide': props.hide,
    [`m2-icon--animationType--${props.animationType}`]: inArray(propsValues.animationType, props.animationType),
    'm2-icon--animationShow': props.animationShow,
    'm2-icon--overlay': props.overlay,
    'm2-icon--dynamic': props.dynamic,
    'm2-icon--start': props.start,
    'm2-icon--end': props.end,
    'm2-icon--high': props.high,
    [`m2-icon--rounded--${props.rounded}`]: inArray(propsValues.rounded, props.rounded),
    [`m2-icon--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new IconDesign(
  'm2.icon',
  props,
  {
    emits,
    components: {
      image: M2Image
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

@include initDesignBasic('m2.icon') {
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
