<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { EventItem } from '../../classes/EventItem.ts'

defineProps<{ msg: string }>()

const button1 = ref()
const button2 = ref()
const button2show = ref(true)

onMounted(() => {
  const eventItem = new EventItem(button1.value, 'click', (event: Event) => {
    console.log('event1', event)
  })

  eventItem.start()
  eventItem.setDetail({
    a: 1,
    b: 2
  })

  setTimeout(() => eventItem.setElementControl(button2.value), 2000)
  setTimeout(() => {
    button2show.value = false
  }, 4000)
  setTimeout(() => eventItem.stop(), 16000)

  console.log('event', eventItem)
})

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

  <button ref="button1">Event 1</button>
  <button v-if="button2show" ref="button2">Event 2</button>

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
