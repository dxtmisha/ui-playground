import { defineComponent as p, computed as o, openBlock as u, createBlock as _, unref as f } from "vue";
import { p as l, M as d } from "./props-BWs1HTpQ.js";
import { _ as M } from "./C2MutationItem.vue_vue_type_style_index_0_lang-BZ-tz9EI.js";
const k = {
  ...l
}, T = /* @__PURE__ */ p({
  name: "C2Mutation",
  __name: "C2Mutation",
  props: { ...k },
  emits: ["load"],
  setup(e, { expose: n, emit: s }) {
    const c = s, r = e, a = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-mutation": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new d(
      "c2.mutation",
      r,
      {
        emits: c,
        components: {
          item: M
        },
        classes: a,
        styles: i
      }
    ), m = t.render();
    return n(t.expose()), (x, C) => (u(), _(f(m)));
  }
});
export {
  T as _
};
