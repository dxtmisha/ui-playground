<script setup lang="ts">
import Md3Image from '../../md3/Image/Md3Image.vue'
import { ref } from 'vue'

const value = ref('edit')

setTimeout(() => {
  value.value = '#ff0000'
  console.log('color')
}, 3000)
</script>

<template>
  <md3-image :value="value" />
</template>

<style></style>
