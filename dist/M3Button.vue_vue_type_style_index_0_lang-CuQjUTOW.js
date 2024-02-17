import { defineComponent as c, computed as l, openBlock as f, createBlock as g, unref as h } from "vue";
import { h as o } from "./object-Cv4Jn6-r.js";
import { B } from "./ButtonDesign-Cja6Ekn1.js";
import { p as b, d as _ } from "./props-BeZ3OrpN.js";
import { _ as y } from "./M3Icon.vue_vue_type_style_index_0_lang-BXqt-lYd.js";
import { _ as v } from "./M3Progress.vue_vue_type_style_index_0_lang-DT-ndbFY.js";
const n = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["primary", "secondary", "tertiary", "red", "green", "error", "neutral", "neutralVariant"]
  // :values [!] System label / Системная метка
}, e = {
  ..._,
  // :default [!] System label / Системная метка
  height: "md",
  filled: !0
}, x = {
  ...b,
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
}, C = /* @__PURE__ */ c({
  name: "M3Button",
  __name: "M3Button",
  props: { ...x },
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
    })), a = new B(
      "m3.button",
      t,
      {
        emits: d,
        components: {
          icon: y,
          progress: v
        },
        classes: m,
        styles: p
      }
    ), u = a.render();
    return i(a.expose()), (k, $) => (f(), g(h(u)));
  }
});
export {
  C as _
};
