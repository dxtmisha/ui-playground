<script setup lang="ts">
import { ref } from 'vue'

import M3Image from '../../m3/Image/M3Image.vue'

import product1 from '../assets/Galaxy_S23p.png'
import product2 from '../assets/Galaxy_Z_Flip5.png'
import product3 from '../assets/Galaxy_Z_Fold5.png'
import product4 from '../assets/pad.png'

const image = 'https://drscdn.500px.org/photo/294267357/q%3D80_m%3D2000/v2?sig=03989c1970e5921d8ab67b23e03e79b8db13b7e7d3bc3f72829cc9eecbb42cf4'

const icon = ref<string | undefined>('home')

const adaptive1 = ref(true)
const adaptive2 = ref(true)
const adaptive3 = ref(true)
const adaptive4 = ref(true)

const turn = ref(false)
const disabled = ref(false)
const hide = ref(false)

const xy = ref(0)
const size = ref(15)
const coordinator = ref(0)

const onClickIcon = () => {
  switch (icon.value) {
    case 'home':
      icon.value = '#ff0099'
      break
    case '#ff0099':
      icon.value = image
      break
    case image:
      icon.value = undefined
      break
    case undefined:
      icon.value = 'home'
      break
  }
}
const onClickAdaptive1 = () => {
  adaptive1.value = !adaptive1.value
}
const onClickAdaptive2 = () => {
  adaptive2.value = !adaptive2.value
}
const onClickAdaptive3 = () => {
  adaptive3.value = !adaptive3.value
}
const onClickAdaptive4 = () => {
  adaptive4.value = !adaptive4.value
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
const onClickXy = () => {
  if (xy.value >= 100) {
    xy.value = 0
  } else {
    xy.value += 5
  }
}
const onClickSize = () => {
  if (size.value >= 100) {
    size.value = 15
  } else {
    size.value += 5
  }
}
const onClickCoordinator = () => {
  if (coordinator.value >= 45) {
    coordinator.value = 0
  } else {
    coordinator.value += 5
  }
}
</script>

<template>
  <div>
    <div>IMAGE</div>
    <div class="demo-image">
      <div class="demo-image__item">
        <div class="demo-image__item__title">none</div>
        <div class="demo-image__item__value">
          <m3-image />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickIcon">
        <div class="demo-image__item__title">value:{{ icon }}</div>
        <div class="demo-image__item__value">
          <m3-image :value="icon" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">icon</div>
        <div class="demo-image__item__value">
          <m3-image value="face" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">@icon</div>
        <div class="demo-image__item__value">
          <m3-image value="@vue" />
        </div>
      </div>
      <div class="demo-image__item demo-image__item--color">
        <div class="demo-image__item__title">@icon/color</div>
        <div class="demo-image__item__value">
          <m3-image value="@vue" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">color</div>
        <div class="demo-image__item__value">
          <m3-image value="#ff0000" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">image</div>
        <div class="demo-image__item__value">
          <m3-image :value="image" />
        </div>
      </div>
    </div>
    <div class="demo-image__title">adaptive</div>
    <div class="demo-image">
      <div class="demo-image__item" @click="onClickAdaptive1">
        <div class="demo-image__item__title">1:{{ adaptive1 }}</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" :adaptive="adaptive1" object-width="76.2" object-height="157.8" />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickAdaptive2">
        <div class="demo-image__item__title">2:{{ adaptive2 }}</div>
        <div class="demo-image__item__value">
          <m3-image :value="product2" :adaptive="adaptive2" object-width="71.9" object-height="165.1" />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickAdaptive3">
        <div class="demo-image__item__title">3:{{ adaptive3 }}</div>
        <div class="demo-image__item__value">
          <m3-image :value="product3" :adaptive="adaptive3" object-width="129.9" object-height="154.9" />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickAdaptive4">
        <div class="demo-image__item__title">4:{{ adaptive4 }}</div>
        <div class="demo-image__item__value">
          <m3-image :value="product4" :adaptive="adaptive4" object-width="285.4" object-height="185.4" />
        </div>
      </div>
    </div>
    <div class="demo-image__title">status</div>
    <div class="demo-image">
      <div class="demo-image__item">
        <div class="demo-image__item__title">all</div>
        <div class="demo-image__item__value">
          <m3-image
            :disabled="disabled"
            :hide="hide"
            :turn="turn"
            :value="product1"
            size="contain"
          />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickTurn">
        <div class="demo-image__item__title">turn:{{ turn }}</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" size="contain" :turn="turn" />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickDisabled">
        <div class="demo-image__item__title">disabled:{{ disabled }}</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" size="contain" :disabled="disabled" />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickHide">
        <div class="demo-image__item__title">hide:{{ hide }}</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" size="contain" :hide="hide" />
        </div>
      </div>
    </div>
    <div class="demo-image__title">x/y</div>
    <div class="demo-image">
      <div class="demo-image__item">
        <div class="demo-image__item__title">none</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickXy">
        <div class="demo-image__item__title">value:{{ xy }}%</div>
        <div class="demo-image__item__value">
          <m3-image :value="product4" :x="`${xy}%`" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">x:25%</div>
        <div class="demo-image__item__value">
          <m3-image :value="product4" x="25%" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">x:50%</div>
        <div class="demo-image__item__value">
          <m3-image :value="product4" x="50%" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">x:75%</div>
        <div class="demo-image__item__value">
          <m3-image :value="product4" x="75%" />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickXy">
        <div class="demo-image__item__title">value:{{ xy }}%</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" :y="`${xy}%`" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">y:25%</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" y="25%" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">y:50%</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" y="50%" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">y:75%</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" y="75%" />
        </div>
      </div>
    </div>
    <div class="demo-image__title">size</div>
    <div class="demo-image">
      <div class="demo-image__item">
        <div class="demo-image__item__title">none</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickSize">
        <div class="demo-image__item__title">value:{{ size }}</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" :size="`${size}%`" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">auto</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" size="auto" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">contain</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" size="contain" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">cover</div>
        <div class="demo-image__item__value">
          <m3-image :value="product1" size="cover" />
        </div>
      </div>
    </div>
    <div class="demo-image__title">coordinator</div>
    <div class="demo-image">
      <div class="demo-image__item">
        <div class="demo-image__item__title">none</div>
        <div class="demo-image__item__value">
          <m3-image :value="product3" />
        </div>
      </div>
      <div class="demo-image__item" @click="onClickCoordinator">
        <div class="demo-image__item__title">value:{{ coordinator }}</div>
        <div class="demo-image__item__value">
          <m3-image :value="product3" :coordinator="[coordinator]" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">[0, 50, 50, 0]</div>
        <div class="demo-image__item__value">
          <m3-image :value="product3" :coordinator="[0, 50, 50, 0]" />
        </div>
      </div>
      <div class="demo-image__item">
        <div class="demo-image__item__title">[50, 0, 0, 50]</div>
        <div class="demo-image__item__value">
          <m3-image :value="product3" :coordinator="[50, 0, 0, 50]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../styles/color";
@import "../../styles/font";

.demo-image {
  display: flex;
  gap: 16px;
  padding: 16px;

  &__item {
    border: 1px solid rgba(0, 0, 0, .12);

    &__title {
      position: relative;
      z-index: 100;

      margin: 0 auto;
      padding: 8px 0;
      max-width: calc(128px - 16px);

      text-align: center;
      @include truncate;
    }

    &__value {
      display: flex;
      position: relative;

      width: 128px;
      height: 128px;

      &--big {
        width: 192px;
        height: 192px;
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
