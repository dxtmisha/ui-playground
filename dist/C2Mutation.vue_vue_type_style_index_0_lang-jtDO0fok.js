import { defineComponent as m, computed as e, openBlock as u, createBlock as l, unref as _ } from "vue";
import { p as d, M as f } from "./props-Dd5E74vM.js";
const M = {
  ...d
}, y = /* @__PURE__ */ m({
  name: "C2Mutation",
  __name: "C2Mutation",
  props: { ...M },
  emits: ["load"],
  setup(o, { expose: n, emit: s }) {
    const c = s, r = o, a = e(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-mutation": !0
        // :classes-values [!] System label / Системная метка
      }
    })), p = e(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new f(
      "c2.mutation",
      r,
      {
        emits: c,
        classes: a,
        styles: p
      }
    ), i = t.render();
    return n(t.expose()), (k, x) => (u(), l(_(i)));
  }
});
export {
  y as _
};
