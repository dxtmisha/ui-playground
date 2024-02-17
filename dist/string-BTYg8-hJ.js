import { isRef as s, computed as c, ref as i, h as f } from "vue";
import { g, k as u, d as l, f as p, e as C, l as d } from "./object-DLpcn8Yy.js";
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
function Z(r) {
  return s(r) ? r.value : r;
}
function S(r, t = {}, e = "value") {
  return c(() => $(r == null ? void 0 : r.value, Z(t), e));
}
function N(r) {
  return s(r) ? r : i(r);
}
function R(r, t, e, a) {
  const n = A(r, t, a);
  return f(r, { key: n, ...t }, e);
}
function b(r, t = "ig", e = ":value") {
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
    e = e.replace(b(`[${n}]`), C(a));
  }), e;
}
function D(r, t) {
  return d(r, t).join("");
}
export {
  Z as a,
  $ as b,
  w as c,
  A as d,
  x as e,
  j as f,
  S as g,
  b as h,
  k as i,
  m as j,
  F as k,
  h as l,
  R as r,
  D as s,
  N as t
};
