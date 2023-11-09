<script setup lang="ts">
// :component.once import { computed } from 'vue'

// :component.once import { isFilled } from '../../functions/data.ts'
// :component.once import { inArray } from '../../functions/object.ts'

// :component.once import { ComponentDesign } from '../../constructors/Component/ComponentDesign'

// :component.once import {
// :component.once   type ConstrClasses,
// :component.once   type ConstrStyles
// :component.once } from '../../../types/constructor'
// :component.once import {
// :component.once   type ComponentEmits,
// :component.once   type ComponentSlots
// :component.once } from '../../constructors/Component/types'

// :component.once import {
// :component.once   propsInstruction,
// :component.once   propsValues
// :component.once } from './props'

// :component.once const emits = defineEmits<ComponentEmits>()
// :component.once const props = defineProps({ ...propsInstruction })

// :component.once const classesToken = computed<ConstrClasses>(() => ({
// :component.once   main: {
// :component.once     // TODO: User state classes / Пользовательские классы состояния
// :component.once     // :classes-values [!] System label / Системная метка
// :component.once     // :classes-values [!] System label / Системная метка
// :component.once   }
// :component.once   // TODO: User subclasses / Пользовательские подклассы
// :component.once }))
// :component.once const stylesToken = computed<ConstrStyles>(() => ({
// :component.once   // TODO: User styles / Пользовательские стили
// :component.once   // :styles-values [!] System label / Системная метка
// :component.once   // :styles-values [!] System label / Системная метка
// :component.once }))

// :component.once const design = new ComponentDesign(
// :component.once   '[design].[component]',
// :component.once   props,
// :component.once   {
// :component.once     emits,
// :component.once     classes: classesToken,
// :component.once     styles: stylesToken
// :component.once   }
// :component.once )

// const {
//   classes,
//   styles
// } = design.setup()
// :component.once const render = design.render()

// :component.once defineSlots<ComponentSlots>()
// :component.once defineExpose(design.expose())
</script>

<template>
  <render />
</template>

<style lang="scss">
// :component.once @import "../styles/properties";
@import "../../../styles/properties";
// :component.once @import "../../constructors/Component/style";
@import "styleToken";

@include initDesignBasic('[design].[component]') {
  // Basic styles for a component
  // Базовый стили для компонента
  // :component.once @include mixinComponent;

  // Styles from tokens
  // Стили из токенов
  // :component.once @include mixinComponentToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
