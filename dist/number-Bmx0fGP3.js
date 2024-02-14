function n(r, e) {
  const t = Math.floor(e);
  return r >= t && r < t + 1;
}
function a(r, e) {
  return Math.floor(Math.random() * (e - r + 1) + r);
}
function o(r) {
  return typeof r == "number" ? r : i(r) || 0;
}
function i(r) {
  let e = r.replace(/[^\d., ]+/ig, "");
  return e.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? e = e.replace(/ /ig, "").replace(/,/ig, ".") : e.match(/,[0-9]{3}[,.]/ig) ? e = e.replace(/,/ig, "") : e.match(/[.][0-9]{3}[,.]/ig) ? e = e.replace(/[.]/ig, "").replace(/,/ig, ".") : e = e.replace(/,/ig, "."), parseFloat(e);
}
export {
  n as i,
  a as r,
  o as t
};
