<script setup lang="ts">
import { ref } from 'vue'
import { GeoRef } from '../../classes/ref/GeoRef.ts'

defineProps<{ msg: string }>()

const country = GeoRef.getCountry()
const language = GeoRef.getLanguage()
const standard = GeoRef.getStandard()

const onGeo = (code: string) => GeoRef.set(code)

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div>
    {{ country }} / {{ language }} / {{ standard }}
  </div>

  <div>
    <button @click="onGeo('ru-RU')">ru-RU</button>
    <button @click="onGeo('vi-VN')">vi-VN</button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
    >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
