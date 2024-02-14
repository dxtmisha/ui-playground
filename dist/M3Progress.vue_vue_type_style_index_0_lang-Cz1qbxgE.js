import { defineComponent as g, computed as s, openBlock as u, createBlock as y, unref as _ } from "vue";
import { q as n } from "./DesignConstructorAbstract-SiNW5baF.js";
import { p as B, d as f, P } from "./props-BTRbeClC.js";
const t = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, r = {
  ...f,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
}, k = {
  ...B,
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: r == null ? void 0 : r.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: r == null ? void 0 : r.indeterminate
  },
  position: {
    type: String,
    default: r == null ? void 0 : r.position
  },
  dense: Boolean,
  inverse: Boolean
}, b = /* @__PURE__ */ g({
  __name: "M3Progress",
  props: { ...k },
  setup(i, { expose: p, emit: a }) {
    const m = a, e = i, c = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-progress": !0,
        "m3-progress--linear": e.linear && !e.circular,
        "m3-progress--circular": e.circular,
        [`m3-progress--indeterminate--${e.indeterminate}`]: n(t.indeterminate, e.indeterminate),
        [`m3-progress--position--${e.position}`]: n(t.position, e.position),
        "m3-progress--dense": e.dense,
        "m3-progress--inverse": e.inverse
        // :classes-values [!] System label / Системная метка
      }
    })), l = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new P(
      "m3.progress",
      e,
      {
        emits: m,
        classes: c,
        styles: l
      }
    ), d = o.render();
    return p(o.expose()), (x, v) => (u(), y(_(d)));
  }
});
export {
  b as _
};
