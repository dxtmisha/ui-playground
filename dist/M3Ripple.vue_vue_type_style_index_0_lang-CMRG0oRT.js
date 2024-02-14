import { defineComponent as l, computed as s, openBlock as a, createBlock as u, unref as _ } from "vue";
import { p as d, R as f } from "./props-BkVsBedU.js";
const k = {
  ...d
}, B = /* @__PURE__ */ l({
  __name: "M3Ripple",
  props: { ...k },
  setup(o, { expose: p, emit: n }) {
    const t = n, r = o, c = s(() => ({
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
    return p(e.expose()), (x, R) => (a(), u(_(m)));
  }
});
export {
  B as _
};
