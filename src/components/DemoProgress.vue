<script setup lang="ts">
import { ref } from 'vue'

import M3Progress from '../../m3/Progress/M3Progress.vue'

const value = ref(0)
const visible = ref(false)

const onClickValue = () => {
  if (value.value < 100) {
    value.value += 10
  } else {
    value.value = 0
  }
}
const onClickVisible = () => {
  visible.value = !visible.value
}
</script>

<template>
  <div>
    <div>PROGRESS</div>
    <div class="demo-progress">
      <div class="demo-progress__item" @click="onClickVisible">
        <div class="demo-progress__item__title">visible:{{ visible }}</div>
        <div class="demo-progress__item__value">
          <m3-progress :visible="visible" />
        </div>
      </div>
      <div class="demo-progress__item">
        <div class="demo-progress__item__title">none</div>
        <div class="demo-progress__item__value">
          <m3-progress />
        </div>
      </div>
      <div class="demo-progress__item">
        <div class="demo-progress__item__title">visible</div>
        <div class="demo-progress__item__value">
          <m3-progress visible />
        </div>
      </div>
      <div class="demo-progress__group">
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">indeterminate:type1</div>
          <div class="demo-progress__item__value">
            <m3-progress visible indeterminate="type1" />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">indeterminate:type2</div>
          <div class="demo-progress__item__value">
            <m3-progress visible indeterminate="type2" />
          </div>
        </div>
      </div>
      <div class="demo-progress__group">
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">position:top</div>
          <div class="demo-progress__item__value">
            <m3-progress visible position="top" />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">position:bottom</div>
          <div class="demo-progress__item__value">
            <m3-progress visible position="bottom" />
          </div>
        </div>
      </div>
      <div class="demo-progress__item">
        <div class="demo-progress__item__title">inverse</div>
        <div class="demo-progress__item__value">
          <m3-progress visible inverse />
        </div>
      </div>
      <div class="demo-progress__group">
        <div class="demo-progress__item" @click="onClickVisible">
          <div class="demo-progress__item__title">visible:{{ visible }}</div>
          <div class="demo-progress__item__value demo-progress__item__value--circular">
            <m3-progress :visible="visible" circular />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">none</div>
          <div class="demo-progress__item__value demo-progress__item__value--circular">
            <m3-progress circular />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">visible</div>
          <div class="demo-progress__item__value demo-progress__item__value--circular">
            <m3-progress visible circular />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">indeterminate:type1</div>
          <div class="demo-progress__item__value demo-progress__item__value--circular">
            <m3-progress visible circular indeterminate="type1" />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">indeterminate:type2</div>
          <div class="demo-progress__item__value demo-progress__item__value--circular">
            <m3-progress visible circular indeterminate="type2" />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">inverse</div>
          <div class="demo-progress__item__value demo-progress__item__value--circular">
            <m3-progress visible circular inverse />
          </div>
        </div>
      </div>
    </div>
    <div class="demo-progress__title">dense</div>
    <div class="demo-progress">
      <div class="demo-progress__group">
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">&nbsp;</div>
          <div class="demo-progress__item__value demo-progress__item__value--dense">
            <m3-progress visible circular />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">dense</div>
          <div class="demo-progress__item__value demo-progress__item__value--dense">
            <m3-progress visible circular dense />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">&nbsp;</div>
          <div class="demo-progress__item__value demo-progress__item__value--big">
            <m3-progress visible circular />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">dense</div>
          <div class="demo-progress__item__value demo-progress__item__value--big">
            <m3-progress visible circular dense />
          </div>
        </div>
      </div>
    </div>
    <div class="demo-progress__title">value</div>
    <div class="demo-progress">
      <div class="demo-progress__item" @click="onClickValue">
        <div class="demo-progress__item__title">value:{{ value }}</div>
        <div class="demo-progress__item__value">
          <m3-progress :value="value" />
        </div>
      </div>
      <div class="demo-progress__group">
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">25</div>
          <div class="demo-progress__item__value">
            <m3-progress value="25" />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">50</div>
          <div class="demo-progress__item__value">
            <m3-progress value="50" />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">99</div>
          <div class="demo-progress__item__value">
            <m3-progress value="99" />
          </div>
        </div>
      </div>
      <div class="demo-progress__group">
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">100</div>
          <div class="demo-progress__item__value">
            <m3-progress value="100" />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">100, max:200</div>
          <div class="demo-progress__item__value">
            <m3-progress value="100" max="200" />
          </div>
        </div>
      </div>
    </div>
    <div class="demo-progress__title">delay</div>
    <div class="demo-progress">
      <div class="demo-progress__group">
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">0</div>
          <div class="demo-progress__item__value">
            <m3-progress visible delay="0" />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">200</div>
          <div class="demo-progress__item__value">
            <m3-progress visible delay="200" />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">600</div>
          <div class="demo-progress__item__value">
            <m3-progress visible delay="600" />
          </div>
        </div>
        <div class="demo-progress__item">
          <div class="demo-progress__item__title">1200</div>
          <div class="demo-progress__item__value">
            <m3-progress visible delay="1200" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.demo-progress {
  padding: 16px;

  &__group {
    display: flex;
    gap: 16px;
  }

  &__item {
    flex-basis: 1px;
    flex-grow: 1;
    flex-shrink: 1;

    &__title {
      padding: 8px 0 4px;
    }

    &__value {
      position: relative;

      height: 16px;

      border: 1px solid rgba(0, 0, 0, .12);

      &--dense {
        height: 36px;
      }

      &--circular {
        height: 56px;
      }

      &--big {
        height: 72px;
      }
    }
  }

  &__title {
    padding: 0 16px;
  }
}
</style>
