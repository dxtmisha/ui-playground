import { defineComponent as i, computed as e, openBlock as u, createBlock as l, unref as I } from "vue";
import { p as _, M as d } from "./props-BPay53QV.js";
const f = {
  ..._
}, g = /* @__PURE__ */ i({
  name: "C2MutationItem",
  __name: "C2MutationItem",
  props: { ...f },
  emits: ["load"],
  setup(o, { expose: n, emit: s }) {
    const c = s, m = o, r = e(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-mutationItem": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = e(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new d(
      "c2.mutationItem",
      m,
      {
        emits: c,
        classes: r,
        styles: a
      }
    ), p = t.render();
    return n(t.expose()), (M, k) => (u(), l(I(p)));
  }
});
export {
  g as _
};
