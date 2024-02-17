import { defineComponent as d, computed as o, openBlock as u, createBlock as y, unref as _ } from "vue";
import { h as n } from "./object-Cv4Jn6-r.js";
import { p as B, d as P, P as f } from "./props-DdU2sQTL.js";
const t = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, r = {
  ...P,
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
}, T = /* @__PURE__ */ d({
  name: "M3Progress",
  __name: "M3Progress",
  props: { ...k },
  setup(i, { expose: p, emit: a }) {
    const m = a, e = i, c = o(() => ({
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
    })), l = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), s = new f(
      "m3.progress",
      e,
      {
        emits: m,
        classes: c,
        styles: l
      }
    ), g = s.render();
    return p(s.expose()), (x, v) => (u(), y(_(g)));
  }
});
export {
  T as _
};
