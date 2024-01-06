<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import DemoButton from './components/DemoButton.vue'
import DemoChip from './components/DemoChip.vue'
import DemoIcon from './components/DemoIcon.vue'
import DemoImage from './components/DemoImage.vue'
import DemoProgress from './components/DemoProgress.vue'
import DemoMask from './components/DemoMask.vue'
import C2Button from '../c2/Button/C2Button.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <c2-button label="label" />
  <c2-button label="label" intent="informative" />
  <c2-button label="label" size="md" />
  <c2-button label="label" size="x" />
  <c2-button label="label" selected />
  <c2-button label="label" disabled />

  <c2-button label="label" ghost />
  <c2-button label="label" ghost size="md" />
  <c2-button label="label" ghost size="x" />
  <c2-button label="label" ghost selected />
  <c2-button label="label" ghost disabled />

  <c2-button label="label" secondary />
  <c2-button label="label" secondary size="md" />
  <c2-button label="label" secondary size="x" />
  <c2-button label="label" secondary selected />
  <c2-button label="label" secondary disabled />

  <c2-button label="label" outline />
  <c2-button label="label" outline size="md" />
  <c2-button label="label" outline size="x" />
  <c2-button label="label" outline selected />
  <c2-button label="label" outline disabled />

  <c2-button label="label" link />
  <c2-button label="label" link size="md" />
  <c2-button label="label" link size="x" />
  <c2-button label="label" link selected />
  <c2-button label="label" link disabled />

  <demo-mask />
  <demo-chip />
  <demo-button />
  <demo-progress />
  <demo-icon />
  <demo-image />
</template>

<style>
.demo-main {
  padding: 32px 16px;
}
</style>
