import { defineComponent as c, computed as s, openBlock as d, createBlock as l, unref as g } from "vue";
import { p as u, a as _ } from "./props-CQ2otA-S.js";
const B = {
  ...u,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, I = /* @__PURE__ */ c({
  __name: "M3Image",
  props: { ...B },
  emits: ["load"],
  setup(a, { expose: n, emit: t }) {
    const m = t, e = a, i = s(() => ({
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
    return n(o.expose()), (f, h) => (d(), l(g(p)));
  }
});
export {
  I as _
};
