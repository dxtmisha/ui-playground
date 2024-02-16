function f(r) {
  return r == null;
}
function u(r) {
  return !!(r && typeof r == "object");
}
function c(r) {
  return u(r) && !Array.isArray(r);
}
function a(r) {
  return Array.isArray(r);
}
function y(r) {
  return typeof r == "string";
}
function o(r) {
  return r instanceof Function || typeof r == "function";
}
function p(r) {
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
        return Array.isArray(r) ? r.length > 0 : Object.values(r).some((e) => !f(e));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(r);
      case "undefined":
        return !1;
      default:
        return !!r;
    }
  return !1;
}
function s(r, e) {
  return f(r) ? !1 : Array.isArray(e) ? e.includes(r) : r === e;
}
function A(r, e) {
  return Array.isArray(r) ? r.every((n) => s(n, e)) : s(r, e);
}
function h(r, e) {
  if (u(r)) {
    const n = [];
    return r instanceof Map ? r.forEach((t, i) => n.push(e(t, i, r))) : Array.isArray(r) ? r.forEach((t, i) => n.push(e(t, i, r))) : Object.entries(r).forEach(
      ([t, i]) => n.push(e(i, t, r))
    ), n.filter((t) => t !== void 0);
  }
  return [];
}
function d(r) {
  return o(r) ? r() : r;
}
function w(r, e = !1) {
  if (typeof r == "string") {
    const n = r.trim();
    switch (n) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(n))
          try {
            return JSON.parse(n);
          } catch {
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(n))
            return parseFloat(n);
          if (/^[0-9]+$/.exec(n))
            return parseInt(n, 10);
          if (e && window && n in window && typeof window[n] == "function")
            return window[n];
        }
    }
  }
  return r;
}
export {
  p as a,
  o as b,
  f as c,
  u as d,
  d as e,
  h as f,
  c as g,
  s as h,
  a as i,
  A as j,
  y as k,
  w as t
};
