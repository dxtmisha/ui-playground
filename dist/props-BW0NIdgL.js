var r = Object.defineProperty;
var u = (i, t, s) => t in i ? r(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var a = (i, t, s) => (u(i, typeof t != "symbol" ? t + "" : t, s), s);
import { shallowRef as h, onBeforeMount as m, nextTick as c, onUnmounted as d, h as l } from "vue";
import { D as f } from "./DesignConstructorAbstract-pYeoTVwY.js";
import { c as o, b, M as p } from "./MutationDataItem-B1VSdC0w.js";
class v {
  constructor() {
    a(this, "items", []);
  }
  /**
   * Checks if the element is in the list.<br>
   * Проверяет, есть ли элемент в списке.
   * @param element tracking element /<br>элемент слежения
   */
  is(t) {
    return !!this.getItem(t);
  }
  /**
   * Checks if the element is a component.<br>
   * Проверяет, является ли элемент компонентом.
   * @param element tracking element /<br>элемент слежения
   */
  isComponent(t) {
    var s;
    return !!((s = t.dataset) != null && s[o.getKeyUi()]);
  }
  /**
   * Retrieving a list of all data.<br>
   * Получение списка всех данных.
   */
  get() {
    return this.items;
  }
  /**
   * Returns an object with information about the element.<br>
   * Возвращает объект с информацией об элементе.
   * @param element tracking element /<br>элемент слежения
   */
  getItem(t) {
    var s;
    return (s = this.items) == null ? void 0 : s[this.find(t)];
  }
  /**
   * Adding an element for processing.<br>
   * Добавление элемента для обработки.
   * @param element tracking element /<br>элемент слежения
   */
  add(t) {
    return this.isComponent(t) && !this.is(t) && !o.closestInit(t) && this.items.push(new b(t)), this;
  }
  /**
   * Removes an element from the list.<br>
   * Удаляет элемент из списка.
   * @param element tracking element /<br>элемент слежения
   */
  remove(t) {
    const s = this.find(t);
    return s >= 0 && (this.items[s].disconnect(), this.items.splice(s, 1)), this;
  }
  /**
   * Searching for an element in the list.<br>
   * Поиск элемента в списке.
   * @param element tracking element /<br>элемент слежения
   */
  find(t) {
    return this.items.findIndex((s) => s.is(t));
  }
}
class M {
  /**
   * Constructor
   * @param addCallback function for adding an element /<br>функция для добавления элемента
   * @param removeCallback function for removing an element /<br>функция для удаления элемента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s) {
    a(this, "mutation");
    this.addCallback = t, this.removeCallback = s;
  }
  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start() {
    return this.mutation || (this.mutation = new MutationObserver((t) => this.callback(t)), this.mutation.observe(document.body, {
      attributes: !1,
      attributeOldValue: !1,
      characterData: !1,
      characterDataOldValue: !1,
      childList: !0,
      subtree: !0
    })), this;
  }
  /**
   * Stop observing the DOM changes.<br>
   * Остановка наблюдения за изменениями DOM.
   */
  end() {
    return this.mutation && (this.mutation.disconnect(), this.mutation = void 0), this;
  }
  /**
   * A method for tracking changes.<br>
   * Метод для слежения за изменениями.
   * @param record an array of MutationRecord objects /<br>массив объектов MutationRecord
   */
  callback(t) {
    t.forEach((s) => {
      s.removedNodes.forEach((e) => this.removeCallback(e)), s.addedNodes.forEach((e) => this.addCallback(e));
    });
  }
}
class g {
  /**
   * Constructor
   * @param items object for working with elements /<br>объект для работы с элементами
   * @param update function for updating data /<br>функция обновления данных
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s) {
    a(this, "mutation");
    this.items = t, this.update = s;
  }
  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start() {
    this.mutation && this.end();
    const t = this.items.get();
    if (t.length > 0) {
      this.mutation = new MutationObserver((s) => this.callback(s));
      for (const s of t)
        this.mutation.observe(s.getElement(), {
          attributes: !0,
          attributeOldValue: !1,
          characterData: !1,
          characterDataOldValue: !1,
          childList: !1,
          subtree: !1
        });
    }
    return this;
  }
  /**
   * Stop observing the DOM changes.<br>
   * Остановка наблюдения за изменениями DOM.
   */
  end() {
    return this.mutation && (this.mutation.disconnect(), this.mutation = void 0), this;
  }
  /**
   * A method for tracking changes.<br>
   * Метод для слежения за изменениями.
   * @param record an array of MutationRecord objects /<br>массив объектов MutationRecord
   */
  callback(t) {
    t.forEach((s) => {
      s.type === "attributes" && this.update(s.target);
    });
  }
}
class k {
  /**
   * Constructor
   */
  constructor(t) {
    a(this, "mutationGlobal");
    a(this, "mutationItems");
    a(this, "items", new v());
    this.callback = t, this.mutationGlobal = new M(
      (s) => this.add(s),
      (s) => this.remove(s)
    ), this.mutationItems = new g(
      this.items,
      (s) => {
        var e;
        return (e = this.items.getItem(s)) == null ? void 0 : e.update();
      }
    );
  }
  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start() {
    return this.addList(), this.mutationGlobal.start(), this.mutationItems.start(), this;
  }
  /**
   * Termination of observation of changes.<br>
   * Прекращения наблюдения за изменения.
   */
  stop() {
    return this.mutationGlobal.end(), this;
  }
  /**
   * Adding an element and its child elements.<br>
   * Добавление элемента и его дочерних элементы.
   * @param element element for deletion /<br>элемент для удаления
   */
  add(t) {
    this.items.add(t), this.addList(t), this.callback(), this.mutationItems.start();
  }
  /**
   * Adding child elements.<br>
   * Добавления дочерних элементы.
   * @param initial initial element for search /<br>начальный элемент для поиска
   */
  addList(t = document.body) {
    o.find(t).forEach((s) => this.items.add(s));
  }
  /**
   * Removing an element and its child elements from the list.<br>
   * Удаление элемента и его дочерних элементов из списка.
   * @param element element for deletion /<br>элемент для удаления
   */
  remove(t) {
    this.items.remove(t), this.removeList(t), this.callback(), this.mutationItems.start();
  }
  /**
   * Removing child elements.<br>
   * Удаление дочерних элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   */
  removeList(t = document.body) {
    o.find(t, p.init).forEach((s) => this.items.remove(s));
  }
}
class I {
  /**
   * Constructor
   */
  constructor() {
    a(this, "mutation");
    a(this, "items", h([]));
    this.mutation = new k(() => this.update()), m(async () => {
      await c(), requestAnimationFrame(() => {
        this.mutation.start(), this.update();
      });
    }), d(() => this.mutation.stop());
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    return this.items.value = [...this.mutation.items.get()], this;
  }
}
class O extends f {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(s, e, n) {
    super(
      s,
      e,
      n
    );
    a(this, "mutation");
    this.mutation = new I(), this.init();
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
      items: this.mutation.items
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      items: this.setup().items
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
    const s = this.setup(), e = [];
    return this.components.is("item") && s.items.value.forEach((n) => {
      this.components.renderAdd(
        e,
        "item",
        { item: n },
        void 0,
        n.getId()
      );
    }), l("div", {
      ...this.getAttrs(),
      ref: this.element,
      class: s.classes.value.main
    }, e);
  }
}
const y = {
  disabled: Boolean
};
export {
  O as M,
  y as p
};
