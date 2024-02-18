import { defineComponent as p, computed as o, openBlock as u, createBlock as _, unref as f } from "vue";
import { p as l, M } from "./props-BU-ADXPW.js";
import { _ as d } from "./M3MutationItem.vue_vue_type_style_index_0_lang-BNiLP4V7.js";
const k = {
  ...l
}, h = /* @__PURE__ */ p({
  name: "M3Mutation",
  __name: "M3Mutation",
  props: { ...k },
  emits: ["load"],
  setup(e, { expose: n, emit: s }) {
    const r = s, m = e, c = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mutation": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new M(
      "m3.mutation",
      m,
      {
        emits: r,
        components: {
          item: d
        },
        classes: c,
        styles: a
      }
    ), i = t.render();
    return n(t.expose()), (x, g) => (u(), _(f(i)));
  }
});
export {
  h as _
};
