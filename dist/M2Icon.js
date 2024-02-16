import { defineComponent as y, computed as t, openBlock as u, createBlock as h, unref as g } from "vue";
import { i as o } from "./string-BNZv_PbS.js";
import { p as B, d as f, I as T } from "./props-CY6HZ9OB.js";
import { _ } from "./M2Image.vue_vue_type_style_index_0_lang-Bzl9Rlpv.js";
const e = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "xl", "full"],
  size: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, i = {
  ...f,
  // :default [!] System label / Системная метка
  animationType: "type1"
}, I = {
  ...B,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: i == null ? void 0 : i.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: String,
  size: String
}, b = /* @__PURE__ */ y({
  name: "M2Icon",
  __name: "M2Icon",
  props: { ...I },
  emits: ["load"],
  setup(s, { expose: m, emit: r }) {
    const c = r, n = s, d = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-icon": !0,
        "m2-icon--turn": n.turn,
        "m2-icon--disabled": n.disabled,
        "m2-icon--hide": n.hide,
        [`m2-icon--animationType--${n.animationType}`]: o(e.animationType, n.animationType),
        "m2-icon--animationShow": n.animationShow,
        "m2-icon--overlay": n.overlay,
        "m2-icon--dynamic": n.dynamic,
        "m2-icon--start": n.start,
        "m2-icon--end": n.end,
        "m2-icon--high": n.high,
        [`m2-icon--rounded--${n.rounded}`]: o(e.rounded, n.rounded),
        [`m2-icon--size--${n.size}`]: o(e.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), p = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new T(
      "m2.icon",
      n,
      {
        emits: c,
        components: {
          image: _
        },
        classes: d,
        styles: p
      }
    ), l = a.render();
    return m(a.expose()), (x, z) => (u(), h(g(l)));
  }
});
export {
  b as M2Icon
};
