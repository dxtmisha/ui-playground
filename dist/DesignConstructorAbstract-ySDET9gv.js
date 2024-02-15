var d = Object.defineProperty;
var y = (a, t, s) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[t] = s;
var n = (a, t, s) => (y(a, typeof t != "symbol" ? t + "" : t, s), s);
import { toRefs as g, useAttrs as S, useSlots as C, ref as b, computed as h } from "vue";
import { z as c, g as m, f as l, A as p, w as u, d as N, K as A } from "./string-BEtu6Ook.js";
class j {
  /**
   * Constructor
   * @param components list of connected components /<br>список подключенных компонентов
   * @param modification data for modification /<br>данные для модификации
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t = {}, s) {
    this.components = t, this.modification = s;
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
    var s;
    return (s = this.components) == null ? void 0 : s[t];
  }
  /**
   * Returns the modified input data of the connected components.<br>
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this /<br>название данного
   * @param props basic data /<br>базовые данные
   */
  getModification(t, s) {
    var e;
    if (t) {
      const i = c((e = this.modification) == null ? void 0 : e[t]);
      if (i && m(i)) {
        const r = {};
        return l(i, (o, f) => {
          r[f] = c(o);
        }), s && Object.assign(r, s), r;
      }
    }
    return s;
  }
  /**
   * Rendering a component by its name and returning an array with one component.<br>
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  render(t, s, e, i) {
    const r = this.renderOne(
      t,
      s,
      e,
      i
    );
    return r ? [r] : [];
  }
  /**
   * Rendering a component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderOne(t, s, e, i) {
    if (this.is(t)) {
      const r = i ?? t;
      return p(
        this.get(t),
        this.getModification(r, s),
        e,
        r
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
  renderAdd(t, s, e, i, r) {
    return t.push(...this.render(s, e, i, r)), this;
  }
}
class v {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, s, e) {
    n(this, "name");
    n(this, "element", b());
    n(this, "refs");
    n(this, "components");
    n(this, "emits");
    n(this, "classes");
    n(this, "classesSub");
    n(this, "styles");
    n(this, "stylesSub");
    n(this, "attrs");
    n(this, "slots");
    n(this, "data");
    n(this, "dataExpose");
    this.props = s, this.name = this.initName(t), this.refs = this.props ? g(this.props) : {}, this.components = new j(e == null ? void 0 : e.components, e == null ? void 0 : e.compMod), this.emits = e == null ? void 0 : e.emits, this.classes = e == null ? void 0 : e.classes, this.styles = e == null ? void 0 : e.styles, this.attrs = S(), this.slots = C();
  }
  init() {
    return this.makeOptions(), this.classesSub = h(() => this.initClasses()), this.stylesSub = h(() => this.initStyles()), this.data = {
      name: this.getName(),
      element: this.element,
      classes: h(() => this.updateClasses()),
      styles: h(() => this.updateStyles()),
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
    return `${this.getName()}__${u(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.<br>
   * Получение названия класса для статуса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${u(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.<br>
   * Получение названия свойства для стиля.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${u(t).join("-")}`;
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
  initSlot(t, s, e = {}) {
    var i;
    if (this.slots && ((i = this.slots) != null && i[t]) && typeof this.slots[t] == "function") {
      const r = this.slots[t](e);
      return s && s.push(r), r;
    }
  }
  /**
   * Converts the class name to standard for the current component.<br>
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes /<br>список классов
   */
  toClassName(t) {
    if (N(t)) {
      const s = {};
      return l(t, (e, i) => {
        i.match(/\?\?/) ? s[i.replace(/\?\?/, this.getName())] = e : i.match(/\?/) ? s[i.replace(/\?/, this.name[0])] = e : s[i] = e;
      }), s;
    }
    return {};
  }
  /**
   * Getting component names as an array.<br>
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation /<br>название компонента для преобразования
   */
  initName(t) {
    return l(t.split(".", 2), (s) => A(s));
  }
  /**
   * Updating data about the class.<br>
   * Обновление данных об классе.
   */
  updateClasses() {
    var e, i;
    const t = (e = this.classesSub) == null ? void 0 : e.value, s = (i = this.classes) == null ? void 0 : i.value;
    return t && s ? {
      ...t,
      ...s,
      main: {
        ...this.toClass(t == null ? void 0 : t.main),
        ...this.toClass(s == null ? void 0 : s.main)
      }
    } : s ?? {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    var e, i;
    const t = (e = this.stylesSub) == null ? void 0 : e.value, s = (i = this.styles) == null ? void 0 : i.value;
    return t && s ? {
      ...t,
      ...s
    } : s ?? {};
  }
  /**
   * Transformation of the class value into an object.<br>
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation /<br>список классов для преобразования
   */
  toClass(t) {
    return m(t) ? t : Array.isArray(t) ? { [t.filter((e) => typeof e == "string" && e.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
}
export {
  v as D
};