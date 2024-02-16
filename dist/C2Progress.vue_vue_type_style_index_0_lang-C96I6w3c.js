import { defineComponent as d, computed as o, openBlock as u, createBlock as y, unref as _ } from "vue";
import { n } from "./string-BEtu6Ook.js";
import { p as B, d as P, P as f } from "./props-DZpf05Sp.js";
const t = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, r = {
  ...P,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type3",
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
}, $ = /* @__PURE__ */ d({
  name: "C2Progress",
  __name: "C2Progress",
  props: { ...k },
  setup(i, { expose: p, emit: c }) {
    const a = c, e = i, m = o(() => ({
      main: {
        // TODO: User state classes / Пользовательские классы состояния
        // :classes-values [!] System label / Системная метка
        "c2-progress": !0,
        "c2-progress--linear": e.linear && !e.circular,
        "c2-progress--circular": e.circular,
        [`c2-progress--indeterminate--${e.indeterminate}`]: n(t.indeterminate, e.indeterminate),
        [`c2-progress--position--${e.position}`]: n(t.position, e.position),
        "c2-progress--dense": e.dense,
        "c2-progress--inverse": e.inverse
        // :classes-values [!] System label / Системная метка
      }
      // TODO: User subclasses / Пользовательские подклассы
    })), l = o(() => ({
      // TODO: User styles / Пользовательские стили
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), s = new f(
      "c2.progress",
      e,
      {
        emits: a,
        classes: m,
        styles: l
      }
    ), g = s.render();
    return p(s.expose()), (x, v) => (u(), y(_(g)));
  }
});
export {
  $ as _
};
