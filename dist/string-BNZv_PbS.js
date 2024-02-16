import { isRef as g, computed as A, ref as p, h as C } from "vue";
import { f as o, d as i, g as y, k as w, e as b } from "./data-DjQiFeY2.js";
function k(t, r) {
  let n = Object.keys(t).length !== Object.keys(r).length;
  return n || o(t, (e, s) => {
    e !== (r == null ? void 0 : r[s]) && (n = !0);
  }), n;
}
function F(t, r) {
  return t.indexOf(r) !== -1;
}
function z(t, r) {
  return o(t, (n) => n == null ? void 0 : n[r]);
}
function J(t) {
  return Math.min(...l(t));
}
function M(t) {
  return Math.max(...l(t));
}
function u(t) {
  return JSON.parse(JSON.stringify(t));
}
function h(t) {
  return [...new Set(t)];
}
function $(t, r) {
  return Array(r).fill(t);
}
function f(t, r, n = !0) {
  const e = u(t);
  return i(t) && i(r) && o(
    r,
    (s, a) => {
      const c = t == null ? void 0 : t[a];
      i(c) && i(s) ? n && Array.isArray(c) && Array.isArray(s) ? e[a] = u(h([...c, ...s])) : e[a] = f(
        Array.isArray(c) ? { ...c } : c,
        s,
        n
      ) : e[a] = i(s) ? u(s) : s;
    }
  ), e;
}
function T(t, r, n) {
  if (i(t) && i(r)) {
    if (n) {
      let e = {}, s = !1;
      return o(t, (a, c) => {
        !s && (n === c || n === a) ? (s = !0, e = f(e, r)) : s ? e = f(e, { [c]: a }) : e[c] = i(a) ? u(a) : a;
      }), s ? e : f(t, r);
    }
    if (i(r))
      return f(t, r);
  }
  return u(t);
}
function d(t, r) {
  const n = {};
  return i(t) && i(r) && o(t, (e, s) => {
    s in r && (n[s] = e);
  }), n;
}
function q(t) {
  return Array.isArray(t) ? t : [t];
}
function l(t) {
  return o(t, (r) => r.length);
}
function L(t) {
  return t && "class" in t && typeof t.class == "string" ? t.class : void 0;
}
function O(t, r, n) {
  const e = L(r);
  return n && e ? `${n}.${e}` : n || e || t;
}
function Z(t, r = {}, n = "value") {
  const e = typeof r == "string", s = e ? r : n, a = e ? {} : r;
  return t ? t && y(t) && s in t ? {
    ...a,
    ...t
  } : {
    ...a,
    [s]: t
  } : {};
}
function j(t) {
  return g(t) ? t.value : t;
}
function B(t, r = {}, n = "value") {
  return A(() => Z(t == null ? void 0 : t.value, j(r), n));
}
function I(t) {
  return g(t) ? t : p(t);
}
function K(t, r, n, e) {
  const s = O(t, r, e);
  return C(t, { key: s, ...r }, n);
}
function N(t, r = "ig", n = ":value") {
  const e = t.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(n.replaceAll(":value", e), r);
}
async function U(t) {
  var r;
  return ((r = t == null ? void 0 : t.clipboardData) == null ? void 0 : r.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function E(t) {
  return w(t) ? t : i(t) ? JSON.stringify(t) : (t == null ? void 0 : t.toString()) ?? "";
}
function S(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (r) => `${r.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...r) => `${r[1].toUpperCase()}`).replace(/^([A-Z])/, (r) => `${r.toLowerCase()}`);
}
function x(t) {
  return S(t).replace(/^([a-z])/, (r) => `${r.toUpperCase()}`);
}
function G(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (r) => `${r.toLowerCase()}`).replace(/^[A-Z]/, (r) => r.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (r) => `-${r.toLowerCase()}`).replace(/[A-Z]/g, (r) => r.toLowerCase());
}
function H(t, r) {
  let n = t;
  return o(r, (e, s) => {
    n = n.replace(N(`[${s}]`), b(e));
  }), n;
}
function P(t, r) {
  return $(t, r).join("");
}
export {
  G as A,
  $ as a,
  k as b,
  u as c,
  d,
  M as e,
  J as f,
  z as g,
  B as h,
  F as i,
  j,
  K as k,
  I as l,
  Z as m,
  L as n,
  O as o,
  E as p,
  U as q,
  f as r,
  T as s,
  q as t,
  h as u,
  N as v,
  H as w,
  P as x,
  S as y,
  x as z
};
