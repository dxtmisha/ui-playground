<script setup lang="ts">
import { useTranslateRef } from 'ui'

const translate = useTranslateRef([
  'main'
] as const)
</script>

<template>
  <div>
    <h1 class="c2-font--heading--sm">{{ translate.main }}</h1>
  </div>
</template>

<style scoped lang="scss">

</style>
