<script setup lang="ts">
// TODO
</script>

<template>
  <div></div>
</template>

<style lang="scss">
// :component.once @import "../styles/properties";
@import "../../../styles/properties";
// :component.once @import "../../constructors/Component/style";
@import "styleToken";

@include initDesign('[design].[component]') {
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
