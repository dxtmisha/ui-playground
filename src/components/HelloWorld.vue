<script setup lang="ts">
import { isProxy, ref } from 'vue'
import { Cache } from '../../classes/Cache.ts'
import { Env } from '../../classes/static/Env.ts'
import { useEnv } from '../../composables/static/useEnv.ts'
import { useStorage } from '../../composables/ref/useStorage.ts'
import { useSession } from '../../composables/ref/useSession.ts'

const prop = defineProps<{ msg: string }>()
const a = useStorage('a', 123)
a.value = 456

Cache.get('test', () => 35)
console.log(
  Cache.get('test', () => 86),
  Cache.get('test', () => 99),
  new Env('cache').get(),
  useEnv('cache'),
  isProxy(prop),
  a.value,
  useSession('s', 'g').value
)

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
