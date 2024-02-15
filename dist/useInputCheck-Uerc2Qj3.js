import { F as r, a as u, e as n, k as a, g as c } from "./string-BEtu6Ook.js";
import { c as o } from "./element-CA9epvId.js";
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
    const e = n(i);
    if (a(i))
      return { pattern: i };
    if (c(e))
      return e;
  }
  return {};
}
export {
  g as u
};
