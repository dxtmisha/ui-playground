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
  <div>
    <md3-image :value="value" />
    <md3-image value="https://drscdn.500px.org/photo/295251975/q%3D50_w%3D1000_of%3D1/v2?sig=9ca0a690bd15614f702b389a6c121c6d796ece98b6086cee5d50ca1f9f23dc9a" />
  </div>
</template>

<style></style>
