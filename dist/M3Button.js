import { defineComponent as f, computed as l, openBlock as g, createBlock as B, unref as h, withCtx as b, renderSlot as _ } from "vue";
import { i as o } from "./string-BNZv_PbS.js";
import { B as y } from "./ButtonDesign-Bh9jdsoh.js";
import { p as v, d as x } from "./props-eaznvPdG.js";
import { _ as $ } from "./M3Icon.vue_vue_type_style_index_0_lang-BuKvB1x_.js";
import { _ as k } from "./M3Progress.vue_vue_type_style_index_0_lang-C4IfbNnP.js";
const n = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["primary", "secondary", "tertiary", "red", "green", "error", "neutral", "neutralVariant"]
  // :values [!] System label / Системная метка
}, e = {
  ...x,
  // :default [!] System label / Системная метка
  height: "md",
  filled: !0
}, S = {
  ...v,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  height: {
    type: String,
    default: e == null ? void 0 : e.height
  },
  filled: {
    type: Boolean,
    default: e == null ? void 0 : e.filled
  },
  outlined: Boolean,
  text: Boolean,
  elevated: Boolean,
  tonal: Boolean,
  palette: String
}, I = /* @__PURE__ */ f({
  name: "M3Button",
  __name: "M3Button",
  props: { ...S },
  emits: ["click"],
  setup(s, { expose: i, emit: r }) {
    const d = r, t = s, m = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-button": !0,
        "m3-button--focus": t.focus,
        "m3-button--disabled": t.disabled,
        "m3-button--selected": t.selected,
        "m3-button--loading": t.loading,
        "m3-button--readonly": t.readonly,
        [`m3-button--adaptive--${t.adaptive}`]: o(n.adaptive, t.adaptive),
        [`m3-button--height--${t.height}`]: o(n.height, t.height),
        "m3-button--filled": t.filled && !t.outlined && !t.text && !t.elevated && !t.tonal,
        "m3-button--outlined": t.outlined,
        "m3-button--text": t.text,
        "m3-button--elevated": t.elevated,
        "m3-button--tonal": t.tonal,
        [`m3-palette--${t.palette}`]: o(n.palette, t.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), p = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new y(
      "m3.button",
      t,
      {
        emits: d,
        components: {
          icon: $,
          progress: k
        },
        classes: m,
        styles: p
      }
    ), u = a.render();
    return i(a.expose()), (c, M) => (g(), B(h(u), null, {
      default: b(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  I as M3Button
};
