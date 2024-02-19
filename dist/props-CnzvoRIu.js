var K = Object.defineProperty;
var U = (o, t, s) => t in o ? K(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s;
var n = (o, t, s) => (U(o, typeof t != "symbol" ? t + "" : t, s), s);
import { shallowRef as C, resolveComponent as v, computed as _, h as I, Teleport as D } from "vue";
import { f as m, i as d, g as k, t as P, a as F, b as T } from "./object-Cv4Jn6-r.js";
import { D as B } from "./DesignConstructorAbstract-pYeoTVwY.js";
import { c as E, d as L } from "./string-BjW7AeH_.js";
import { b as G, d as M } from "./element-DOaDn3jQ.js";
import { u as y } from "./useEnv-BvhiIc68.js";
const w = "d-mutation", O = E(y("DESIGNS_MAIN", "design")), x = E(y("DESIGNS_GLOBAL", "ui")), $ = "init", A = "end", f = "__UI_PROJECT";
var c = /* @__PURE__ */ ((o) => (o.new = "new", o[o.init = $] = "init", o[o.end = A] = "end", o))(c || {});
class l {
  /**
   * Returns the names of keys indicating the design name.<br>
   * Возвращает названия ключей, обозначающих название дизайна.
   */
  static getKeyUi() {
    return x;
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
    return A;
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
    return `${w}--${this.getKeyInit()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент уже обработан.
   */
  static getClassEnd() {
    return `${w}--${this.getKeyEnd()}`;
  }
  /**
   * Initial stage, start of searching for all unprocessed elements.<br>
   * Начальный этап, начало поиска всех необработанных элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   * @param status status name /<br>название статуса
   */
  static find(t = document.body, s = c.new) {
    const i = [];
    if ("querySelector" in t) {
      const e = this.getSelectorByStatus(s);
      t.querySelector(e) && t.querySelectorAll(e).forEach((r) => i.push(r));
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
      case c.init:
        return `${this.getSelectorInit()}, ${this.getSelectorEnd()}`;
      case c.end:
        return this.getSelectorEnd();
      default:
        return this.getSelectorNew();
    }
  }
}
class a {
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
    return f in window ? window[f] : {};
  }
  /**
   * Returns the global project by its name.<br>
   * Возвращает глобальный проект по его названию.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentGlobalItem(t) {
    var s;
    if (f in window)
      return ((s = window[f]) == null ? void 0 : s[t]) ?? void 0;
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
  static addFunction(t, s) {
    this.isFunction(t) || (this.functions[t] = s);
  }
  /**
   * Adds a new class.<br>
   * Добавляет новый класс.
   * @param name class name /<br>название класса
   * @param item new class /<br>новый класс
   */
  static addClass(t, s) {
    this.isClass(t) || (this.classes[t] = s);
  }
  /**
   * Adds a new component.<br>
   * Добавляет новый компонент.
   * @param name component name /<br>название компонента
   * @param component new component /<br>новый компонент
   */
  static addComponent(t, s) {
    this.isComponent(t) || (this.components[t] = s);
  }
  /**
   * Adding a new function to a list.<br>
   * Добавление новой функции в список.
   * @param functions list of functions to be added /<br>список добавляемой функции
   */
  static addFunctionList(t) {
    m(t, (s, i) => {
      this.addFunction(i, s);
    });
  }
  /**
   * Adding a new class to a list.<br>
   * Добавление нового класса в список.
   * @param classes list of classes to be added /<br>список добавляемого класса
   */
  static addClassList(t) {
    m(t, (s, i) => {
      this.addClass(i, s);
    });
  }
  /**
   * Adding a new component to a list.<br>
   * Добавление нового компонента в список.
   * @param components list of components to be added /<br>список добавляемого компонента
   */
  static addComponentList(t) {
    m(t, (s, i) => {
      this.addComponent(i, s);
    });
  }
  /**
   * Registers a component to track parameter changes.<br>
   * Регистрирует компонент для слежения за изменением параметра.
   * @param name component identifier /<br>идентификатор компонента
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  static registrationComponent(t, s, i) {
    if (this.compItems[t] = {
      item: s,
      callback: i
    }, t in this.compCaching) {
      const e = this.compCaching[t];
      return delete this.compCaching[t], e;
    }
  }
  /**
   * Calls data update.<br>
   * Вызывает обновление данных.
   * @param name component identifier /<br>идентификатор компонента
   * @param props component property /<br>свойство компонента
   */
  static comp(t, s) {
    t in this.compItems ? this.compItems[t].callback(s) : this.compCaching[t] = s;
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
n(a, "functions", {}), n(a, "classes", {}), n(a, "components", {}), n(a, "compItems", {}), n(a, "compCaching", {});
class R {
  /**
   * Constructor
   * @param element tracking element /<br>элемент слежения
   */
  constructor(t) {
    n(this, "id");
    n(this, "componentName");
    n(this, "static");
    n(this, "slots", {});
    n(this, "props", {});
    n(this, "callback");
    var s;
    this.element = t, this.id = G(t), this.componentName = ((s = t.dataset) == null ? void 0 : s[l.getKeyUi()]) ?? "component", this.static = c.new, this.slots = this.initSlots(), this.setStatus(c.init), this.element.classList.add(this.getClassMain());
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
   * Checks if the current element is a link.<br>
   * Проверяет, является ли текущий элемент ссылкой.
   */
  isLink() {
    return !!this.componentName.match("/");
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
    if (this.isLink())
      return this.componentName;
    const t = L(this.componentName);
    return a.isComponent(t) ? t : L(`${O}-${this.componentName}`);
  }
  /**
   * Returns the name of the design.<br>
   * Возвращает название дизайна.
   */
  getDesign() {
    return E(this.getComponentName()).replace(/-.*?$/, "");
  }
  /**
   * Returns the name of the main class.<br>
   * Возвращает название главного класса.
   */
  getClassMain() {
    return `${this.getDesign()}-init`;
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
      case c.init:
        this.element.classList.add(l.getClassInit());
        break;
      case c.end:
        this.element.classList.add(l.getClassEnd());
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
    const i = a.registrationComponent(
      this.getId(),
      t,
      (e) => {
        d(e) && this.setProps(e).update();
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
    return a.removeComponent(this.getId()), this;
  }
  /**
   * Returns data from attributes.<br>
   * Возвращает данные из атрибутов.
   */
  getDataset() {
    const t = {};
    return m(this.element.dataset, (s, i) => {
      i !== l.getKeyUi() && (t[i] = k(s));
    }), t;
  }
  /**
   * Changes the property.<br>
   * Изменяет свойство.
   * @param props property values /<br>значения свойство
   */
  setProps(t) {
    return d(t) && m(t, (s, i) => {
      i === "slots" ? this.setSlots(s) : this.props[i] = s;
    }), this;
  }
  /**
   * Data updates for the slot.<br>
   * Обновления данных для слота.
   * @param slots list of slots for update /<br>список слотов для обновления
   */
  setSlots(t) {
    return d(t) && m(t, (s, i) => {
      this.slots[i] = this.initChildrenList(P(s));
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
        t[e] = this.initChildrenList(i.childNodes);
      else {
        const r = this.initChildren(i);
        r && ("default" in t ? t.default.push(r) : t.default = [r]);
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
          ...M(t),
          innerHTML: (t == null ? void 0 : t.innerHTML) ?? ""
        }
      };
    const s = (e = (i = t == null ? void 0 : t.textContent) == null ? void 0 : i.trim) == null ? void 0 : e.call(i);
    if (d(s))
      return s;
    if (F(t) && d(t))
      return t;
  }
  /**
   * Removal of all classes related to the status.<br>
   * Удаление всех классов, относящихся к статусу.
   */
  removeClasses() {
    return this.element.classList.remove(l.getClassInit()), this.element.classList.remove(l.getClassEnd()), this;
  }
}
class Y {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element instance of the element itself /<br>экземпляр самого элемента
   */
  constructor(t, s) {
    n(this, "mainElement", document.body);
    n(this, "componentName", "div");
    n(this, "componentItem", C());
    n(this, "binds", C({}));
    n(this, "slots", C({}));
    var i;
    this.props = t, t.item && (this.mainElement = t.item.getElement(), this.componentName = t.item.getComponentName(), t.item.registration(s, () => this.update()), this.initComponentItem().then((e) => {
      this.componentItem.value = e;
    })), (i = t.item) == null || i.setStatus(c.end), this.update();
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    var s, i;
    const t = (s = this.props.item) == null ? void 0 : s.getSlots();
    return this.binds.value = { ...((i = this.props.item) == null ? void 0 : i.getProps()) ?? {} }, this.slots.value = t ? { ...t } : void 0, this;
  }
  /**
   * Returns a global object.<br>
   * Возвращает глобальный объект.
   */
  getComponentGlobalItem() {
    var t;
    return (t = a.getComponentGlobalItem(this.componentName)) == null ? void 0 : t.item;
  }
  /**
   * Initializes data for the component.<br>
   * Инициализирует данные для компонента.
   */
  async initComponentItem() {
    return new Promise((t) => {
      var i;
      const s = this.getComponentGlobalItem();
      if (s)
        t(s);
      else if ((i = this.props.item) != null && i.isLink()) {
        let e = 24;
        const r = setInterval(() => {
          if (console.log("repeat", this.componentName), e-- > 0) {
            const p = this.getComponentGlobalItem();
            p && (clearInterval(r), t(p));
          } else
            clearInterval(r), t(v(this.componentName));
        }, 64);
      } else
        t(v(this.componentName));
    });
  }
}
class W extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(s, i, e) {
    super(
      s,
      i,
      e
    );
    n(this, "mutation");
    this.mutation = new Y(i, this.element), this.init();
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
      mainElement: this.mutation.mainElement,
      componentName: this.mutation.componentName,
      componentItem: this.mutation.componentItem,
      binds: this.mutation.binds,
      slots: this.mutation.slots,
      renderSlots: _(() => this.renderSlots())
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
    var i;
    const s = this.setup();
    if (s.componentItem.value)
      return I(D, {
        ref: this.element,
        class: (i = this.classes) == null ? void 0 : i.value.main,
        to: s.mainElement
      }, [
        I(
          s.componentItem.value,
          s.binds.value,
          s.renderSlots.value
        )
      ]);
  }
  /**
   * Rendering data for the slot.<br>
   * Рендеринг данных для слота.
   */
  renderSlots() {
    const s = this.setup(), i = {}, e = s.slots.value;
    return e && m(e, (r, p) => {
      const u = [];
      let S = !1;
      r.forEach((h) => {
        typeof h == "string" ? u.push(h) : u.push(I(
          h.tag,
          { ...h.attributes }
        ));
      }), i[p] = (h) => {
        var b, N;
        if (!S && h) {
          const g = u == null ? void 0 : u[0];
          g && "UI" in window && T(g) && ((b = g.props) != null && b["data-ui"]) && (window.UI.comp(
            (N = g.props) == null ? void 0 : N.id,
            h
          ), S = !0);
        }
        return u;
      };
    }), i;
  }
}
const X = {
  item: R
};
export {
  f as K,
  W as M,
  l as a,
  R as b,
  c,
  a as d,
  X as p
};
