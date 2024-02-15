import { defineComponent as f, computed as l, openBlock as g, createBlock as h, unref as b, withCtx as B, renderSlot as _ } from "vue";
import { n as o } from "./string-BEtu6Ook.js";
import { B as y } from "./ButtonDesign-BIh9rv6d.js";
import { p as v, d as x } from "./props-BlZALv24.js";
import { _ as $ } from "./M3Icon.vue_vue_type_style_index_0_lang-JqK_8xzS.js";
import { _ as k } from "./M3Progress.vue_vue_type_style_index_0_lang-BfRbmmNA.js";
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
}, M = /* @__PURE__ */ f({
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
    return i(a.expose()), (c, w) => (g(), h(b(u), null, {
      default: B(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  M as _
};
