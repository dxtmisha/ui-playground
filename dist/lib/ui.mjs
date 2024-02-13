var Jt = Object.defineProperty;
var Xt = (e, t, n) => t in e ? Jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var J = (e, t, n) => (Xt(e, typeof t != "symbol" ? t + "" : t, n), n);
import { a as Zt, b as en, c as tn, d as nn, e as rn, f as ie, g as on, h as sn, i as an, j as cn, k as un, l as ln, m as fn, n as dn, o as hn, p as pn, q as mn, r as gn, s as vn, t as _n, u as yn, v as En, w as bn, x as wn, y as On, z as Cn, A as Nn, B as Rn, C as Sn, D as Pn, E as kn, F as An, G as In, H as xn, I as $n, J as Dn, K as Tn, L as Vn, M as jn, N as Mn, O as Gn, P as Ln, Q as Un, R as Bn, S as Kn, T as Fn, U as Wn, V as qn, W as Hn, X as zn, Y as Qn, Z as pt, _ as Yn, $ as Te, a0 as Jn, a1 as Xn, a2 as Zn, a3 as er, a4 as tr, a5 as nr, a6 as rr, a7 as or, a8 as ir, a9 as sr, aa as ar, ab as cr, ac as ur, ad as lr, ae as fr, af as dr, ag as hr, ah as pr, ai as mr, aj as gr, ak as vr, al as _r, am as yr, an as Er, ao as br, ap as mt, aq as wr } from "../create-slyvzZw5.mjs";
import { ar as Oi } from "../create-slyvzZw5.mjs";
import { shallowRef as Or, unref as se, shallowReactive as Cr, watch as me, nextTick as Nr, defineComponent as gt, reactive as vt, inject as ce, computed as V, h as _t, provide as we, ref as Rr, getCurrentInstance as yt, watchEffect as Sr, effectScope as Pr, createApp as kr } from "vue";
const Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  anyToString: Zt,
  arrFill: en,
  copyObject: tn,
  createElement: nn,
  executeFunction: rn,
  forEach: ie,
  frame: on,
  getAttributes: sn,
  getBind: an,
  getBindRef: cn,
  getClassName: un,
  getClient: ln,
  getClientX: fn,
  getClientY: dn,
  getClipboardData: hn,
  getColumn: pn,
  getElement: mn,
  getElementId: gn,
  getElementItem: vn,
  getElementOrWindow: _n,
  getExp: yn,
  getIndex: En,
  getKey: bn,
  getMaxLength: wn,
  getMinLength: On,
  getRef: Cn,
  inArray: Nn,
  intersectKey: Rn,
  isArray: Sn,
  isDifferent: Pn,
  isFilled: kn,
  isFunction: An,
  isInDom: In,
  isIntegerBetween: xn,
  isNull: $n,
  isObject: Dn,
  isObjectNotArray: Tn,
  isSelected: Vn,
  isSelectedByList: jn,
  isString: Mn,
  isWindow: Gn,
  makeStopPropagation: Ln,
  random: Un,
  render: Bn,
  replaceRecursive: Kn,
  replaceTemplate: Fn,
  setElementItem: Wn,
  splice: qn,
  strFill: Hn,
  toArray: zn,
  toCamelCase: Qn,
  toCamelCaseFirst: pt,
  toDate: Yn,
  toKebabCase: Te,
  toNumber: Jn,
  toRefItem: Xn,
  transformation: Zn,
  uniqueArray: er
}, Symbol.toStringTag, { value: "Module" })), Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: tr,
  Cache: nr,
  CacheItem: rr,
  CacheStatic: or,
  Cookie: ir,
  CookieBlock: sr,
  DataStorage: ar,
  Datetime: cr,
  DatetimeRef: ur,
  EventItem: lr,
  EventRef: fr,
  Geo: dr,
  GeoFlag: hr,
  GeoFlagRef: pr,
  GeoIntl: mr,
  GeoIntlRef: gr,
  GeoPhone: vr,
  GeoRef: _r,
  Hash: yr,
  Icons: Er,
  Translate: br
}, Symbol.toStringTag, { value: "Module" }));
Te(mt("DESIGNS_MAIN", "design"));
Te(mt("DESIGNS_GLOBAL", "ui"));
const H = "__UI_PROJECT";
class D {
  /**
   * Checks if a function is in the list by its name.<br>
   * Проверяет, есть ли функция в списке по ее имени.
   * @param name function name /<br>название функции
   */
  static isFunction(t) {
    return t in this.functions;
  }
  /**
   * Checks if a class is in the list by its name.<br>
   * Проверяет, есть ли класс в списке по его имени.
   * @param name class name /<br>название класса
   */
  static isClass(t) {
    return t in this.classes;
  }
  /**
   * Checks if a class is in the list by its name.<br>
   * Проверяет, есть ли компонент в списке по его имени.
   * @param name component name /<br>название компонента
   */
  static isComponent(t) {
    return t in this.components;
  }
  /**
   * Returns a list of connected components.<br>
   * Возвращает список подключенных компонентов.
   */
  static getComponentList() {
    return this.components;
  }
  /**
   * Returns a list of global projects.<br>
   * Возвращает список глобальных проектов.
   */
  static getComponentGlobal() {
    return H in window ? window[H] : {};
  }
  /**
   * Returns the global project by its name.<br>
   * Возвращает глобальный проект по его названию.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentGlobalItem(t) {
    var n;
    if (H in window)
      return ((n = window[H]) == null ? void 0 : n[t]) ?? void 0;
  }
  /**
   * Returns connected Vue components by their name.<br>
   * Возвращает подключенные компоненты Vue по их имени.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentVue(t) {
    if (t in this.components)
      return this.components[t];
  }
  /**
   * Returns an instance of the element.<br>
   * Возвращает экземпляр элемента.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentItem(t) {
    if (t in this.compItems)
      return this.compItems[t].item;
  }
  /**
   * Adds a new function.<br>
   * Добавляет новую функцию.
   * @param name function name /<br>название функции
   * @param item new function /<br>новая функция
   */
  static addFunction(t, n) {
    this.isFunction(t) || (this.functions[t] = n);
  }
  /**
   * Adds a new class.<br>
   * Добавляет новый класс.
   * @param name class name /<br>название класса
   * @param item new class /<br>новый класс
   */
  static addClass(t, n) {
    this.isClass(t) || (this.classes[t] = n);
  }
  /**
   * Adds a new component.<br>
   * Добавляет новый компонент.
   * @param name component name /<br>название компонента
   * @param component new component /<br>новый компонент
   */
  static addComponent(t, n) {
    this.isComponent(t) || (this.components[t] = n);
  }
  /**
   * Adding a new function to a list.<br>
   * Добавление новой функции в список.
   * @param functions list of functions to be added /<br>список добавляемой функции
   */
  static addFunctionList(t) {
    ie(t, (n, r) => {
      this.addFunction(r, n);
    });
  }
  /**
   * Adding a new class to a list.<br>
   * Добавление нового класса в список.
   * @param classes list of classes to be added /<br>список добавляемого класса
   */
  static addClassList(t) {
    ie(t, (n, r) => {
      this.addClass(r, n);
    });
  }
  /**
   * Adding a new component to a list.<br>
   * Добавление нового компонента в список.
   * @param components list of components to be added /<br>список добавляемого компонента
   */
  static addComponentList(t) {
    ie(t, (n, r) => {
      this.addComponent(r, n);
    });
  }
  /**
   * Registers a component to track parameter changes.<br>
   * Регистрирует компонент для слежения за изменением параметра.
   * @param name component identifier /<br>идентификатор компонента
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  static registrationComponent(t, n, r) {
    if (this.compItems[t] = {
      item: n,
      callback: r
    }, t in this.compCaching) {
      const o = this.compCaching[t];
      return delete this.compCaching[t], o;
    }
  }
  /**
   * Calls data update.<br>
   * Вызывает обновление данных.
   * @param name component identifier /<br>идентификатор компонента
   * @param props component property /<br>свойство компонента
   */
  static comp(t, n) {
    t in this.compItems ? this.compItems[t].callback(n) : this.compCaching[t] = n;
  }
  /**
   * Removal of the component from the list.<br>
   * Удаление компонента из списка.
   * @param name component identifier /<br>идентификатор компонента
   */
  static removeComponent(t) {
    t in this.compItems && delete this.compItems[t];
  }
}
J(D, "functions", {}), J(D, "classes", {}), J(D, "components", {}), J(D, "compItems", {}), J(D, "compCaching", {});
function xr() {
  return Et().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Et() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const $r = typeof Proxy == "function", Dr = "devtools-plugin:setup", Tr = "plugin:settings:set";
let X, Se;
function Vr() {
  var e;
  return X !== void 0 || (typeof window < "u" && window.performance ? (X = !0, Se = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (X = !0, Se = global.perf_hooks.performance) : X = !1), X;
}
function jr() {
  return Vr() ? Se.now() : Date.now();
}
class Mr {
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
        return jr();
      }
    }, n && n.on(Tr, (a, f) => {
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
function bt(e, t) {
  const n = e, r = Et(), o = xr(), s = $r && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    o.emit(Dr, e, t);
  else {
    const a = s ? new Mr(n, o) : null;
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
const B = typeof window < "u";
function Gr(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const N = Object.assign;
function Oe(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = T(o) ? o.map(e) : e(o);
  }
  return n;
}
const ae = () => {
}, T = Array.isArray;
function O(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function Ce(e, t, n = "/") {
  let r, o = {}, s = "", a = "";
  const f = t.indexOf("#");
  let u = t.indexOf("?");
  return f < u && f >= 0 && (u = -1), u > -1 && (r = t.slice(0, u), s = t.slice(u + 1, f > -1 ? f : t.length), o = e(s)), f > -1 && (r = r || t.slice(0, f), a = t.slice(f, t.length)), r = Br(r ?? t, n), {
    fullPath: r + (s && "?") + s + a,
    path: r,
    query: o,
    hash: a
  };
}
function Lr(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ze(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && F(t.matched[r], n.matched[o]) && wt(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function F(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wt(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Ur(e[n], t[n]))
      return !1;
  return !0;
}
function Ur(e, t) {
  return T(e) ? Qe(e, t) : T(t) ? Qe(t, e) : e === t;
}
function Qe(e, t) {
  return T(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Br(e, t) {
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
var he;
(function(e) {
  e.pop = "pop", e.push = "push";
})(he || (he = {}));
var Ye;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Ye || (Ye = {}));
function Kr(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const Fr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Wr(e) {
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
    t = Kr(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Je(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Pe = /* @__PURE__ */ new Map();
function qr(e, t) {
  Pe.set(e, t);
}
function Hr(e) {
  const t = Pe.get(e);
  return Pe.delete(e), t;
}
function zr(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Ot(e) {
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
}, ke = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Xe;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Xe || (Xe = {}));
const Qr = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Jr(t)}" via a navigation guard.`;
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
function ee(e, t) {
  return process.env.NODE_ENV !== "production" ? N(new Error(Qr[e](t)), {
    type: e,
    [ke]: !0
  }, t) : N(new Error(), {
    type: e,
    [ke]: !0
  }, t);
}
function L(e, t) {
  return e instanceof Error && ke in e && (t == null || !!(e.type & t));
}
const Yr = ["params", "query", "hash"];
function Jr(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Yr)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Ze = "[^/]+?", Xr = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Zr = /[.+*?^${}()[\]/\\]/g;
function eo(e, t) {
  const n = N({}, Xr, t), r = [];
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
        c || (o += "/"), o += d.value.replace(Zr, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: _, repeatable: A, optional: R, regexp: E } = d;
        s.push({
          name: _,
          repeatable: A,
          optional: R
        });
        const b = E || Ze;
        if (b !== Ze) {
          p += 10;
          try {
            new RegExp(`(${b})`);
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${_}" (${b}): ` + x.message);
          }
        }
        let P = A ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        c || (P = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        R && h.length < 2 ? `(?:/${P})` : "/" + P), R && (P += "?"), o += P, p += 20, R && (p += -8), A && (p += -20), b === ".*" && (p += -50);
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
          const { value: _, repeatable: A, optional: R } = p, E = _ in h ? h[_] : "";
          if (T(E) && !A)
            throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
          const b = T(E) ? E.join("/") : E;
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
function to(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r)
      return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function no(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = to(r[n], o[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (et(r))
      return 1;
    if (et(o))
      return -1;
  }
  return o.length - r.length;
}
function et(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const ro = {
  type: 0,
  value: ""
}, oo = /[a-zA-Z0-9_]/;
function io(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[ro]];
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
        u === "(" ? n = 2 : oo.test(u) ? d() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && f--);
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
function so(e, t, n) {
  const r = eo(io(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const a of r.keys)
      s.has(a.name) && O(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(a.name);
  }
  const o = N(r, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function ao(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = rt({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(i) {
    return r.get(i);
  }
  function s(i, c, d) {
    const p = !d, _ = co(i);
    process.env.NODE_ENV !== "production" && ho(_, c), _.aliasOf = d && d.record;
    const A = rt(t, i), R = [
      _
    ];
    if ("alias" in i) {
      const P = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const x of P)
        R.push(N({}, _, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : _.components,
          path: x,
          // we might be the child of an alias
          aliasOf: d ? d.record : _
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let E, b;
    for (const P of R) {
      const { path: x } = P;
      if (c && x[0] !== "/") {
        const W = c.record.path, G = W[W.length - 1] === "/" ? "" : "/";
        P.path = c.record.path + (x && G + x);
      }
      if (process.env.NODE_ENV !== "production" && P.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (E = so(P, c, A), process.env.NODE_ENV !== "production" && c && x[0] === "/" && po(E, c), d ? (d.alias.push(E), process.env.NODE_ENV !== "production" && fo(d, E)) : (b = b || E, b !== E && b.alias.push(E), p && i.name && !nt(E) && a(i.name)), _.children) {
        const W = _.children;
        for (let G = 0; G < W.length; G++)
          s(W[G], E, d && d.children[G]);
      }
      d = d || E, (E.record.components && Object.keys(E.record.components).length || E.record.name || E.record.redirect) && u(E);
    }
    return b ? () => {
      a(b);
    } : ae;
  }
  function a(i) {
    if (Ot(i)) {
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
    for (; c < n.length && no(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !Ct(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !nt(i) && r.set(i.record.name, i);
  }
  function h(i, c) {
    let d, p = {}, _, A;
    if ("name" in i && i.name) {
      if (d = r.get(i.name), !d)
        throw ee(1, {
          location: i
        });
      if (process.env.NODE_ENV !== "production") {
        const b = Object.keys(i.params || {}).filter((P) => !d.keys.find((x) => x.name === P));
        b.length && O(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      A = d.record.name, p = N(
        // paramsFromLocation is a new object
        tt(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((b) => !b.optional).map((b) => b.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && tt(i.params, d.keys.map((b) => b.name))
      ), _ = d.stringify(p);
    } else if ("path" in i)
      _ = i.path, process.env.NODE_ENV !== "production" && !_.startsWith("/") && O(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((b) => b.re.test(_)), d && (p = d.parse(_), A = d.record.name);
    else {
      if (d = c.name ? r.get(c.name) : n.find((b) => b.re.test(c.path)), !d)
        throw ee(1, {
          location: i,
          currentLocation: c
        });
      A = d.record.name, p = N({}, c.params, i.params), _ = d.stringify(p);
    }
    const R = [];
    let E = d;
    for (; E; )
      R.unshift(E.record), E = E.parent;
    return {
      name: A,
      path: _,
      params: p,
      matched: R,
      meta: lo(R)
    };
  }
  return e.forEach((i) => s(i)), { addRoute: s, resolve: h, removeRoute: a, getRoutes: f, getRecordMatcher: o };
}
function tt(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function co(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: uo(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function uo(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const r in e.components)
      t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function nt(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function lo(e) {
  return e.reduce((t, n) => N(t, n.meta), {});
}
function rt(e, t) {
  const n = {};
  for (const r in e)
    n[r] = r in t ? t[r] : e[r];
  return n;
}
function Ae(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function fo(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ae.bind(null, n)))
      return O(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ae.bind(null, n)))
      return O(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function ho(e, t) {
  t && t.record.name && !e.name && !e.path && O(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function po(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ae.bind(null, n)))
      return O(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Ct(e, t) {
  return t.children.some((n) => n === e || Ct(e, n));
}
const Nt = /#/g, mo = /&/g, go = /\//g, vo = /=/g, _o = /\?/g, Rt = /\+/g, yo = /%5B/g, Eo = /%5D/g, St = /%5E/g, bo = /%60/g, Pt = /%7B/g, wo = /%7C/g, kt = /%7D/g, Oo = /%20/g;
function Ve(e) {
  return encodeURI("" + e).replace(wo, "|").replace(yo, "[").replace(Eo, "]");
}
function Co(e) {
  return Ve(e).replace(Pt, "{").replace(kt, "}").replace(St, "^");
}
function Ie(e) {
  return Ve(e).replace(Rt, "%2B").replace(Oo, "+").replace(Nt, "%23").replace(mo, "%26").replace(bo, "`").replace(Pt, "{").replace(kt, "}").replace(St, "^");
}
function No(e) {
  return Ie(e).replace(vo, "%3D");
}
function Ro(e) {
  return Ve(e).replace(Nt, "%23").replace(_o, "%3F");
}
function So(e) {
  return e == null ? "" : Ro(e).replace(go, "%2F");
}
function ue(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && O(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Po(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Rt, " "), a = s.indexOf("="), f = ue(a < 0 ? s : s.slice(0, a)), u = a < 0 ? null : ue(s.slice(a + 1));
    if (f in t) {
      let h = t[f];
      T(h) || (h = t[f] = [h]), h.push(u);
    } else
      t[f] = u;
  }
  return t;
}
function ot(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = No(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (T(r) ? r.map((s) => s && Ie(s)) : [r && Ie(r)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function ko(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = T(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
const Ao = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), it = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), je = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), At = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), xe = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function re() {
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
function K(e, t, n, r, o) {
  const s = r && // name is defined if record is because of the function overload
  (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((a, f) => {
    const u = (c) => {
      c === !1 ? f(ee(4, {
        from: n,
        to: t
      })) : c instanceof Error ? f(c) : zr(c) ? f(ee(2, {
        from: t,
        to: c
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      r.enterCallbacks[o] === s && typeof c == "function" && s.push(c), a());
    }, h = e.call(r && r.instances[o], t, n, process.env.NODE_ENV !== "production" ? Io(u, t, n) : u);
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
function Io(e, t, n) {
  let r = 0;
  return function() {
    r++ === 1 && O(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, r === 1 && e.apply(null, arguments);
  };
}
function Ne(e, t, n, r) {
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
        if (xo(f)) {
          const h = (f.__vccOpts || f)[t];
          h && o.push(K(h, n, r, s, a));
        } else {
          let u = f();
          process.env.NODE_ENV !== "production" && !("catch" in u) && (O(`Component "${a}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), o.push(() => u.then((h) => {
            if (!h)
              return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
            const i = Gr(h) ? h.default : h;
            s.components[a] = i;
            const d = (i.__vccOpts || i)[t];
            return d && K(d, n, r, s, a)();
          }));
        }
    }
  }
  return o;
}
function xo(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function st(e) {
  const t = ce(je), n = ce(At), r = V(() => t.resolve(se(e.to))), o = V(() => {
    const { matched: u } = r.value, { length: h } = u, i = u[h - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const d = c.findIndex(F.bind(null, i));
    if (d > -1)
      return d;
    const p = at(u[h - 2]);
    return (
      // we are dealing with nested routes
      h > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      at(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(F.bind(null, u[h - 2])) : d
    );
  }), s = V(() => o.value > -1 && Vo(n.params, r.value.params)), a = V(() => o.value > -1 && o.value === n.matched.length - 1 && wt(n.params, r.value.params));
  function f(u = {}) {
    return To(u) ? t[se(e.replace) ? "replace" : "push"](
      se(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ae) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && B) {
    const u = yt();
    if (u) {
      const h = {
        route: r.value,
        isActive: s.value,
        isExactActive: a.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(h), Sr(() => {
        h.route = r.value, h.isActive = s.value, h.isExactActive = a.value;
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: V(() => r.value.href),
    isActive: s,
    isExactActive: a,
    navigate: f
  };
}
const $o = /* @__PURE__ */ gt({
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
  useLink: st,
  setup(e, { slots: t }) {
    const n = vt(st(e)), { options: r } = ce(je), o = V(() => ({
      [ct(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [ct(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : _t("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, s);
    };
  }
}), Do = $o;
function To(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Vo(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o)
        return !1;
    } else if (!T(o) || o.length !== r.length || r.some((s, a) => s !== o[a]))
      return !1;
  }
  return !0;
}
function at(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ct = (e, t, n) => e ?? t ?? n, jo = /* @__PURE__ */ gt({
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
    process.env.NODE_ENV !== "production" && Go();
    const r = ce(xe), o = V(() => e.route || r.value), s = ce(it, 0), a = V(() => {
      let h = se(s);
      const { matched: i } = o.value;
      let c;
      for (; (c = i[h]) && !c.components; )
        h++;
      return h;
    }), f = V(() => o.value.matched[a.value]);
    we(it, V(() => a.value + 1)), we(Ao, f), we(xe, o);
    const u = Rr();
    return me(() => [u.value, f.value, e.name], ([h, i, c], [d, p, _]) => {
      i && (i.instances[c] = h, p && p !== i && h && h === d && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), h && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !F(i, p) || !d) && (i.enterCallbacks[c] || []).forEach((A) => A(h));
    }, { flush: "post" }), () => {
      const h = o.value, i = e.name, c = f.value, d = c && c.components[i];
      if (!d)
        return ut(n.default, { Component: d, route: h });
      const p = c.props[i], _ = p ? p === !0 ? h.params : typeof p == "function" ? p(h) : p : null, R = _t(d, N({}, _, t, {
        onVnodeUnmounted: (E) => {
          E.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if (process.env.NODE_ENV !== "production" && B && R.ref) {
        const E = {
          depth: a.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (T(R.ref) ? R.ref.map((P) => P.i) : [R.ref.i]).forEach((P) => {
          P.__vrv_devtools = E;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        ut(n.default, { Component: R, route: h }) || R
      );
    };
  }
});
function ut(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Mo = jo;
function Go() {
  const e = yt(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function oe(e, t) {
  const n = N({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((r) => zo(r, ["instances", "children", "aliasOf"]))
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
function de(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Lo = 0;
function Uo(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const r = Lo++;
  bt({
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
        value: oe(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const d = c.__vrv_devtools;
        i.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: It
        });
      }
      T(c.__vrl_devtools) && (c.__devtoolsApi = o, c.__vrl_devtools.forEach((d) => {
        let p = Dt, _ = "";
        d.isExactActive ? (p = $t, _ = "This is exactly active") : d.isActive && (p = xt, _ = "This link is active"), i.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: _,
          backgroundColor: p
        });
      }));
    }), me(t.currentRoute, () => {
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
        guard: de("beforeEach"),
        from: oe(c, "Current Location during this navigation"),
        to: oe(i, "Target location")
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
        guard: de("afterEach")
      };
      d ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, p.status = de("❌")) : p.status = de("✅"), p.from = oe(c, "Current Location during this navigation"), p.to = oe(i, "Target location"), o.addTimelineEvent({
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
      c.forEach(jt), i.filter && (c = c.filter((d) => (
        // save matches state based on the payload
        $e(d, i.filter.toLowerCase())
      ))), c.forEach((d) => Vt(d, t.currentRoute.value)), i.rootNodes = c.map(Tt);
    }
    let h;
    o.on.getInspectorTree((i) => {
      h = i, i.app === e && i.inspectorId === f && u();
    }), o.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === f) {
        const d = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        d && (i.state = {
          options: Ko(d)
        });
      }
    }), o.sendInspectorTree(f), o.sendInspectorState(f);
  });
}
function Bo(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Ko(e) {
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
        display: e.keys.map((r) => `${r.name}${Bo(r)}`).join(" "),
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
const It = 15485081, xt = 2450411, $t = 8702998, Fo = 2282478, Dt = 16486972, Wo = 6710886;
function Tt(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Fo
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Dt
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: It
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: $t
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: xt
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Wo
  });
  let r = n.__vd_id;
  return r == null && (r = String(qo++), n.__vd_id = r), {
    id: r,
    label: n.path,
    tags: t,
    children: e.children.map(Tt)
  };
}
let qo = 0;
const Ho = /^\/(.*)\/([a-z]*)$/;
function Vt(e, t) {
  const n = t.matched.length && F(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((r) => F(r, e.record))), e.children.forEach((r) => Vt(r, t));
}
function jt(e) {
  e.__vd_match = !1, e.children.forEach(jt);
}
function $e(e, t) {
  const n = String(e.re).match(Ho);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((a) => $e(a, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), s = ue(o);
  return !t.startsWith("/") && (s.includes(t) || o.includes(t)) || s.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((a) => $e(a, t));
}
function zo(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Qo(e) {
  const t = ao(e.routes, e), n = e.parseQuery || Po, r = e.stringifyQuery || ot, o = e.history;
  if (process.env.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = re(), a = re(), f = re(), u = Or(U);
  let h = U;
  B && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Oe.bind(null, (l) => "" + l), c = Oe.bind(null, So), d = (
    // @ts-expect-error: intentionally avoid the type check
    Oe.bind(null, ue)
  );
  function p(l, g) {
    let m, v;
    return Ot(l) ? (m = t.getRecordMatcher(l), v = g) : v = l, t.addRoute(v, m);
  }
  function _(l) {
    const g = t.getRecordMatcher(l);
    g ? t.removeRoute(g) : process.env.NODE_ENV !== "production" && O(`Cannot remove non-existent route "${String(l)}"`);
  }
  function A() {
    return t.getRoutes().map((l) => l.record);
  }
  function R(l) {
    return !!t.getRecordMatcher(l);
  }
  function E(l, g) {
    if (g = N({}, g || u.value), typeof l == "string") {
      const y = Ce(n, l, g.path), S = t.resolve({ path: y.path }, g), q = o.createHref(y.fullPath);
      return process.env.NODE_ENV !== "production" && (q.startsWith("//") ? O(`Location "${l}" resolved to "${q}". A resolved location cannot start with multiple slashes.`) : S.matched.length || O(`No match found for location with path "${l}"`)), N(y, S, {
        params: d(S.params),
        hash: ue(y.hash),
        redirectedFrom: void 0,
        href: q
      });
    }
    let m;
    if ("path" in l)
      process.env.NODE_ENV !== "production" && "params" in l && !("name" in l) && // @ts-expect-error: the type is never
      Object.keys(l.params).length && O(`Path "${l.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), m = N({}, l, {
        path: Ce(n, l.path, g.path).path
      });
    else {
      const y = N({}, l.params);
      for (const S in y)
        y[S] == null && delete y[S];
      m = N({}, l, {
        params: c(y)
      }), g.params = c(g.params);
    }
    const v = t.resolve(m, g), C = l.hash || "";
    process.env.NODE_ENV !== "production" && C && !C.startsWith("#") && O(`A \`hash\` should always start with the character "#". Replace "${C}" with "#${C}".`), v.params = i(d(v.params));
    const k = Lr(r, N({}, l, {
      hash: Co(C),
      path: v.path
    })), w = o.createHref(k);
    return process.env.NODE_ENV !== "production" && (w.startsWith("//") ? O(`Location "${l}" resolved to "${w}". A resolved location cannot start with multiple slashes.`) : v.matched.length || O(`No match found for location with path "${"path" in l ? l.path : l}"`)), N({
      fullPath: k,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: C,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        r === ot ? ko(l.query) : l.query || {}
      )
    }, v, {
      redirectedFrom: void 0,
      href: w
    });
  }
  function b(l) {
    return typeof l == "string" ? Ce(n, l, u.value.path) : N({}, l);
  }
  function P(l, g) {
    if (h !== l)
      return ee(8, {
        from: g,
        to: l
      });
  }
  function x(l) {
    return te(l);
  }
  function W(l) {
    return x(N(b(l), { replace: !0 }));
  }
  function G(l) {
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
      return N({
        query: l.query,
        hash: l.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in v ? {} : l.params
      }, v);
    }
  }
  function te(l, g) {
    const m = h = E(l), v = u.value, C = l.state, k = l.force, w = l.replace === !0, y = G(m);
    if (y)
      return te(
        N(b(y), {
          state: typeof y == "object" ? N({}, C, y.state) : C,
          force: k,
          replace: w
        }),
        // keep original redirectedFrom if it exists
        g || m
      );
    const S = m;
    S.redirectedFrom = g;
    let q;
    return !k && ze(r, v, m) && (q = ee(16, { to: S, from: v }), qe(
      v,
      v,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (q ? Promise.resolve(q) : Be(S, v)).catch((I) => L(I) ? (
      // navigation redirects still mark the router as ready
      L(
        I,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? I : ye(I)
    ) : (
      // reject any unknown error
      _e(I, S, v)
    )).then((I) => {
      if (I) {
        if (L(
          I,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          ze(r, E(I.to), S) && // and we have done it a couple of times
          g && // @ts-expect-error: added only in dev
          (g._count = g._count ? (
            // @ts-expect-error
            g._count + 1
          ) : 1) > 30 ? (O(`Detected a possibly infinite redirection in a navigation guard when going from "${v.fullPath}" to "${S.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : te(
            // keep options
            N({
              // preserve an existing replacement but allow the redirect to override it
              replace: w
            }, b(I.to), {
              state: typeof I.to == "object" ? N({}, C, I.to.state) : C,
              force: k
            }),
            // preserve the original redirectedFrom if any
            g || S
          );
      } else
        I = Fe(S, v, !0, w, C);
      return Ke(S, v, I), I;
    });
  }
  function zt(l, g) {
    const m = P(l, g);
    return m ? Promise.reject(m) : Promise.resolve();
  }
  function Ue(l) {
    const g = fe.values().next().value;
    return g && typeof g.runWithContext == "function" ? g.runWithContext(l) : l();
  }
  function Be(l, g) {
    let m;
    const [v, C, k] = Yo(l, g);
    m = Ne(v.reverse(), "beforeRouteLeave", l, g);
    for (const y of v)
      y.leaveGuards.forEach((S) => {
        m.push(K(S, l, g));
      });
    const w = zt.bind(null, l, g);
    return m.push(w), Y(m).then(() => {
      m = [];
      for (const y of s.list())
        m.push(K(y, l, g));
      return m.push(w), Y(m);
    }).then(() => {
      m = Ne(C, "beforeRouteUpdate", l, g);
      for (const y of C)
        y.updateGuards.forEach((S) => {
          m.push(K(S, l, g));
        });
      return m.push(w), Y(m);
    }).then(() => {
      m = [];
      for (const y of k)
        if (y.beforeEnter)
          if (T(y.beforeEnter))
            for (const S of y.beforeEnter)
              m.push(K(S, l, g));
          else
            m.push(K(y.beforeEnter, l, g));
      return m.push(w), Y(m);
    }).then(() => (l.matched.forEach((y) => y.enterCallbacks = {}), m = Ne(k, "beforeRouteEnter", l, g), m.push(w), Y(m))).then(() => {
      m = [];
      for (const y of a.list())
        m.push(K(y, l, g));
      return m.push(w), Y(m);
    }).catch((y) => L(
      y,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? y : Promise.reject(y));
  }
  function Ke(l, g, m) {
    f.list().forEach((v) => Ue(() => v(l, g, m)));
  }
  function Fe(l, g, m, v, C) {
    const k = P(l, g);
    if (k)
      return k;
    const w = g === U, y = B ? history.state : {};
    m && (v || w ? o.replace(l.fullPath, N({
      scroll: w && y && y.scroll
    }, C)) : o.push(l.fullPath, C)), u.value = l, qe(l, g, m, w), ye();
  }
  let ne;
  function Qt() {
    ne || (ne = o.listen((l, g, m) => {
      if (!He.listening)
        return;
      const v = E(l), C = G(v);
      if (C) {
        te(N(C, { replace: !0 }), v).catch(ae);
        return;
      }
      h = v;
      const k = u.value;
      B && qr(Je(k.fullPath, m.delta), Fr()), Be(v, k).catch((w) => L(
        w,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? w : L(
        w,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (te(
        w.to,
        v
        // avoid an uncaught rejection, let push call triggerError
      ).then((y) => {
        L(
          y,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !m.delta && m.type === he.pop && o.go(-1, !1);
      }).catch(ae), Promise.reject()) : (m.delta && o.go(-m.delta, !1), _e(w, v, k))).then((w) => {
        w = w || Fe(
          // after navigation, all matched components are resolved
          v,
          k,
          !1
        ), w && (m.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !L(
          w,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-m.delta, !1) : m.type === he.pop && L(
          w,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), Ke(v, k, w);
      }).catch(ae);
    }));
  }
  let ve = re(), We = re(), le;
  function _e(l, g, m) {
    ye(l);
    const v = We.list();
    return v.length ? v.forEach((C) => C(l, g, m)) : (process.env.NODE_ENV !== "production" && O("uncaught error during route navigation:"), console.error(l)), Promise.reject(l);
  }
  function Yt() {
    return le && u.value !== U ? Promise.resolve() : new Promise((l, g) => {
      ve.add([l, g]);
    });
  }
  function ye(l) {
    return le || (le = !l, Qt(), ve.list().forEach(([g, m]) => l ? m(l) : g()), ve.reset()), l;
  }
  function qe(l, g, m, v) {
    const { scrollBehavior: C } = e;
    if (!B || !C)
      return Promise.resolve();
    const k = !m && Hr(Je(l.fullPath, 0)) || (v || !m) && history.state && history.state.scroll || null;
    return Nr().then(() => C(l, g, k)).then((w) => w && Wr(w)).catch((w) => _e(w, l, g));
  }
  const Ee = (l) => o.go(l);
  let be;
  const fe = /* @__PURE__ */ new Set(), He = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: _,
    hasRoute: R,
    getRoutes: A,
    resolve: E,
    options: e,
    push: x,
    replace: W,
    go: Ee,
    back: () => Ee(-1),
    forward: () => Ee(1),
    beforeEach: s.add,
    beforeResolve: a.add,
    afterEach: f.add,
    onError: We.add,
    isReady: Yt,
    install(l) {
      const g = this;
      l.component("RouterLink", Do), l.component("RouterView", Mo), l.config.globalProperties.$router = g, Object.defineProperty(l.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => se(u)
      }), B && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !be && u.value === U && (be = !0, x(o.location).catch((C) => {
        process.env.NODE_ENV !== "production" && O("Unexpected error when starting the router:", C);
      }));
      const m = {};
      for (const C in U)
        Object.defineProperty(m, C, {
          get: () => u.value[C],
          enumerable: !0
        });
      l.provide(je, g), l.provide(At, Cr(m)), l.provide(xe, u);
      const v = l.unmount;
      fe.add(l), l.unmount = function() {
        fe.delete(l), fe.size < 1 && (h = U, ne && ne(), ne = null, u.value = U, be = !1, le = !1), v();
      }, process.env.NODE_ENV !== "production" && B && Uo(l, g, t);
    }
  };
  function Y(l) {
    return l.reduce((g, m) => g.then(() => Ue(m)), Promise.resolve());
  }
  return He;
}
function Yo(e, t) {
  const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < s; a++) {
    const f = t.matched[a];
    f && (e.matched.find((h) => F(h, f)) ? r.push(f) : n.push(f));
    const u = e.matched[a];
    u && (t.matched.find((h) => F(h, u)) || o.push(u));
  }
  return [n, r, o];
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var Jo = "store";
function z(e, t) {
  Object.keys(e).forEach(function(n) {
    return t(e[n], n);
  });
}
function Xo(e) {
  return e !== null && typeof e == "object";
}
function Zo(e) {
  return e && typeof e.then == "function";
}
function j(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function ei(e, t) {
  return function() {
    return e(t);
  };
}
function Mt(e, t, n) {
  return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
    var r = t.indexOf(e);
    r > -1 && t.splice(r, 1);
  };
}
function Gt(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = e.state;
  ge(e, n, [], e._modules.root, !0), Me(e, n, t);
}
function Me(e, t, n) {
  var r = e._state, o = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var s = e._wrappedGetters, a = {}, f = {}, u = Pr(!0);
  u.run(function() {
    z(s, function(h, i) {
      a[i] = ei(h, e), f[i] = V(function() {
        return a[i]();
      }), Object.defineProperty(e.getters, i, {
        get: function() {
          return f[i].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = vt({
    data: t
  }), e._scope = u, e.strict && ii(e), r && n && e._withCommit(function() {
    r.data = null;
  }), o && o.stop();
}
function ge(e, t, n, r, o) {
  var s = !n.length, a = e._modules.getNamespace(n);
  if (r.namespaced && (e._modulesNamespaceMap[a] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + a + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[a] = r), !s && !o) {
    var f = Ge(t, n.slice(0, -1)), u = n[n.length - 1];
    e._withCommit(function() {
      process.env.NODE_ENV !== "production" && u in f && console.warn(
        '[vuex] state field "' + u + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), f[u] = r.state;
    });
  }
  var h = r.context = ti(e, a, n);
  r.forEachMutation(function(i, c) {
    var d = a + c;
    ni(e, d, i, h);
  }), r.forEachAction(function(i, c) {
    var d = i.root ? c : a + c, p = i.handler || i;
    ri(e, d, p, h);
  }), r.forEachGetter(function(i, c) {
    var d = a + c;
    oi(e, d, i, h);
  }), r.forEachChild(function(i, c) {
    ge(e, t, n.concat(c), i, o);
  });
}
function ti(e, t, n) {
  var r = t === "", o = {
    dispatch: r ? e.dispatch : function(s, a, f) {
      var u = pe(s, a, f), h = u.payload, i = u.options, c = u.type;
      if ((!i || !i.root) && (c = t + c, process.env.NODE_ENV !== "production" && !e._actions[c])) {
        console.error("[vuex] unknown local action type: " + u.type + ", global type: " + c);
        return;
      }
      return e.dispatch(c, h);
    },
    commit: r ? e.commit : function(s, a, f) {
      var u = pe(s, a, f), h = u.payload, i = u.options, c = u.type;
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
        return Lt(e, t);
      }
    },
    state: {
      get: function() {
        return Ge(e.state, n);
      }
    }
  }), o;
}
function Lt(e, t) {
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
function ni(e, t, n, r) {
  var o = e._mutations[t] || (e._mutations[t] = []);
  o.push(function(a) {
    n.call(e, r.state, a);
  });
}
function ri(e, t, n, r) {
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
    return Zo(f) || (f = Promise.resolve(f)), e._devtoolHook ? f.catch(function(u) {
      throw e._devtoolHook.emit("vuex:error", u), u;
    }) : f;
  });
}
function oi(e, t, n, r) {
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
function ii(e) {
  me(function() {
    return e._state.data;
  }, function() {
    process.env.NODE_ENV !== "production" && j(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Ge(e, t) {
  return t.reduce(function(n, r) {
    return n[r];
  }, e);
}
function pe(e, t, n) {
  return Xo(e) && e.type && (n = t, t = e, e = e.type), process.env.NODE_ENV !== "production" && j(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var si = "vuex bindings", lt = "vuex:mutations", Re = "vuex:actions", Z = "vuex", ai = 0;
function ci(e, t) {
  bt(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [si]
    },
    function(n) {
      n.addTimelineLayer({
        id: lt,
        label: "Vuex Mutations",
        color: ft
      }), n.addTimelineLayer({
        id: Re,
        label: "Vuex Actions",
        color: ft
      }), n.addInspector({
        id: Z,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(r) {
        if (r.app === e && r.inspectorId === Z)
          if (r.filter) {
            var o = [];
            Ft(o, t._modules.root, r.filter, ""), r.rootNodes = o;
          } else
            r.rootNodes = [
              Kt(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(r) {
        if (r.app === e && r.inspectorId === Z) {
          var o = r.nodeId;
          Lt(t, o), r.state = fi(
            hi(t._modules, o),
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
          layerId: lt,
          event: {
            time: Date.now(),
            title: r.type,
            data: s
          }
        });
      }), t.subscribeAction({
        before: function(r, o) {
          var s = {};
          r.payload && (s.payload = r.payload), r._id = ai++, r._time = Date.now(), s.state = o, n.addTimelineEvent({
            layerId: Re,
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
            layerId: Re,
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
var ft = 8702998, ui = 6710886, li = 16777215, Ut = {
  label: "namespaced",
  textColor: li,
  backgroundColor: ui
};
function Bt(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function Kt(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: Bt(t),
    tags: e.namespaced ? [Ut] : [],
    children: Object.keys(e._children).map(
      function(n) {
        return Kt(
          e._children[n],
          t + n + "/"
        );
      }
    )
  };
}
function Ft(e, t, n, r) {
  r.includes(n) && e.push({
    id: r || "root",
    label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
    tags: t.namespaced ? [Ut] : []
  }), Object.keys(t._children).forEach(function(o) {
    Ft(e, t._children[o], n, r + o + "/");
  });
}
function fi(e, t, n) {
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
    var s = di(t);
    o.getters = Object.keys(s).map(function(a) {
      return {
        key: a.endsWith("/") ? Bt(a) : a,
        editable: !1,
        value: De(function() {
          return s[a];
        })
      };
    });
  }
  return o;
}
function di(e) {
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
      }), o[s] = De(function() {
        return e[n];
      });
    } else
      t[n] = De(function() {
        return e[n];
      });
  }), t;
}
function hi(e, t) {
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
function De(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var M = function(t, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var r = t.state;
  this.state = (typeof r == "function" ? r() : r) || {};
}, Wt = { namespaced: { configurable: !0 } };
Wt.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
M.prototype.addChild = function(t, n) {
  this._children[t] = n;
};
M.prototype.removeChild = function(t) {
  delete this._children[t];
};
M.prototype.getChild = function(t) {
  return this._children[t];
};
M.prototype.hasChild = function(t) {
  return t in this._children;
};
M.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
M.prototype.forEachChild = function(t) {
  z(this._children, t);
};
M.prototype.forEachGetter = function(t) {
  this._rawModule.getters && z(this._rawModule.getters, t);
};
M.prototype.forEachAction = function(t) {
  this._rawModule.actions && z(this._rawModule.actions, t);
};
M.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && z(this._rawModule.mutations, t);
};
Object.defineProperties(M.prototype, Wt);
var Q = function(t) {
  this.register([], t, !1);
};
Q.prototype.get = function(t) {
  return t.reduce(function(n, r) {
    return n.getChild(r);
  }, this.root);
};
Q.prototype.getNamespace = function(t) {
  var n = this.root;
  return t.reduce(function(r, o) {
    return n = n.getChild(o), r + (n.namespaced ? o + "/" : "");
  }, "");
};
Q.prototype.update = function(t) {
  qt([], this.root, t);
};
Q.prototype.register = function(t, n, r) {
  var o = this;
  r === void 0 && (r = !0), process.env.NODE_ENV !== "production" && Ht(t, n);
  var s = new M(n, r);
  if (t.length === 0)
    this.root = s;
  else {
    var a = this.get(t.slice(0, -1));
    a.addChild(t[t.length - 1], s);
  }
  n.modules && z(n.modules, function(f, u) {
    o.register(t.concat(u), f, r);
  });
};
Q.prototype.unregister = function(t) {
  var n = this.get(t.slice(0, -1)), r = t[t.length - 1], o = n.getChild(r);
  if (!o) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + r + "', which is not registered"
    );
    return;
  }
  o.runtime && n.removeChild(r);
};
Q.prototype.isRegistered = function(t) {
  var n = this.get(t.slice(0, -1)), r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function qt(e, t, n) {
  if (process.env.NODE_ENV !== "production" && Ht(e, n), t.update(n), n.modules)
    for (var r in n.modules) {
      if (!t.getChild(r)) {
        process.env.NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + r + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      qt(
        e.concat(r),
        t.getChild(r),
        n.modules[r]
      );
    }
}
var dt = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, pi = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, ht = {
  getters: dt,
  mutations: dt,
  actions: pi
};
function Ht(e, t) {
  Object.keys(ht).forEach(function(n) {
    if (t[n]) {
      var r = ht[n];
      z(t[n], function(o, s) {
        j(
          r.assert(o),
          mi(e, n, s, o, r.expected)
        );
      });
    }
  });
}
function mi(e, t, n, r, o) {
  var s = t + " should be " + o + ' but "' + t + "." + n + '"';
  return e.length > 0 && (s += ' in module "' + e.join(".") + '"'), s += " is " + JSON.stringify(r) + ".", s;
}
function gi(e) {
  return new $(e);
}
var $ = function e(t) {
  var n = this;
  t === void 0 && (t = {}), process.env.NODE_ENV !== "production" && (j(typeof Promise < "u", "vuex requires a Promise polyfill in this browser."), j(this instanceof e, "store must be called with the new operator."));
  var r = t.plugins;
  r === void 0 && (r = []);
  var o = t.strict;
  o === void 0 && (o = !1);
  var s = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new Q(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = s;
  var a = this, f = this, u = f.dispatch, h = f.commit;
  this.dispatch = function(d, p) {
    return u.call(a, d, p);
  }, this.commit = function(d, p, _) {
    return h.call(a, d, p, _);
  }, this.strict = o;
  var i = this._modules.root.state;
  ge(this, i, [], this._modules.root), Me(this, i), r.forEach(function(c) {
    return c(n);
  });
}, Le = { state: { configurable: !0 } };
$.prototype.install = function(t, n) {
  t.provide(n || Jo, this), t.config.globalProperties.$store = this;
  var r = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  r && ci(t, this);
};
Le.state.get = function() {
  return this._state.data;
};
Le.state.set = function(e) {
  process.env.NODE_ENV !== "production" && j(!1, "use store.replaceState() to explicit replace store state.");
};
$.prototype.commit = function(t, n, r) {
  var o = this, s = pe(t, n, r), a = s.type, f = s.payload, u = s.options, h = { type: a, payload: f }, i = this._mutations[a];
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
  var r = this, o = pe(t, n), s = o.type, a = o.payload, f = { type: s, payload: a }, u = this._actions[s];
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
  return Mt(t, this._subscribers, n);
};
$.prototype.subscribeAction = function(t, n) {
  var r = typeof t == "function" ? { before: t } : t;
  return Mt(r, this._actionSubscribers, n);
};
$.prototype.watch = function(t, n, r) {
  var o = this;
  return process.env.NODE_ENV !== "production" && j(typeof t == "function", "store.watch only accepts a function."), me(function() {
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
  r === void 0 && (r = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (j(Array.isArray(t), "module path must be a string or an Array."), j(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), ge(this, this.state, t, this._modules.get(t), r.preserveState), Me(this, this.state);
};
$.prototype.unregisterModule = function(t) {
  var n = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && j(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var r = Ge(n.state, t.slice(0, -1));
    delete r[t[t.length - 1]];
  }), Gt(this);
};
$.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && j(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
$.prototype.hotUpdate = function(t) {
  this._modules.update(t), Gt(this, !0);
};
$.prototype._withCommit = function(t) {
  var n = this._committing;
  this._committing = !0, t(), this._committing = n;
};
Object.defineProperties($.prototype, Le);
class vi {
  /**
   * Adding a new component or project to the cache.<br>
   * Добавление в кеш нового компонента или проекта.
   * @param name component name /<br>название компонента
   * @param app project object /<br>объект проекта
   * @param router data for Router /<br>данные для Router
   * @param store data for Store /<br>данные для Store
   */
  static addComponent(t, n, r, o) {
    const s = window, a = { item: n };
    r && (a.router = r), o && (a.store = o), H in s ? s[H][t] = a : s[H] = {
      [t]: a
    };
  }
  /**
   * Creates a new component by name.<br>
   * Создает новый компонент по названию.
   * @param name component name /<br>название компонента
   */
  static createComponent(t) {
    const n = D.getComponentGlobalItem(t);
    n && D.addComponent(
      pt(t.replace(/\//g, "-")),
      n.item
    );
  }
  /**
   * Creating a project for Vue.<br>
   * Создание проекта для Vue.
   * @param name project name /<br>название проекта
   */
  static createApp(t) {
    const n = D.getComponentGlobalItem(t);
    if (n) {
      const r = kr(n.item);
      n != null && n.router && r.use(this.createRouter(n.router)), n != null && n.store && r.use(this.createStore(n.store)), ie(D.getComponentList(), (o, s) => {
        r.component(s, o);
      }), r.mount(`*[data-app="${t}"]`);
    }
  }
  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  static createRouter(t) {
    return Qo(t);
  }
  /**
   * Creates data for Store.<br>
   * Создает данные для Store.
   * @param store store data /<br>данные store
   */
  static createStore(t) {
    return gi(t);
  }
}
D.addFunctionList(Ar);
D.addClassList(Ir);
D.addComponentList(wr);
window.UI = D;
window.UI_VUE = vi;
export {
  Oi as createUiComponents
};
