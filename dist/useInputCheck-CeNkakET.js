import { a as r, e as o, k as u, g as n } from "./object-DLpcn8Yy.js";
import { e as a } from "./string-BTYg8-hJ.js";
import { c } from "./element-DFCRAdFD.js";
function m(i, e = "check") {
  const t = c(void 0, "input", f(i));
  return {
    group: e,
    input: t,
    pattern: i,
    check(s) {
      return t.value = a(s), {
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
function f(i) {
  if (r(i)) {
    const e = o(i);
    if (u(i))
      return { pattern: i };
    if (n(e))
      return e;
  }
  return {};
}
export {
  m as u
};
