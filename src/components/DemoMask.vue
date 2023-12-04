<script setup lang="ts">
import { ref, shallowRef, ShallowRef } from 'vue'

import M3Mask from '../../m3/Mask/M3Mask.vue'

import {
  type MaskEventData,
  type MaskSpecialList
} from '../../constructors/Mask/typesBasic.ts'

const value = ref(1000)
const basicValue = ref('')
const basicFull = ref(false)
const groupBasicValue = ref('')
const groupBasicFull = ref(false)

const special1: ShallowRef<MaskSpecialList> = shallowRef({
  '@': {
    match: /[a-zA-Z]+/,
    view: 'A'
  },
  '*': {
    view: '0'
  }
})

const onValue = () => value.value++

const onFocus = (event: FocusEvent, value: MaskEventData) => {
  console.log('onFocus', event, value)
}

const onBlur = (event: FocusEvent, value: MaskEventData) => {
  console.log('onBlur', event, value)
}

const onInput = (event: InputEvent, value: MaskEventData) => {
  console.log('onInput', event, value)
}
const onInputBasicFull = (_: InputEvent, value: MaskEventData) => {
  basicValue.value = value.value
  basicFull.value = Boolean(value.required)
}
const onInputGroupBasicFull = (_: InputEvent, value: MaskEventData) => {
  groupBasicValue.value = value.value
  groupBasicFull.value = Boolean(value.required)
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
            name="test"
            @input="onInputBasicFull"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ basicValue }}<br />
          full: {{ basicFull }}
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">right</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            mask="**.****.TEST.***"
            name="test"
            right
          />
        </div>
        <div class="demo-mask__item__description">Проверка выравнивания справа</div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">3 mask</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            :mask="['mask1: ***.**', 'mask2 (6): ***.***', 'mask3 (end): **.**.****']"
            name="test"
          />
        </div>
        <div class="demo-mask__item__description">Проверка изменения маски в зависимости от длины вводимых данных</div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title" @click="onValue">Заполненные значения</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            mask="******"
            name="test"
            :value="value"
          />
        </div>
        <div class="demo-mask__item__description" @click="onValue">
          Проверка изменения маски в зависимости от длины вводимых данных.
          <b style="cursor: pointer;">Нажмите на этот текст для изменения значения</b>.
        </div>
      </div>
    </div>
    <div class="demo-mask">
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">group</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            mask="**.@@..***"
            :special="special1"
            name="test"
            @input="onInputGroupBasicFull"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ groupBasicValue }}<br />
          full: {{ groupBasicFull }}
        </div>
        <div class="demo-mask__item__description">
          Проверка на воду маска с разными типами символов. Если 0 - это для чисел, а А - это для букв.
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

      @include truncate;
    }

    &__description {
      padding-top: 8px;

      width: 256px;

      font-size: 12px;
      line-height: 14px;
      color: rgba(0, 0, 0, .72);
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
