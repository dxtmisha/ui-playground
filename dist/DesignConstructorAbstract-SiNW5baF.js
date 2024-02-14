var N = Object.defineProperty;
var $ = (t, e, r) => e in t ? N(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var a = (t, e, r) => ($(t, typeof e != "symbol" ? e + "" : e, r), r);
import { isRef as d, computed as o, ref as m, h as j, toRefs as O, useAttrs as L, useSlots as D } from "vue";
function C(t) {
  return t == null;
}
function u(t) {
  return !!(t && typeof t == "object");
}
function A(t) {
  return u(t) && !Array.isArray(t);
}
function q(t) {
  return Array.isArray(t);
}
function E(t) {
  return typeof t == "string";
}
function F(t) {
  return t instanceof Function || typeof t == "function";
}
function U(t) {
  if (t)
    switch (typeof t) {
      case "bigint":
      case "number":
        return t !== 0;
      case "boolean":
        return t;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(t) ? t.length > 0 : Object.values(t).some((e) => !C(e));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(t);
      case "undefined":
        return !1;
      default:
        return !!t;
    }
  return !1;
}
function p(t, e) {
  return C(t) ? !1 : Array.isArray(e) ? e.includes(t) : t === e;
}
function G(t, e) {
  return Array.isArray(t) ? t.every((r) => p(r, e)) : p(t, e);
}
function c(t, e) {
  if (u(t)) {
    const r = [];
    return t instanceof Map ? t.forEach((s, n) => r.push(e(s, n, t))) : Array.isArray(t) ? t.forEach((s, n) => r.push(e(s, n, t))) : Object.entries(t).forEach(
      ([s, n]) => r.push(e(n, s, t))
    ), r.filter((s) => s !== void 0);
  }
  return [];
}
function Z(t) {
  return F(t) ? t() : t;
}
function H(t, e = !1) {
  if (typeof t == "string") {
    const r = t.trim();
    switch (r) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(r))
          try {
            return JSON.parse(r);
          } catch {
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(r))
            return parseFloat(r);
          if (/^[0-9]+$/.exec(r))
            return parseInt(r, 10);
          if (e && window && r in window && typeof window[r] == "function")
            return window[r];
        }
    }
  }
  return t;
}
function k(t, e) {
  let r = Object.keys(t).length !== Object.keys(e).length;
  return r || c(t, (s, n) => {
    s !== (e == null ? void 0 : e[n]) && (r = !0);
  }), r;
}
function P(t, e) {
  return t.indexOf(e) !== -1;
}
function Q(t, e) {
  return c(t, (r) => r == null ? void 0 : r[e]);
}
function V(t) {
  return Math.min(...S(t));
}
function W(t) {
  return Math.max(...S(t));
}
function h(t) {
  return JSON.parse(JSON.stringify(t));
}
function x(t) {
  return [...new Set(t)];
}
function M(t, e) {
  return Array(e).fill(t);
}
function l(t, e, r = !0) {
  const s = h(t);
  return u(t) && u(e) && c(
    e,
    (n, i) => {
      const f = t == null ? void 0 : t[i];
      u(f) && u(n) ? r && Array.isArray(f) && Array.isArray(n) ? s[i] = h(x([...f, ...n])) : s[i] = l(
        Array.isArray(f) ? { ...f } : f,
        n,
        r
      ) : s[i] = u(n) ? h(n) : n;
    }
  ), s;
}
function X(t, e, r) {
  if (u(t) && u(e)) {
    if (r) {
      let s = {}, n = !1;
      return c(t, (i, f) => {
        !n && (r === f || r === i) ? (n = !0, s = l(s, e)) : n ? s = l(s, { [f]: i }) : s[f] = u(i) ? h(i) : i;
      }), n ? s : l(t, e);
    }
    if (u(e))
      return l(t, e);
  }
  return h(t);
}
function Y(t, e) {
  const r = {};
  return u(t) && u(e) && c(t, (s, n) => {
    n in e && (r[n] = s);
  }), r;
}
function g(t) {
  return Array.isArray(t) ? t : [t];
}
function S(t) {
  return c(t, (e) => e.length);
}
function R(t, e = "ig", r = ":value") {
  const s = t.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(r.replaceAll(":value", s), e);
}
async function v(t) {
  var e;
  return ((e = t == null ? void 0 : t.clipboardData) == null ? void 0 : e.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function tt(t) {
  return E(t) ? t : u(t) ? JSON.stringify(t) : (t == null ? void 0 : t.toString()) ?? "";
}
function w(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...e) => `${e[1].toUpperCase()}`).replace(/^([A-Z])/, (e) => `${e.toLowerCase()}`);
}
function et(t) {
  return w(t).replace(/^([a-z])/, (e) => `${e.toUpperCase()}`);
}
function rt(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/^[A-Z]/, (e) => e.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (e) => `-${e.toLowerCase()}`).replace(/[A-Z]/g, (e) => e.toLowerCase());
}
function st(t, e) {
  let r = t;
  return c(e, (s, n) => {
    r = r.replace(R(`[${n}]`), Z(s));
  }), r;
}
function nt(t, e) {
  return M(t, e).join("");
}
function B(t) {
  return t && "class" in t && typeof t.class == "string" ? t.class : void 0;
}
function I(t, e, r) {
  const s = B(e);
  return r && s ? `${r}.${s}` : r || s || t;
}
function J(t, e = {}, r = "value") {
  const s = typeof e == "string", n = s ? e : r, i = s ? {} : e;
  return t ? t && A(t) && n in t ? {
    ...i,
    ...t
  } : {
    ...i,
    [n]: t
  } : {};
}
function y(t) {
  return d(t) ? t.value : t;
}
function it(t, e = {}, r = "value") {
  return o(() => J(t == null ? void 0 : t.value, y(e), r));
}
function ut(t) {
  return d(t) ? t : m(t);
}
function _(t, e, r, s) {
  const n = I(t, e, s);
  return j(t, { key: n, ...e }, r);
}
class z {
  /**
   * Constructor
   * @param components list of connected components /<br>список подключенных компонентов
   * @param modification data for modification /<br>данные для модификации
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e = {}, r) {
    this.components = e, this.modification = r;
  }
  /**
   * Check the presence of the component.<br>
   * Проверить наличие компонента.
   * @param name name of the component /<br>названия компонента
   */
  is(e) {
    return e in this.components;
  }
  /**
   * Getting the object of the component.<br>
   * Получение объекта компонента.
   * @param name name of the component /<br>названия компонента
   */
  get(e) {
    var r;
    return (r = this.components) == null ? void 0 : r[e];
  }
  /**
   * Returns the modified input data of the connected components.<br>
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this /<br>название данного
   * @param props basic data /<br>базовые данные
   */
  getModification(e, r) {
    var s;
    if (e) {
      const n = y((s = this.modification) == null ? void 0 : s[e]);
      if (n && A(n)) {
        const i = {};
        return c(n, (f, b) => {
          i[b] = y(f);
        }), r && Object.assign(i, r), i;
      }
    }
    return r;
  }
  /**
   * Rendering a component by its name and returning an array with one component.<br>
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  render(e, r, s, n) {
    const i = this.renderOne(
      e,
      r,
      s,
      n
    );
    return i ? [i] : [];
  }
  /**
   * Rendering a component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderOne(e, r, s, n) {
    if (this.is(e)) {
      const i = n ?? e;
      return _(
        this.get(e),
        this.getModification(i, r),
        s,
        i
      );
    }
  }
  /**
   * Rendering the component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param item an array to which the rendered object will be added /<br>
   * массив, по которому будет добавлять объект
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderAdd(e, r, s, n, i) {
    return e.push(...this.render(r, s, n, i)), this;
  }
}
class at {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, r, s) {
    a(this, "name");
    a(this, "element", m());
    a(this, "refs");
    a(this, "components");
    a(this, "emits");
    a(this, "classes");
    a(this, "classesSub");
    a(this, "styles");
    a(this, "stylesSub");
    a(this, "attrs");
    a(this, "slots");
    a(this, "data");
    a(this, "dataExpose");
    this.props = r, this.name = this.initName(e), this.refs = this.props ? O(this.props) : {}, this.components = new z(s == null ? void 0 : s.components, s == null ? void 0 : s.compMod), this.emits = s == null ? void 0 : s.emits, this.classes = s == null ? void 0 : s.classes, this.styles = s == null ? void 0 : s.styles, this.attrs = L(), this.slots = D();
  }
  init() {
    return this.makeOptions(), this.classesSub = o(() => this.initClasses()), this.stylesSub = o(() => this.initStyles()), this.data = {
      name: this.getName(),
      element: this.element,
      classes: o(() => this.updateClasses()),
      styles: o(() => this.updateStyles()),
      ...this.initSetup()
    }, this.dataExpose = this.initExpose(), this;
  }
  /**
   * Getting the class name.<br>
   * Получение названия класса.
   */
  getName() {
    return this.name.join("-");
  }
  /**
   * Getting the class name.<br>
   * Получение названия класса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getSubClass(e) {
    return `${this.getName()}__${g(e).join("__")}`;
  }
  /**
   * Getting the class name for the status.<br>
   * Получение названия класса для статуса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStatusClass(e) {
    return `${this.getName()}--${g(e).join("--")}`;
  }
  /**
   * Getting the property name for the style.<br>
   * Получение названия свойства для стиля.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStyle(e) {
    return `--${this.getName()}-sys-${g(e).join("-")}`;
  }
  /**
   * Getting additional parameters.<br>
   * Получение дополнительных параметров.
   */
  getAttrs() {
    const e = { ...this.attrs ?? {} };
    return "class" in e && delete e.class, "style" in e && delete e.style, e;
  }
  /**
   * Execution method to replace setup in Vue.<br>
   * Метод выполнения, для замены setup в Vue.
   */
  setup() {
    return this.data ?? {};
  }
  /**
   * List of available external variables.<br>
   * Список доступных переменных извне.
   */
  expose() {
    return this.dataExpose ?? {};
  }
  /**
   * The rendering method for the setup method.<br>
   * Метод рендеринга для метода настройки.
   */
  render() {
    return () => this.initRender();
  }
  /**
   * Initializes the slot.<br>
   * Инициализирует слот.
   * @param name slot name /<br>название слота
   * @param children if you pass this element, the slot will be added to it /<br>
   * если передать этот элемент, то слот добавится в него
   * @param props property for the slot /<br>свойство для слота
   */
  initSlot(e, r, s = {}) {
    var n;
    if (this.slots && ((n = this.slots) != null && n[e]) && typeof this.slots[e] == "function") {
      const i = this.slots[e](s);
      return r && r.push(i), i;
    }
  }
  /**
   * Converts the class name to standard for the current component.<br>
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes /<br>список классов
   */
  toClassName(e) {
    if (u(e)) {
      const r = {};
      return c(e, (s, n) => {
        n.match(/\?\?/) ? r[n.replace(/\?\?/, this.getName())] = s : n.match(/\?/) ? r[n.replace(/\?/, this.name[0])] = s : r[n] = s;
      }), r;
    }
    return {};
  }
  /**
   * Getting component names as an array.<br>
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation /<br>название компонента для преобразования
   */
  initName(e) {
    return c(e.split(".", 2), (r) => w(r));
  }
  /**
   * Updating data about the class.<br>
   * Обновление данных об классе.
   */
  updateClasses() {
    var s, n;
    const e = (s = this.classesSub) == null ? void 0 : s.value, r = (n = this.classes) == null ? void 0 : n.value;
    return e && r ? {
      ...e,
      ...r,
      main: {
        ...this.toClass(e == null ? void 0 : e.main),
        ...this.toClass(r == null ? void 0 : r.main)
      }
    } : r ?? {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    var s, n;
    const e = (s = this.stylesSub) == null ? void 0 : s.value, r = (n = this.styles) == null ? void 0 : n.value;
    return e && r ? {
      ...e,
      ...r
    } : r ?? {};
  }
  /**
   * Transformation of the class value into an object.<br>
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation /<br>список классов для преобразования
   */
  toClass(e) {
    return A(e) ? e : Array.isArray(e) ? { [e.filter((s) => typeof s == "string" && s.trim() !== "").join(" ")]: !0 } : typeof e == "string" ? { [e]: !0 } : {};
  }
}
export {
  p as A,
  G as B,
  E as C,
  _ as D,
  l as E,
  st as F,
  X as G,
  nt as H,
  g as I,
  w as J,
  ut as K,
  H as L,
  x as M,
  at as N,
  et as a,
  tt as b,
  M as c,
  h as d,
  Z as e,
  c as f,
  J as g,
  it as h,
  B as i,
  v as j,
  Q as k,
  R as l,
  I as m,
  W as n,
  V as o,
  y as p,
  P as q,
  Y as r,
  q as s,
  rt as t,
  k as u,
  U as v,
  F as w,
  C as x,
  u as y,
  A as z
};
