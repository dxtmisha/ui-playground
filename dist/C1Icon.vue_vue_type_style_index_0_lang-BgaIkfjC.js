import { defineComponent as y, computed as t, openBlock as u, createBlock as h, unref as g } from "vue";
import { j as e } from "./DesignConstructorAbstract-BkPabKy_.js";
import { p as B, d as T, I as _ } from "./props-CIHc5Wno.js";
import { _ as f } from "./C1Image.vue_vue_type_style_index_0_lang-BEvPqZF2.js";
const i = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "full"],
  size: ["xs", "sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, o = {
  ...T,
  // :default [!] System label / Системная метка
  animationType: "type1",
  rounded: "md",
  size: "xs"
}, z = {
  ...B,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: o == null ? void 0 : o.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: {
    type: String,
    default: o == null ? void 0 : o.rounded
  },
  size: {
    type: String,
    default: o == null ? void 0 : o.size
  }
}, b = /* @__PURE__ */ y({
  __name: "C1Icon",
  props: { ...z },
  emits: ["load"],
  setup(c, { expose: s, emit: r }) {
    const d = r, n = c, m = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-icon": !0,
        "c1-icon--turn": n.turn,
        "c1-icon--disabled": n.disabled,
        "c1-icon--hide": n.hide,
        [`c1-icon--animationType--${n.animationType}`]: e(i.animationType, n.animationType),
        "c1-icon--animationShow": n.animationShow,
        "c1-icon--overlay": n.overlay,
        "c1-icon--dynamic": n.dynamic,
        "c1-icon--start": n.start,
        "c1-icon--end": n.end,
        "c1-icon--high": n.high,
        [`c1-icon--rounded--${n.rounded}`]: e(i.rounded, n.rounded),
        [`c1-icon--size--${n.size}`]: e(i.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), p = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new _(
      "c1.icon",
      n,
      {
        emits: d,
        components: {
          image: f
        },
        classes: m,
        styles: p
      }
    ), l = a.render();
    return s(a.expose()), (x, I) => (u(), h(g(l)));
  }
});
export {
  b as _
};
