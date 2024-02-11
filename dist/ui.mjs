var Oe = Object.defineProperty;
var Ne = (n, t, e) => t in n ? Oe(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var o = (n, t, e) => (Ne(n, typeof t != "symbol" ? t + "" : t, e), e);
import { h as p, isRef as Re, toRefs as Ve, useAttrs as He, useSlots as je, ref as ne, computed as l, shallowRef as v, watchEffect as R, onUnmounted as ae, watch as oe, defineComponent as m, openBlock as f, createBlock as y, unref as C, withCtx as Pt, renderSlot as Ft, onMounted as We, nextTick as re, Teleport as Ye } from "vue";
function ot(n) {
  return n == null;
}
function k(n) {
  return !!(n && typeof n == "object");
}
function V(n) {
  return k(n) && !Array.isArray(n);
}
function W(n) {
  return Array.isArray(n);
}
function U(n) {
  return typeof n == "string";
}
function Ke(n) {
  return n instanceof Function || typeof n == "function";
}
function $(n) {
  if (n)
    switch (typeof n) {
      case "bigint":
      case "number":
        return n !== 0;
      case "boolean":
        return n;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(n) ? n.length > 0 : Object.values(n).some((t) => !ot(t));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(n);
      case "undefined":
        return !1;
      default:
        return !!n;
    }
  return !1;
}
function Ot(n, t) {
  return ot(n) ? !1 : Array.isArray(t) ? t.includes(n) : n === t;
}
function S(n, t) {
  if (k(n)) {
    const e = [];
    return n instanceof Map ? n.forEach((s, i) => e.push(t(s, i, n))) : Array.isArray(n) ? n.forEach((s, i) => e.push(t(s, i, n))) : Object.entries(n).forEach(
      ([s, i]) => e.push(t(i, s, n))
    ), e.filter((s) => s !== void 0);
  }
  return [];
}
function st(n) {
  return Ke(n) ? n() : n;
}
function Ge(n, t = !1) {
  if (typeof n == "string") {
    const e = n.trim();
    switch (e) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(e))
          try {
            return JSON.parse(e);
          } catch {
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(e))
            return parseFloat(e);
          if (/^[0-9]+$/.exec(e))
            return parseInt(e, 10);
          if (t && window && e in window && typeof window[e] == "function")
            return window[e];
        }
    }
  }
  return n;
}
function d(n, t) {
  return n.indexOf(t) !== -1;
}
function Ue(n, t) {
  return S(n, (e) => e == null ? void 0 : e[t]);
}
function qe(n) {
  return Math.max(...Je(n));
}
function lt(n) {
  return JSON.parse(JSON.stringify(n));
}
function Ze(n) {
  return [...new Set(n)];
}
function Xe(n, t) {
  return Array(t).fill(n);
}
function he(n, t, e = !0) {
  const s = lt(n);
  return k(n) && k(t) && S(
    t,
    (i, a) => {
      const r = n == null ? void 0 : n[a];
      k(r) && k(i) ? e && Array.isArray(r) && Array.isArray(i) ? s[a] = lt(Ze([...r, ...i])) : s[a] = he(
        Array.isArray(r) ? { ...r } : r,
        i,
        e
      ) : s[a] = k(i) ? lt(i) : i;
    }
  ), s;
}
function Q(n) {
  return Array.isArray(n) ? n : [n];
}
function Je(n) {
  return S(n, (t) => t.length);
}
function Qe(n, t = "ig", e = ":value") {
  const s = n.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(e.replaceAll(":value", s), t);
}
async function ts(n) {
  var t;
  return ((t = n == null ? void 0 : n.clipboardData) == null ? void 0 : t.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function Lt(n) {
  return U(n) ? n : k(n) ? JSON.stringify(n) : (n == null ? void 0 : n.toString()) ?? "";
}
function es(n) {
  return n.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${t[1].toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
function $t(n, t) {
  return Xe(n, t).join("");
}
function ss(n) {
  return n && "class" in n && typeof n.class == "string" ? n.class : void 0;
}
function is(n, t, e) {
  const s = ss(t);
  return e && s ? `${e}.${s}` : e || s || n;
}
function tt(n, t = {}, e = "value") {
  const s = typeof t == "string", i = s ? t : e, a = s ? {} : t;
  return n ? n && V(n) && i in n ? {
    ...a,
    ...n
  } : {
    ...a,
    [i]: n
  } : {};
}
function Gt(n) {
  return Re(n) ? n.value : n;
}
function ce(n, t, e, s) {
  const i = is(n, t, s);
  return p(n, { key: i, ...t }, e);
}
class ns {
  /**
   * Constructor
   * @param components list of connected components /<br>список подключенных компонентов
   * @param modification data for modification /<br>данные для модификации
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t = {}, e) {
    this.components = t, this.modification = e;
  }
  /**
   * Check the presence of the component.<br>
   * Проверить наличие компонента.
   * @param name name of the component /<br>названия компонента
   */
  is(t) {
    return t in this.components;
  }
  /**
   * Getting the object of the component.<br>
   * Получение объекта компонента.
   * @param name name of the component /<br>названия компонента
   */
  get(t) {
    var e;
    return (e = this.components) == null ? void 0 : e[t];
  }
  /**
   * Returns the modified input data of the connected components.<br>
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this /<br>название данного
   * @param props basic data /<br>базовые данные
   */
  getModification(t, e) {
    var s;
    if (t) {
      const i = Gt((s = this.modification) == null ? void 0 : s[t]);
      if (i && V(i)) {
        const a = {};
        return S(i, (r, h) => {
          a[h] = Gt(r);
        }), e && Object.assign(a, e), a;
      }
    }
    return e;
  }
  /**
   * Rendering a component by its name and returning an array with one component.<br>
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  render(t, e, s, i) {
    const a = this.renderOne(
      t,
      e,
      s,
      i
    );
    return a ? [a] : [];
  }
  /**
   * Rendering a component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderOne(t, e, s, i) {
    if (this.is(t)) {
      const a = i ?? t;
      return ce(
        this.get(t),
        this.getModification(a, e),
        s,
        a
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
  renderAdd(t, e, s, i, a) {
    return t.push(...this.render(e, s, i, a)), this;
  }
}
class T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, e, s) {
    o(this, "name");
    o(this, "element", ne());
    o(this, "refs");
    o(this, "components");
    o(this, "emits");
    o(this, "classes");
    o(this, "classesSub");
    o(this, "styles");
    o(this, "stylesSub");
    o(this, "attrs");
    o(this, "slots");
    o(this, "data");
    o(this, "dataExpose");
    this.props = e, this.name = this.initName(t), this.refs = this.props ? Ve(this.props) : {}, this.components = new ns(s == null ? void 0 : s.components, s == null ? void 0 : s.compMod), this.emits = s == null ? void 0 : s.emits, this.classes = s == null ? void 0 : s.classes, this.styles = s == null ? void 0 : s.styles, this.attrs = He(), this.slots = je();
  }
  init() {
    return this.makeOptions(), this.classesSub = l(() => this.initClasses()), this.stylesSub = l(() => this.initStyles()), this.data = {
      name: this.getName(),
      element: this.element,
      classes: l(() => this.updateClasses()),
      styles: l(() => this.updateStyles()),
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
  getSubClass(t) {
    return `${this.getName()}__${Q(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.<br>
   * Получение названия класса для статуса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${Q(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.<br>
   * Получение названия свойства для стиля.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${Q(t).join("-")}`;
  }
  /**
   * Getting additional parameters.<br>
   * Получение дополнительных параметров.
   */
  getAttrs() {
    const t = { ...this.attrs ?? {} };
    return "class" in t && delete t.class, "style" in t && delete t.style, t;
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
  initSlot(t, e, s = {}) {
    var i;
    if (this.slots && ((i = this.slots) != null && i[t]) && typeof this.slots[t] == "function") {
      const a = this.slots[t](s);
      return e && e.push(a), a;
    }
  }
  /**
   * Converts the class name to standard for the current component.<br>
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes /<br>список классов
   */
  toClassName(t) {
    if (k(t)) {
      const e = {};
      return S(t, (s, i) => {
        i.match(/\?\?/) ? e[i.replace(/\?\?/, this.getName())] = s : i.match(/\?/) ? e[i.replace(/\?/, this.name[0])] = s : e[i] = s;
      }), e;
    }
    return {};
  }
  /**
   * Getting component names as an array.<br>
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation /<br>название компонента для преобразования
   */
  initName(t) {
    return S(t.split(".", 2), (e) => es(e));
  }
  /**
   * Updating data about the class.<br>
   * Обновление данных об классе.
   */
  updateClasses() {
    var s, i;
    const t = (s = this.classesSub) == null ? void 0 : s.value, e = (i = this.classes) == null ? void 0 : i.value;
    return t && e ? {
      ...t,
      ...e,
      main: {
        ...this.toClass(t == null ? void 0 : t.main),
        ...this.toClass(e == null ? void 0 : e.main)
      }
    } : e ?? {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    var s, i;
    const t = (s = this.stylesSub) == null ? void 0 : s.value, e = (i = this.styles) == null ? void 0 : i.value;
    return t && e ? {
      ...t,
      ...e
    } : e ?? {};
  }
  /**
   * Transformation of the class value into an object.<br>
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation /<br>список классов для преобразования
   */
  toClass(t) {
    return V(t) ? t : Array.isArray(t) ? { [t.filter((s) => typeof s == "string" && s.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
}
class as {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classIcon class name for the main icon /<br>название класса для основной иконки
   * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e = "is-icon", s = "is-icon-active") {
    this.props = t, this.classIcon = e, this.classIconActive = s;
  }
  /**
   * Checks if the additional icon is active.<br>
   * Проверяет, активна ли дополнительная иконка.
   */
  isActive() {
    var t, e;
    return !!((t = this.props) != null && t.active && ((e = this.props) != null && e.iconActive));
  }
  /**
   * Returns the property for the base icon.<br>
   * Возвращает свойство для базовой иконки.
   */
  getIconBind() {
    var t, e, s;
    if ((t = this.props) != null && t.icon)
      return tt(this.props.icon, {
        class: this.classIcon,
        turn: (e = this.props) == null ? void 0 : e.turn,
        disabled: (s = this.props) == null ? void 0 : s.disabled,
        hide: this.isActive()
      });
  }
  /**
   * Returns the property for the additional icon.<br>
   * Возвращает свойство для дополнительной иконки.
   */
  getIconActiveBind() {
    var t, e, s;
    if ((t = this.props) != null && t.iconActive)
      return tt(this.props.iconActive, {
        class: this.classIconActive,
        turn: (e = this.props) == null ? void 0 : e.turn,
        disabled: (s = this.props) == null ? void 0 : s.disabled,
        hide: !this.isActive()
      });
  }
}
class os {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classIcon class name for the main icon /<br>название класса для основной иконки
   * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
   */
  constructor(t, e = "is-icon", s = "is-icon-active") {
    o(this, "item");
    o(this, "active", l(() => this.item.isActive()));
    o(this, "iconBind", l(() => this.item.getIconBind()));
    o(this, "iconActiveBind", l(() => this.item.getIconActiveBind()));
    this.item = new as(
      t,
      e,
      s
    );
  }
}
class ft extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    o(this, "icon");
    o(this, "onLoad", (e) => {
      var s;
      return (s = this.emits) == null ? void 0 : s.call(this, "load", e);
    });
    this.icon = new os(
      this.props,
      this.getSubClass("icon"),
      this.getSubClass("iconActive")
    ), this.init();
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      iconBind: this.icon.iconBind,
      iconActiveBind: this.icon.iconActiveBind,
      isActive: this.icon.active
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      isActive: this.setup().isActive
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    var i, a;
    const e = this.setup(), s = [];
    return this.initSlot("default", s), this.components.is("image") && ((i = this.props) != null && i.icon && this.components.renderAdd(
      s,
      "image",
      {
        ...e.iconBind.value,
        onLoad: this.onLoad
      },
      void 0,
      "icon"
    ), (a = this.props) != null && a.iconActive && this.components.renderAdd(
      s,
      "image",
      {
        ...e.iconActiveBind.value,
        onLoad: this.onLoad
      },
      void 0,
      "iconActive"
    )), p("span", {
      ...this.getAttrs(),
      ref: this.element,
      class: e.classes.value.main
    }, s);
  }
}
const G = {
  // :default [!] System label / Системная метка
  animationType: "type1"
}, yt = {
  // Values
  icon: [String, Object],
  iconActive: [String, Object],
  // Status
  active: Boolean,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: G == null ? void 0 : G.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean
}, Mt = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "xl", "full"],
  size: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, St = {
  ...G,
  // :default [!] System label / Системная метка
  animationType: "type1"
}, rs = {
  ...yt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: St == null ? void 0 : St.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: String,
  size: String
};
class hs {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param watch data for tracking /<br>данные для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e = Object.keys(t)) {
    o(this, "cache", {});
    this.props = t, this.watch = e;
  }
  /**
   * Checks if the value has been updated.<br>
   * Проверяет, обновлено ли значение.
   * @param name property name /<br>название свойства
   */
  is(t) {
    return W(t) ? !!t.find((e) => this.isDifferent(e)) : this.isDifferent(t);
  }
  /**
   * Checks if there are changes in the data.<br>
   * Проверяет, есть ли изменения в данных.
   */
  isChanged() {
    const t = this.props;
    return !!this.watch.find((e) => e in t && this.isDifferent(e));
  }
  /**
   * Updates all values.<br>
   * Обновляет все значения.
   */
  update() {
    const t = this.props;
    this.watch.forEach((e) => {
      e in t && this.isDifferent(e) && (this.cache[e] = t[e]);
    });
  }
  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param name property name /<br>название свойства
   */
  isDifferent(t) {
    var e, s;
    return ((e = this.cache) == null ? void 0 : e[t]) !== ((s = this.props) == null ? void 0 : s[t]);
  }
}
class cs {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param callback callback function when the value changes /<br>
   * функция обратного вызова при изменении значения
   * @param changed base data /<br>данный для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    o(this, "event", {});
    o(this, "changed");
    this.props = t, this.callback = e, this.changed = new hs(t, s);
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  make(t) {
    return this.makeCallback(t), this;
  }
  /**
   * Checks if there are values in the property.<br>
   * Проверяет, есть ли значения в свойстве.
   * @param name property names /<br>названия свойств
   */
  is(t) {
    return t in this.props;
  }
  /**
   * Checks if the value has been changed by the property name.<br>
   * Проверяет, было ли изменено значение по названию свойства.
   * @param name property names /<br>названия свойств
   * @param nameProp names of properties of the input variable /<br>названия свойств входной переменной
   */
  isChanged(t, e) {
    return !(t in this.event) || this.changed.is(e || t);
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  makeCallback(t = !1) {
    (t || this.changed.isChanged()) && (this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
  /**
   * The function calls an image call.<br>
   * Функция вызывает образный вызов.
   */
  makeCallbackItem() {
    this.callback && this.callback(this.event);
  }
}
class Nt extends cs {
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  make(t) {
    return this.makeCallback(t).then(), this;
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  async makeCallback(t) {
    (t || this.changed.isChanged()) && (await this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
}
class H {
  /**
   * Constructor
   * @param callback function for the cache /<br>функция для кэша
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    o(this, "cache");
    o(this, "comparisons", []);
    this.callback = t;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  getCache(t) {
    return this.isUpdate(t) && this.setCache(), this.cache;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getCacheAsync(t) {
    return this.isUpdate(t) && await this.setCacheAsync(), this.cache;
  }
  /**
   * Overwrites or adds new values for the cache.<br>
   * Перезаписывает или добавляет новые значения для кэша.
   */
  setCache() {
    this.cache = this.callback();
  }
  /**
   * Overwrites or adds new values for the cache (Async).<br>
   * Перезаписывает или добавляет новые значения для кэша (Async).
   */
  async setCacheAsync() {
    this.cache = await this.callback();
  }
  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  isUpdate(t) {
    return this.cache === void 0 || this.comparisons.length !== t.length || this.comparisons.findIndex((e, s) => e !== t[s]) >= 0 ? (this.comparisons = [...t], !0) : !1;
  }
}
var I = /* @__PURE__ */ ((n) => (n.file = "file", n.image = "image", n.color = "color", n.public = "public", n.filled = "filled", n.outlined = "outlined", n.round = "round", n.sharp = "sharp", n.twoTone = "two-tone", n.material = "material", n))(I || {}), q = { VITE_DESIGNS_MAIN: "m3", VITE_DESIGNS_GLOBAL: "UI", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const wt = {
  api: {
    index: "UI_API_URL",
    value: "/api/"
  },
  apiTranslate: {
    index: "UI_API_TRANSLATE",
    value: "ui/?command=translate"
  },
  cache: {
    index: "UI_CACHE",
    value: 7 * 24 * 60 * 60
  },
  iconPath: {
    index: "UI_ICON_PATH",
    value: "/icons/"
  },
  language: {
    index: "UI_LANGUAGE",
    value: "en-GB"
  },
  prefix: {
    index: "UI_PREFIX",
    value: "ui-playground-"
  }
};
class ls {
  /**
   * Constructor
   * @param index property name /<br>название свойства
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.index = t;
  }
  /**
   * Returns the values from the env environment.<br>
   * Возвращает значения из окружения env.
   * @param defaultValue default property value /<br>значение свойства по умолчанию
   */
  get(t) {
    try {
      if (import.meta) {
        const e = (q == null ? void 0 : q[this.getName()]) ?? (q == null ? void 0 : q[`VITE_${this.getName()}`]);
        if (e)
          return e;
      }
    } catch {
    }
    return Ge(
      t ?? this.getValue()
    );
  }
  /**
   * Getting a basic object with a key name and a default value.<br>
   * Получение базового объекта с названием ключа и значения по умолчанию.
   * @private
   */
  getBasic() {
    return wt == null ? void 0 : wt[this.index];
  }
  /**
   * Get the full key name in env.<br>
   * Получаем полное название ключа в env.
   */
  getName() {
    var t;
    return ((t = this.getBasic()) == null ? void 0 : t.index) ?? this.index;
  }
  /**
   * Gets values by its keys.<br>
   * Получает значения по его ключам.
   */
  getValue() {
    var t;
    return (t = this.getBasic()) == null ? void 0 : t.value;
  }
}
function Rt(n, t) {
  return new ls(n).get(t);
}
class dt {
  /**
   * Checks if the given icon is in the list of connected icons.<br>
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name /<br>название иконки
   */
  static is(t) {
    return t in this.icons || this.getName(t) in this.icons;
  }
  /**
   * Returns the icon by the name.<br>
   * Возвращает иконку по названию.
   * @param index icon name /<br>название иконки
   * @param url path to the storage location of the icon, if the icon does not exist /<br>
   * путь к месту хранения иконки, если иконка не существует
   */
  static get(t, e = "") {
    var s, i;
    return ((s = this.icons) == null ? void 0 : s[this.getName(t)]) ?? ((i = this.icons) == null ? void 0 : i[t]) ?? `${t.replace(/^@/, e ?? this.url)}.svg`;
  }
  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return S(this.icons, (t, e) => e.replace(/^@/, ""));
  }
  /**
   * Adding custom icons.<br>
   * Добавление пользовательских иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static add(t, e) {
    this.icons[this.getName(t)] = e;
  }
  /**
   * Adding an icon by the list.<br>
   * Добавление иконки по списку.
   * @param list list of icons /<br>список иконки
   */
  static addByList(t) {
    S(t, (e, s) => this.add(s, e));
  }
  /**
   * Returns the icon name.<br>
   * Возвращает название иконки.
   * @param index icon name /<br>название иконки
   */
  static getName(t) {
    return `@${t}`;
  }
}
o(dt, "icons", {}), o(dt, "url", Rt("iconPath") ?? "/icons/");
class us extends H {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    super(() => this.update()), this.props = t;
  }
  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  get() {
    var t;
    return this.getCache([(t = this.props) == null ? void 0 : t.value]);
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    var e;
    const t = (e = this.props) == null ? void 0 : e.value;
    if (t) {
      if (t instanceof File)
        return I.file;
      if (t.match(/\//))
        return I.image;
      if (t.match(/^#/))
        return I.color;
      if (t.match(/^@/))
        return I.public;
      if (t.match(/^\$/))
        return I.material;
      const s = t.match(/^(filled|outlined|round|sharp|two-tone)-/);
      return s ? s[1] : dt.is(t) ? I.public : I.material;
    }
  }
}
const gs = 720;
class ds {
  /**
   * Checks if the file is an image.<br>
   * Проверяет, является ли файл изображением.
   * @param file verified file /<br>проверяемый файл
   */
  static isImage(t) {
    return !!t.type.match(/^image\//);
  }
  /**
   * Creates an image based on a file or a link.<br>
   * Создает изображение на основе файла или ссылки.
   * @param src file or link /<br>файл или ссылка
   */
  static createImage(t) {
    return new Promise((e) => {
      if (t) {
        const s = new Image();
        s.onerror = () => e(void 0), s.onload = () => {
          e({
            image: s,
            src: this.getSRC(s, t),
            width: s.naturalWidth,
            height: s.naturalHeight
          });
        }, (async () => s.src = t instanceof File ? await this.getFileResult(t) : t)();
      } else
        e(void 0);
    });
  }
  /**
   * Returns a link to the image.<br>
   * Возвращает ссылку на изображение.
   * @param src file or link /<br>файл или ссылка
   */
  static getPath(t) {
    return this.createImage(t).then((e) => (e == null ? void 0 : e.src) ?? "");
  }
  /**
   * Image size adaptation. Checks if the image size is larger than maxSize, reduces it to maxSize.<br>
   * Адаптация размера изображения. Проверяет, если размер изображения больше maxSize, уменьшает его до maxSize.
   * @param image image element /<br>элемент изображения
   * @param src link to image /<br>ссылка на изображение
   * @param maxSize maximum allowable image size /<br>максимальный допустимый размер изображения
   */
  static getSRC(t, e, s = gs) {
    var i;
    if ((e instanceof File || e === void 0) && (t.naturalHeight > s || t.naturalWidth > s)) {
      const a = t.naturalWidth >= t.naturalHeight, r = (i = document.createElement("canvas")) == null ? void 0 : i.getContext("2d");
      return r ? (r.canvas.width = a ? s : t.naturalWidth / t.naturalHeight * s, r.canvas.height = a ? t.naturalHeight / t.naturalWidth * s : s, r.drawImage(t, 0, 0, r.canvas.width, r.canvas.height), r.canvas.toDataURL()) : "";
    } else
      return t.src;
  }
  /**
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.<br>
   * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read /<br>Blob или File которые следует прочитать
   */
  static getFileResult(t) {
    return new Promise((e) => {
      if (this.isImage(t)) {
        const s = new FileReader();
        s.onload = () => e(typeof s.result == "string" ? s.result : ""), s.readAsDataURL(t);
      } else
        e("");
    });
  }
}
class ps extends Nt {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type image type /<br>тип изображения
   * @param callback callback function upon successful image loading /<br>
   * функция обратного вызова при успешной загрузке изображения
   */
  constructor(e, s, i) {
    var a;
    super(e, i, ["value", "url"]);
    o(this, "item");
    this.type = s, (a = this.props) != null && a.value && this.make();
  }
  /**
   * Checks if there are values.<br>
   * Проверяет, есть ли значения.
   */
  is() {
    return this.getImage() !== void 0;
  }
  /**
   * Checks if the value is a link, that is, a type of string.<br>
   * Проверяет, является ли значение ссылкой, то есть видом строки.
   */
  isLink() {
    return this.is() && typeof this.getImage() == "string";
  }
  /**
   * Checks if the value is an image object.<br>
   * Проверяет, является ли значение объектом изображения.
   */
  isImage() {
    return this.is() && typeof this.getImage() != "string";
  }
  /**
   * Returns images.<br>
   * Возвращает изображения.
   */
  getImage() {
    var e;
    return (e = this.event) == null ? void 0 : e.image;
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  async initEvent() {
    this.isChanged("image", ["value", "url"]) && (this.event.image = await this.initImage());
  }
  /**
   * Calculates the image value and returns it.<br>
   * Вычисляет значение изображения и возвращает его.
   */
  async initImage() {
    var s, i;
    const e = (s = this.props) == null ? void 0 : s.value;
    if (e)
      switch (this.type.get()) {
        case I.image:
        case I.file:
          try {
            return await ds.createImage(e);
          } catch {
            console.error(Image, e);
          }
          break;
        case I.public:
          if (U(e))
            return dt.get(e, (i = this.props) == null ? void 0 : i.url);
          break;
      }
  }
}
class ms {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
  }
  /**
   * Checks if there are coordinates for calculation.<br>
   * Проверяет, есть ли координаты для вычисления.
   */
  is() {
    var e;
    const t = (e = this.props) == null ? void 0 : e.coordinator;
    return W(t) && t.length > 0 && t.length < 5;
  }
  /**
   * Returns the sizes for the background-position property by coordinates.<br>
   * Возвращает размеры для свойства background-position по координатам.
   */
  get() {
    const t = this.getCoordinator();
    return {
      width: 100 - t[1] - t[3],
      height: 100 - t[2] - t[0]
    };
  }
  /**
   * Returns coordinates.<br>
   * Возвращает координаты.
   */
  getCoordinator() {
    var t;
    if (this.is()) {
      const e = (t = this.props) == null ? void 0 : t.coordinator;
      switch (e.length) {
        case 1:
          return [
            e[0],
            e[0],
            e[0],
            e[0]
          ];
        case 2:
          return [
            e[0],
            e[1],
            e[0],
            e[1]
          ];
        case 3:
          return [
            e[0],
            e[1],
            e[2],
            e[1]
          ];
        case 4:
          return e;
      }
    }
    return [0, 0, 0, 0];
  }
  /**
   * Returns the values for the background property.<br>
   * Возвращает значения для свойства background.
   */
  getSize() {
    const t = this.get();
    return {
      width: `${100 / t.width * 100}%`,
      height: `${100 / t.height * 100}%`
    };
  }
}
class fs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param coordinator coordinates for margins /<br>координаты для отступов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.coordinator = e;
  }
  /**
   * Returns the position on the left.<br>
   * Возвращает позицию слева.
   */
  getX() {
    var t, e;
    return this.coordinator.is() ? `${this.coordinator.getCoordinator()[3] + this.coordinator.get().width / 2}%` : ((e = (t = this.props) == null ? void 0 : t.x) == null ? void 0 : e.toString()) || "center";
  }
  /**
   * Returns the position on the top.<br>
   * Возвращает позицию сверху.
   */
  getY() {
    var t, e;
    return this.coordinator.is() ? `${this.coordinator.getCoordinator()[0] + this.coordinator.get().height / 2}%` : ((e = (t = this.props) == null ? void 0 : t.y) == null ? void 0 : e.toString()) || "center";
  }
}
function ys(n, t) {
  return Math.floor(Math.random() * (t - n + 1) + n);
}
function L(n) {
  return typeof n == "number" ? n : Cs(n) || 0;
}
function Cs(n) {
  let t = n.replace(/[^\d., ]+/ig, "");
  return t.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? t = t.replace(/ /ig, "").replace(/,/ig, ".") : t.match(/,[0-9]{3}[,.]/ig) ? t = t.replace(/,/ig, "") : t.match(/[.][0-9]{3}[,.]/ig) ? t = t.replace(/[.]/ig, "").replace(/,/ig, ".") : t = t.replace(/,/ig, "."), parseFloat(t);
}
function le(n) {
  return n === window;
}
function bs(n) {
  var t;
  return !!((t = z(n)) != null && t.closest("html"));
}
function z(n) {
  if (le(n))
    return document.body;
  if (typeof n == "string")
    try {
      return document.querySelector(n) ?? void 0;
    } catch {
      return;
    }
  return n;
}
function Ut(n) {
  return le(n) ? n : z(n);
}
function ue(n, t) {
  const e = z(n);
  return e ? ($(e.id) || e.setAttribute("id", `id-${qt++}`), t ? `#${e.id}${t}`.trim() : e.id) : `id-${qt++}`;
}
function vs(n, t, e) {
  var s;
  return ((s = z(n)) == null ? void 0 : s[t]) ?? e;
}
function ks(n, t, e) {
  const s = z(n);
  if (s) {
    const i = vs(s, t);
    if (k(i) && k(e))
      S(e, (a, r) => {
        i[r] = st(a);
      });
    else {
      const a = st(e);
      !(t in s) && typeof a == "string" ? s.setAttribute(t.toString(), a) : s[t] = st(e);
    }
  }
  return s;
}
function pt(n, t = "div", e, s) {
  const i = document.createElement(t);
  return typeof e == "function" ? e(i) : V(e) && S(e, (a, r) => {
    ks(i, r, a);
  }), n == null || n.insertBefore(i, s ?? null), i;
}
let qt = ys(1e5, 9e5);
class Ct {
  /**
   * Classes Constructor
   * @param elementSelector element /<br>элемент
   * @param type type /<br>тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs /<br>объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics /<br>объект options
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  constructor(t, e = ["click"], s, i, a) {
    /**
     * Element.<br>
     * Элемент.
     * @protected
     */
    o(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.<br>
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     * @protected
     */
    o(this, "elementControl");
    o(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.<br>
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     * @protected
     */
    o(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.<br>
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     * @protected
     */
    o(this, "listenerRecent", (t) => {
      var e, s;
      bs(this.elementControl) ? ((e = this.listener) == null || e.call(this.element, t, this.detail), k(this.options) && ((s = this.options) != null && s.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.<br>
     * Состояния события.
     * @protected
     */
    o(this, "activity", !1);
    o(this, "activityItems", []);
    this.listener = s, this.options = i, this.detail = a, this.element = Ut(t), this.elementControl = z(t), this.type = Q(e);
  }
  /**
   * Checks whether event listening is currently enabled.<br>
   * Проверяет, включено ли сейчас прослушивание события.
   */
  isActive() {
    return this.activity;
  }
  /**
   * Change of an element for tracking.<br>
   * Изменение элемента для прослеживания.
   * @param elementSelector element /<br>элемент
   */
  setElement(t) {
    const e = Ut(t);
    return this.elementControlEdit || (this.elementControl = z(t)), this.element = e, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element /<br>элемент
   */
  setElementControl(t) {
    return this.elementControl = z(t), this.elementControlEdit = !ot(this.elementControl), this.elementControlEdit || (this.elementControl = z(this.element)), this;
  }
  /**
   * Changes the type of the handled event.<br>
   * Изменяет тип обрабатываемого события.
   * @param type type /<br>тип
   */
  setType(t) {
    return this.type = Q(t), this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param listener
   */
  setListener(t) {
    return this.listener = t, this;
  }
  /**
   * Modifying the options object that defines the characteristics of an object.<br>
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions(t) {
    return this.options = t, this.reset(), this;
  }
  /**
   * Modifying a dependent value for the dispatch method.<br>
   * Изменение зависимого значения для метода dispatch.
   * @param detail
   */
  setDetail(t) {
    return this.detail = t, this;
  }
  /**
   * The method of the EventTarget sends an Event to the object, (synchronously) invoking
   * the affected EventListeners in the appropriate order.<br>
   * Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам
   * поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  dispatch(t = this.detail) {
    return this.type.forEach(
      (e) => {
        var s;
        return (s = this.element) == null ? void 0 : s.dispatchEvent(new CustomEvent(e, { detail: t }));
      }
    ), this;
  }
  /**
   * Starting event listening.<br>
   * Запуск прослушивания события.
   */
  start() {
    return this.activity || (this.activity = !0, this.activityItems = [], this.type.forEach((t) => {
      this.element && !(t === "resize" && this.makeResize()) && !(t === "scroll-sync" && this.makeScroll()) && (this.element.addEventListener(t, this.listenerRecent, this.options), this.activityItems.push({
        element: this.element,
        type: t
      }));
    })), this;
  }
  /**
   * Stopping event listening.<br>
   * Остановка прослушивания события.
   */
  stop() {
    return this.activity && (this.activity = !1, this.activityItems.forEach(({
      element: t,
      type: e,
      listener: s,
      observer: i
    }) => {
      i ? i.disconnect() : s ? t == null || t.removeEventListener(e, s) : t == null || t.removeEventListener(e, this.listenerRecent);
    })), this;
  }
  /**
   * Toggling event handler state.<br>
   * Переключение состояния работы события.
   * @param activity event activation /<br>активация события
   */
  toggle(t) {
    return t ? this.start() : this.stop();
  }
  /**
   * Overloads the listening events.<br>
   * Перегружает события прослушивания.
   */
  reset() {
    return this.activity && (this.stop(), this.start()), this;
  }
  /**
   * Checks if the ResizeObserver object exists.<br>
   * Проверяет, существует ли объект ResizeObserver.
   */
  isObserver() {
    return "ResizeObserver" in window;
  }
  /**
   * The implementation of the resize event for an element.<br>
   * Реализация события изменения размера для элемента.
   * @protected
   */
  makeResize() {
    if (this.element && this.element instanceof HTMLElement && this.element !== document.body && this.isObserver()) {
      const t = new ResizeObserver(
        (e) => this.listenerRecent(e == null ? void 0 : e[0])
      );
      return t.observe(this.element), this.activityItems.push({
        element: this.element,
        type: "resize",
        observer: t
      }), !0;
    }
    return !1;
  }
  /**
   * Implementation of the scroll event for an element.<br>
   * Реализация события изменения положения скролла для элемента.
   * @protected
   */
  makeScroll() {
    if (this.element) {
      let t = !1;
      const e = (s) => {
        t || (t = !0, requestAnimationFrame(() => {
          this.listenerRecent(s), t = !1;
        }));
      };
      return this.element.addEventListener("scroll", e, this.options), this.element.addEventListener("resize", e, this.options), this.activityItems.push(
        {
          element: this.element,
          type: "scroll",
          listener: e
        },
        {
          element: this.element,
          type: "resize",
          listener: e
        }
      ), !0;
    }
    return !1;
  }
}
class Ms {
  /**
   * Constructor
   * @param name group name /<br>название группы
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    o(this, "factorMax", 1);
    o(this, "size", {
      width: 0,
      height: 0
    });
    o(this, "offset", {
      width: 7680,
      height: 7680
    });
    this.name = t;
  }
  /**
   * Checks whether the element belongs to the current group.<br>
   * Проверяет, принадлежит ли элемент к текущей группе.
   * @param name name of the checked group /<br>название проверяемой группы
   */
  is(t) {
    return this.name === t;
  }
  /**
   * Checks if the group has elements with sizes. It is used to check if there is data for work.<br>
   * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
   */
  isSize() {
    return !!(this.size.width || this.size.width);
  }
  /**
   * Returns the maximum physical width.<br>
   * Возвращает максимальную физическую ширину.
   */
  getWidth() {
    return this.size.width;
  }
  /**
   * Returns the maximum physical height.<br>
   * Возвращает максимальную физическую высоту.
   */
  getHeight() {
    return this.size.height;
  }
  /**
   * Returns the actual width.<br>
   * Возвращает фактическую ширину.
   */
  getOffsetWidth() {
    return this.offset.width;
  }
  /**
   * Returns the actual height.<br>
   * Возвращает фактическую высоту.
   */
  getOffsetHeight() {
    return this.offset.height;
  }
  /**
   * Returns the maximum multiplier for scaling.<br>
   * Возвращает максимальный множитель для масштабирования.
   */
  getFactorMax() {
    return this.factorMax;
  }
  /**
   * Updating size.width, if it is less than the selected value.<br>
   * Обновление size.width, если она меньше выбранного значения.
   * @param width value of the selected width /<br>значение выбранной ширины
   */
  makeWidth(t) {
    return t > this.size.width && (this.size.width = t), this;
  }
  /**
   * Updating size.height, if it is less than the selected value.<br>
   * Обновление size.height, если она меньше выбранного значения.
   * @param height value of the selected height /<br>значение выбранной высоты
   */
  makeHeight(t) {
    return t > this.size.height && (this.size.height = t), this;
  }
  /**
   * Updating offset.width, if it is larger than the selected value.<br>
   * Обновление offset.width, если она больше выбранного значения.
   * @param width value of the selected width /<br>значение выбранной ширины
   */
  makeOffsetWidth(t) {
    return t < this.offset.width && (this.offset.width = t), this;
  }
  /**
   * Updating offset.height, if it is larger than the selected value.<br>
   * Обновление offset.height, если она больше выбранного значения.
   * @param height value of the selected height /<br>значение выбранной высоты
   */
  makeOffsetHeight(t) {
    return t < this.offset.height && (this.offset.height = t), this;
  }
  /**
   * Changes the multiplier value if it is greater than the checked value.<br>
   * Изменяет значение множителя, если оно больше проверяемого значения.
   * @param value values for verification /<br>значения для проверки
   */
  makeFactorMax(t) {
    return t < this.factorMax && (this.factorMax = t), this;
  }
  /**
   * Restoring the value to its original state.<br>
   * Восстановление значения в изначальное состояние.
   */
  reset() {
    return this.factorMax = 1, this.size = {
      width: 0,
      height: 0
    }, this.offset = {
      width: 7680,
      height: 7680
    }, this;
  }
}
class j {
  /**
   * Checks if the group has elements with sizes. It is used to check if there is data for work.<br>
   * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
   */
  static isSize() {
    return this.items.find((t) => t.isSize()) !== void 0;
  }
  /**
   * Returns an object with data for calculation by the name of its group.<br>
   * Возвращает объект с данными для вычисления по названию его группы.
   * @param name group name /<br>название группы
   */
  static get(t) {
    return this.find(t) || this.init(t);
  }
  /**
   * Resets all parameters for all groups.<br>
   * Сбрасывает все параметры для всех групп.
   */
  static reset() {
    this.items.forEach((t) => t.reset());
  }
  /**
   * Search for the ImageCalculation object by the name of the group.<br>
   * Поиск объекта ImageCalculation по названию группы.
   * @param name group name /<br>название группы
   */
  static find(t) {
    return this.items.find((e) => e.is(t));
  }
  /**
   * Creating a new ImageCalculation object by the name of the group.<br>
   * Создание нового объекта ImageCalculation по названию группы.
   * @param name group name /<br>название группы
   */
  static init(t) {
    const e = new Ms(t);
    return this.items.push(e), e;
  }
}
o(j, "items", []);
class A {
  /**
   * Checks if an element is present in the list.<br>
   * Проверяет, присутствует ли элемент в списке.
   * @param item object for working with images /<br>объект для работы с изображениями
   */
  static is(t) {
    return this.objects.findIndex((e) => e === t) !== -1;
  }
  /**
   * Adding a new element for tracking.<br>
   * Добавление нового элемента для отслеживания.
   * @param item object for working with images /<br>объект для работы с изображениями
   */
  static add(t) {
    this.is(t) || (this.objects.push(t), this.make());
  }
  /**
   * Removal of the element.<br>
   * Удаления элемента.
   * @param item object for working with images /<br>объект для работы с изображениями
   */
  static remove(t) {
    const e = this.objects.findIndex((s) => s === t);
    e !== -1 && (this.objects.splice(e, 1), this.cache = []), this.make();
  }
  /**
   * Resets all cached data and rereads scaling for all elements.<br>
   * Обнуляет все кэшированные данные и перечитывает масштабирование для всех элементов.
   */
  static reset() {
    this.cache = [], this.start();
  }
  /**
   * Starts the calculation process or turns it off if there are no active elements in the list.<br>
   * Запускает процесс вычисления или отключает его, если в списке нет активных элементов.
   */
  static make() {
    this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event = new Ct(window, ["scroll-sync"], () => this.start()).start(), this.start());
  }
  /**
   * Returns a list of elements that are visible or constantly being calculated.<br>
   * Возвращает список элементов, которые видны или постоянно вычисляются.
   */
  static getItemIdByVisible() {
    const t = [];
    return this.objectsAdaptive.forEach((e) => {
      e.isVisible() && t.push(e.getId());
    }), t;
  }
  /**
   * Method for starting the calculation of scaling elements in the list.<br>
   * Метод для запуска вычисления масштабирования элементов в списке.
   */
  static start() {
    var t;
    if (this.isAdaptive()) {
      this.makeAdaptive();
      const e = this.getItemIdByVisible();
      this.isCache(e) && (this.cache = e, this.makeSize(), this.makePercent(), this.makeFactorMax(), this.makeCallback());
    } else
      (t = this.event) == null || t.stop();
  }
  /**
   * Updates the list of elements available for calculation. These are the
   * elements that are close to the border of the visible area.<br>
   * Обновляет список доступных для вычисления элементов. Это те элементы,
   * которые близки к границе видимой области.
   */
  static makeAdaptive() {
    this.objectsAdaptive = [], this.objects.forEach((t) => {
      t.make(), t.isBeyond() && this.objectsAdaptive.push(t);
    });
  }
  /**
   * Calculates the dimensions of an element relative to the image size,
   * the size of the element, and its physical location on the image.<br>
   * Вычисляет размеры элемента относительно размера изображения,
   * размера элемента и его физического расположения на изображении.
   */
  static makeSize() {
    j.reset(), this.objectsAdaptive.forEach((t) => {
      const e = t.getElement();
      e && t.isVisible() && j.get(t.getGroup()).makeWidth(t.getWidth()).makeHeight(t.getHeight()).makeOffsetWidth(e.offsetWidth).makeOffsetHeight(e.offsetHeight);
    });
  }
  /**
   * Calculation of the basic scaling of an element without taking into account other elements.<br>
   * Вычисление базового масштабирования элемента без учета других элементов.
   */
  static makePercent() {
    j.isSize() && this.objectsAdaptive.forEach((t) => {
      const e = t.getElement(), s = j.get(t.getGroup());
      if (e) {
        const i = s.getWidth(), a = s.getHeight();
        t.setPercent(
          t.getWidth() * (i ? 1 / i : 0) * (s.getOffsetWidth() / e.offsetWidth),
          t.getHeight() * (a ? 1 / a : 0) * (s.getOffsetHeight() / e.offsetHeight)
        );
      }
    });
  }
  /**
   * Calculation of the largest element to determine the base size.
   * This parameter is used for scaling other elements,
   * reducing them to the necessary proportion.<br>
   * Вычисление самого большого элемента для определения базового размера.
   * Этот параметр используется для масштабирования других элементов,
   * уменьшая их до нужной пропорции.
   */
  static makeFactorMax() {
    j.isSize() && this.objectsAdaptive.forEach((t) => {
      t.isVisible() && j.get(t.getGroup()).makeFactorMax(t.getFactor());
    });
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  static makeCallback() {
    this.objectsAdaptive.forEach((t) => {
      t.makeCallback();
    });
  }
  /**
   * Checks if there is an active element at the moment.<br>
   * Проверяет, есть ли в текущий момент активный элемент.
   */
  static isAdaptive() {
    return !!this.objects.find((t) => t.is());
  }
  /**
   * Checks whether the composition of visible elements has changed.<br>
   * Проверяет, изменился ли состав видимых элементов.
   * @param visible list of indices of visible elements /<br>список индексов видимых элементов
   */
  static isCache(t) {
    return this.cache.join("|") !== t.join("|");
  }
}
o(A, "objects", []), o(A, "objectsAdaptive", []), o(A, "cache", []), o(A, "event"), o(A, "time");
const Ss = "main", Zt = 256;
class ws {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param data image data /<br>данные изображения
   * @param callback callback function when updating the image scale /<br>
   * функция обратного вызова при обновлении масштаба изображения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i) {
    o(this, "percent", {
      width: 0,
      height: 0
    });
    o(this, "beyond", !1);
    o(this, "visible", !1);
    this.props = t, this.data = e, this.element = s, this.callback = i, this.reset();
  }
  /**
   * Checks if the element’s conditions are suitable for scaling.<br>
   * Проверяет, подходить ли у элемента условия для масштабирования.
   */
  is() {
    var t;
    return !!((t = this.props) != null && t.adaptive) && this.data.isImage() && !!(this.element.value && this.element.value.closest("body") && (this.getWidth() || this.getHeight()));
  }
  /**
   * Checks for compliance with the group.<br>
   * Проверяет на соответствие группе.
   * @param name name of the checked group /<br>название проверяемой группы
   */
  isGroup(t) {
    return this.getGroup() === t;
  }
  /**
   * Is it available for calculation.<br>
   * Доступен ли для вычисления.
   */
  isBeyond() {
    return this.beyond;
  }
  /**
   * Is the element visible.<br>
   * Виден ли элемент.
   */
  isVisible() {
    return this.visible;
  }
  /**
   * Returns the name of the group.<br>
   * Возвращает название группы.
   */
  getGroup() {
    var t;
    return ((t = this.props) == null ? void 0 : t.adaptiveGroup) ?? Ss;
  }
  /**
   * Returns the identifier of the element.<br>
   * Возвращает идентификатор элемента.
   */
  getId() {
    return ue(this.element.value);
  }
  /**
   * Returns the current element.<br>
   * Возвращает текущий элемент.
   */
  getElement() {
    return this.element.value;
  }
  /**
   * Returns the physical width of the object.<br>
   * Возвращает физическую ширину объекта.
   */
  getWidth() {
    var t;
    return L(((t = this.props) == null ? void 0 : t.objectWidth) ?? 0);
  }
  /**
   * Returns the physical height of the object.<br>
   * Возвращает физическую высоту объекта.
   */
  getHeight() {
    var t;
    return L(((t = this.props) == null ? void 0 : t.objectHeight) ?? 0);
  }
  /**
   * Returns the axis for scaling.<br>
   * Возвращает ось для масштабирования.
   */
  getType() {
    if (this.getWidth() && this.percent.width > 0)
      return "x";
    if (this.getHeight() && this.percent.height > 0)
      return "y";
  }
  /**
   * Calculation of the base size of the image to determine how to scale the image.<br>
   * Вычисление базового размера изображения, чтобы определить, как надо масштабировать изображение.
   */
  getSize() {
    if (this.element.value && this.data.isImage()) {
      const t = this.data.getImage();
      switch (this.getType()) {
        case "x":
          return t.height * (this.element.value.offsetWidth * this.percent.width / t.width);
        case "y":
          return t.width * (this.element.value.offsetHeight * this.percent.height / t.height);
      }
    }
    return 0;
  }
  /**
   * Multiplier for determining the level of image scaling relative to other elements.<br>
   * Множитель для определения уровня масштабирования изображения относительно других элементов.
   */
  getFactor() {
    const t = this.element.value, e = this.getSize(), s = this.getType();
    if (t) {
      if (s === "x" && e > t.offsetHeight)
        return t.offsetHeight / e;
      if (s === "y" && e > t.offsetWidth)
        return t.offsetWidth / e;
    }
    return 1;
  }
  /**
   * Returns values for the background-size property.<br>
   * Возвращает значения для свойства background-size.
   */
  getBackgroundSize() {
    const t = j.get(this.getGroup()).getFactorMax();
    switch (this.getType()) {
      case "x":
        return `${100 * this.percent.width * t}% auto`;
      case "y":
        return `auto ${100 * this.percent.height * t}%`;
    }
    return null;
  }
  /**
   * Size change for calculation.<br>
   * Изменение размера для вычисления.
   * @param width width value /<br>значение ширины
   * @param height height value /<br>значение высоты
   */
  setPercent(t, e) {
    return this.percent.width = t, this.percent.height = e, this;
  }
  /**
   * Updating the activity status of the element.<br>
   * Обновление статуса активности элемента.
   */
  update() {
    this.is() ? A.add(this) : A.remove(this);
  }
  /**
   * Recalculate scaling for all active elements.<br>
   * Пересчитать масштабирование для всех активных элементов.
   */
  reset() {
    this.is() && (A.is(this) ? A.reset() : A.add(this));
  }
  /**
   * Removal of an element from the scaling list.<br>
   * Удаление элемента из списка для масштабирования.
   */
  remove() {
    this.is() && A.remove(this);
  }
  /**
   * Updating the visibility and activity status of the element.<br>
   * Обновление статуса видимости и активности элемента.
   */
  make() {
    var t, e;
    if (this.beyond = !1, this.visible = !1, this.is())
      if ((t = this.props) != null && t.adaptiveAlways)
        this.beyond = !0, this.visible = !0;
      else {
        const s = (e = this.element.value) == null ? void 0 : e.getBoundingClientRect();
        s && (this.beyond = !(s.bottom < 0 - Zt || s.top > window.innerHeight + Zt), this.visible = !(s.bottom < 0 || s.top > window.innerHeight));
      }
    return this;
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  makeCallback() {
    var t;
    return (t = this.callback) == null || t.call(this), this;
  }
}
class Bs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param data image data /<br>данные изображения
   * @param coordinator object for working with coordinates /<br>объект для работы с координатами
   * @param adaptive an object for working with adapted scaling /<br>объект для работы с адаптированным масштабированием
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i) {
    this.props = t, this.data = e, this.coordinator = s, this.adaptive = i;
  }
  /**
   * Returns values for the background property.<br>
   * Возвращает значения для свойства background.
   */
  get() {
    if (this.coordinator.is())
      return this.getSizeByCoordinator();
    if (this.adaptive.is()) {
      const t = this.adaptive.getBackgroundSize();
      if (t)
        return t.toString();
    }
    return this.getSizeForItem();
  }
  /**
   * Returns values for the background-image property.<br>
   * Возвращает значения для свойства background-image.
   */
  getImage() {
    const t = this.data.getImage();
    switch (typeof t) {
      case "string":
        return `url("${t}")`;
      case "object":
        return `url("${t.src}")`;
      default:
        return null;
    }
  }
  /**
   * Returns the value for the background-size property.<br>
   * Возвращает значение для свойства background-size.
   * @param width width value /<br>значение ширины
   * @param height height value /<br>значение высоты
   */
  getSize(t, e) {
    const s = this.data.getImage();
    return typeof s == "object" ? s.height < s.width ? `auto ${e}` : `${t} auto` : null;
  }
  /**
   * Returns sizes according to the coordinator property.<br>
   * Возвращает размеры по свойству координатора.
   */
  getSizeByCoordinator() {
    const {
      width: t,
      height: e
    } = this.coordinator.getSize();
    return this.getSize(t, e);
  }
  /**
   * Returns the scaling sizes.<br>
   * Возвращает размеры масштабирования.
   */
  getSizeForItem() {
    var e;
    const t = (e = this.props) == null ? void 0 : e.size;
    return t && $(t) ? t.toString().match(/%$/) ? this.getSize(t, t) : t.toString() : null;
  }
}
let Ds = class extends Nt {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param callback callback function on successful image update or data recalculation /<br>
   * функция обратного вызова при успешном обновлении картинки или при перерасчете данных
   */
  constructor(e, s, i) {
    super(e, i);
    o(this, "type");
    o(this, "data");
    o(this, "coordinator");
    o(this, "position");
    o(this, "adaptiveItem");
    o(this, "background");
    this.props = e, this.callback = i, this.type = new us(e), this.data = new ps(e, this.type, () => {
      this.adaptiveItem.is() ? this.adaptiveItem.reset() : this.make(!0);
    }), this.coordinator = new ms(e), this.position = new fs(e, this.coordinator), this.adaptiveItem = new ws(
      e,
      this.data,
      s,
      () => this.make(!0)
    ), this.background = new Bs(
      e,
      this.data,
      this.coordinator,
      this.adaptiveItem
    );
  }
  /**
   * Destructor
   */
  destructor() {
    this.adaptiveItem.remove();
  }
  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  getType() {
    return this.type.get();
  }
  /**
   * Getting the value of the picture.<br>
   * Получение значения картины.
   */
  getValue() {
    var e;
    return (e = this.props) == null ? void 0 : e.value;
  }
  /**
   * A method for obtaining an object with values for an image.<br>
   * Метод для получения объекта с значениями для изображения.
   */
  getData() {
    return this.data;
  }
  /**
   * Values for the text. Text is used for the type of icon that works as a background.<br>
   * Значения для текста. Текст используется для типа иконки, который работает как фон.
   */
  getText() {
    const e = this.type.get(), s = this.getValue();
    if (e && U(s) && [
      "filled",
      "outlined",
      "round",
      "sharp",
      "two-tone",
      "material"
    ].indexOf(e) !== -1)
      return s.replace(/^(filled|outlined|round|sharp|two-tone)-/, "");
  }
  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses() {
    const e = this.type.get(), s = {
      [`??--type--${e}`]: e !== void 0,
      notranslate: !0
    };
    switch (e) {
      case "filled":
      case "outlined":
      case "round":
      case "sharp":
      case "two-tone":
      case "material":
        s["material-icons"] = !0;
        break;
    }
    return s;
  }
  /**
   * Values for the style.<br>
   * Значения для стиля.
   */
  getStyles() {
    var e;
    return ((e = this.event) == null ? void 0 : e.styles) || {};
  }
  /**
   * Updates the adapted elements.<br>
   * Обновляет адаптированные элементы.
   */
  updateAdaptive() {
    return this.adaptiveItem.update(), this.make(!0), this;
  }
  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  async initEvent() {
    this.isChanged("image", ["value", "url"]) && (this.event.image = this.getData().getImage()), this.event.styles = this.initStyles();
  }
  /**
   * Calculates all properties for the style of the element.<br>
   * Вычисляет все свойства для стиля элемента.
   */
  initStyles() {
    var s, i;
    const e = this.getValue();
    if (e)
      switch (this.type.get()) {
        case "file":
        case "image":
          return {
            "background-image": this.background.getImage(),
            "background-size": this.background.get(),
            "background-position-x": (s = this.position) == null ? void 0 : s.getX(),
            "background-position-y": (i = this.position) == null ? void 0 : i.getY()
          };
        case "public":
          return { "mask-image": this.background.getImage() };
        case "color":
          if (U(e))
            return { "background-color": e };
      }
    return {};
  }
};
class xs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   */
  constructor(t, e) {
    o(this, "item");
    o(this, "type", l(() => this.item.getType()));
    o(this, "data", v());
    o(this, "text", l(() => this.item.getText()));
    o(this, "classes", l(() => this.item.getClasses()));
    o(this, "styles", v());
    this.item = new Ds(
      t,
      e,
      (s) => {
        this.data.value = s.image, this.styles.value = s.styles;
      }
    ), R(() => this.item.data.make(!0)), R(() => this.item.updateAdaptive());
  }
  /**
   * Destructor
   */
  destructor() {
    this.item.destructor();
  }
}
class bt extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    o(this, "image");
    this.image = new xs(
      this.props,
      this.element
    ), this.init(), ae(() => this.image.destructor()), oe(
      this.image.data,
      (a) => {
        var r;
        return (r = this.emits) == null ? void 0 : r.call(this, "load", {
          type: this.image.type.value,
          image: a
        });
      }
    );
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      type: this.image.type,
      data: this.image.data,
      text: this.image.text
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    const e = this.setup();
    return {
      type: e.type,
      data: e.data
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        ...this.toClassName(this.image.classes.value)
      }
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {
      ...this.image.styles.value
    };
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    const e = this.setup();
    return p("span", {
      ref: this.element,
      class: e.classes.value.main,
      style: e.styles.value,
      translate: "no"
    }, e.text.value);
  }
}
const Is = {
  adaptiveGroup: "basic"
}, vt = {
  // Values
  value: [String, File],
  coordinator: Array,
  size: String,
  x: [String, Number],
  y: [String, Number],
  // Adaptive
  adaptiveGroup: {
    type: String,
    default: Is.adaptiveGroup
  },
  adaptiveAlways: Boolean,
  objectWidth: [String, Number],
  objectHeight: [String, Number],
  // Options
  url: String,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, As = {
  ...vt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, ge = /* @__PURE__ */ m({
  __name: "M2Image",
  props: { ...As },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-image": !0,
        "m2-image--turn": i.turn,
        "m2-image--disabled": i.disabled,
        "m2-image--hide": i.hide,
        "m2-image--adaptive": i.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new bt(
      "m2.image",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), zs = /* @__PURE__ */ m({
  __name: "M2Icon",
  props: { ...rs },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-icon": !0,
        "m2-icon--turn": i.turn,
        "m2-icon--disabled": i.disabled,
        "m2-icon--hide": i.hide,
        [`m2-icon--animationType--${i.animationType}`]: d(Mt.animationType, i.animationType),
        "m2-icon--animationShow": i.animationShow,
        "m2-icon--overlay": i.overlay,
        "m2-icon--dynamic": i.dynamic,
        "m2-icon--start": i.start,
        "m2-icon--end": i.end,
        "m2-icon--high": i.high,
        [`m2-icon--rounded--${i.rounded}`]: d(Mt.rounded, i.rounded),
        [`m2-icon--size--${i.size}`]: d(Mt.size, i.size)
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new ft(
      "m2.icon",
      i,
      {
        emits: s,
        components: {
          image: ge
        },
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), Ts = {
  install(n) {
    n.component("M2Icon", zs);
  }
}, Es = {
  install(n) {
    n.component("M2Image", ge);
  }
};
class Ls {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param classItem class name for the element /<br>название класса для элемента
   * @param classEnd class name for the end of animation status /<br>название класса для статуса конец анимации
   * @param styleX property name for the X coordinate /<br>название свойства для координаты X
   * @param styleY property name for the Y coordinate /<br>название свойства для координаты Y
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s = "is-item", i = "is-end", a = "x", r = "y") {
    this.props = t, this.element = e, this.classItem = s, this.classEnd = i, this.styleX = a, this.styleY = r;
  }
  /**
   * Event when clicking on an element.<br>
   * Событие при клике на элемент.
   * @param event event object /<br>объект события
   */
  onClick(t) {
    this.addItem(t.offsetX, t.offsetY);
  }
  /**
   * Change the item.<br>
   * Изменить элемент.
   * @param element element /<br>элемент
   */
  setElement(t) {
    return this.element = t, this;
  }
  /**
   * Adding a new light element.<br>
   * Добавление нового элемента свечения.
   * @param x x-coordinate /<br>x-координата
   * @param y y-coordinate /<br>y-координата
   */
  addItem(t, e) {
    var s;
    this.element && !((s = this.props) != null && s.disabled) && pt(this.element, "span", (i) => {
      i.onanimationend = () => i.classList.add(this.classEnd), i.ontransitionend = () => {
        var a;
        return (a = i.parentElement) == null ? void 0 : a.removeChild(i);
      }, i.style.setProperty(this.styleX, `${t}px`), i.style.setProperty(this.styleY, `${e}px`), i.classList.add(this.classItem);
    });
  }
}
class $s {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param classItem class name for the element /<br>название класса для элемента
   * @param classEnd class name for the end of animation status /<br>название класса для статуса конец анимации
   * @param styleX property name for the X coordinate /<br>название свойства для координаты X
   * @param styleY property name for the Y coordinate /<br>название свойства для координаты Y
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s = "is-item", i = "is-end", a = "x", r = "y") {
    o(this, "ripple");
    o(this, "onClick");
    this.ripple = new Ls(
      t,
      e.value,
      s,
      i,
      a,
      r
    ), oe(e, (h) => this.ripple.setElement(h)), this.onClick = (h) => this.ripple.onClick(h);
  }
}
class de extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    o(this, "ripple");
    this.ripple = new $s(
      s,
      this.element,
      this.getSubClass("item"),
      this.getStatusClass("end"),
      this.getStyle("x"),
      this.getStyle("y")
    ), this.init();
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      onClick: this.ripple.onClick
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {},
      // :classes [!] System label / Системная метка
      item: this.getSubClass("item")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    const e = this.setup();
    return p("div", {
      ref: this.element,
      class: e.classes.value.main,
      onMousedown: e.onClick
    });
  }
}
const pe = {
  disabled: Boolean
}, _s = {
  ...pe
}, Ps = /* @__PURE__ */ m({
  __name: "M2Ripple",
  props: { ..._s },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new de(
      "m2.ripple",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), Fs = {
  install(n) {
    n.component("M2Ripple", Ps);
  }
}, Vt = {
  label: [String, Number]
}, me = function(n, t, e = "is-label") {
  const s = l(
    () => !!(n != null && n.label || t && "default" in t)
  );
  return {
    isLabel: s,
    renderLabel() {
      var a;
      const i = [];
      if (s.value) {
        const r = [];
        n != null && n.label && r.push(n.label), t && (t != null && t.default) && r.push((a = t.default) == null ? void 0 : a.call(t, {})), r.length > 0 && i.push(ce(
          "span",
          { class: e || "label" },
          r
        ));
      }
      return i;
    }
  };
}, Os = {
  // Values
  icon: [String, Object],
  // Status
  selected: Boolean,
  iconTurn: Boolean,
  iconHide: Boolean
}, fe = {
  ...Os,
  iconTrailing: [String, Object]
}, Ns = function(n, t, e = "is-icon", s = "is-icon-trailing") {
  const i = l(() => tt(
    n == null ? void 0 : n.icon,
    {
      class: e,
      active: n == null ? void 0 : n.selected,
      turn: !(n != null && n.iconTrailing) && (n == null ? void 0 : n.iconTurn),
      hide: n == null ? void 0 : n.iconHide,
      animationType: "type2",
      start: !0,
      "data-event-type": "icon"
    },
    "icon"
  )), a = "iconTrailing" in n ? l(() => tt(
    n.iconTrailing,
    {
      class: s,
      turn: n == null ? void 0 : n.iconTurn,
      end: !0,
      high: !0,
      "data-event-type": "icon-trailing"
    },
    "icon"
  )) : void 0, r = l(() => !!(n != null && n.icon || n != null && n.iconTrailing));
  return {
    iconBind: i,
    trailingBind: a,
    isIcon: r,
    renderIcon() {
      const h = [];
      return t && (n != null && n.icon && t.renderAdd(
        h,
        "icon",
        i.value,
        void 0,
        "icon"
      ), a && (n != null && n.iconTrailing) && t.renderAdd(
        h,
        "icon",
        a.value,
        void 0,
        "iconTrailing"
      )), h;
    }
  };
}, ye = {
  progress: [Boolean, Object]
}, Rs = function(n, t, e = "is-progress", s) {
  const i = l(() => tt(
    n.loading,
    {
      class: e,
      ...s
    },
    "visible"
  ));
  return {
    progressBind: i,
    renderProgress() {
      const a = [];
      return t && (n != null && n.loading) && t.renderAdd(
        a,
        "progress",
        i.value
      ), a;
    }
  };
}, Ht = {
  progress: [Object, Boolean],
  readonly: Boolean,
  disabled: Boolean
}, Ce = function(n) {
  const t = () => !!(n != null && n.disabled);
  return {
    disabledBind: l(() => t() || void 0),
    isEnabled: l(
      () => !(n != null && n.disabled) && !(n != null && n.readonly) && !(n != null && n.loading)
    ),
    isReadonly: l(() => !!(n != null && n.readonly)),
    isDisabled: l(() => t()),
    isProgress: l(() => !!(n != null && n.loading))
  };
};
function Vs(n) {
  var t, e;
  return (n == null ? void 0 : n.clientX) || ((t = n == null ? void 0 : n.targetTouches) == null ? void 0 : t[0].clientX) || ((e = n == null ? void 0 : n.touches) == null ? void 0 : e[0].clientX) || 0;
}
function Hs(n) {
  var t, e;
  return (n == null ? void 0 : n.clientY) || ((t = n == null ? void 0 : n.targetTouches) == null ? void 0 : t[0].clientY) || ((e = n == null ? void 0 : n.touches) == null ? void 0 : e[0].clientY) || 0;
}
function be(n) {
  n.preventDefault(), n.stopPropagation();
}
const ve = {
  to: String,
  value: [String, Number, Object],
  detail: [Object]
}, js = function(n, t, e) {
  const s = (a) => {
    var h, c, u;
    return {
      type: ((u = (c = (h = a.target) == null ? void 0 : h.closest("[data-event-type]")) == null ? void 0 : c.dataset) == null ? void 0 : u.eventType) ?? "click",
      value: n == null ? void 0 : n.value,
      detail: n == null ? void 0 : n.detail
    };
  }, i = () => !1;
  return {
    onClick(a) {
      t.isEnabled.value && !i() ? e == null || e("click", a, s(a)) : be(a);
    }
  };
};
class jt extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    o(this, "icons");
    this.icons = Ns(
      this.props,
      this.components,
      this.getSubClass("icon"),
      this.getSubClass("trailing")
    ), this.init();
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    const e = Ce(this.props);
    return {
      ...me(
        this.props,
        this.slots,
        this.getSubClass("label")
      ),
      ...this.icons,
      ...Rs(
        this.props,
        this.components,
        this.getSubClass("loading"),
        {
          circular: !0,
          inverse: !0
        }
      ),
      ...e,
      ...js(
        this.props,
        e,
        this.emits
      )
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        [this.getStatusClass("icon")]: this.icons.isIcon.value
      },
      // :classes [!] System label / Системная метка
      label: this.getSubClass("label"),
      icon: this.getSubClass("icon"),
      trailing: this.getSubClass("trailing"),
      loading: this.getSubClass("loading")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    var i;
    const e = this.setup(), s = [
      ...e.renderProgress(),
      ...e.renderLabel(),
      ...e.renderIcon()
    ];
    return e.isEnabled.value && this.components.renderAdd(s, "ripple"), p(((i = this.props) == null ? void 0 : i.tag) || "button", {
      ...this.getAttrs(),
      ref: this.element,
      class: e.classes.value.main,
      style: e.styles.value,
      disabled: e.disabledBind.value,
      onClick: e.onClick
    }, s);
  }
}
const it = {
  tag: "button"
}, ke = {
  ...Vt,
  ...fe,
  ...ye,
  ...Ht,
  ...ve,
  // Options
  tag: {
    type: String,
    default: it == null ? void 0 : it.tag
  },
  // :prop [!] System label / Системная метка
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean
}, Bt = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["primary", "secondary", "tertiary", "red", "green", "error", "neutral", "neutralVariant"]
  // :values [!] System label / Системная метка
}, Z = {
  ...it,
  // :default [!] System label / Системная метка
  height: "md",
  filled: !0
}, Ws = {
  ...ke,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  height: {
    type: String,
    default: Z == null ? void 0 : Z.height
  },
  filled: {
    type: Boolean,
    default: Z == null ? void 0 : Z.filled
  },
  outlined: Boolean,
  text: Boolean,
  elevated: Boolean,
  tonal: Boolean,
  palette: String
}, Ys = {
  ...vt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, Wt = /* @__PURE__ */ m({
  __name: "M3Image",
  props: { ...Ys },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-image": !0,
        "m3-image--turn": i.turn,
        "m3-image--disabled": i.disabled,
        "m3-image--hide": i.hide,
        "m3-image--adaptive": i.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new bt(
      "m3.image",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), Dt = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "xl", "2xl", "full"],
  size: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, xt = {
  ...G,
  // :default [!] System label / Системная метка
  animationType: "type1"
}, Ks = {
  ...yt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: xt == null ? void 0 : xt.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: String,
  size: String
}, Yt = /* @__PURE__ */ m({
  __name: "M3Icon",
  props: { ...Ks },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-icon": !0,
        "m3-icon--turn": i.turn,
        "m3-icon--disabled": i.disabled,
        "m3-icon--hide": i.hide,
        [`m3-icon--animationType--${i.animationType}`]: d(Dt.animationType, i.animationType),
        "m3-icon--animationShow": i.animationShow,
        "m3-icon--overlay": i.overlay,
        "m3-icon--dynamic": i.dynamic,
        "m3-icon--start": i.start,
        "m3-icon--end": i.end,
        "m3-icon--high": i.high,
        [`m3-icon--rounded--${i.rounded}`]: d(Dt.rounded, i.rounded),
        [`m3-icon--size--${i.size}`]: d(Dt.size, i.size)
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new ft(
      "m3.icon",
      i,
      {
        emits: s,
        components: {
          image: Wt
        },
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
});
class Gs extends Nt {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, s) {
    super(e, s, [
      "value",
      "visible"
    ]);
    o(this, "timeout");
    o(this, "timeoutReject");
  }
  /**
   * Checks if there are any values.<br>
   * Проверяет, есть ли значения.
   */
  isValue() {
    return this.getValue() > 0;
  }
  /**
   * Returns the tag type for the element.<br>
   * Возвращает тип тега для элемента.
   */
  getTag() {
    var e;
    return (e = this.props) != null && e.circular ? "svg" : "div";
  }
  /**
   * Returns values.<br>
   * Возвращает значения.
   */
  getValue() {
    var e;
    return L(((e = this.props) == null ? void 0 : e.value) ?? 0);
  }
  /**
   * Returns values in percentages.<br>
   * Возвращает значения в процентах.
   */
  getValueInPercent() {
    var e;
    if (this.isValue()) {
      const s = this.getValue(), i = 100 / this.getMax() * s;
      return (e = this.props) != null && e.circular ? i.toString() : `${100 - i}%`;
    }
    return null;
  }
  /**
   * Returns the maximum allowable value.<br>
   * Возвращает максимально допустимое значение.
   */
  getMax() {
    var e;
    return L(((e = this.props) == null ? void 0 : e.max) ?? 100);
  }
  /**
   * Returns the property for style.<br>
   * Возвращает свойство для стиля.
   */
  getStyles() {
    return {
      "--??-sys-value": this.getValueInPercent()
    };
  }
  /**
   * Monitors the animation event for hiding the element.<br>
   * Следит за событием анимации для скрытия элемента.
   * @param animationName A string containing the value of the animation-name that generated the animation /<br>
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  onAnimation({ animationName: e }) {
    e.match("-hidden") && (this.event.hide = !1, this.event.classes = this.initClasses(), this.makeCallbackItem());
  }
  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  async initEvent() {
    this.isChanged("visible") && ([
      this.event.hide,
      this.event.visible
    ] = await this.makeVisible()), this.isChanged("classes", [
      "value",
      "visible"
    ]) && (this.event.classes = this.initClasses());
  }
  /**
   * The mode is triggered when the visible property changes to change the output status of the element.<br>
   * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
   */
  makeVisible() {
    return new Promise((e, s) => {
      var r, h, c;
      const i = (r = this.props) == null ? void 0 : r.visible, a = L(((h = this.props) == null ? void 0 : h.delay) ?? 0);
      clearTimeout(this.timeout), this.isValue() ? e([!1, !1]) : !!((c = this.event) != null && c.visible) !== i && (i && a ? (this.timeout = setTimeout(() => {
        clearTimeout(this.timeoutReject), e(this.initVisible());
      }, a), this.timeoutReject = setTimeout(s, a + 1e3)) : e(this.initVisible()));
    });
  }
  /**
   * Updates dependent data when the visible property changes.<br>
   * Обновляет зависимые данные при изменении свойства visible.
   */
  initVisible() {
    var s;
    const e = (s = this.props) == null ? void 0 : s.visible;
    return [!e, !!e];
  }
  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  initClasses() {
    return {
      "??--hide": this.event.hide,
      "??--visible": this.event.visible,
      "??--value": this.isValue()
    };
  }
}
class Us {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    o(this, "item");
    o(this, "tag", l(() => this.item.getTag()));
    o(this, "valueInPercent", l(() => this.item.getValueInPercent()));
    o(this, "hide", v(!1));
    o(this, "visible", v(!1));
    o(this, "classes", v({}));
    o(this, "styles", l(() => this.item.getStyles()));
    this.props = t, this.item = new Gs(
      t,
      (e) => {
        this.hide.value = e.hide, this.visible.value = e.visible, this.classes.value = e.classes;
      }
    ), R(() => this.item.make());
  }
  /**
   * Monitors the animation event for hiding the element.<br>
   * Следит за событием анимации для скрытия элемента.
   * @param event A string containing the value of the animation-name that generated the animation /<br>
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  onAnimation(t) {
    this.item.onAnimation(t);
  }
}
class Me extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    o(this, "item");
    this.item = new Us(s), this.init();
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      tag: this.item.tag,
      valueInPercent: this.item.valueInPercent,
      hide: this.item.hide,
      visible: this.item.visible,
      onAnimation: (e) => this.item.onAnimation(e)
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        ...this.toClassName(this.item.classes.value)
      },
      // :classes [!] System label / Системная метка
      circle: this.getSubClass("circle"),
      circleSub: this.getSubClass("circleSub")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {
      ...this.toClassName(this.item.styles.value)
    };
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    var i, a;
    const e = this.setup(), s = [];
    return (i = this.props) != null && i.circular && (((a = this.props) == null ? void 0 : a.indeterminate) === "type3" && s.push(
      p("circle", {
        class: e.classes.value.circleSub,
        cx: "24",
        cy: "24",
        r: "20"
      })
    ), s.push(
      p("circle", {
        class: e.classes.value.circle,
        cx: "24",
        cy: "24",
        r: "20"
      })
    )), p(e.tag.value, {
      ref: this.element,
      class: e.classes.value.main,
      style: e.styles.value,
      viewBox: "0 0 48 48",
      onAnimationend: e.onAnimation
    }, s);
  }
}
const b = {
  max: 100,
  delay: 360,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
}, Se = {
  // Values
  value: [Number, String],
  max: {
    type: [Number, String],
    default: b == null ? void 0 : b.max
  },
  // Status
  visible: Boolean,
  // Options
  delay: {
    type: [Number, String],
    default: b == null ? void 0 : b.delay
  },
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: b == null ? void 0 : b.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: b == null ? void 0 : b.indeterminate
  },
  position: {
    type: String,
    default: b == null ? void 0 : b.position
  },
  dense: Boolean,
  inverse: Boolean
}, Xt = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, _ = {
  ...b,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
}, qs = {
  ...Se,
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: _ == null ? void 0 : _.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: _ == null ? void 0 : _.indeterminate
  },
  position: {
    type: String,
    default: _ == null ? void 0 : _.position
  },
  dense: Boolean,
  inverse: Boolean
}, Kt = /* @__PURE__ */ m({
  __name: "M3Progress",
  props: { ...qs },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-progress": !0,
        "m3-progress--linear": i.linear && !i.circular,
        "m3-progress--circular": i.circular,
        [`m3-progress--indeterminate--${i.indeterminate}`]: d(Xt.indeterminate, i.indeterminate),
        [`m3-progress--position--${i.position}`]: d(Xt.position, i.position),
        "m3-progress--dense": i.dense,
        "m3-progress--inverse": i.inverse
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Me(
      "m3.progress",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), Zs = /* @__PURE__ */ m({
  __name: "M3Button",
  props: { ...Ws },
  emits: ["click"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-button": !0,
        "m3-button--focus": i.focus,
        "m3-button--disabled": i.disabled,
        "m3-button--selected": i.selected,
        "m3-button--loading": i.loading,
        "m3-button--readonly": i.readonly,
        [`m3-button--adaptive--${i.adaptive}`]: d(Bt.adaptive, i.adaptive),
        [`m3-button--height--${i.height}`]: d(Bt.height, i.height),
        "m3-button--filled": i.filled && !i.outlined && !i.text && !i.elevated && !i.tonal,
        "m3-button--outlined": i.outlined,
        "m3-button--text": i.text,
        "m3-button--elevated": i.elevated,
        "m3-button--tonal": i.tonal,
        [`m3-palette--${i.palette}`]: d(Bt.palette, i.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new jt(
      "m3.button",
      i,
      {
        emits: s,
        components: {
          icon: Yt,
          progress: Kt
        },
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c), null, {
      default: Pt(() => [
        Ft(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Xs = {
  install(n) {
    n.component("M3Button", Zs);
  }
};
class Js {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param type object for working with input type /<br>объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions /<br>
   * объект для работы с проверкой по регулярным выражениям
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i) {
    this.props = t, this.element = e, this.type = s, this.pattern = i;
  }
  /**
   * Returns the input element.<br>
   * Возвращает элемент ввода.
   */
  get() {
    const t = this.element.value;
    if (t)
      return "input" in t ? t.input : t;
  }
  /**
   * Returns the name of the input element.<br>
   * Возвращает название элемента ввода.
   */
  getName() {
    var t;
    return ((t = this.get()) == null ? void 0 : t.name) ?? "";
  }
  /**
   * Returns data for verification.<br>
   * Возвращает данные для проверки.
   */
  getPattern() {
    var t, e, s, i, a, r, h, c, u, g;
    return {
      name: (t = this.props) == null ? void 0 : t.name,
      type: (e = this.type) == null ? void 0 : e.get(),
      required: (s = this.props) == null ? void 0 : s.required,
      pattern: (i = this.pattern) == null ? void 0 : i.get(),
      step: (a = this.props) == null ? void 0 : a.step,
      min: (r = this.props) == null ? void 0 : r.min,
      max: (h = this.props) == null ? void 0 : h.max,
      minlength: (c = this.props) == null ? void 0 : c.minlength,
      maxlength: (u = this.props) == null ? void 0 : u.maxlength,
      ...((g = this.props) == null ? void 0 : g.input) ?? {}
    };
  }
  /**
   * Search for an element by its name inside a group or by selector.<br>
   * Поиск элемента по его названию внутри группы или по селектору.
   * @param nameSelectors element name or selector /<br>название элемента или селектор
   */
  findByName(t) {
    var i;
    if (t instanceof Element)
      return t;
    const e = (i = this.get()) == null ? void 0 : i.form;
    if (e) {
      const a = e.querySelector(`[name="${t}"]`);
      if (a)
        return a;
    }
    const s = document.querySelector(t);
    if (s)
      return s;
  }
  /**
   * Clear all values to the original ones.<br>
   * Очисти все значения до оригинальных.
   */
  clear() {
    var e;
    const t = this.element.value;
    return t && "clear" in t && ((e = t.clear) == null || e.call(t)), this;
  }
}
class Qs extends Js {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    super(t, e);
  }
  /**
   * Returns data for verification.<br>
   * Возвращает данные для проверки.
   */
  getPattern() {
    var t, e, s;
    return {
      name: (t = this.props) == null ? void 0 : t.name,
      type: "checkbox",
      required: (e = this.props) == null ? void 0 : e.required,
      ...((s = this.props) == null ? void 0 : s.input) ?? {}
    };
  }
}
class ti {
  constructor() {
    o(this, "change", !1);
  }
  /**
   * Returns values.<br>
   * Возвращает значения.
   */
  get() {
    return this.change;
  }
  /**
   * Changes values.<br>
   * Изменяет значения.
   * @param change values for change /<br>значения для изменения
   */
  set(t) {
    return this.change = t, this;
  }
  /**
   * Transitions to editing state.<br>
   * Переходит в состояние редактирования.
   */
  toChange() {
    return this.set(!0);
  }
  /**
   * Restores the original value.<br>
   * Восстанавливает первоначальное значение.
   */
  reset() {
    return this.set(!1);
  }
}
class ei {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i) {
    o(this, "value");
    o(this, "valueIs", !1);
    this.props = t, this.element = e, this.change = s, this.callback = i, this.value = this.getOriginal();
  }
  /**
   * Checks if there are any values.<br>
   * Проверяет, есть ли значения.
   */
  is() {
    var t;
    return this.valueIs || this.getBoolean() || !!((t = this.props) != null && t.placeholder);
  }
  /**
   * Returns the current value.<br>
   * Возвращает текущее значение.
   */
  get() {
    return this.value;
  }
  /**
   * Returns the current value, converted to a string.<br>
   * Возвращает текущее значение, преобразованное в строку.
   */
  getString() {
    var e;
    const t = this.get();
    return W(t) ? t.join(", ") : k(t) ? JSON.stringify(t) : t === !0 ? "1" : t === !1 ? "0" : $(t) ? ((e = t == null ? void 0 : t.toString) == null ? void 0 : e.call(t)) ?? "" : "";
  }
  /**
   * Returns the current value, converted to a number.<br>
   * Возвращает текущее значение, преобразованное в номер.
   */
  getNumber() {
    return this.getBoolean() ? parseFloat(this.getString()) : 0;
  }
  /**
   * Returns the current value of type boolean.<br>
   * Возвращает текущее значение типа boolean.
   */
  getBoolean() {
    return $(this.get());
  }
  /**
   * Returns the original value.<br>
   * Возвращает оригинальное значение.
   */
  getOriginal() {
    var t, e;
    return ((t = this.props) == null ? void 0 : t.value) || ((e = this.props) == null ? void 0 : e.modelValue);
  }
  /**
   * Returns the length of the entered value.<br>
   * Возвращает длину введенного значения.
   */
  getLength() {
    const t = this.get();
    return W(t) ? t.length : k(t) ? Object.keys(t).length : this.getString().length ?? 0;
  }
  /**
   * Changes the value.<br>
   * Изменяет значение.
   * @param value changeable value /<br>изменяемое значение
   */
  set(t) {
    return this.value !== t && (this.value = t, this.change.set(this.getOriginal() !== t), this.callback()), this;
  }
  setByEvent(t) {
    switch (typeof t) {
      case "object":
        t && ("value" in t ? this.set(t.value) : "target" in t && this.setByTarget(t.target), "valueIs" in t && (this.valueIs = t.valueIs));
        break;
      default:
        this.set(t);
        break;
    }
    return this;
  }
  /**
   * Changes the values by the selected element.<br>
   * Изменяет значения по выбранному элементу.
   * @param target selected elements /<br>выбранные элементы
   */
  setByTarget(t) {
    const e = this.isCheckbox(t) ? t.checked : t.value;
    return this.set(e);
  }
  /**
   * Changes the value by the checked property.<br>
   * Изменяет значение по свойству checked.
   * @param event event value /<br>значение события
   */
  setByChecked(t) {
    const e = t.target;
    return this.set(e.checked);
  }
  /**
   * Changes the value for radio type.<br>
   * Изменяет значение для типа radio.
   * @param event event object /<br>объект события
   */
  setByRadio(t) {
    const e = t.target, s = e.checked ? e.value : "";
    return this.set(s);
  }
  /**
   * Changes the values to the original ones.<br>
   * Изменяет значения на оригинальные.
   */
  update() {
    return this.set(this.getOriginal());
  }
  /**
   * Clear all values to the original ones.<br>
   * Очисти все значения до оригинальных.
   */
  clear() {
    return this.set(""), this.element.clear(), this.valueIs = !1, this;
  }
  /**
   * Is the selected type a checkbox.<br>
   * Является ли выбранный тип чекбокс.
   * @param target selected elements /<br>выбранные элементы
   */
  isCheckbox(t) {
    return t.type === "checkbox";
  }
}
class si {
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.value = e;
  }
  /**
   * Returns data for the icon.<br>
   * Возвращает данные для иконки.
   */
  get() {
    var e;
    const t = this.getIcon();
    return tt(
      ((e = this.props) == null ? void 0 : e.icon) ?? t,
      {
        value: t
      }
    );
  }
  /**
   * Returns the name of the icon.<br>
   * Возвращает название иконки.
   */
  getIcon() {
    var t, e, s;
    if (this.value.getBoolean())
      return (t = this.props) == null ? void 0 : t.iconCheckbox;
    if ((e = this.props) != null && e.indeterminate)
      return (s = this.props) == null ? void 0 : s.iconIndeterminate;
  }
}
class ii {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
  }
  /**
   * Returning error text.<br>
   * Возвращают текст ошибки.
   * @param state object for obtaining error information /<br>объект для получения информации об ошибке
   */
  get(t) {
    var s;
    const e = (s = this.props) == null ? void 0 : s.validationCode;
    if (e && !t.valid) {
      if (typeof e == "string")
        return e;
      {
        const i = this.getIndex(t);
        if (i && i in e)
          return e[i];
      }
    }
  }
  /**
   * Returns error index.<br>
   * Возвращает индекс ошибки.
   * @param state object for obtaining error information /<br>объект для получения информации об ошибке
   */
  getIndex(t) {
    for (const e in t)
      if (e !== "valid" && t[e])
        return e;
  }
}
function mt(n, t = "check") {
  const e = pt(void 0, "input", ni(n));
  return {
    group: t,
    input: e,
    pattern: n,
    check(s) {
      return e.value = Lt(s), {
        group: t,
        input: e,
        status: e.checkValidity(),
        validationMessage: e.validationMessage,
        validity: e.validity,
        pattern: n,
        value: s
      };
    }
  };
}
function ni(n) {
  if ($(n)) {
    const t = st(n);
    if (U(n))
      return { pattern: n };
    if (V(t))
      return t;
  }
  return {};
}
class ai {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param value object for working with values /<br>объект для работы со значениями
   * @param match object for working with checks for value matches /<br>объект для работы с проверкой на совпадение значений
   * @param code object for working with error codes /<br>объект для работы с кодами ошибок
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a) {
    o(this, "item");
    o(this, "validation");
    this.props = t, this.element = e, this.value = s, this.code = i, this.match = a, this.item = mt(this.element.getPattern());
  }
  /**
   * Checks if there is an error.<br>
   * Проверяет, есть ли ошибка.
   */
  isError() {
    var t;
    return !((t = this.get()) != null && t.status);
  }
  /**
   * Returns error data.<br>
   * Возвращает данные об ошибке.
   */
  get() {
    var t;
    return this.checkGlobal() ?? this.checkItem() ?? ((t = this.match) == null ? void 0 : t.check()) ?? {
      value: void 0
    };
  }
  /**
   * Returns error string.<br>
   * Возвращает строку об ошибке.
   */
  getMessage() {
    var t;
    return ((t = this.get()) == null ? void 0 : t.validationMessage) ?? "";
  }
  /**
   * Changes the validity data.<br>
   * Изменяет данные о валидности.
   * @param validation values for validity /<br>значения для валидности
   */
  set(t) {
    return "status" in t && "validationMessage" in t && "value" in t ? this.validation = {
      status: t.status,
      required: t == null ? void 0 : t.required,
      input: t == null ? void 0 : t.input,
      validationMessage: t.validationMessage,
      validity: t == null ? void 0 : t.validity,
      pattern: t == null ? void 0 : t.pattern,
      value: t.value
    } : this.validation = void 0, this;
  }
  /**
   * Updating data for input.<br>
   * Обновление данных для input.
   */
  update() {
    return this.item = mt(this.element.getPattern()), this;
  }
  /**
   * Check for global data.<br>
   * Проверка для глобальных данных.
   */
  checkGlobal() {
    var t;
    return (t = this.props) != null && t.validationMessage ? {
      status: !1,
      validationMessage: this.props.validationMessage,
      value: this.value.get()
    } : this.validation ?? void 0;
  }
  /**
   * Check for selected data.<br>
   * Проверка для выбранных данных.
   */
  checkItem() {
    const t = this.item.check(this.value.get());
    if (!(t != null && t.status))
      return t;
  }
}
class oi {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param value object for working with values /<br>объект для работы со значениями
   * @param validation object for working with validity /<br>объект для работы с валидностью
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a) {
    this.props = t, this.change = e, this.value = s, this.validation = i, this.callbackEmit = a;
  }
  /**
   * Call of data change event.<br>
   * Вызов события изменения данных.
   * @param event event object /<br>объект события
   */
  onInput(t) {
    this.validation.set(t), this.value.setByEvent(t), this.on(t);
  }
  /**
   * Triggering the change event after losing focus.<br>
   * Вызов события изменения после потери фокуса.
   * @param event event object /<br>объект события
   */
  onChange(t) {
    this.on(t, "change");
  }
  /**
   * Triggering the event for select change.<br>
   * Вызов события для изменения селект.
   * @param event event object /<br>объект события
   */
  onSelect(t) {
    this.value.setByEvent(t), this.on(t).onChange(t);
  }
  /**
   * Triggering the event for changes in the checkbox.<br>
   * Вызов события для изменения в checkbox.
   * @param event event object /<br>объект события
   */
  onChecked(t) {
    this.value.setByChecked(t), this.on(t).onChange(t);
  }
  /**
   * Triggering the event for changes in the radio.<br>
   * Вызов события для изменения в radio.
   * @param event event object /<br>объект события
   */
  onRadio(t) {
    this.value.setByRadio(t), this.on(t).onChange(t);
  }
  /**
   * Triggering the event to delete all values.<br>
   * Вызов события для удаления всех значений.
   * @param event event object /<br>объект события
   */
  onClear(t) {
    this.value.clear(), this.on(t).onChange(t);
  }
  /**
   * Triggering the event.<br>
   * Вызов события.
   * @param event event object /<br>объект события
   * @param type event type /<br>тип события
   */
  on(t, e = "input") {
    if (this.callbackEmit(e, t, {
      ...this.getValidation(e),
      ...this.getData()
    }), e === "input") {
      const s = this.value.get();
      this.callbackEmit("update:value", s, { value: s }), this.callbackEmit("update:modelValue", s, { value: s });
    }
    return this;
  }
  /**
   * Checks whether additional data needs to be generated for the current event.<br>
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   * @param type event type /<br>тип события
   */
  isValue(t) {
    return !!(t && ["input", "change"].indexOf(t) >= 0);
  }
  /**
   * Returns input data.<br>
   * Возвращает данные об вводе.
   */
  getData() {
    return {
      value: this.value.get(),
      detail: this.props.detail
    };
  }
  /**
   * Returns validity data.<br>
   * Возвращает данные валидности.
   * @param type event type /<br>тип события
   */
  getValidation(t) {
    return this.isValue(t) ? this.validation.get() : {};
  }
}
class ri {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, i) {
    o(this, "element");
    o(this, "change");
    o(this, "value");
    o(this, "icon");
    o(this, "code");
    o(this, "validation");
    o(this, "event");
    this.element = new Qs(
      t,
      e
    ), this.change = new ti(), this.value = new ei(
      t,
      this.element,
      this.change,
      s
    ), this.icon = new si(
      t,
      this.value
    ), this.code = new ii(t), this.validation = new ai(
      t,
      this.element,
      this.value,
      this.code
    ), this.event = new oi(
      t,
      this.change,
      this.value,
      this.validation,
      i
    );
  }
  /**
   * Value update.<br>
   * Обновление значения.
   */
  update() {
    return this.value.update(), this;
  }
}
class hi {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    o(this, "checkbox");
    o(this, "value", v(!1));
    o(this, "iconBind", v({}));
    o(this, "onInput", (t) => this.checkbox.event.onChecked(t));
    this.checkbox = new ri(
      t,
      e,
      () => {
        this.update();
      },
      s
    ), R(() => this.checkbox.value.update()), R(() => {
      this.update();
    });
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    return this.value.value = this.checkbox.value.getBoolean(), this.iconBind.value = this.checkbox.icon.get(), this;
  }
}
const ut = {
  // Status
  disabled: Boolean,
  // Values
  counter: [String, Number],
  maxlength: [String, Number],
  // Message
  helperMessage: String,
  validationMessage: String
}, ci = {
  disabled: ut.disabled,
  helperMessage: ut.helperMessage,
  validationMessage: ut.validationMessage
}, li = function(n, t) {
  const e = l(() => ({
    disabled: n == null ? void 0 : n.disabled,
    counter: n == null ? void 0 : n.counter,
    maxlength: n == null ? void 0 : n.maxlength,
    helperMessage: n == null ? void 0 : n.helperMessage,
    validationMessage: n == null ? void 0 : n.validationMessage
  }));
  return {
    messageBind: e,
    renderFieldMessage() {
      const s = [];
      return t && t.renderAdd(
        s,
        "message",
        e.value
      ), s;
    }
  };
};
class ui extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    o(this, "checkbox");
    /**
     * Rendering of the main input.<br>
     * Рендеринг главного input.
     */
    o(this, "renderInput", () => {
      const e = this.setup();
      return p("input", {
        class: e.classes.value.input,
        name: this.props.name,
        type: "checkbox",
        checked: e.value.value,
        on: this.props.on,
        onInput: e.onInput
      });
    });
    /**
     * Rendering of the hidden input.<br>
     * Рендеринг скрытого input.
     */
    o(this, "renderInputHidden", () => p("input", {
      name: this.props.name,
      type: "hidden",
      value: "0"
    }));
    /**
     * Rendering of the checkbox element.<br>
     * Рендеринг элемента checkbox.
     */
    o(this, "renderChecked", () => {
      const e = this.setup(), s = [
        p("span", {
          class: e.classes.value.itemIcon
        }, [
          this.components.renderOne(
            "icon",
            e.iconBind.value
          )
        ])
      ];
      return this.components.renderAdd(
        s,
        "ripple",
        {
          disabled: e.isDisabled.value
        }
      ), p("span", {
        class: e.classes.value.item
      }, s);
    });
    /**
     * Rendering of the informational text element.<br>
     * Рендеринг элемента информационного текста.
     */
    o(this, "renderInfo", () => {
      const e = this.setup(), s = [
        ...e.renderLabel(),
        ...e.renderFieldMessage()
      ];
      return p("span", {
        class: e.classes.value.info
      }, s);
    });
    this.checkbox = new hi(
      s,
      this.element,
      (a, r, h) => {
        var c;
        (c = this.emits) == null || c.call(
          this,
          a,
          r,
          h
        );
      }
    ), this.init();
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      value: this.checkbox.value,
      iconBind: this.checkbox.iconBind,
      renderInput: this.renderInput,
      renderInputHidden: this.renderInputHidden,
      renderChecked: this.renderChecked,
      renderInfo: this.renderInfo,
      onInput: this.checkbox.onInput,
      ...me(
        this.props,
        this.slots,
        this.getSubClass(["info", "label"])
      ),
      ...Ce(this.props),
      ...li(
        this.props,
        this.components
      )
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {},
      // :classes [!] System label / Системная метка
      input: this.getSubClass("input"),
      item: this.getSubClass("item"),
      itemIcon: this.getSubClass("item__icon"),
      info: this.getSubClass("info"),
      infoLabel: this.getSubClass("info__label")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    };
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    const e = this.setup(), s = [
      e.renderInputHidden(),
      e.renderInput(),
      e.renderChecked()
    ];
    return e.isLabel.value && s.push(e.renderInfo()), p("label", {
      ...this.getAttrs(),
      ref: this.element,
      class: e.classes.value.main
    }, s);
  }
}
class gi {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
  }
  /**
   * Checks if there is text.<br>
   * Проверяет, есть ли текст.
   */
  is() {
    return !!this.get();
  }
  /**
   * Checks if there is an error.<br>
   * Проверяет, есть ли ошибка.
   */
  isValidation() {
    var t;
    return $((t = this.props) == null ? void 0 : t.validationMessage);
  }
  /**
   * Returns text.<br>
   * Возвращает текст.
   */
  get() {
    var t;
    if (this.isValidation())
      return this.props.validationMessage;
    if ($((t = this.props) == null ? void 0 : t.helperMessage))
      return this.props.helperMessage;
  }
}
class di {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
  }
  /**
   * Checks if it is necessary to display the number of input characters.<br>
   * Проверяет, надо ли выводить количество вводимых символов.
   */
  is() {
    return this.getCounter() > 0 || this.isMax();
  }
  /**
   * Checks if it is necessary to display the maximum available number of characters.<br>
   * Проверяет, надо ли выводить максимальное доступное количество символов.
   */
  isMax() {
    return this.getMax() > 0;
  }
  /**
   * Returns text for output.<br>
   * Возвращает текст для вывода.
   */
  get() {
    return this.isMax() ? `${this.getCounter()} / ${this.getMax()}` : this.getCounter().toString();
  }
  /**
   * Returns the number of input characters.<br>
   * Возвращает количество вводимых символов.
   */
  getCounter() {
    var t;
    return L(((t = this.props) == null ? void 0 : t.counter) ?? 0);
  }
  /**
   * Returns the maximum available input number.<br>
   * Возвращает максимально доступное вводимое число.
   */
  getMax() {
    var t;
    return L(((t = this.props) == null ? void 0 : t.maxlength) ?? 0);
  }
}
class pi {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor(t) {
    o(this, "message");
    o(this, "counter");
    this.props = t, this.message = new gi(t), this.counter = new di(t);
  }
  /**
   * Checks if there are values for outputting the element.<br>
   * Проверяет, есть ли значения для вывода элемента.
   */
  is() {
    var t;
    return !((t = this.props) != null && t.disabled) && (this.message.is() || this.counter.is());
  }
  /**
   * Returns data for the main style class.<br>
   * Возвращает данные для главного класса стиля.
   */
  classes() {
    return {
      "??--validation": this.message.isValidation()
    };
  }
}
class mi {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor(t) {
    o(this, "item");
    o(this, "is", l(() => this.item.is()));
    o(this, "isMessage", l(() => this.item.message.is()));
    o(this, "isValidation", l(() => this.item.message.isValidation()));
    o(this, "isCounter", l(() => this.item.counter.is()));
    o(this, "isMax", l(() => this.item.counter.isMax()));
    o(this, "message", l(() => this.item.message.get()));
    o(this, "counter", l(() => this.item.counter.get()));
    o(this, "classes", l(() => this.item.classes()));
    this.item = new pi(t);
  }
}
class fi extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    o(this, "message");
    /**
     * Rendering text.<br>
     * Рендеринг текста.
     */
    o(this, "renderInfo", () => {
      const e = this.setup();
      return p("div", {
        key: "message",
        class: e.classes.value.info,
        innerHTML: e.message.value
      });
    });
    /**
     * Rendering the entered number of characters.<br>
     * Рендеринг введенного количества символов.
     */
    o(this, "renderCounter", () => {
      const e = this.setup();
      return p("div", {
        key: "counter",
        class: e.classes.value.counter,
        innerHTML: e.counter.value
      });
    });
    this.message = new mi(s), this.init();
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      is: this.message.is,
      isMessage: this.message.isMessage,
      isValidation: this.message.isValidation,
      isCounter: this.message.isCounter,
      isMax: this.message.isMax,
      message: this.message.message,
      counter: this.message.counter,
      renderInfo: this.renderInfo,
      renderCounter: this.renderCounter
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        ...this.toClassName(this.message.classes.value)
      },
      // :classes [!] System label / Системная метка
      info: this.getSubClass("info"),
      counter: this.getSubClass("counter")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    const e = this.setup(), s = [];
    if (e.isMessage.value && s.push(e.renderInfo()), e.isCounter.value && s.push(e.renderCounter()), e.is.value)
      return p("div", {
        ...this.getAttrs(),
        ref: this.element,
        key: "main",
        class: e.classes.value.main
      }, s);
  }
}
const yi = {
  ...ut
}, we = /* @__PURE__ */ m({
  __name: "M3FieldMessage",
  props: { ...yi },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-fieldMessage": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new fi(
      "m3.fieldMessage",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), Ci = {
  ...pe
}, Be = /* @__PURE__ */ m({
  __name: "M3Ripple",
  props: { ...Ci },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new de(
      "m3.ripple",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), Jt = {
  type: "text",
  autocomplete: "off"
}, De = {
  ...Vt,
  ...Ht,
  // Values
  name: String,
  value: String,
  modelValue: String,
  detail: Object,
  // Input
  type: {
    type: String,
    default: Jt.type
  },
  inputmode: String,
  spellcheck: Boolean,
  required: Boolean,
  pattern: String,
  match: [String, HTMLInputElement, Object],
  arrow: Boolean,
  step: [String, Number],
  min: [String, Number],
  max: [String, Number],
  minlength: [String, Number],
  maxlength: [String, Number],
  autofocus: Boolean,
  autocomplete: {
    type: String,
    default: Jt.autocomplete
  },
  input: Object,
  // Messages & Validation
  placeholder: String,
  helperMessage: String,
  validationMessage: String,
  validationCode: [String, Object],
  // On
  on: Object,
  "onUpdate:value": Function,
  "onUpdate:modelValue": Function
}, bi = {
  ...De
}, vi = {}, It = {
  ...De,
  ...ci,
  // Values
  value: [String, Boolean],
  modelValue: [String, Boolean],
  icon: [String, Object],
  indeterminate: Boolean,
  // Styles
  iconCheckbox: String,
  iconIndeterminate: String,
  // :prop [!] System label / Системная метка
  comp: Boolean,
  required: Boolean
}, Qt = {
  ...vi,
  iconCheckbox: "check",
  iconIndeterminate: "indeterminate"
}, ki = {
  ...It,
  iconCheckbox: {
    type: It.iconCheckbox,
    default: Qt.iconCheckbox
  },
  iconIndeterminate: {
    type: It.iconIndeterminate,
    default: Qt.iconIndeterminate
  },
  // :prop [!] System label / Системная метка
  required: Boolean
}, Mi = /* @__PURE__ */ m({
  __name: "M3Checkbox",
  props: { ...ki },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-checkbox": !0,
        "m3-checkbox--required": i.required
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new ui(
      "m3.checkbox",
      i,
      {
        emits: s,
        components: {
          icon: Wt,
          message: we,
          ripple: Be
        },
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), Si = {
  install(n) {
    n.component("M3Checkbox", Mi);
  }
};
class wi extends jt {
}
const gt = {
  tag: "span"
}, Bi = {
  ...Vt,
  ...fe,
  ...ye,
  ...Ht,
  ...ve,
  // Options
  tag: {
    type: String,
    default: gt == null ? void 0 : gt.tag
  },
  // :prop [!] System label / Системная метка
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean
}, At = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["primary", "secondary", "tertiary", "red", "green", "error", "neutral", "neutralVariant"]
  // :values [!] System label / Системная метка
}, P = {
  ...gt,
  // :default [!] System label / Системная метка
  height: "md",
  outlined: !0,
  input: !0
}, Di = {
  ...Bi,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  height: {
    type: String,
    default: P == null ? void 0 : P.height
  },
  outlined: {
    type: Boolean,
    default: P == null ? void 0 : P.outlined
  },
  elevated: Boolean,
  input: {
    type: Boolean,
    default: P == null ? void 0 : P.input
  },
  assist: Boolean,
  filter: Boolean,
  suggestion: Boolean,
  avatar: Boolean,
  dragged: Boolean,
  palette: String
}, xi = /* @__PURE__ */ m({
  __name: "M3Chip",
  props: { ...Di },
  emits: ["click"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-chip": !0,
        "m3-chip--focus": i.focus,
        "m3-chip--disabled": i.disabled,
        "m3-chip--selected": i.selected,
        "m3-chip--loading": i.loading,
        "m3-chip--readonly": i.readonly,
        [`m3-chip--adaptive--${i.adaptive}`]: d(At.adaptive, i.adaptive),
        [`m3-chip--height--${i.height}`]: d(At.height, i.height),
        "m3-chip--outlined": i.outlined && !i.elevated,
        "m3-chip--elevated": i.elevated,
        "m3-chip--input": i.input && !i.assist && !i.filter && !i.suggestion,
        "m3-chip--assist": i.assist,
        "m3-chip--filter": i.filter,
        "m3-chip--suggestion": i.suggestion,
        "m3-chip--avatar": i.avatar,
        "m3-chip--dragged": i.dragged,
        [`m3-palette--${i.palette}`]: d(At.palette, i.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new wi(
      "m3.chip",
      i,
      {
        emits: s,
        components: {
          icon: Yt,
          progress: Kt
        },
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c), null, {
      default: Pt(() => [
        Ft(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ii = {
  install(n) {
    n.component("M3Chip", xi);
  }
}, Ai = {
  install(n) {
    n.component("M3FieldMessage", we);
  }
}, zi = {
  install(n) {
    n.component("M3Icon", Yt);
  }
}, Ti = {
  install(n) {
    n.component("M3Image", Wt);
  }
};
class Ei extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, e, s) {
    super(
      t,
      e,
      s
    ), this.init();
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      // TODO: List of parameters for setup
      // TODO: список параметры для setup
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    };
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    var t;
    return p("div", {
      // ...this.getAttrs(),
      ref: this.element,
      class: (t = this.classes) == null ? void 0 : t.value.main
    });
  }
}
const Li = {
  ...bi
}, $i = /* @__PURE__ */ m({
  __name: "M3Input",
  props: { ...Li },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // TODO: User state classes / Пользовательские классы состояния
        // :classes-values [!] System label / Системная метка
        "m3-input": !0
        // :classes-values [!] System label / Системная метка
      }
      // TODO: User subclasses / Пользовательские подклассы
    })), r = l(() => ({
      // TODO: User styles / Пользовательские стили
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Ei(
      "m3.input",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), _i = {
  install(n) {
    n.component("M3Input", $i);
  }
};
class Pi {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
  }
  /**
   * Is the mask numeric.<br>
   * Является ли маска числовой.
   */
  isNumber() {
    return this.get() === "number";
  }
  /**
   * Is the input mask a currency value.<br>
   * Является ли маска для ввода валютным значением.
   */
  isCurrency() {
    return this.get() === "currency";
  }
  /**
   * Is the input mask one of the numeric types.<br>
   * Является ли маска для ввода одним из числовых типов.
   */
  isCurrencyOrNumber() {
    return this.isNumber() || this.isCurrency();
  }
  /**
   * Is this a mask for email input.<br>
   * Является ли это маской для ввода email.
   */
  isEmail() {
    return this.get() === "email";
  }
  /**
   * Is the mask one of the types for time input.<br>
   * Является ли маска одним из типов для ввода времени.
   */
  isTime() {
    return [
      "full",
      "datetime",
      "time",
      "hour-minute",
      "hour",
      "minute",
      "second"
    ].indexOf(this.get()) !== -1;
  }
  /**
   * Is the mask one of the types for date input.<br>
   * Является ли маска одним из типов для ввода даты.
   */
  isDate() {
    return this.isTime() || [
      "date",
      "year-month",
      "month",
      "day"
    ].indexOf(this.get()) !== -1;
  }
  /**
   * Returns the type of mask.<br>
   * Возвращает тип маски.
   */
  get() {
    var t;
    return ((t = this.props) == null ? void 0 : t.type) ?? "text";
  }
  /**
   * Returns the type of mask for working with dates.<br>
   * Возвращает тип маски для работы с датами.
   */
  getByDate() {
    return this.isDate() ? this.get() : "date";
  }
}
class Fi {
  constructor() {
    o(this, "chars", []);
    o(this, "start", !1);
  }
  /**
   * Checks for records in the buffer.
   * Проверяет наличие записей в буфере.
   */
  is() {
    return this.chars.length > 0;
  }
  /**
   * Gets a list of all records in the buffer.<br>
   * Получает список всех записей в буфере.
   */
  get() {
    return this.chars;
  }
  /**
   * Inserts a new input symbol into the buffer.<br>
   * Вставляет новый символ ввода в буфер.
   * @param key symbol that needs to be added /<br>символ, который необходимо добавить
   */
  add(t) {
    return this.chars.push(t), this;
  }
  /**
   * Starts buffering data if data is being processed.<br>
   * Начинает буферизировать данные, если в обработке идут данные.
   * @param key symbol that needs to be added /<br>символ, который необходимо добавить
   */
  go(t) {
    return this.start ? (this.add(t), !1) : (this.goStart(), !0);
  }
  /**
   * Starts buffering data
   * Начинает буферизировать данные.
   */
  goStart() {
    return this.start = !0, this;
  }
  /**
   * Resets all values to the original.<br>
   * Сбрасывает все значения до исходного.
   */
  reset() {
    return this.resetChars(), this.start = !1, this;
  }
  /**
   * Resets the saved values.<br>
   * Сбрасывает сохраненные значения.
   */
  resetChars() {
    return this.chars = [], this;
  }
}
class Oi {
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    o(this, "value", !1);
    this.buffer = t;
  }
  /**
   * Checks for focus on the element.<br>
   * Проверяет наличие фокуса у элемента.
   */
  is() {
    return this.value;
  }
  /**
   * Set the element state to focused.<br>
   * Установить состояние элемента на фокусированное.
   */
  in() {
    this.value = !0, this.buffer.reset();
  }
  /**
   * Reset the focus of the element.<br>
   * Сбросить фокус элемента.
   */
  out() {
    this.value = !1, this.buffer.reset();
  }
}
class Ni {
  constructor() {
    o(this, "value", {});
  }
  /**
   * Checks if the selected group has a value.<br>
   * Проверяет, есть ли значение у выбранной группы.
   * @param groupName group name /<br>название группы
   */
  is(t) {
    return t in this.value;
  }
  /**
   * Returns the filling list by groups.<br>
   * Возвращает список заполнения по группам.
   */
  get() {
    return this.value;
  }
  /**
   * Returns data for caching.<br>
   * Возвращает данные для кеширования.
   */
  getCode() {
    return [
      ...Object.keys(this.value),
      ...Object.values(this.value)
    ];
  }
  /**
   * Returns the fill status by the group name.<br>
   * Возвращает заполненность по названию группы.
   * @param groupName group name /<br>название группы
   */
  getByIndex(t) {
    var e;
    return ((e = this.value) == null ? void 0 : e[t]) ?? 0;
  }
  /**
   * Adding a fill feature to the group for another 1 character.<br>
   * Добавление признака заполнения у группы на еще 1 символ.
   * @param groupName group name /<br>название группы
   */
  add(t) {
    return this.value[t] = this.getByIndex(t) + 1, this;
  }
  /**
   * Decrease by 1 the sign of the filled character in the group.<br>
   * Уменьшение на 1 признака заполненного символа у группы.
   * @param groupName group name /<br>название группы
   */
  pop(t) {
    return this.is(t) ? (--this.value[t] <= 0 && delete this.value[t], !0) : !1;
  }
  /**
   * Reset all records to the initial state.<br>
   * Сброс всех записей до начального состояния.
   */
  reset() {
    return this.value = {}, this;
  }
  /**
   * Process the mask so that the length of the rubber records increases
   * depending on the number of filled records.<br>
   * Обрабатывайте маску так, чтобы длина резиновых записей увеличивалась в
   * зависимости от количества заполненных записей.
   * @param mask selected mask /<br>выбранная маска
   */
  expandMask(t) {
    let e = t;
    return S(this.value, (s, i) => {
      e = e.replace(
        Qe(i, "g", "([:value]+)"),
        (a) => `${a}${$t(i, s)}`
      );
    }), e;
  }
}
class Ri {
  constructor() {
    o(this, "char", "");
  }
  /**
   * Checks if the active group has a transition symbol.<br>
   * Проверяет, есть ли у активной группы символ перехода.
   */
  is() {
    return this.char !== "";
  }
  /**
   * Checks if the current character is a transition character.<br>
   * Проверяет, является ли текущий символ символом перехода.
   * @param char transition symbol /<br>символ перехода
   */
  isChar(t) {
    return this.char === t;
  }
  /**
   * Returns the current transition symbol.<br>
   * Возвращает текущий символ перехода.
   */
  get() {
    return this.char;
  }
  /**
   * Changes the transition symbol.<br>
   * Изменяет символ перехода.
   * @param char transition symbol /<br>символ перехода
   */
  set(t) {
    return this.char = t, this;
  }
  /**
   * Resets the values to the base ones.<br>
   * Сбрасывает значения до базовых.
   */
  reset() {
    return this.set("");
  }
}
class Vi {
  constructor() {
    o(this, "length", 0);
  }
  /**
   * Checks if the values are filled in.<br>
   * Проверяет, заполнены ли значения.
   */
  is() {
    return this.get() > 0;
  }
  /**
   * Getting the length of input symbols.<br>
   * Получение длины вводимых символов.
   */
  get() {
    return this.length;
  }
  /**
   * Changing the length of input symbols.<br>
   * Изменение длины вводимых символов.
   * @param length new length /<br>новая длина
   */
  set(t) {
    return this.length = t, this;
  }
}
function K(n) {
  if (n instanceof Date)
    return n;
  if (ot(n))
    return /* @__PURE__ */ new Date();
  if (typeof n == "number")
    return new Date(n);
  let t = n, e = "";
  n.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (i, a, r) => (t = a, e = r, i));
  const s = (/^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) ?? (/^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) ?? t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s}${e}`);
}
class xe {
  /**
   * Constructor
   * @param name value name /<br>название значения
   * @param isSession should we use a session? /<br>использовать ли сессию?
   */
  constructor(t, e = !1) {
    o(this, "value");
    o(this, "age");
    this.name = t, this.isSession = e;
    const s = `${e ? "session" : "storage"}#${t}`;
    if (s in zt)
      return zt[s];
    const i = this.getValue();
    i && (this.value = i.value, this.age = i.age), zt[s] = this;
  }
  /**
   * Getting data from local storage.<br>
   * Получение данных из локального хранилища.
   * @param defaultValue default value /<br>значение по умолчанию
   * @param cache cache time /<br>время кэширования
   */
  get(t, e) {
    if (this.value && this.isCache(e))
      return this.value;
    if (t)
      return this.set(t);
  }
  /**
   * Changing data in storage.<br>
   * Изменение данных в хранилище.
   * @param value new values /<br>новые значения
   */
  set(t) {
    var e, s;
    return this.value = st(t), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (e = this.getMethod()) == null || e.removeItem(this.getIndex()) : (s = this.getMethod()) == null || s.setItem(this.getIndex(), JSON.stringify({
      value: this.value,
      age: this.age
    })), this.value;
  }
  /**
   * Checks for storage time limit.<br>
   * Проверяет на лимит времени хранения.
   * @param cache cache time /<br>время кэширования
   */
  isCache(t) {
    return ot(t) || this.age && this.age + t * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${Rt("prefix", "")}${this.name}`;
  }
  /**
   * Getting data from storage.<br>
   * Получение данных из хранилища.
   */
  getValue() {
    var e;
    const t = (e = this.getMethod()) == null ? void 0 : e.getItem(this.getIndex());
    if (t)
      try {
        return JSON.parse(t);
      } catch {
      }
  }
}
const zt = {}, Hi = [
  {
    country: "US",
    countryAlternative: [
      "EN"
    ],
    language: "en",
    languageAlternative: [
      "us"
    ],
    firstDay: "Su",
    zone: "America/New_York",
    phoneCode: "1",
    phoneMask: [
      "+1-***-***-****"
    ]
  },
  {
    country: "GB",
    countryAlternative: [
      "UK"
    ],
    language: "en",
    firstDay: "Mo",
    zone: "Europe/London",
    phoneCode: "44",
    phoneMask: [
      "+44-**-****-****"
    ]
  },
  {
    country: "AF",
    language: "fa",
    firstDay: "Sa",
    zone: "Asia/Kabul",
    phoneCode: "93",
    phoneMask: [
      "+93-**-***-****"
    ]
  },
  {
    country: "AL",
    language: "sq",
    firstDay: "Mo",
    zone: "Europe/Tirane",
    phoneCode: "355",
    phoneMask: [
      "+355-***-***-***"
    ]
  },
  {
    country: "DZ",
    language: "ar",
    firstDay: "Sa",
    zone: "Africa/Algiers",
    phoneCode: "213",
    phoneMask: [
      "+213-**-***-****"
    ]
  },
  {
    country: "AS",
    language: "en",
    firstDay: null,
    zone: "Pacific/Pago_Pago",
    phoneCode: "1-684",
    phoneMask: [
      "+1-684-***-****"
    ]
  },
  {
    country: "AD",
    language: "ca",
    firstDay: "Mo",
    zone: "Europe/Andorra",
    phoneCode: "376",
    phoneMask: [
      "+376-***-***"
    ]
  },
  {
    country: "AO",
    language: "pt",
    firstDay: null,
    zone: "Africa/Lagos",
    phoneCode: "244",
    phoneMask: [
      "+244-***-***-***"
    ]
  },
  {
    country: "AI",
    language: "en",
    firstDay: null,
    zone: "America/Port_of_Spain",
    phoneCode: "1-264",
    phoneMask: [
      "+1-264-***-****"
    ]
  },
  {
    country: "AQ",
    language: "",
    firstDay: null,
    zone: "Antarctica/Troll",
    phoneCode: "672",
    phoneMask: [
      "+672-1-**-***"
    ]
  },
  {
    country: "AG",
    language: "en",
    firstDay: null,
    zone: "America/Antigua",
    phoneCode: "1-268",
    phoneMask: [
      "+1-268-***-****"
    ]
  },
  {
    country: "AR",
    language: "es",
    firstDay: "Su",
    zone: "America/Argentina/Buenos_Aires",
    phoneCode: "54",
    phoneMask: [
      "+54-***-***-****"
    ]
  },
  {
    country: "AM",
    language: "hy",
    firstDay: "Mo",
    zone: "Asia/Yerevan",
    phoneCode: "374",
    phoneMask: [
      "+374-**-***-***"
    ]
  },
  {
    country: "AW",
    language: "nl",
    firstDay: null,
    zone: "America/Curacao",
    phoneCode: "297",
    phoneMask: [
      "+297-***-****"
    ]
  },
  {
    country: "AU",
    language: "en",
    firstDay: "Mo",
    zone: "Australia/Sydney",
    phoneCode: "61",
    phoneMask: [
      "+61-*-****-****"
    ]
  },
  {
    country: "AT",
    language: "de",
    firstDay: "Mo",
    zone: "Europe/Vienna",
    phoneCode: "43",
    phoneMask: [
      "+43-***-***-****"
    ]
  },
  {
    country: "AZ",
    language: "az",
    firstDay: "Mo",
    zone: "Asia/Baku",
    phoneCode: "994",
    phoneMask: "+994-**-***-**-**"
  },
  {
    country: "BS",
    language: "en",
    firstDay: null,
    zone: "America/Nassau",
    phoneCode: "1-242",
    phoneMask: "+1-242-***-****"
  },
  {
    country: "BH",
    language: "ar",
    firstDay: "Sa",
    zone: "Asia/Bahrain",
    phoneCode: "973",
    phoneMask: "+973-****-****"
  },
  {
    country: "BD",
    language: "bn",
    firstDay: null,
    zone: "Asia/Dhaka",
    phoneCode: "880",
    phoneMask: "+880-**-***-***"
  },
  {
    country: "BB",
    language: "en",
    firstDay: null,
    zone: "America/Barbados",
    phoneCode: "1-246",
    phoneMask: "+1-246-***-****"
  },
  {
    country: "BY",
    language: "be",
    firstDay: "Mo",
    zone: "Europe/Minsk",
    phoneCode: "375",
    phoneMask: "+375-**-***-**-**"
  },
  {
    country: "BE",
    language: "nl",
    firstDay: "Mo",
    zone: "Europe/Brussels",
    phoneCode: "32",
    phoneMask: "+32-***-***-***"
  },
  {
    country: "BZ",
    language: "en",
    firstDay: "Su",
    zone: "America/Belize",
    phoneCode: "501",
    phoneMask: "+501-***-****"
  },
  {
    country: "BJ",
    language: "fr",
    firstDay: null,
    zone: "Africa/Lagos",
    phoneCode: "229",
    phoneMask: "+229-**-**-****"
  },
  {
    country: "BM",
    language: "en",
    firstDay: null,
    zone: "Atlantic/Bermuda",
    phoneCode: "1-441",
    phoneMask: "+1-441-***-****"
  },
  {
    country: "BT",
    language: "dz",
    firstDay: null,
    zone: "Asia/Thimphu",
    phoneCode: "975",
    phoneMask: [
      "+975-*-***-***",
      "+975-17-***-***"
    ]
  },
  {
    country: "BO",
    language: "es",
    firstDay: "Su",
    zone: "America/La_Paz",
    phoneCode: "591",
    phoneMask: "+591-*-***-****"
  },
  {
    country: "BA",
    language: "bs",
    firstDay: null,
    zone: "Europe/Belgrade",
    phoneCode: "387",
    phoneMask: [
      "+387-**-****",
      "+387-**-*****"
    ]
  },
  {
    country: "BW",
    language: "en",
    firstDay: null,
    zone: "Africa/Maputo",
    phoneCode: "267",
    phoneMask: "+267-**-***-***"
  },
  {
    country: "BR",
    language: "pt",
    firstDay: "Su",
    zone: "America/Sao_Paulo",
    phoneCode: "55",
    phoneMask: [
      "+55-**-****-****",
      "+55-**-*****-****"
    ]
  },
  {
    country: "IO",
    language: "en",
    firstDay: null,
    zone: "Indian/Chagos",
    phoneCode: "246",
    phoneMask: "+246-***-****"
  },
  {
    country: "VG",
    language: "en",
    firstDay: null,
    zone: "America/Port_of_Spain",
    phoneCode: "1-284",
    phoneMask: "+1-284-***-****"
  },
  {
    country: "BN",
    language: "ms",
    firstDay: "Mo",
    zone: "Asia/Brunei",
    phoneCode: "673",
    phoneMask: "+673-***-****"
  },
  {
    country: "BG",
    language: "bg",
    firstDay: "Mo",
    zone: "Europe/Sofia",
    phoneCode: "359",
    phoneMask: "+359-***-***-***"
  },
  {
    country: "BF",
    language: "fr",
    firstDay: null,
    zone: "Africa/Abidjan",
    phoneCode: "226",
    phoneMask: "+226-**-**-****"
  },
  {
    country: "BI",
    language: "fr",
    firstDay: null,
    zone: "Africa/Maputo",
    phoneCode: "257",
    phoneMask: "+257-**-**-****"
  },
  {
    country: "KH",
    language: "km",
    firstDay: null,
    zone: "Asia/Phnom_Penh",
    phoneCode: "855",
    phoneMask: "+855-**-***-***"
  },
  {
    country: "CM",
    phoneCode: "237",
    zone: "Africa/Lagos",
    language: "en",
    firstDay: null,
    phoneMask: "+237-****-****"
  },
  {
    country: "CA",
    phoneCode: "1",
    zone: "America/Toronto",
    language: "en",
    firstDay: "Su",
    phoneMask: "+1-***-***-****"
  },
  {
    country: "CV",
    phoneCode: "238",
    zone: "Atlantic/Cape_Verde",
    language: "pt",
    firstDay: null,
    phoneMask: "+238-***-**-**"
  },
  {
    country: "KY",
    phoneCode: "1-345",
    zone: "America/Cayman",
    language: "en",
    firstDay: null,
    phoneMask: "+1-345-***-****"
  },
  {
    country: "CF",
    phoneCode: "236",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+236-**-**-****"
  },
  {
    country: "TD",
    phoneCode: "235",
    zone: "Africa/Ndjamena",
    language: "fr",
    firstDay: null,
    phoneMask: "+235-**-**-**-**"
  },
  {
    country: "CL",
    phoneCode: "56",
    zone: "America/Santiago",
    language: "es",
    firstDay: "Su",
    phoneMask: "+56-*-****-****"
  },
  {
    country: "CN",
    phoneCode: "86",
    zone: "Asia/Shanghai",
    language: "zh",
    firstDay: "Su",
    phoneMask: [
      "+86-***-****-***",
      "+86-***-****-****",
      "+86-**-*****-*****"
    ]
  },
  {
    country: "CX",
    phoneCode: "61",
    zone: "Indian/Christmas",
    language: "en",
    firstDay: null
  },
  {
    country: "CC",
    phoneCode: "61",
    zone: "Indian/Cocos",
    language: "ms",
    firstDay: null
  },
  {
    country: "CO",
    phoneCode: "57",
    zone: "America/Bogota",
    language: "es",
    firstDay: "Su",
    phoneMask: "+57-***-***-****"
  },
  {
    country: "KM",
    phoneCode: "269",
    zone: "Indian/Comoro",
    language: "ar",
    firstDay: null,
    phoneMask: "+269-**-*****"
  },
  {
    country: "CK",
    phoneCode: "682",
    zone: "Pacific/Rarotonga",
    language: "en",
    firstDay: null,
    phoneMask: "+682-**-***"
  },
  {
    country: "CR",
    phoneCode: "506",
    zone: "America/Costa_Rica",
    language: "es",
    firstDay: "Su",
    phoneMask: "+506-****-****"
  },
  {
    country: "HR",
    phoneCode: "385",
    zone: "Europe/Belgrade",
    language: "hr",
    firstDay: "Mo",
    phoneMask: "+385-**-***-***"
  },
  {
    country: "CU",
    phoneCode: "53",
    zone: "America/Havana",
    language: "es",
    firstDay: null,
    phoneMask: "+53-*-***-****"
  },
  {
    country: "CW",
    phoneCode: "599",
    zone: "America/Curacao",
    language: "nl",
    firstDay: null,
    phoneMask: "+599-***-****"
  },
  {
    country: "CY",
    phoneCode: "357",
    zone: "Asia/Nicosia",
    language: "el",
    firstDay: null,
    phoneMask: "+357-**-***-***"
  },
  {
    country: "CZ",
    phoneCode: "420",
    zone: "Europe/Prague",
    language: "cs",
    firstDay: "Mo",
    phoneMask: "+420-***-***-***"
  },
  {
    country: "CD",
    phoneCode: "243",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+243-***-***-***"
  },
  {
    country: "DK",
    phoneCode: "45",
    zone: "Europe/Copenhagen",
    language: "da",
    firstDay: "Mo",
    phoneMask: "+45-**-**-**-**"
  },
  {
    country: "DJ",
    phoneCode: "253",
    zone: "Africa/Djibouti",
    language: "fr",
    firstDay: null,
    phoneMask: "+253-**-**-**-**"
  },
  {
    country: "DM",
    phoneCode: "1-767",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-767-***-****"
  },
  {
    country: "DO",
    phoneCode: "1-809",
    zone: "North America",
    language: "America/Santo_Domingo",
    firstDay: "Su",
    phoneMask: [
      "+1-809-***-****",
      "+1-829-***-****",
      "+1-849-***-****"
    ]
  },
  {
    country: "TL",
    phoneCode: "670",
    zone: "Asia/Dili",
    language: "tet",
    firstDay: null,
    phoneMask: [
      "+670-***-****",
      "+670-77-*-*****",
      "+670-78-*-*****"
    ]
  },
  {
    country: "EC",
    phoneCode: "593",
    zone: "America/Guayaquil",
    language: "es",
    firstDay: "Su",
    phoneMask: [
      "+593-*-***-****",
      "+593-**-***-****"
    ]
  },
  {
    country: "EG",
    phoneCode: "20",
    zone: "Africa/Cairo",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+20-***-***-****"
  },
  {
    country: "SV",
    phoneCode: "503",
    zone: "America/El_Salvador",
    language: "es",
    firstDay: "Su",
    phoneMask: "+503-**-**-****"
  },
  {
    country: "GQ",
    phoneCode: "240",
    zone: "Africa/Lagos",
    language: "es",
    firstDay: null,
    phoneMask: "+240-**-***-****"
  },
  {
    country: "ER",
    phoneCode: "291",
    zone: "Africa/Asmara",
    language: "aa",
    firstDay: null,
    phoneMask: "+291-*-***-***"
  },
  {
    country: "EE",
    phoneCode: "372",
    zone: "Europe/Tallinn",
    language: "et",
    firstDay: "Mo",
    phoneMask: [
      "+372-***-****",
      "+372-****-****"
    ]
  },
  {
    country: "ET",
    phoneCode: "251",
    zone: "Africa/Addis_Ababa",
    language: "am",
    firstDay: null,
    phoneMask: "+251-**-***-****"
  },
  {
    country: "FK",
    phoneCode: "500",
    zone: "Atlantic/Stanley",
    language: "en",
    firstDay: null,
    phoneMask: "+500-*****"
  },
  {
    country: "FO",
    phoneCode: "298",
    zone: "Atlantic/Faroe",
    language: "fo",
    firstDay: null,
    phoneMask: "+298-***-***"
  },
  {
    country: "FJ",
    phoneCode: "679",
    zone: "Pacific/Fiji",
    language: "en",
    firstDay: null,
    phoneMask: "+679-**-*****"
  },
  {
    country: "FI",
    phoneCode: "358",
    zone: "Europe/Helsinki",
    language: "fi",
    firstDay: "Mo",
    phoneMask: "+358-***-***-**-**"
  },
  {
    country: "FR",
    phoneCode: "33",
    zone: "Europe/Paris",
    language: "fr",
    firstDay: "Mo",
    phoneMask: [
      "+33-***-***-***",
      "+262-*****-****",
      "+508-**-****",
      "+590-***-***-***"
    ]
  },
  {
    country: "PF",
    phoneCode: "689",
    zone: "Pacific/Tahiti",
    language: "fr",
    firstDay: null,
    phoneMask: "+689-**-**-**"
  },
  {
    country: "GA",
    phoneCode: "241",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+241-*-**-**-**"
  },
  {
    country: "GM",
    phoneCode: "220",
    zone: "Africa/Abidjan",
    language: "en",
    firstDay: null,
    phoneMask: "+220-***-**-**"
  },
  {
    country: "GE",
    phoneCode: "995",
    zone: "Asia/Tbilisi",
    language: "ka",
    firstDay: "Mo",
    phoneMask: "+995-***-***-***"
  },
  {
    country: "DE",
    phoneCode: "49",
    zone: "Europe/Berlin",
    language: "de",
    firstDay: "Mo",
    phoneMask: [
      "+49-***-***",
      "+49-***-***-****",
      "+49-****-***-****"
    ]
  },
  {
    country: "GH",
    phoneCode: "233",
    zone: "Africa/Accra",
    language: "en",
    firstDay: null,
    phoneMask: "+233-***-***-***"
  },
  {
    country: "GI",
    phoneCode: "350",
    zone: "Europe/Gibraltar",
    language: "en",
    firstDay: null,
    phoneMask: "+350-***-*****"
  },
  {
    country: "GR",
    phoneCode: "30",
    zone: "Europe/Athens",
    language: "el",
    firstDay: "Mo",
    phoneMask: "+30-***-***-****"
  },
  {
    country: "GL",
    phoneCode: "299",
    zone: "America/Godthab",
    language: "kl",
    firstDay: null,
    phoneMask: "+299-**-**-**"
  },
  {
    country: "GD",
    phoneCode: "1-473",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-473-***-****"
  },
  {
    country: "GU",
    phoneCode: "1-671",
    zone: "Pacific/Guam",
    language: "en",
    firstDay: null,
    phoneMask: "+1-671-***-****"
  },
  {
    country: "GT",
    phoneCode: "502",
    zone: "America/Guatemala",
    language: "es",
    firstDay: "Su",
    phoneMask: "+502-*-***-****"
  },
  {
    country: "GG",
    phoneCode: "44-1481",
    zone: "Europe/London",
    language: "en",
    firstDay: null
  },
  {
    country: "GN",
    phoneCode: "224",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+224-**-***-***"
  },
  {
    country: "GW",
    phoneCode: "245",
    zone: "Africa/Bissau",
    language: "pt",
    firstDay: null,
    phoneMask: "+245-*-******"
  },
  {
    country: "GY",
    phoneCode: "592",
    zone: "America/Guyana",
    language: "en",
    firstDay: null,
    phoneMask: "+592-***-****"
  },
  {
    country: "HT",
    phoneCode: "509",
    zone: "America/Port-au-Prince",
    language: "ht",
    firstDay: null,
    phoneMask: "+509-**-**-****"
  },
  {
    country: "HN",
    phoneCode: "504",
    zone: "America/Tegucigalpa",
    language: "es",
    firstDay: "Su",
    phoneMask: "+504-****-****"
  },
  {
    country: "HK",
    phoneCode: "852",
    zone: "Asia/Hong_Kong",
    language: "zh",
    firstDay: "Su",
    phoneMask: "+852-****-****"
  },
  {
    country: "HU",
    phoneCode: "36",
    zone: "Europe/Budapest",
    language: "hu",
    firstDay: "Mo",
    phoneMask: "+36-***-***-***"
  },
  {
    country: "IS",
    phoneCode: "354",
    zone: "Atlantic/Reykjavik",
    language: "is",
    firstDay: "Mo",
    phoneMask: "+354-***-****"
  },
  {
    country: "IN",
    phoneCode: "91",
    zone: "Asia/Kolkata",
    language: "en",
    firstDay: "Mo",
    phoneMask: "+91-****-***-***"
  },
  {
    country: "ID",
    phoneCode: "62",
    zone: "Asia/Jakarta",
    language: "id",
    firstDay: "Mo",
    phoneMask: [
      "+62-**-***-**",
      "+62-**-***-***",
      "+62-**-***-****",
      "+62-8-**-***-***",
      "+62-8-**-***-****",
      "+62-8-**-***-**-***"
    ]
  },
  {
    country: "IR",
    phoneCode: "98",
    zone: "Asia/Tehran",
    language: "fa",
    firstDay: "Sa",
    phoneMask: "+98-***-***-****"
  },
  {
    country: "IQ",
    phoneCode: "964",
    zone: "Asia/Baghdad",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+964-***-***-****"
  },
  {
    country: "IE",
    firstDay: "Mo",
    language: "en",
    phoneCode: "353",
    phoneMask: "+353-***-***-***",
    zone: "Europe/Dublin"
  },
  {
    country: "IM",
    firstDay: null,
    language: "Pound",
    phoneCode: "44-1624",
    zone: "Isle of Man"
  },
  {
    country: "IL",
    firstDay: "Su",
    language: "he",
    languageAlternative: [
      "il"
    ],
    phoneCode: "972",
    phoneMask: [
      "+972-*-***-****",
      "+972-5-*-***-****"
    ],
    zone: "Asia/Jerusalem"
  },
  {
    country: "IT",
    firstDay: "Mo",
    language: "it",
    phoneCode: "39",
    phoneMask: "+39-***-****-***",
    zone: "Europe/Rome"
  },
  {
    country: "CI",
    phoneCode: "225",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+225-**-***-***"
  },
  {
    country: "JM",
    phoneCode: "1-876",
    zone: "America/Jamaica",
    language: "en",
    firstDay: "Su",
    phoneMask: "+1-876-***-****"
  },
  {
    country: "JP",
    phoneCode: "81",
    zone: "Asia/Tokyo",
    language: "ja",
    firstDay: "Su",
    phoneMask: [
      "+81-***-***-***",
      "+81-**-****-****"
    ]
  },
  {
    country: "JE",
    phoneCode: "44-1534",
    zone: "Europe/London",
    language: "en",
    firstDay: null
  },
  {
    country: "JO",
    phoneCode: "962",
    zone: "Asia/Amman",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+962-*-****-****"
  },
  {
    country: "KZ",
    phoneCode: "7",
    zone: "Asia/Almaty",
    language: "kk",
    firstDay: "Mo",
    phoneMask: [
      "+7-6-**-***-**-**",
      "+7-7-**-***-**-**"
    ]
  },
  {
    country: "KE",
    phoneCode: "254",
    zone: "Africa/Nairobi",
    language: "en",
    firstDay: "Su",
    phoneMask: "+254-***-******"
  },
  {
    country: "KI",
    phoneCode: "686",
    zone: "Pacific/Tarawa",
    language: "en",
    firstDay: null,
    phoneMask: "+686-**-***"
  },
  {
    country: "XK",
    phoneCode: "383",
    zone: "Europe/Belgrade",
    language: "sq",
    firstDay: "Mo"
  },
  {
    country: "KW",
    phoneCode: "965",
    zone: "Asia/Kuwait",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+965-****-****"
  },
  {
    country: "KG",
    phoneCode: "996",
    zone: "Asia/Bishkek",
    language: "ky",
    firstDay: "Mo",
    phoneMask: "+996-***-***-***"
  },
  {
    country: "LA",
    phoneCode: "856",
    zone: "Asia/Vientiane",
    language: "lo",
    firstDay: null,
    phoneMask: [
      "+856-**-***-***",
      "+856-20-**-***-***"
    ]
  },
  {
    country: "LV",
    phoneCode: "371",
    zone: "Europe/Riga",
    language: "lv",
    firstDay: "Mo",
    phoneMask: "+371-**-***-***"
  },
  {
    country: "LB",
    phoneCode: "961",
    zone: "Asia/Beirut",
    language: "ar",
    firstDay: "Mo",
    phoneMask: [
      "+961-*-***-***",
      "+961-**-***-***"
    ]
  },
  {
    country: "LS",
    phoneCode: "266",
    zone: "Africa/Johannesburg",
    language: "en",
    firstDay: null,
    phoneMask: "+266-*-***-****"
  },
  {
    country: "LR",
    phoneCode: "231",
    zone: "Africa/Monrovia",
    language: "en",
    firstDay: null,
    phoneMask: "+231-**-***-***"
  },
  {
    country: "LY",
    phoneCode: "218",
    zone: "Africa/Tripoli",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+218-**-***-***",
      "+218-21-***-****"
    ]
  },
  {
    country: "LI",
    phoneCode: "423",
    zone: "Europe/Zurich",
    language: "de",
    firstDay: null,
    phoneMask: "+423-***-***-****"
  },
  {
    country: "LT",
    phoneCode: "370",
    zone: "Europe/Vilnius",
    language: "lt",
    firstDay: "Mo",
    phoneMask: "+370-***-**-***"
  },
  {
    country: "LU",
    phoneCode: "352",
    zone: "Europe/Luxembourg",
    language: "lb",
    firstDay: "Mo",
    phoneMask: "+352-***-***-***"
  },
  {
    country: "MO",
    phoneCode: "853",
    zone: "Asia/Macau",
    language: "zh",
    firstDay: null,
    phoneMask: "+853-****-****"
  },
  {
    country: "MK",
    phoneCode: "389",
    zone: "Europe/Belgrade",
    language: "mk",
    firstDay: "Mo",
    phoneMask: "+389-**-***-***"
  },
  {
    country: "MG",
    phoneCode: "261",
    zone: "Indian/Antananarivo",
    language: "fr",
    firstDay: null,
    phoneMask: "+261-**-**-*****"
  },
  {
    country: "MW",
    phoneCode: "265",
    zone: "Africa/Maputo",
    language: "ny",
    firstDay: null,
    phoneMask: [
      "+265-*-****-****",
      "+265-1-***-***"
    ]
  },
  {
    country: "MY",
    phoneCode: "60",
    zone: "Asia/Kuala_Lumpur",
    language: "ms",
    firstDay: "Mo",
    phoneMask: [
      "+60-*-***-***",
      "+60-**-***-***",
      "+60-**-***-****",
      "+60-***-***-***"
    ]
  },
  {
    country: "MV",
    phoneCode: "960",
    zone: "Indian/Maldives",
    language: "dv",
    firstDay: null,
    phoneMask: "+960-***-****"
  },
  {
    country: "ML",
    phoneCode: "223",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+223-**-**-****"
  },
  {
    country: "MT",
    phoneCode: "356",
    zone: "Europe/Malta",
    language: "mt",
    firstDay: null,
    phoneMask: "+356-****-****"
  },
  {
    country: "MH",
    phoneCode: "692",
    zone: "Pacific/Majuro",
    language: "mh",
    firstDay: null,
    phoneMask: "+692-***-****"
  },
  {
    country: "MR",
    phoneCode: "222",
    zone: "Africa/Abidjan",
    language: "ar",
    firstDay: null,
    phoneMask: "+222-**-**-****"
  },
  {
    country: "MU",
    phoneCode: "230",
    zone: "Indian/Mauritius",
    language: "en",
    firstDay: null,
    phoneMask: "+230-***-****"
  },
  {
    country: "YT",
    phoneCode: "262",
    zone: "Indian/Mayotte",
    language: "fr",
    firstDay: null
  },
  {
    country: "MX",
    phoneCode: "52",
    zone: "America/Mexico_City",
    language: "es",
    firstDay: "Su",
    phoneMask: [
      "+52-**-**-****",
      "+52-***-***-****"
    ]
  },
  {
    country: "FM",
    phoneCode: "691",
    zone: "Pacific/Pohnpei",
    language: "en",
    firstDay: null,
    phoneMask: "+691-***-****"
  },
  {
    country: "MD",
    phoneCode: "373",
    zone: "Europe/Chisinau",
    language: "ro",
    firstDay: null,
    phoneMask: "+373-****-****"
  },
  {
    country: "MC",
    phoneCode: "377",
    zone: "Europe/Monaco",
    language: "fr",
    firstDay: "Mo",
    phoneMask: [
      "+377-**-***-***",
      "+377-***-***-***"
    ]
  },
  {
    country: "MN",
    phoneCode: "976",
    zone: "Asia/Ulaanbaatar",
    language: "mn",
    firstDay: "Mo",
    phoneMask: "+976-**-**-****"
  },
  {
    country: "ME",
    phoneCode: "382",
    zone: "Europe/Belgrade",
    language: "sr",
    firstDay: null,
    phoneMask: "+382-**-***-***"
  },
  {
    country: "MS",
    phoneCode: "1-664",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-664-***-****"
  },
  {
    country: "MA",
    phoneCode: "212",
    zone: "Africa/Casablanca",
    language: "ar",
    firstDay: "Mo",
    phoneMask: "+212-**-****-***"
  },
  {
    country: "MZ",
    phoneCode: "258",
    zone: "Africa/Maputo",
    language: "pt",
    firstDay: null,
    phoneMask: "+258-**-***-***"
  },
  {
    country: "MM",
    phoneCode: "95",
    zone: "Asia/Rangoon",
    language: "my",
    firstDay: null,
    phoneMask: [
      "+95-***-***",
      "+95-*-***-***",
      "+95-**-***-***"
    ]
  },
  {
    country: "NA",
    phoneCode: "264",
    zone: "Africa/Windhoek",
    language: "en",
    firstDay: null,
    phoneMask: "+264-**-***-****"
  },
  {
    country: "NR",
    phoneCode: "674",
    zone: "Pacific/Nauru",
    language: "na",
    firstDay: null,
    phoneMask: "+674-***-****"
  },
  {
    country: "NP",
    phoneCode: "977",
    zone: "Asia/Kathmandu",
    language: "ne",
    firstDay: null,
    phoneMask: "+977-**-***-***"
  },
  {
    country: "NL",
    phoneCode: "31",
    zone: "Europe/Amsterdam",
    language: "nl",
    firstDay: "Mo",
    phoneMask: "+31-**-***-****"
  },
  {
    country: "AN",
    phoneCode: "599",
    zone: "America/Curacao",
    language: "nl",
    firstDay: null,
    phoneMask: [
      "+599-***-****",
      "+599-9-***-****"
    ]
  },
  {
    country: "NC",
    phoneCode: "687",
    zone: "Pacific/Noumea",
    language: "fr",
    firstDay: null,
    phoneMask: "+687-**-****"
  },
  {
    country: "NZ",
    phoneCode: "64",
    zone: "Pacific/Auckland",
    language: "en",
    firstDay: "Mo",
    phoneMask: [
      "+64-**-***-***",
      "+64-***-***-***",
      "+64-***-***-****"
    ]
  },
  {
    country: "NI",
    phoneCode: "505",
    zone: "America/Managua",
    language: "es",
    firstDay: "Su",
    phoneMask: "+505-****-****"
  },
  {
    country: "NE",
    phoneCode: "227",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+227-**-**-****"
  },
  {
    country: "NG",
    phoneCode: "234",
    zone: "Africa/Lagos",
    language: "en",
    firstDay: null,
    phoneMask: [
      "+234-**-***-**",
      "+234-**-***-***",
      "+234-***-***-****"
    ]
  },
  {
    country: "NU",
    phoneCode: "683",
    zone: "Pacific/Niue",
    language: "niu",
    firstDay: null,
    phoneMask: "+683-****"
  },
  {
    country: "KP",
    phoneCode: "850",
    zone: "Asia/Pyongyang",
    language: "ko",
    firstDay: null,
    phoneMask: [
      "+850-***-***",
      "+850-**-***-***",
      "+850-****-****",
      "+850-***-****-***",
      "+850-****-*************",
      "+850-191-***-****"
    ]
  },
  {
    country: "MP",
    phoneCode: "1-670",
    zone: "Pacific/Saipan",
    language: "fil",
    firstDay: null,
    phoneMask: "+1-670-***-****"
  },
  {
    country: "NO",
    phoneCode: "47",
    zone: "Europe/Oslo",
    language: "no",
    firstDay: "Mo",
    phoneMask: "+47-***-**-***"
  },
  {
    country: "OM",
    phoneCode: "968",
    zone: "Asia/Muscat",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+968-**-***-***"
  },
  {
    country: "PK",
    phoneCode: "92",
    zone: "Asia/Karachi",
    language: "ur",
    firstDay: "Mo",
    phoneMask: "+92-***-***-****"
  },
  {
    country: "PW",
    phoneCode: "680",
    zone: "Pacific/Palau",
    language: "pau",
    firstDay: null,
    phoneMask: "+680-***-****"
  },
  {
    country: "PS",
    phoneCode: "970",
    zone: "Asia/Hebron",
    language: "ar",
    firstDay: null,
    phoneMask: "+970-**-***-****"
  },
  {
    country: "PA",
    phoneCode: "507",
    zone: "America/Panama",
    language: "es",
    firstDay: "Su",
    phoneMask: "+507-***-****"
  },
  {
    country: "PG",
    phoneCode: "675",
    zone: "Pacific/Port_Moresby",
    language: "en",
    firstDay: null,
    phoneMask: "+675-***-**-***"
  },
  {
    country: "PY",
    phoneCode: "595",
    zone: "America/Asuncion",
    language: "es",
    firstDay: "Mo",
    phoneMask: "+595-***-***-***"
  },
  {
    country: "PE",
    phoneCode: "51",
    zone: "America/Lima",
    language: "es",
    firstDay: "Su",
    phoneMask: "+51-***-***-***"
  },
  {
    country: "PH",
    phoneCode: "63",
    zone: "Asia/Manila",
    language: "tl",
    firstDay: "Su",
    phoneMask: "+63-***-***-****"
  },
  {
    country: "PN",
    phoneCode: "64",
    zone: "Pacific/Pitcairn",
    language: "en",
    firstDay: null
  },
  {
    country: "PL",
    phoneCode: "48",
    zone: "Europe/Warsaw",
    language: "pl",
    firstDay: "Mo",
    phoneMask: "+48-***-***-***"
  },
  {
    country: "PT",
    phoneCode: "351",
    zone: "Europe/Lisbon",
    language: "pt",
    firstDay: "Mo",
    phoneMask: "+351-**-***-****"
  },
  {
    country: "PR",
    phoneCode: "1-787",
    zone: "San Juan",
    language: "Dollar",
    firstDay: "Su"
  },
  {
    country: "QA",
    phoneCode: "974",
    zone: "Asia/Qatar",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+974-****-****"
  },
  {
    country: "CG",
    phoneCode: "242",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+242-**-***-****"
  },
  {
    country: "RE",
    phoneCode: "262",
    zone: "Indian/Reunion",
    language: "fr",
    firstDay: null,
    phoneMask: "+262-*****-****"
  },
  {
    country: "RO",
    phoneCode: "40",
    zone: "Europe/Bucharest",
    language: "ro",
    firstDay: "Mo",
    phoneMask: "+40-**-***-****"
  },
  {
    country: "RU",
    phoneCode: "7",
    zone: "Europe/Moscow",
    language: "ru",
    firstDay: "Mo",
    phoneMask: "+7-***-***-**-**"
  },
  {
    country: "RW",
    phoneCode: "250",
    zone: "Africa/Maputo",
    language: "rw",
    firstDay: null,
    phoneMask: "+250-***-***-***"
  },
  {
    country: "BL",
    phoneCode: "590",
    zone: "America/Port_of_Spain",
    language: "fr",
    firstDay: null
  },
  {
    country: "SH",
    phoneCode: "290",
    zone: "Africa/Abidjan",
    language: "en",
    firstDay: null,
    phoneMask: "+290-****"
  },
  {
    country: "KN",
    phoneCode: "1-869",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-869-***-****"
  },
  {
    country: "LC",
    phoneCode: "1-758",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-758-***-****"
  },
  {
    country: "MF",
    phoneCode: "590",
    zone: "America/Port_of_Spain",
    language: "fr",
    firstDay: null
  },
  {
    country: "PM",
    phoneCode: "508",
    zone: "America/Miquelon",
    language: "fr",
    firstDay: null
  },
  {
    country: "VC",
    phoneCode: "1-784",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-784-***-****"
  },
  {
    country: "WS",
    phoneCode: "685",
    zone: "Pacific/Apia",
    language: "sm",
    firstDay: null,
    phoneMask: "+685-**-****"
  },
  {
    country: "SM",
    phoneCode: "378",
    zone: "Europe/Rome",
    language: "it",
    firstDay: null,
    phoneMask: "+378-****-******"
  },
  {
    country: "ST",
    phoneCode: "239",
    zone: "Africa/Abidjan",
    language: "pt",
    firstDay: null,
    phoneMask: "+239-**-*****"
  },
  {
    country: "SA",
    phoneCode: "966",
    zone: "Asia/Riyadh",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+966-*-***-****",
      "+966-5-****-****"
    ]
  },
  {
    country: "SN",
    phoneCode: "221",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+221-**-***-****"
  },
  {
    country: "RS",
    phoneCode: "381",
    zone: "Europe/Belgrade",
    language: "sr",
    firstDay: "Mo",
    phoneMask: "+381-**-***-****"
  },
  {
    country: "SC",
    phoneCode: "248",
    zone: "Indian/Mahe",
    language: "en",
    firstDay: null,
    phoneMask: "+248-*-***-***"
  },
  {
    country: "SL",
    phoneCode: "232",
    zone: "Africa/Abidjan",
    language: "en",
    firstDay: null,
    phoneMask: "+232-**-******"
  },
  {
    country: "SG",
    phoneCode: "65",
    zone: "Asia/Singapore",
    language: "cmn",
    firstDay: "Mo",
    phoneMask: "+65-****-****"
  },
  {
    country: "SX",
    phoneCode: "1-721",
    zone: "America/Curacao",
    language: "nl",
    firstDay: null,
    phoneMask: "+1-721-***-****"
  },
  {
    country: "SK",
    phoneCode: "421",
    zone: "Europe/Prague",
    language: "sk",
    firstDay: "Mo",
    phoneMask: "+421-***-***-***"
  },
  {
    country: "SI",
    phoneCode: "386",
    zone: "Europe/Belgrade",
    language: "sl",
    firstDay: null,
    phoneMask: "+386-**-***-***"
  },
  {
    country: "SB",
    phoneCode: "677",
    zone: "Pacific/Guadalcanal",
    language: "en",
    firstDay: null,
    phoneMask: [
      "+677-*****",
      "+677-***-****"
    ]
  },
  {
    country: "SO",
    phoneCode: "252",
    zone: "Africa/Mogadishu",
    language: "so",
    firstDay: null,
    phoneMask: [
      "+252-*-***-***",
      "+252-**-***-***"
    ]
  },
  {
    country: "ZA",
    phoneCode: "27",
    zone: "Africa/Johannesburg",
    language: "zu",
    firstDay: "Su",
    phoneMask: "+27-**-***-****"
  },
  {
    country: "KR",
    phoneCode: "82",
    zone: "Asia/Seoul",
    language: "ko",
    firstDay: "Su",
    phoneMask: "+82-**-***-****"
  },
  {
    country: "SS",
    phoneCode: "211",
    zone: "Africa/Khartoum",
    language: "en",
    firstDay: null,
    phoneMask: "+211-**-***-****"
  },
  {
    country: "ES",
    phoneCode: "34",
    zone: "Europe/Madrid",
    language: "es",
    firstDay: "Mo",
    phoneMask: "+34-***-***-***"
  },
  {
    country: "LK",
    phoneCode: "94",
    zone: "Asia/Colombo",
    language: "si",
    firstDay: null,
    phoneMask: "+94-**-***-****"
  },
  {
    country: "SD",
    phoneCode: "249",
    zone: "Africa/Khartoum",
    language: "ar",
    firstDay: null,
    phoneMask: "+249-**-***-****"
  },
  {
    country: "SR",
    phoneCode: "597",
    zone: "America/Paramaribo",
    language: "nl",
    firstDay: null,
    phoneMask: [
      "+597-***-***",
      "+597-***-****"
    ]
  },
  {
    country: "SJ",
    phoneCode: "47",
    zone: "Europe/Oslo",
    language: "no",
    firstDay: null
  },
  {
    country: "SZ",
    phoneCode: "268",
    zone: "Africa/Johannesburg",
    language: "en",
    firstDay: null,
    phoneMask: "+268-**-**-****"
  },
  {
    country: "SE",
    phoneCode: "46",
    zone: "Europe/Stockholm",
    language: "sv",
    firstDay: "Mo",
    phoneMask: "+46-**-***-****"
  },
  {
    country: "CH",
    phoneCode: "41",
    zone: "Europe/Zurich",
    language: "de",
    firstDay: "Mo",
    phoneMask: "+41-**-***-****"
  },
  {
    country: "SY",
    phoneCode: "963",
    zone: "Asia/Damascus",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+963-**-****-***"
  },
  {
    country: "TW",
    phoneCode: "886",
    zone: "Asia/Taipei",
    language: "zh",
    firstDay: "Su",
    phoneMask: [
      "+886-****-****",
      "+886-*-****-****"
    ]
  },
  {
    country: "TJ",
    phoneCode: "992",
    zone: "Asia/Dushanbe",
    language: "tg",
    firstDay: null,
    phoneMask: "+992-**-***-****"
  },
  {
    country: "TZ",
    phoneCode: "255",
    zone: "Africa/Dar_es_Salaam",
    language: "sw",
    firstDay: null,
    phoneMask: "+255-**-***-****"
  },
  {
    country: "TH",
    phoneCode: "66",
    zone: "Asia/Bangkok",
    language: "th",
    firstDay: "Mo",
    phoneMask: "+66-**-***-****"
  },
  {
    country: "TG",
    phoneCode: "228",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+228-**-***-***"
  },
  {
    country: "TK",
    phoneCode: "690",
    zone: "Pacific/Fakaofo",
    language: "tkl",
    firstDay: null,
    phoneMask: "+690-****"
  },
  {
    country: "TO",
    phoneCode: "676",
    zone: "Pacific/Tongatapu",
    language: "to",
    firstDay: null,
    phoneMask: "+676-*****"
  },
  {
    country: "TT",
    phoneCode: "1-868",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-868-***-****"
  },
  {
    country: "TN",
    phoneCode: "216",
    zone: "Africa/Tunis",
    language: "ar",
    firstDay: "Mo",
    phoneMask: "+216-**-***-***"
  },
  {
    country: "TR",
    phoneCode: "90",
    zone: "Europe/Istanbul",
    language: "tr",
    firstDay: "Mo",
    phoneMask: "+90-***-***-****"
  },
  {
    country: "TM",
    phoneCode: "993",
    zone: "Asia/Ashgabat",
    language: "tk",
    firstDay: null,
    phoneMask: "+993-*-***-****"
  },
  {
    country: "TC",
    phoneCode: "1-649",
    zone: "America/Grand_Turk",
    language: "en",
    firstDay: null,
    phoneMask: "+1-649-***-****"
  },
  {
    country: "TV",
    phoneCode: "688",
    zone: "Pacific/Funafuti",
    language: "tvl",
    firstDay: null,
    phoneMask: [
      "+688-2-****",
      "+688-90-****"
    ]
  },
  {
    country: "VI",
    phoneCode: "1-340",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-340-***-****"
  },
  {
    country: "UG",
    phoneCode: "256",
    zone: "Africa/Kampala",
    language: "en",
    firstDay: null,
    phoneMask: "+256-***-***-***"
  },
  {
    country: "UA",
    phoneCode: "380",
    zone: "Europe/Kiev",
    language: "uk",
    languageAlternative: [
      "ua"
    ],
    firstDay: "Mo",
    phoneMask: "+380-**-***-**-**"
  },
  {
    country: "AE",
    phoneCode: "971",
    zone: "Asia/Dubai",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+971-*-***-****",
      "+971-5-*-***-****"
    ]
  },
  {
    country: "UY",
    phoneCode: "598",
    zone: "America/Montevideo",
    language: "es",
    firstDay: "Mo",
    phoneMask: "+598-*-***-**-**"
  },
  {
    country: "UZ",
    phoneCode: "998",
    zone: "Asia/Tashkent",
    language: "uz",
    firstDay: "Mo",
    phoneMask: "+998-**-***-****"
  },
  {
    country: "VU",
    phoneCode: "678",
    zone: "Pacific/Efate",
    language: "bi",
    firstDay: null,
    phoneMask: [
      "+678-*****",
      "+678-**-*****"
    ]
  },
  {
    country: "VA",
    phoneCode: "379",
    zone: "Europe/Rome",
    language: "la",
    firstDay: null,
    phoneMask: "+39-6-698-*****"
  },
  {
    country: "VE",
    phoneCode: "58",
    zone: "America/Caracas",
    language: "es",
    firstDay: "Su",
    phoneMask: "+58-***-***-****"
  },
  {
    country: "VN",
    phoneCode: "84",
    zone: "Asia/Ho_Chi_Minh",
    language: "vi",
    firstDay: "Mo",
    phoneMask: [
      "+84-**-****-***",
      "+84-***-****-***"
    ]
  },
  {
    country: "WF",
    phoneCode: "681",
    zone: "Pacific/Wallis",
    language: "wls",
    firstDay: null,
    phoneMask: "+681-**-****"
  },
  {
    country: "EH",
    phoneCode: "212",
    zone: "Africa/El_Aaiun",
    language: "ar",
    firstDay: null
  },
  {
    country: "YE",
    phoneCode: "967",
    zone: "Asia/Aden",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+967-*-***-***",
      "+967-**-***-***",
      "+967-***-***-***"
    ]
  },
  {
    country: "ZM",
    phoneCode: "260",
    zone: "Africa/Maputo",
    language: "en",
    firstDay: null,
    phoneMask: "+260-**-***-****"
  },
  {
    country: "ZW",
    phoneCode: "263",
    zone: "Africa/Maputo",
    language: "en",
    firstDay: "Su",
    phoneMask: "+263-*-******"
  },
  {
    country: "GF",
    phoneCode: "594",
    zone: "America/Cayenne",
    language: "fr",
    firstDay: "Mo",
    phoneMask: "+594-*****-****"
  },
  {
    country: "MQ",
    phoneCode: "596",
    zone: "America/Martinique",
    language: "fr",
    firstDay: "Mo",
    phoneMask: "+596-***-**-**-**"
  },
  {
    country: "NF",
    phoneCode: "672-3",
    zone: "Pacific/Norfolk",
    language: "en",
    firstDay: "Mo",
    phoneMask: "+672-3-**-***"
  },
  {
    country: "IC",
    phoneCode: "3428",
    zone: "Europe/Berlin",
    language: "es",
    firstDay: "Mo"
  }
], ji = "geo-code", M = class M {
  /**
   * Information about the current country.<br>
   * Информация об текущей стране.
   */
  static get() {
    return this.item;
  }
  /**
   * Current country.<br>
   * Текущая страна.
   */
  static getCountry() {
    return this.item.country;
  }
  /**
   * Current language.<br>
   * Текущий язык.
   */
  static getLanguage() {
    return this.language;
  }
  /**
   * Full format according to the standard.<br>
   * Полный формат согласно стандарту.
   */
  static getStandard() {
    return this.item.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  static getFirstDay() {
    return this.item.firstDay;
  }
  /**
   * Full format.<br>
   * Полный формат.
   */
  static getLocation() {
    return this.location;
  }
  /**
   * Obtaining processed data.<br>
   * Получение обработанных данных.
   */
  static getItem() {
    return {
      ...this.item,
      language: this.language
    };
  }
  /**
   * Returns the full list of countries.<br>
   * Возвращает полный список стран.
   */
  static getList() {
    return Hi;
  }
  /**
   * Determines the current country by its full name.<br>
   * Определяет текущую страну по ее полному названию.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static find(t) {
    return this.getByCode(t);
  }
  /**
   * Returns a complete string with the country code and language.<br>
   * Возвращает полную строку с кодом страны и языка.
   * @param item object with data about the current country /<br>
   * объект с данными об текущей стране
   */
  static toStandard(t) {
    return `${t.language}-${t.country}`;
  }
  /**
   * Changes the data by the full code.<br>
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   * @param save save the result /<br>сохранить результат
   */
  static set(t, e) {
    this.location = t, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), e && this.storage.set(this.location);
  }
  /**
   * Returns the data about the country by its full code.<br>
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(t) {
    let e;
    return t && (t.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (e = this.getByCodeFull(t)), !e && t.match(/[A-Z]{2}/) && (e = this.getByCountry(this.toCountry(t))), !e && t.match(/[a-z]{2}/) && (e = this.getByLanguage(this.toLanguage(t)))), this.toFull(lt(e ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.<br>
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country /<br>строка в виде язык-страна
   */
  static getByCodeFull(t) {
    return this.getList().find(
      (e) => Ot(t, [
        `${e.language}-${e.country}`,
        `${e.country}-${e.language}`
      ])
    );
  }
  /**
   * Returns the full data by country.<br>
   * Возвращает полные данные по стране.
   * @param country country /<br>страна
   */
  static getByCountry(t) {
    return this.getList().find((e) => {
      var s;
      return e.country === t || ((s = e == null ? void 0 : e.countryAlternative) == null ? void 0 : s.find((i) => i === t));
    });
  }
  /**
   * Returns the full data by language.<br>
   * Возвращает полные данные по языку.
   * @param language language /<br>язык
   */
  static getByLanguage(t) {
    return this.getList().find((e) => {
      var s;
      return e.language === t || ((s = e == null ? void 0 : e.languageAlternative) == null ? void 0 : s.find((i) => i === t));
    });
  }
  /**
   * Determines the current location.<br>
   * Определяет текущую локацию.
   */
  static findLocation() {
    var t;
    return this.storage.get() || ((t = document.querySelector("html")) == null ? void 0 : t.lang) || navigator.language || navigator.languages[0] || Rt("language") || "en-GB";
  }
  /**
   * Determines the current language.<br>
   * Определяет текущий язык.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static findLanguage(t) {
    return t && t.match(/[a-z]{2}/) ? this.toLanguage(t) : this.item.language;
  }
  /**
   * Returns the country code by its full language-country.<br>
   * Возвращает код страны по ее полному язык-страна.
   * @param code country code /<br>код страна
   */
  static toCountry(t) {
    return t.replace(/[^A-Z]+/g, "");
  }
  /**
   * Returns the language code by its full language-country.<br>
   * Возвращает код языка по его полному язык-страна.
   * @param code country code /<br>код страна
   */
  static toLanguage(t) {
    return t.replace(/[^a-z]+/g, "");
  }
  /**
   * Adding missing data.<br>
   * Добавление недостающих данных.
   * @param item object with data about the current country /<br>
   * объект с данными об текущей стране
   */
  static toFull(t) {
    return {
      ...t,
      standard: this.toStandard(t),
      firstDay: (t == null ? void 0 : t.firstDay) || "Mo"
    };
  }
};
o(M, "storage", new xe(ji)), o(M, "location"), o(M, "item"), o(M, "language"), M.location = M.findLocation(), M.language = M.findLanguage(M.location), M.item = M.getByCode(M.location);
let nt = M;
class Ie {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = nt.getLocation()) {
    o(this, "geo");
    this.geo = nt.find(t);
    const e = this.getLocation();
    if (e in Tt)
      return Tt[e];
    Tt[e] = this;
  }
  /**
   * Returns country code and language.<br>
   * Возвращает код страны и языка.
   */
  getLocation() {
    return this.geo.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  getFirstDay() {
    return this.geo.firstDay;
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, e) {
    let s = { type: "language" }, i;
    e && (typeof e == "string" ? s.type = e : s = {
      ...s,
      ...e
    });
    try {
      t ? i = new Intl.DisplayNames(this.getLocation(), s).of(t) : s.type === "language" ? i = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (i = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country));
    } catch {
    }
    return i ?? t ?? "";
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(t, e) {
    const s = {
      type: "language",
      style: e
    };
    return this.display(t, s);
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(t, e) {
    const s = {
      type: "region",
      style: e
    };
    return this.display(t, s);
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(t, e) {
    var s, i;
    return ((i = (s = this.numberObject(e)) == null ? void 0 : s.format) == null ? void 0 : i.call(s, L(t))) || t.toString();
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    var t, e, s, i, a;
    return ((a = (i = (s = (e = (t = this.numberObject()) == null ? void 0 : t.formatToParts) == null ? void 0 : e.call(t, 1.2)) == null ? void 0 : s.find) == null ? void 0 : i.call(s, (r) => r.type === "decimal")) == null ? void 0 : a.value) || ".";
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(t, e, s = !1) {
    const i = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof e == "string" ? { currency: e } : e || {}
    }, a = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...r) => (i.currency = r[2].toUpperCase(), r[1]));
    if (s) {
      const r = this.numberObject(i);
      return r ? r.formatToParts(L(t)).filter((h) => ["literal", "currency"].indexOf(h.type) === -1).join("") : t.toString();
    } else
      return this.number(a, i);
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(t, e) {
    const s = {
      style: "unit",
      ...typeof e == "string" ? { unit: e } : e || {}
    }, i = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...a) => (s.unit = a[2].toLowerCase(), a[1]));
    return this.number(i, s);
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return this.number(t, {
      style: "percent",
      ...e || {}
    });
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, e) {
    return this.percent(L(t) / 100, e);
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(t, e, s, i) {
    const a = K(t), r = typeof s == "string", h = this.dateOptions(e, r ? s : "short");
    return i && (h.hour12 = !1), r || Object.assign(h, s), a.toLocaleString(this.getLocation(), h);
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(t, e, s) {
    const i = K(t), a = s || /* @__PURE__ */ new Date(), r = {
      numeric: "auto",
      ...typeof e == "string" ? { style: e } : e || {}
    };
    let h = "second", c = (i.getTime() - a.getTime()) / 1e3;
    Math.abs(c) >= 60 && (h = "minute", c /= 60, Math.abs(c) >= 60 && (h = "hour", c /= 60, Math.abs(c) >= 24 && (h = "day", c /= 24, Math.abs(c) >= 30 && (h = "month", c /= 30, Math.abs(c) >= 12 && (h = "year", c /= 12)))));
    try {
      return new Intl.RelativeTimeFormat(this.getLocation(), r).format(Math.round(c), h);
    } catch {
    }
    return "";
  }
  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.<br>
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param limit values that determine the output limit (values per day) /<br>
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day /<br>текущий день
   * @param relativeOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month /<br>представление месяца
   * @param type type of data format /<br>тип формата data
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  relativeLimit(t, e, s, i, a, r, h) {
    const c = K(t), u = s || /* @__PURE__ */ new Date(), g = new Date(u), x = new Date(u);
    return g.setDate(u.getDate() - e), x.setDate(u.getDate() + e), c >= g && c <= x ? this.relative(
      c,
      i,
      u
    ) : this.date(
      c,
      r,
      a,
      h
    );
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(t, e) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { month: e || "long" }).format(K(t));
    } catch {
    }
    return "";
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(t) {
    const e = [{
      label: "",
      value: void 0
    }];
    try {
      const s = /* @__PURE__ */ new Date(), i = Intl.DateTimeFormat(this.getLocation(), { month: t || "long" });
      for (let a = 0; a < 12; a++)
        s.setMonth(a), e.push({
          label: i.format(s).replace(/^./, (r) => r.toUpperCase()),
          value: a + 1
        });
    } catch {
    }
    return e;
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(t, e) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }).format(K(t));
    } catch {
    }
    return "";
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(t) {
    const e = [{
      label: "",
      value: void 0
    }];
    try {
      const s = /* @__PURE__ */ new Date(), i = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), a = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
      s.setDate(s.getDate() - a);
      for (let r = 0; r < 7; r++)
        e.push({
          label: i.format(s).replace(/^./, (h) => h.toUpperCase()),
          value: s.getDay()
        }), s.setDate(s.getDate() + 1);
    } catch {
    }
    return e;
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(t) {
    return this.date(t, "time");
  }
  /**
   * Sorts strings taking into account the characteristics of countries.<br>
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data /<br>массив с данными
   * @param compareFn a function for sorting /<br>функция для сортировки
   */
  sort(t, e = (s, i) => [s, i]) {
    const s = new Intl.Collator(this.getLocation());
    return t.sort((i, a) => s.compare(...e(i, a)));
  }
  /**
   * The object enables language-sensitive number formatting.<br>
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  numberObject(t) {
    try {
      return new Intl.NumberFormat(this.getLocation(), t);
    } catch {
    }
  }
  /**
   * Returns options for data according to its type.<br>
   * Возвращает options для data по его типу.
   * @param type type of data format /<br>тип формата data
   * @param display the representation of the month /<br>представление месяца
   */
  dateOptions(t, e = "short") {
    const s = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(t) !== -1 && (s.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month"].indexOf(t) !== -1 && (s.month = e), ["full", "datetime", "date", void 0, "day"].indexOf(t) !== -1 && (s.day = "2-digit"), t !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(t) !== -1 && (s.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(t) !== -1 && (s.minute = "2-digit"), ["full", "time", "second"].indexOf(t) !== -1 && (s.second = "2-digit")), s;
  }
}
const Tt = {};
class kt {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, e = "date", s = nt.getLocation()) {
    o(this, "date");
    o(this, "hour24", !1);
    o(this, "watch");
    this.type = e, this.code = s, this.date = K(t);
  }
  /**
   * Returns an object for working with formatting.<br>
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new Ie(this.code);
  }
  /**
   * Returns a Date object.<br>
   * Возвращает объект Date.
   */
  getDate() {
    return this.date;
  }
  /**
   * Returns the type of data output.<br>
   * Возвращает тип вывода данных.
   */
  getType() {
    return this.type;
  }
  /**
   * Returns the format of hours.<br>
   * Возвращает формат часов.
   */
  getHoursType() {
    const t = this.clone();
    return t.setHours(23), t.toLocaleTimeString(this.getIntl().getLocation(), { hour: "2-digit" }).match(/23/ig) ? "24" : "12";
  }
  /**
   * Whether to use 12-hour time.<br>
   * Использовать ли 12-часовой формат времени.
   */
  getHour24() {
    return this.hour24;
  }
  /**
   * The method returns the difference, in minutes, between
   * a date as evaluated in the UTC time zone, and the same date as evaluated
   * in the local time zone.<br>
   * Метод возвращает смещение часового пояса относительно часового пояса UTC
   * в минутах для текущей локали.
   */
  getTimeZoneOffset() {
    return this.date.getTimezoneOffset();
  }
  /**
   * Returns the time zone as a string.<br>
   * Возвращает временную зону в виде строки.
   * @param style the style of the returned data /<br>стиль возвращаемых данных
   */
  getTimeZone(t) {
    const e = this.getTimeZoneOffset();
    if (t === "minute")
      return e.toString();
    const s = e / 60 * -1;
    if (t === "hour")
      return this.getIntl().number(Math.trunc(s), { signDisplay: "always" });
    const i = this.getIntl().number(Math.trunc(s), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), a = s.toString().match(/.\d+/) ? "30" : "00";
    return t === "RFC" ? `${i}${a}` : `${i}:${a}`;
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    const t = this.getIntl().getFirstDay();
    return t === "Sa" ? 6 : t === "Su" ? 0 : 1;
  }
  /**
   * The method returns the year of the specified date according to local time.<br>
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear() {
    return this.date.getFullYear();
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.<br>
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return this.date.getMonth() + 1;
  }
  /**
   * The method returns the day of the month for the specified date according to local time.<br>
   * Метод возвращает день месяца указанной даты по местному времени
   */
  getDay() {
    return this.date.getDate();
  }
  /**
   * The method returns the hour for the specified date, according to local time.<br>
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return this.date.getHours();
  }
  /**
   * The method returns the minutes in the specified date according to local time.<br>
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return this.date.getMinutes();
  }
  /**
   * The method returns the seconds in the specified date according to local time.<br>
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return this.date.getSeconds();
  }
  /**
   * Returns the last day of the week.<br>
   * Возвращает последний день недели.
   */
  getMaxDay() {
    return this.getMonth() > 0 ? this.cloneDayLast().getDay() : 0;
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(t = this.type, e) {
    return this.getIntl().date(
      this.date,
      t,
      e,
      this.hour24
    );
  }
  /**
   * Returns the formatted year.<br>
   * Возвращает отформатированный год.
   * @param style the representation of the month /<br>представление месяца
   */
  localeYear(t = "numeric") {
    return this.locale("year", { year: t });
  }
  /**
   * Returns the formatted month.<br>
   * Возвращает отформатированный месяц.
   * @param style the representation of the month /<br>представление месяца
   */
  localeMonth(t = "long") {
    return this.locale("month", { month: t });
  }
  /**
   * Returns the formatted day.<br>
   * Возвращает отформатированный день.
   * @param style the representation of the month /<br>представление месяца
   */
  localeDay(t = "numeric") {
    return this.locale("day", { day: t });
  }
  /**
   * Returns the formatted hour.<br>
   * Возвращает отформатированный час.
   * @param style the representation of the month /<br>представление месяца
   */
  localeHour(t = "numeric") {
    return this.locale("hour", { hour: t });
  }
  /**
   * Returns the formatted minute.<br>
   * Возвращает отформатированную минуту.
   * @param style the representation of the month /<br>представление месяца
   */
  localeMinute(t = "numeric") {
    return this.locale("minute", { minute: t });
  }
  /**
   * Returns the formatted second.<br>
   * Возвращает отформатированную секунду.
   * @param style the representation of the month /<br>представление месяца
   */
  localeSecond(t = "numeric") {
    return this.locale("second", { second: t });
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(t = !0) {
    const e = new kt(this.date, this.type, "en-GB"), s = [];
    let i;
    return e.setHour24(!0), this.type === "hour-minute" ? i = e.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (s.push(e.localeYear()), s.push(e.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && s.push(e.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (i = e.locale("time"))), `${s.join("-")}${i ? `T${i}${t ? e.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.<br>
   * Изменять полностью дату.
   * @param value an integer value representing the number /<br>
   * целочисленное значение, представляющее число
   */
  setDate(t) {
    return this.date = K(t), this.update(), this;
  }
  /**
   * Change the type of data output.<br>
   * Изменить тип вывода данных.
   * @param value type of output /<br>тип вывод
   */
  setType(t) {
    return this.type = t, this.update(), this;
  }
  /**
   * Whether to use 12-hour time.<br>
   * Использовать ли 12-часовой формат времени.
   * @param value If true, output the 12-hour time format /<br>
   * если true, выводить 12-часовой формат времени
   */
  setHour24(t) {
    return this.hour24 = t, this.update(), this;
  }
  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode(t) {
    return this.code = t, this;
  }
  /**
   * The function is called when the data is updated.<br>
   * Функция вызывается при обновлении данных.
   * @param watch the function calls /<br>функция вызывает
   */
  setWatch(t) {
    return this.watch = t, this;
  }
  /**
   * The method sets the full year for a specified date according to local time.<br>
   * Метод устанавливает полный год указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setYear(t) {
    return this.date.setFullYear(t), this.update(), this;
  }
  /**
   * The method sets the month for a specified date according to the currently set year.<br>
   * Метод устанавливает месяц указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setMonth(t) {
    return this.date.setMonth(t - 1), this.update(), this;
  }
  /**
   * The method changes the day of the month of a given Date instance, based on local time.<br>
   * Метод устанавливает день месяца указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setDay(t) {
    return this.date.setDate(t), this.update(), this;
  }
  /**
   * The method sets the hours for a specified date according to local time.<br>
   * Метод устанавливает часы указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setHour(t) {
    return this.date.setHours(t), this.update(), this;
  }
  /**
   * The method sets the minutes for a specified date according to local time
   *
   * Метод устанавливает минуты указанной даты по местному времени
   * @param value value / значения
   */
  setMinute(t) {
    return this.date.setMinutes(t), this.update(), this;
  }
  /**
   * The method sets the seconds for a specified date according to local time.<br>
   * Метод устанавливает секунды указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setSecond(t) {
    return this.date.setSeconds(t), this.update(), this;
  }
  /**
   * Shift the date by a given value in years.<br>
   * Сдвинуть дату на заданное значение в годах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByYear(t) {
    return this.setYear(this.date.getFullYear() + t), this;
  }
  /**
   * Shift the date by a given value in months.<br>
   * Сдвинуть дату на заданное значение в месяцах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByMonth(t) {
    return this.setMonth(this.date.getMonth() + 1 + t), this;
  }
  /**
   * Shift the date by a given value in days.<br>
   * Сдвинуть дату на заданное значение в днях.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByDay(t) {
    return this.setDay(this.date.getDate() + t), this;
  }
  /**
   * Shift the date by a given value in hours.<br>
   * Сдвинуть дату на заданное значение в часах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByHour(t) {
    return this.setHour(this.date.getHours() + t), this;
  }
  /**
   * Shift the date by a given value in minutes.<br>
   * Сдвинуть дату на заданное значение в минутах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByMinute(t) {
    return this.setMinute(this.date.getMinutes() + t), this;
  }
  /**
   * Shift the date by a given value in seconds.<br>
   * Сдвинуть дату на заданное значение в секундах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveBySecond(t) {
    return this.setSecond(this.date.getSeconds() + t), this;
  }
  /**
   * Translate to the first month.<br>
   * Переводить на первый месяц.
   */
  moveMonthFirst() {
    return this.setMonth(1), this;
  }
  /**
   * Translate to the first month.<br>
   * Переводить на первый месяц.
   */
  moveMonthLast() {
    return this.setMonth(12), this;
  }
  /**
   * Translate to the first day of the next month.<br>
   * Переводить на первый день следующего месяца.
   */
  moveMonthNext() {
    return this.setDay(1).moveByMonth(1), this;
  }
  /**
   * Translate to the first day of the previous month.<br>
   * Переводить на первый день предыдущего месяца.
   */
  moveMonthPrevious() {
    return this.setDay(1).moveByMonth(-1), this;
  }
  /**
   * Translate to the first day of the week.<br>
   * Переводить на первый день недели.
   */
  moveWeekdayFirst() {
    const t = this.date.getDay(), e = this.getFirstDayCode();
    return this.moveByDay(
      (e === 6 ? -1 : e) - t
    ), this;
  }
  /**
   * Translate to the last day of the week.<br>
   * Переводить на последний день недели.
   */
  moveWeekdayLast() {
    return this.moveWeekdayFirst().moveByDay(6), this;
  }
  /**
   * Translate to the first day of the first week of the month.<br>
   * Переводить на первый день первой недели месяца.
   */
  moveWeekdayFirstByMonth() {
    return this.moveDayFirst().moveWeekdayFirst(), this;
  }
  /**
   * Translate to the first day of the first full week of the following month.<br>
   * Переводить на первый день первой полной недели следующего месяца.
   */
  moveWeekdayLastByMonth() {
    return this.moveDayLast().moveWeekdayLast(), this;
  }
  /**
   * Translate to the next week.<br>
   * Переводить на следующую неделю.
   */
  moveWeekdayNext() {
    return this.moveWeekdayFirst().moveByDay(7), this;
  }
  /**
   * Translate to the previous week.<br>
   * Переводить на предыдущую неделю.
   */
  moveWeekdayPrevious() {
    return this.moveWeekdayFirst().moveByDay(-7), this;
  }
  /**
   * Translate to the first day of the month.<br>
   * Переводить на первый день месяца.
   */
  moveDayFirst() {
    return this.setDay(1), this;
  }
  /**
   * Translate to the last day of the month.<br>
   * Переводить на последний день месяца.
   */
  moveDayLast() {
    return this.setDay(1).moveByMonth(1).moveByDay(-1), this;
  }
  /**
   * Translate to the next day.<br>
   * Переводить на следующий день.
   */
  moveDayNext() {
    return this.moveByDay(1), this;
  }
  /**
   * Translate to the previous day.<br>
   * Переводить на предыдущий день.
   */
  moveDayPrevious() {
    return this.moveByDay(-1), this;
  }
  /**
   * Clone the Date object.<br>
   * Клонировать объект Date.
   */
  clone() {
    return new Date(this.date);
  }
  /**
   * Clone the GeoDate object.<br>
   * Клонировать объект GeoDate.
   */
  cloneClass() {
    return new this.constructor(
      this.clone(),
      this.type,
      this.code
    );
  }
  /**
   * Clone the GeoDate object and set the month to January.<br>
   * Клонировать объект GeoDate и установить месяц на январь.
   */
  cloneMonthFirst() {
    return this.cloneClass().moveMonthFirst();
  }
  /**
   * Clone the GeoDate object and move the month to the end of the year.<br>
   * Клонировать объект GeoDate и перевести месяц на конец года.
   */
  cloneMonthLast() {
    return this.cloneClass().moveMonthLast();
  }
  /**
   * Clone the GeoDate object and transfer it one month ahead.<br>
   * Клонировать объект GeoDate и перевести на 1 месяц вперед.
   */
  cloneMonthNext() {
    return this.cloneClass().moveMonthNext();
  }
  /**
   * Clone the GeoDate object and transfer it one month back.<br>
   * Клонировать объект GeoDate и перевести на 1 месяц назад.
   */
  cloneMonthPrevious() {
    return this.cloneClass().moveMonthPrevious();
  }
  /**
   * Returns the first day of the week according to the current date.<br>
   * Возвращает первый день недели по текущей дате.
   */
  cloneWeekdayFirst() {
    return this.cloneClass().moveWeekdayFirst();
  }
  /**
   * Returns the last day of the week according to the current date.<br>
   * Возвращает последний день недели по текущей дате.
   */
  cloneWeekdayLast() {
    return this.cloneClass().moveWeekdayLast();
  }
  /**
   * Returns the first day of the week according to the current month.<br>
   * Возвращает первый день недели по текущему месяцу.
   */
  cloneWeekdayFirstByMonth() {
    return this.cloneClass().moveWeekdayFirstByMonth();
  }
  /**
   * Returns the last day of the week according to the current month.<br>
   * Возвращает последний день недели по текущему месяцу.
   */
  cloneWeekdayLastByMonth() {
    return this.cloneClass().moveWeekdayLastByMonth();
  }
  /**
   * Returns the next week according to the current date.<br>
   * Возвращает следующую неделю по текущей дате.
   */
  cloneWeekdayNext() {
    return this.cloneClass().moveWeekdayNext();
  }
  /**
   * Returns the previous week according to the current date.<br>
   * Возвращает предыдущую неделю по текущей дате.
   */
  cloneWeekdayPrevious() {
    return this.cloneClass().moveWeekdayPrevious();
  }
  /**
   * Clone the GeoDate object and move the day to the beginning of the month.<br>
   * Клонировать объект GeoDate и перевести день на начало месяца.
   */
  cloneDayFirst() {
    return this.cloneClass().moveDayFirst();
  }
  /**
   * Clone the GeoDate object and move the day to the end of the month.<br>
   * Клонировать объект GeoDate и перевести день на конец месяца.
   */
  cloneDayLast() {
    return this.cloneClass().moveDayLast();
  }
  /**
   * Clone the GeoDate object and move by 1 day.<br>
   * Клонировать объект GeoDate и перевести на 1 день.
   */
  cloneDayNext() {
    return this.cloneClass().moveDayNext();
  }
  /**
   * Clone the GeoDate object and go back by 1 day.<br>
   * Клонировать объект GeoDate и вернуться на 1 день.
   */
  cloneDayPrevious() {
    return this.cloneClass().moveDayPrevious();
  }
  /**
   * Updating all values.<br>
   * Обновление всех значений.
   */
  update() {
    var t;
    return (t = this.watch) == null || t.call(
      this,
      this.date,
      this.type,
      this.hour24
    ), this;
  }
}
const Wi = {
  Y: "[0-9]{4}",
  M: {
    type: "number",
    min: "1",
    max: "12"
  },
  D: (n) => {
    var e, s;
    return {
      type: "number",
      min: "1",
      max: new kt(`${((e = n == null ? void 0 : n.Y) == null ? void 0 : e.value) ?? "2000"}-${((s = n == null ? void 0 : n.M) == null ? void 0 : s.value) ?? "01"}-01`).getMaxDay().toString()
    };
  },
  h: {
    type: "number",
    min: "0",
    max: "23"
  },
  m: {
    type: "number",
    min: "0",
    max: "59"
  },
  s: {
    type: "number",
    min: "0",
    max: "59"
  }
};
class Yi {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type object of the mask type class /<br>объект класса тип маски
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.type = e;
  }
  /**
   * Returns a DateTime object.<br>
   * Возвращает объект DateTime.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  getDatetime(t) {
    var e;
    return new kt(t ?? "1987-12-18T10:20:30", this.type.getByDate(), (e = this.props) == null ? void 0 : e.language);
  }
  /**
   * Returns a mask for filling in the date.<br>
   * Возвращает маску для заполнения даты.
   */
  getMask() {
    return this.getDatetime().setHour24(!0).locale(void 0, "2-digit").replace("1987", "YYYY").replace("12", "MM").replace("18", "DD").replace("10", "hh").replace("20", "mm").replace("30", "ss").split("");
  }
  /**
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  getValue(t) {
    return this.getDatetime(t).locale(void 0, "2-digit");
  }
  /**
   * Returns the standardized date value.<br>
   * Возвращает стандартизированное значение даты.
   * @param date an object with a filled date, divided into groups of characters /<br>
   * объект с заполненной датой, разделенный на группы символов
   */
  getValueStandard(t) {
    var s, i, a, r, h, c;
    const e = `${((s = t == null ? void 0 : t.Y) == null ? void 0 : s.value) || "2000"}-${((i = t == null ? void 0 : t.M) == null ? void 0 : i.value) || "01"}-${((a = t == null ? void 0 : t.D) == null ? void 0 : a.value) || "01"}T${((r = t == null ? void 0 : t.h) == null ? void 0 : r.value) || "00"}:${((h = t == null ? void 0 : t.m) == null ? void 0 : h.value) || "00"}:${((c = t == null ? void 0 : t.s) == null ? void 0 : c.value) || "00"}`;
    return isNaN(Date.parse(e)) ? "" : this.getDatetime(e).standard(!1);
  }
  /**
   * Returns a validation template for the date.<br>
   * Возвращает шаблон проверки для даты.
   */
  getPattern() {
    return Wi;
  }
  /**
   * Returns a list of symbols for output by group name.<br>
   * Возвращает список символов для вывода по названию группы.
   * @param groupName group name /<br>название группы
   */
  getView(t) {
    var e;
    return (e = this.getViewList()) == null ? void 0 : e[t];
  }
  /**
   * Returns a list of symbols for output by group.<br>
   * Возвращает список символов для вывода по группе.
   */
  getViewList() {
    return {
      Y: "y",
      M: "m",
      D: "d",
      h: "h",
      m: "m",
      s: "s"
    };
  }
}
class Ki {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param rubberItem
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    this.props = t, this.type = e, this.rubberItem = s;
  }
  /**
   * Checks if there is a group for the remainder.<br>
   * Проверяет, есть ли группа для остатка.
   */
  isFractionRubber() {
    return this.props.fraction === !0;
  }
  /**
   * Gets an object for working with number formatting.<br>
   * Получает объект для работы с форматированием числа.
   */
  getIntl() {
    var t;
    return new Ie((t = this.props) == null ? void 0 : t.language);
  }
  /**
   * Getting the number of digits in the remainder.<br>
   * Получение количества чисел в остатке.
   */
  getFraction() {
    var e;
    if (this.type.isCurrency())
      return 2;
    const t = (e = this.props) == null ? void 0 : e.fraction;
    return typeof t == "number" ? t : typeof t == "string" && t.match(/[0-9]+/) ? Number(t) : this.rubberItem.is("f") ? this.rubberItem.getByIndex("f") + 1 : t === !0 ? 1 : 0;
  }
  /**
   * Returns masks for a number or price.<br>
   * Возвращает маски для числа или цены.
   */
  getMask() {
    return (this.type.isCurrency() ? this.getCurrency() : this.getNumber()).replace(/9/ig, "n").replace(/3/ig, "f").split("");
  }
  /**
   * Returns the settings of special characters for input.<br>
   * Возвращает настройки специальных символов для ввода.
   */
  getSpecial() {
    return {
      n: {},
      f: {
        defaultValue: "0"
      }
    };
  }
  /**
   * Getting instructions for forming a rubber mask.<br>
   * Получение инструкции для формирования резиновой маски.
   */
  getRubber() {
    return {
      n: {
        rubber: !0,
        transitionChar: this.getDecimal(),
        maxLength: 10
      },
      f: {
        rubber: this.isFractionRubber(),
        maxLength: 4
      }
    };
  }
  /**
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param value a string with a filled date /<br>строка с заполненной датой
   */
  getValueStandard(t) {
    var e, s;
    return `${((e = t == null ? void 0 : t.n) == null ? void 0 : e.value) || "0"}.${((s = t == null ? void 0 : t.f) == null ? void 0 : s.value) || "0"}`;
  }
  /**
   * Returns the data as a formatted number.<br>
   * Возвращает данные в виде отформатированного числа.
   */
  getNumber() {
    return this.getIntl().number(this.getNumberForString(), { maximumFractionDigits: 9 });
  }
  /**
   * Returns the data as a formatted price with a currency symbol.<br>
   * Возвращает данные в виде отформатированной цены с символом валюты.
   */
  getCurrency() {
    return this.getIntl().currency(this.getNumberForString());
  }
  /**
   * Returns a list of delimiter characters for transitioning to the drop group.<br>
   * Возвращает список символов-разделителей для перехода в группу дроп.
   */
  getDecimal() {
    return [this.getIntl().decimal(), "."];
  }
  /**
   * Returns a list of symbols for output by group name.<br>
   * Возвращает список символов для вывода по названию группы.
   */
  getView() {
    return "0";
  }
  /**
   * Returns a string with values for obtaining a formatted value.<br>
   * Возвращает строку со значениями для получения отформатированного значения.
   */
  getNumberForString() {
    var a;
    const t = this.getFraction(), e = $t("9", this.rubberItem.getByIndex("n") + 1), s = t ? `.${$t("3", t)}` : "", i = this.type.isCurrency() && ((a = this.props) != null && a.currency) ? ` ${this.props.currency}` : "";
    return `${e}${s}${i}`;
  }
}
class Gi extends H {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param format
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    super(() => this.initValue()), this.props = t, this.type = e, this.format = s;
  }
  /**
   * Checks if the character is special.<br>
   * Проверяет, является ли символ специальным.
   * @param char symbol for checking /<br>символ для проверки
   */
  isSpecial(t) {
    return this.get().indexOf(t) !== -1;
  }
  /**
   * Returns the transition symbol for the selected group.<br>
   * Проверяет, является ли символ перехода для выбранной группы.
   * @param groupName group name /<br>название группы
   * @param char symbol for checking /<br>символ для проверки
   */
  isTransitionChar(t, e) {
    const s = this.getTransitionChar(t);
    return s ? Ot(e, s) : !1;
  }
  /**
   * Checks if the special character is only 1.<br>
   * Проверяет, является ли специальный символ только 1.
   */
  isString() {
    return this.get().length <= 1;
  }
  /**
   * Checks if there are default values.<br>
   * Проверяет, есть ли значения по умолчанию.
   * @param groupName group name /<br>название группы
   */
  isDefault(t) {
    return !!this.getDefault(t);
  }
  /**
   * Returns a list of special symbols<br>.
   * Возвращает список специальных символов.
   */
  get() {
    var t, e;
    return this.getCache([
      (t = this.props) == null ? void 0 : t.type,
      (e = this.props) == null ? void 0 : e.special
    ]);
  }
  /**
   * Returns the first special symbol to determine the entry point.<br>
   * Возвращает первый специальный символ для определения места входа.
   */
  getFirst() {
    var t;
    return ((t = this.get()) == null ? void 0 : t[0]) ?? "*";
  }
  /**
   * Returns the default values.<br>
   * Возвращает значения по умолчанию.
   * @param groupName group name /<br>название группы
   */
  getDefault(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.defaultValue;
  }
  /**
   * Returns the transition symbol for the selected group.<br>
   * Возвращает символ перехода для выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getTransitionChar(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.transitionChar;
  }
  /**
   * Returns a regular expression for checking the incoming character by groups.<br>
   * Возвращает регулярное выражение для проверки входящего символа по группам.
   * @param groupName group name /<br>название группы
   */
  getMatch(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.match;
  }
  /**
   * Returns data for checking the selected group.<br>
   * Возвращает данные для проверки выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getPattern(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.pattern;
  }
  /**
   * Возвращает данные, по который будет отображать на экране.
   * @param groupName group name /<br>название группы
   */
  getView(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.view;
  }
  /**
   * Returns an array of all groups that have special symbols.<br>
   * Возвращает массив всех групп, у которых есть специальные символы.
   */
  getRubberList() {
    const t = {}, e = this.getSpecial();
    return V(e) && S(e, (s, i) => {
      s != null && s.rubber && (t[i] = s);
    }), t;
  }
  /**
   * Getting a special symbol from props.<br>
   * Получение специального символа из props.
   */
  getSpecial() {
    var t;
    return this.type.isCurrencyOrNumber() ? this.format.getSpecial() : ((t = this.props) == null ? void 0 : t.special) ?? "*";
  }
  /**
   * Getting data about a special symbol by group.<br>
   * Получение данных о специальном символе по группе.
   * @param groupName group name /<br>название группы
   */
  getSpecialItem(t) {
    const e = this.getSpecial();
    if (V(e) && t in e)
      return e[t];
  }
  /**
   * Processes all data and returns an array with a list of special symbols.<br>
   * Обрабатывает все данные и возвращает массив со списком специальных символов.
   */
  initValue() {
    if (this.type.isCurrencyOrNumber())
      return ["n", "f"];
    if (this.type.isTime())
      return ["Y", "M", "D", "h", "m", "s"];
    if (this.type.isDate())
      return ["Y", "M", "D"];
    const t = this.getSpecial();
    return W(t) ? t : k(t) ? Object.keys(t) : [t];
  }
}
const te = /[0-9]/;
class Ui {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param special
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.special = e;
  }
  /**
   * Checks if the symbol fits.<br>
   * Проверяет, подходит ли символ.
   * @param char symbol for checking /<br>символ для проверки
   * @param groupName group for checking /<br>группа для проверки
   */
  is(t, e) {
    const s = this.get(e);
    return s instanceof RegExp ? !!t.match(s) : U(s) ? !!t.match(new RegExp(s)) : !!t.match(te);
  }
  /**
   * Returns the value of the regular expression for checking.<br>
   * Возвращает значение регулярного выражения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  get(t) {
    var e;
    return (t && this.special.getMatch(t)) ?? ((e = this.props) == null ? void 0 : e.match) ?? te;
  }
  /**
   * Returns only the characters that can be entered from the string.<br>
   * Возвращает только символы, доступные для ввода из строки.
   * @param text text for checking /<br>текст для проверки
   */
  filter(t) {
    const e = this.special.get();
    return t.split("").filter((s) => e.find((i) => this.is(s, i)));
  }
}
class qi {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param special
   */
  constructor(t, e, s, i) {
    o(this, "inputs");
    this.props = t, this.type = e, this.date = s, this.special = i, this.inputs = new H(() => this.initInput());
  }
  /**
   * Checks if there is a global check of input data.<br>
   * Проверяет, есть ли глобальная проверка вводимых данных.
   */
  isCheck() {
    var t;
    return !!((t = this.props) != null && t.check);
  }
  /**
   * Returns data for verification by the group name.<br>
   * Возвращает данные для проверки по названию группы.
   * @param groupName group for checking /<br>группа для проверки
   */
  get(t) {
    var e;
    return t === "check" ? this.getCheck() : (e = this.getList()) == null ? void 0 : e[t];
  }
  /**
   * Returns a list of all available properties by groups.<br>
   * Возвращает список всех доступных свойств по группам.
   */
  getList() {
    const t = this.getByType();
    for (const e in t) {
      const s = this.getPattern(e);
      V(s) && V(t[e]) && Object.assign(t[e], s);
    }
    return t;
  }
  /**
   * Returns values for verification.<br>
   * Возвращает значения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  getPattern(t) {
    var e;
    return (t && this.special.getPattern(t)) ?? ((e = this.props) == null ? void 0 : e.pattern);
  }
  /**
   * Returns global data for input verification.<br>
   * Возвращает глобальные данные для проверки вводимых данных.
   */
  getCheck() {
    var t;
    return (t = this.props) == null ? void 0 : t.check;
  }
  /**
   * Returns an object for validation by its group.<br>
   * Возвращает объект для проверки на валидность по его группе.
   * @param groupName group for checking /<br>группа для проверки
   */
  getInput(t = "check") {
    var e;
    return (e = this.getInputList()) == null ? void 0 : e[t];
  }
  /**
   * Returns a list of objects for validation, divided by group name.<br>
   * Возвращает список объектов для проверки на валидность, разделенных по названию группы.
   */
  getInputList() {
    var t, e;
    return this.inputs.getCache([
      (t = this.props) == null ? void 0 : t.pattern,
      (e = this.props) == null ? void 0 : e.check
    ]);
  }
  /**
   * Returns a list of basic data for verification.<br>
   * Возвращает список базовых данных для проверки.
   */
  getByType() {
    if (this.type.isDate())
      return this.date.getPattern();
    const t = {};
    return this.special.get().forEach((e) => {
      t[e] = {};
    }), t;
  }
  /**
   * Initializes a list of input objects for validation.<br>
   * Инициализирует список объектов ввода для проверки на валидность.
   */
  initInput() {
    const t = {}, e = this.getCheck();
    return S(this.getList(), (s, i) => {
      t[i] = mt(s, i);
    }), e && (t.check = mt(e)), t;
  }
}
class Zi {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.type = e;
  }
  /**
   * Returns whether the type is a number or mirror.<br>
   * Возвращает, является ли тип номером или зеркальным.
   */
  isEnd() {
    var t;
    return this.type.isCurrencyOrNumber() || ((t = this.props) == null ? void 0 : t.dir) === "rtl" || !1;
  }
  /**
   * Checks if the alignment value is right.<br>
   * Проверяет, является ли значение выравнивания справа.
   */
  isRight() {
    var t;
    return ((t = this.props) == null ? void 0 : t.right) || this.isEnd();
  }
}
class Xi extends H {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param type
   * @param rubberItem
   * @param rubberTransition
   * @param special
   * @param match
   * @param format
   *
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a, r, h) {
    super(() => this.initList()), this.props = t, this.type = e, this.rubberItem = s, this.rubberTransition = i, this.special = a, this.match = r, this.format = h;
  }
  /**
   * Checks if the selected group is rubber.<br>
   * Проверяет, является ли выбранная группа резиновой.
   * @param groupName group name /<br>название группы
   */
  is(t) {
    return t in this.getList();
  }
  /**
   * Checks if the symbol is a transition.<br>
   * Проверяет, является ли символ перехода.
   * @param char checkable symbol /<br>проверяемая переменная
   */
  isTransition(t) {
    return this.getTransitionList().indexOf(t) >= 0;
  }
  /**
   * Checks if the selected group has data and whether it is rubber.<br>
   * Проверяет, есть ли данные у выбранной группы и является ли она резиновой.
   * @param data values for verification /<br>значения для проверки
   * @param groupName group name /<br>название группы
   */
  isValue(t, e) {
    return e in t && this.is(e);
  }
  /**
   * Getting properties for the rubber group.<br>
   * Получение свойства для резиновой группы.
   * @param groupName group name /<br>название группы
   */
  get(t) {
    var e;
    return (e = this.getList()) == null ? void 0 : e[t];
  }
  /**
   * Getting a list of rubber groups.<br>
   * Получение списка резиновых групп.
   */
  getList() {
    var t, e;
    return this.getCache([
      (t = this.props) == null ? void 0 : t.type,
      (e = this.props) == null ? void 0 : e.special
    ]);
  }
  /**
   * Getting a list of transition symbols.<br>
   * Получение списка символов перехода.
   */
  getTransitionList() {
    return Ue(
      Object.values(this.getList()).filter(
        (t) => "transitionChar" in t && (U(t.transitionChar) || W(t.transitionChar))
      ),
      "transitionChar"
    ).flat();
  }
  /**
   * Updates the group of rubber symbols if all conditions are met and returns true.<br>
   * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
   * @param data values for verification /<br>значения для проверки
   * @param groupName group name /<br>название группы
   * @param char symbol for checking /<br>символ для проверки
   */
  update(t, e, s) {
    const i = this.get(e), a = t == null ? void 0 : t[e];
    return i && a ? Ot(s, i == null ? void 0 : i.transitionChar) || i != null && i.maxLength && (i == null ? void 0 : i.maxLength) <= (a == null ? void 0 : a.maxLength) ? (this.rubberTransition.set(e), !1) : (a.end && this.match.is(s, e) && !this.rubberTransition.isChar(e) && (this.rubberItem.add(e), this.rubberTransition.reset()), !0) : !1;
  }
  /**
   * Reduces the length of the entered symbol by its group.<br>
   * Уменьшает длину вводимого символа по его группе.
   * @param groupName group name /<br>название группы
   */
  pop(t) {
    return this.rubberItem.pop(t);
  }
  /**
   * Resets all states of all groups to the initial one.<br>
   * Сбрасывает все состояния всех групп до начального.
   */
  reset() {
    return this.rubberItem.reset(), this.rubberTransition.reset(), this;
  }
  /**
   * Processes data to get an object to work with elastic groups.<br>
   * Обрабатывает данные для получения объекта для работы с резиновыми группами.
   */
  initList() {
    const t = this.special.getRubberList();
    return this.type.isCurrencyOrNumber() ? he(
      this.format.getRubber(),
      t
    ) : t;
  }
}
class Ji extends H {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param rubberItem
   * @param characterLength
   * @param date
   * @param format
   * @param special
   */
  constructor(e, s, i, a, r, h, c) {
    super(() => this.initMask());
    o(this, "info");
    this.props = e, this.type = s, this.rubberItem = i, this.characterLength = a, this.date = r, this.format = h, this.special = c, this.info = new H(() => this.initInfo());
  }
  /**
   * Returns the mask symbol by its index.<br>
   * Возвращает символ маски по его индексу.
   * @param index index of the symbol’s location /<br>индекс расположения символа
   */
  get(e) {
    var s;
    return ((s = this.getList()) == null ? void 0 : s[e]) ?? "";
  }
  /**
   * Returns an array with information about the location of all special characters.<br>
   * Возвращает массив с информацией о расположении всех специальных символов.
   */
  getInfo() {
    return this.info.getCache(this.getComparison());
  }
  /**
   * Returns information about the selection location.<br>
   * Возвращает информацию о месте выделения.
   * @param selection
   */
  getInfoBySelection(e) {
    const s = this.getInfo();
    return s.find((i) => i.key >= e) ?? s[s.length - 1];
  }
  /**
   * Returns the current mask.<br>
   * Возвращает текущую маску.
   */
  getList() {
    return this.getCache(this.getComparison());
  }
  /**
   * Returns the location number for replacement by its input symbol.<br>
   * Возвращает номер нахождения для замены по его символу ввода.
   * @param char input symbol /<br>символ ввода
   * @param selection minimum index for search <br>минимальный индекс для поиска
   */
  getByChar(e, s = -1) {
    let i = s;
    return this.getList().forEach((a, r) => {
      a === e && r >= s && (i = r);
    }), i;
  }
  /**
   * Returns the length of the active mask.<br>
   * Возвращает длину активной маски.
   */
  getLength() {
    return this.getList().length;
  }
  /**
   * Returns the length of the mask or the maximum length of masks if there are several.<br>
   * Возвращает длину маски или максимальную длину масок, если их несколько.
   */
  getMaxLength() {
    const e = this.getMask();
    return W(e) ? qe(e) : this.getList().length;
  }
  /**
   * Returns the length of only special characters.<br>
   * Возвращает длину только из специальных символов.
   */
  getLengthBySpecial() {
    return this.getInfo().length;
  }
  /**
   * Returns how many special characters were highlighted.<br>
   * Возвращает, сколько специальных символов было выделено.
   * @param start start of selection /<br>начало выделения
   * @param end end of selection /<br>конец выделения
   */
  getQuantity(e, s) {
    if (e === s)
      return 1;
    let i = 0;
    for (let a = e; a < s; a++)
      this.special.isSpecial(this.get(a)) && i++;
    return i;
  }
  /**
   * Returns data for cache to check for changes.<br>
   * Возвращает данные для кэша для проверки на изменения.
   */
  getComparison() {
    var e, s, i, a, r, h;
    return [
      this.characterLength.get(),
      ...this.rubberItem.getCode(),
      (e = this.props) == null ? void 0 : e.mask,
      (s = this.props) == null ? void 0 : s.special,
      (i = this.props) == null ? void 0 : i.fraction,
      (a = this.props) == null ? void 0 : a.currency,
      (r = this.props) == null ? void 0 : r.type,
      (h = this.props) == null ? void 0 : h.language
    ];
  }
  /**
   * Returns a list of masks.<br>
   * Возвращает список масок.
   */
  getMask() {
    var e;
    return ((e = this.props) == null ? void 0 : e.mask) ?? "";
  }
  /**
   * Returns the active mask.<br>
   * Возвращает активную маску.
   */
  getMaskActive() {
    const e = this.getMask();
    return W(e) ? e.find((s) => this.getSpecialLength(s) >= this.characterLength.get()) || (e == null ? void 0 : e[e.length - 1]) || "" : e;
  }
  /**
   * Returns the number of special characters in the current mask.<br>
   * Возвращает количество специальных символов в текущей маске.
   */
  getBasic() {
    return this.rubberItem.expandMask(this.getMaskActive()).split("");
  }
  /**
   * Returns the number of special characters in the current mask.<br>
   * Возвращает количество специальных символов в текущей маске.
   * @param mask selected mask /<br>выбранная маска
   */
  getSpecialLength(e) {
    return e.split("").filter((s) => this.special.isSpecial(s)).length;
  }
  /**
   * Generates a mask by type.<br>
   * Генерирует маску по типу.
   */
  initMask() {
    return this.type.isCurrencyOrNumber() ? this.format.getMask() : this.type.isDate() ? this.date.getMask() : this.getBasic();
  }
  /**
   * Generates information about special characters.<br>
   * Генерирует информацию о специальных символах.
   */
  initInfo() {
    const e = [];
    let s = 0;
    return this.getList().forEach((i, a) => {
      this.special.isSpecial(i) && (e.push({
        index: s,
        key: a,
        char: i
      }), s++);
    }), e;
  }
}
class Qi {
  /**
   * Constructor
   * @param special
   * @param mask
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    o(this, "value", 0);
    o(this, "immediate", 0);
    o(this, "shift", !1);
    this.special = t, this.mask = e;
  }
  /**
   * Getting the selection key number.<br>
   * Получение номера ключа выделения.
   */
  get() {
    return this.value;
  }
  /**
   * Returns the selection number for the first element that is a special symbol.
   * Возвращает номер выделения для первого элемента, являющегося специальным символом.
   */
  getFirst() {
    var t, e;
    return (e = (t = this.mask.getInfo()) == null ? void 0 : t[0]) == null ? void 0 : e.key;
  }
  /**
   * Getting the current key of the selected character.<br>
   * Получение текущего ключа выделенного символа.
   */
  getFocus() {
    return this.getCharacter(this.value);
  }
  /**
   * Getting the next key of the selected character.<br>
   * Получение следующего ключа выделенного символа.
   */
  getNext() {
    return this.getCharacter(this.value + 1);
  }
  /**
   * Getting the previous key of the selected symbol.<br>
   * Получение предыдущего ключа выделенного символа.
   */
  getPrevious() {
    return this.getCharacter(this.value - 1);
  }
  /**
   * Getting the key number of the nearest special character.<br>
   * Получение номера ключа ближайшего специального символа.
   */
  getImmediate() {
    return this.getCharacter(this.immediate);
  }
  /**
   * Getting the number of the key shifted to the left direction.
   * Получение номера ключа, сдвинутого в левом направлении.
   */
  getShift() {
    return this.shift ? this.value > 0 ? this.getCharacter(this.value - 1) + 1 : 0 : this.getFocus();
  }
  /**
   * Changing the selection key number.<br>
   * Изменение номера ключа выделения.
   * @param selection selection number /<br>номер выделения
   */
  set(t) {
    return this.value = t, this;
  }
  /**
   * Changes the selection key number according to the mask structure.<br>
   * Изменяет номер ключа выделения по структуре маски.
   * @param selection selection number /<br>номер выделения
   * @param focus is the element in focus /<br>элемент в фокусе ли
   */
  setByMask(t, e = !0) {
    if (e) {
      let s, i;
      this.mask.getInfo().forEach((a) => {
        s === void 0 && a.key >= t && (s = a.index), a.key <= t && (i = a.index);
      }), this.set(s !== void 0 ? s : this.mask.getLengthBySpecial()), this.setImmediate(i !== void 0 ? i : this.mask.getLengthBySpecial());
    }
    return this;
  }
  /**
   * Changing the selection key for the nearest special character.<br>
   * Изменение ключа выделения для ближайшего специального символа.
   * @param immediate selection key number /<br>номер ключа выделения
   */
  setImmediate(t) {
    return this.immediate = t, this;
  }
  /**
   * Turning shift on or off.<br>
   * Включение или отключение сдвига.
   * @param shift value for shift /<br>значение для сдвига
   */
  setShift(t) {
    return this.shift = t, this;
  }
  /**
   * Resets the selection key for the nearest special character to the selection location.<br>
   * Сбрасывает ключ выделения для ближайшего специального символа до места выделения.
   */
  resetImmediate() {
    return this.immediate = this.value <= 0 ? 0 : this.value - 1, this;
  }
  /**
   * Move the selection location back by 1 step.
   * Передвигаем место выделения назад на 1 шаг.
   */
  goBack() {
    return this.value > 0 && this.value--, this;
  }
  /**
   * Move the selection location forward by 1 step.
   * Передвигаем место выделения вперед на 1 шаг.
   */
  goNext() {
    return this.value <= this.mask.getLength() && this.value++, this;
  }
  /**
   * Getting the key number at the selection location.<br>
   * Получение номера ключа по месту выделения.
   * @param selection selection location /<br>место выделения
   */
  getCharacter(t) {
    for (const e of this.mask.getInfo())
      if (e.index >= t)
        return e.key;
    return this.mask.getLength();
  }
}
const at = "~";
class tn {
  /**
   * Constructor
   * @param rubberItem
   * @param characterLength
   * @param special
   * @param rubber
   * @param mask
   * @param selection
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a, r) {
    o(this, "value", []);
    this.rubberItem = t, this.characterLength = e, this.special = s, this.rubber = i, this.mask = a, this.selection = r;
  }
  /**
   * Checks if the value is filled.<br>
   * Проверяет, заполнено ли значение.
   */
  is() {
    return this.value.length > 0;
  }
  /**
   * Checks if the selected character was previously deleted.<br>
   * Проверяет, является ли выделенный символ ранее удаленным.
   */
  isCharDelete() {
    const t = this.selection.get();
    return t in this.value && this.value[t] === at;
  }
  /**
   * Getting input characters.<br>
   * Получение вводимых символов.
   */
  get() {
    return this.value;
  }
  /**
   * Getting the selected mask character.<br>
   * Получение выбранного символа маски.
   */
  getFocus() {
    return this.mask.get(this.selection.getFocus());
  }
  /**
   * Getting the mask character by the key number of the nearest special character.<br>
   * Получение символа маски по номеру ключа ближайшего специального символа.
   */
  getImmediate() {
    return this.mask.get(this.selection.getImmediate());
  }
  /**
   * Getting the next mask character.<br>
   * Получение следующего символа маски.
   */
  getNext() {
    return this.mask.get(this.selection.getNext());
  }
  /**
   * Adding 1 entered character at its selection location.<br>
   * Добавление 1 введенного символа по месту его выделения.
   * @param char entered character /<br>введенный символ
   */
  add(t) {
    return this.value.splice(this.selection.get(), this.isCharDelete() ? 1 : 0, t), this.selection.goNext().resetImmediate(), this.updateLength(), this;
  }
  /**
   * Deleting 1 entered character at its selection location.<br>
   * Удаление 1 введенного символа по месту его выделения.
   */
  pop() {
    const t = this.selection.get() - 1;
    return this.isSpecialNextAnother() ? this.value[t] = at : (this.value.splice(t, 1), this.updateLength()), this.selection.goBack().resetImmediate(), this;
  }
  /**
   * Resets the values to the initial values.<br>
   * Сбрасывает значения до начальных значений.
   */
  reset() {
    return this.value = [], this.selection.set(0).resetImmediate(), this.updateLength(), this;
  }
  /**
   * Shifts by 1 value depending on the direction of selection change.<br>
   * Сдвигает на 1 значение в зависимости от направления изменения выделения.
   * @param status shift status /<br>статус сдвига
   */
  shift(t = 1) {
    return this.characterLength.set(this.value.length + t), this;
  }
  /**
   * Checks if there is another group of special characters ahead.<br>
   * Проверяет, если впереди другая группа специальных символов.
   */
  isSpecialNextAnother() {
    const t = this.selection.get() - 1, e = this.value.length;
    if (t >= 0 && t <= e) {
      const s = this.mask.getInfo(), i = s[t].char;
      if (!this.rubberItem.is(i)) {
        for (let a = t; a < e; a++)
          if (a in s) {
            const r = s[a].char;
            if (this.special.isSpecial(r) && i !== r)
              return !0;
          }
      }
    }
    return !1;
  }
  /**
   * Updates of the length of entered characters.<br>
   * Обновления длины введенных символов.
   */
  updateLength() {
    return this.characterLength.set(this.value.length), this;
  }
}
class en extends H {
  constructor(t, e, s, i) {
    super(() => this.initValue()), this.rubberTransition = t, this.mask = e, this.special = s, this.character = i;
  }
  /**
   * Checks if the values are filled in.<br>
   * Проверяет, заполнены ли значения.
   */
  is() {
    return this.getLength() > 0;
  }
  /**
   * Receiving basic standard values.<br>
   * Получение базовых стандартных значений.
   */
  get() {
    return this.getCache([
      ...this.mask.getList(),
      ...this.character.get()
    ]);
  }
  /**
   * Getting the character from the basic standard values by its key number.<br>
   * Получение символа из базовых стандартных значений по его номеру ключа.
   * @param index key number /<br>номер ключа
   */
  getChar(t) {
    var e;
    return (e = this.get()) == null ? void 0 : e[t];
  }
  /**
   * Getting the length of basic standard values.<br>
   * Получение длины базовых стандартных значений.
   */
  getLength() {
    return this.get().length;
  }
  /**
   * Initialization of basic standard values.<br>
   * Инициализация базовых стандартных значений.
   */
  initValue() {
    const t = this.character.get(), e = [];
    let s = 0;
    for (const i of this.mask.getList())
      if (!this.special.isSpecial(i))
        e.push(i);
      else if (s in t) {
        if (e.push(t[s++]), s > t.length && this.rubberTransition.is() && !this.rubberTransition.isChar(i))
          break;
      } else
        break;
    return e.join("");
  }
}
class sn {
  /**
   * Constructor
   * @param type
   * @param date
   * @param format
   * @param mask
   * @param special
   * @param valueBasic
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a, r) {
    o(this, "info");
    o(this, "valueFinal");
    this.type = t, this.date = e, this.format = s, this.mask = i, this.special = a, this.valueBasic = r, this.info = new H(() => this.initInfo()), this.valueFinal = new H(() => this.initValue());
  }
  /**
   * Checks if the mask is fully filled.<br>
   * Проверяет, полностью ли заполнена маска.
   */
  isFull() {
    for (const t of Object.values(this.getInfo()))
      if (!t.full)
        return !1;
    return !0;
  }
  /**
   * Checks if the mask is fully filled by length.<br>
   * Проверяет, полностью ли заполнена маска по длине.
   */
  isEnd() {
    for (const t of Object.values(this.getInfo()))
      if (!t.end)
        return !1;
    return !0;
  }
  /**
   * Checks if the values are fully filled in for the group.<br>
   * Проверяет, полностью ли заполнены значения по группе.
   * @param groupName group name /<br>название группы
   */
  isFullByGroup(t) {
    var e;
    return ((e = this.getInfoItem(t)) == null ? void 0 : e.full) ?? !1;
  }
  /**
   * Getting the final value for export.<br>
   * Получение конечного значения для экспорта.
   */
  get() {
    return this.type.isCurrencyOrNumber() ? this.format.getValueStandard(this.getInfo()) : this.type.isDate() ? this.isFull() ? this.date.getValueStandard(this.getInfo()) : "" : this.valueFinal.getCache([
      ...this.valueBasic.get()
    ]);
  }
  /**
   * Getting full information for global verification.<br>
   * Получение полной информации для глобальной проверки.
   */
  getForCheck() {
    const t = this.get();
    return {
      group: "check",
      value: t,
      maxLength: t.length,
      full: this.isFull(),
      end: this.isEnd(),
      chars: t.split("")
    };
  }
  /**
   * Receiving a list with information about standard values.<br>
   * Получение списка с информацией о стандартных значениях.
   */
  getInfo() {
    return this.info.getCache([
      this.valueBasic.get(),
      ...this.mask.getList()
    ]);
  }
  /**
   * Getting information for a specific group.<br>
   * Получение информации для конкретной группы.
   * @param groupName group name /<br>название группы
   */
  getInfoItem(t) {
    var e;
    return (e = this.getInfo()) == null ? void 0 : e[t];
  }
  /**
   * Checks if there is a value by the key number in the basic values.<br>
   * Проверяет, есть ли значение по номеру ключа в базовых значениях.
   * @param index key number /<br>номер ключа
   */
  isStandard(t) {
    return !!this.valueBasic.getChar(t);
  }
  /**
   * Adding a new character to the list, divided by groups, if it is not there,
   * and returning the property of the given group.<br>
   * Добавление нового символа в список, разделенный по группам, если его там нет,
   * и возвращение свойства данной группы.
   * @param data data for verification /<br>данные для проверки
   * @param groupName group name /<br>название группы
   */
  add(t, e) {
    return e in t || (t[e] = {
      group: e,
      value: "",
      maxLength: 0,
      full: !1,
      end: !1,
      chars: []
    }), t[e];
  }
  /**
   * Initialization of the list with information about standard values.<br>
   * Инициализация списка с информацией о стандартных значениях.
   */
  initInfo() {
    const t = this.valueBasic.get(), e = {};
    return this.mask.getList().forEach((s, i) => {
      if (this.special.isSpecial(s)) {
        const a = this.add(e, s);
        this.isStandard(i) && t[i] !== at && a.chars.push(t[i]), a.maxLength++, a.value = a.full ? a.chars.join("") : "", a.full = this.special.isDefault(s) || a.maxLength === a.chars.length, a.end = a.maxLength === a.chars.length;
      }
    }), e;
  }
  initValue() {
    const t = this.valueBasic.get().split(""), e = this.mask.getList();
    let s = "";
    for (const i in e)
      if (i in t)
        s += t[i];
      else {
        const a = this.special.getDefault(e[i]);
        a && (s += a);
      }
    return s;
  }
}
class nn {
  /**
   * Constructor
   * @param pattern
   * @param value
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.pattern = t, this.value = e;
  }
  /**
   * Checks if the current group has an error.<br>
   * Проверяет, есть ли ошибка у текущей группы.
   * @param groupName group name /<br>название группы
   */
  isError(t) {
    var s;
    const e = (s = this.get()) == null ? void 0 : s.group;
    return !!(e && (e === t || e === "check"));
  }
  /**
   * Checks the correctness of filling in the values.<br>
   * Проверяет корректность заполнения значений.
   */
  checkValidity() {
    return this.get() === void 0;
  }
  /**
   * We get an object with information about the error if there is an error, or undefined.<br>
   * Получаем объект с информацией об ошибке, если есть ошибка, или undefined.
   */
  get() {
    for (const t of Object.values(this.pattern.getInputList())) {
      const e = this.value.getInfoItem(t.group);
      if (e && e.full) {
        const s = t.check(e.value);
        if (s && !s.status)
          return s;
      }
    }
    return this.getValidationCheck();
  }
  /**
   * Getting an error message.<br>
   * Получение сообщения об ошибке.
   */
  getMessage() {
    var t;
    return ((t = this.get()) == null ? void 0 : t.validationMessage) ?? "";
  }
  /**
   * Getting global check data.<br>
   * Получение данных глобальной проверки.
   */
  getValidationCheck() {
    var t;
    if (this.value.isFull()) {
      const e = this.value.getForCheck();
      if (this.pattern.isCheck()) {
        const s = (t = this.pattern.getInput(e.group)) == null ? void 0 : t.check(e.value);
        if (s && !s.status)
          return s;
      }
      return {
        value: e.value,
        required: !0
      };
    }
    return {
      value: this.value.get(),
      required: !1
    };
  }
}
const an = "_";
class on {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param format
   * @param special
   * @param rubber
   * @param mask
   * @param valueBasic
   * @param validation
   * @param className define class names for each symbol /<br>определить названия класс для каждого символа
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a, r, h, c, u, g = "is-character") {
    this.props = t, this.type = e, this.date = s, this.format = i, this.special = a, this.rubber = r, this.mask = h, this.valueBasic = c, this.validation = u, this.className = g;
  }
  /**
   * Returns an array with information for displaying on the screen.<br>
   * Возвращает массив с информацией для вывода на экран.
   */
  get() {
    const t = [], e = this.valueBasic.get();
    return this.mask.getList().forEach((s, i) => {
      const a = e == null ? void 0 : e[i];
      t.push({
        className: `${this.className} ${this.className}--${this.getStatus(s, a)}`,
        value: this.getValue(s, a)
      });
    }), t;
  }
  /**
   * Getting the basic standard values for the input field.<br>
   * Получение базовых стандартных значений для поля ввода.
   */
  getInput() {
    const t = [], e = this.mask.getList();
    return this.valueBasic.get().split("").forEach((s, i) => {
      s === at ? t.push(
        this.getSpecialToView((e == null ? void 0 : e[i]) ?? "") ?? s
      ) : t.push(s);
    }), t.join("");
  }
  /**
   * Checks if the value is filled in.<br>
   * Проверяет, заполнено ли значение.
   * @param value input values /<br>вводимые значения
   */
  isValue(t) {
    return !!(t && t !== at);
  }
  /**
   * Returns the status by the entered symbol and the location.<br>
   * Возвращает статус по введенному символу и месту.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param value input values /<br>вводимые значения
   */
  getStatus(t, e) {
    return this.isValue(e) ? this.special.isSpecial(t) ? this.validation.isError(t) ? "error" : "special" : "standard" : this.rubber.isTransition(t) ? "transition" : "placeholder";
  }
  /**
   * Returns a symbol from a filled value by mask or special symbol.<br>
   * Возвращает символ из заполненного значения по маске или специальному символу.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param value input values /<br>вводимые значения
   */
  getValue(t, e) {
    return this.isValue(e) ? e : this.getSpecialToView(t);
  }
  /**
   * Returns a special symbol for output by the entered symbol.<br>
   * Возвращает специальный символ для вывода по введенному символу.
   * @param char checkable symbol /<br>проверяемая переменная
   */
  getSpecialToView(t) {
    var e;
    return this.special.isSpecial(t) ? this.getViewChar(t) ?? this.special.getView(t) ?? ((e = this.props) == null ? void 0 : e.view) ?? an : t;
  }
  /**
   * Returns a special symbol by symbol.<br>
   * Возвращает специальный символ по типу символа.
   * @param groupName group name /<br>название группы
   */
  getViewChar(t) {
    if (this.type.isDate())
      return this.date.getView(t);
    if (this.type.isCurrencyOrNumber())
      return this.format.getView();
  }
}
class rn {
  /**
   * Constructor
   * @param validation
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    o(this, "type");
    o(this, "event");
    this.validation = t, this.callbackEvent = e;
  }
  /**
   * Checks whether additional data needs to be generated for the current event.<br>
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   */
  isValue() {
    return !!(this.type && ["input", "change"].indexOf(this.type) >= 0);
  }
  /**
   * Initializes event handling.<br>
   * Инициализирует обработку событий.
   */
  go() {
    if (this.type && this.event) {
      const t = this.isValue() ? this.validation.get() : void 0;
      this.callbackEvent(this.type, this.event, t);
    }
    return this;
  }
  /**
   * Changes the event type and event data.<br>
   * Изменяет тип события и данные события.
   * @param type event name /<br>название события
   * @param event event object /<br>объект события
   */
  set(t, e) {
    return this.setType(t), this.setEvent(e), this;
  }
  /**
   * Changes the event type.<br>
   * Изменяет тип события.
   * @param type event name /<br>название события
   */
  setType(t) {
    return this.type = t, this;
  }
  /**
   * Changes the event object.<br>
   * Изменяет объект события.
   * @param event event object /<br>объект события
   */
  setEvent(t) {
    return this.event = t, this;
  }
  /**
   * Resets the state.<br>
   * Сбрасывает состояние.
   */
  reset() {
    return this.resetType(), this.resetEvent(), this;
  }
  /**
   * Resets the type state.<br>
   * Сбрасывает состояние тип.
   */
  resetType() {
    return this.type = void 0, this;
  }
  /**
   * Resets the event state.<br>
   * Сбрасывает состояние события.
   */
  resetEvent() {
    return this.event = void 0, this;
  }
}
class hn {
  /**
   * Constructor
   * @param type
   * @param buffer
   * @param focus
   * @param rubberTransition
   * @param date
   * @param special
   * @param match
   * @param rubber
   * @param mask
   * @param selection
   * @param character
   * @param valueBasic
   * @param value
   * @param emit
   * @param element input element /<br>элемент ввода
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a, r, h, c, u, g, x, rt, _e, Pe, Fe) {
    this.type = t, this.buffer = e, this.focus = s, this.rubberTransition = i, this.date = a, this.special = r, this.match = h, this.rubber = c, this.mask = u, this.selection = g, this.character = x, this.valueBasic = rt, this.value = _e, this.emit = Pe, this.element = Fe;
  }
  /**
   * Adding new characters that can be entered by the user.<br>
   * Добавление новых вводимых символов.
   * @param selection number of the selected key /<br>номер выделенного ключа
   * @param chars a list of values that are entered by the user /<br>список вводимых значений
   * @param focus is the element focused /<br>находится ли элемент в фокусе
   */
  add(t, e, s = !0) {
    let i = !1;
    return this.selection.setByMask(t, s), this.rubberTransition.reset(), Q(e).forEach((a) => {
      const r = this.character.getFocus(), h = this.character.getImmediate();
      this.selection.setShift(
        this.rubber.update(this.value.getInfo(), h, a)
      ), this.rubberTransition.is() ? this.selection.setByMask(
        this.mask.getByChar(this.rubberTransition.get(), this.selection.getImmediate()) + 1,
        s
      ) : this.match.is(a, r) && (this.character.shift(), this.character.getFocus() && (this.mask.getMaxLength() > this.valueBasic.getLength() || this.character.isCharDelete()) && (this.character.add(a), i = !0));
    }), this.goSelection(), i;
  }
  /**
   * Removing selected input characters.<br>
   * Удаление выделенных вводимых символов.
   * @param start location of the start of the selected area /<br>место начала выделенной области
   * @param end location of the end of the selected area /<br>конечный место выделенной области
   * @param focus is the element focused /<br>находится ли элемент в фокусе
   */
  pop(t, e = t, s = !0) {
    if (t >= 0 && e <= this.mask.getMaxLength()) {
      let i = this.mask.getQuantity(t, e);
      for (s && this.selection.setByMask(e); i--; )
        this.rubberTransition.reset(), this.character.pop(), this.character.shift(0), this.selection.setShift(
          this.rubber.pop(this.character.getFocus())
        );
      this.goSelection();
    }
    return this;
  }
  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset(t = "") {
    if (this.character.reset(), this.rubber.reset(), $(t)) {
      const e = this.type.isDate() ? this.date.getValue(t) : t;
      this.add(0, this.extra(e.split("")));
    }
    return this;
  }
  /**
   * Removing extra values for insertion.<br>
   * Удаление лишних значений для вставки.
   * @param chars insertion of symbols /<br>вставка символов
   */
  extra(t) {
    var r, h;
    if (this.character.is())
      return t;
    const e = this.mask.getList(), s = [...t];
    let i = this.match.get((h = (r = this.mask.getInfo()) == null ? void 0 : r[0]) == null ? void 0 : h.char), a = 0;
    if (i)
      for (const c in e) {
        const u = e[c];
        if (this.special.isSpecial(u)) {
          for (let g = a; g < s.length && (a++, !s[g].match(i)); g++)
            ;
          i = this.match.get(u);
        } else if (u.match(i)) {
          let g = !1;
          for (let x = a; x < s.length; x++) {
            const rt = s[x];
            if (a++, rt.match(i)) {
              u === rt ? (s.splice(x, 1), a--) : g = !0;
              break;
            }
          }
          if (g)
            break;
        }
      }
    return s;
  }
  /**
   * Restores the selection location.<br>
   * Восстанавливает место выделения.
   */
  goSelection(t = !0) {
    return this.focus.is() && requestAnimationFrame(() => {
      if (this.element.value && (!t || !this.goBuffer())) {
        const e = this.valueBasic.getLength(), s = this.selection.getShift(), i = e < s ? e : s;
        this.element.value.selectionEnd = i, this.element.value.selectionStart = i;
      }
    }), this;
  }
  /**
   * Checks if the data is in the buffer. If it is, then add it.<br>
   * Проверяет, если данный в буфер. Если есть, то добавляем.
   */
  goBuffer() {
    return this.buffer.is() ? (this.add(this.selection.getShift(), this.buffer.get()), this.buffer.resetChars(), !0) : (this.buffer.reset(), this.emit.go(), !1);
  }
}
class cn {
  /**
   * Constructor
   * @param buffer
   * @param focus
   * @param characterLength
   * @param right
   * @param selection
   * @param valueBasic
   * @param validation
   * @param emit
   * @param data
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a, r, h, c, u) {
    o(this, "change", !1);
    o(this, "unidentified");
    this.buffer = t, this.focus = e, this.characterLength = s, this.right = i, this.selection = a, this.valueBasic = r, this.validation = h, this.emit = c, this.data = u;
  }
  /**
   * Capture of the event in focus.<br>
   * Перехват события в фокусе.
   * @param event event object /<br>объект события
   */
  onFocus(t) {
    this.change = !1, this.focus.in(), this.emit.set("focus", t).go();
  }
  /**
   * Capture of the event when focus is lost.<br>
   * Перехват события при потере фокуса.
   * @param event event object /<br>объект события
   */
  onBlur(t) {
    this.change && this.emit.setType("change").go(), this.focus.out(), this.emit.set("blur", t).go();
  }
  /**
   * Intercepting keypress to get a character.<br>
   * Перехват нажатия для получения символа.
   * @param event invoked event /<br>вызываемое событие
   */
  onKeydown(t) {
    const e = this.getSelectionInfo(t), {
      start: s,
      end: i
    } = e;
    this.emit.set("keydown", t).go(), !this.isMetaKey(t) && (this.isKey(t) ? t.key === "Backspace" ? (s > 0 || s !== i) && this.data.pop(s, i) : t.key.length <= 1 && (s === i ? this.buffer.go(t.key) && this.data.add(s, t.key) : (this.buffer.goStart(), this.data.pop(s, i).add(this.selection.getShift(), t.key))) : this.unidentified = e);
  }
  /**
   * Intercept key release to check for arrow presses.<br>
   * Перехват отпуска клавиши для проверки нажатия на стрелки.
   * @param event invoked event /<br>вызываемое событие
   */
  onKeyup(t) {
    this.emit.set("keyup", t).go(), !this.isMetaKey(t) && this.isKey(t) && [
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft"
    ].indexOf(t.key) >= 0 && (this.makeToEnd(t), this.makeToStart(t));
  }
  /**
   * Intercepting the event before data modification.<br>
   * Перехват события перед изменением данных.
   * @param event invoked event /<br>вызываемое событие
   */
  onBeforeinput(t) {
    this.emit.set("beforeinput", t).go(), this.unidentified || (this.makeChange(t), be(t));
  }
  /**
   * Intercepting the event during data modification.
   * Перехват события при изменении данных.
   * @param event invoked event /<br>вызываемое событие
   */
  onInput(t) {
    if (this.unidentified) {
      const e = t.target;
      (this.unidentified.length > e.value.length || this.unidentified.start !== this.unidentified.end) && this.data.pop(this.unidentified.start, this.unidentified.end), "data" in t ? t.data && this.buffer.go(t.data) && this.data.add(this.unidentified.start, t.data) : this.data.reset(e.value), this.makeChange(t), this.unidentified = void 0;
    }
  }
  /**
   * Intercepting the event of data insertion from the buffer.<br>
   * Перехват события вставки данных из буфера.
   * @param event invoked event /<br>вызываемое событие
   */
  onPaste(t) {
    const {
      start: e,
      end: s
    } = this.getSelectionInfo(t);
    ts(t).then((i) => {
      const a = i.split("");
      e === s ? this.data.add(e, this.data.extra(a)) : this.data.pop(e, s).add(this.selection.getShift(), this.data.extra(a)), this.change = !0, this.emit.set("paste", t).go();
    }).catch((i) => console.error("getClipboardData", i));
  }
  /**
   * Intercepting the change event, this is for intercepting the browser’s autocomplete event.<br>
   * Перехват события изменения, это для перехвата события автозаполнения в браузере.
   * @param event invoked event /<br>вызываемое событие
   */
  onChange(t) {
    const e = t.target;
    this.data.reset(e.value), this.emit.set("change", t).go();
  }
  /**
   * Intercepting the click event to change the selection location, if necessary.<br>
   * Перехват события клика для изменения места выделения, если это необходимо.
   * @param event invoked event /<br>вызываемое событие
   */
  onClick(t) {
    this.makeToEnd(t), this.makeToStart(t);
  }
  /**
   * Was the meta button pressed.<br>
   * Была ли нажата мета-кнопка.
   * @param event invoked event /<br>вызываемое событие
   */
  isMetaKey(t) {
    return t.metaKey || t.altKey || t.ctrlKey;
  }
  /**
   * Checks the key values in the event.<br>
   * Проверяет значения key в событии.
   * @param event invoked event /<br>вызываемое событие
   */
  isKey(t) {
    return "key" in t && t.key !== "Unidentified";
  }
  /**
   * Getting data about the selection at the event element.<br>
   * Получение данных о выделении у элемента события.
   * @param event invoked event /<br>вызываемое событие
   */
  getSelectionInfo(t) {
    const e = t.target;
    return {
      target: e,
      start: e.selectionStart ?? 0,
      end: e.selectionEnd ?? 0,
      length: e.value.length
    };
  }
  /**
   * Preparing to send an event.<br>
   * Подготовка для отправки события.
   * @param event invoked event /<br>вызываемое событие
   */
  makeChange(t) {
    this.change = !0, this.emit.set("input", t), !this.buffer.is() && (this.emit.go(), this.emit.resetType());
  }
  /**
   * Changes the cursor position if the alignment is right.<br>
   * Изменяет место указателя, если выравнивание справа.
   * @param event invoked event /<br>вызываемое событие
   */
  makeToEnd(t) {
    if (this.right.isRight()) {
      const e = this.valueBasic.getLength(), {
        target: s,
        start: i,
        end: a
      } = this.getSelectionInfo(t);
      i > e && (s.selectionStart = e), a > e && (s.selectionEnd = e);
    }
  }
  /**
   * Check when selecting from the front, before all special characters.<br>
   * Проверка при выделении спереди, перед всеми специальными символами.
   * @param event invoked event /<br>вызываемое событие
   */
  makeToStart(t) {
    const e = this.selection.getFirst(), {
      target: s,
      start: i
    } = this.getSelectionInfo(t);
    i < e && (s.selectionStart = e, s.selectionEnd = e);
  }
}
class ln {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   */
  constructor(t, e, s, i = "is-character") {
    o(this, "type");
    o(this, "buffer");
    o(this, "focus");
    o(this, "rubberItem");
    o(this, "rubberTransition");
    o(this, "characterLength");
    o(this, "date");
    o(this, "format");
    o(this, "special");
    o(this, "match");
    o(this, "pattern");
    o(this, "right");
    o(this, "rubber");
    o(this, "item");
    o(this, "selection");
    o(this, "character");
    o(this, "valueBasic");
    o(this, "value");
    o(this, "validation");
    o(this, "view");
    o(this, "emit");
    o(this, "data");
    o(this, "event");
    o(this, "oldValue", "");
    this.type = new Pi(t), this.buffer = new Fi(), this.focus = new Oi(this.buffer), this.rubberItem = new Ni(), this.rubberTransition = new Ri(), this.characterLength = new Vi(), this.date = new Yi(t, this.type), this.format = new Ki(
      t,
      this.type,
      this.rubberItem
    ), this.special = new Gi(
      t,
      this.type,
      this.format
    ), this.match = new Ui(t, this.special), this.pattern = new qi(
      t,
      this.type,
      this.date,
      this.special
    ), this.right = new Zi(
      t,
      this.type
    ), this.rubber = new Xi(
      t,
      this.type,
      this.rubberItem,
      this.rubberTransition,
      this.special,
      this.match,
      this.format
    ), this.item = new Ji(
      t,
      this.type,
      this.rubberItem,
      this.characterLength,
      this.date,
      this.format,
      this.special
    ), this.selection = new Qi(
      this.special,
      this.item
    ), this.character = new tn(
      this.rubberItem,
      this.characterLength,
      this.special,
      this.rubber,
      this.item,
      this.selection
    ), this.valueBasic = new en(
      this.rubberTransition,
      this.item,
      this.special,
      this.character
    ), this.value = new sn(
      this.type,
      this.date,
      this.format,
      this.item,
      this.special,
      this.valueBasic
    ), this.validation = new nn(
      this.pattern,
      this.value
    ), this.view = new on(
      t,
      this.type,
      this.date,
      this.format,
      this.special,
      this.rubber,
      this.item,
      this.valueBasic,
      this.validation,
      i
    ), this.emit = new rn(
      this.validation,
      s
    ), this.data = new hn(
      this.type,
      this.buffer,
      this.focus,
      this.rubberTransition,
      this.date,
      this.special,
      this.match,
      this.rubber,
      this.item,
      this.selection,
      this.character,
      this.valueBasic,
      this.value,
      this.emit,
      e
    ), this.event = new cn(
      this.buffer,
      this.focus,
      this.characterLength,
      this.right,
      this.selection,
      this.valueBasic,
      this.validation,
      this.emit,
      this.data
    ), t != null && t.value && (this.oldValue = Lt(t == null ? void 0 : t.value), this.data.reset(this.oldValue));
  }
  /**
   * Receiving basic standard values.<br>
   * Получение базовых стандартных значений.
   */
  getValueBasic() {
    if (this.right.isRight()) {
      let t = "";
      return this.view.get().forEach((e) => {
        t += e.value;
      }), t;
    }
    return this.view.getInput();
  }
  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses() {
    return {
      "??--value": this.characterLength.is(),
      "??--end": this.right.isEnd()
    };
  }
  /**
   * Restores the selection location.<br>
   * Восстанавливает место выделения.
   */
  goSelection() {
    return this.data.goSelection(!1), this;
  }
  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset(t) {
    const e = Lt(t);
    return this.oldValue !== e ? (this.oldValue = e, this.data.reset(e), this.emit.set("reset", {}).go(), !0) : !1;
  }
}
class un {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param element input element /<br>элемент ввода
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, i = "is-character") {
    o(this, "mask");
    o(this, "valueBasic", v(""));
    o(this, "value", v(""));
    o(this, "view", v([]));
    o(this, "classes", v({}));
    o(this, "onFocus", (t) => this.mask.event.onFocus(t));
    o(this, "onBlur", (t) => this.mask.event.onBlur(t));
    o(this, "onKeydown", (t) => this.mask.event.onKeydown(t));
    o(this, "onKeyup", (t) => this.mask.event.onKeyup(t));
    o(this, "onBeforeinput", (t) => this.mask.event.onBeforeinput(t));
    o(this, "onInput", (t) => this.mask.event.onInput(t));
    o(this, "onChange", (t) => this.mask.event.onChange(t));
    o(this, "onPaste", (t) => this.mask.event.onPaste(t));
    o(this, "onClick", (t) => this.mask.event.onClick(t));
    this.mask = new ln(
      t,
      e,
      (a, r, h) => {
        a === "input" && this.updateValue(), s(a, r, h);
      },
      i
    ), R(() => {
      this.mask.reset(t == null ? void 0 : t.value), this.updateValue();
    });
  }
  /**
   * Updating the entered data.<br>
   * Обновление введенных данных.
   */
  updateValue() {
    const t = this.mask.getValueBasic(), e = t !== this.valueBasic.value;
    return this.valueBasic.value = t, this.value.value = this.mask.value.get(), this.view.value = this.mask.view.get(), e && this.mask.goSelection(), this.classes.value = this.mask.getClasses(), this;
  }
}
class gn extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    o(this, "mask");
    this.mask = new un(
      s,
      this.element,
      (a, r, h) => {
        var c;
        (c = this.emits) == null || c.call(
          this,
          a,
          r,
          h
        );
      },
      this.getSubClass(["character", "item"])
    ), this.init();
  }
  /**
   * Element for storing the final data.<br>
   * Элемент для хранения конечных данных.
   */
  renderData() {
    var s;
    const e = this.setup();
    if ((s = this.props) != null && s.name)
      return p("input", {
        type: "hidden",
        name: this.props.name,
        value: e.value.value
      });
  }
  /**
   * Rendering method for input.<br>
   * Метод рендеринга для ввода.
   */
  renderInput() {
    const e = this.setup();
    return p("input", {
      ref: this.element,
      class: e.classes.value.input,
      value: e.valueBasic.value,
      onFocus: e.onFocus,
      onBlur: e.onBlur,
      onKeydown: e.onKeydown,
      onKeyup: e.onKeyup,
      onBeforeinput: e.onBeforeinput,
      onInput: e.onInput,
      onChange: e.onChange,
      onPaste: e.onPaste,
      onClick: e.onClick
    });
  }
  /**
   * Rendering method for displaying the mask and the input data.<br>
   * Метод рендеринга для вывода маски и вводимых данных.
   */
  renderView() {
    const e = this.setup(), s = e.view.value;
    if (s.length > 0) {
      const i = [];
      return s.forEach((a, r) => {
        i.push(
          p("span", {
            key: r,
            class: a.className
          }, a.value)
        );
      }), p("span", { class: e.classes.value.character }, i);
    }
    return p("span", {
      class: e.classes.value.character,
      innerHTML: "&nbsp;"
    });
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      valueBasic: this.mask.valueBasic,
      value: this.mask.value,
      view: this.mask.view,
      onFocus: this.mask.onFocus,
      onBlur: this.mask.onBlur,
      onKeydown: this.mask.onKeydown,
      onKeyup: this.mask.onKeyup,
      onBeforeinput: this.mask.onBeforeinput,
      onInput: this.mask.onInput,
      onChange: this.mask.onChange,
      onPaste: this.mask.onPaste,
      onClick: this.mask.onClick
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        ...this.toClassName(this.mask.classes.value)
      },
      // :classes [!] System label / Системная метка
      input: this.getSubClass("input"),
      character: this.getSubClass("character"),
      characterItem: this.getSubClass("character__item")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    const e = this.setup(), s = [
      this.renderData(),
      this.renderInput(),
      this.renderView()
    ];
    return p("label", {
      ...this.getAttrs(),
      class: e.classes.value.main
    }, s);
  }
}
const w = {
  special: "*",
  match: /[0-9]/,
  type: "text",
  view: "_"
}, dn = {
  // Values
  type: {
    type: String,
    default: w == null ? void 0 : w.type
  },
  name: String,
  value: [String, Number],
  mask: [String, Array],
  special: {
    type: [String, Array, Object],
    default: w == null ? void 0 : w.special
  },
  match: {
    type: [String, RegExp],
    default: w == null ? void 0 : w.match
  },
  pattern: Object,
  check: Object,
  fraction: [String, Boolean, Number],
  currency: String,
  // Options
  language: String,
  view: {
    type: String,
    default: w == null ? void 0 : w.view
  },
  // :prop [!] System label / Системная метка
  visible: Boolean,
  right: Boolean,
  dir: String
}, pn = {
  // :values [!] System label / Системная метка
  dir: ["ltr", "rtl"]
  // :values [!] System label / Системная метка
}, mn = {
  ...dn,
  // :prop [!] System label / Системная метка
  visible: Boolean,
  right: Boolean,
  dir: String
}, fn = /* @__PURE__ */ m({
  __name: "M3Mask",
  props: { ...mn },
  emits: ["focus", "blur", "keydown", "keyup", "beforeinput", "input", "change", "paste", "reset"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mask": !0,
        "m3-mask--visible": i.visible,
        "m3-mask--right": i.right,
        [`m3-mask--dir--${i.dir}`]: d(pn.dir, i.dir)
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new gn(
      "m3.mask",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), yn = {
  install(n) {
    n.component("M3Mask", fn);
  }
}, Cn = {
  install(n) {
    n.component("M3Progress", Kt);
  }
}, bn = {
  install(n) {
    n.component("M3Ripple", Be);
  }
};
class _t {
  /**
   * Checks whether to enable scroll hiding.<br>
   * Проверяет, надо ли включить скрытие скролла.
   */
  static async is() {
    const t = await this.get();
    return t !== -1 && t <= 8;
  }
  /**
   * Returns the width of the scroll.<br>
   * Возвращает ширину скролла.
   */
  static async get() {
    const t = this.storage.get() ?? -1;
    if (!this.calculate && t === -1) {
      const e = await this.init();
      return this.storage.set(e), e;
    }
    return t;
  }
  /**
   * Creates elements to check the width of the scroll.<br>
   * Создает элементы для проверки ширины скролла.
   */
  static createElement() {
    return pt(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", pt(t, "div", (e) => {
        e.style.height = "100px";
      });
    });
  }
  /**
   * Initialization of data to check the width of the scroll.<br>
   * Инициализация данных для проверки ширины скролла.
   */
  static init() {
    return new Promise((t) => {
      this.calculate = !0;
      const e = this.createElement();
      requestAnimationFrame(() => {
        t(e.offsetWidth - e.clientWidth), e.remove(), this.calculate = !1;
      });
    });
  }
}
o(_t, "storage", new xe("scrollbar", !0)), o(_t, "calculate", !1);
const ee = 8;
class vn {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    o(this, "event");
    o(this, "top", !1);
    o(this, "bottom", !1);
    this.props = t, this.element = e, this.callback = s;
  }
  /**
   * Returns values for the class.<br>
   * Возвращает значения для класса.
   */
  getClasses() {
    return {
      "??--border--top": this.top,
      "??--border--bottom": this.bottom
    };
  }
  /**
   * Start monitoring the scroll.<br>
   * Начать слежение за скроллом.
   */
  start() {
    return this.event ? this.event.start() : this.event = new Ct(
      this.element.value,
      ["scroll-sync"],
      () => this.on()
    ).start(), this.on(), this;
  }
  /**
   * Stopping the monitoring of scroll changes.<br>
   * Остановка слежения за изменениями скролла.
   */
  stop() {
    return this.event && this.event.stop(), this;
  }
  /**
   * Changing the monitoring status depending on the border parameter.<br>
   * Изменение статуса слежения в зависимости от параметра border.
   */
  toggle() {
    return this.props.border ? this.start() : this.stop(), this;
  }
  /**
   * Updating the monitoring element for the event object.<br>
   * Обновление элемента слежения для объекта события.
   */
  reset() {
    return this.event && this.event.setElement(this.element.value), this.toggle();
  }
  /**
   * Changing the data for class output.<br>
   * Изменение данных для вывода класса.
   * @param top status of the top border display /<br>статус отображения верхнего бордера
   * @param bottom status of the bottom border display /<br>статус отображения нижнего бордера
   */
  setData(t, e) {
    return (this.top !== t || this.bottom !== e) && (this.top = t, this.bottom = e, this.callback && this.callback()), this;
  }
  /**
   * Function for the event of monitoring scroll changes.<br>
   * Функция для события слежения за изменениями скролла.
   */
  on() {
    const t = this.element.value;
    t && this.setData(
      t.scrollTop > ee,
      t.scrollTop < t.scrollHeight - t.clientHeight - ee
    );
  }
}
class kn {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    o(this, "border");
    this.border = new vn(
      t,
      e,
      s
    );
  }
  /**
   * Returns values for the class.<br>
   * Возвращает значения для класса.
   */
  async getClasses() {
    return {
      "??--disabled": await this.getDisabled(),
      ...this.border.getClasses()
    };
  }
  /**
   * Returns information on whether to disable scroll changes.
   * This is when the scroll has no width.<br>
   * Возвращает информацию, надо ли выключить изменения скролла.
   * Это когда скролл не имеет ширины.
   */
  async getDisabled() {
    return await _t.is();
  }
}
class Mn {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   */
  constructor(t, e) {
    o(this, "scrollbar");
    o(this, "classes", ne({}));
    this.scrollbar = new kn(
      t,
      e,
      () => this.updateClasses().then()
    ), R(async () => {
      this.scrollbar.border.reset(), await this.updateClasses();
    }), We(async () => {
      await re(), requestAnimationFrame(() => this.scrollbar.border.toggle());
    });
  }
  /**
   * Updates the class values.<br>
   * Обновляет значения класса.
   */
  async updateClasses() {
    return this.classes.value = await this.scrollbar.getClasses(), this;
  }
}
class Sn extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    o(this, "scrollbar");
    this.scrollbar = new Mn(this.props, this.element), this.init();
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {};
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        ...this.toClassName(this.scrollbar.classes.value)
      }
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    const e = this.setup(), s = [this.initSlot("default")];
    return p(this.props.tag, {
      ...this.getAttrs(),
      ref: this.element,
      class: e.classes.value.main
    }, s);
  }
}
const wn = {
  tag: "div"
}, Bn = {
  tag: {
    type: String,
    default: wn.tag
  },
  // :prop [!] System label / Системная метка
  visible: Boolean,
  border: Boolean,
  inverse: Boolean
}, Dn = {
  ...Bn,
  // :prop [!] System label / Системная метка
  visible: Boolean,
  border: Boolean,
  inverse: Boolean
}, Ae = /* @__PURE__ */ m({
  __name: "M3Scrollbar",
  props: { ...Dn },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // TODO: User state classes / Пользовательские классы состояния
        // :classes-values [!] System label / Системная метка
        "m3-scrollbar": !0,
        "m3-scrollbar--visible": i.visible,
        "m3-scrollbar--border": i.border,
        "m3-scrollbar--inverse": i.inverse
        // :classes-values [!] System label / Системная метка
      }
      // TODO: User subclasses / Пользовательские подклассы
    })), r = l(() => ({
      // TODO: User styles / Пользовательские стили
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Sn(
      "m3.scrollbar",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), xn = {
  install(n) {
    n.component("M3Scrollbar", Ae);
  }
};
var D = /* @__PURE__ */ ((n) => (n.display = "display", n.preparation = "preparation", n.flash = "flash", n.open = "open", n.hide = "hide", n.close = "close", n))(D || {}), J = /* @__PURE__ */ ((n) => (n.block = "block", n.close = "close", n.static = "static", n.controlStatic = "controlStatic", n))(J || {}), et = /* @__PURE__ */ ((n) => (n.top = "top", n.center = "center", n.bottom = "bottom", n))(et || {});
class In {
  constructor() {
    o(this, "status", D.close);
  }
  /**
   * Checks if the current status is closed (hide).<br>
   * Проверяет, является ли текущий статус закрытым (hide).
   */
  isHide() {
    return this.status === D.hide;
  }
  /**
   * Checks if the current status is open (open/flash).<br>
   * Проверяет, является ли текущий статус открытым (open/flash).
   */
  isOpen() {
    return this.status === D.open || this.status === D.flash;
  }
  /**
   * Returns the current status.<br>
   * Возвращает текущий статус.
   */
  get() {
    return this.status;
  }
  /**
   * Change the current status.<br>
   * Изменить текущий статус.
   * @param value value /<br>значение
   */
  set(t) {
    return this.status = t, this;
  }
  /**
   * Translates status to preparation.<br>
   * Переводит статус в display.
   */
  toDisplay() {
    return this.set(D.display), this;
  }
  /**
   * Translates status to preparation.<br>
   * Переводит статус в preparation.
   */
  toPreparation() {
    return this.set(D.preparation), this;
  }
  /**
   * Translates status to flash.<br>
   * Переводит статус в flash.
   */
  toFlash() {
    return this.set(D.flash), this;
  }
  /**
   * Translates status to open.<br>
   * Переводит статус в open.
   */
  toOpen() {
    return this.set(D.open), this;
  }
  /**
   * Translates status to hide.<br>
   * Переводит статус в hide.
   */
  toHide() {
    return this.set(D.hide), this;
  }
  /**
   * Translates status to close.<br>
   * Переводит статус в close.
   */
  toClose() {
    return this.set(D.close), this;
  }
}
class An {
  constructor() {
    o(this, "x", 0);
    o(this, "y", 0);
  }
  /**
   * Checks if the button was pressed.<br>
   * Проверяет, было ли нажатие на кнопку.
   */
  is() {
    return this.x !== 0 || this.y !== 0;
  }
  /**
   * Returns the X coordinate.<br>
   * Возвращает координату X.
   */
  getX() {
    return this.x;
  }
  /**
   * Returns the Y coordinate.<br>
   * Возвращает координату Y.
   */
  getY() {
    return this.y;
  }
  /**
   * Returns the shift along the X coordinate.<br>
   * Возвращает сдвиг по координате X.
   */
  getShiftX(t) {
    return this.x - t;
  }
  /**
   * Returns the shift along the Y coordinate.<br>
   * Возвращает сдвиг по координате Y.
   */
  getShiftY(t) {
    return this.y - t;
  }
  /**
   * Changes the coordinates.<br>
   * Изменяет координаты.
   * @param x value of X /<br>значение X
   * @param y value of Y /<br>значение Y
   */
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  /**
   * Resets all data to initial values.<br>
   * Сбрасывает все данные к начальным значениям.
   */
  reset() {
    return this.x = 0, this.y = 0, this;
  }
}
class zn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    o(this, "persistent", !1);
    this.props = t, this.callback = e;
  }
  /**
   * Returns the prohibition status.<br>
   * Возвращает статус запрета.
   */
  get() {
    return this.persistent;
  }
  /**
   * Request to enable animation.<br>
   * Запрос на включение анимации.
   */
  on() {
    return this.props.persistent ? (this.persistent = !0, this.makeCallback(), !0) : !1;
  }
  /**
   * Request to disable animation.<br>
   * Запрос на выключение анимации.
   */
  disabled() {
    return this.persistent && (this.persistent = !1, this.makeCallback()), this;
  }
  /**
   * Calls the function if the value has been changed.<br>
   * Вызывает функцию, если было изменено значение.
   */
  makeCallback() {
    return this.callback && this.callback(), this;
  }
}
class Tn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
  }
  /**
   * Hook for preparing elements before opening/closing.<br>
   * Хук для подготовки элементов перед открытием/закрытием.
   * @param open current state of the window /<br>текущее состояние окна
   */
  async preparation(t) {
    this.props.preparation && await this.props.preparation(t);
  }
  /**
   * Hook before opening/closing.<br>
   * Хук перед открытием/закрытием.
   * @param open current state of the window /<br>текущее состояние окна
   */
  async beforeOpening(t) {
    return this.props.beforeOpening ? await this.props.beforeOpening(!t) : !0;
  }
  /**
   * Hook after opening/closing.<br>
   * Хук после открытия/закрытия.
   * @param open current state of the window /<br>текущее состояние окна
   */
  async opening(t) {
    return this.props.opening ? await this.props.opening(t) : !1;
  }
}
class En {
  /**
   * Constructor
   * @param persistent object for working with the animation before turning off the window /<br>объект для работы с анимацией перед выключением окна
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   * @param classBodyContext class name for the context body /<br>название класса для тела контекста
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e = "is-window", s = "is-control", i = "is-body", a = "is-body-context") {
    /**
     * Identification of the current window. Used to search for the current component and its control.<br>
     * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
     */
    o(this, "id", `window--${ue()}`);
    this.persistent = t, this.className = e, this.classControl = s, this.classBody = i, this.classBodyContext = a;
  }
  /**
   * Проверяет, является ли выбранный элемент окном
   * @param target selected item /<br>выбранный элемент
   */
  isWindow(t) {
    return !!(t && t.classList.contains(this.getClassMain()));
  }
  /**
   * Returns the identifier of the current window.<br>
   * Возвращает идентификатор текущего окна.
   */
  getId() {
    return this.id;
  }
  /**
   * Returns the name of the main class.<br>
   * Возвращает название главного класса.
   */
  getClassMain() {
    return this.className;
  }
  /**
   * Returns the class name for control.<br>
   * Возвращает название класса для контроля.
   */
  getClassControl() {
    return this.classControl;
  }
  /**
   * Returns the class name for control along with the ID.<br>
   * Возвращает название класса для управления вместе с ID.
   */
  getClassControlAndId() {
    return `${this.classControl} ${this.getId()}`;
  }
  /**
   * Returns the full name of the class for the status.<br>
   * Возвращает полное название класса для статуса.
   * @param status названия статуса
   */
  getClassStatus(t) {
    return `${this.className}[data-status="${t}"]`;
  }
  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  getClasses() {
    return {
      [this.getId()]: !0,
      "??--persistent": this.persistent.get()
    };
  }
  /**
   * Returns the class selector for control.<br>
   * Возвращает селектор класса для управления.
   */
  getSelectorControl() {
    return `.${this.classControl}.${this.getId()}`;
  }
  /**
   * Returns the name of the class for status control.<br>
   * Возвращает название класса для контроля статуса.
   * @param name the name of the class for control /<br>название класса для контроля
   */
  getSelectorStatusControl(t) {
    return `.${this.getClassMain()}--${t}`;
  }
  /**
   * Search and return the window element at the selected item.<br>
   * Поиск и возврат элемента окна у выбранного элемента.
   * @param target selected item /<br>выбранный элемент
   */
  findMain(t) {
    return (t == null ? void 0 : t.closest(`.${this.className}`)) ?? void 0;
  }
  /**
   * Search and return of the control element of the current component.<br>
   * Поиск и возврат элемента управления текущего компонента.
   */
  findControl() {
    return document.querySelector(`.${this.classControl}.${this.id}`) || void 0;
  }
  /**
   * Find the control at the selected window.<br>
   * Найди элемент управления у выбранного окна.
   * @param element window element /<br>элемент окна
   */
  findControlByElement(t) {
    var e;
    if (t)
      return document.querySelector(`.${this.getClassControl()}.${(e = t.dataset) == null ? void 0 : e.window}`) ?? void 0;
  }
  /**
   * Search and return of the window body element for the current component.<br>
   * Поиск и возврат элемента тела окна для текущего компонента.
   */
  findBody() {
    return document.querySelector(`.${this.className}.${this.id} .${this.classBody}`) || void 0;
  }
  /**
   * Search and return of the context body element of the window for the current component.<br>
   * Поиск и возврат элемента контекста тела окна для текущего компонента.
   */
  findBodyContext() {
    return document.querySelector(`.${this.className}.${this.id} .${this.classBodyContext}`) || void 0;
  }
}
class Ln {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   * @param element the element of the window itself /<br>элемент самого окна
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.classes = t, this.element = e;
  }
  /**
   * Checks if the main element exists.<br>
   * Проверяет, есть ли главный элемент.
   */
  isMain() {
    return !!this.element.value;
  }
  /**
   * Returns the main element.<br>
   * Возвращает главного элемента.
   */
  getMain() {
    return this.element.value;
  }
  /**
   * Returns the control element of the current component.<br>
   * Возвращает элемент управления текущего компонента.
   */
  getControl() {
    return this.classes.findControl();
  }
  /**
   * Returns the dimensions of the control element.<br>
   * Возвращает размеры элемента управления.
   */
  getControlRect() {
    var t;
    return ((t = this.getControl()) == null ? void 0 : t.getBoundingClientRect()) || void 0;
  }
  /**
   * Returns the body element of the window.<br>
   * Возвращает элемент тела окна.
   */
  getBody() {
    return this.classes.findBody();
  }
  /**
   * Returns the dimensions of the window’s body element.<br>
   * Возвращает размеры элемента тела окна.
   */
  getBodyRect() {
    var t;
    return ((t = this.getBody()) == null ? void 0 : t.getBoundingClientRect()) || void 0;
  }
  /**
   * Returns the window context element.<br>
   * Возвращает элемент контекста окна.
   */
  getBodyContext() {
    return this.classes.findBodyContext();
  }
}
class $n {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    o(this, "control", !1);
    this.props = t, this.classes = e;
  }
  /**
   * Is the flash property active.<br>
   * Активно ли свойство flash.
   */
  is() {
    return !!this.props.flash;
  }
  /**
   * Checks whether the animation needs to be disabled.<br>
   * Проверяет, надо ли отключить анимацию.
   */
  isOpen() {
    return this.is() || this.control;
  }
  /**
   * Checks whether the animation needs to be disabled when closing.<br>
   * Проверяет, надо ли отключить анимацию при закрытии.
   */
  isClose() {
    return this.is() || !!document.querySelector(`.${this.classes.getClassStatus(D.hide)}`);
  }
  /**
   * Change the value of the control parameter<br>
   * Изменить значение параметра control.
   * @param target the element that gets focus on click /<br>элемент, который получает фокус при клике
   */
  setControl(t) {
    var e;
    return this.control = ((e = t == null ? void 0 : t.closest(`.${this.classes.getClassControl()}`)) == null ? void 0 : e.dataset.window) === this.classes.getId(), this;
  }
}
class _n {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    o(this, "top", 0);
    o(this, "right", 0);
    o(this, "bottom", 0);
    o(this, "left", 0);
    o(this, "width", 0);
    o(this, "height", 0);
    o(this, "innerWidth", 0);
    o(this, "innerHeight", 0);
    o(this, "padding", 0);
    o(this, "location", et.center);
    this.classes = t, this.element = e;
  }
  /**
   * Returns the distance from the top point.<br>
   * Возвращает расстояние от верхней точки.
   */
  getTop() {
    return this.top;
  }
  /**
   * Returns the distance from the right point.<br>
   * Возвращает расстояние от правой точки.
   */
  getRight() {
    return this.right;
  }
  /**
   * Returns the distance from the lower point.<br>
   * Возвращает расстояние от нижней точки.
   */
  getBottom() {
    return this.bottom;
  }
  /**
   * Returns the distance from the left point.<br>
   * Возвращает расстояние от левой точки.
   */
  getLeft() {
    return this.left;
  }
  /**
   * Returns the width of the element.<br>
   * Возвращает ширину элемента.
   */
  getWidth() {
    return this.width;
  }
  /**
   * Returns the height of the element.<br>
   * Возвращает высоту элемента.
   */
  getHeight() {
    return this.height;
  }
  /**
   * Returns the width of the window.<br>
   * Возвращает ширину окна.
   */
  getInnerWidth() {
    return this.innerWidth;
  }
  /**
   * Returns the height of the window.<br>
   * Возвращает высоту окна.
   */
  getInnerHeight() {
    return this.innerHeight;
  }
  /**
   * Returns the margins of the element.<br>
   * Возвращает отступы у элемента.
   */
  getPadding() {
    return this.padding;
  }
  /**
   * Returns the values of the element's position.<br>
   * Возвращает значения положения элемента.
   */
  getLocation() {
    return this.location;
  }
  /**
   * Returns the maximum height of the body.<br>
   * Возвращает максимальную высоту у body.
   */
  getMaxHeight() {
    const t = this.element.getBody();
    return t ? parseInt(getComputedStyle(t).maxHeight.replace(/[^0-9]+/g, "")) : 0;
  }
  /**
   * Data updates.<br>
   * Обновления данных.
   */
  update() {
    const t = this.element.getMain(), e = this.element.getControlRect();
    return t && e && (this.top !== e.top || this.right !== e.right || this.bottom !== e.bottom || this.left !== e.left || this.width !== t.offsetWidth || this.height !== t.offsetHeight || this.innerWidth !== window.innerWidth || this.innerHeight !== window.innerHeight) ? (this.top = e.top, this.right = e.right, this.bottom = e.bottom, this.left = e.left, this.width = t.offsetWidth, this.height = t.offsetHeight, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.padding = (window.innerHeight - this.getMaxHeight()) / 2, this.location = this.initLocation(e.top + e.height / 2), !0) : !1;
  }
  /**
   * Resets all data to initial values.<br>
   * Сбрасывает все данные к начальным значениям.
   */
  reset() {
    return this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0, this.innerWidth = 0, this.innerWidth = 0, this;
  }
  /**
   * Calculates control position values.<br>
   * Вычисляет значения положения контроля
   * @param top position of an element /<br>положение элемента
   */
  initLocation(t) {
    switch (Math.floor(t / (window.innerHeight / 3))) {
      case 0:
        return et.top;
      case 2:
        return et.bottom;
    }
    return et.center;
  }
}
class Pn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param coordinates object for working with coordinates /<br>объект для работы с координатами
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i) {
    o(this, "x", 0);
    o(this, "y", 0);
    this.props = t, this.client = e, this.element = s, this.coordinates = i;
  }
  /**
   * Checks if the alignment type is above the element.<br>
   * Проверяет, является ли тип выравнивания над элементом.
   */
  isOver() {
    var t;
    return ((t = this.props) == null ? void 0 : t.axis) === "on";
  }
  /**
   * Returns the X position.<br>
   * Возвращает позицию X.
   */
  getX() {
    return this.x;
  }
  /**
   * Returns the Y position.<br>
   * Возвращает позицию Y.
   */
  getY() {
    return this.y;
  }
  /**
   * Returns the X position for styles.<br>
   * Возвращает позицию X для стилей.
   */
  getStyleX() {
    return `${this.x}px`;
  }
  /**
   * Returns the Y position for styles.<br>
   * Возвращает позицию Y для стилей.
   */
  getStyleY() {
    return `${this.y}px`;
  }
  /**
   * Returns the position for displaying the element.<br>
   * Возвращает позицию для отображения элемента.
   */
  getStyles() {
    return {
      "--??-sys-inset-x": this.getStyleX(),
      "--??-sys-inset-y": this.getStyleY()
    };
  }
  /**
   * Update of the element’s position coordinates.<br>
   * Обновление координаты положения элемента.
   */
  update() {
    return this.coordinates.update() ? (this.setX(), this.setY(), !0) : !1;
  }
  /**
   * Updates the scroll position if an element is selected.<br>
   * Обновляет место скрола, если выбран элемент.
   */
  updateScroll() {
    var e, s, i;
    const t = this.element.getBodyContext();
    if (this.isOver() && this.props.overElement && t && t.scrollHeight > t.offsetHeight) {
      const a = (e = z(this.props.overElement)) == null ? void 0 : e.getBoundingClientRect(), r = (s = this.element.getBody()) == null ? void 0 : s.getBoundingClientRect(), h = t == null ? void 0 : t.getBoundingClientRect(), c = (i = this.element.getControl()) == null ? void 0 : i.getBoundingClientRect();
      if (t && a && r && h) {
        const u = a.height / 2, g = a.top - h.top;
        if (c && this.coordinates.getMaxHeight() === r.height) {
          if (c.top + u < r.top) {
            t.scrollTop += g;
            return;
          }
          if (c.bottom - u > r.bottom) {
            t.scrollTop += g - h.height + a.height;
            return;
          }
          t.scrollTop += g - (c.top - h.top) - c.height / 2 + u;
          return;
        }
        t.scrollTop += g - h.height / 2 + u;
      }
    }
  }
  /**
   * Returns the axis alignment values.<br>
   * Возвращает значения оси выравнивания.
   */
  getAxis() {
    var t;
    return this.isOver() ? "y" : ((t = this.props) == null ? void 0 : t.axis) ?? "y";
  }
  /**
   * Returns the margins from the control element.<br>
   * Возвращает отступы от элемента управления.
   * @param axis the axis of alignment of the element /<br>ось выравнивания элемента
   */
  getIndent(t) {
    return this.getAxis() === t ? this.props.indent ?? 4 : 0;
  }
  /**
   * Calculation of the position for window alignment.<br>
   * Вычисление места положения для выравнивания окна.
   * @param rectTop high control coordinates /<br>высокие координаты контрола
   * @param rectBottom lower control coordinates /<br>нижние координаты контрола
   */
  getOverHeight(t, e) {
    var a, r;
    const s = (e - t) / 2;
    if (this.props.overElement) {
      const h = (a = z(this.props.overElement)) == null ? void 0 : a.getBoundingClientRect(), c = (r = this.element.getBody()) == null ? void 0 : r.getBoundingClientRect();
      if (h && c) {
        const u = h.top - c.top, g = h.height / 2;
        return e - u - g - s;
      }
    }
    const i = this.coordinates.getHeight() / 2;
    return e - s - i;
  }
  /**
   * Changes in position along the X coordinate.<br>
   * Изменения положения по координате X.
   */
  setX() {
    const t = this.element.getMain();
    if (t) {
      const e = this.getIndent("x"), s = this.props.contextmenu ? this.client.getX() : this.coordinates.getRight() + e, i = this.props.contextmenu ? this.client.getX() : this.coordinates.getLeft() - e, a = [];
      this.getAxis() === "x" ? a.push(s, i) : a.push(i, s), this.x = this.calculationInner(
        a[0],
        a[1],
        t.offsetWidth,
        window.innerWidth,
        this.coordinates.getWidth()
      );
    }
    return this;
  }
  /**
   * Changes in position along the Y coordinate.<br>
   * Изменения положения по координате Y.
   */
  setY() {
    const t = this.element.getMain();
    if (t) {
      const e = this.getIndent("y"), s = this.props.contextmenu ? this.client.getY() : this.coordinates.getTop() - e, i = this.props.contextmenu ? this.client.getY() : this.coordinates.getBottom() + e, a = [];
      if (this.isOver())
        return this.y = this.calculationOver(
          this.getOverHeight(s, i),
          s,
          i,
          t.offsetHeight,
          window.innerHeight
        ), this;
      this.getAxis() !== "x" ? a.push(i, s) : a.push(s, i), this.y = this.calculationInner(
        a[0],
        a[1],
        t.offsetHeight,
        window.innerHeight,
        this.coordinates.getHeight()
      );
    }
    return this;
  }
  /**
   * Calculation of the element’s position.<br>
   * Вычисление положения элемента.
   * @param inValue initial values /<br>начальные значения
   * @param outValue final values /<br>конечные значения
   * @param length length of the object /<br>длина объекта
   * @param innerLength length of the indentation /<br>длина отступа
   * @param maxSize maximum length /<br>максимальная длина
   */
  calculationInner(t, e, s, i, a) {
    const r = this.coordinates.getPadding();
    return t + s <= i - r ? t : e - s > r ? e - s : i / 2 - a / 2;
  }
  /**
   * Calculation of the element’s position.<br>
   * Вычисление положения над элемента.
   * @param value initial values /<br>начальные значения
   * @param top high control coordinates /<br>высокие координаты контрола
   * @param bottom lower control coordinates /<br>нижние координаты контрола
   * @param length length of the object /<br>длина объекта
   * @param innerLength length of the indentation /<br>длина отступа
   */
  calculationOver(t, e, s, i, a) {
    const r = this.coordinates.getPadding();
    if (s < r)
      return s;
    if (e > a - r) {
      const h = e - i - r;
      return h < r ? r : h;
    }
    return t < r ? r : t + i <= a - r ? t : a - i - r;
  }
}
class Fn {
  /**
   * Constructor
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param position object for working with the position of the element /<br>объект для работы с положением элемента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    o(this, "x", null);
    o(this, "y", null);
    this.client = t, this.element = e, this.position = s;
  }
  /**
   * Returns the initial X point for the start of the animation.<br>
   * Возвращает начальную точку X для начала анимации.
   */
  getStyleX() {
    return this.x !== null ? `${this.x}px` : null;
  }
  /**
   * Returns the initial Y point for the start of the animation.<br>
   * Возвращает начальную точку Y для начала анимации.
   */
  getStyleY() {
    return this.y !== null ? `${this.y}px` : null;
  }
  /**
   * Returns styles for the initial point of the animation.<br>
   * Возвращает стили для начальной точки анимации.
   */
  getStyles() {
    return {
      "--??-origin-x": this.getStyleX(),
      "--??-origin-y": this.getStyleY()
    };
  }
  /**
   * Updating the initial position of the element for the animation.<br>
   * Обновление начального положения элемента для анимации.
   */
  update() {
    const t = this.element.getMain();
    if (!this.client.is())
      this.x = 0, this.y = 0;
    else if (t && getComputedStyle(t).content !== '"--MENU--"') {
      const e = this.element.getBodyRect();
      e && (this.x = this.client.getShiftX(e.left), this.y = this.client.getShiftY(e.top));
    } else
      this.x = this.client.getShiftX(this.position.getX()), this.y = this.client.getShiftY(this.position.getY());
    return this;
  }
  /**
   * Resets all data to initial values.<br>
   * Сбрасывает все данные к начальным значениям.
   */
  reset() {
    return this.x = null, this.y = null, this;
  }
}
class On {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    o(this, "activity", !1);
    o(this, "event");
    this.props = t, this.element = e, this.callback = s;
  }
  /**
   * Checks if the status is active.<br>
   * Проверяет, активен ли статус.
   */
  is() {
    return this.activity;
  }
  /**
   * Checks if the static mode is enabled.<br>
   * Проверяет, включен ли режим статичности.
   */
  isStaticMod() {
    return !!this.props.staticMode;
  }
  /**
   * Updates the values of static modification.<br>
   * Обновляет значения модификации статичности.
   */
  update() {
    const t = this.isStatic();
    return t !== this.activity ? (this.activity = t, !0) : !1;
  }
  /**
   * Performs status check and activates events when turned on.<br>
   * Выполняет проверку статуса и активизирует события при включении.
   */
  make() {
    this.isStaticMod() ? !this.event && this.element.getMain() && (this.event = new Ct(
      window,
      ["resize"],
      () => this.listener()
    ), this.listener(), this.event.start()) : this.stop();
  }
  /**
   * Performs a check of the adaptation status.<br>
   * Выполняет проверку статуса адаптации.
   */
  makeAdaptive() {
    this.props.adaptive && this.props.staticMode && this.element.getMain() && requestAnimationFrame(() => this.listener());
  }
  /**
   * Restores the data to its previous state.<br>
   * Восстанавливает данные в прежнее состояние.
   */
  stop() {
    this.event && (this.event.stop(), this.event = void 0);
  }
  /**
   * Checks if the static window is active.<br>
   * Проверяет, активно ли статичное окно.
   */
  isStatic() {
    const t = this.element.getMain();
    return !!(t && getComputedStyle(t).content === '"--STATIC--"');
  }
  /**
   * The function called when an event is triggered.<br>
   * Вызываемая функция при срабатывании события.
   */
  listener() {
    var t;
    this.update() && ((t = this.callback) == null || t.call(this));
  }
}
function ze(n, t, e) {
  requestAnimationFrame(() => {
    n(), t != null && t() ? ze(n, t, e) : e == null || e();
  });
}
class Nn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param status object for working with statuses /<br>объект для работы со статусами
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param hook object for working with hooks /<br>объект для работы с хуками
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param flash class object for working with fast window opening /<br>объект класса для работы с быстрым открытием окна
   * @param coordinates object for working with coordinates /<br>объект для работы с координатами
   * @param position object for working with the position of the element /<br>объект для работы с положением элемента
   * @param origin the object for work is in the initial position upon opening <br>объект для работы в начальной позиции при открытии
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit call function when the opening state changes /<br>
   * функция вызова при изменении состояния открытия
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a, r, h, c, u, g, x) {
    o(this, "open", !1);
    o(this, "first", !1);
    this.props = t, this.status = e, this.client = s, this.hook = i, this.element = a, this.flash = r, this.coordinates = h, this.position = c, this.origin = u, this.callback = g, this.callbackEmit = x;
  }
  /**
   * Checks whether the element should be kept in the DOM.<br>
   * Проверяет, надо ли элемент оставить в DOM.
   */
  inDom() {
    return this.open || this.props.staticMode || this.first && !!this.props.inDom;
  }
  /**
   * Returns the current state.<br>
   * Возвращает текущее состояние.
   */
  get() {
    return this.open;
  }
  /**
   * Changes the current state.<br>
   * Изменяет текущее состояние.
   * @param open the value of the current state /<br>значение текущего состояния
   */
  async set(t = !0) {
    return this.open !== t && await this.toggle(), this;
  }
  /**
   * Switches the state, that is, opens or closes the window, depending on the value of item.<br>
   * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
   */
  async toggle() {
    if (await this.hook.beforeOpening(this.open)) {
      const t = !this.open;
      t ? (this.reset(), this.status.toDisplay(), await this.setOpenAndEmit(t), requestAnimationFrame(async () => {
        await this.hook.preparation(this.open), await this.watchPosition(), await this.callback(), requestAnimationFrame(async () => {
          this.position.updateScroll(), this.status.toPreparation(), await this.callback(), requestAnimationFrame(async () => {
            await this.hook.opening(this.open), this.flash.isClose() ? this.status.toFlash() : this.status.toOpen(), await this.callback();
          });
        });
      })) : (this.client.reset(), this.flash.isOpen() ? this.toClose() : (this.status.toHide(), await this.callback()));
    }
    return this;
  }
  /**
   * The method closes the window.<br>
   * Метод закрывает окно.
   */
  close() {
    this.status.isHide() && this.toClose();
  }
  /**
   * Resets all data to initial values.<br>
   * Сбрасывает все данные к начальным значениям.
   */
  reset() {
    return this.coordinates.reset(), this.origin.reset(), this;
  }
  /**
   * The method updates the current position.<br>
   * Метод обновляет текущее положение.
   */
  async watchPosition() {
    this.open && this.element.isMain() ? (this.position.update(), this.origin.update(), this.watchCoordinates()) : this.reset();
  }
  /**
   * Changes values and triggers events.<br>
   * Изменяет значения и вызывает события.
   * @param open the value of the current state /<br>значение текущего состояния
   */
  async setOpenAndEmit(t) {
    return this.open = t, t && !this.first && (this.first = !0), await this.callback(), this.callbackEmit(), this;
  }
  /**
   * Changing the location of the menu window.<br>
   * Изменение расположения окна меню.
   */
  watchCoordinates() {
    return ze(
      () => {
        const t = this.element.getMain();
        t && getComputedStyle(t).content === '"--MENU--"' && this.position.update() && this.callback().then();
      },
      () => this.open && !this.status.isHide()
    ), this;
  }
  /**
   * Transition to the closing state.<br>
   * Переход в состояние закрытия.
   */
  toClose() {
    setTimeout(() => this.setOpenAndEmit(!1).then(), 48), this.status.toClose(), this.hook.opening(this.open).then();
  }
}
class Rn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param persistent object for working with the animation before turning off the window /<br>
   * объект для работы с анимацией перед выключением окна
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param staticMode class object for working with static status /<br>объект класса для работы со статическим статусом
   * @param open the class object for working with the status of closing or opening the window /<br>
   * объект класса для работы со статусом закрытия или открытия окна
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a, r, h) {
    o(this, "target");
    o(this, "focus");
    this.props = t, this.persistent = e, this.classes = s, this.element = i, this.staticMode = a, this.open = r, this.callback = h;
  }
  /**
   * Обновления статус открытия окно
   * @param target the selected window /<br>выбранное окно
   */
  async update(t) {
    this.target = t, this.focus = this.getFocus(), !this.staticMode.is() && (this.open.get() ? this.isContextmenu() ? (await this.open.reset().watchPosition(), await this.callback()) : this.focus === null ? await this.open.toggle() : this.isFocus() ? this.isTarget() ? this.persistent.on() || await this.open.toggle() : (this.isClose() || this.isAutoClose() || !this.isChildren()) && await this.open.toggle() : this.isNotBlock() && (this.isChildren() ? requestAnimationFrame(async () => {
      var e;
      ["open", "flash"].indexOf(((e = this.focus) == null ? void 0 : e.dataset.status) || "") === -1 && await this.open.toggle();
    }) : await this.open.toggle()) : this.isEnabled() && await this.open.toggle());
  }
  /**
   * Returns the element in focus.<br>
   * Возвращает элемент в фокусе.
   */
  getFocus() {
    return this.classes.findMain(this.getTarget());
  }
  getTarget() {
    return this.target ?? this.element.getMain() ?? document.body;
  }
  /**
   * Checks if the selected element is in focus.<br>
   * Проверяет, находится ли выбранный элемент в фокусе.
   */
  isFocus() {
    return this.element.getMain() === this.focus;
  }
  /**
   * Checks if the target element is the window itself.<br>
   * Проверяет, является ли элемент-цель самим окном.
   */
  isTarget() {
    return this.element.getMain() === this.target;
  }
  /**
   * Checks if the selected window is under other windows.<br>
   * Проверяет, находится ли выбранное окно под другими окнами.
   * @param target the selected window /<br>выбранное окно
   */
  isChildren(t = this.getTarget()) {
    const e = this.classes.findMain(t);
    return !!(e && (e.dataset.window === this.classes.getId() || this.isChildren(this.classes.findControlByElement(e))));
  }
  /**
   * Checks if the window is enabled or if the conditions for opening the window are met.<br>
   * Проверяет, включено ли окно или подходят ли условия для открытия окна.
   */
  isEnabled() {
    const t = this.classes.getSelectorStatusControl(J.controlStatic);
    return !this.props.disabled && !this.getTarget().closest(t);
  }
  /**
   * Checks if the window needs to be closed automatically.<br>
   * Проверяет, нужно ли автоматически закрывать окно.
   */
  isAutoClose() {
    const t = this.classes.getSelectorStatusControl(J.static);
    return !!this.props.autoClose && !this.getTarget().closest(`${t}, .${this.classes.getId()} .${this.classes.getClassControl()}`);
  }
  /**
   * Checks if the change of the opening status of the window is blocked.<br>
   * Проверяет, заблокировано ли изменение статуса открытия окна.
   */
  isNotBlock() {
    var e;
    const t = this.classes.getSelectorStatusControl(J.block);
    return !this.classes.isWindow(this.getTarget()) && !((e = this.classes.findControlByElement(this.focus)) != null && e.closest(t));
  }
  /**
   * Checks if it needs to be opened when the right button is pressed.<br>
   * Проверяет, нужно ли открывать при нажатии правой кнопки.
   */
  isContextmenu() {
    return !!(this.props.contextmenu && this.getTarget().closest(this.classes.getSelectorControl()));
  }
  /**
   * Checks if the window can be closed.<br>
   * Проверяет, можно ли закрыть окно.
   */
  isClose() {
    const t = this.classes.getSelectorStatusControl(J.close), e = this.classes.getSelectorStatusControl(J.static);
    return !!this.getTarget().closest(`${t}:not(${e})`);
  }
}
class Vn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param status object for working with statuses /<br>объект для работы со статусами
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param persistent object for working with the animation before turning off the window /<br>объект для работы с анимацией перед выключением окна
   * @param flash class object for working with fast window opening /<br>объект класса для работы с быстрым открытием окна
   * @param open the class object for working with the status of closing or opening the window /<br>
   * объект класса для работы со статусом закрытия или открытия окна
   * @param verification an object for working with the check for changing the status of opening or closing /<br>
   * объект для работы с проверкой изменения статуса открытия или закрытия
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, a, r, h) {
    o(this, "event");
    this.props = t, this.status = e, this.client = s, this.persistent = i, this.flash = a, this.open = r, this.verification = h, this.event = new Ct(
      "body",
      ["click", "contextmenu"],
      (c) => this.onGlobal(c)
    );
  }
  /**
   * Events of pressing a control element.<br>
   * События нажатия на элемент управления.
   * @param event event object /<br>объект события
   */
  async onClick(t) {
    this.props.contextmenu || await this.on(t);
  }
  /**
   * Events of pressing the right mouse button on a control element.<br>
   * События нажатия на правую кнопку мыши на элемент управления.
   * @param event event object /<br>объект события
   */
  async onContextmenu(t) {
    this.props.contextmenu && (t.preventDefault(), await this.on(t));
  }
  /**
   * Event of animation end when closing the window.<br>
   * Событие окончания анимации при закрытии окна.
   */
  onTransition() {
    this.open.close();
  }
  /**
   * Event of the animation end of the closing prohibition.<br>
   * Событие окончания анимации запрета на закрытие.
   */
  onPersistent() {
    this.persistent.disabled();
  }
  /**
   * Starts listening to global events.<br>
   * Стартует прослушивание глобальных событий.
   */
  start() {
    return this.event.start(), this;
  }
  /**
   * Stop the global event.<br>
   * Остановить глобальное событие.
   */
  stop() {
    return this.event.stop(), this;
  }
  /**
   * Changes the event listening status depending on the window’s open status.<br>
   * Изменяет статус прослушивания события в зависимости от статуса открытия окна.
   */
  toggle() {
    return this.open.get() && this.status.isOpen() ? this.start() : this.stop(), this;
  }
  /**
   * Event activation.<br>
   * Активация события.
   * @param event event object /<br>объект события
   */
  async on(t) {
    this.client.set(
      Vs(t),
      Hs(t)
    ), await this.verification.update(t.target);
  }
  /**
   * Callback of the event when pressing any area for checking and changing the opening state.<br>
   * Callback события при нажатии на любую область для проверки и изменения состояния открытия.
   * @param event event instance /<br>экземпляр события
   */
  async onGlobal(t) {
    this.open.get() ? (this.flash.setControl(t == null ? void 0 : t.target), await this.verification.update(t == null ? void 0 : t.target)) : this.event.stop();
  }
}
class Hn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element window element /<br>элемент окна
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit call function when the opening state changes /<br>
   * функция вызова при изменении состояния открытия
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   * @param classBodyContext class name for the context body /<br>название класса для тела контекста
   */
  constructor(t, e, s, i, a = "is-window", r = "is-control", h = "is-body", c = "is-body-context") {
    o(this, "status");
    o(this, "client");
    o(this, "persistent");
    o(this, "hook");
    o(this, "classes");
    o(this, "element");
    o(this, "flash");
    o(this, "coordinates");
    o(this, "position");
    o(this, "origin");
    o(this, "staticMode");
    o(this, "open");
    o(this, "verification");
    o(this, "event");
    this.status = new In(), this.client = new An(), this.persistent = new zn(t, s), this.hook = new Tn(t), this.classes = new En(
      this.persistent,
      a,
      r,
      h,
      c
    ), this.element = new Ln(
      this.classes,
      e
    ), this.flash = new $n(
      t,
      this.classes
    ), this.coordinates = new _n(
      this.classes,
      this.element
    ), this.position = new Pn(
      t,
      this.client,
      this.element,
      this.coordinates
    ), this.origin = new Fn(
      this.client,
      this.element,
      this.position
    ), this.staticMode = new On(
      t,
      this.element,
      s
    ), this.open = new Nn(
      t,
      this.status,
      this.client,
      this.hook,
      this.element,
      this.flash,
      this.coordinates,
      this.position,
      this.origin,
      async () => {
        await s(), this.event.toggle();
      },
      () => i(this.getEmitOptions())
    ), this.verification = new Rn(
      t,
      this.persistent,
      this.classes,
      this.element,
      this.staticMode,
      this.open,
      s
    ), this.event = new Vn(
      t,
      this.status,
      this.client,
      this.persistent,
      this.flash,
      this.open,
      this.verification
    ), t.open && requestAnimationFrame(() => this.open.set(t.open).then());
  }
  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  getClasses() {
    return {
      ...this.classes.getClasses(),
      "??--staticMode": this.staticMode.is(),
      [`??--location--${this.coordinates.getLocation()}`]: !0
    };
  }
  /**
   * Returns the position for displaying the element.<br>
   * Возвращает позицию для отображения элемента.
   */
  getStyles() {
    return {
      ...this.origin.getStyles(),
      ...this.position.getStyles()
    };
  }
  /**
   * Returns an object for calling the event handler.<br>
   * Возвращает объект для вызова обработчика события.
   */
  getEmitOptions() {
    return {
      id: this.classes.getId(),
      element: this.element.getMain(),
      control: this.element.getControl(),
      open: this.open.get()
    };
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    return this.staticMode.make(), this.staticMode.makeAdaptive(), this;
  }
  /**
   * Restores the data to its previous state.<br>
   * Восстанавливает данные в прежнее состояние.
   */
  stop() {
    return this.event.stop(), this.staticMode.stop(), this;
  }
}
class jn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element window element /<br>элемент окна
   * @param callbackEmit call function when the opening state changes /<br>
   * функция вызова при изменении состояния открытия
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   * @param classBodyContext class name for the context body /<br>название класса для тела контекста
   */
  constructor(t, e, s, i = "is-window", a = "is-control", r = "is-body", h = "is-body-context") {
    o(this, "window");
    o(this, "status", v());
    o(this, "staticMode", v(!1));
    o(this, "inDom", v(!1));
    o(this, "open", v(!1));
    o(this, "classes", v({}));
    o(this, "styles", v({}));
    this.window = new Hn(
      t,
      e,
      async () => this.update(),
      s,
      i,
      a,
      r,
      h
    ), R(async () => await this.window.open.set(t.open)), R(async () => {
      this.window.update(), await this.update();
    }), ae(() => this.window.stop());
  }
  /**
   * Returns the identifier of the current window.<br>
   * Возвращает идентификатор текущего окна.
   */
  getId() {
    return this.window.classes.getId();
  }
  /**
   * Returns the class name for control.<br>
   * Возвращает название класса для контроля.
   */
  getClassControl() {
    return this.window.classes.getClassControlAndId();
  }
  /**
   * Changes the current state.<br>
   * Изменяет текущее состояние.
   * @param open the value of the current state /<br>значение текущего состояния
   */
  async setOpen(t = !0) {
    await this.window.open.set(t);
  }
  /**
   * Switches the state, that is, opens or closes the window, depending on the value of item.<br>
   * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
   */
  async toggle() {
    await this.window.open.toggle();
  }
  /**
   * Events of pressing a control element.<br>
   * События нажатия на элемент управления.
   * @param event event object /<br>объект события
   */
  async onClick(t) {
    return this.window.event.onClick(t);
  }
  /**
   * Events of pressing the right mouse button on a control element.<br>
   * События нажатия на правую кнопку мыши на элемент управления.
   * @param event event object /<br>объект события
   */
  async onContextmenu(t) {
    return this.window.event.onContextmenu(t);
  }
  /**
   * Event of animation end when closing the window.<br>
   * Событие окончания анимации при закрытии окна.
   */
  onTransition() {
    return this.window.event.onTransition();
  }
  /**
   * Event of the animation end of the closing prohibition.<br>
   * Событие окончания анимации запрета на закрытие.
   */
  onPersistent() {
    return this.window.event.onPersistent();
  }
  /**
   * Updates all values.<br>
   * Обновляет все значения.
   */
  async update() {
    this.status.value = this.window.status.get(), this.staticMode.value = this.window.staticMode.is(), this.inDom.value = this.window.open.inDom(), this.open.value = this.window.open.get(), this.updateClasses(), await re();
  }
  /**
   * Updates the class values.<br>
   * Обновляет значения класса.
   */
  updateClasses() {
    return this.classes.value = this.window.getClasses(), this.styles.value = this.window.getStyles(), this;
  }
}
class Wn extends T {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    o(this, "window");
    this.window = new jn(
      this.props,
      this.element,
      (a) => {
        var r;
        return (r = this.emits) == null ? void 0 : r.call(this, "window", a);
      },
      this.getName(),
      this.getSubClass("control"),
      this.getSubClass("body"),
      this.getSubClass(["body", "context"])
    ), this.init();
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      id: this.window.getId(),
      status: this.window.status,
      open: this.window.open,
      inDom: this.window.inDom,
      staticMode: this.window.staticMode,
      slotControl: {
        class: this.window.getClassControl(),
        onclick: async (e) => await this.window.onClick(e),
        oncontextmenu: async (e) => this.window.onContextmenu(e)
      },
      setOpen: (e) => this.window.setOpen(e),
      toggle: () => this.window.toggle(),
      onTransition: () => this.window.onTransition(),
      onPersistent: () => this.window.onPersistent(),
      renderBodyContext: () => this.renderBodyContext()
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    const e = this.setup();
    return {
      id: e.id,
      open: e.open,
      setOpen: e.setOpen,
      toggle: e.toggle
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        ...this.toClassName(this.window.classes.value)
      },
      // :classes [!] System label / Системная метка
      body: this.getSubClass("body"),
      bodyContext: this.getSubClass("body__context"),
      control: this.getSubClass("control")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {
      ...this.toClassName(this.window.styles.value)
    };
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    const e = this.setup(), s = [];
    if (this.initSlot("control", s, e.slotControl), e.inDom.value) {
      const i = [this.renderBody()];
      s.push(
        p(Ye, {
          key: "teleport",
          disabled: e.staticMode.value,
          to: "body"
        }, [
          p("div", {
            ...this.getAttrs(),
            key: "main",
            ref: this.element,
            class: e.classes.value.main,
            style: e.styles.value,
            "data-window": e.id,
            "data-status": e.status.value,
            onTransitionend: e.onTransition,
            onAnimationend: e.onPersistent
          }, i)
        ])
      );
    }
    return s;
  }
  /**
   * Render body element.<br>
   * Рендер элемента тела.
   */
  renderBody() {
    const e = this.setup(), s = [
      this.initSlot("title"),
      this.renderBodyContext(),
      this.initSlot("footer")
    ];
    return p("div", {
      key: "body",
      class: e.classes.value.body
    }, s);
  }
  /**
   * Render context element.<br>
   * Рендер элемента контекста.
   */
  renderBodyContext() {
    const e = this.setup(), s = () => this.initSlot("default"), i = {
      key: "bodyContext",
      class: e.classes.value.bodyContext
    };
    return this.components.renderOne("scrollbar", i, s) ?? p("div", i, s);
  }
}
const E = {
  axis: "y",
  indent: 4,
  // :default [!] System label / Системная метка
  overscroll: !0
}, Yn = {
  // Status
  open: Boolean,
  disabled: Boolean,
  // Event
  preparation: Function,
  beforeOpening: Function,
  opening: Function,
  // Options
  contextmenu: Boolean,
  staticMode: Boolean,
  axis: {
    type: String,
    default: E == null ? void 0 : E.axis
  },
  indent: {
    type: Number,
    default: E == null ? void 0 : E.indent
  },
  persistent: Boolean,
  overElement: [String, HTMLElement],
  autoClose: Boolean,
  flash: Boolean,
  inDom: Boolean,
  // :prop [!] System label / Системная метка
  width: String,
  height: String,
  adaptive: String,
  overscroll: {
    type: Boolean,
    default: E == null ? void 0 : E.overscroll
  },
  dense: Boolean,
  fullscreen: Boolean,
  alignment: String,
  origin: String
}, Y = {
  // :values [!] System label / Системная метка
  width: ["auto", "max", "sm", "md", "lg"],
  height: ["auto", "max", "sm", "md", "lg"],
  adaptive: ["menu", "modal", "modalDynamic", "static", "auto", "staticSm", "staticMd", "staticLg"],
  alignment: ["center", "top", "right", "bottom", "left"],
  origin: ["center", "top", "right", "bottom", "left", "topToBottom", "rightToLeft", "bottomToTop", "leftToRight"]
  // :values [!] System label / Системная метка
}, X = {
  ...E,
  // :default [!] System label / Системная метка
  adaptive: "auto",
  overscroll: !0
}, Kn = {
  ...Yn,
  // :prop [!] System label / Системная метка
  width: String,
  height: String,
  adaptive: {
    type: String,
    default: X == null ? void 0 : X.adaptive
  },
  overscroll: {
    type: Boolean,
    default: X == null ? void 0 : X.overscroll
  },
  dense: Boolean,
  fullscreen: Boolean,
  alignment: String,
  origin: String
}, Gn = /* @__PURE__ */ m({
  __name: "M3Window",
  props: { ...Kn },
  emits: ["window"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-window": !0,
        "m3-window--width--custom": $(i.width) && !d(Y.width, i.width),
        [`m3-window--width--${i.width}`]: d(Y.width, i.width),
        "m3-window--height--custom": $(i.height) && !d(Y.height, i.height),
        [`m3-window--height--${i.height}`]: d(Y.height, i.height),
        [`m3-window--adaptive--${i.adaptive}`]: d(Y.adaptive, i.adaptive),
        "m3-window--overscroll": i.overscroll,
        "m3-window--dense": i.dense,
        "m3-window--fullscreen": i.fullscreen,
        [`m3-window--alignment--${i.alignment}`]: d(Y.alignment, i.alignment),
        [`m3-window--origin--${i.origin}`]: d(Y.origin, i.origin)
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      "m3-window-sys-width": i.width ?? null,
      "m3-window-sys-height": i.height ?? null
      // :styles-values [!] System label / Системная метка
    })), h = new Wn(
      "m3.window",
      i,
      {
        emits: s,
        components: {
          scrollbar: Ae
        },
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), Un = {
  install(n) {
    n.component("M3Window", Gn);
  }
}, qn = {
  ...vt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, Te = /* @__PURE__ */ m({
  __name: "C1Image",
  props: { ...qn },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-image": !0,
        "c1-image--turn": i.turn,
        "c1-image--disabled": i.disabled,
        "c1-image--hide": i.hide,
        "c1-image--adaptive": i.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new bt(
      "c1.image",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), Et = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "full"],
  size: ["xs", "sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, F = {
  ...G,
  // :default [!] System label / Системная метка
  animationType: "type1",
  rounded: "md",
  size: "xs"
}, Zn = {
  ...yt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: F == null ? void 0 : F.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: {
    type: String,
    default: F == null ? void 0 : F.rounded
  },
  size: {
    type: String,
    default: F == null ? void 0 : F.size
  }
}, Xn = /* @__PURE__ */ m({
  __name: "C1Icon",
  props: { ...Zn },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-icon": !0,
        "c1-icon--turn": i.turn,
        "c1-icon--disabled": i.disabled,
        "c1-icon--hide": i.hide,
        [`c1-icon--animationType--${i.animationType}`]: d(Et.animationType, i.animationType),
        "c1-icon--animationShow": i.animationShow,
        "c1-icon--overlay": i.overlay,
        "c1-icon--dynamic": i.dynamic,
        "c1-icon--start": i.start,
        "c1-icon--end": i.end,
        "c1-icon--high": i.high,
        [`c1-icon--rounded--${i.rounded}`]: d(Et.rounded, i.rounded),
        [`c1-icon--size--${i.size}`]: d(Et.size, i.size)
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new ft(
      "c1.icon",
      i,
      {
        emits: s,
        components: {
          image: Te
        },
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), Jn = {
  install(n) {
    n.component("C1Icon", Xn);
  }
}, Qn = {
  install(n) {
    n.component("C1Image", Te);
  }
}, ta = {
  ...vt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, Ee = /* @__PURE__ */ m({
  __name: "C2Image",
  props: { ...ta },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-image": !0,
        "c2-image--turn": i.turn,
        "c2-image--disabled": i.disabled,
        "c2-image--hide": i.hide,
        "c2-image--adaptive": i.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new bt(
      "c2.image",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), ht = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  variation: ["icon", "payment", "avatar", "country"],
  shape: ["rect", "circle", "box"],
  size: ["12", "16", "20", "24", "32"]
  // :values [!] System label / Системная метка
}, B = {
  ...G,
  // :default [!] System label / Системная метка
  animationType: "type1",
  variation: "icon",
  shape: "box",
  size: "24"
}, ea = {
  ...yt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: B == null ? void 0 : B.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  variation: {
    type: String,
    default: B == null ? void 0 : B.variation
  },
  shape: {
    type: String,
    default: B == null ? void 0 : B.shape
  },
  size: {
    type: String,
    default: B == null ? void 0 : B.size
  }
}, Le = /* @__PURE__ */ m({
  __name: "C2Icon",
  props: { ...ea },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-icon": !0,
        "c2-icon--turn": i.turn,
        "c2-icon--disabled": i.disabled,
        "c2-icon--hide": i.hide,
        [`c2-icon--animationType--${i.animationType}`]: d(ht.animationType, i.animationType),
        "c2-icon--animationShow": i.animationShow,
        "c2-icon--overlay": i.overlay,
        "c2-icon--dynamic": i.dynamic,
        "c2-icon--start": i.start,
        "c2-icon--end": i.end,
        "c2-icon--high": i.high,
        [`c2-icon--variation--${i.variation}`]: d(ht.variation, i.variation),
        [`c2-icon--shape--${i.shape}`]: d(ht.shape, i.shape),
        [`c2-icon--size--${i.size}`]: d(ht.size, i.size)
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new ft(
      "c2.icon",
      i,
      {
        components: {
          image: Ee
        },
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), se = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, O = {
  ...b,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type3",
  position: "top"
}, sa = {
  ...Se,
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: O == null ? void 0 : O.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: O == null ? void 0 : O.indeterminate
  },
  position: {
    type: String,
    default: O == null ? void 0 : O.position
  },
  dense: Boolean,
  inverse: Boolean
}, $e = /* @__PURE__ */ m({
  __name: "C2Progress",
  props: { ...sa },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // TODO: User state classes / Пользовательские классы состояния
        // :classes-values [!] System label / Системная метка
        "c2-progress": !0,
        "c2-progress--linear": i.linear && !i.circular,
        "c2-progress--circular": i.circular,
        [`c2-progress--indeterminate--${i.indeterminate}`]: d(se.indeterminate, i.indeterminate),
        [`c2-progress--position--${i.position}`]: d(se.position, i.position),
        "c2-progress--dense": i.dense,
        "c2-progress--inverse": i.inverse
        // :classes-values [!] System label / Системная метка
      }
      // TODO: User subclasses / Пользовательские подклассы
    })), r = l(() => ({
      // TODO: User styles / Пользовательские стили
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Me(
      "c2.progress",
      i,
      {
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c)));
  }
}), ct = {
  // :values [!] System label / Системная метка
  adaptive: ["icon"],
  size: ["xl", "lg", "md", "sm", "xs", "x"],
  intent: ["positive", "informative", "negative", "neutral", "default"],
  palette: ["carmine", "iris", "redfish", "goldenrod", "asparagus", "slate", "gray", "alpha", "pistachio", "mint", "jade", "teal", "celestial", "indigo", "orchid", "cerise"]
  // :values [!] System label / Системная метка
}, N = {
  ...it,
  // :default [!] System label / Системная метка
  size: "md",
  intent: "default",
  primary: !0
}, ia = {
  ...ke,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  size: {
    type: String,
    default: N == null ? void 0 : N.size
  },
  outline: Boolean,
  link: Boolean,
  intent: {
    type: String,
    default: N == null ? void 0 : N.intent
  },
  primary: {
    type: Boolean,
    default: N == null ? void 0 : N.primary
  },
  secondary: Boolean,
  ghost: Boolean,
  palette: String
}, na = /* @__PURE__ */ m({
  __name: "C2Button",
  props: { ...ia },
  emits: ["click"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-button": !0,
        "c2-button--focus": i.focus,
        "c2-button--disabled": i.disabled,
        "c2-button--selected": i.selected,
        "c2-button--loading": i.loading,
        "c2-button--readonly": i.readonly,
        [`c2-button--adaptive--${i.adaptive}`]: d(ct.adaptive, i.adaptive),
        [`c2-button--size--${i.size}`]: d(ct.size, i.size),
        "c2-button--outline": i.outline,
        "c2-button--link": i.link,
        [`c2-button--intent--${i.intent}`]: d(ct.intent, i.intent),
        "c2-button--primary": i.primary && !i.outline && !i.link && !i.secondary && !i.ghost,
        "c2-button--secondary": i.secondary,
        "c2-button--ghost": i.ghost,
        [`c2-palette--${i.palette}`]: d(ct.palette, i.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new jt(
      "c2.button",
      i,
      {
        components: {
          icon: Le,
          progress: $e
        },
        emits: s,
        classes: a,
        styles: r
      }
    ), c = h.render();
    return t(h.expose()), (u, g) => (f(), y(C(c), null, {
      default: Pt(() => [
        Ft(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), aa = {
  install(n) {
    n.component("C2Button", na);
  }
}, oa = {
  install(n) {
    n.component("C2Icon", Le);
  }
}, ra = {
  install(n) {
    n.component("C2Image", Ee);
  }
}, ha = {
  install(n) {
    n.component("C2Progress", $e);
  }
}, ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  C1Icon: Jn,
  C1Image: Qn,
  C2Button: aa,
  C2Icon: oa,
  C2Image: ra,
  C2Progress: ha,
  M2Icon: Ts,
  M2Image: Es,
  M2Ripple: Fs,
  M3Button: Xs,
  M3Checkbox: Si,
  M3Chip: Ii,
  M3FieldMessage: Ai,
  M3Icon: zi,
  M3Image: Ti,
  M3Input: _i,
  M3Mask: yn,
  M3Progress: Cn,
  M3Ripple: bn,
  M3Scrollbar: xn,
  M3Window: Un
}, Symbol.toStringTag, { value: "Module" })), ga = {
  install(n) {
    for (const t in ie)
      n.use(ie[t]);
  }
};
export {
  Jn as C1Icon,
  Qn as C1Image,
  aa as C2Button,
  oa as C2Icon,
  ra as C2Image,
  ha as C2Progress,
  Ts as M2Icon,
  Es as M2Image,
  Fs as M2Ripple,
  Xs as M3Button,
  Si as M3Checkbox,
  Ii as M3Chip,
  Ai as M3FieldMessage,
  zi as M3Icon,
  Ti as M3Image,
  _i as M3Input,
  yn as M3Mask,
  Cn as M3Progress,
  bn as M3Ripple,
  xn as M3Scrollbar,
  Un as M3Window,
  ga as default
};
