<script setup lang="ts">
import { ref } from 'vue'

import Md3Image from '../../md3/Image/Md3Image.vue'
import Md3Icon from '../../md3/Icon/Md3Icon.vue'

import s32 from './../assets/Galaxy_S23p.png'
import fold from './../assets/Galaxy_Z_Fold5.png'
import flip from './../assets/Galaxy_Z_Flip5.png'
import pad from './../assets/pad.png'

import { type ImageEventLoad } from '../../constructors/Image/typesBasic.ts'

const value = ref('edit')
const active = ref(false)
const adaptive = ref(false)
const turn = ref(false)
const disabled = ref(false)
const onLoad = (event: ImageEventLoad) => {
  console.log('event', event)
}

setInterval(() => {
  value.value = '#ff0000'
  active.value = !active.value
  adaptive.value = !adaptive.value
  turn.value = !turn.value
  disabled.value = !disabled.value
  console.log('color')
}, 1600)
</script>

<template>
  <div>
    <div style="display: flex;">
      <md3-icon :icon="value" />
      <md3-icon icon="face" :icon-active="value" :active="active" @load="onLoad" />
      <md3-icon icon="face" :icon-active="value" :disabled="disabled" @load="onLoad" />
      <md3-icon
        icon="face"
        icon-active="https://drscdn.500px.org/photo/295251975/q%3D50_w%3D1000_of%3D1/v2?sig=9ca0a690bd15614f702b389a6c121c6d796ece98b6086cee5d50ca1f9f23dc9a"
        :active="active"
        :turn="turn"
        @load="onLoad"
      />
      <md3-icon />
      <md3-icon>
        <template v-slot:default>DE</template>
      </md3-icon>
    </div>
    <div style="display: flex;">
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image value="@vue" :turn="turn" />
      </div>
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image value="close" />
      </div>
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image :value="value" />
      </div>
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image
          :disabled="disabled"
          value="https://drscdn.500px.org/photo/295251975/q%3D50_w%3D1000_of%3D1/v2?sig=9ca0a690bd15614f702b389a6c121c6d796ece98b6086cee5d50ca1f9f23dc9a"
        />
      </div>
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image
          disabled
          value="https://drscdn.500px.org/photo/295251975/q%3D50_w%3D1000_of%3D1/v2?sig=9ca0a690bd15614f702b389a6c121c6d796ece98b6086cee5d50ca1f9f23dc9a"
          @load="onLoad"
        />
      </div>
    </div>
    <div style="display: flex;">
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image :value="s32" adaptive object-width="76.2" object-height="157.8" />
      </div>
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image :value="fold" adaptive object-width="129.9" object-height="154.9" />
      </div>
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image :value="flip" :adaptive="adaptive" object-width="71.9" object-height="165.1" />
      </div>
    </div>
    <div style="display: flex; padding-top: 800px">
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image :value="pad" adaptive object-width="285.4" object-height="185.4" />
      </div>
    </div>
  </div>
</template>

<style></style>
