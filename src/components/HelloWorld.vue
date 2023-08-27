<script setup lang="ts">
import { ref } from 'vue'
import { GeoRef } from '../../classes/ref/GeoRef.ts'
import { GeoIntlRef } from '../../classes/ref/GeoIntlRef.ts'
import { useHash } from '../../composables/ref/useHash.ts'
import { EventRef } from '../../classes/ref/EventRef.ts'
import { Datetime } from '../../classes/static/Datetime.ts'

defineProps<{ msg: string }>()

const button = ref()
const number = ref(1000)
const hash = useHash('test', 1000)
const hash2 = useHash('test2', 1000)

const country = GeoRef.getCountry()
const language = GeoRef.getLanguage()
const standard = GeoRef.getStandard()
const numberFormat = new GeoIntlRef().currency(number, 'RUB')

const onGeo = (code: string) => {
  GeoRef.set(code)
  number.value += 1100.20
  hash.value += 1200.30
}

const event = new EventRef(document.body, button, 'click', () => {
  console.log('ok')
})
event.start()

const datetime = new Datetime('1987-09-02 15:04:05', 'datetime')

console.log(
  'datetime',
  datetime.getDate(),
  datetime.getTimeZone()
)
console.log(datetime.getFirstDayCode())
console.log(datetime.getYear())
console.log(datetime.getMonth())
console.log(datetime.getDay())
console.log(datetime.getHour())
console.log(datetime.getMinute())
console.log(datetime.getSecond())
console.log(datetime.getMaxDay())
console.log(datetime.locale())
console.log(datetime.localeYear())
console.log(datetime.localeMonth())
console.log(datetime.localeDay())
console.log(datetime.localeHour())
console.log(datetime.localeMinute())
console.log(datetime.localeSecond())
console.log(datetime.standard())

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
    {{ numberFormat }}
  </div>

  <div>
    {{ hash }}
  </div>

  <div>
    {{ hash2 }}
  </div>

  <div>
    <button @click="onGeo('ru-RU')">ru-RU</button>
    <button @click="onGeo('vi-VN')">vi-VN</button>
    <button ref="button">Event</button>
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
