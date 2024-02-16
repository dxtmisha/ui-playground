import { defineComponent as u, computed as r, openBlock as B, createBlock as f, unref as v, withCtx as y, renderSlot as _ } from "vue";
import { i as a } from "./string-BNZv_PbS.js";
import { B as b, u as C, a as k, b as P } from "./ButtonDesign-Bh9jdsoh.js";
import { _ as $ } from "./M3Icon.vue_vue_type_style_index_0_lang-BuKvB1x_.js";
import { _ as x } from "./M3Progress.vue_vue_type_style_index_0_lang-C4IfbNnP.js";
import { u as S, a as M } from "./useEnabled-DUi_4K2d.js";
class T extends b {
}
const o = {
  tag: "span"
}, w = {
  ...S,
  ...C,
  ...k,
  ...M,
  ...P,
  // Options
  tag: {
    type: String,
    default: o == null ? void 0 : o.tag
  },
  // :prop [!] System label / Системная метка
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean
}, i = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["primary", "secondary", "tertiary", "red", "green", "error", "neutral", "neutralVariant"]
  // :values [!] System label / Системная метка
}, t = {
  ...o,
  // :default [!] System label / Системная метка
  height: "md",
  outlined: !0,
  input: !0
}, D = {
  ...w,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  height: {
    type: String,
    default: t == null ? void 0 : t.height
  },
  outlined: {
    type: Boolean,
    default: t == null ? void 0 : t.outlined
  },
  elevated: Boolean,
  input: {
    type: Boolean,
    default: t == null ? void 0 : t.input
  },
  assist: Boolean,
  filter: Boolean,
  suggestion: Boolean,
  avatar: Boolean,
  dragged: Boolean,
  palette: String
}, z = /* @__PURE__ */ u({
  name: "M3Chip",
  __name: "M3Chip",
  props: { ...D },
  emits: ["click"],
  setup(s, { expose: p, emit: l }) {
    const c = l, e = s, d = r(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-chip": !0,
        "m3-chip--focus": e.focus,
        "m3-chip--disabled": e.disabled,
        "m3-chip--selected": e.selected,
        "m3-chip--loading": e.loading,
        "m3-chip--readonly": e.readonly,
        [`m3-chip--adaptive--${e.adaptive}`]: a(i.adaptive, e.adaptive),
        [`m3-chip--height--${e.height}`]: a(i.height, e.height),
        "m3-chip--outlined": e.outlined && !e.elevated,
        "m3-chip--elevated": e.elevated,
        "m3-chip--input": e.input && !e.assist && !e.filter && !e.suggestion,
        "m3-chip--assist": e.assist,
        "m3-chip--filter": e.filter,
        "m3-chip--suggestion": e.suggestion,
        "m3-chip--avatar": e.avatar,
        "m3-chip--dragged": e.dragged,
        [`m3-palette--${e.palette}`]: a(i.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), m = r(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new T(
      "m3.chip",
      e,
      {
        emits: c,
        components: {
          icon: $,
          progress: x
        },
        classes: d,
        styles: m
      }
    ), g = n.render();
    return p(n.expose()), (h, E) => (B(), f(v(g), null, {
      default: y(() => [
        _(h.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  z as M3Chip
};
