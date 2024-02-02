<script setup lang="ts">
import { createElement } from '../functions/element.ts'

let num = 1

const onClick = () => {
  createElement(
    document.getElementById('ui-test') ?? undefined,
    'span',
    {
      dataset: {
        ui: 'm3-button',
        icon: 'home',
        label: `Label ${num++}`
      }
    }
  )
}

const onRemove = (event: MouseEvent) => {
  const button = (event.target as HTMLElement)?.closest('span[data-ui]')

  if (button) {
    button.remove()
  }
}
</script>

<template>
  <div>
    <button @click="onClick">add</button>
    <m3-mutation />
    <div id="ui-test" @click="onRemove">
      <span
        data-ui="m3-button"
        data-icon="home"
        data-label="Label"
      />
    </div>
  </div>
</template>

<style>
</style>
