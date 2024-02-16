import { computed as n } from "vue";
import { A as c } from "./string-BEtu6Ook.js";
const B = {
  label: [String, Number]
}, m = function(e, a, u = "is-label") {
  const i = n(
    () => !!(e != null && e.label || a && "default" in a)
  );
  return {
    isLabel: i,
    renderLabel() {
      var b;
      const d = [];
      if (i.value) {
        const l = [];
        e != null && e.label && l.push(e.label), a && (a != null && a.default) && l.push((b = a.default) == null ? void 0 : b.call(a, {})), l.length > 0 && d.push(c(
          "span",
          { class: u || "label" },
          l
        ));
      }
      return d;
    }
  };
}, g = {
  progress: [Object, Boolean],
  readonly: Boolean,
  disabled: Boolean
}, h = function(e) {
  const a = () => !!(e != null && e.disabled);
  return {
    disabledBind: n(() => a() || void 0),
    isEnabled: n(
      () => !(e != null && e.disabled) && !(e != null && e.readonly) && !(e != null && e.loading)
    ),
    isReadonly: n(() => !!(e != null && e.readonly)),
    isDisabled: n(() => a()),
    isProgress: n(() => !!(e != null && e.loading))
  };
};
export {
  g as a,
  h as b,
  m as c,
  B as u
};
