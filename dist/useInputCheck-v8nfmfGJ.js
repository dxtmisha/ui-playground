import { i as r, e as o, a as u, b as a } from "./object-Cv4Jn6-r.js";
import { a as n } from "./string-BjW7AeH_.js";
import { c } from "./element-DOaDn3jQ.js";
function m(i, e = "check") {
  const t = c(void 0, "input", f(i));
  return {
    group: e,
    input: t,
    pattern: i,
    check(s) {
      return t.value = n(s), {
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
    if (a(e))
      return e;
  }
  return {};
}
export {
  m as u
};
