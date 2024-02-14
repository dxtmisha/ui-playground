import { b as r, v as u, e as n, C as c, z as o } from "./DesignConstructorAbstract-SiNW5baF.js";
import { c as a } from "./element-DFdYlQ8N.js";
function g(i, e = "check") {
  const t = a(void 0, "input", l(i));
  return {
    group: e,
    input: t,
    pattern: i,
    check(s) {
      return t.value = r(s), {
        group: e,
        input: t,
        status: t.checkValidity(),
        validationMessage: t.validationMessage,
        validity: t.validity,
        pattern: i,
        value: s
      };
    }
  };
}
function l(i) {
  if (u(i)) {
    const e = n(i);
    if (c(i))
      return { pattern: i };
    if (o(e))
      return e;
  }
  return {};
}
export {
  g as u
};
