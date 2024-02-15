<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data'
import { inArray } from '../../functions/object'

import { MaskDesign } from '../../constructors/Mask/MaskDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type MaskEmits,
  type MaskSlots
} from '../../constructors/Mask/types'

import {
  propsInstruction,
  propsValues
} from './props'

defineOptions({
  name: 'M3Mask'
})

const emits = defineEmits<MaskEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-mask': true,
    'm3-mask--visible': props.visible,
    'm3-mask--right': props.right,
    [`m3-mask--dir--${props.dir}`]: inArray(propsValues.dir, props.dir)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MaskDesign(
  'm3.mask',
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

defineSlots<MaskSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Mask/style";
@import "styleToken";

@include initDesignBasic('m3.mask') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinMask;

  // Styles from tokens
  // Стили из токенов
  @include mixinMaskToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
