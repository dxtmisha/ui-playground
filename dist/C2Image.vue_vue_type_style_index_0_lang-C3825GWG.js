import { defineComponent as p, computed as s, openBlock as d, createBlock as l, unref as g } from "vue";
import { p as u, I as _ } from "./props-C7BwRRqX.js";
const B = {
  ...u,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, x = /* @__PURE__ */ p({
  __name: "C2Image",
  props: { ...B },
  emits: ["load"],
  setup(n, { expose: a, emit: t }) {
    const i = t, e = n, c = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-image": !0,
        "c2-image--turn": e.turn,
        "c2-image--disabled": e.disabled,
        "c2-image--hide": e.hide,
        "c2-image--adaptive": e.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), r = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new _(
      "c2.image",
      e,
      {
        emits: i,
        classes: c,
        styles: r
      }
    ), m = o.render();
    return a(o.expose()), (f, I) => (d(), l(g(m)));
  }
});
export {
  x as _
};
