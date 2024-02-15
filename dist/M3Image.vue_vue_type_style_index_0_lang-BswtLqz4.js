import { defineComponent as c, computed as s, openBlock as d, createBlock as l, unref as g } from "vue";
import { p as u, I as _ } from "./props-C7BwRRqX.js";
const B = {
  ...u,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, x = /* @__PURE__ */ c({
  __name: "M3Image",
  props: { ...B },
  emits: ["load"],
  setup(n, { expose: a, emit: t }) {
    const m = t, e = n, i = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-image": !0,
        "m3-image--turn": e.turn,
        "m3-image--disabled": e.disabled,
        "m3-image--hide": e.hide,
        "m3-image--adaptive": e.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), r = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new _(
      "m3.image",
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