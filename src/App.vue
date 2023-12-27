<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import DemoButton from './components/DemoButton.vue'
import DemoChip from './components/DemoChip.vue'
import DemoIcon from './components/DemoIcon.vue'
import DemoImage from './components/DemoImage.vue'
import DemoProgress from './components/DemoProgress.vue'
import DemoMask from './components/DemoMask.vue'
import DemoCc2Token from './components/demo/cc2/DemoCc2Token.vue'
import Cc2Button from '../cc2/Button/Cc2Button.vue'
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
  <div class="demo-main cc2-main">
    <demo-cc2-token />
  </div>

  <cc2-button label="label" />
  <cc2-button label="label" size="md" />
  <cc2-button label="label" size="x" />
  <cc2-button label="label" selected />
  <cc2-button label="label" disabled />

  <cc2-button label="label" ghost />
  <cc2-button label="label" ghost size="md" />
  <cc2-button label="label" ghost size="x" />
  <cc2-button label="label" ghost selected />
  <cc2-button label="label" ghost disabled />

  <cc2-button label="label" secondary />
  <cc2-button label="label" secondary size="md" />
  <cc2-button label="label" secondary size="x" />
  <cc2-button label="label" secondary selected />
  <cc2-button label="label" secondary disabled />

  <cc2-button label="label" outline />
  <cc2-button label="label" outline size="md" />
  <cc2-button label="label" outline size="x" />
  <cc2-button label="label" outline selected />
  <cc2-button label="label" outline disabled />

  <cc2-button label="label" link />
  <cc2-button label="label" link size="md" />
  <cc2-button label="label" link size="x" />
  <cc2-button label="label" link selected />
  <cc2-button label="label" link disabled />

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
