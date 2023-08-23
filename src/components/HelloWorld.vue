<script setup lang="ts">
import { ref } from 'vue'
import { useGeo } from '../../composables/useGeo.ts'
import {
  useCountryName,
  useCurrency,
  useDecimal,
  useLanguageName,
  useNumber, usePercent, usePercentBy100,
  useUnit
} from '../../composables/useIntl.ts'

defineProps<{ msg: string }>()

const button1 = ref()
const button2 = ref()

const { setGeo } = useGeo()
const [language] = useLanguageName()
const [languageUS] = useLanguageName('en-US')
const [country] = useCountryName()
const [numberFormat, number] = useNumber(1000.5)
const [currencyFormat, currency, currencyCode] = useCurrency(number, 'USD')
const [unitFormat] = useUnit(number, 'centimeter')
const [percent] = usePercent(number)
const [percentBy100] = usePercentBy100(number)
const decimal = useDecimal()

const onClickVn = () => setGeo('vi-VN')
const onClickRu = () => setGeo('ru-RU')
const onClickRub = () => {
  currencyCode.value = 'RUB'
}
const onClickVnd = () => {
  currencyCode.value = 'VND'
}

setInterval(() => {
  number.value += 1500
}, 1000)

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

  {{ country }} / {{ language }} / {{ languageUS }}

  <div>{{ numberFormat }} ({{ decimal }})</div>
  <div>{{ currencyFormat }}</div>
  <div>{{ unitFormat }}</div>
  <div>{{ percent }}</div>
  <div>{{ percentBy100 }}</div>

  <div>
    <button ref="button1" @click="onClickVn">VN</button>
    <button ref="button2" @click="onClickRu">RU</button>
    <button @click="onClickRub">RUB</button>
    <button @click="onClickVnd">VND</button>
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
