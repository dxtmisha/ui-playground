import { defineComponent as h, computed as t, openBlock as d, createBlock as v, unref as B } from "vue";
import { n as i } from "./string-BEtu6Ook.js";
import { p as g, d as u, I as T } from "./props-Bh-htIS3.js";
import { _ } from "./C2Image.vue_vue_type_style_index_0_lang-bse4dAoW.js";
const e = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  variation: ["icon", "payment", "avatar", "country"],
  shape: ["rect", "circle", "box"],
  size: ["12", "16", "20", "24", "32"]
  // :values [!] System label / Системная метка
}, o = {
  ...u,
  // :default [!] System label / Системная метка
  animationType: "type1",
  variation: "icon",
  shape: "box",
  size: "24"
}, z = {
  ...g,
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
  variation: {
    type: String,
    default: o == null ? void 0 : o.variation
  },
  shape: {
    type: String,
    default: o == null ? void 0 : o.shape
  },
  size: {
    type: String,
    default: o == null ? void 0 : o.size
  }
}, k = /* @__PURE__ */ h({
  name: "C2Icon",
  __name: "C2Icon",
  props: { ...z },
  emits: ["load"],
  setup(c, { expose: s, emit: r }) {
    const p = r, n = c, m = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-icon": !0,
        "c2-icon--turn": n.turn,
        "c2-icon--disabled": n.disabled,
        "c2-icon--hide": n.hide,
        [`c2-icon--animationType--${n.animationType}`]: i(e.animationType, n.animationType),
        "c2-icon--animationShow": n.animationShow,
        "c2-icon--overlay": n.overlay,
        "c2-icon--dynamic": n.dynamic,
        "c2-icon--start": n.start,
        "c2-icon--end": n.end,
        "c2-icon--high": n.high,
        [`c2-icon--variation--${n.variation}`]: i(e.variation, n.variation),
        [`c2-icon--shape--${n.shape}`]: i(e.shape, n.shape),
        [`c2-icon--size--${n.size}`]: i(e.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), y = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new T(
      "c2.icon",
      n,
      {
        components: {
          image: _
        },
        emits: p,
        classes: m,
        styles: y
      }
    ), l = a.render();
    return s(a.expose()), (I, S) => (d(), v(B(l)));
  }
});
export {
  k as _
};
