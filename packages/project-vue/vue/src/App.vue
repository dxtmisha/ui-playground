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
  <!--Класс c2-init обязательно-->
  <div class="c2-init my-6">
    <div class="flex gap-4">
      <router-link class="c2-link" to="/about">{{ translate.about }}</router-link>
      |
      <router-link class="c2-link" to="/shop">{{ translate.shop }}</router-link>
    </div>
    <div class="pt-12">
      <router-view/>
    </div>
    <div
      v-if="!isMain"
      class="flex pt-16"
    >
      <c2-button
        :label="translate.return"
        icon="arrow-right-lg"
        @click="onClick"
      />
    </div>
  </div>
</template>

<style lang="scss">
// Для использования токен надо подключить 1 из скрипт ниже, в зависимости какой версия дизайна надо
// @import "ui/c1/use";
@import "ui/c2/use";

// ВНИМАНМЯ: при копировании свойства из Figma, где используется токен, нужно заменить функцию var на t или tColor, если это цвет
// пример:
// border-radius: var(--st-selectable-borderRadius-size-xl, 12px); => border-radius: t(--st-selectable-borderRadius-size-xl, 12px);
// background: var(--st-action-bg-color-primary-solid-normal, #F36355); => background: tColor(--st-action-bg-color-primary-solid-normal, #F36355);

.c2-link {
  color: tColor(--st-action-bg-color-primary-solid-normal, #F36355);

  &:hover {
    text-decoration: underline;
  }
}
</style>
