function A(r) {
  return r == null;
}
function i(r) {
  return !!(r && typeof r == "object");
}
function p(r) {
  return i(r) && !Array.isArray(r);
}
function w(r) {
  return Array.isArray(r);
}
function O(r) {
  return typeof r == "string";
}
function g(r) {
  return r instanceof Function || typeof r == "function";
}
function j(r) {
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
function y(r, n) {
  return A(r) ? !1 : Array.isArray(n) ? n.includes(r) : r === n;
}
function b(r, n) {
  return Array.isArray(r) ? r.every((t) => y(t, n)) : y(r, n);
}
function o(r, n) {
  if (i(r)) {
    const t = [];
    return r instanceof Map ? r.forEach((e, s) => t.push(n(e, s, r))) : Array.isArray(r) ? r.forEach((e, s) => t.push(n(e, s, r))) : Object.entries(r).forEach(
      ([e, s]) => t.push(n(s, e, r))
    ), t.filter((e) => e !== void 0);
  }
  return [];
}
function F(r) {
  return g(r) ? r() : r;
}
function N(r, n = !1) {
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
function S(r, n) {
  let t = Object.keys(r).length !== Object.keys(n).length;
  return t || o(r, (e, s) => {
    e !== (n == null ? void 0 : n[s]) && (t = !0);
  }), t;
}
function D(r, n) {
  return r.indexOf(n) !== -1;
}
function E(r, n) {
  return o(r, (t) => t == null ? void 0 : t[n]);
}
function L(r) {
  return Math.min(...h(r));
}
function M(r) {
  return Math.max(...h(r));
}
function a(r) {
  return JSON.parse(JSON.stringify(r));
}
function l(r) {
  return [...new Set(r)];
}
function B(r, n) {
  return Array(n).fill(r);
}
function c(r, n, t = !0) {
  const e = a(r);
  return i(r) && i(n) && o(
    n,
    (s, u) => {
      const f = r == null ? void 0 : r[u];
      i(f) && i(s) ? t && Array.isArray(f) && Array.isArray(s) ? e[u] = a(l([...f, ...s])) : e[u] = c(
        Array.isArray(f) ? { ...f } : f,
        s,
        t
      ) : e[u] = i(s) ? a(s) : s;
    }
  ), e;
}
function J(r, n, t) {
  if (i(r) && i(n)) {
    if (t) {
      let e = {}, s = !1;
      return o(r, (u, f) => {
        !s && (t === f || t === u) ? (s = !0, e = c(e, n)) : s ? e = c(e, { [f]: u }) : e[f] = i(u) ? a(u) : u;
      }), s ? e : c(r, n);
    }
    if (i(n))
      return c(r, n);
  }
  return a(r);
}
function q(r, n) {
  const t = {};
  return i(r) && i(n) && o(r, (e, s) => {
    s in n && (t[s] = e);
  }), t;
}
function $(r) {
  return Array.isArray(r) ? r : [r];
}
function h(r) {
  return o(r, (n) => n.length);
}
export {
  j as a,
  g as b,
  A as c,
  i as d,
  F as e,
  o as f,
  p as g,
  y as h,
  w as i,
  b as j,
  O as k,
  B as l,
  a as m,
  D as n,
  S as o,
  q as p,
  E as q,
  M as r,
  L as s,
  N as t,
  c as u,
  J as v,
  $ as w,
  l as x
};
