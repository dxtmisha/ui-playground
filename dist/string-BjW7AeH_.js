import { isRef as s, computed as c, ref as i, h as f } from "vue";
import { b as g, a as u, c as l, f as p, e as C, k as d } from "./object-Cv4Jn6-r.js";
function w(r) {
  return r && "class" in r && typeof r.class == "string" ? r.class : void 0;
}
function A(r, t, e) {
  const a = w(t);
  return e && a ? `${e}.${a}` : e || a || r;
}
function $(r, t = {}, e = "value") {
  const a = typeof t == "string", n = a ? t : e, o = a ? {} : t;
  return r ? r && g(r) && n in r ? {
    ...o,
    ...r
  } : {
    ...o,
    [n]: r
  } : {};
}
function b(r) {
  return s(r) ? r.value : r;
}
function S(r, t = {}, e = "value") {
  return c(() => $(r == null ? void 0 : r.value, b(t), e));
}
function N(r) {
  return s(r) ? r : i(r);
}
function R(r, t, e, a) {
  const n = A(r, t, a);
  return f(r, { key: n, ...t }, e);
}
function Z(r, t = "ig", e = ":value") {
  const a = r.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(e.replaceAll(":value", a), t);
}
async function j(r) {
  var t;
  return ((t = r == null ? void 0 : r.clipboardData) == null ? void 0 : t.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function x(r) {
  return u(r) ? r : l(r) ? JSON.stringify(r) : (r == null ? void 0 : r.toString()) ?? "";
}
function m(r) {
  return r.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${t[1].toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
function F(r) {
  return m(r).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function h(r) {
  return r.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
function k(r, t) {
  let e = r;
  return p(t, (a, n) => {
    e = e.replace(Z(`[${n}]`), C(a));
  }), e;
}
function D(r, t) {
  return d(r, t).join("");
}
export {
  x as a,
  $ as b,
  h as c,
  F as d,
  S as e,
  w as f,
  b as g,
  j as h,
  Z as i,
  A as j,
  k,
  N as l,
  R as r,
  D as s,
  m as t
};
