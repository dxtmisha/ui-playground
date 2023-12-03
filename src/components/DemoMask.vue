<script setup lang="ts">
import M3Mask from '../../m3/Mask/M3Mask.vue'

import { type MaskEventData } from '../../constructors/Mask/typesBasic.ts'

const onFocus = (event: FocusEvent, value: MaskEventData) => {
  console.log('onFocus', event, value)
}

const onBlur = (event: FocusEvent, value: MaskEventData) => {
  console.log('onBlur', event, value)
}

const onInput = (event: InputEvent, value: MaskEventData) => {
  console.log('onInput', event, value)
}

const onChange = (event: InputEvent, value: MaskEventData) => {
  console.log('onChange', event, value)
}
</script>

<template>
  <div>
    <div>MASK</div>
    <div class="demo-mask">
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">none</div>
        <div class="demo-mask__item__value">
          <m3-mask />
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">**.****.TEST.***</div>
        <div class="demo-mask__item__value">
          <m3-mask
            mask="**.****.TEST.***"
            @focus="onFocus"
            @blur="onBlur"
            @input="onInput"
            @change="onChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.demo-mask {

}
</style>
