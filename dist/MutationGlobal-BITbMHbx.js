var d = Object.defineProperty;
var h = (i, t, s) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var o = (i, t, s) => (h(i, typeof t != "symbol" ? t + "" : t, s), s);
import { f as r } from "./data-DjQiFeY2.js";
import { A as a } from "./string-BNZv_PbS.js";
import { u as m } from "./useEnv-Cv-RoeJ-.js";
const l = "d-mutation", w = a(m("DESIGNS_MAIN", "design")), L = a(m("DESIGNS_GLOBAL", "ui")), C = "init", f = "end", e = "__UI_PROJECT";
var I = /* @__PURE__ */ ((i) => (i.new = "new", i[i.init = C] = "init", i[i.end = f] = "end", i))(I || {});
class c {
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
    return e in window ? window[e] : {};
  }
  /**
   * Returns the global project by its name.<br>
   * Возвращает глобальный проект по его названию.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentGlobalItem(t) {
    var s;
    if (e in window)
      return ((s = window[e]) == null ? void 0 : s[t]) ?? void 0;
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
    r(t, (s, n) => {
      this.addFunction(n, s);
    });
  }
  /**
   * Adding a new class to a list.<br>
   * Добавление нового класса в список.
   * @param classes list of classes to be added /<br>список добавляемого класса
   */
  static addClassList(t) {
    r(t, (s, n) => {
      this.addClass(n, s);
    });
  }
  /**
   * Adding a new component to a list.<br>
   * Добавление нового компонента в список.
   * @param components list of components to be added /<br>список добавляемого компонента
   */
  static addComponentList(t) {
    r(t, (s, n) => {
      this.addComponent(n, s);
    });
  }
  /**
   * Registers a component to track parameter changes.<br>
   * Регистрирует компонент для слежения за изменением параметра.
   * @param name component identifier /<br>идентификатор компонента
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  static registrationComponent(t, s, n) {
    if (this.compItems[t] = {
      item: s,
      callback: n
    }, t in this.compCaching) {
      const p = this.compCaching[t];
      return delete this.compCaching[t], p;
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
o(c, "functions", {}), o(c, "classes", {}), o(c, "components", {}), o(c, "compItems", {}), o(c, "compCaching", {});
export {
  l as C,
  L as K,
  I as M,
  C as a,
  f as b,
  c,
  w as d,
  e
};
