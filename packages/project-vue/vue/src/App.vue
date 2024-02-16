<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTranslateRef } from 'ui'

const route = useRoute()
const router = useRouter()
const translate = useTranslateRef([
  'about',
  'return',
  'shop'
] as const)

const isMain = computed(() => route.path === '/')
const onClick = () => router.push('/')
</script>

<template>
  <div class="c2-main">
    <div class="flex gap-4 justify-center">
      <router-link to="/about">{{ translate.about }}</router-link>
      |
      <router-link to="/shop">{{ translate.shop }}</router-link>
    </div>
    <div class="pt-12">
      <router-view/>
    </div>
    <div
      v-if="!isMain"
      class="flex justify-center pt-16"
    >
      <c2-button :label="translate.return" @click="onClick"/>
    </div>
  </div>
</template>

<style lang="sass">
</style>
