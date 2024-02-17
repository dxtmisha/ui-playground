import { defineComponent as y, computed as t, openBlock as u, createBlock as h, unref as g } from "vue";
import { n as o } from "./string-BEtu6Ook.js";
import { p as B, d as f, I as T } from "./props-Bh-htIS3.js";
import { _ } from "./M3Image.vue_vue_type_style_index_0_lang-BQ6HKq2k.js";
const e = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "xl", "2xl", "full"],
  size: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, i = {
  ...f,
  // :default [!] System label / Системная метка
  animationType: "type1"
}, x = {
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
  name: "M3Icon",
  __name: "M3Icon",
  props: { ...x },
  emits: ["load"],
  setup(s, { expose: m, emit: r }) {
    const c = r, n = s, d = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-icon": !0,
        "m3-icon--turn": n.turn,
        "m3-icon--disabled": n.disabled,
        "m3-icon--hide": n.hide,
        [`m3-icon--animationType--${n.animationType}`]: o(e.animationType, n.animationType),
        "m3-icon--animationShow": n.animationShow,
        "m3-icon--overlay": n.overlay,
        "m3-icon--dynamic": n.dynamic,
        "m3-icon--start": n.start,
        "m3-icon--end": n.end,
        "m3-icon--high": n.high,
        [`m3-icon--rounded--${n.rounded}`]: o(e.rounded, n.rounded),
        [`m3-icon--size--${n.size}`]: o(e.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), p = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new T(
      "m3.icon",
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
    return m(a.expose()), (I, z) => (u(), h(g(l)));
  }
});
export {
  b as _
};
