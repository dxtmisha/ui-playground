import { defineComponent as c, computed as s, openBlock as d, createBlock as l, unref as g } from "vue";
import { p as u, I as _ } from "./props-Ck29vgyg.js";
const B = {
  ...u,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, x = /* @__PURE__ */ c({
  __name: "M2Image",
  props: { ...B },
  emits: ["load"],
  setup(n, { expose: a, emit: t }) {
    const m = t, e = n, i = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-image": !0,
        "m2-image--turn": e.turn,
        "m2-image--disabled": e.disabled,
        "m2-image--hide": e.hide,
        "m2-image--adaptive": e.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), r = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new _(
      "m2.image",
      e,
      {
        emits: m,
        classes: i,
        styles: r
      }
    ), p = o.render();
    return a(o.expose()), (f, I) => (d(), l(g(p)));
  }
});
export {
  x as _
};
