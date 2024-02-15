import { defineComponent as l, computed as s, openBlock as a, createBlock as u, unref as _ } from "vue";
import { p as d, R as f } from "./props-7FFoB-Nt.js";
const R = {
  ...d
}, B = /* @__PURE__ */ l({
  name: "M3Ripple",
  __name: "M3Ripple",
  props: { ...R },
  setup(p, { expose: n, emit: o }) {
    const t = o, r = p, c = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new f(
      "m3.ripple",
      r,
      {
        emits: t,
        classes: c,
        styles: i
      }
    ), m = e.render();
    return n(e.expose()), (k, x) => (a(), u(_(m)));
  }
});
export {
  B as _
};
