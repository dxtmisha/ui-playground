<script setup lang="ts">
import { ref } from 'vue'

import M3Icon from '../../m3/Icon/M3Icon.vue'

const image = 'https://drscdn.500px.org/photo/294267357/q%3D80_m%3D2000/v2?sig=03989c1970e5921d8ab67b23e03e79b8db13b7e7d3bc3f72829cc9eecbb42cf4'

const active = ref(false)
const turn = ref(false)
const disabled = ref(false)
const hide = ref(false)
const animationType = ref<'type1' | 'type2'>('type1')
const animationShow = ref(false)

const onClickActive = () => {
  active.value = !active.value
}
const onClickTurn = () => {
  turn.value = !turn.value
}
const onClickDisabled = () => {
  disabled.value = !disabled.value
}
const onClickHide = () => {
  hide.value = !hide.value
}
const onClickAnimationType = () => {
  animationType.value = animationType.value === 'type1' ? 'type2' : 'type1'
}
const onClickAnimationShow = () => {
  animationShow.value = !animationShow.value
}
</script>

<template>
  <div>
    <div>ICON</div>
    <div class="demo-icon">
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">none</div>
        <div class="demo-icon__item__value">
          <m3-icon />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">icon</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">icon/dynamic</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" dynamic />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">@icon</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="@vue" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">image</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">start</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" start />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">end</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" end />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">high</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" high />
        </div>
      </div>
    </div>
    <div class="demo-icon__title">status</div>
    <div class="demo-icon">
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">all</div>
        <div class="demo-icon__item__value">
          <m3-icon
            :active="active"
            :animation-show="animationShow"
            :animation-type="animationType"
            :disabled="disabled"
            :hide="hide"
            :turn="turn"
            icon="home"
            icon-active="face"
          />
        </div>
      </div>
      <div class="demo-icon__item" @click="onClickActive">
        <div class="demo-icon__item__title">active:{{ active }}</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" icon-active="face" :active="active" />
        </div>
      </div>
      <div class="demo-icon__item" @click="onClickTurn">
        <div class="demo-icon__item__title">turn:{{ turn }}</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" icon-active="face" :turn="turn" />
        </div>
      </div>
      <div class="demo-icon__item" @click="onClickDisabled">
        <div class="demo-icon__item__title">disabled:{{ disabled }}</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" icon-active="face" :disabled="disabled" />
        </div>
      </div>
      <div class="demo-icon__item" @click="onClickHide">
        <div class="demo-icon__item__title">hide:{{ hide }}</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" icon-active="face" :hide="hide" />
        </div>
      </div>
      <div class="demo-icon__item" @click="onClickAnimationType">
        <div class="demo-icon__item__title">animationType:{{ animationType }}</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" icon-active="face" :animation-type="animationType" />
        </div>
      </div>
      <div class="demo-icon__item" @click="onClickAnimationShow">
        <div class="demo-icon__item__title">animationShow:{{ animationShow }}</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" icon-active="face" :animation-show="animationShow" />
        </div>
      </div>
    </div>
    <div class="demo-icon__title">size</div>
    <div class="demo-icon">
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">none</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">xs</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="xs" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">sm</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="sm" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">md</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="md" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">lg</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="lg" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">xl</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="xl" />
        </div>
      </div>
    </div>
    <div class="demo-icon__title">overlay</div>
    <div class="demo-icon">
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">none</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" overlay />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">xs</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" overlay size="xs" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">sm</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" overlay size="sm" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">md</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" overlay size="md" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">lg</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" overlay size="lg" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">xl</div>
        <div class="demo-icon__item__value">
          <m3-icon icon="home" overlay size="xl" />
        </div>
      </div>
    </div>
    <div class="demo-icon__title">rounded</div>
    <div class="demo-icon">
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">none</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">standard</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="sm" rounded="standard" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">sm</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="sm" rounded="sm" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">md</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="sm" rounded="md" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">lg</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="sm" rounded="lg" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">xl</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="sm" rounded="xl" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">2xl</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="sm" rounded="2xl" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">2xl, size:md</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="md" rounded="2xl" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">2xl, size:lg</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="lg" rounded="2xl" />
        </div>
      </div>
      <div class="demo-icon__item">
        <div class="demo-icon__item__title">2xl, size:xl</div>
        <div class="demo-icon__item__value">
          <m3-icon :icon="image" size="xl" rounded="2xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../styles/color";

.demo-icon {
  display: flex;
  gap: 16px;
  padding: 16px;

  &__item {
    &__title {
      position: relative;
      z-index: 100;

      padding: 0 0 8px;

      text-align: center;
    }

    &__value {
      display: flex;
      position: relative;

      align-items: center;
      justify-content: center;

      border: 1px solid rgba(0, 0, 0, .12);
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
