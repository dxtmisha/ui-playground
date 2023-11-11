<script setup lang="ts">
import { ref } from 'vue'

import M3Chip from '../../m3/Chip/M3Chip.vue'

const turn = ref(false)
const hide = ref(false)
const focus = ref(false)
const dragged = ref(false)
const selected = ref(false)
const readonly = ref(false)
const disabled = ref(false)
const progress = ref(false)

const onClick = (event: Event, data: Record<string, any>) => console.log('event', event, data)

const onClickTurn = () => {
  turn.value = !turn.value
}
const onClickFocus = () => {
  focus.value = !focus.value
}
const onClickDragged = () => {
  dragged.value = !dragged.value
}
const onClickSelected = () => {
  selected.value = !selected.value
}
const onClickReadonly = () => {
  readonly.value = !readonly.value
}
const onClickDisabled = () => {
  disabled.value = !disabled.value
}
const onClickHide = () => {
  hide.value = !hide.value
}
const onClickProgress = () => {
  progress.value = !progress.value
}
</script>

<template>
  <div>
    <div>CHIP</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">none</div>
        <div class="demo-chip__item__value">
          <m3-chip />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">icon</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">icon, icon-trailing</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" icon-trailing="close" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">label</div>
        <div class="demo-chip__item__value">
          <m3-chip label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">slot</div>
        <div class="demo-chip__item__value">
          <m3-chip>label</m3-chip>
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">icon, label</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">icon, icon-trailing, label</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" icon-trailing="close" label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">on:click</div>
        <div class="demo-chip__item__value">
          <m3-chip
            :detail="{detail:'detail'}"
            icon="home"
            icon-trailing="close"
            label="label"
            value="value"
            @click="onClick"
          />
        </div>
      </div>
    </div>
    <div class="demo-chip__title">status</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">all</div>
        <div class="demo-chip__item__value">
          <m3-chip
            :disabled="disabled"
            :dragged="dragged"
            :focus="focus"
            :icon="{icon:'face',iconActive:'close'}"
            :icon-hide="hide"
            :icon-turn="turn"
            :progress="progress"
            :readonly="readonly"
            :selected="selected"
            icon-trailing="home"
            label="label"
          />
        </div>
      </div>
      <div class="demo-chip__item" @click="onClickTurn">
        <div class="demo-chip__item__title">turn:{{ turn }}</div>
        <div class="demo-chip__item__value">
          <m3-chip :icon-turn="turn" icon-trailing="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item" @click="onClickHide">
        <div class="demo-chip__item__title">hide:{{ hide }}</div>
        <div class="demo-chip__item__value">
          <m3-chip :icon="{icon:'face',iconActive:'close'}" :icon-hide="hide" label="label" />
        </div>
      </div>
      <div class="demo-chip__item" @click="onClickFocus">
        <div class="demo-chip__item__title">focus:{{ focus }}</div>
        <div class="demo-chip__item__value">
          <m3-chip :icon="{icon:'face',iconActive:'close'}" :focus="focus" label="label" />
        </div>
      </div>
      <div class="demo-chip__item" @click="onClickDragged">
        <div class="demo-chip__item__title">dragged:{{ dragged }}</div>
        <div class="demo-chip__item__value">
          <m3-chip :icon="{icon:'face',iconActive:'close'}" :dragged="dragged" label="label" />
        </div>
      </div>
      <div class="demo-chip__item" @click="onClickSelected">
        <div class="demo-chip__item__title">selected:{{ selected }}</div>
        <div class="demo-chip__item__value">
          <m3-chip :icon="{icon:'face',iconActive:'close'}" :selected="selected" label="label" />
        </div>
      </div>
      <div class="demo-chip__item" @click="onClickReadonly">
        <div class="demo-chip__item__title">readonly:{{ readonly }}</div>
        <div class="demo-chip__item__value">
          <m3-chip :readonly="readonly" icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item" @click="onClickDisabled">
        <div class="demo-chip__item__title">disabled:{{ disabled }}</div>
        <div class="demo-chip__item__value">
          <m3-chip :disabled="disabled" icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item" @click="onClickProgress">
        <div class="demo-chip__item__title">progress:{{ progress }}</div>
        <div class="demo-chip__item__value">
          <m3-chip :progress="progress" icon="home" label="label" />
        </div>
      </div>
    </div>
    <div class="demo-chip__title">filled</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">none</div>
        <div class="demo-chip__item__value">
          <m3-chip filled icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">icon</div>
        <div class="demo-chip__item__value">
          <m3-chip filled icon="home" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">label</div>
        <div class="demo-chip__item__value">
          <m3-chip filled label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">selected</div>
        <div class="demo-chip__item__value">
          <m3-chip filled icon="home" label="label" selected />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">disabled</div>
        <div class="demo-chip__item__value">
          <m3-chip filled icon="home" label="label" disabled />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">progress</div>
        <div class="demo-chip__item__value">
          <m3-chip filled icon="home" label="label" progress />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">palette</div>
        <div class="demo-chip__item__value">
          <m3-chip filled icon="home" label="label" palette="green" />
        </div>
      </div>
    </div>
    <div class="demo-chip__title">outlined</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">none</div>
        <div class="demo-chip__item__value">
          <m3-chip outlined icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">icon</div>
        <div class="demo-chip__item__value">
          <m3-chip outlined icon="home" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">label</div>
        <div class="demo-chip__item__value">
          <m3-chip outlined label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">selected</div>
        <div class="demo-chip__item__value">
          <m3-chip outlined icon="home" label="label" selected />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">disabled</div>
        <div class="demo-chip__item__value">
          <m3-chip outlined icon="home" label="label" disabled />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">progress</div>
        <div class="demo-chip__item__value">
          <m3-chip outlined icon="home" label="label" progress />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">palette</div>
        <div class="demo-chip__item__value">
          <m3-chip outlined icon="home" label="label" palette="green" />
        </div>
      </div>
    </div>
    <div class="demo-chip__title">text</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">none</div>
        <div class="demo-chip__item__value">
          <m3-chip text icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">icon</div>
        <div class="demo-chip__item__value">
          <m3-chip text icon="home" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">label</div>
        <div class="demo-chip__item__value">
          <m3-chip text label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">selected</div>
        <div class="demo-chip__item__value">
          <m3-chip text icon="home" label="label" selected />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">disabled</div>
        <div class="demo-chip__item__value">
          <m3-chip text icon="home" label="label" disabled />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">progress</div>
        <div class="demo-chip__item__value">
          <m3-chip text icon="home" label="label" progress />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">palette</div>
        <div class="demo-chip__item__value">
          <m3-chip text icon="home" label="label" palette="green" />
        </div>
      </div>
    </div>
    <div class="demo-chip__title">elevated</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">none</div>
        <div class="demo-chip__item__value">
          <m3-chip elevated icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">icon</div>
        <div class="demo-chip__item__value">
          <m3-chip elevated icon="home" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">label</div>
        <div class="demo-chip__item__value">
          <m3-chip elevated label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">selected</div>
        <div class="demo-chip__item__value">
          <m3-chip elevated icon="home" label="label" selected />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">disabled</div>
        <div class="demo-chip__item__value">
          <m3-chip elevated icon="home" label="label" disabled />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">progress</div>
        <div class="demo-chip__item__value">
          <m3-chip elevated icon="home" label="label" progress />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">palette</div>
        <div class="demo-chip__item__value">
          <m3-chip elevated icon="home" label="label" palette="green" />
        </div>
      </div>
    </div>
    <div class="demo-chip__title">tonal</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">none</div>
        <div class="demo-chip__item__value">
          <m3-chip tonal icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">icon</div>
        <div class="demo-chip__item__value">
          <m3-chip tonal icon="home" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">label</div>
        <div class="demo-chip__item__value">
          <m3-chip tonal label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">selected</div>
        <div class="demo-chip__item__value">
          <m3-chip tonal icon="home" label="label" selected />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">disabled</div>
        <div class="demo-chip__item__value">
          <m3-chip tonal icon="home" label="label" disabled />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">progress</div>
        <div class="demo-chip__item__value">
          <m3-chip tonal icon="home" label="label" progress />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">palette</div>
        <div class="demo-chip__item__value">
          <m3-chip tonal icon="home" label="label" palette="green" />
        </div>
      </div>
    </div>
    <div class="demo-chip__title">tag</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">button</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" tag="button" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">a</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" tag="a" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">span</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" tag="span" />
        </div>
      </div>
    </div>
    <div class="demo-chip__title">adaptive</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">none</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">icon</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" adaptive="icon" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">sm</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" adaptive="sm" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">md</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" adaptive="md" />
        </div>
      </div>
    </div>
    <div class="demo-chip__title">height</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">none</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">sm</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" height="sm" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">md</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" height="md" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">lg</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" height="lg" />
        </div>
      </div>
    </div>
    <div class="demo-chip__title">palette</div>
    <div class="demo-chip">
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">none</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">primary</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" palette="primary" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">secondary</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" palette="secondary" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">tertiary</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" palette="tertiary" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">error</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" palette="error" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">red</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" palette="red" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">green</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" palette="green" />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">green, selected</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" palette="green" selected />
        </div>
      </div>
      <div class="demo-chip__item">
        <div class="demo-chip__item__title">green, disabled</div>
        <div class="demo-chip__item__value">
          <m3-chip icon="home" label="label" palette="green" disabled />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.demo-chip {
  display: flex;
  gap: 16px;
  padding: 16px;

  &__item {
    &__title {
      padding: 0 0 8px;

      text-align: center;
    }
  }

  &__title {
    padding: 0 16px;
  }
}
</style>
