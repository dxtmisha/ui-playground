function u(o) {
  var c;
  return (o == null ? void 0 : o.key) ?? (o == null ? void 0 : o.code) ?? ((c = o == null ? void 0 : o.keyCode) == null ? void 0 : c.toString());
}
function g(o) {
  return {
    x: r(o),
    y: a(o)
  };
}
function r(o) {
  var c, i;
  return (o == null ? void 0 : o.clientX) || ((c = o == null ? void 0 : o.targetTouches) == null ? void 0 : c[0].clientX) || ((i = o == null ? void 0 : o.touches) == null ? void 0 : i[0].clientX) || 0;
}
function a(o) {
  var c, i;
  return (o == null ? void 0 : o.clientY) || ((c = o == null ? void 0 : o.targetTouches) == null ? void 0 : c[0].clientY) || ((i = o == null ? void 0 : o.touches) == null ? void 0 : i[0].clientY) || 0;
}
function l(o) {
  o.preventDefault(), o.stopPropagation();
}
export {
  a,
  g as b,
  u as c,
  r as g,
  l as m
};
