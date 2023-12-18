<script setup lang="ts">
import ot from './../../../../cc2/tokens/_init/ot.json'
import light from './../../../../cc2/tokens/_init/theme/light.json'
import web from './../../../../cc2/tokens/platform/web.json'

const fonts = web.st.web.text
const fontsFamily = ot.ot.typography.fontFamily
const fontsFamilyText = {
  GLOBAL: 'Whereas disregard and contempt for human rights have resulted',
  GEO: 'ვინაიდან, ყოველი ვინაიდან, წევრმა',
  ISR: 'כל אדם יש בני גדולה מזו, לא',
  THA: 'ฉะนั้น บัดนี้ อาทิ ทุกคนมีสิทธิที่จะได้',
  KOR: '국가간에 우호관계의 인간은 인간이 폭정과 억압에',
  ARM: 'Քանզի անդամ Բոլոր Քանզի անհրաժեշտ',
  base: 'Whereas disregard and contempt for human rights have resulted'
}

const palettes = {
  light: ot.ot.light,
  dark: ot.ot.dark
}
const palettesSt = {
  content: light.st.content,
  action: light.st.action,
  interaction: light.st.interaction,
  asemantic: light.st.asemantic
}

</script>

<template>
  <div class="demo-cc2-token">
    <div class="cc2-font--heading--h6">Fonts</div>
    <div class="demo-cc2-token__group">
      <div
        v-for="(font, type) in fonts"
        :key="type"
        class="demo-cc2-token__font"
      >
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
    <div class="cc2-font--heading--h6">Fonts family</div>
    <div class="demo-cc2-token__group">
      <div
        v-for="(_, type) in fontsFamily"
        :key="type"
        class="demo-cc2-token__font"
      >
        <div :class="`cc2-font--fontFamily--${`${type}`.toLocaleLowerCase()}`">
          {{ type }}: {{ fontsFamilyText[type] }}
        </div>
      </div>
    </div>
    <div class="cc2-font--heading--h6">Динамическое изменение цвета</div>
    <div class="cc2-font--caption--c1regular">Проверка работы изменения цвета через классы .cc2-palette--*</div>
    <div>&nbsp;</div>
    <div class="demo-cc2-token__group demo-cc2-token__group--flex">
      <div class="cc2-font--body--b1bold">light</div>
      <div class="demo-cc2-token__group__item demo-cc2-token__group__item--flex">
        <div class="demo-cc2-token__palette">
          <div class="demo-cc2-token__palette__title">
            <div class="cc2-font--caption--c3regular">default</div>
          </div>
          <div class="demo-cc2-token__palette__primary">
            Primary
          </div>
          <div class="demo-cc2-token__palette__secondary">
            Secondary
          </div>
        </div>
        <template v-for="colors in palettes.light">
          <template
            v-for="(_, name) in colors.color"
            :key="name"
          >
            <div
              v-if="name !== 'alpha'"
              :class="`demo-cc2-token__palette cc2-palette--${name}`"
            >
              <div class="demo-cc2-token__palette__title">
                <div class="cc2-font--caption--c3regular">{{ name }}</div>
              </div>
              <div class="demo-cc2-token__palette__primary">
                Primary
              </div>
              <div class="demo-cc2-token__palette__secondary">
                Secondary
              </div>
            </div>
          </template>
        </template>
      </div>
      <div class="cc2-font--body--b1bold">dark</div>
      <div class="demo-cc2-token__group__item demo-cc2-token__group__item--flex cc2-main cc2-dark">
        <div class="demo-cc2-token__palette">
          <div class="demo-cc2-token__palette__title">
            <div class="cc2-font--caption--c3regular">default</div>
          </div>
          <div class="demo-cc2-token__palette__primary">
            Primary
          </div>
          <div class="demo-cc2-token__palette__secondary">
            Secondary
          </div>
        </div>
        <template v-for="colors in palettes.light">
          <template
            v-for="(_, name) in colors.color"
            :key="name"
          >
            <div
              v-if="name !== 'alpha'"
              :class="`demo-cc2-token__palette cc2-palette--${name}`"
            >
              <div class="demo-cc2-token__palette__title">
                <div class="cc2-font--caption--c3regular">{{ name }}</div>
              </div>
              <div class="demo-cc2-token__palette__primary">
                Primary
              </div>
              <div class="demo-cc2-token__palette__secondary">
                Secondary
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
    <div class="cc2-font--heading--h6">ot/Colors</div>
    <div class="demo-cc2-token__group demo-cc2-token__group--flex">
      <div
        v-for="(palette, theme) in palettes"
        :key="theme"
        class="demo-cc2-token__color"
      >
        <div class="demo-cc2-token__group__item" :class="`cc2-main cc2-${theme}`">
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
                          :style="{'background-color': `rgba(var(--cc2-ot-${theme}-${type}-color-${name}-${subName}-${shade}), var(--cc2-ot-${theme}-${type}-color-${name}-${subName}-${shade}-opacity, 1))`}"
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
                          :style="{'background-color': `rgba(var(--cc2-ot-${theme}-${type}-color-${name}-${shade}), var(--cc2-ot-${theme}-${type}-color-${name}-${shade}-opacity, 1))`}"
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
    <div class="cc2-font--heading--h6">st/Colors</div>
    <div class="demo-cc2-token__group">
      <div
        v-for="(_, theme) in palettes"
        :key="theme"
        class="demo-cc2-token__color"
      >
        <div :class="`demo-cc2-token__group__item cc2-main cc2-${theme}`">
          <div class="cc2-font--body--b1bold">{{ theme }}</div>
          <div class="demo-cc2-token__group demo-cc2-token__group--flex">
            <template
              v-for="(listType, type) in palettesSt"
              :key="type"
            >
              <div
                v-for="(colors, group) in listType"
                :key="group"
              >
                <div class="cc2-font--body--b2bold">{{ type }}/{{ group }}</div>
                <template
                  v-for="(items, name) in colors.color"
                  :key="name"
                >
                  <template
                    v-for="(item, status) in items"
                    :key="status"
                  >
                    <template v-if="typeof item === 'object' && 'value' in item">
                      <div class="demo-cc2-token__color__st__item">
                        <div
                          :style="{'background-color':`rgba(var(--cc2-st-${type}-${group}-color-${name}-${status}), var(--cc2-st-${type}-${group}-color-${name}-${status}-opacity, 1))`}"
                          class="demo-cc2-token__color__st__item__background"
                        />
                        <div class="demo-cc2-token__color__st__item__title">
                          <div class="cc2-font--caption--c3regular">{{ name }}</div>
                          <div class="cc2-font--caption--c1medium">{{ status }}</div>
                        </div>
                      </div>
                    </template>
                    <template v-else>
                      <div
                        v-for="(_, sub) in item"
                        :key="sub"
                        class="demo-cc2-token__color__st__item"
                      >
                        <div
                          :style="{'background-color':`rgba(var(--cc2-st-${type}-${group}-color-${name}-${status}-${sub}), var(--cc2-st-${type}-${group}-color-${name}-${status}-${sub}-opacity, 1))`}"
                          class="demo-cc2-token__color__st__item__background"
                        />
                        <div class="demo-cc2-token__color__st__item__title">
                          <div class="cc2-font--caption--c3regular">{{ name }}</div>
                          <div class="cc2-font--caption--c1medium">{{ status }}/{{ sub }}</div>
                        </div>
                      </div>
                    </template>
                  </template>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "cc2/init";

.demo-cc2-token {
  &__group {
    padding-bottom: 32px;

    &--flex {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    &__item {
      padding: 16px;

      &--flex {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
    }
  }

  &__palette {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 16px;
    text-align: center;

    border-style: solid;
    border-width: 1px;
    @include borderColor(var(--cc2-st-content-border-color-default-normal));

    &__primary {
      padding: 8px 16px;

      @include color(var(--cc2-st-action-fg-color-onprimary-normal));
      @include paletteBackground(var(--cc2-st-action-bg-color-primary-solid-normal));
    }

    &__secondary {
      padding: 8px 16px;

      @include paletteColor(var(--cc2-st-action-fg-color-primary-normal));
      @include paletteBackground(var(--cc2-st-action-bg-color-primary-subtle-normal));
      @include backgroundOpacity(.25);

      border-style: solid;
      border-width: 1px;
      @include paletteBorder(var(--cc2-st-action-bg-color-primary-solid-normal));
    }

    &:hover {
      @include paletteBackground(var(--cc2-st-action-bg-color-primary-solid-hover));
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

    &__st {
      &__item {
        display: flex;
        gap: 16px;
        align-items: center;

        &__title {
          width: 128px;
        }

        &__background {
          width: 40px;
          height: 40px;
        }

        &:hover {
          @include backgroundColor(var(--cc2-st-action-bg-color-neutral-subtle-hover));
        }
      }
    }
  }
}
</style>
