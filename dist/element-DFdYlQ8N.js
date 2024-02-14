import { v as g, y as u, f as d, e as f, z as l } from "./DesignConstructorAbstract-SiNW5baF.js";
import { r as y } from "./number-Bmx0fGP3.js";
function m(t) {
  return t === window;
}
function I(t) {
  var i;
  return !!((i = s(t)) != null && i.closest("html"));
}
function s(t) {
  if (m(t))
    return document.body;
  if (typeof t == "string")
    try {
      return document.querySelector(t) ?? void 0;
    } catch {
      return;
    }
  return t;
}
function $(t) {
  return m(t) ? t : s(t);
}
function h(t, i) {
  const e = s(t);
  return e ? (g(e.id) || e.setAttribute("id", `id-${a++}`), i ? `#${e.id}${i}`.trim() : e.id) : `id-${a++}`;
}
function b(t, i, e) {
  var n;
  return ((n = s(t)) == null ? void 0 : n[i]) ?? e;
}
function v(t) {
  const i = {}, e = s(t);
  if (e)
    for (const n of e.attributes)
      i[n.name] = ((n == null ? void 0 : n.value) || (n == null ? void 0 : n.textContent)) ?? void 0;
  return i;
}
function w(t, i, e) {
  const n = s(t);
  if (n) {
    const r = b(n, i);
    if (u(r) && u(e))
      d(e, (o, c) => {
        r[c] = f(o);
      });
    else {
      const o = f(e);
      !(i in n) && typeof o == "string" ? n.setAttribute(i.toString(), o) : n[i] = f(e);
    }
  }
  return n;
}
function O(t, i = "div", e, n) {
  const r = document.createElement(i);
  return typeof e == "function" ? e(r) : l(e) && d(e, (o, c) => {
    w(r, c, o);
  }), t == null || t.insertBefore(r, n ?? null), r;
}
let a = y(1e5, 9e5);
export {
  s as a,
  h as b,
  O as c,
  b as d,
  $ as e,
  m as f,
  v as g,
  I as i,
  w as s
};
