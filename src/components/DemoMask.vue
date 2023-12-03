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
          <m3-mask
            class="demo-mask__item__value__mask"
          />
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">basic</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            mask="**.****.TEST.***"
          />
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">right</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            mask="**.****.TEST.***"
            right
          />
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">3 mask</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            :mask="['mask1: ***.**', 'mask2 (6): ***.***', 'mask3 (end): **.**.****']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../styles/color";
@import "../../styles/font";

.demo-mask {
  display: flex;
  gap: 16px;
  padding: 16px;

  &__item {
    &__title {
      position: relative;
      z-index: 100;

      padding: 8px 0;
      max-width: calc(128px - 16px);

      @include truncate;
    }

    &__value {
      display: flex;
      position: relative;

      width: 256px;

      &__mask {
        padding: 8px 16px;
        width: 100%;

        border: 1px solid rgba(0, 0, 0, .12);
      }
    }

    &--color {
      @include color(#0000ff);
    }
  }

  &__title {
    padding: 0 16px;
  }
}
</style>
