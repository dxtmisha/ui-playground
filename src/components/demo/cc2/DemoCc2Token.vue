<script setup lang="ts">
import ot from './../../../../cc2/tokens/_init/ot.json'
import st from './../../../../cc2/tokens/_init/st.json'
import web from './../../../../cc2/tokens/platform/web.json'

const fonts = web.st.web.text
const palettes = {
  light: ot.ot.light,
  dark: ot.ot.dark
}

</script>

<template>
  <div class="demo-cc2-token">
    <div class="demo-cc2-token__group">
      <div class="cc2-font--heading--h6">Fonts</div>
      <div
        v-for="(font, type) in fonts"
        :key="type"
        class="demo-cc2-token__font"
      >
        <div class="cc2-font--body--b1bold">{{ type }}</div>
        <template v-if="type === 'extras'">
          <div
            v-for="(extras, extrasName) in font"
            :key="extrasName"
          >
            <div
              v-for="(_, name) in extras"
              :key="name"
              class="demo-cc2-token__font__item"
            >
              <div :class="`cc2-font--${type}--${extrasName}--${`${name}`.replace('-', '').toLowerCase()}`">
                {{ type }} - {{ extrasName }} - {{ name }}
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div
            v-for="(_, name) in font"
            :key="name"
            class="demo-cc2-token__font__item"
          >
            <div :class="`cc2-font--${type}--${`${name}`.replace('-', '').toLowerCase()}`">
              {{ type }} - {{ name }}
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="demo-cc2-token__group">
      <div class="cc2-font--heading--h6">Colors</div>
      <div
        v-for="(palette, theme) in palettes"
        :key="theme"
        class="demo-cc2-token__color"
      >
        <div class="cc2-font--body--b1bold">{{ theme }}</div>
        <div>
          <div
            v-for="(colors, type) in palette"
            :key="type"
          >
            <div class="cc2-font--body--b1bold">{{ type }}</div>
            <template
              v-for="(color, name) in colors.color"
              :key="name"
            >
              <template v-if="name === 'alpha'">
                <div
                  v-for="(sub, subName) in color"
                  :key="subName"
                  class="demo-cc2-token__color__item"
                >
                  <div class="demo-cc2-token__color__item__title cc2-font--caption--c1medium">
                    {{ name }}/{{ subName }}
                  </div>
                  <div class="demo-cc2-token__color__item__value">
                    <div
                      v-for="(_, shade) in sub"
                      :key="shade"
                      class="demo-cc2-token__color__item__value__item"
                    >
                      <div class="cc2-font--caption--c3medium">{{ shade }}</div>
                      <div
                        :style="{'background-color': `rgb(var(--cc2-ot-light-${type}-color-${name}-${subName}-${shade}))`}"
                        class="demo-cc2-token__color__item__value__item__color"
                      />
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="demo-cc2-token__color__item">
                  <div class="demo-cc2-token__color__item__title cc2-font--caption--c1medium">{{ name }}</div>
                  <div class="demo-cc2-token__color__item__value">
                    <div
                      v-for="(_, shade) in color"
                      :key="shade"
                      class="demo-cc2-token__color__item__value__item"
                    >
                      <div class="cc2-font--caption--c3medium">{{ shade }}</div>
                      <div
                        :style="{'background-color': `rgb(var(--cc2-ot-light-${type}-color-${name}-${shade}))`}"
                        class="demo-cc2-token__color__item__value__item__color"
                      />
                    </div>
                  </div>
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.demo-cc2-token {
  &__group {
    padding-bottom: 32px;
  }

  &__font {
    &__item {
      padding-left: 32px;
    }
  }

  &__color {
    display: flex;
    gap: 32px;

    &__item {
      display: flex;
      gap: 16px;
      padding-bottom: 8px;

      &__title {
        width: 96px;
        text-align: right;
      }

      &__value {
        display: flex;

        &__item {
          text-align: center;

          &__color {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
  }
}
</style>
