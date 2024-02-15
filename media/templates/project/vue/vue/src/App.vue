<script setup lang="ts">
import { useTranslateRef } from 'ui'

const translate = useTranslateRef([
  'about',
  'shop'
] as const)
</script>

<template>
  <div class="c2-main">
    <div class="flex items-center justify-center h-24">
      Кодируем здесь...
    </div>
    <div class="flex gap-4 justify-center">
      <router-link to="/about">{{ translate.about }}</router-link>
      |
      <router-link to="/shop">{{ translate.shop }}</router-link>
    </div>
    <div class="pt-12">
      <router-view/>
    </div>
    <div>

    </div>
  </div>
</template>

<style lang="sass">
</style>
