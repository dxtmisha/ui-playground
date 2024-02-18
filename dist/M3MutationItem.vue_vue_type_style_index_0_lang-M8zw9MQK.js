import { defineComponent as i, computed as e, openBlock as u, createBlock as l, unref as I } from "vue";
import { p as M, M as _ } from "./props-Bwm8G6VR.js";
const d = {
  ...M
}, y = /* @__PURE__ */ i({
  name: "M3MutationItem",
  __name: "M3MutationItem",
  props: { ...d },
  emits: ["load"],
  setup(o, { expose: n, emit: s }) {
    const m = s, r = o, c = e(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mutationItem": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = e(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new _(
      "m3.mutationItem",
      r,
      {
        emits: m,
        classes: c,
        styles: a
      }
    ), p = t.render();
    return n(t.expose()), (f, k) => (u(), l(I(p)));
  }
});
export {
  y as _
};
