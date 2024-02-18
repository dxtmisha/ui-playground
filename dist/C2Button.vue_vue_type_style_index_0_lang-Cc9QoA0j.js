import { defineComponent as g, computed as a, openBlock as f, createBlock as y, unref as b, withCtx as B, renderSlot as _ } from "vue";
import { h as n } from "./object-Cv4Jn6-r.js";
import { B as h } from "./ButtonDesign-Cja6Ekn1.js";
import { _ as k } from "./C2Icon.vue_vue_type_style_index_0_lang-Cssr240-.js";
import { _ as v } from "./C2Progress.vue_vue_type_style_index_0_lang-DrVYJoRV.js";
import { p as z, d as x } from "./props-BeZ3OrpN.js";
const o = {
  // :values [!] System label / Системная метка
  adaptive: ["icon"],
  size: ["xl", "lg", "md", "sm", "xs", "x"],
  intent: ["positive", "informative", "negative", "neutral", "default"],
  palette: ["carmine", "iris", "redfish", "goldenrod", "asparagus", "slate", "gray", "alpha", "pistachio", "mint", "jade", "teal", "celestial", "indigo", "orchid", "cerise"]
  // :values [!] System label / Системная метка
}, e = {
  ...x,
  // :default [!] System label / Системная метка
  size: "md",
  intent: "default",
  primary: !0
}, $ = {
  ...z,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  size: {
    type: String,
    default: e == null ? void 0 : e.size
  },
  outline: Boolean,
  link: Boolean,
  intent: {
    type: String,
    default: e == null ? void 0 : e.intent
  },
  primary: {
    type: Boolean,
    default: e == null ? void 0 : e.primary
  },
  secondary: Boolean,
  ghost: Boolean,
  palette: String
}, I = /* @__PURE__ */ g({
  name: "C2Button",
  __name: "C2Button",
  props: { ...$ },
  emits: ["click"],
  setup(s, { expose: r, emit: l }) {
    const c = l, t = s, p = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-button": !0,
        "c2-button--focus": t.focus,
        "c2-button--disabled": t.disabled,
        "c2-button--selected": t.selected,
        "c2-button--loading": t.loading,
        "c2-button--readonly": t.readonly,
        [`c2-button--adaptive--${t.adaptive}`]: n(o.adaptive, t.adaptive),
        [`c2-button--size--${t.size}`]: n(o.size, t.size),
        "c2-button--outline": t.outline,
        "c2-button--link": t.link,
        [`c2-button--intent--${t.intent}`]: n(o.intent, t.intent),
        "c2-button--primary": t.primary && !t.outline && !t.link && !t.secondary && !t.ghost,
        "c2-button--secondary": t.secondary,
        "c2-button--ghost": t.ghost,
        [`c2-palette--${t.palette}`]: n(o.palette, t.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), d = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), i = new h(
      "c2.button",
      t,
      {
        components: {
          icon: k,
          progress: v
        },
        emits: c,
        classes: p,
        styles: d
      }
    ), u = i.render();
    return r(i.expose()), (m, S) => (f(), y(b(u), null, {
      default: B(() => [
        _(m.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  I as _
};
