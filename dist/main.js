import { K as ye, a as K } from "./MutationDataItem-C9JqAYhn.js";
import { shallowRef as Yt, unref as re, shallowReactive as Jt, watch as de, nextTick as Xt, defineComponent as ft, reactive as dt, inject as ie, computed as T, h as ht, provide as Ee, ref as Zt, getCurrentInstance as pt, watchEffect as en, effectScope as tn, createApp as nn } from "vue";
import { l as rn, m as on, e as sn, f as mt, q as an, r as cn, s as un, n as ln, p as fn, i as dn, o as hn, a as gt, b as pn, c as mn, d as gn, g as vn, h as _n, j as yn, k as En, u as bn, v as wn, w as On, t as Nn, x as Cn } from "./object-DLpcn8Yy.js";
import { e as Rn, b as Sn, g as Pn, c as An, f as kn, h as xn, d as In, a as $n, r as Dn, i as Tn, s as Vn, j as jn, k as vt, l as Mn, t as Gn } from "./string-BTYg8-hJ.js";
import { C as Ln, a as Un, b as Bn, c as Kn, D as Wn, E as Hn, d as qn, e as Fn, f as zn, G as Qn, H as Yn, T as _t } from "./useTranslateRef-CCJ8vO8d.js";
import { u as Ii, g as $i, h as Di, i as Ti, j as Vi } from "./useTranslateRef-CCJ8vO8d.js";
import { t as Jn, G as Xn, a as Zn } from "./GeoIntl-COEyZZH7.js";
import { c as er, g as tr, b as nr, d as rr, e as or, f as ir, i as sr, a as ar, s as cr } from "./element-DFCRAdFD.js";
import { g as ur, a as lr, b as fr, c as dr, m as hr } from "./event-MN4DTwoE.js";
import { f as pr } from "./frame-kG6wLD-J.js";
import { i as mr, r as gr, t as vr } from "./number-Bmx0fGP3.js";
import { A as _r, G as yr, I as Er } from "./Icons-CbmXJ5D4.js";
import { C as br } from "./CacheItem-J86vAm6_.js";
import { D as wr } from "./DataStorage-QmCJmeXG.js";
import { D as Or } from "./Datetime-DeBly8TY.js";
import { E as Nr } from "./EventItem-BDoYgJGi.js";
import { c as Cr } from "./create-vy79VI6j.js";
import { a as Mi, r as Gi } from "./create-vy79VI6j.js";
import { u as Ui } from "./useEnv-o01b3-Ig.js";
const Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  anyToString: Rn,
  arrFill: rn,
  copyObject: on,
  createElement: er,
  executeFunction: sn,
  forEach: mt,
  frame: pr,
  getAttributes: tr,
  getBind: Sn,
  getBindRef: Pn,
  getClassName: An,
  getClient: ur,
  getClientX: lr,
  getClientY: fr,
  getClipboardData: kn,
  getColumn: an,
  getElement: nr,
  getElementId: rr,
  getElementItem: or,
  getElementOrWindow: ir,
  getExp: xn,
  getIndex: In,
  getKey: dr,
  getMaxLength: cn,
  getMinLength: un,
  getRef: $n,
  inArray: ln,
  intersectKey: fn,
  isArray: dn,
  isDifferent: hn,
  isFilled: gt,
  isFunction: pn,
  isInDom: sr,
  isIntegerBetween: mr,
  isNull: mn,
  isObject: gn,
  isObjectNotArray: vn,
  isSelected: _n,
  isSelectedByList: yn,
  isString: En,
  isWindow: ar,
  makeStopPropagation: hr,
  random: gr,
  render: Dn,
  replaceRecursive: bn,
  replaceTemplate: Tn,
  setElementItem: cr,
  splice: wn,
  strFill: Vn,
  toArray: On,
  toCamelCase: jn,
  toCamelCaseFirst: vt,
  toDate: Jn,
  toKebabCase: Mn,
  toNumber: vr,
  toRefItem: Gn,
  transformation: Nn,
  uniqueArray: Cn
}, Symbol.toStringTag, { value: "Module" })), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: _r,
  Cache: Ln,
  CacheItem: br,
  CacheStatic: Un,
  Cookie: Bn,
  CookieBlock: Kn,
  DataStorage: wr,
  Datetime: Or,
  DatetimeRef: Wn,
  EventItem: Nr,
  EventRef: Hn,
  Geo: Xn,
  GeoFlag: yr,
  GeoFlagRef: qn,
  GeoIntl: Zn,
  GeoIntlRef: Fn,
  GeoPhone: zn,
  GeoRef: Qn,
  Hash: Yn,
  Icons: Er,
  Translate: _t
}, Symbol.toStringTag, { value: "Module" }));
function Pr() {
  return yt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function yt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Ar = typeof Proxy == "function", kr = "devtools-plugin:setup", xr = "plugin:settings:set";
let Y, Ce;
function Ir() {
  var e;
  return Y !== void 0 || (typeof window < "u" && window.performance ? (Y = !0, Ce = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Y = !0, Ce = globalThis.perf_hooks.performance) : Y = !1), Y;
}
function $r() {
  return Ir() ? Ce.now() : Date.now();
}
class Dr {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const a in t.settings) {
        const f = t.settings[a];
        r[a] = f.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const a = localStorage.getItem(o), f = JSON.parse(a);
      Object.assign(s, f);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(a) {
        try {
          localStorage.setItem(o, JSON.stringify(a));
        } catch {
        }
        s = a;
      },
      now() {
        return $r();
      }
    }, n && n.on(xr, (a, f) => {
      a === this.plugin.id && this.fallbacks.setSettings(f);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, f) => this.target ? this.target.on[f] : (...u) => {
        this.onQueue.push({
          method: f,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, f) => this.target ? this.target[f] : f === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(f) ? (...u) => (this.targetQueue.push({
        method: f,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[f](...u)) : (...u) => new Promise((h) => {
        this.targetQueue.push({
          method: f,
          args: u,
          resolve: h
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Et(e, t) {
  const n = e, r = yt(), o = Pr(), s = Ar && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    o.emit(kr, e, t);
  else {
    const a = s ? new Dr(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: a
    }), a && t(a.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const U = typeof window < "u";
function Tr(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const C = Object.assign;
function be(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = D(o) ? o.map(e) : e(o);
  }
  return n;
}
const oe = () => {
}, D = Array.isArray;
function O(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function we(e, t, n = "/") {
  let r, o = {}, s = "", a = "";
  const f = t.indexOf("#");
  let u = t.indexOf("?");
  return f < u && f >= 0 && (u = -1), u > -1 && (r = t.slice(0, u), s = t.slice(u + 1, f > -1 ? f : t.length), o = e(s)), f > -1 && (r = r || t.slice(0, f), a = t.slice(f, t.length)), r = Mr(r ?? t, n), {
    fullPath: r + (s && "?") + s + a,
    path: r,
    query: o,
    hash: a
  };
}
function Vr(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function He(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && W(t.matched[r], n.matched[o]) && bt(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function W(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function bt(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!jr(e[n], t[n]))
      return !1;
  return !0;
}
function jr(e, t) {
  return D(e) ? qe(e, t) : D(t) ? qe(t, e) : e === t;
}
function qe(e, t) {
  return D(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Mr(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return O(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let s = n.length - 1, a, f;
  for (a = 0; a < r.length; a++)
    if (f = r[a], f !== ".")
      if (f === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + r.slice(a - (a === r.length ? 1 : 0)).join("/");
}
var le;
(function(e) {
  e.pop = "pop", e.push = "push";
})(le || (le = {}));
var Fe;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Fe || (Fe = {}));
function Gr(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const Lr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Ur(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (r && s) {
          O(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        O(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      process.env.NODE_ENV !== "production" && O(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Gr(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function ze(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Re = /* @__PURE__ */ new Map();
function Br(e, t) {
  Re.set(e, t);
}
function Kr(e) {
  const t = Re.get(e);
  return Re.delete(e), t;
}
function Wr(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function wt(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const L = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Se = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Qe;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Qe || (Qe = {}));
const Hr = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Fr(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function X(e, t) {
  return process.env.NODE_ENV !== "production" ? C(new Error(Hr[e](t)), {
    type: e,
    [Se]: !0
  }, t) : C(new Error(), {
    type: e,
    [Se]: !0
  }, t);
}
function G(e, t) {
  return e instanceof Error && Se in e && (t == null || !!(e.type & t));
}
const qr = ["params", "query", "hash"];
function Fr(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of qr)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Ye = "[^/]+?", zr = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Qr = /[.+*?^${}()[\]/\\]/g;
function Yr(e, t) {
  const n = C({}, zr, t), r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const h of e) {
    const i = h.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !h.length && (o += "/");
    for (let c = 0; c < h.length; c++) {
      const d = h[c];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        c || (o += "/"), o += d.value.replace(Qr, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: _, repeatable: k, optional: R, regexp: E } = d;
        s.push({
          name: _,
          repeatable: k,
          optional: R
        });
        const b = E || Ye;
        if (b !== Ye) {
          p += 10;
          try {
            new RegExp(`(${b})`);
          } catch (I) {
            throw new Error(`Invalid custom RegExp for param "${_}" (${b}): ` + I.message);
          }
        }
        let P = k ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        c || (P = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        R && h.length < 2 ? `(?:/${P})` : "/" + P), R && (P += "?"), o += P, p += 20, R && (p += -8), k && (p += -20), b === ".*" && (p += -50);
      }
      i.push(p);
    }
    r.push(i);
  }
  if (n.strict && n.end) {
    const h = r.length - 1;
    r[h][r[h].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
  const a = new RegExp(o, n.sensitive ? "" : "i");
  function f(h) {
    const i = h.match(a), c = {};
    if (!i)
      return null;
    for (let d = 1; d < i.length; d++) {
      const p = i[d] || "", _ = s[d - 1];
      c[_.name] = p && _.repeatable ? p.split("/") : p;
    }
    return c;
  }
  function u(h) {
    let i = "", c = !1;
    for (const d of e) {
      (!c || !i.endsWith("/")) && (i += "/"), c = !1;
      for (const p of d)
        if (p.type === 0)
          i += p.value;
        else if (p.type === 1) {
          const { value: _, repeatable: k, optional: R } = p, E = _ in h ? h[_] : "";
          if (D(E) && !k)
            throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
          const b = D(E) ? E.join("/") : E;
          if (!b)
            if (R)
              d.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${_}"`);
          i += b;
        }
    }
    return i || "/";
  }
  return {
    re: a,
    score: r,
    keys: s,
    parse: f,
    stringify: u
  };
}
function Jr(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r)
      return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Xr(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = Jr(r[n], o[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Je(r))
      return 1;
    if (Je(o))
      return -1;
  }
  return o.length - r.length;
}
function Je(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Zr = {
  type: 0,
  value: ""
}, eo = /[a-zA-Z0-9_]/;
function to(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Zr]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${h}": ${p}`);
  }
  let n = 0, r = n;
  const o = [];
  let s;
  function a() {
    s && o.push(s), s = [];
  }
  let f = 0, u, h = "", i = "";
  function c() {
    h && (n === 0 ? s.push({
      type: 0,
      value: h
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: h,
      regexp: i,
      repeatable: u === "*" || u === "+",
      optional: u === "*" || u === "?"
    })) : t("Invalid state to consume buffer"), h = "");
  }
  function d() {
    h += u;
  }
  for (; f < e.length; ) {
    if (u = e[f++], u === "\\" && n !== 2) {
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (h && c(), a()) : u === ":" ? (c(), n = 1) : d();
        break;
      case 4:
        d(), n = r;
        break;
      case 1:
        u === "(" ? n = 2 : eo.test(u) ? d() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && f--);
        break;
      case 2:
        u === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + u : n = 3 : i += u;
        break;
      case 3:
        c(), n = 0, u !== "*" && u !== "?" && u !== "+" && f--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${h}"`), c(), a(), o;
}
function no(e, t, n) {
  const r = Yr(to(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const a of r.keys)
      s.has(a.name) && O(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(a.name);
  }
  const o = C(r, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function ro(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = et({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(i) {
    return r.get(i);
  }
  function s(i, c, d) {
    const p = !d, _ = oo(i);
    process.env.NODE_ENV !== "production" && co(_, c), _.aliasOf = d && d.record;
    const k = et(t, i), R = [
      _
    ];
    if ("alias" in i) {
      const P = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const I of P)
        R.push(C({}, _, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : _.components,
          path: I,
          // we might be the child of an alias
          aliasOf: d ? d.record : _
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let E, b;
    for (const P of R) {
      const { path: I } = P;
      if (c && I[0] !== "/") {
        const H = c.record.path, M = H[H.length - 1] === "/" ? "" : "/";
        P.path = c.record.path + (I && M + I);
      }
      if (process.env.NODE_ENV !== "production" && P.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (E = no(P, c, k), process.env.NODE_ENV !== "production" && c && I[0] === "/" && uo(E, c), d ? (d.alias.push(E), process.env.NODE_ENV !== "production" && ao(d, E)) : (b = b || E, b !== E && b.alias.push(E), p && i.name && !Ze(E) && a(i.name)), _.children) {
        const H = _.children;
        for (let M = 0; M < H.length; M++)
          s(H[M], E, d && d.children[M]);
      }
      d = d || E, (E.record.components && Object.keys(E.record.components).length || E.record.name || E.record.redirect) && u(E);
    }
    return b ? () => {
      a(b);
    } : oe;
  }
  function a(i) {
    if (wt(i)) {
      const c = r.get(i);
      c && (r.delete(i), n.splice(n.indexOf(c), 1), c.children.forEach(a), c.alias.forEach(a));
    } else {
      const c = n.indexOf(i);
      c > -1 && (n.splice(c, 1), i.record.name && r.delete(i.record.name), i.children.forEach(a), i.alias.forEach(a));
    }
  }
  function f() {
    return n;
  }
  function u(i) {
    let c = 0;
    for (; c < n.length && Xr(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !Ot(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Ze(i) && r.set(i.record.name, i);
  }
  function h(i, c) {
    let d, p = {}, _, k;
    if ("name" in i && i.name) {
      if (d = r.get(i.name), !d)
        throw X(1, {
          location: i
        });
      if (process.env.NODE_ENV !== "production") {
        const b = Object.keys(i.params || {}).filter((P) => !d.keys.find((I) => I.name === P));
        b.length && O(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      k = d.record.name, p = C(
        // paramsFromLocation is a new object
        Xe(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((b) => !b.optional).map((b) => b.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Xe(i.params, d.keys.map((b) => b.name))
      ), _ = d.stringify(p);
    } else if ("path" in i)
      _ = i.path, process.env.NODE_ENV !== "production" && !_.startsWith("/") && O(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((b) => b.re.test(_)), d && (p = d.parse(_), k = d.record.name);
    else {
      if (d = c.name ? r.get(c.name) : n.find((b) => b.re.test(c.path)), !d)
        throw X(1, {
          location: i,
          currentLocation: c
        });
      k = d.record.name, p = C({}, c.params, i.params), _ = d.stringify(p);
    }
    const R = [];
    let E = d;
    for (; E; )
      R.unshift(E.record), E = E.parent;
    return {
      name: k,
      path: _,
      params: p,
      matched: R,
      meta: so(R)
    };
  }
  return e.forEach((i) => s(i)), { addRoute: s, resolve: h, removeRoute: a, getRoutes: f, getRecordMatcher: o };
}
function Xe(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function oo(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: io(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function io(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const r in e.components)
      t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Ze(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function so(e) {
  return e.reduce((t, n) => C(t, n.meta), {});
}
function et(e, t) {
  const n = {};
  for (const r in e)
    n[r] = r in t ? t[r] : e[r];
  return n;
}
function Pe(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function ao(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Pe.bind(null, n)))
      return O(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Pe.bind(null, n)))
      return O(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function co(e, t) {
  t && t.record.name && !e.name && !e.path && O(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function uo(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Pe.bind(null, n)))
      return O(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Ot(e, t) {
  return t.children.some((n) => n === e || Ot(e, n));
}
const Nt = /#/g, lo = /&/g, fo = /\//g, ho = /=/g, po = /\?/g, Ct = /\+/g, mo = /%5B/g, go = /%5D/g, Rt = /%5E/g, vo = /%60/g, St = /%7B/g, _o = /%7C/g, Pt = /%7D/g, yo = /%20/g;
function $e(e) {
  return encodeURI("" + e).replace(_o, "|").replace(mo, "[").replace(go, "]");
}
function Eo(e) {
  return $e(e).replace(St, "{").replace(Pt, "}").replace(Rt, "^");
}
function Ae(e) {
  return $e(e).replace(Ct, "%2B").replace(yo, "+").replace(Nt, "%23").replace(lo, "%26").replace(vo, "`").replace(St, "{").replace(Pt, "}").replace(Rt, "^");
}
function bo(e) {
  return Ae(e).replace(ho, "%3D");
}
function wo(e) {
  return $e(e).replace(Nt, "%23").replace(po, "%3F");
}
function Oo(e) {
  return e == null ? "" : wo(e).replace(fo, "%2F");
}
function se(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && O(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function No(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Ct, " "), a = s.indexOf("="), f = se(a < 0 ? s : s.slice(0, a)), u = a < 0 ? null : se(s.slice(a + 1));
    if (f in t) {
      let h = t[f];
      D(h) || (h = t[f] = [h]), h.push(u);
    } else
      t[f] = u;
  }
  return t;
}
function tt(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = bo(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (D(r) ? r.map((s) => s && Ae(s)) : [r && Ae(r)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function Co(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = D(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
const Ro = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), nt = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), De = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), At = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), ke = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function te() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const o = e.indexOf(r);
      o > -1 && e.splice(o, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function B(e, t, n, r, o) {
  const s = r && // name is defined if record is because of the function overload
  (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((a, f) => {
    const u = (c) => {
      c === !1 ? f(X(4, {
        from: n,
        to: t
      })) : c instanceof Error ? f(c) : Wr(c) ? f(X(2, {
        from: t,
        to: c
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      r.enterCallbacks[o] === s && typeof c == "function" && s.push(c), a());
    }, h = e.call(r && r.instances[o], t, n, process.env.NODE_ENV !== "production" ? So(u, t, n) : u);
    let i = Promise.resolve(h);
    if (e.length < 3 && (i = i.then(u)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof h == "object" && "then" in h)
        i = i.then((d) => u._called ? d : (O(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (h !== void 0 && !u._called) {
        O(c), f(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => f(c));
  });
}
function So(e, t, n) {
  let r = 0;
  return function() {
    r++ === 1 && O(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, r === 1 && e.apply(null, arguments);
  };
}
function Oe(e, t, n, r) {
  const o = [];
  for (const s of e) {
    process.env.NODE_ENV !== "production" && !s.components && !s.children.length && O(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in s.components) {
      let f = s.components[a];
      if (process.env.NODE_ENV !== "production") {
        if (!f || typeof f != "object" && typeof f != "function")
          throw O(`Component "${a}" in record with path "${s.path}" is not a valid component. Received "${String(f)}".`), new Error("Invalid route component");
        if ("then" in f) {
          O(`Component "${a}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = f;
          f = () => u;
        } else
          f.__asyncLoader && // warn only once per component
          !f.__warnedDefineAsync && (f.__warnedDefineAsync = !0, O(`Component "${a}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !s.instances[a]))
        if (Po(f)) {
          const h = (f.__vccOpts || f)[t];
          h && o.push(B(h, n, r, s, a));
        } else {
          let u = f();
          process.env.NODE_ENV !== "production" && !("catch" in u) && (O(`Component "${a}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), o.push(() => u.then((h) => {
            if (!h)
              return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
            const i = Tr(h) ? h.default : h;
            s.components[a] = i;
            const d = (i.__vccOpts || i)[t];
            return d && B(d, n, r, s, a)();
          }));
        }
    }
  }
  return o;
}
function Po(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function rt(e) {
  const t = ie(De), n = ie(At), r = T(() => t.resolve(re(e.to))), o = T(() => {
    const { matched: u } = r.value, { length: h } = u, i = u[h - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const d = c.findIndex(W.bind(null, i));
    if (d > -1)
      return d;
    const p = ot(u[h - 2]);
    return (
      // we are dealing with nested routes
      h > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      ot(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(W.bind(null, u[h - 2])) : d
    );
  }), s = T(() => o.value > -1 && Io(n.params, r.value.params)), a = T(() => o.value > -1 && o.value === n.matched.length - 1 && bt(n.params, r.value.params));
  function f(u = {}) {
    return xo(u) ? t[re(e.replace) ? "replace" : "push"](
      re(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(oe) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && U) {
    const u = pt();
    if (u) {
      const h = {
        route: r.value,
        isActive: s.value,
        isExactActive: a.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(h), en(() => {
        h.route = r.value, h.isActive = s.value, h.isExactActive = a.value;
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: T(() => r.value.href),
    isActive: s,
    isExactActive: a,
    navigate: f
  };
}
const Ao = /* @__PURE__ */ ft({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: rt,
  setup(e, { slots: t }) {
    const n = dt(rt(e)), { options: r } = ie(De), o = T(() => ({
      [it(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [it(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : ht("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, s);
    };
  }
}), ko = Ao;
function xo(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Io(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o)
        return !1;
    } else if (!D(o) || o.length !== r.length || r.some((s, a) => s !== o[a]))
      return !1;
  }
  return !0;
}
function ot(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const it = (e, t, n) => e ?? t ?? n, $o = /* @__PURE__ */ ft({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && To();
    const r = ie(ke), o = T(() => e.route || r.value), s = ie(nt, 0), a = T(() => {
      let h = re(s);
      const { matched: i } = o.value;
      let c;
      for (; (c = i[h]) && !c.components; )
        h++;
      return h;
    }), f = T(() => o.value.matched[a.value]);
    Ee(nt, T(() => a.value + 1)), Ee(Ro, f), Ee(ke, o);
    const u = Zt();
    return de(() => [u.value, f.value, e.name], ([h, i, c], [d, p, _]) => {
      i && (i.instances[c] = h, p && p !== i && h && h === d && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), h && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !W(i, p) || !d) && (i.enterCallbacks[c] || []).forEach((k) => k(h));
    }, { flush: "post" }), () => {
      const h = o.value, i = e.name, c = f.value, d = c && c.components[i];
      if (!d)
        return st(n.default, { Component: d, route: h });
      const p = c.props[i], _ = p ? p === !0 ? h.params : typeof p == "function" ? p(h) : p : null, R = ht(d, C({}, _, t, {
        onVnodeUnmounted: (E) => {
          E.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if (process.env.NODE_ENV !== "production" && U && R.ref) {
        const E = {
          depth: a.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (D(R.ref) ? R.ref.map((P) => P.i) : [R.ref.i]).forEach((P) => {
          P.__vrv_devtools = E;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        st(n.default, { Component: R, route: h }) || R
      );
    };
  }
});
function st(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Do = $o;
function To() {
  const e = pt(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const r = t === "KeepAlive" ? "keep-alive" : "transition";
    O(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function ne(e, t) {
  const n = C({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((r) => Wo(r, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function ue(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Vo = 0;
function jo(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const r = Vo++;
  Et({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((i, c) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: ne(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const d = c.__vrv_devtools;
        i.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: kt
        });
      }
      D(c.__vrl_devtools) && (c.__devtoolsApi = o, c.__vrl_devtools.forEach((d) => {
        let p = $t, _ = "";
        d.isExactActive ? (p = It, _ = "This is exactly active") : d.isActive && (p = xt, _ = "This link is active"), i.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: _,
          backgroundColor: p
        });
      }));
    }), de(t.currentRoute, () => {
      u(), o.notifyComponentUpdate(), o.sendInspectorTree(f), o.sendInspectorState(f);
    });
    const s = "router:navigations:" + r;
    o.addTimelineLayer({
      id: s,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), t.onError((i, c) => {
      o.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: c.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: i },
          groupId: c.meta.__navigationId
        }
      });
    });
    let a = 0;
    t.beforeEach((i, c) => {
      const d = {
        guard: ue("beforeEach"),
        from: ne(c, "Current Location during this navigation"),
        to: ne(i, "Target location")
      };
      Object.defineProperty(i.meta, "__navigationId", {
        value: a++
      }), o.addTimelineEvent({
        layerId: s,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: i.fullPath,
          data: d,
          groupId: i.meta.__navigationId
        }
      });
    }), t.afterEach((i, c, d) => {
      const p = {
        guard: ue("afterEach")
      };
      d ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, p.status = ue("❌")) : p.status = ue("✅"), p.from = ne(c, "Current Location during this navigation"), p.to = ne(i, "Target location"), o.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: i.fullPath,
          time: o.now(),
          data: p,
          logType: d ? "warning" : "default",
          groupId: i.meta.__navigationId
        }
      });
    });
    const f = "router-inspector:" + r;
    o.addInspector({
      id: f,
      label: "Routes" + (r ? " " + r : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function u() {
      if (!h)
        return;
      const i = h;
      let c = n.getRoutes().filter((d) => !d.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !d.parent.record.components);
      c.forEach(Vt), i.filter && (c = c.filter((d) => (
        // save matches state based on the payload
        xe(d, i.filter.toLowerCase())
      ))), c.forEach((d) => Tt(d, t.currentRoute.value)), i.rootNodes = c.map(Dt);
    }
    let h;
    o.on.getInspectorTree((i) => {
      h = i, i.app === e && i.inspectorId === f && u();
    }), o.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === f) {
        const d = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        d && (i.state = {
          options: Go(d)
        });
      }
    }), o.sendInspectorTree(f), o.sendInspectorState(f);
  });
}
function Mo(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Go(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((r) => `${r.name}${Mo(r)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((r) => r.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((r) => r.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const kt = 15485081, xt = 2450411, It = 8702998, Lo = 2282478, $t = 16486972, Uo = 6710886;
function Dt(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Lo
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: $t
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: kt
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: It
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: xt
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Uo
  });
  let r = n.__vd_id;
  return r == null && (r = String(Bo++), n.__vd_id = r), {
    id: r,
    label: n.path,
    tags: t,
    children: e.children.map(Dt)
  };
}
let Bo = 0;
const Ko = /^\/(.*)\/([a-z]*)$/;
function Tt(e, t) {
  const n = t.matched.length && W(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((r) => W(r, e.record))), e.children.forEach((r) => Tt(r, t));
}
function Vt(e) {
  e.__vd_match = !1, e.children.forEach(Vt);
}
function xe(e, t) {
  const n = String(e.re).match(Ko);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((a) => xe(a, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), s = se(o);
  return !t.startsWith("/") && (s.includes(t) || o.includes(t)) || s.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((a) => xe(a, t));
}
function Wo(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Ho(e) {
  const t = ro(e.routes, e), n = e.parseQuery || No, r = e.stringifyQuery || tt, o = e.history;
  if (process.env.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = te(), a = te(), f = te(), u = Yt(L);
  let h = L;
  U && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = be.bind(null, (l) => "" + l), c = be.bind(null, Oo), d = (
    // @ts-expect-error: intentionally avoid the type check
    be.bind(null, se)
  );
  function p(l, g) {
    let m, v;
    return wt(l) ? (m = t.getRecordMatcher(l), v = g) : v = l, t.addRoute(v, m);
  }
  function _(l) {
    const g = t.getRecordMatcher(l);
    g ? t.removeRoute(g) : process.env.NODE_ENV !== "production" && O(`Cannot remove non-existent route "${String(l)}"`);
  }
  function k() {
    return t.getRoutes().map((l) => l.record);
  }
  function R(l) {
    return !!t.getRecordMatcher(l);
  }
  function E(l, g) {
    if (g = C({}, g || u.value), typeof l == "string") {
      const y = we(n, l, g.path), S = t.resolve({ path: y.path }, g), q = o.createHref(y.fullPath);
      return process.env.NODE_ENV !== "production" && (q.startsWith("//") ? O(`Location "${l}" resolved to "${q}". A resolved location cannot start with multiple slashes.`) : S.matched.length || O(`No match found for location with path "${l}"`)), C(y, S, {
        params: d(S.params),
        hash: se(y.hash),
        redirectedFrom: void 0,
        href: q
      });
    }
    let m;
    if ("path" in l)
      process.env.NODE_ENV !== "production" && "params" in l && !("name" in l) && // @ts-expect-error: the type is never
      Object.keys(l.params).length && O(`Path "${l.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), m = C({}, l, {
        path: we(n, l.path, g.path).path
      });
    else {
      const y = C({}, l.params);
      for (const S in y)
        y[S] == null && delete y[S];
      m = C({}, l, {
        params: c(y)
      }), g.params = c(g.params);
    }
    const v = t.resolve(m, g), N = l.hash || "";
    process.env.NODE_ENV !== "production" && N && !N.startsWith("#") && O(`A \`hash\` should always start with the character "#". Replace "${N}" with "#${N}".`), v.params = i(d(v.params));
    const A = Vr(r, C({}, l, {
      hash: Eo(N),
      path: v.path
    })), w = o.createHref(A);
    return process.env.NODE_ENV !== "production" && (w.startsWith("//") ? O(`Location "${l}" resolved to "${w}". A resolved location cannot start with multiple slashes.`) : v.matched.length || O(`No match found for location with path "${"path" in l ? l.path : l}"`)), C({
      fullPath: A,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: N,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        r === tt ? Co(l.query) : l.query || {}
      )
    }, v, {
      redirectedFrom: void 0,
      href: w
    });
  }
  function b(l) {
    return typeof l == "string" ? we(n, l, u.value.path) : C({}, l);
  }
  function P(l, g) {
    if (h !== l)
      return X(8, {
        from: g,
        to: l
      });
  }
  function I(l) {
    return Z(l);
  }
  function H(l) {
    return I(C(b(l), { replace: !0 }));
  }
  function M(l) {
    const g = l.matched[l.matched.length - 1];
    if (g && g.redirect) {
      const { redirect: m } = g;
      let v = typeof m == "function" ? m(l) : m;
      if (typeof v == "string" && (v = v.includes("?") || v.includes("#") ? v = b(v) : (
        // force empty params
        { path: v }
      ), v.params = {}), process.env.NODE_ENV !== "production" && !("path" in v) && !("name" in v))
        throw O(`Invalid redirect found:
${JSON.stringify(v, null, 2)}
 when navigating to "${l.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return C({
        query: l.query,
        hash: l.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in v ? {} : l.params
      }, v);
    }
  }
  function Z(l, g) {
    const m = h = E(l), v = u.value, N = l.state, A = l.force, w = l.replace === !0, y = M(m);
    if (y)
      return Z(
        C(b(y), {
          state: typeof y == "object" ? C({}, N, y.state) : N,
          force: A,
          replace: w
        }),
        // keep original redirectedFrom if it exists
        g || m
      );
    const S = m;
    S.redirectedFrom = g;
    let q;
    return !A && He(r, v, m) && (q = X(16, { to: S, from: v }), Ke(
      v,
      v,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (q ? Promise.resolve(q) : Ge(S, v)).catch((x) => G(x) ? (
      // navigation redirects still mark the router as ready
      G(
        x,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? x : ge(x)
    ) : (
      // reject any unknown error
      me(x, S, v)
    )).then((x) => {
      if (x) {
        if (G(
          x,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          He(r, E(x.to), S) && // and we have done it a couple of times
          g && // @ts-expect-error: added only in dev
          (g._count = g._count ? (
            // @ts-expect-error
            g._count + 1
          ) : 1) > 30 ? (O(`Detected a possibly infinite redirection in a navigation guard when going from "${v.fullPath}" to "${S.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : Z(
            // keep options
            C({
              // preserve an existing replacement but allow the redirect to override it
              replace: w
            }, b(x.to), {
              state: typeof x.to == "object" ? C({}, N, x.to.state) : N,
              force: A
            }),
            // preserve the original redirectedFrom if any
            g || S
          );
      } else
        x = Ue(S, v, !0, w, N);
      return Le(S, v, x), x;
    });
  }
  function Ft(l, g) {
    const m = P(l, g);
    return m ? Promise.reject(m) : Promise.resolve();
  }
  function Me(l) {
    const g = ce.values().next().value;
    return g && typeof g.runWithContext == "function" ? g.runWithContext(l) : l();
  }
  function Ge(l, g) {
    let m;
    const [v, N, A] = qo(l, g);
    m = Oe(v.reverse(), "beforeRouteLeave", l, g);
    for (const y of v)
      y.leaveGuards.forEach((S) => {
        m.push(B(S, l, g));
      });
    const w = Ft.bind(null, l, g);
    return m.push(w), Q(m).then(() => {
      m = [];
      for (const y of s.list())
        m.push(B(y, l, g));
      return m.push(w), Q(m);
    }).then(() => {
      m = Oe(N, "beforeRouteUpdate", l, g);
      for (const y of N)
        y.updateGuards.forEach((S) => {
          m.push(B(S, l, g));
        });
      return m.push(w), Q(m);
    }).then(() => {
      m = [];
      for (const y of A)
        if (y.beforeEnter)
          if (D(y.beforeEnter))
            for (const S of y.beforeEnter)
              m.push(B(S, l, g));
          else
            m.push(B(y.beforeEnter, l, g));
      return m.push(w), Q(m);
    }).then(() => (l.matched.forEach((y) => y.enterCallbacks = {}), m = Oe(A, "beforeRouteEnter", l, g), m.push(w), Q(m))).then(() => {
      m = [];
      for (const y of a.list())
        m.push(B(y, l, g));
      return m.push(w), Q(m);
    }).catch((y) => G(
      y,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? y : Promise.reject(y));
  }
  function Le(l, g, m) {
    f.list().forEach((v) => Me(() => v(l, g, m)));
  }
  function Ue(l, g, m, v, N) {
    const A = P(l, g);
    if (A)
      return A;
    const w = g === L, y = U ? history.state : {};
    m && (v || w ? o.replace(l.fullPath, C({
      scroll: w && y && y.scroll
    }, N)) : o.push(l.fullPath, N)), u.value = l, Ke(l, g, m, w), ge();
  }
  let ee;
  function zt() {
    ee || (ee = o.listen((l, g, m) => {
      if (!We.listening)
        return;
      const v = E(l), N = M(v);
      if (N) {
        Z(C(N, { replace: !0 }), v).catch(oe);
        return;
      }
      h = v;
      const A = u.value;
      U && Br(ze(A.fullPath, m.delta), Lr()), Ge(v, A).catch((w) => G(
        w,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? w : G(
        w,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (Z(
        w.to,
        v
        // avoid an uncaught rejection, let push call triggerError
      ).then((y) => {
        G(
          y,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !m.delta && m.type === le.pop && o.go(-1, !1);
      }).catch(oe), Promise.reject()) : (m.delta && o.go(-m.delta, !1), me(w, v, A))).then((w) => {
        w = w || Ue(
          // after navigation, all matched components are resolved
          v,
          A,
          !1
        ), w && (m.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !G(
          w,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-m.delta, !1) : m.type === le.pop && G(
          w,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), Le(v, A, w);
      }).catch(oe);
    }));
  }
  let pe = te(), Be = te(), ae;
  function me(l, g, m) {
    ge(l);
    const v = Be.list();
    return v.length ? v.forEach((N) => N(l, g, m)) : (process.env.NODE_ENV !== "production" && O("uncaught error during route navigation:"), console.error(l)), Promise.reject(l);
  }
  function Qt() {
    return ae && u.value !== L ? Promise.resolve() : new Promise((l, g) => {
      pe.add([l, g]);
    });
  }
  function ge(l) {
    return ae || (ae = !l, zt(), pe.list().forEach(([g, m]) => l ? m(l) : g()), pe.reset()), l;
  }
  function Ke(l, g, m, v) {
    const { scrollBehavior: N } = e;
    if (!U || !N)
      return Promise.resolve();
    const A = !m && Kr(ze(l.fullPath, 0)) || (v || !m) && history.state && history.state.scroll || null;
    return Xt().then(() => N(l, g, A)).then((w) => w && Ur(w)).catch((w) => me(w, l, g));
  }
  const ve = (l) => o.go(l);
  let _e;
  const ce = /* @__PURE__ */ new Set(), We = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: _,
    hasRoute: R,
    getRoutes: k,
    resolve: E,
    options: e,
    push: I,
    replace: H,
    go: ve,
    back: () => ve(-1),
    forward: () => ve(1),
    beforeEach: s.add,
    beforeResolve: a.add,
    afterEach: f.add,
    onError: Be.add,
    isReady: Qt,
    install(l) {
      const g = this;
      l.component("RouterLink", ko), l.component("RouterView", Do), l.config.globalProperties.$router = g, Object.defineProperty(l.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => re(u)
      }), U && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !_e && u.value === L && (_e = !0, I(o.location).catch((N) => {
        process.env.NODE_ENV !== "production" && O("Unexpected error when starting the router:", N);
      }));
      const m = {};
      for (const N in L)
        Object.defineProperty(m, N, {
          get: () => u.value[N],
          enumerable: !0
        });
      l.provide(De, g), l.provide(At, Jt(m)), l.provide(ke, u);
      const v = l.unmount;
      ce.add(l), l.unmount = function() {
        ce.delete(l), ce.size < 1 && (h = L, ee && ee(), ee = null, u.value = L, _e = !1, ae = !1), v();
      }, process.env.NODE_ENV !== "production" && U && jo(l, g, t);
    }
  };
  function Q(l) {
    return l.reduce((g, m) => g.then(() => Me(m)), Promise.resolve());
  }
  return We;
}
function qo(e, t) {
  const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < s; a++) {
    const f = t.matched[a];
    f && (e.matched.find((h) => W(h, f)) ? r.push(f) : n.push(f));
    const u = e.matched[a];
    u && (t.matched.find((h) => W(h, u)) || o.push(u));
  }
  return [n, r, o];
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var Fo = "store";
function F(e, t) {
  Object.keys(e).forEach(function(n) {
    return t(e[n], n);
  });
}
function zo(e) {
  return e !== null && typeof e == "object";
}
function Qo(e) {
  return e && typeof e.then == "function";
}
function V(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function Yo(e, t) {
  return function() {
    return e(t);
  };
}
function jt(e, t, n) {
  return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
    var r = t.indexOf(e);
    r > -1 && t.splice(r, 1);
  };
}
function Mt(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = e.state;
  he(e, n, [], e._modules.root, !0), Te(e, n, t);
}
function Te(e, t, n) {
  var r = e._state, o = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var s = e._wrappedGetters, a = {}, f = {}, u = tn(!0);
  u.run(function() {
    F(s, function(h, i) {
      a[i] = Yo(h, e), f[i] = T(function() {
        return a[i]();
      }), Object.defineProperty(e.getters, i, {
        get: function() {
          return f[i].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = dt({
    data: t
  }), e._scope = u, e.strict && ti(e), r && n && e._withCommit(function() {
    r.data = null;
  }), o && o.stop();
}
function he(e, t, n, r, o) {
  var s = !n.length, a = e._modules.getNamespace(n);
  if (r.namespaced && (e._modulesNamespaceMap[a] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + a + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[a] = r), !s && !o) {
    var f = Ve(t, n.slice(0, -1)), u = n[n.length - 1];
    e._withCommit(function() {
      process.env.NODE_ENV !== "production" && u in f && console.warn(
        '[vuex] state field "' + u + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), f[u] = r.state;
    });
  }
  var h = r.context = Jo(e, a, n);
  r.forEachMutation(function(i, c) {
    var d = a + c;
    Xo(e, d, i, h);
  }), r.forEachAction(function(i, c) {
    var d = i.root ? c : a + c, p = i.handler || i;
    Zo(e, d, p, h);
  }), r.forEachGetter(function(i, c) {
    var d = a + c;
    ei(e, d, i, h);
  }), r.forEachChild(function(i, c) {
    he(e, t, n.concat(c), i, o);
  });
}
function Jo(e, t, n) {
  var r = t === "", o = {
    dispatch: r ? e.dispatch : function(s, a, f) {
      var u = fe(s, a, f), h = u.payload, i = u.options, c = u.type;
      if ((!i || !i.root) && (c = t + c, process.env.NODE_ENV !== "production" && !e._actions[c])) {
        console.error("[vuex] unknown local action type: " + u.type + ", global type: " + c);
        return;
      }
      return e.dispatch(c, h);
    },
    commit: r ? e.commit : function(s, a, f) {
      var u = fe(s, a, f), h = u.payload, i = u.options, c = u.type;
      if ((!i || !i.root) && (c = t + c, process.env.NODE_ENV !== "production" && !e._mutations[c])) {
        console.error("[vuex] unknown local mutation type: " + u.type + ", global type: " + c);
        return;
      }
      e.commit(c, h, i);
    }
  };
  return Object.defineProperties(o, {
    getters: {
      get: r ? function() {
        return e.getters;
      } : function() {
        return Gt(e, t);
      }
    },
    state: {
      get: function() {
        return Ve(e.state, n);
      }
    }
  }), o;
}
function Gt(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {}, r = t.length;
    Object.keys(e.getters).forEach(function(o) {
      if (o.slice(0, r) === t) {
        var s = o.slice(r);
        Object.defineProperty(n, s, {
          get: function() {
            return e.getters[o];
          },
          enumerable: !0
        });
      }
    }), e._makeLocalGettersCache[t] = n;
  }
  return e._makeLocalGettersCache[t];
}
function Xo(e, t, n, r) {
  var o = e._mutations[t] || (e._mutations[t] = []);
  o.push(function(a) {
    n.call(e, r.state, a);
  });
}
function Zo(e, t, n, r) {
  var o = e._actions[t] || (e._actions[t] = []);
  o.push(function(a) {
    var f = n.call(e, {
      dispatch: r.dispatch,
      commit: r.commit,
      getters: r.getters,
      state: r.state,
      rootGetters: e.getters,
      rootState: e.state
    }, a);
    return Qo(f) || (f = Promise.resolve(f)), e._devtoolHook ? f.catch(function(u) {
      throw e._devtoolHook.emit("vuex:error", u), u;
    }) : f;
  });
}
function ei(e, t, n, r) {
  if (e._wrappedGetters[t]) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate getter key: " + t);
    return;
  }
  e._wrappedGetters[t] = function(s) {
    return n(
      r.state,
      // local state
      r.getters,
      // local getters
      s.state,
      // root state
      s.getters
      // root getters
    );
  };
}
function ti(e) {
  de(function() {
    return e._state.data;
  }, function() {
    process.env.NODE_ENV !== "production" && V(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Ve(e, t) {
  return t.reduce(function(n, r) {
    return n[r];
  }, e);
}
function fe(e, t, n) {
  return zo(e) && e.type && (n = t, t = e, e = e.type), process.env.NODE_ENV !== "production" && V(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var ni = "vuex bindings", at = "vuex:mutations", Ne = "vuex:actions", J = "vuex", ri = 0;
function oi(e, t) {
  Et(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [ni]
    },
    function(n) {
      n.addTimelineLayer({
        id: at,
        label: "Vuex Mutations",
        color: ct
      }), n.addTimelineLayer({
        id: Ne,
        label: "Vuex Actions",
        color: ct
      }), n.addInspector({
        id: J,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(r) {
        if (r.app === e && r.inspectorId === J)
          if (r.filter) {
            var o = [];
            Kt(o, t._modules.root, r.filter, ""), r.rootNodes = o;
          } else
            r.rootNodes = [
              Bt(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(r) {
        if (r.app === e && r.inspectorId === J) {
          var o = r.nodeId;
          Gt(t, o), r.state = ai(
            ui(t._modules, o),
            o === "root" ? t.getters : t._makeLocalGettersCache,
            o
          );
        }
      }), n.on.editInspectorState(function(r) {
        if (r.app === e && r.inspectorId === J) {
          var o = r.nodeId, s = r.path;
          o !== "root" && (s = o.split("/").filter(Boolean).concat(s)), t._withCommit(function() {
            r.set(t._state.data, s, r.state.value);
          });
        }
      }), t.subscribe(function(r, o) {
        var s = {};
        r.payload && (s.payload = r.payload), s.state = o, n.notifyComponentUpdate(), n.sendInspectorTree(J), n.sendInspectorState(J), n.addTimelineEvent({
          layerId: at,
          event: {
            time: Date.now(),
            title: r.type,
            data: s
          }
        });
      }), t.subscribeAction({
        before: function(r, o) {
          var s = {};
          r.payload && (s.payload = r.payload), r._id = ri++, r._time = Date.now(), s.state = o, n.addTimelineEvent({
            layerId: Ne,
            event: {
              time: r._time,
              title: r.type,
              groupId: r._id,
              subtitle: "start",
              data: s
            }
          });
        },
        after: function(r, o) {
          var s = {}, a = Date.now() - r._time;
          s.duration = {
            _custom: {
              type: "duration",
              display: a + "ms",
              tooltip: "Action duration",
              value: a
            }
          }, r.payload && (s.payload = r.payload), s.state = o, n.addTimelineEvent({
            layerId: Ne,
            event: {
              time: Date.now(),
              title: r.type,
              groupId: r._id,
              subtitle: "end",
              data: s
            }
          });
        }
      });
    }
  );
}
var ct = 8702998, ii = 6710886, si = 16777215, Lt = {
  label: "namespaced",
  textColor: si,
  backgroundColor: ii
};
function Ut(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function Bt(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: Ut(t),
    tags: e.namespaced ? [Lt] : [],
    children: Object.keys(e._children).map(
      function(n) {
        return Bt(
          e._children[n],
          t + n + "/"
        );
      }
    )
  };
}
function Kt(e, t, n, r) {
  r.includes(n) && e.push({
    id: r || "root",
    label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
    tags: t.namespaced ? [Lt] : []
  }), Object.keys(t._children).forEach(function(o) {
    Kt(e, t._children[o], n, r + o + "/");
  });
}
function ai(e, t, n) {
  t = n === "root" ? t : t[n];
  var r = Object.keys(t), o = {
    state: Object.keys(e.state).map(function(a) {
      return {
        key: a,
        editable: !0,
        value: e.state[a]
      };
    })
  };
  if (r.length) {
    var s = ci(t);
    o.getters = Object.keys(s).map(function(a) {
      return {
        key: a.endsWith("/") ? Ut(a) : a,
        editable: !1,
        value: Ie(function() {
          return s[a];
        })
      };
    });
  }
  return o;
}
function ci(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var r = n.split("/");
    if (r.length > 1) {
      var o = t, s = r.pop();
      r.forEach(function(a) {
        o[a] || (o[a] = {
          _custom: {
            value: {},
            display: a,
            tooltip: "Module",
            abstract: !0
          }
        }), o = o[a]._custom.value;
      }), o[s] = Ie(function() {
        return e[n];
      });
    } else
      t[n] = Ie(function() {
        return e[n];
      });
  }), t;
}
function ui(e, t) {
  var n = t.split("/").filter(function(r) {
    return r;
  });
  return n.reduce(
    function(r, o, s) {
      var a = r[o];
      if (!a)
        throw new Error('Missing module "' + o + '" for path "' + t + '".');
      return s === n.length - 1 ? a : a._children;
    },
    t === "root" ? e : e.root._children
  );
}
function Ie(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var j = function(t, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var r = t.state;
  this.state = (typeof r == "function" ? r() : r) || {};
}, Wt = { namespaced: { configurable: !0 } };
Wt.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
j.prototype.addChild = function(t, n) {
  this._children[t] = n;
};
j.prototype.removeChild = function(t) {
  delete this._children[t];
};
j.prototype.getChild = function(t) {
  return this._children[t];
};
j.prototype.hasChild = function(t) {
  return t in this._children;
};
j.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
j.prototype.forEachChild = function(t) {
  F(this._children, t);
};
j.prototype.forEachGetter = function(t) {
  this._rawModule.getters && F(this._rawModule.getters, t);
};
j.prototype.forEachAction = function(t) {
  this._rawModule.actions && F(this._rawModule.actions, t);
};
j.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && F(this._rawModule.mutations, t);
};
Object.defineProperties(j.prototype, Wt);
var z = function(t) {
  this.register([], t, !1);
};
z.prototype.get = function(t) {
  return t.reduce(function(n, r) {
    return n.getChild(r);
  }, this.root);
};
z.prototype.getNamespace = function(t) {
  var n = this.root;
  return t.reduce(function(r, o) {
    return n = n.getChild(o), r + (n.namespaced ? o + "/" : "");
  }, "");
};
z.prototype.update = function(t) {
  Ht([], this.root, t);
};
z.prototype.register = function(t, n, r) {
  var o = this;
  r === void 0 && (r = !0), process.env.NODE_ENV !== "production" && qt(t, n);
  var s = new j(n, r);
  if (t.length === 0)
    this.root = s;
  else {
    var a = this.get(t.slice(0, -1));
    a.addChild(t[t.length - 1], s);
  }
  n.modules && F(n.modules, function(f, u) {
    o.register(t.concat(u), f, r);
  });
};
z.prototype.unregister = function(t) {
  var n = this.get(t.slice(0, -1)), r = t[t.length - 1], o = n.getChild(r);
  if (!o) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + r + "', which is not registered"
    );
    return;
  }
  o.runtime && n.removeChild(r);
};
z.prototype.isRegistered = function(t) {
  var n = this.get(t.slice(0, -1)), r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function Ht(e, t, n) {
  if (process.env.NODE_ENV !== "production" && qt(e, n), t.update(n), n.modules)
    for (var r in n.modules) {
      if (!t.getChild(r)) {
        process.env.NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + r + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      Ht(
        e.concat(r),
        t.getChild(r),
        n.modules[r]
      );
    }
}
var ut = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, li = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, lt = {
  getters: ut,
  mutations: ut,
  actions: li
};
function qt(e, t) {
  Object.keys(lt).forEach(function(n) {
    if (t[n]) {
      var r = lt[n];
      F(t[n], function(o, s) {
        V(
          r.assert(o),
          fi(e, n, s, o, r.expected)
        );
      });
    }
  });
}
function fi(e, t, n, r, o) {
  var s = t + " should be " + o + ' but "' + t + "." + n + '"';
  return e.length > 0 && (s += ' in module "' + e.join(".") + '"'), s += " is " + JSON.stringify(r) + ".", s;
}
function di(e) {
  return new $(e);
}
var $ = function e(t) {
  var n = this;
  t === void 0 && (t = {}), process.env.NODE_ENV !== "production" && (V(typeof Promise < "u", "vuex requires a Promise polyfill in this browser."), V(this instanceof e, "store must be called with the new operator."));
  var r = t.plugins;
  r === void 0 && (r = []);
  var o = t.strict;
  o === void 0 && (o = !1);
  var s = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new z(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = s;
  var a = this, f = this, u = f.dispatch, h = f.commit;
  this.dispatch = function(d, p) {
    return u.call(a, d, p);
  }, this.commit = function(d, p, _) {
    return h.call(a, d, p, _);
  }, this.strict = o;
  var i = this._modules.root.state;
  he(this, i, [], this._modules.root), Te(this, i), r.forEach(function(c) {
    return c(n);
  });
}, je = { state: { configurable: !0 } };
$.prototype.install = function(t, n) {
  t.provide(n || Fo, this), t.config.globalProperties.$store = this;
  var r = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  r && oi(t, this);
};
je.state.get = function() {
  return this._state.data;
};
je.state.set = function(e) {
  process.env.NODE_ENV !== "production" && V(!1, "use store.replaceState() to explicit replace store state.");
};
$.prototype.commit = function(t, n, r) {
  var o = this, s = fe(t, n, r), a = s.type, f = s.payload, u = s.options, h = { type: a, payload: f }, i = this._mutations[a];
  if (!i) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + a);
    return;
  }
  this._withCommit(function() {
    i.forEach(function(d) {
      d(f);
    });
  }), this._subscribers.slice().forEach(function(c) {
    return c(h, o.state);
  }), process.env.NODE_ENV !== "production" && u && u.silent && console.warn(
    "[vuex] mutation type: " + a + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
$.prototype.dispatch = function(t, n) {
  var r = this, o = fe(t, n), s = o.type, a = o.payload, f = { type: s, payload: a }, u = this._actions[s];
  if (!u) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + s);
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(i) {
      return i.before;
    }).forEach(function(i) {
      return i.before(f, r.state);
    });
  } catch (i) {
    process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in before action subscribers: "), console.error(i));
  }
  var h = u.length > 1 ? Promise.all(u.map(function(i) {
    return i(a);
  })) : u[0](a);
  return new Promise(function(i, c) {
    h.then(function(d) {
      try {
        r._actionSubscribers.filter(function(p) {
          return p.after;
        }).forEach(function(p) {
          return p.after(f, r.state);
        });
      } catch (p) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in after action subscribers: "), console.error(p));
      }
      i(d);
    }, function(d) {
      try {
        r._actionSubscribers.filter(function(p) {
          return p.error;
        }).forEach(function(p) {
          return p.error(f, r.state, d);
        });
      } catch (p) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in error action subscribers: "), console.error(p));
      }
      c(d);
    });
  });
};
$.prototype.subscribe = function(t, n) {
  return jt(t, this._subscribers, n);
};
$.prototype.subscribeAction = function(t, n) {
  var r = typeof t == "function" ? { before: t } : t;
  return jt(r, this._actionSubscribers, n);
};
$.prototype.watch = function(t, n, r) {
  var o = this;
  return process.env.NODE_ENV !== "production" && V(typeof t == "function", "store.watch only accepts a function."), de(function() {
    return t(o.state, o.getters);
  }, n, Object.assign({}, r));
};
$.prototype.replaceState = function(t) {
  var n = this;
  this._withCommit(function() {
    n._state.data = t;
  });
};
$.prototype.registerModule = function(t, n, r) {
  r === void 0 && (r = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (V(Array.isArray(t), "module path must be a string or an Array."), V(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), he(this, this.state, t, this._modules.get(t), r.preserveState), Te(this, this.state);
};
$.prototype.unregisterModule = function(t) {
  var n = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && V(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var r = Ve(n.state, t.slice(0, -1));
    delete r[t[t.length - 1]];
  }), Mt(this);
};
$.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && V(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
$.prototype.hotUpdate = function(t) {
  this._modules.update(t), Mt(this, !0);
};
$.prototype._withCommit = function(t) {
  var n = this._committing;
  this._committing = !0, t(), this._committing = n;
};
Object.defineProperties($.prototype, je);
class hi {
  /**
   * Adding a new component or project to the cache.<br>
   * Добавление в кеш нового компонента или проекта.
   * @param name component name /<br>название компонента
   * @param app project object /<br>объект проекта
   * @param router data for Router /<br>данные для Router
   * @param store data for Store /<br>данные для Store
   * @param init function for additional object management /<br>функция для дополнительного управления объектом
   * @param translate list of text translation keys /<br>список ключей текстовых переводов
   */
  static addComponent(t, n, r, o, s, a) {
    const f = window, u = { item: n };
    r && (u.router = r), o && (u.store = o), s && (u.init = s), a && (u.translate = a), ye in f ? f[ye][t] = u : f[ye] = {
      [t]: u
    };
  }
  /**
   * Creates a new component by name.<br>
   * Создает новый компонент по названию.
   * @param name component name /<br>название компонента
   */
  static createComponent(t) {
    const n = K.getComponentGlobalItem(t);
    n && K.addComponent(
      vt(t.replace(/\//g, "-")),
      n.item
    );
  }
  /**
   * Creating a project for Vue.<br>
   * Создание проекта для Vue.
   * @param name project name /<br>название проекта
   */
  static createApp(t) {
    const n = K.getComponentGlobalItem(t);
    n && (gt(n == null ? void 0 : n.translate) ? _t.add(n.translate).then(() => this.createAppItem(t, n)) : this.createAppItem(t, n));
  }
  /**
   * Creates a vue object.<br>
   * Создает объект vue.
   * @param name project name /<br>название проекта
   * @param item global project /<br>глобальный проект
   */
  static createAppItem(t, n) {
    const r = nn(n.item);
    n != null && n.router && r.use(this.createRouter(n.router)), n != null && n.store && r.use(this.createStore(n.store)), n != null && n.init && n.init(r), mt(K.getComponentList(), (o, s) => r.component(s, o)), r.mount(`*[data-app="${t}"]`);
  }
  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  static createRouter(t) {
    return Ho(t);
  }
  /**
   * Creates data for Store.<br>
   * Создает данные для Store.
   * @param store store data /<br>данные store
   */
  static createStore(t) {
    return di(t);
  }
}
K.addFunctionList(Rr);
K.addClassList(Sr);
K.addComponentList(Cr);
window.UI = K;
window.UI_VUE = hi;
export {
  _r as Api,
  Ln as Cache,
  br as CacheItem,
  Un as CacheStatic,
  Bn as Cookie,
  Kn as CookieBlock,
  wr as DataStorage,
  Or as Datetime,
  Wn as DatetimeRef,
  Nr as EventItem,
  Hn as EventRef,
  Xn as Geo,
  yr as GeoFlag,
  qn as GeoFlagRef,
  Zn as GeoIntl,
  Fn as GeoIntlRef,
  zn as GeoPhone,
  Qn as GeoRef,
  Yn as Hash,
  Er as Icons,
  _t as Translate,
  Rn as anyToString,
  rn as arrFill,
  on as copyObject,
  er as createElement,
  Mi as createUiComponents,
  sn as executeFunction,
  mt as forEach,
  pr as frame,
  tr as getAttributes,
  Sn as getBind,
  Pn as getBindRef,
  An as getClassName,
  ur as getClient,
  lr as getClientX,
  fr as getClientY,
  kn as getClipboardData,
  an as getColumn,
  nr as getElement,
  rr as getElementId,
  or as getElementItem,
  ir as getElementOrWindow,
  xn as getExp,
  In as getIndex,
  dr as getKey,
  cn as getMaxLength,
  un as getMinLength,
  $n as getRef,
  ln as inArray,
  fn as intersectKey,
  dn as isArray,
  hn as isDifferent,
  gt as isFilled,
  pn as isFunction,
  sr as isInDom,
  mr as isIntegerBetween,
  mn as isNull,
  gn as isObject,
  vn as isObjectNotArray,
  _n as isSelected,
  yn as isSelectedByList,
  En as isString,
  ar as isWindow,
  hr as makeStopPropagation,
  gr as random,
  Gi as registrationUiComponents,
  Dn as render,
  bn as replaceRecursive,
  Tn as replaceTemplate,
  cr as setElementItem,
  wn as splice,
  Vn as strFill,
  On as toArray,
  jn as toCamelCase,
  vt as toCamelCaseFirst,
  Jn as toDate,
  Mn as toKebabCase,
  vr as toNumber,
  Gn as toRefItem,
  Nn as transformation,
  Cn as uniqueArray,
  Ii as useCookieRef,
  Ui as useEnv,
  $i as useHashRef,
  Di as useSessionRef,
  Ti as useStorageRef,
  Vi as useTranslateRef
};
