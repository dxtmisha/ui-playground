var f = Object.defineProperty;
var C = (r, t, s) => t in r ? f(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s;
var a = (r, t, s) => (C(r, typeof t != "symbol" ? t + "" : t, s), s);
import { a as h, f as u, t as S, k as p } from "./data-DjQiFeY2.js";
import { z as d, t as E } from "./string-BNZv_PbS.js";
import { d as I, g as b } from "./element-RQY_EI-c.js";
import { K as y, a as $, b as m, C as g, M as n, c as l, d as K } from "./MutationGlobal-BITbMHbx.js";
class o {
  /**
   * Returns the names of keys indicating the design name.<br>
   * Возвращает названия ключей, обозначающих название дизайна.
   */
  static getKeyUi() {
    return y;
  }
  /**
   * Returns the names of keys indicating that the element is being processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент находится в обработке.
   */
  static getKeyInit() {
    return $;
  }
  /**
   * Returns the names of keys indicating that the element has already been processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент уже обработан.
   */
  static getKeyEnd() {
    return m;
  }
  /**
   * Returns the names of attributes indicating the design name.<br>
   * Возвращает названия атрибутов, обозначающих название дизайна.
   */
  static getAttributeUi() {
    return `data-${this.getKeyUi()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент находится в обработке.
   */
  static getClassInit() {
    return `${g}--${this.getKeyInit()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент уже обработан.
   */
  static getClassEnd() {
    return `${g}--${this.getKeyEnd()}`;
  }
  /**
   * Initial stage, start of searching for all unprocessed elements.<br>
   * Начальный этап, начало поиска всех необработанных элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   * @param status status name /<br>название статуса
   */
  static find(t = document.body, s = n.new) {
    const i = [];
    if ("querySelector" in t) {
      const e = this.getSelectorByStatus(s);
      t.querySelector(e) && t.querySelectorAll(e).forEach((c) => i.push(c));
    }
    return i;
  }
  /**
   * Checks if the parent element is in processing.<br>
   * Проверяет, находится ли родительский элемент в обработке.
   * @param element tracking element /<br>элемент слежения
   */
  static closestInit(t) {
    var s, i;
    return !!((s = t == null ? void 0 : t.closest) != null && s.call(t, this.getSelectorInit()) || !((i = t == null ? void 0 : t.closest) != null && i.call(t, "body")));
  }
  /**
   * Returns the select for a new element.<br>
   * Возвращает селект для нового элемента.
   */
  static getSelectorNew() {
    return `*[${this.getAttributeUi()}]:not(.${this.getClassInit()}):not(.${this.getClassEnd()})`;
  }
  /**
   * Returns the select for an element in processing.<br>
   * Возвращает селект для элемента в обработке.
   */
  static getSelectorInit() {
    return `*[${this.getAttributeUi()}].${this.getClassInit()}`;
  }
  /**
   * Returns the select for an element that has already been processed.<br>
   * Возвращает селект для элемента, который уже обработан.
   */
  static getSelectorEnd() {
    return `*[${this.getAttributeUi()}].${this.getClassEnd()}`;
  }
  /**
   * Returns the select for searching elements by their status.<br>
   * Возвращает селект для поиска элементов по их статусу.
   * @param status status name /<br>название статуса
   */
  static getSelectorByStatus(t) {
    switch (t) {
      case n.init:
        return `${this.getSelectorInit()}, ${this.getSelectorEnd()}`;
      case n.end:
        return this.getSelectorEnd();
      default:
        return this.getSelectorNew();
    }
  }
}
class v {
  /**
   * Constructor
   * @param element tracking element /<br>элемент слежения
   */
  constructor(t) {
    a(this, "id");
    a(this, "componentName");
    a(this, "static");
    a(this, "slots", {});
    a(this, "props", {});
    a(this, "callback");
    var s;
    this.element = t, this.id = I(t), this.componentName = ((s = t.dataset) == null ? void 0 : s[o.getKeyUi()]) ?? "component", this.static = n.new, this.slots = this.initSlots(), this.setStatus(n.init);
  }
  /**
   * Checks if the element belongs to the current object.<br>
   * Проверяет, принадлежит ли элемент текущему объекту.
   * @param element tracking element /<br>элемент слежения
   */
  is(t) {
    return this.element === t;
  }
  /**
   * Returns the identifier.<br>
   * Возвращает идентификатор.
   */
  getId() {
    return this.id;
  }
  /**
   * Returns the identifier.<br>
   * Возвращает названия компонента.
   */
  getComponentName() {
    const t = d(this.componentName);
    return l.isComponent(t) ? t : d(`${K}-${this.componentName}`);
  }
  /**
   * Returns the element.<br>
   * Возвращает элемент.
   */
  getElement() {
    return this.element;
  }
  /**
   * Returns the status.<br>
   * Возвращает статус.
   */
  getStatus() {
    return this.static;
  }
  /**
   * Returns property data.<br>
   * Возвращает данные свойства.
   */
  getProps() {
    return {
      ...this.getDataset(),
      ...this.props
    };
  }
  /**
   * Returns data about the slot.<br>
   * Возвращает данные о слоте.
   */
  getSlots() {
    return this.slots;
  }
  /**
   * Changes the status of the item.<br>
   * Изменяет статус элемента.
   * @param status status values /<br>значения статуса
   */
  setStatus(t) {
    switch (this.removeClasses(), this.static = t, this.static) {
      case n.init:
        this.element.classList.add(o.getClassInit());
        break;
      case n.end:
        this.element.classList.add(o.getClassEnd());
        break;
    }
    return this;
  }
  /**
   * Registers a component for data update.<br>
   * Регистрирует компонент для обновления данных.
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  registration(t, s) {
    const i = l.registrationComponent(
      this.getId(),
      t,
      (e) => {
        h(e) && this.setProps(e).update();
      }
    );
    return i && this.setProps(i), this.callback = s, this;
  }
  /**
   * Called upon data update.<br>
   * Вызывается при обновлении данных.
   */
  update() {
    var t;
    return (t = this.callback) == null || t.call(
      this,
      this.getProps()
    ), this;
  }
  /**
   * Termination of observation of changes.<br>
   * Прекращения наблюдения за изменения.
   */
  disconnect() {
    return l.removeComponent(this.getId()), this;
  }
  /**
   * Returns data from attributes.<br>
   * Возвращает данные из атрибутов.
   */
  getDataset() {
    const t = {};
    return u(this.element.dataset, (s, i) => {
      i !== o.getKeyUi() && (t[i] = S(s));
    }), t;
  }
  /**
   * Changes the property.<br>
   * Изменяет свойство.
   * @param props property values /<br>значения свойство
   */
  setProps(t) {
    return h(t) && u(t, (s, i) => {
      i === "slots" ? this.setSlots(s) : this.props[i] = s;
    }), this;
  }
  /**
   * Data updates for the slot.<br>
   * Обновления данных для слота.
   * @param slots list of slots for update /<br>список слотов для обновления
   */
  setSlots(t) {
    return h(t) && u(t, (s, i) => {
      this.slots[i] = this.initChildrenList(E(s));
    }), this;
  }
  /**
   * Initializes the data list for the slot.<br>
   * Инициализирует список данных для слота.
   */
  initSlots() {
    const t = {}, s = [];
    for (const i of this.element.children) {
      const e = i.getAttribute("data-slot");
      if (e)
        t[e] = this.initChildrenList(i.children);
      else {
        const c = this.initChildren(i);
        c && ("default" in t ? t.default.push(c) : t.default = [c]);
      }
      s.push(i);
    }
    for (const i of s)
      this.element.removeChild(i);
    return t;
  }
  /**
   * Initializes the list of child elements.<br>
   * Инициализирует список дочерних элементов.
   * @param children list of child elements /<br>список дочерних элементов
   */
  initChildrenList(t) {
    const s = [];
    for (const i of t) {
      const e = this.initChildren(i);
      e && s.push(e);
    }
    return s;
  }
  /**
   * Initializes data for the child element.<br>
   * Инициализирует данные для дочернего элемента.
   * @param element child element /<br>дочерний элемент
   */
  initChildren(t) {
    var i, e;
    if (t instanceof HTMLElement)
      return {
        tag: t.nodeName,
        attributes: {
          ...b(t),
          innerHTML: (t == null ? void 0 : t.innerHTML) ?? ""
        }
      };
    const s = (e = (i = t == null ? void 0 : t.textContent) == null ? void 0 : i.trim) == null ? void 0 : e.call(i);
    if (h(s))
      return s;
    if (p(t) && h(t))
      return t;
  }
  /**
   * Removal of all classes related to the status.<br>
   * Удаление всех классов, относящихся к статусу.
   */
  removeClasses() {
    return this.element.classList.remove(o.getClassInit()), this.element.classList.remove(o.getClassEnd()), this;
  }
}
export {
  v as M,
  o as a
};
