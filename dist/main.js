import { K as $e, M as F, c as $n } from "./create-B430Drc8.js";
import { a as hs, r as vs } from "./create-B430Drc8.js";
import * as In from "vue";
import { getCurrentInstance as ge, inject as L, computed as T, unref as se, watchEffect as Dn, shallowRef as Tn, onUnmounted as Vn, onDeactivated as jn, onActivated as Mn, defineComponent as It, reactive as Dt, h as Tt, provide as Ie, ref as Ln, watch as ye, shallowReactive as Gn, nextTick as Un, effectScope as Bn, createApp as Hn } from "vue";
import { a as Fn, c as Kn, e as Wn, f as Vt, g as zn, b as qn, d as Qn, i as Yn, h as Jn, j as Xn, k as Zn, l as jt, m as er, n as tr, o as nr, p as rr, q as or, r as ir, s as sr, t as ar, u as cr, v as ur, w as lr, x as fr, y as dr, z as pr, A as hr, B as vr, C as mr, D as gr, G as yr, E as _r, F as Er, I as br } from "./Icons-B2shL_H9.js";
import { H as gs } from "./Icons-B2shL_H9.js";
import { a as wr, c as Or, f as Nr, g as Sr, b as Rr, d as Cr, e as Ar, h as Pr, i as xr, j as kr, k as $r, l as Ir, m as Dr, n as Tr, o as Vr, p as jr, q as Mr, r as Lr, s as Gr, t as Ur, u as Br, v as Hr, w as Fr, x as Kr, y as Wr, z as zr, A as qr, B as Mt, C as Qr, D as Yr, E as Jr, F as Xr, G as Zr } from "./EventItem-Bqy2KS2D.js";
import { C as eo, a as to, b as no, c as ro, D as oo, E as io, G as so, d as ao, e as co, f as uo, H as lo, T as Lt, u as fo } from "./index-Dt9SSgXj.js";
import { g as _s, h as Es, i as bs, j as ws, k as Os } from "./index-Dt9SSgXj.js";
const po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  anyToString: wr,
  arrFill: Fn,
  copyObject: Kn,
  createElement: Or,
  executeFunction: Wn,
  forEach: Vt,
  frame: Nr,
  getAttributes: Sr,
  getBind: Rr,
  getBindRef: Cr,
  getClassName: Ar,
  getClient: Pr,
  getClientX: xr,
  getClientY: kr,
  getClipboardData: $r,
  getColumn: zn,
  getElement: Ir,
  getElementId: Dr,
  getElementItem: Tr,
  getElementOrWindow: Vr,
  getExp: jr,
  getIndex: Mr,
  getKey: Lr,
  getMaxLength: qn,
  getMinLength: Qn,
  getRef: Gr,
  inArray: Yn,
  intersectKey: Jn,
  isArray: Xn,
  isDifferent: Zn,
  isFilled: jt,
  isFunction: er,
  isInDom: Ur,
  isIntegerBetween: tr,
  isNull: nr,
  isObject: rr,
  isObjectNotArray: or,
  isSelected: ir,
  isSelectedByList: sr,
  isString: ar,
  isWindow: Br,
  makeStopPropagation: Hr,
  random: cr,
  render: Fr,
  replaceRecursive: ur,
  replaceTemplate: Kr,
  setElementItem: Wr,
  splice: lr,
  strFill: zr,
  toArray: fr,
  toCamelCase: qr,
  toCamelCaseFirst: Mt,
  toDate: dr,
  toKebabCase: Qr,
  toNumber: pr,
  toRefItem: Yr,
  transformation: hr,
  uniqueArray: vr
}, Symbol.toStringTag, { value: "Module" })), ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: mr,
  Cache: eo,
  CacheItem: Jr,
  CacheStatic: to,
  Cookie: no,
  CookieBlock: ro,
  DataStorage: gr,
  Datetime: Xr,
  DatetimeRef: oo,
  EventItem: Zr,
  EventRef: io,
  Geo: yr,
  GeoFlag: _r,
  GeoFlagRef: so,
  GeoIntl: Er,
  GeoIntlRef: ao,
  GeoPhone: co,
  GeoRef: uo,
  Hash: lo,
  Icons: br,
  Translate: Lt
}, Symbol.toStringTag, { value: "Module" }));
function vo() {
  return Gt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Gt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const mo = typeof Proxy == "function", go = "devtools-plugin:setup", yo = "plugin:settings:set";
let X, Le;
function _o() {
  var e;
  return X !== void 0 || (typeof window < "u" && window.performance ? (X = !0, Le = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (X = !0, Le = globalThis.perf_hooks.performance) : X = !1), X;
}
function Eo() {
  return _o() ? Le.now() : Date.now();
}
class bo {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const c in t.settings) {
        const u = t.settings[c];
        r[c] = u.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const c = localStorage.getItem(o), u = JSON.parse(c);
      Object.assign(s, u);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(c) {
        try {
          localStorage.setItem(o, JSON.stringify(c));
        } catch {
        }
        s = c;
      },
      now() {
        return Eo();
      }
    }, n && n.on(yo, (c, u) => {
      c === this.plugin.id && this.fallbacks.setSettings(u);
    }), this.proxiedOn = new Proxy({}, {
      get: (c, u) => this.target ? this.target.on[u] : (...a) => {
        this.onQueue.push({
          method: u,
          args: a
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (c, u) => this.target ? this.target[u] : u === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(u) ? (...a) => (this.targetQueue.push({
        method: u,
        args: a,
        resolve: () => {
        }
      }), this.fallbacks[u](...a)) : (...a) => new Promise((d) => {
        this.targetQueue.push({
          method: u,
          args: a,
          resolve: d
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
function Ut(e, t) {
  const n = e, r = Gt(), o = vo(), s = mo && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    o.emit(go, e, t);
  else {
    const c = s ? new bo(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: c
    }), c && t(c.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const B = typeof window < "u";
function Bt(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const R = Object.assign;
function De(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = D(o) ? o.map(e) : e(o);
  }
  return n;
}
const ae = () => {
}, D = Array.isArray;
function E(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const wo = /\/$/, Oo = (e) => e.replace(wo, "");
function Te(e, t, n = "/") {
  let r, o = {}, s = "", c = "";
  const u = t.indexOf("#");
  let a = t.indexOf("?");
  return u < a && u >= 0 && (a = -1), a > -1 && (r = t.slice(0, a), s = t.slice(a + 1, u > -1 ? u : t.length), o = e(s)), u > -1 && (r = r || t.slice(0, u), c = t.slice(u, t.length)), r = Ro(r ?? t, n), {
    fullPath: r + (s && "?") + s + c,
    path: r,
    query: o,
    hash: c
  };
}
function No(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function pt(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function ht(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && K(t.matched[r], n.matched[o]) && Ht(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function K(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ht(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!So(e[n], t[n]))
      return !1;
  return !0;
}
function So(e, t) {
  return D(e) ? vt(e, t) : D(t) ? vt(t, e) : e === t;
}
function vt(e, t) {
  return D(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Ro(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return E(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let s = n.length - 1, c, u;
  for (c = 0; c < r.length; c++)
    if (u = r[c], u !== ".")
      if (u === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + r.slice(c - (c === r.length ? 1 : 0)).join("/");
}
var ee;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ee || (ee = {}));
var q;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(q || (q = {}));
const Ve = "";
function Ft(e) {
  if (!e)
    if (B) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Oo(e);
}
const Co = /^[^#]+#/;
function Kt(e, t) {
  return e.replace(Co, "#") + t;
}
function Ao(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const _e = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Po(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (r && s) {
          E(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        E(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      process.env.NODE_ENV !== "production" && E(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Ao(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function mt(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ge = /* @__PURE__ */ new Map();
function xo(e, t) {
  Ge.set(e, t);
}
function ko(e) {
  const t = Ge.get(e);
  return Ge.delete(e), t;
}
let $o = () => location.protocol + "//" + location.host;
function Wt(e, t) {
  const { pathname: n, search: r, hash: o } = t, s = e.indexOf("#");
  if (s > -1) {
    let u = o.includes(e.slice(s)) ? e.slice(s).length : 1, a = o.slice(u);
    return a[0] !== "/" && (a = "/" + a), pt(a, "");
  }
  return pt(n, e) + r + o;
}
function Io(e, t, n, r) {
  let o = [], s = [], c = null;
  const u = ({ state: f }) => {
    const h = Wt(e, location), y = n.value, C = t.value;
    let N = 0;
    if (f) {
      if (n.value = h, t.value = f, c && c === y) {
        c = null;
        return;
      }
      N = C ? f.position - C.position : 0;
    } else
      r(h);
    o.forEach((_) => {
      _(n.value, y, {
        delta: N,
        type: ee.pop,
        direction: N ? N > 0 ? q.forward : q.back : q.unknown
      });
    });
  };
  function a() {
    c = n.value;
  }
  function d(f) {
    o.push(f);
    const h = () => {
      const y = o.indexOf(f);
      y > -1 && o.splice(y, 1);
    };
    return s.push(h), h;
  }
  function i() {
    const { history: f } = window;
    f.state && f.replaceState(R({}, f.state, { scroll: _e() }), "");
  }
  function l() {
    for (const f of s)
      f();
    s = [], window.removeEventListener("popstate", u), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", u), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: a,
    listen: d,
    destroy: l
  };
}
function gt(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? _e() : null
  };
}
function Do(e) {
  const { history: t, location: n } = window, r = {
    value: Wt(e, n)
  }, o = { value: t.state };
  o.value || s(r.value, {
    back: null,
    current: r.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function s(a, d, i) {
    const l = e.indexOf("#"), f = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + a : $o() + e + a;
    try {
      t[i ? "replaceState" : "pushState"](d, "", f), o.value = d;
    } catch (h) {
      process.env.NODE_ENV !== "production" ? E("Error with push/replace State", h) : console.error(h), n[i ? "replace" : "assign"](f);
    }
  }
  function c(a, d) {
    const i = R({}, t.state, gt(
      o.value.back,
      // keep back and forward entries but override current position
      a,
      o.value.forward,
      !0
    ), d, { position: o.value.position });
    s(a, i, !0), r.value = a;
  }
  function u(a, d) {
    const i = R(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: a,
        scroll: _e()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && E(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), s(i.current, i, !0);
    const l = R({}, gt(r.value, a, null), { position: i.position + 1 }, d);
    s(a, l, !1), r.value = a;
  }
  return {
    location: r,
    state: o,
    push: u,
    replace: c
  };
}
function zt(e) {
  e = Ft(e);
  const t = Do(e), n = Io(e, t.state, t.location, t.replace);
  function r(s, c = !0) {
    c || n.pauseListeners(), history.go(s);
  }
  const o = R({
    // it's overridden right after
    location: "",
    base: e,
    go: r,
    createHref: Kt.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function To(e = "") {
  let t = [], n = [Ve], r = 0;
  e = Ft(e);
  function o(u) {
    r++, r !== n.length && n.splice(r), n.push(u);
  }
  function s(u, a, { direction: d, delta: i }) {
    const l = {
      direction: d,
      delta: i,
      type: ee.pop
    };
    for (const f of t)
      f(u, a, l);
  }
  const c = {
    // rewritten by Object.defineProperty
    location: Ve,
    // TODO: should be kept in queue
    state: {},
    base: e,
    createHref: Kt.bind(null, e),
    replace(u) {
      n.splice(r--, 1), o(u);
    },
    push(u, a) {
      o(u);
    },
    listen(u) {
      return t.push(u), () => {
        const a = t.indexOf(u);
        a > -1 && t.splice(a, 1);
      };
    },
    destroy() {
      t = [], n = [Ve], r = 0;
    },
    go(u, a = !0) {
      const d = this.location, i = (
        // we are considering delta === 0 going forward, but in abstract mode
        // using 0 for the delta doesn't make sense like it does in html5 where
        // it reloads the page
        u < 0 ? q.back : q.forward
      );
      r = Math.max(0, Math.min(r + u, n.length - 1)), a && s(this.location, d, {
        direction: i,
        delta: u
      });
    }
  };
  return Object.defineProperty(c, "location", {
    enumerable: !0,
    get: () => n[r]
  }), c;
}
function Vo(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), process.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && E(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), zt(e);
}
function jo(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function qt(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const U = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Ue = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Be;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Be || (Be = {}));
const Mo = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Go(t)}" via a navigation guard.`;
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
function te(e, t) {
  return process.env.NODE_ENV !== "production" ? R(new Error(Mo[e](t)), {
    type: e,
    [Ue]: !0
  }, t) : R(new Error(), {
    type: e,
    [Ue]: !0
  }, t);
}
function M(e, t) {
  return e instanceof Error && Ue in e && (t == null || !!(e.type & t));
}
const Lo = ["params", "query", "hash"];
function Go(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Lo)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const yt = "[^/]+?", Uo = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Bo = /[.+*?^${}()[\]/\\]/g;
function Ho(e, t) {
  const n = R({}, Uo, t), r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const d of e) {
    const i = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (o += "/");
    for (let l = 0; l < d.length; l++) {
      const f = d[l];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        l || (o += "/"), o += f.value.replace(Bo, "\\$&"), h += 40;
      else if (f.type === 1) {
        const { value: y, repeatable: C, optional: N, regexp: _ } = f;
        s.push({
          name: y,
          repeatable: C,
          optional: N
        });
        const w = _ || yt;
        if (w !== yt) {
          h += 10;
          try {
            new RegExp(`(${w})`);
          } catch (I) {
            throw new Error(`Invalid custom RegExp for param "${y}" (${w}): ` + I.message);
          }
        }
        let P = C ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        l || (P = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        N && d.length < 2 ? `(?:/${P})` : "/" + P), N && (P += "?"), o += P, h += 20, N && (h += -8), C && (h += -20), w === ".*" && (h += -50);
      }
      i.push(h);
    }
    r.push(i);
  }
  if (n.strict && n.end) {
    const d = r.length - 1;
    r[d][r[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
  const c = new RegExp(o, n.sensitive ? "" : "i");
  function u(d) {
    const i = d.match(c), l = {};
    if (!i)
      return null;
    for (let f = 1; f < i.length; f++) {
      const h = i[f] || "", y = s[f - 1];
      l[y.name] = h && y.repeatable ? h.split("/") : h;
    }
    return l;
  }
  function a(d) {
    let i = "", l = !1;
    for (const f of e) {
      (!l || !i.endsWith("/")) && (i += "/"), l = !1;
      for (const h of f)
        if (h.type === 0)
          i += h.value;
        else if (h.type === 1) {
          const { value: y, repeatable: C, optional: N } = h, _ = y in d ? d[y] : "";
          if (D(_) && !C)
            throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
          const w = D(_) ? _.join("/") : _;
          if (!w)
            if (N)
              f.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : l = !0);
            else
              throw new Error(`Missing required param "${y}"`);
          i += w;
        }
    }
    return i || "/";
  }
  return {
    re: c,
    score: r,
    keys: s,
    parse: u,
    stringify: a
  };
}
function Fo(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r)
      return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Ko(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = Fo(r[n], o[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (_t(r))
      return 1;
    if (_t(o))
      return -1;
  }
  return o.length - r.length;
}
function _t(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Wo = {
  type: 0,
  value: ""
}, zo = /[a-zA-Z0-9_]/;
function qo(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Wo]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${d}": ${h}`);
  }
  let n = 0, r = n;
  const o = [];
  let s;
  function c() {
    s && o.push(s), s = [];
  }
  let u = 0, a, d = "", i = "";
  function l() {
    d && (n === 0 ? s.push({
      type: 0,
      value: d
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: d,
      regexp: i,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : t("Invalid state to consume buffer"), d = "");
  }
  function f() {
    d += a;
  }
  for (; u < e.length; ) {
    if (a = e[u++], a === "\\" && n !== 2) {
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (d && l(), c()) : a === ":" ? (l(), n = 1) : f();
        break;
      case 4:
        f(), n = r;
        break;
      case 1:
        a === "(" ? n = 2 : zo.test(a) ? f() : (l(), n = 0, a !== "*" && a !== "?" && a !== "+" && u--);
        break;
      case 2:
        a === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + a : n = 3 : i += a;
        break;
      case 3:
        l(), n = 0, a !== "*" && a !== "?" && a !== "+" && u--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), l(), c(), o;
}
function Qo(e, t, n) {
  const r = Ho(qo(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const c of r.keys)
      s.has(c.name) && E(`Found duplicated params with name "${c.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(c.name);
  }
  const o = R(r, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Qt(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = wt({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(i) {
    return r.get(i);
  }
  function s(i, l, f) {
    const h = !f, y = Yo(i);
    process.env.NODE_ENV !== "production" && ei(y, l), y.aliasOf = f && f.record;
    const C = wt(t, i), N = [
      y
    ];
    if ("alias" in i) {
      const P = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const I of P)
        N.push(R({}, y, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: f ? f.record.components : y.components,
          path: I,
          // we might be the child of an alias
          aliasOf: f ? f.record : y
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let _, w;
    for (const P of N) {
      const { path: I } = P;
      if (l && I[0] !== "/") {
        const W = l.record.path, G = W[W.length - 1] === "/" ? "" : "/";
        P.path = l.record.path + (I && G + I);
      }
      if (process.env.NODE_ENV !== "production" && P.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = Qo(P, l, C), process.env.NODE_ENV !== "production" && l && I[0] === "/" && ti(_, l), f ? (f.alias.push(_), process.env.NODE_ENV !== "production" && Zo(f, _)) : (w = w || _, w !== _ && w.alias.push(_), h && i.name && !bt(_) && c(i.name)), y.children) {
        const W = y.children;
        for (let G = 0; G < W.length; G++)
          s(W[G], _, f && f.children[G]);
      }
      f = f || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && a(_);
    }
    return w ? () => {
      c(w);
    } : ae;
  }
  function c(i) {
    if (qt(i)) {
      const l = r.get(i);
      l && (r.delete(i), n.splice(n.indexOf(l), 1), l.children.forEach(c), l.alias.forEach(c));
    } else {
      const l = n.indexOf(i);
      l > -1 && (n.splice(l, 1), i.record.name && r.delete(i.record.name), i.children.forEach(c), i.alias.forEach(c));
    }
  }
  function u() {
    return n;
  }
  function a(i) {
    let l = 0;
    for (; l < n.length && Ko(i, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[l].record.path || !Yt(i, n[l])); )
      l++;
    n.splice(l, 0, i), i.record.name && !bt(i) && r.set(i.record.name, i);
  }
  function d(i, l) {
    let f, h = {}, y, C;
    if ("name" in i && i.name) {
      if (f = r.get(i.name), !f)
        throw te(1, {
          location: i
        });
      if (process.env.NODE_ENV !== "production") {
        const w = Object.keys(i.params || {}).filter((P) => !f.keys.find((I) => I.name === P));
        w.length && E(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      C = f.record.name, h = R(
        // paramsFromLocation is a new object
        Et(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          f.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Et(i.params, f.keys.map((w) => w.name))
      ), y = f.stringify(h);
    } else if ("path" in i)
      y = i.path, process.env.NODE_ENV !== "production" && !y.startsWith("/") && E(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), f = n.find((w) => w.re.test(y)), f && (h = f.parse(y), C = f.record.name);
    else {
      if (f = l.name ? r.get(l.name) : n.find((w) => w.re.test(l.path)), !f)
        throw te(1, {
          location: i,
          currentLocation: l
        });
      C = f.record.name, h = R({}, l.params, i.params), y = f.stringify(h);
    }
    const N = [];
    let _ = f;
    for (; _; )
      N.unshift(_.record), _ = _.parent;
    return {
      name: C,
      path: y,
      params: h,
      matched: N,
      meta: Xo(N)
    };
  }
  return e.forEach((i) => s(i)), { addRoute: s, resolve: d, removeRoute: c, getRoutes: u, getRecordMatcher: o };
}
function Et(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function Yo(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Jo(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Jo(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const r in e.components)
      t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function bt(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Xo(e) {
  return e.reduce((t, n) => R(t, n.meta), {});
}
function wt(e, t) {
  const n = {};
  for (const r in e)
    n[r] = r in t ? t[r] : e[r];
  return n;
}
function He(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Zo(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(He.bind(null, n)))
      return E(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(He.bind(null, n)))
      return E(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function ei(e, t) {
  t && t.record.name && !e.name && !e.path && E(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function ti(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(He.bind(null, n)))
      return E(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Yt(e, t) {
  return t.children.some((n) => n === e || Yt(e, n));
}
const Jt = /#/g, ni = /&/g, ri = /\//g, oi = /=/g, ii = /\?/g, Xt = /\+/g, si = /%5B/g, ai = /%5D/g, Zt = /%5E/g, ci = /%60/g, en = /%7B/g, ui = /%7C/g, tn = /%7D/g, li = /%20/g;
function Je(e) {
  return encodeURI("" + e).replace(ui, "|").replace(si, "[").replace(ai, "]");
}
function fi(e) {
  return Je(e).replace(en, "{").replace(tn, "}").replace(Zt, "^");
}
function Fe(e) {
  return Je(e).replace(Xt, "%2B").replace(li, "+").replace(Jt, "%23").replace(ni, "%26").replace(ci, "`").replace(en, "{").replace(tn, "}").replace(Zt, "^");
}
function di(e) {
  return Fe(e).replace(oi, "%3D");
}
function pi(e) {
  return Je(e).replace(Jt, "%23").replace(ii, "%3F");
}
function hi(e) {
  return e == null ? "" : pi(e).replace(ri, "%2F");
}
function ce(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && E(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function nn(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Xt, " "), c = s.indexOf("="), u = ce(c < 0 ? s : s.slice(0, c)), a = c < 0 ? null : ce(s.slice(c + 1));
    if (u in t) {
      let d = t[u];
      D(d) || (d = t[u] = [d]), d.push(a);
    } else
      t[u] = a;
  }
  return t;
}
function Ke(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = di(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (D(r) ? r.map((s) => s && Fe(s)) : [r && Fe(r)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function vi(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = D(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
const Ee = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), We = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), ue = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), be = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), ve = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function oe() {
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
function rn(e, t, n) {
  const r = () => {
    e[t].delete(n);
  };
  Vn(r), jn(r), Mn(() => {
    e[t].add(n);
  }), e[t].add(n);
}
function mi(e) {
  if (process.env.NODE_ENV !== "production" && !ge()) {
    E("getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function");
    return;
  }
  const t = L(
    Ee,
    // to avoid warning
    {}
  ).value;
  if (!t) {
    process.env.NODE_ENV !== "production" && E("No active route record was found when calling `onBeforeRouteLeave()`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?");
    return;
  }
  rn(t, "leaveGuards", e);
}
function gi(e) {
  if (process.env.NODE_ENV !== "production" && !ge()) {
    E("getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function");
    return;
  }
  const t = L(
    Ee,
    // to avoid warning
    {}
  ).value;
  if (!t) {
    process.env.NODE_ENV !== "production" && E("No active route record was found when calling `onBeforeRouteUpdate()`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?");
    return;
  }
  rn(t, "updateGuards", e);
}
function H(e, t, n, r, o) {
  const s = r && // name is defined if record is because of the function overload
  (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((c, u) => {
    const a = (l) => {
      l === !1 ? u(te(4, {
        from: n,
        to: t
      })) : l instanceof Error ? u(l) : jo(l) ? u(te(2, {
        from: t,
        to: l
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      r.enterCallbacks[o] === s && typeof l == "function" && s.push(l), c());
    }, d = e.call(r && r.instances[o], t, n, process.env.NODE_ENV !== "production" ? yi(a, t, n) : a);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(a)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((f) => a._called ? f : (E(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !a._called) {
        E(l), u(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((l) => u(l));
  });
}
function yi(e, t, n) {
  let r = 0;
  return function() {
    r++ === 1 && E(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, r === 1 && e.apply(null, arguments);
  };
}
function je(e, t, n, r) {
  const o = [];
  for (const s of e) {
    process.env.NODE_ENV !== "production" && !s.components && !s.children.length && E(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const c in s.components) {
      let u = s.components[c];
      if (process.env.NODE_ENV !== "production") {
        if (!u || typeof u != "object" && typeof u != "function")
          throw E(`Component "${c}" in record with path "${s.path}" is not a valid component. Received "${String(u)}".`), new Error("Invalid route component");
        if ("then" in u) {
          E(`Component "${c}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const a = u;
          u = () => a;
        } else
          u.__asyncLoader && // warn only once per component
          !u.__warnedDefineAsync && (u.__warnedDefineAsync = !0, E(`Component "${c}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !s.instances[c]))
        if (_i(u)) {
          const d = (u.__vccOpts || u)[t];
          d && o.push(H(d, n, r, s, c));
        } else {
          let a = u();
          process.env.NODE_ENV !== "production" && !("catch" in a) && (E(`Component "${c}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), a = Promise.resolve(a)), o.push(() => a.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${s.path}"`));
            const i = Bt(d) ? d.default : d;
            s.components[c] = i;
            const f = (i.__vccOpts || i)[t];
            return f && H(f, n, r, s, c)();
          }));
        }
    }
  }
  return o;
}
function _i(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ei(e) {
  return e.matched.every((t) => t.redirect) ? Promise.reject(new Error("Cannot load a route that redirects.")) : Promise.all(e.matched.map((t) => t.components && Promise.all(Object.keys(t.components).reduce((n, r) => {
    const o = t.components[r];
    return typeof o == "function" && !("displayName" in o) && n.push(o().then((s) => {
      if (!s)
        return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${t.path}". Ensure you passed a function that returns a promise.`));
      const c = Bt(s) ? s.default : s;
      t.components[r] = c;
    })), n;
  }, [])))).then(() => e);
}
function ze(e) {
  const t = L(ue), n = L(be), r = T(() => t.resolve(se(e.to))), o = T(() => {
    const { matched: a } = r.value, { length: d } = a, i = a[d - 1], l = n.matched;
    if (!i || !l.length)
      return -1;
    const f = l.findIndex(K.bind(null, i));
    if (f > -1)
      return f;
    const h = Ot(a[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Ot(i) === h && // avoid comparing the child with its parent
      l[l.length - 1].path !== h ? l.findIndex(K.bind(null, a[d - 2])) : f
    );
  }), s = T(() => o.value > -1 && Oi(n.params, r.value.params)), c = T(() => o.value > -1 && o.value === n.matched.length - 1 && Ht(n.params, r.value.params));
  function u(a = {}) {
    return wi(a) ? t[se(e.replace) ? "replace" : "push"](
      se(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ae) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && B) {
    const a = ge();
    if (a) {
      const d = {
        route: r.value,
        isActive: s.value,
        isExactActive: c.value
      };
      a.__vrl_devtools = a.__vrl_devtools || [], a.__vrl_devtools.push(d), Dn(() => {
        d.route = r.value, d.isActive = s.value, d.isExactActive = c.value;
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: T(() => r.value.href),
    isActive: s,
    isExactActive: c,
    navigate: u
  };
}
const bi = /* @__PURE__ */ It({
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
  useLink: ze,
  setup(e, { slots: t }) {
    const n = Dt(ze(e)), { options: r } = L(ue), o = T(() => ({
      [Nt(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Nt(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : Tt("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, s);
    };
  }
}), on = bi;
function wi(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Oi(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o)
        return !1;
    } else if (!D(o) || o.length !== r.length || r.some((s, c) => s !== o[c]))
      return !1;
  }
  return !0;
}
function Ot(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Nt = (e, t, n) => e ?? t ?? n, Ni = /* @__PURE__ */ It({
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
    process.env.NODE_ENV !== "production" && Si();
    const r = L(ve), o = T(() => e.route || r.value), s = L(We, 0), c = T(() => {
      let d = se(s);
      const { matched: i } = o.value;
      let l;
      for (; (l = i[d]) && !l.components; )
        d++;
      return d;
    }), u = T(() => o.value.matched[c.value]);
    Ie(We, T(() => c.value + 1)), Ie(Ee, u), Ie(ve, o);
    const a = Ln();
    return ye(() => [a.value, u.value, e.name], ([d, i, l], [f, h, y]) => {
      i && (i.instances[l] = d, h && h !== i && d && d === f && (i.leaveGuards.size || (i.leaveGuards = h.leaveGuards), i.updateGuards.size || (i.updateGuards = h.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!h || !K(i, h) || !f) && (i.enterCallbacks[l] || []).forEach((C) => C(d));
    }, { flush: "post" }), () => {
      const d = o.value, i = e.name, l = u.value, f = l && l.components[i];
      if (!f)
        return St(n.default, { Component: f, route: d });
      const h = l.props[i], y = h ? h === !0 ? d.params : typeof h == "function" ? h(d) : h : null, N = Tt(f, R({}, y, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[i] = null);
        },
        ref: a
      }));
      if (process.env.NODE_ENV !== "production" && B && N.ref) {
        const _ = {
          depth: c.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (D(N.ref) ? N.ref.map((P) => P.i) : [N.ref.i]).forEach((P) => {
          P.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        St(n.default, { Component: N, route: d }) || N
      );
    };
  }
});
function St(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const sn = Ni;
function Si() {
  const e = ge(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const r = t === "KeepAlive" ? "keep-alive" : "transition";
    E(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function ie(e, t) {
  const n = R({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((r) => Di(r, ["instances", "children", "aliasOf"]))
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
function pe(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Ri = 0;
function Ci(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const r = Ri++;
  Ut({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((i, l) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: ie(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: i, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const f = l.__vrv_devtools;
        i.tags.push({
          label: (f.name ? `${f.name.toString()}: ` : "") + f.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: an
        });
      }
      D(l.__vrl_devtools) && (l.__devtoolsApi = o, l.__vrl_devtools.forEach((f) => {
        let h = ln, y = "";
        f.isExactActive ? (h = un, y = "This is exactly active") : f.isActive && (h = cn, y = "This link is active"), i.tags.push({
          label: f.route.path,
          textColor: 0,
          tooltip: y,
          backgroundColor: h
        });
      }));
    }), ye(t.currentRoute, () => {
      a(), o.notifyComponentUpdate(), o.sendInspectorTree(u), o.sendInspectorState(u);
    });
    const s = "router:navigations:" + r;
    o.addTimelineLayer({
      id: s,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), t.onError((i, l) => {
      o.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: l.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: i },
          groupId: l.meta.__navigationId
        }
      });
    });
    let c = 0;
    t.beforeEach((i, l) => {
      const f = {
        guard: pe("beforeEach"),
        from: ie(l, "Current Location during this navigation"),
        to: ie(i, "Target location")
      };
      Object.defineProperty(i.meta, "__navigationId", {
        value: c++
      }), o.addTimelineEvent({
        layerId: s,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: i.fullPath,
          data: f,
          groupId: i.meta.__navigationId
        }
      });
    }), t.afterEach((i, l, f) => {
      const h = {
        guard: pe("afterEach")
      };
      f ? (h.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: f ? f.message : "",
          tooltip: "Navigation Failure",
          value: f
        }
      }, h.status = pe("❌")) : h.status = pe("✅"), h.from = ie(l, "Current Location during this navigation"), h.to = ie(i, "Target location"), o.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: i.fullPath,
          time: o.now(),
          data: h,
          logType: f ? "warning" : "default",
          groupId: i.meta.__navigationId
        }
      });
    });
    const u = "router-inspector:" + r;
    o.addInspector({
      id: u,
      label: "Routes" + (r ? " " + r : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function a() {
      if (!d)
        return;
      const i = d;
      let l = n.getRoutes().filter((f) => !f.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !f.parent.record.components);
      l.forEach(pn), i.filter && (l = l.filter((f) => (
        // save matches state based on the payload
        qe(f, i.filter.toLowerCase())
      ))), l.forEach((f) => dn(f, t.currentRoute.value)), i.rootNodes = l.map(fn);
    }
    let d;
    o.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === u && a();
    }), o.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === u) {
        const f = n.getRoutes().find((h) => h.record.__vd_id === i.nodeId);
        f && (i.state = {
          options: Pi(f)
        });
      }
    }), o.sendInspectorTree(u), o.sendInspectorState(u);
  });
}
function Ai(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Pi(e) {
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
        display: e.keys.map((r) => `${r.name}${Ai(r)}`).join(" "),
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
const an = 15485081, cn = 2450411, un = 8702998, xi = 2282478, ln = 16486972, ki = 6710886;
function fn(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: xi
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: ln
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: an
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: un
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: cn
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: ki
  });
  let r = n.__vd_id;
  return r == null && (r = String($i++), n.__vd_id = r), {
    id: r,
    label: n.path,
    tags: t,
    children: e.children.map(fn)
  };
}
let $i = 0;
const Ii = /^\/(.*)\/([a-z]*)$/;
function dn(e, t) {
  const n = t.matched.length && K(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((r) => K(r, e.record))), e.children.forEach((r) => dn(r, t));
}
function pn(e) {
  e.__vd_match = !1, e.children.forEach(pn);
}
function qe(e, t) {
  const n = String(e.re).match(Ii);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((c) => qe(c, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), s = ce(o);
  return !t.startsWith("/") && (s.includes(t) || o.includes(t)) || s.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((c) => qe(c, t));
}
function Di(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function hn(e) {
  const t = Qt(e.routes, e), n = e.parseQuery || nn, r = e.stringifyQuery || Ke, o = e.history;
  if (process.env.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = oe(), c = oe(), u = oe(), a = Tn(U);
  let d = U;
  B && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = De.bind(null, (p) => "" + p), l = De.bind(null, hi), f = (
    // @ts-expect-error: intentionally avoid the type check
    De.bind(null, ce)
  );
  function h(p, m) {
    let v, g;
    return qt(p) ? (v = t.getRecordMatcher(p), g = m) : g = p, t.addRoute(g, v);
  }
  function y(p) {
    const m = t.getRecordMatcher(p);
    m ? t.removeRoute(m) : process.env.NODE_ENV !== "production" && E(`Cannot remove non-existent route "${String(p)}"`);
  }
  function C() {
    return t.getRoutes().map((p) => p.record);
  }
  function N(p) {
    return !!t.getRecordMatcher(p);
  }
  function _(p, m) {
    if (m = R({}, m || a.value), typeof p == "string") {
      const b = Te(n, p, m.path), A = t.resolve({ path: b.path }, m), z = o.createHref(b.fullPath);
      return process.env.NODE_ENV !== "production" && (z.startsWith("//") ? E(`Location "${p}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : A.matched.length || E(`No match found for location with path "${p}"`)), R(b, A, {
        params: f(A.params),
        hash: ce(b.hash),
        redirectedFrom: void 0,
        href: z
      });
    }
    let v;
    if ("path" in p)
      process.env.NODE_ENV !== "production" && "params" in p && !("name" in p) && // @ts-expect-error: the type is never
      Object.keys(p.params).length && E(`Path "${p.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), v = R({}, p, {
        path: Te(n, p.path, m.path).path
      });
    else {
      const b = R({}, p.params);
      for (const A in b)
        b[A] == null && delete b[A];
      v = R({}, p, {
        params: l(b)
      }), m.params = l(m.params);
    }
    const g = t.resolve(v, m), S = p.hash || "";
    process.env.NODE_ENV !== "production" && S && !S.startsWith("#") && E(`A \`hash\` should always start with the character "#". Replace "${S}" with "#${S}".`), g.params = i(f(g.params));
    const x = No(r, R({}, p, {
      hash: fi(S),
      path: g.path
    })), O = o.createHref(x);
    return process.env.NODE_ENV !== "production" && (O.startsWith("//") ? E(`Location "${p}" resolved to "${O}". A resolved location cannot start with multiple slashes.`) : g.matched.length || E(`No match found for location with path "${"path" in p ? p.path : p}"`)), R({
      fullPath: x,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: S,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        r === Ke ? vi(p.query) : p.query || {}
      )
    }, g, {
      redirectedFrom: void 0,
      href: O
    });
  }
  function w(p) {
    return typeof p == "string" ? Te(n, p, a.value.path) : R({}, p);
  }
  function P(p, m) {
    if (d !== p)
      return te(8, {
        from: m,
        to: p
      });
  }
  function I(p) {
    return ne(p);
  }
  function W(p) {
    return I(R(w(p), { replace: !0 }));
  }
  function G(p) {
    const m = p.matched[p.matched.length - 1];
    if (m && m.redirect) {
      const { redirect: v } = m;
      let g = typeof v == "function" ? v(p) : v;
      if (typeof g == "string" && (g = g.includes("?") || g.includes("#") ? g = w(g) : (
        // force empty params
        { path: g }
      ), g.params = {}), process.env.NODE_ENV !== "production" && !("path" in g) && !("name" in g))
        throw E(`Invalid redirect found:
${JSON.stringify(g, null, 2)}
 when navigating to "${p.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return R({
        query: p.query,
        hash: p.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in g ? {} : p.params
      }, g);
    }
  }
  function ne(p, m) {
    const v = d = _(p), g = a.value, S = p.state, x = p.force, O = p.replace === !0, b = G(v);
    if (b)
      return ne(
        R(w(b), {
          state: typeof b == "object" ? R({}, S, b.state) : S,
          force: x,
          replace: O
        }),
        // keep original redirectedFrom if it exists
        m || v
      );
    const A = v;
    A.redirectedFrom = m;
    let z;
    return !x && ht(r, g, v) && (z = te(16, { to: A, from: g }), ft(
      g,
      g,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (z ? Promise.resolve(z) : at(A, g)).catch(($) => M($) ? (
      // navigation redirects still mark the router as ready
      M(
        $,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? $ : Pe($)
    ) : (
      // reject any unknown error
      Ae($, A, g)
    )).then(($) => {
      if ($) {
        if (M(
          $,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          ht(r, _($.to), A) && // and we have done it a couple of times
          m && // @ts-expect-error: added only in dev
          (m._count = m._count ? (
            // @ts-expect-error
            m._count + 1
          ) : 1) > 30 ? (E(`Detected a possibly infinite redirection in a navigation guard when going from "${g.fullPath}" to "${A.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : ne(
            // keep options
            R({
              // preserve an existing replacement but allow the redirect to override it
              replace: O
            }, w($.to), {
              state: typeof $.to == "object" ? R({}, S, $.to.state) : S,
              force: x
            }),
            // preserve the original redirectedFrom if any
            m || A
          );
      } else
        $ = ut(A, g, !0, O, S);
      return ct(A, g, $), $;
    });
  }
  function Pn(p, m) {
    const v = P(p, m);
    return v ? Promise.reject(v) : Promise.resolve();
  }
  function st(p) {
    const m = de.values().next().value;
    return m && typeof m.runWithContext == "function" ? m.runWithContext(p) : p();
  }
  function at(p, m) {
    let v;
    const [g, S, x] = Ti(p, m);
    v = je(g.reverse(), "beforeRouteLeave", p, m);
    for (const b of g)
      b.leaveGuards.forEach((A) => {
        v.push(H(A, p, m));
      });
    const O = Pn.bind(null, p, m);
    return v.push(O), J(v).then(() => {
      v = [];
      for (const b of s.list())
        v.push(H(b, p, m));
      return v.push(O), J(v);
    }).then(() => {
      v = je(S, "beforeRouteUpdate", p, m);
      for (const b of S)
        b.updateGuards.forEach((A) => {
          v.push(H(A, p, m));
        });
      return v.push(O), J(v);
    }).then(() => {
      v = [];
      for (const b of x)
        if (b.beforeEnter)
          if (D(b.beforeEnter))
            for (const A of b.beforeEnter)
              v.push(H(A, p, m));
          else
            v.push(H(b.beforeEnter, p, m));
      return v.push(O), J(v);
    }).then(() => (p.matched.forEach((b) => b.enterCallbacks = {}), v = je(x, "beforeRouteEnter", p, m), v.push(O), J(v))).then(() => {
      v = [];
      for (const b of c.list())
        v.push(H(b, p, m));
      return v.push(O), J(v);
    }).catch((b) => M(
      b,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? b : Promise.reject(b));
  }
  function ct(p, m, v) {
    u.list().forEach((g) => st(() => g(p, m, v)));
  }
  function ut(p, m, v, g, S) {
    const x = P(p, m);
    if (x)
      return x;
    const O = m === U, b = B ? history.state : {};
    v && (g || O ? o.replace(p.fullPath, R({
      scroll: O && b && b.scroll
    }, S)) : o.push(p.fullPath, S)), a.value = p, ft(p, m, v, O), Pe();
  }
  let re;
  function xn() {
    re || (re = o.listen((p, m, v) => {
      if (!dt.listening)
        return;
      const g = _(p), S = G(g);
      if (S) {
        ne(R(S, { replace: !0 }), g).catch(ae);
        return;
      }
      d = g;
      const x = a.value;
      B && xo(mt(x.fullPath, v.delta), _e()), at(g, x).catch((O) => M(
        O,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? O : M(
        O,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (ne(
        O.to,
        g
        // avoid an uncaught rejection, let push call triggerError
      ).then((b) => {
        M(
          b,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !v.delta && v.type === ee.pop && o.go(-1, !1);
      }).catch(ae), Promise.reject()) : (v.delta && o.go(-v.delta, !1), Ae(O, g, x))).then((O) => {
        O = O || ut(
          // after navigation, all matched components are resolved
          g,
          x,
          !1
        ), O && (v.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !M(
          O,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-v.delta, !1) : v.type === ee.pop && M(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), ct(g, x, O);
      }).catch(ae);
    }));
  }
  let Ce = oe(), lt = oe(), fe;
  function Ae(p, m, v) {
    Pe(p);
    const g = lt.list();
    return g.length ? g.forEach((S) => S(p, m, v)) : (process.env.NODE_ENV !== "production" && E("uncaught error during route navigation:"), console.error(p)), Promise.reject(p);
  }
  function kn() {
    return fe && a.value !== U ? Promise.resolve() : new Promise((p, m) => {
      Ce.add([p, m]);
    });
  }
  function Pe(p) {
    return fe || (fe = !p, xn(), Ce.list().forEach(([m, v]) => p ? v(p) : m()), Ce.reset()), p;
  }
  function ft(p, m, v, g) {
    const { scrollBehavior: S } = e;
    if (!B || !S)
      return Promise.resolve();
    const x = !v && ko(mt(p.fullPath, 0)) || (g || !v) && history.state && history.state.scroll || null;
    return Un().then(() => S(p, m, x)).then((O) => O && Po(O)).catch((O) => Ae(O, p, m));
  }
  const xe = (p) => o.go(p);
  let ke;
  const de = /* @__PURE__ */ new Set(), dt = {
    currentRoute: a,
    listening: !0,
    addRoute: h,
    removeRoute: y,
    hasRoute: N,
    getRoutes: C,
    resolve: _,
    options: e,
    push: I,
    replace: W,
    go: xe,
    back: () => xe(-1),
    forward: () => xe(1),
    beforeEach: s.add,
    beforeResolve: c.add,
    afterEach: u.add,
    onError: lt.add,
    isReady: kn,
    install(p) {
      const m = this;
      p.component("RouterLink", on), p.component("RouterView", sn), p.config.globalProperties.$router = m, Object.defineProperty(p.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => se(a)
      }), B && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ke && a.value === U && (ke = !0, I(o.location).catch((S) => {
        process.env.NODE_ENV !== "production" && E("Unexpected error when starting the router:", S);
      }));
      const v = {};
      for (const S in U)
        Object.defineProperty(v, S, {
          get: () => a.value[S],
          enumerable: !0
        });
      p.provide(ue, m), p.provide(be, Gn(v)), p.provide(ve, a);
      const g = p.unmount;
      de.add(p), p.unmount = function() {
        de.delete(p), de.size < 1 && (d = U, re && re(), re = null, a.value = U, ke = !1, fe = !1), g();
      }, process.env.NODE_ENV !== "production" && B && Ci(p, m, t);
    }
  };
  function J(p) {
    return p.reduce((m, v) => m.then(() => st(v)), Promise.resolve());
  }
  return dt;
}
function Ti(e, t) {
  const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
  for (let c = 0; c < s; c++) {
    const u = t.matched[c];
    u && (e.matched.find((d) => K(d, u)) ? r.push(u) : n.push(u));
    const a = e.matched[c];
    a && (t.matched.find((d) => K(d, a)) || o.push(a));
  }
  return [n, r, o];
}
function Vi() {
  return L(ue);
}
function ji() {
  return L(be);
}
const Mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get NavigationFailureType() {
    return Be;
  },
  RouterLink: on,
  RouterView: sn,
  START_LOCATION: U,
  createMemoryHistory: To,
  createRouter: hn,
  createRouterMatcher: Qt,
  createWebHashHistory: Vo,
  createWebHistory: zt,
  isNavigationFailure: M,
  loadRouteLocation: Ei,
  matchedRouteKey: Ee,
  onBeforeRouteLeave: mi,
  onBeforeRouteUpdate: gi,
  parseQuery: nn,
  routeLocationKey: be,
  routerKey: ue,
  routerViewLocationKey: ve,
  stringifyQuery: Ke,
  useLink: ze,
  useRoute: ji,
  useRouter: Vi,
  viewDepthKey: We
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var we = "store";
function vn(e) {
  return e === void 0 && (e = null), L(e !== null ? e : we);
}
function Li(e, t) {
  return e.filter(t)[0];
}
function Qe(e, t) {
  if (t === void 0 && (t = []), e === null || typeof e != "object")
    return e;
  var n = Li(t, function(o) {
    return o.original === e;
  });
  if (n)
    return n.copy;
  var r = Array.isArray(e) ? [] : {};
  return t.push({
    original: e,
    copy: r
  }), Object.keys(e).forEach(function(o) {
    r[o] = Qe(e[o], t);
  }), r;
}
function Q(e, t) {
  Object.keys(e).forEach(function(n) {
    return t(e[n], n);
  });
}
function mn(e) {
  return e !== null && typeof e == "object";
}
function Gi(e) {
  return e && typeof e.then == "function";
}
function V(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function Ui(e, t) {
  return function() {
    return e(t);
  };
}
function gn(e, t, n) {
  return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
    var r = t.indexOf(e);
    r > -1 && t.splice(r, 1);
  };
}
function yn(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = e.state;
  Oe(e, n, [], e._modules.root, !0), Xe(e, n, t);
}
function Xe(e, t, n) {
  var r = e._state, o = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var s = e._wrappedGetters, c = {}, u = {}, a = Bn(!0);
  a.run(function() {
    Q(s, function(d, i) {
      c[i] = Ui(d, e), u[i] = T(function() {
        return c[i]();
      }), Object.defineProperty(e.getters, i, {
        get: function() {
          return u[i].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = Dt({
    data: t
  }), e._scope = a, e.strict && Wi(e), r && n && e._withCommit(function() {
    r.data = null;
  }), o && o.stop();
}
function Oe(e, t, n, r, o) {
  var s = !n.length, c = e._modules.getNamespace(n);
  if (r.namespaced && (e._modulesNamespaceMap[c] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + c + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[c] = r), !s && !o) {
    var u = Ze(t, n.slice(0, -1)), a = n[n.length - 1];
    e._withCommit(function() {
      process.env.NODE_ENV !== "production" && a in u && console.warn(
        '[vuex] state field "' + a + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), u[a] = r.state;
    });
  }
  var d = r.context = Bi(e, c, n);
  r.forEachMutation(function(i, l) {
    var f = c + l;
    Hi(e, f, i, d);
  }), r.forEachAction(function(i, l) {
    var f = i.root ? l : c + l, h = i.handler || i;
    Fi(e, f, h, d);
  }), r.forEachGetter(function(i, l) {
    var f = c + l;
    Ki(e, f, i, d);
  }), r.forEachChild(function(i, l) {
    Oe(e, t, n.concat(l), i, o);
  });
}
function Bi(e, t, n) {
  var r = t === "", o = {
    dispatch: r ? e.dispatch : function(s, c, u) {
      var a = me(s, c, u), d = a.payload, i = a.options, l = a.type;
      if ((!i || !i.root) && (l = t + l, process.env.NODE_ENV !== "production" && !e._actions[l])) {
        console.error("[vuex] unknown local action type: " + a.type + ", global type: " + l);
        return;
      }
      return e.dispatch(l, d);
    },
    commit: r ? e.commit : function(s, c, u) {
      var a = me(s, c, u), d = a.payload, i = a.options, l = a.type;
      if ((!i || !i.root) && (l = t + l, process.env.NODE_ENV !== "production" && !e._mutations[l])) {
        console.error("[vuex] unknown local mutation type: " + a.type + ", global type: " + l);
        return;
      }
      e.commit(l, d, i);
    }
  };
  return Object.defineProperties(o, {
    getters: {
      get: r ? function() {
        return e.getters;
      } : function() {
        return _n(e, t);
      }
    },
    state: {
      get: function() {
        return Ze(e.state, n);
      }
    }
  }), o;
}
function _n(e, t) {
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
function Hi(e, t, n, r) {
  var o = e._mutations[t] || (e._mutations[t] = []);
  o.push(function(c) {
    n.call(e, r.state, c);
  });
}
function Fi(e, t, n, r) {
  var o = e._actions[t] || (e._actions[t] = []);
  o.push(function(c) {
    var u = n.call(e, {
      dispatch: r.dispatch,
      commit: r.commit,
      getters: r.getters,
      state: r.state,
      rootGetters: e.getters,
      rootState: e.state
    }, c);
    return Gi(u) || (u = Promise.resolve(u)), e._devtoolHook ? u.catch(function(a) {
      throw e._devtoolHook.emit("vuex:error", a), a;
    }) : u;
  });
}
function Ki(e, t, n, r) {
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
function Wi(e) {
  ye(function() {
    return e._state.data;
  }, function() {
    process.env.NODE_ENV !== "production" && V(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Ze(e, t) {
  return t.reduce(function(n, r) {
    return n[r];
  }, e);
}
function me(e, t, n) {
  return mn(e) && e.type && (n = t, t = e, e = e.type), process.env.NODE_ENV !== "production" && V(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var zi = "vuex bindings", Rt = "vuex:mutations", Me = "vuex:actions", Z = "vuex", qi = 0;
function Qi(e, t) {
  Ut(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [zi]
    },
    function(n) {
      n.addTimelineLayer({
        id: Rt,
        label: "Vuex Mutations",
        color: Ct
      }), n.addTimelineLayer({
        id: Me,
        label: "Vuex Actions",
        color: Ct
      }), n.addInspector({
        id: Z,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(r) {
        if (r.app === e && r.inspectorId === Z)
          if (r.filter) {
            var o = [];
            On(o, t._modules.root, r.filter, ""), r.rootNodes = o;
          } else
            r.rootNodes = [
              wn(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(r) {
        if (r.app === e && r.inspectorId === Z) {
          var o = r.nodeId;
          _n(t, o), r.state = Xi(
            es(t._modules, o),
            o === "root" ? t.getters : t._makeLocalGettersCache,
            o
          );
        }
      }), n.on.editInspectorState(function(r) {
        if (r.app === e && r.inspectorId === Z) {
          var o = r.nodeId, s = r.path;
          o !== "root" && (s = o.split("/").filter(Boolean).concat(s)), t._withCommit(function() {
            r.set(t._state.data, s, r.state.value);
          });
        }
      }), t.subscribe(function(r, o) {
        var s = {};
        r.payload && (s.payload = r.payload), s.state = o, n.notifyComponentUpdate(), n.sendInspectorTree(Z), n.sendInspectorState(Z), n.addTimelineEvent({
          layerId: Rt,
          event: {
            time: Date.now(),
            title: r.type,
            data: s
          }
        });
      }), t.subscribeAction({
        before: function(r, o) {
          var s = {};
          r.payload && (s.payload = r.payload), r._id = qi++, r._time = Date.now(), s.state = o, n.addTimelineEvent({
            layerId: Me,
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
          var s = {}, c = Date.now() - r._time;
          s.duration = {
            _custom: {
              type: "duration",
              display: c + "ms",
              tooltip: "Action duration",
              value: c
            }
          }, r.payload && (s.payload = r.payload), s.state = o, n.addTimelineEvent({
            layerId: Me,
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
var Ct = 8702998, Yi = 6710886, Ji = 16777215, En = {
  label: "namespaced",
  textColor: Ji,
  backgroundColor: Yi
};
function bn(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function wn(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: bn(t),
    tags: e.namespaced ? [En] : [],
    children: Object.keys(e._children).map(
      function(n) {
        return wn(
          e._children[n],
          t + n + "/"
        );
      }
    )
  };
}
function On(e, t, n, r) {
  r.includes(n) && e.push({
    id: r || "root",
    label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
    tags: t.namespaced ? [En] : []
  }), Object.keys(t._children).forEach(function(o) {
    On(e, t._children[o], n, r + o + "/");
  });
}
function Xi(e, t, n) {
  t = n === "root" ? t : t[n];
  var r = Object.keys(t), o = {
    state: Object.keys(e.state).map(function(c) {
      return {
        key: c,
        editable: !0,
        value: e.state[c]
      };
    })
  };
  if (r.length) {
    var s = Zi(t);
    o.getters = Object.keys(s).map(function(c) {
      return {
        key: c.endsWith("/") ? bn(c) : c,
        editable: !1,
        value: Ye(function() {
          return s[c];
        })
      };
    });
  }
  return o;
}
function Zi(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var r = n.split("/");
    if (r.length > 1) {
      var o = t, s = r.pop();
      r.forEach(function(c) {
        o[c] || (o[c] = {
          _custom: {
            value: {},
            display: c,
            tooltip: "Module",
            abstract: !0
          }
        }), o = o[c]._custom.value;
      }), o[s] = Ye(function() {
        return e[n];
      });
    } else
      t[n] = Ye(function() {
        return e[n];
      });
  }), t;
}
function es(e, t) {
  var n = t.split("/").filter(function(r) {
    return r;
  });
  return n.reduce(
    function(r, o, s) {
      var c = r[o];
      if (!c)
        throw new Error('Missing module "' + o + '" for path "' + t + '".');
      return s === n.length - 1 ? c : c._children;
    },
    t === "root" ? e : e.root._children
  );
}
function Ye(e) {
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
}, Nn = { namespaced: { configurable: !0 } };
Nn.namespaced.get = function() {
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
  Q(this._children, t);
};
j.prototype.forEachGetter = function(t) {
  this._rawModule.getters && Q(this._rawModule.getters, t);
};
j.prototype.forEachAction = function(t) {
  this._rawModule.actions && Q(this._rawModule.actions, t);
};
j.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && Q(this._rawModule.mutations, t);
};
Object.defineProperties(j.prototype, Nn);
var Y = function(t) {
  this.register([], t, !1);
};
Y.prototype.get = function(t) {
  return t.reduce(function(n, r) {
    return n.getChild(r);
  }, this.root);
};
Y.prototype.getNamespace = function(t) {
  var n = this.root;
  return t.reduce(function(r, o) {
    return n = n.getChild(o), r + (n.namespaced ? o + "/" : "");
  }, "");
};
Y.prototype.update = function(t) {
  Sn([], this.root, t);
};
Y.prototype.register = function(t, n, r) {
  var o = this;
  r === void 0 && (r = !0), process.env.NODE_ENV !== "production" && Rn(t, n);
  var s = new j(n, r);
  if (t.length === 0)
    this.root = s;
  else {
    var c = this.get(t.slice(0, -1));
    c.addChild(t[t.length - 1], s);
  }
  n.modules && Q(n.modules, function(u, a) {
    o.register(t.concat(a), u, r);
  });
};
Y.prototype.unregister = function(t) {
  var n = this.get(t.slice(0, -1)), r = t[t.length - 1], o = n.getChild(r);
  if (!o) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + r + "', which is not registered"
    );
    return;
  }
  o.runtime && n.removeChild(r);
};
Y.prototype.isRegistered = function(t) {
  var n = this.get(t.slice(0, -1)), r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function Sn(e, t, n) {
  if (process.env.NODE_ENV !== "production" && Rn(e, n), t.update(n), n.modules)
    for (var r in n.modules) {
      if (!t.getChild(r)) {
        process.env.NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + r + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      Sn(
        e.concat(r),
        t.getChild(r),
        n.modules[r]
      );
    }
}
var At = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, ts = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, Pt = {
  getters: At,
  mutations: At,
  actions: ts
};
function Rn(e, t) {
  Object.keys(Pt).forEach(function(n) {
    if (t[n]) {
      var r = Pt[n];
      Q(t[n], function(o, s) {
        V(
          r.assert(o),
          ns(e, n, s, o, r.expected)
        );
      });
    }
  });
}
function ns(e, t, n, r, o) {
  var s = t + " should be " + o + ' but "' + t + "." + n + '"';
  return e.length > 0 && (s += ' in module "' + e.join(".") + '"'), s += " is " + JSON.stringify(r) + ".", s;
}
function et(e) {
  return new k(e);
}
var k = function e(t) {
  var n = this;
  t === void 0 && (t = {}), process.env.NODE_ENV !== "production" && (V(typeof Promise < "u", "vuex requires a Promise polyfill in this browser."), V(this instanceof e, "store must be called with the new operator."));
  var r = t.plugins;
  r === void 0 && (r = []);
  var o = t.strict;
  o === void 0 && (o = !1);
  var s = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new Y(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = s;
  var c = this, u = this, a = u.dispatch, d = u.commit;
  this.dispatch = function(f, h) {
    return a.call(c, f, h);
  }, this.commit = function(f, h, y) {
    return d.call(c, f, h, y);
  }, this.strict = o;
  var i = this._modules.root.state;
  Oe(this, i, [], this._modules.root), Xe(this, i), r.forEach(function(l) {
    return l(n);
  });
}, tt = { state: { configurable: !0 } };
k.prototype.install = function(t, n) {
  t.provide(n || we, this), t.config.globalProperties.$store = this;
  var r = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  r && Qi(t, this);
};
tt.state.get = function() {
  return this._state.data;
};
tt.state.set = function(e) {
  process.env.NODE_ENV !== "production" && V(!1, "use store.replaceState() to explicit replace store state.");
};
k.prototype.commit = function(t, n, r) {
  var o = this, s = me(t, n, r), c = s.type, u = s.payload, a = s.options, d = { type: c, payload: u }, i = this._mutations[c];
  if (!i) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + c);
    return;
  }
  this._withCommit(function() {
    i.forEach(function(f) {
      f(u);
    });
  }), this._subscribers.slice().forEach(function(l) {
    return l(d, o.state);
  }), process.env.NODE_ENV !== "production" && a && a.silent && console.warn(
    "[vuex] mutation type: " + c + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
k.prototype.dispatch = function(t, n) {
  var r = this, o = me(t, n), s = o.type, c = o.payload, u = { type: s, payload: c }, a = this._actions[s];
  if (!a) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + s);
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(i) {
      return i.before;
    }).forEach(function(i) {
      return i.before(u, r.state);
    });
  } catch (i) {
    process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in before action subscribers: "), console.error(i));
  }
  var d = a.length > 1 ? Promise.all(a.map(function(i) {
    return i(c);
  })) : a[0](c);
  return new Promise(function(i, l) {
    d.then(function(f) {
      try {
        r._actionSubscribers.filter(function(h) {
          return h.after;
        }).forEach(function(h) {
          return h.after(u, r.state);
        });
      } catch (h) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in after action subscribers: "), console.error(h));
      }
      i(f);
    }, function(f) {
      try {
        r._actionSubscribers.filter(function(h) {
          return h.error;
        }).forEach(function(h) {
          return h.error(u, r.state, f);
        });
      } catch (h) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in error action subscribers: "), console.error(h));
      }
      l(f);
    });
  });
};
k.prototype.subscribe = function(t, n) {
  return gn(t, this._subscribers, n);
};
k.prototype.subscribeAction = function(t, n) {
  var r = typeof t == "function" ? { before: t } : t;
  return gn(r, this._actionSubscribers, n);
};
k.prototype.watch = function(t, n, r) {
  var o = this;
  return process.env.NODE_ENV !== "production" && V(typeof t == "function", "store.watch only accepts a function."), ye(function() {
    return t(o.state, o.getters);
  }, n, Object.assign({}, r));
};
k.prototype.replaceState = function(t) {
  var n = this;
  this._withCommit(function() {
    n._state.data = t;
  });
};
k.prototype.registerModule = function(t, n, r) {
  r === void 0 && (r = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (V(Array.isArray(t), "module path must be a string or an Array."), V(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), Oe(this, this.state, t, this._modules.get(t), r.preserveState), Xe(this, this.state);
};
k.prototype.unregisterModule = function(t) {
  var n = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && V(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var r = Ze(n.state, t.slice(0, -1));
    delete r[t[t.length - 1]];
  }), yn(this);
};
k.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && V(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
k.prototype.hotUpdate = function(t) {
  this._modules.update(t), yn(this, !0);
};
k.prototype._withCommit = function(t) {
  var n = this._committing;
  this._committing = !0, t(), this._committing = n;
};
Object.defineProperties(k.prototype, tt);
var nt = Se(function(e, t) {
  var n = {};
  return process.env.NODE_ENV !== "production" && !le(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), Ne(t).forEach(function(r) {
    var o = r.key, s = r.val;
    n[o] = function() {
      var u = this.$store.state, a = this.$store.getters;
      if (e) {
        var d = Re(this.$store, "mapState", e);
        if (!d)
          return;
        u = d.context.state, a = d.context.getters;
      }
      return typeof s == "function" ? s.call(this, u, a) : u[s];
    }, n[o].vuex = !0;
  }), n;
}), rt = Se(function(e, t) {
  var n = {};
  return process.env.NODE_ENV !== "production" && !le(t) && console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), Ne(t).forEach(function(r) {
    var o = r.key, s = r.val;
    n[o] = function() {
      for (var u = [], a = arguments.length; a--; )
        u[a] = arguments[a];
      var d = this.$store.commit;
      if (e) {
        var i = Re(this.$store, "mapMutations", e);
        if (!i)
          return;
        d = i.context.commit;
      }
      return typeof s == "function" ? s.apply(this, [d].concat(u)) : d.apply(this.$store, [s].concat(u));
    };
  }), n;
}), ot = Se(function(e, t) {
  var n = {};
  return process.env.NODE_ENV !== "production" && !le(t) && console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), Ne(t).forEach(function(r) {
    var o = r.key, s = r.val;
    s = e + s, n[o] = function() {
      if (!(e && !Re(this.$store, "mapGetters", e))) {
        if (process.env.NODE_ENV !== "production" && !(s in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + s);
          return;
        }
        return this.$store.getters[s];
      }
    }, n[o].vuex = !0;
  }), n;
}), it = Se(function(e, t) {
  var n = {};
  return process.env.NODE_ENV !== "production" && !le(t) && console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), Ne(t).forEach(function(r) {
    var o = r.key, s = r.val;
    n[o] = function() {
      for (var u = [], a = arguments.length; a--; )
        u[a] = arguments[a];
      var d = this.$store.dispatch;
      if (e) {
        var i = Re(this.$store, "mapActions", e);
        if (!i)
          return;
        d = i.context.dispatch;
      }
      return typeof s == "function" ? s.apply(this, [d].concat(u)) : d.apply(this.$store, [s].concat(u));
    };
  }), n;
}), Cn = function(e) {
  return {
    mapState: nt.bind(null, e),
    mapGetters: ot.bind(null, e),
    mapMutations: rt.bind(null, e),
    mapActions: it.bind(null, e)
  };
};
function Ne(e) {
  return le(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function le(e) {
  return Array.isArray(e) || mn(e);
}
function Se(e) {
  return function(t, n) {
    return typeof t != "string" ? (n = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, n);
  };
}
function Re(e, t, n) {
  var r = e._modulesNamespaceMap[n];
  return process.env.NODE_ENV !== "production" && !r && console.error("[vuex] module namespace not found in " + t + "(): " + n), r;
}
function An(e) {
  e === void 0 && (e = {});
  var t = e.collapsed;
  t === void 0 && (t = !0);
  var n = e.filter;
  n === void 0 && (n = function(i, l, f) {
    return !0;
  });
  var r = e.transformer;
  r === void 0 && (r = function(i) {
    return i;
  });
  var o = e.mutationTransformer;
  o === void 0 && (o = function(i) {
    return i;
  });
  var s = e.actionFilter;
  s === void 0 && (s = function(i, l) {
    return !0;
  });
  var c = e.actionTransformer;
  c === void 0 && (c = function(i) {
    return i;
  });
  var u = e.logMutations;
  u === void 0 && (u = !0);
  var a = e.logActions;
  a === void 0 && (a = !0);
  var d = e.logger;
  return d === void 0 && (d = console), function(i) {
    var l = Qe(i.state);
    typeof d > "u" || (u && i.subscribe(function(f, h) {
      var y = Qe(h);
      if (n(f, l, y)) {
        var C = $t(), N = o(f), _ = "mutation " + f.type + C;
        xt(d, _, t), d.log("%c prev state", "color: #9E9E9E; font-weight: bold", r(l)), d.log("%c mutation", "color: #03A9F4; font-weight: bold", N), d.log("%c next state", "color: #4CAF50; font-weight: bold", r(y)), kt(d);
      }
      l = y;
    }), a && i.subscribeAction(function(f, h) {
      if (s(f, h)) {
        var y = $t(), C = c(f), N = "action " + f.type + y;
        xt(d, N, t), d.log("%c action", "color: #03A9F4; font-weight: bold", C), kt(d);
      }
    }));
  };
}
function xt(e, t, n) {
  var r = n ? e.groupCollapsed : e.group;
  try {
    r.call(e, t);
  } catch {
    e.log(t);
  }
}
function kt(e) {
  try {
    e.groupEnd();
  } catch {
    e.log("—— log end ——");
  }
}
function $t() {
  var e = /* @__PURE__ */ new Date();
  return " @ " + he(e.getHours(), 2) + ":" + he(e.getMinutes(), 2) + ":" + he(e.getSeconds(), 2) + "." + he(e.getMilliseconds(), 3);
}
function rs(e, t) {
  return new Array(t + 1).join(e);
}
function he(e, t) {
  return rs("0", t - e.toString().length) + e;
}
var os = {
  version: "4.1.0",
  Store: k,
  storeKey: we,
  createStore: et,
  useStore: vn,
  mapState: nt,
  mapMutations: rt,
  mapGetters: ot,
  mapActions: it,
  createNamespacedHelpers: Cn,
  createLogger: An
};
const is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Store: k,
  createLogger: An,
  createNamespacedHelpers: Cn,
  createStore: et,
  default: os,
  mapActions: it,
  mapGetters: ot,
  mapMutations: rt,
  mapState: nt,
  storeKey: we,
  useStore: vn
}, Symbol.toStringTag, { value: "Module" }));
class ss {
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
  static addComponent(t, n, r, o, s, c) {
    const u = window, a = {
      item: n,
      router: r,
      store: o,
      init: s,
      translate: c
    };
    $e in u ? u[$e][t] = a : u[$e] = {
      [t]: a
    };
  }
  /**
   * Creates a new component by name.<br>
   * Создает новый компонент по названию.
   * @param name component name /<br>название компонента
   */
  static createComponent(t) {
    const n = F.getComponentGlobalItem(t);
    n && F.addComponent(
      Mt(t.replace(/\//g, "-")),
      n.item
    );
  }
  /**
   * Creating a project for Vue.<br>
   * Создание проекта для Vue.
   * @param name project name /<br>название проекта
   */
  static createApp(t) {
    const n = F.getComponentGlobalItem(t);
    n && (jt(n == null ? void 0 : n.translate) ? Lt.add(n.translate).then(() => this.createAppItem(t, n)) : this.createAppItem(t, n));
  }
  /**
   * Creates a vue object.<br>
   * Создает объект vue.
   * @param name project name /<br>название проекта
   * @param item global project /<br>глобальный проект
   */
  static createAppItem(t, n) {
    const r = Hn(n.item);
    n != null && n.router && r.use(this.createRouter(n.router)), n != null && n.store && r.use(this.createStore(n.store)), n != null && n.init && n.init(r), Vt(F.getComponentList(), (o, s) => r.component(s, o)), r.mount(`*[data-app="${t}"]`);
  }
  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  static createRouter(t) {
    return hn(t);
  }
  /**
   * Creates data for Store.<br>
   * Создает данные для Store.
   * @param store store data /<br>данные store
   */
  static createStore(t) {
    return et(t);
  }
}
F.addFunctionList(po);
F.addClassList(ho);
F.addComponentList($n);
window.UI = F;
window.UI_VUE = ss;
window.UI_CORE_VUE = In;
window.UI_CORE_VUE_ROUTER = Mi;
window.UI_CORE_VUEX = is;
window.UI_CORE_UI = fo;
export {
  mr as Api,
  eo as Cache,
  Jr as CacheItem,
  to as CacheStatic,
  no as Cookie,
  ro as CookieBlock,
  gr as DataStorage,
  Xr as Datetime,
  oo as DatetimeRef,
  Zr as EventItem,
  io as EventRef,
  yr as Geo,
  _r as GeoFlag,
  so as GeoFlagRef,
  Er as GeoIntl,
  ao as GeoIntlRef,
  co as GeoPhone,
  uo as GeoRef,
  lo as Hash,
  br as Icons,
  Lt as Translate,
  wr as anyToString,
  Fn as arrFill,
  Kn as copyObject,
  Or as createElement,
  hs as createUiComponents,
  Wn as executeFunction,
  Vt as forEach,
  Nr as frame,
  Sr as getAttributes,
  Rr as getBind,
  Cr as getBindRef,
  Ar as getClassName,
  Pr as getClient,
  xr as getClientX,
  kr as getClientY,
  $r as getClipboardData,
  zn as getColumn,
  Ir as getElement,
  Dr as getElementId,
  Tr as getElementItem,
  Vr as getElementOrWindow,
  jr as getExp,
  Mr as getIndex,
  Lr as getKey,
  qn as getMaxLength,
  Qn as getMinLength,
  Gr as getRef,
  Yn as inArray,
  Jn as intersectKey,
  Xn as isArray,
  Zn as isDifferent,
  jt as isFilled,
  er as isFunction,
  Ur as isInDom,
  tr as isIntegerBetween,
  nr as isNull,
  rr as isObject,
  or as isObjectNotArray,
  ir as isSelected,
  sr as isSelectedByList,
  ar as isString,
  Br as isWindow,
  Hr as makeStopPropagation,
  cr as random,
  vs as registrationUiComponents,
  Fr as render,
  ur as replaceRecursive,
  Kr as replaceTemplate,
  Wr as setElementItem,
  lr as splice,
  zr as strFill,
  fr as toArray,
  qr as toCamelCase,
  Mt as toCamelCaseFirst,
  dr as toDate,
  Qr as toKebabCase,
  pr as toNumber,
  Yr as toRefItem,
  hr as transformation,
  vr as uniqueArray,
  _s as useCookieRef,
  gs as useEnv,
  Es as useHashRef,
  bs as useSessionRef,
  ws as useStorageRef,
  Os as useTranslateRef
};
