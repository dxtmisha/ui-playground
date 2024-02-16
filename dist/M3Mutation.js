import { defineComponent as p, computed as o, openBlock as u, createBlock as M, unref as _ } from "vue";
import { p as f, M as l } from "./props-BSPzpiIo.js";
import { _ as d } from "./M3MutationItem.vue_vue_type_style_index_0_lang-13pXYzAI.js";
const k = {
  ...f
}, h = /* @__PURE__ */ p({
  name: "M3Mutation",
  __name: "M3Mutation",
  props: { ...k },
  emits: ["load"],
  setup(e, { expose: n, emit: s }) {
    const r = s, m = e, a = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mutation": !0
        // :classes-values [!] System label / Системная метка
      }
    })), c = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new l(
      "m3.mutation",
      m,
      {
        emits: r,
        components: {
          item: d
        },
        classes: a,
        styles: c
      }
    ), i = t.render();
    return n(t.expose()), (x, g) => (u(), M(_(i)));
  }
});
export {
  h as M3Mutation
};
