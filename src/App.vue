<script setup lang="ts">
import { M3Button } from '../m3/Button'
import { useTranslateRef } from '../composables/useTranslateRef.ts'
import { makeIconsGlobal } from '../c2/icons.ts'

makeIconsGlobal()

const text = useTranslateRef([
  'main',
  'test'
] as const)
</script>

<template>
  <m3-button icon="share-02">{{ text.test }}</m3-button>
</template>

<style>
</style>
