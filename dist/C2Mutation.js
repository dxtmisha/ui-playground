import { defineComponent as m, computed as e, openBlock as u, createBlock as l, unref as d } from "vue";
import { p as M, M as _ } from "./props-BSPzpiIo.js";
const f = {
  ...M
}, y = /* @__PURE__ */ m({
  name: "C2Mutation",
  __name: "C2Mutation",
  props: { ...f },
  emits: ["load"],
  setup(o, { expose: n, emit: s }) {
    const c = s, r = o, a = e(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-mutation": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = e(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new _(
      "c2.mutation",
      r,
      {
        emits: c,
        classes: a,
        styles: i
      }
    ), p = t.render();
    return n(t.expose()), (k, x) => (u(), l(d(p)));
  }
});
export {
  y as C2Mutation
};
