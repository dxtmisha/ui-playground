<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/data'
// import { inArray } from '../../functions/object'

import { CheckboxDesign } from '../../constructors/Checkbox/CheckboxDesign'

import M3Image from '../Image/M3Image.vue'
import M3FieldMessage from '../FieldMessage/M3FieldMessage.vue'
import M3Ripple from '../Ripple/M3Ripple.vue'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type CheckboxEmits,
  type CheckboxSlots
} from '../../constructors/Checkbox/types'

import {
  propsInstruction // ,
  // propsValues
} from './props'

defineOptions({
  name: 'M3Checkbox'
})

const emits = defineEmits<CheckboxEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-checkbox': true,
    'm3-checkbox--required': props.required
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CheckboxDesign(
  'm3.checkbox',
  props,
  {
    emits,
    components: {
      icon: M3Image,
      message: M3FieldMessage,
      ripple: M3Ripple
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

defineSlots<CheckboxSlots>()
defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Checkbox/style";
@import "styleToken";

@include initDesignBasic('m3.checkbox') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinCheckbox;

  // Styles from tokens
  // Стили из токенов
  @include mixinCheckboxToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
