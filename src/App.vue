<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import DemoButton from './components/DemoButton.vue'
import DemoChip from './components/DemoChip.vue'
import DemoIcon from './components/DemoIcon.vue'
import DemoImage from './components/DemoImage.vue'
import DemoProgress from './components/DemoProgress.vue'
import DemoMask from './components/DemoMask.vue'
import DemoCc2Token from './components/demo/cc2/DemoCc2Token.vue'
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
