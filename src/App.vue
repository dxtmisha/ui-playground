<script setup lang="ts">
import M3Mutation from '../m3/Mutation/M3Mutation.vue'
import { M3Button } from '../m3/Button'
import { useTranslateRef } from '../composables/useTranslateRef.ts'

const text = useTranslateRef([
  'main',
  'test'
] as const)
</script>

<template>
  <m3-mutation />
  <m3-button icon="home">{{ text.test }}</m3-button>
</template>

<style>
</style>
