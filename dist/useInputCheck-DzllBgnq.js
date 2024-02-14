import { a as r, i as u, e as c, b as n, c as a } from "./DesignConstructorAbstract-BkPabKy_.js";
import { c as o } from "./element-COvSoy4d.js";
function g(i, e = "check") {
  const t = o(void 0, "input", l(i));
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
    const e = c(i);
    if (n(i))
      return { pattern: i };
    if (a(e))
      return e;
  }
  return {};
}
export {
  g as u
};
