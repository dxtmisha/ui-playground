<script setup lang="ts">
import { ref } from 'vue'

import Md3Image from '../../md3/Image/Md3Image.vue'
import Md3Icon from '../../md3/Icon/Md3Icon.vue'

import s32 from './../assets/Galaxy_S23p.png'
import fold from './../assets/Galaxy_Z_Fold5.png'
import flip from './../assets/Galaxy_Z_Flip5.png'
import pad from './../assets/pad.png'

import { ImageEventData } from '../../constructors/Image/typesBasic.ts'
import { useTranslate } from '../../composables/ref/useTranslate.ts'

import Md3Progress from '../../md3/Progress/Md3Progress.vue'
import Md2Ripple from '../../md2/Ripple/Md2Ripple.vue'
import Md3Button from '../../md3/Button/Md3Button.vue'
import Md3Chip from '../../md3/Chip/Md3Chip.vue'

const value = ref('edit')
const active = ref(false)
const adaptive = ref(false)
const turn = ref(false)
const disabled = ref(false)
const visible = ref(false)
const position = ref('10px')
const coordinator = ref([5])
const size = ref('contain')
const onLoad = (event: ImageEventData) => {
  // console.log('event', event)
}

setInterval(() => {
  value.value = '#ff0000'
  active.value = !active.value
  adaptive.value = !adaptive.value
  turn.value = !turn.value
  disabled.value = !disabled.value
  visible.value = !visible.value
  position.value = '25px'
  coordinator.value = [25]
  size.value = 'cover'
}, 2400)

const testT = useTranslate('test')
</script>

<template>
  <div>
    {{ testT }}
    <div style="display: flex; gap: 16px;">
      <md3-button>slot</md3-button>
      <md3-button>
        <template v-slot:default>default</template>
      </md3-button>
    </div>
    <div>chip</div>
    <div style="display: flex; gap: 16px; padding-top: 16px;">
      <md3-chip label="label" />
      <md3-chip label="label" icon="face" />
      <md3-chip label="label" :icon="{icon: 'face', iconActive: 'home'}" :selected="active" />
      <md3-chip label="label" icon="face" :disabled="disabled" />
      <md3-chip label="label" icon="face" :readonly="disabled" />
      <md3-chip label="label" icon="face" :icon-hide="active" />
      <md3-chip label="label" icon-trailing="close" />
    </div>
    <div style="display: flex; gap: 16px; padding-top: 16px;">
      <md3-chip elevated label="label" />
      <md3-chip elevated label="label" icon="face" />
      <md3-chip elevated label="label" :icon="{icon: 'face', iconActive: 'home'}" :selected="active" />
      <md3-chip elevated label="label" icon="face" :disabled="disabled" />
      <md3-chip elevated label="label" icon="face" :readonly="disabled" />
      <md3-chip elevated label="label" icon="face" :icon-hide="active" />
      <md3-chip elevated label="label" icon-trailing="close" />
    </div>
    filter
    <div style="display: flex; gap: 16px; padding-top: 16px;">
      <md3-chip filter label="label" />
      <md3-chip filter label="label" icon="face" />
      <md3-chip filter label="label" :icon="{icon: 'face', iconActive: 'home'}" :selected="active" />
      <md3-chip filter label="label" icon="face" :disabled="disabled" />
      <md3-chip filter label="label" icon="face" :readonly="disabled" />
      <md3-chip filter label="label" icon="face" :icon-hide="active" />
      <md3-chip filter label="label" icon-trailing="close" />
    </div>
    <div style="display: flex; gap: 16px; padding-top: 16px;">
      <md3-button label="label" />
      <md3-button label="label" icon="face" />
      <md3-button label="label" :icon="{icon: 'face', iconActive: 'home'}" :selected="active" />
      <md3-button label="label" icon="face" :disabled="disabled" />
      <md3-button label="label" icon="face" :readonly="disabled" />
      <md3-button label="label" icon="face" :icon-hide="active" />
      <md3-button label="label" icon-trailing="close" />
    </div>
    <div style="display: flex; gap: 16px; padding-top: 16px;">
      <md3-button elevated label="label" />
      <md3-button elevated label="label" icon="face" />
      <md3-button elevated label="selected" :icon="{icon: 'face', iconActive: 'home'}" :selected="active" />
      <md3-button elevated label="disabled" icon="face" :disabled="disabled" />
      <md3-button elevated label="readonly" icon="face" readonly />
      <md3-button elevated label="icon" icon="face" :icon-hide="active" />
      <md3-button elevated label="icon-trailing" icon-trailing="close" />
    </div>
    <div style="display: flex; gap: 16px; padding-top: 16px;">
      <md3-button text label="label" />
      <md3-button text label="label" icon="face" />
      <md3-button text label="selected" :icon="{icon: 'face', iconActive: 'home'}" :selected="active" />
      <md3-button text label="disabled" icon="face" :disabled="disabled" />
      <md3-button text label="readonly" icon="face" readonly />
      <md3-button text label="icon" icon="face" :icon-hide="active" />
      <md3-button text label="icon-trailing" icon-trailing="close" />
    </div>
    <div style="display: flex; gap: 16px; padding-top: 16px;">
      <md3-button outlined label="label" />
      <md3-button outlined label="label" icon="face" />
      <md3-button outlined label="selected" :icon="{icon: 'face', iconActive: 'home'}" :selected="active" />
      <md3-button outlined label="disabled" icon="face" :disabled="disabled" />
      <md3-button outlined label="readonly" icon="face" readonly />
      <md3-button outlined label="icon" icon="face" :icon-hide="active" />
      <md3-button outlined label="icon-trailing" icon-trailing="close" />
    </div>
    <div style="display: flex; gap: 16px; padding-top: 16px;">
      <md3-button tonal label="label" />
      <md3-button tonal label="label" icon="face" />
      <md3-button tonal label="selected" :icon="{icon: 'face', iconActive: 'home'}" :selected="active" />
      <md3-button tonal label="disabled" icon="face" :disabled="disabled" />
      <md3-button tonal label="readonly" icon="face" readonly />
      <md3-button tonal label="icon" icon="face" :icon-hide="active" />
      <md3-button tonal label="icon-trailing" icon-trailing="close" />
    </div>
    <div style="display: flex;">
      <div style="position: relative; width: 240px; height: 240px;">
        <md2-ripple />
      </div>
      <div style="position: relative; width: 240px; height: 240px;">
        <md2-ripple :disabled="disabled" />
      </div>
    </div>
    <div style="display: flex;">
      <div style="position: relative; width: 240px; height: 240px;">
        <md3-progress :visible="true" />
      </div>
      <div style="position: relative; width: 240px; height: 240px;">
        <md3-progress :visible="true" circular />
      </div>
      <div style="position: relative; width: 240px; height: 240px;">
        {{ visible }}
        <md3-progress :visible="visible" />
      </div>
      <div style="position: relative; width: 240px; height: 240px;">
        <md3-progress :visible="visible" indeterminate="type2" />
      </div>
      <div style="position: relative; width: 240px; height: 240px;">
        <md3-progress :visible="visible" circular />
      </div>
    </div>
    <div style="display: flex;">
      <md3-icon :icon="value" />
      <md3-icon icon="face" :icon-active="value" :active="active" @load="onLoad" />
      <md3-icon icon="face" :icon-active="value" animation-show />
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
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image
          disabled
          value="https://drscdn.500px.org/photo/295251975/q%3D50_w%3D1000_of%3D1/v2?sig=9ca0a690bd15614f702b389a6c121c6d796ece98b6086cee5d50ca1f9f23dc9a"
          :x="position"
          :y="position"
          @load="onLoad"
        />
      </div>
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image
          disabled
          value="https://drscdn.500px.org/photo/295251975/q%3D50_w%3D1000_of%3D1/v2?sig=9ca0a690bd15614f702b389a6c121c6d796ece98b6086cee5d50ca1f9f23dc9a"
          :coordinator="coordinator"
          @load="onLoad"
        />
      </div>
      <div style="position: relative; width: 160px; height: 160px;">
        <md3-image
          disabled
          value="https://drscdn.500px.org/photo/295251975/q%3D50_w%3D1000_of%3D1/v2?sig=9ca0a690bd15614f702b389a6c121c6d796ece98b6086cee5d50ca1f9f23dc9a"
          :size="size"
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
