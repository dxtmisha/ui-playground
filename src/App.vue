<script setup lang="ts">
import { createElement } from '../functions/element.ts'

import { MutationGlobal } from '../classes/mutation/MutationGlobal.ts'

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

  MutationGlobal.comp('test', {
    label: `number: ${num}`,
    slots: {
      default: ['update']
    }
  })
}

const onRemove = (event: MouseEvent) => {
  const button = (event.target as HTMLElement)?.closest('span[data-ui]')

  if (button) {
    button.remove()
  }
}

MutationGlobal.comp('test', {
  onClick: (event: Event, data: any) => {
    console.log('event', event, data)
  }
})
</script>

<template>
  <div>
    <button @click="onClick">add</button>
    <m3-mutation />
    <div id="ui-test" @click="onRemove">
      <span
        id="test"
        data-ui="button"
        data-icon="home"
        data-label="Label"
      >
        <span>Label</span>
        <span>/</span>
        <span>Span</span>
      </span>
    </div>
  </div>
</template>

<style>
</style>
