import { defineComponent as l, computed as s, openBlock as a, createBlock as u, unref as R } from "vue";
import { p as _, R as d } from "./props-CyX0XsI_.js";
const f = {
  ..._
}, y = /* @__PURE__ */ l({
  name: "M2Ripple",
  __name: "M2Ripple",
  props: { ...f },
  setup(p, { expose: n, emit: o }) {
    const t = o, r = p, c = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new d(
      "m2.ripple",
      r,
      {
        emits: t,
        classes: c,
        styles: i
      }
    ), m = e.render();
    return n(e.expose()), (k, x) => (a(), u(R(m)));
  }
});
export {
  y as M2Ripple
};
