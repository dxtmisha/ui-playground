import { defineComponent as p, computed as e, openBlock as u, createBlock as I, unref as l } from "vue";
import { p as d, M } from "./props-CXUB9LWQ.js";
const _ = {
  ...d
}, g = /* @__PURE__ */ p({
  name: "C2MutationItem",
  __name: "C2MutationItem",
  props: { ..._ },
  emits: ["load"],
  setup(o, { expose: n, emit: s }) {
    const m = s, c = o, r = e(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-mutationItem": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = e(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new M(
      "c2.mutationItem",
      c,
      {
        emits: m,
        classes: r,
        styles: a
      }
    ), i = t.render();
    return n(t.expose()), (f, k) => (u(), I(l(i)));
  }
});
export {
  g as C2MutationItem
};
