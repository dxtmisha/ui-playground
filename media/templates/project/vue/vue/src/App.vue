<script setup lang="ts">
import { useTranslateRef } from 'ui'

const translate = useTranslateRef([
  'about'
] as const)
</script>

<template>
  <div class="c2-main">
    <div class="flex items-center justify-center h-24">
      Кодируем здесь...
      <div class="flex gap-4">
        <router-link to="/about">{{ translate.about }}</router-link>
        <router-link to="/shop"/>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
</style>
