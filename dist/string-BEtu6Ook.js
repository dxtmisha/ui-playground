import { isRef as y, computed as p, ref as w, h } from "vue";
function A(r) {
  return r == null;
}
function i(r) {
  return !!(r && typeof r == "object");
}
function C(r) {
  return i(r) && !Array.isArray(r);
}
function R(r) {
  return Array.isArray(r);
}
function b(r) {
  return typeof r == "string";
}
function $(r) {
  return r instanceof Function || typeof r == "function";
}
function E(r) {
  if (r)
    switch (typeof r) {
      case "bigint":
      case "number":
        return r !== 0;
      case "boolean":
        return r;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(r) ? r.length > 0 : Object.values(r).some((n) => !A(n));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(r);
      case "undefined":
        return !1;
      default:
        return !!r;
    }
  return !1;
}
function g(r, n) {
  return A(r) ? !1 : Array.isArray(n) ? n.includes(r) : r === n;
}
function J(r, n) {
  return Array.isArray(r) ? r.every((t) => g(t, n)) : g(r, n);
}
function u(r, n) {
  if (i(r)) {
    const t = [];
    return r instanceof Map ? r.forEach((e, s) => t.push(n(e, s, r))) : Array.isArray(r) ? r.forEach((e, s) => t.push(n(e, s, r))) : Object.entries(r).forEach(
      ([e, s]) => t.push(n(s, e, r))
    ), t.filter((e) => e !== void 0);
  }
  return [];
}
function O(r) {
  return $(r) ? r() : r;
}
function M(r, n = !1) {
  if (typeof r == "string") {
    const t = r.trim();
    switch (t) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(t))
          try {
            return JSON.parse(t);
          } catch {
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(t))
            return parseFloat(t);
          if (/^[0-9]+$/.exec(t))
            return parseInt(t, 10);
          if (n && window && t in window && typeof window[t] == "function")
            return window[t];
        }
    }
  }
  return r;
}
function I(r, n) {
  let t = Object.keys(r).length !== Object.keys(n).length;
  return t || u(r, (e, s) => {
    e !== (n == null ? void 0 : n[s]) && (t = !0);
  }), t;
}
function x(r, n) {
  return r.indexOf(n) !== -1;
}
function z(r, n) {
  return u(r, (t) => t == null ? void 0 : t[n]);
}
function K(r) {
  return Math.min(...l(r));
}
function T(r) {
  return Math.max(...l(r));
}
function a(r) {
  return JSON.parse(JSON.stringify(r));
}
function j(r) {
  return [...new Set(r)];
}
function L(r, n) {
  return Array(n).fill(r);
}
function c(r, n, t = !0) {
  const e = a(r);
  return i(r) && i(n) && u(
    n,
    (s, f) => {
      const o = r == null ? void 0 : r[f];
      i(o) && i(s) ? t && Array.isArray(o) && Array.isArray(s) ? e[f] = a(j([...o, ...s])) : e[f] = c(
        Array.isArray(o) ? { ...o } : o,
        s,
        t
      ) : e[f] = i(s) ? a(s) : s;
    }
  ), e;
}
function q(r, n, t) {
  if (i(r) && i(n)) {
    if (t) {
      let e = {}, s = !1;
      return u(r, (f, o) => {
        !s && (t === o || t === f) ? (s = !0, e = c(e, n)) : s ? e = c(e, { [o]: f }) : e[o] = i(f) ? a(f) : f;
      }), s ? e : c(r, n);
    }
    if (i(n))
      return c(r, n);
  }
  return a(r);
}
function U(r, n) {
  const t = {};
  return i(r) && i(n) && u(r, (e, s) => {
    s in n && (t[s] = e);
  }), t;
}
function G(r) {
  return Array.isArray(r) ? r : [r];
}
function l(r) {
  return u(r, (n) => n.length);
}
function d(r) {
  return r && "class" in r && typeof r.class == "string" ? r.class : void 0;
}
function S(r, n, t) {
  const e = d(n);
  return t && e ? `${t}.${e}` : t || e || r;
}
function F(r, n = {}, t = "value") {
  const e = typeof n == "string", s = e ? n : t, f = e ? {} : n;
  return r ? r && C(r) && s in r ? {
    ...f,
    ...r
  } : {
    ...f,
    [s]: r
  } : {};
}
function N(r) {
  return y(r) ? r.value : r;
}
function H(r, n = {}, t = "value") {
  return p(() => F(r == null ? void 0 : r.value, N(n), t));
}
function P(r) {
  return y(r) ? r : w(r);
}
function Q(r, n, t, e) {
  const s = S(r, n, e);
  return h(r, { key: s, ...n }, t);
}
function Z(r, n = "ig", t = ":value") {
  const e = r.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(t.replaceAll(":value", e), n);
}
async function V(r) {
  var n;
  return ((n = r == null ? void 0 : r.clipboardData) == null ? void 0 : n.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function W(r) {
  return b(r) ? r : i(r) ? JSON.stringify(r) : (r == null ? void 0 : r.toString()) ?? "";
}
function D(r) {
  return r.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (n) => `${n.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...n) => `${n[1].toUpperCase()}`).replace(/^([A-Z])/, (n) => `${n.toLowerCase()}`);
}
function X(r) {
  return D(r).replace(/^([a-z])/, (n) => `${n.toUpperCase()}`);
}
function Y(r) {
  return r.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (n) => `${n.toLowerCase()}`).replace(/^[A-Z]/, (n) => n.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (n) => `-${n.toLowerCase()}`).replace(/[A-Z]/g, (n) => n.toLowerCase());
}
function _(r, n) {
  let t = r;
  return u(n, (e, s) => {
    t = t.replace(Z(`[${s}]`), O(e));
  }), t;
}
function k(r, n) {
  return L(r, n).join("");
}
export {
  Q as A,
  P as B,
  F as C,
  d as D,
  S as E,
  W as F,
  V as G,
  Z as H,
  _ as I,
  k as J,
  D as K,
  X as L,
  Y as M,
  E as a,
  $ as b,
  A as c,
  i as d,
  O as e,
  u as f,
  C as g,
  g as h,
  R as i,
  J as j,
  b as k,
  L as l,
  a as m,
  x as n,
  I as o,
  U as p,
  z as q,
  T as r,
  K as s,
  M as t,
  c as u,
  q as v,
  G as w,
  j as x,
  H as y,
  N as z
};
