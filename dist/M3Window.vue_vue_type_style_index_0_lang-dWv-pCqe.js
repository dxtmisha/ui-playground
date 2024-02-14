var T = Object.defineProperty;
var O = (o, t, s) => t in o ? T(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s;
var n = (o, t, s) => (O(o, typeof t != "symbol" ? t + "" : t, s), s);
import { shallowRef as m, watchEffect as x, onUnmounted as H, nextTick as E, h as v, Teleport as A, defineComponent as W, computed as b, openBlock as R, createBlock as F, unref as I } from "vue";
import { D, i as S, j as p } from "./DesignConstructorAbstract-BkPabKy_.js";
import { b as P, a as B } from "./element-COvSoy4d.js";
import { E as k } from "./EventItem-C7DLzmH2.js";
import { g as X, a as Y } from "./event-BiJXLTc4.js";
import { _ as N } from "./M3Scrollbar.vue_vue_type_style_index_0_lang-C9GDhxWP.js";
function M(o, t, s) {
  requestAnimationFrame(() => {
    o(), t != null && t() ? M(o, t, s) : s == null || s();
  });
}
var c = /* @__PURE__ */ ((o) => (o.display = "display", o.preparation = "preparation", o.flash = "flash", o.open = "open", o.hide = "hide", o.close = "close", o))(c || {}), y = /* @__PURE__ */ ((o) => (o.block = "block", o.close = "close", o.static = "static", o.controlStatic = "controlStatic", o))(y || {}), C = /* @__PURE__ */ ((o) => (o.top = "top", o.center = "center", o.bottom = "bottom", o))(C || {});
class q {
  constructor() {
    n(this, "status", c.close);
  }
  /**
   * Checks if the current status is closed (hide).<br>
   * Проверяет, является ли текущий статус закрытым (hide).
   */
  isHide() {
    return this.status === c.hide;
  }
  /**
   * Checks if the current status is open (open/flash).<br>
   * Проверяет, является ли текущий статус открытым (open/flash).
   */
  isOpen() {
    return this.status === c.open || this.status === c.flash;
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
    return this.set(c.display), this;
  }
  /**
   * Translates status to preparation.<br>
   * Переводит статус в preparation.
   */
  toPreparation() {
    return this.set(c.preparation), this;
  }
  /**
   * Translates status to flash.<br>
   * Переводит статус в flash.
   */
  toFlash() {
    return this.set(c.flash), this;
  }
  /**
   * Translates status to open.<br>
   * Переводит статус в open.
   */
  toOpen() {
    return this.set(c.open), this;
  }
  /**
   * Translates status to hide.<br>
   * Переводит статус в hide.
   */
  toHide() {
    return this.set(c.hide), this;
  }
  /**
   * Translates status to close.<br>
   * Переводит статус в close.
   */
  toClose() {
    return this.set(c.close), this;
  }
}
class _ {
  constructor() {
    n(this, "x", 0);
    n(this, "y", 0);
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
  set(t, s) {
    return this.x = t, this.y = s, this;
  }
  /**
   * Resets all data to initial values.<br>
   * Сбрасывает все данные к начальным значениям.
   */
  reset() {
    return this.x = 0, this.y = 0, this;
  }
}
class L {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s) {
    n(this, "persistent", !1);
    this.props = t, this.callback = s;
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
class U {
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
class G {
  /**
   * Constructor
   * @param persistent object for working with the animation before turning off the window /<br>объект для работы с анимацией перед выключением окна
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   * @param classBodyContext class name for the context body /<br>название класса для тела контекста
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s = "is-window", i = "is-control", e = "is-body", r = "is-body-context") {
    /**
     * Identification of the current window. Used to search for the current component and its control.<br>
     * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
     */
    n(this, "id", `window--${P()}`);
    this.persistent = t, this.className = s, this.classControl = i, this.classBody = e, this.classBodyContext = r;
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
    var s;
    if (t)
      return document.querySelector(`.${this.getClassControl()}.${(s = t.dataset) == null ? void 0 : s.window}`) ?? void 0;
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
class V {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   * @param element the element of the window itself /<br>элемент самого окна
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s) {
    this.classes = t, this.element = s;
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
class j {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s) {
    n(this, "control", !1);
    this.props = t, this.classes = s;
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
    return this.is() || !!document.querySelector(`.${this.classes.getClassStatus(c.hide)}`);
  }
  /**
   * Change the value of the control parameter<br>
   * Изменить значение параметра control.
   * @param target the element that gets focus on click /<br>элемент, который получает фокус при клике
   */
  setControl(t) {
    var s;
    return this.control = ((s = t == null ? void 0 : t.closest(`.${this.classes.getClassControl()}`)) == null ? void 0 : s.dataset.window) === this.classes.getId(), this;
  }
}
class z {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s) {
    n(this, "top", 0);
    n(this, "right", 0);
    n(this, "bottom", 0);
    n(this, "left", 0);
    n(this, "width", 0);
    n(this, "height", 0);
    n(this, "innerWidth", 0);
    n(this, "innerHeight", 0);
    n(this, "padding", 0);
    n(this, "location", C.center);
    this.classes = t, this.element = s;
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
    const t = this.element.getMain(), s = this.element.getControlRect();
    return t && s && (this.top !== s.top || this.right !== s.right || this.bottom !== s.bottom || this.left !== s.left || this.width !== t.offsetWidth || this.height !== t.offsetHeight || this.innerWidth !== window.innerWidth || this.innerHeight !== window.innerHeight) ? (this.top = s.top, this.right = s.right, this.bottom = s.bottom, this.left = s.left, this.width = t.offsetWidth, this.height = t.offsetHeight, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.padding = (window.innerHeight - this.getMaxHeight()) / 2, this.location = this.initLocation(s.top + s.height / 2), !0) : !1;
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
        return C.top;
      case 2:
        return C.bottom;
    }
    return C.center;
  }
}
class J {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param coordinates object for working with coordinates /<br>объект для работы с координатами
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s, i, e) {
    n(this, "x", 0);
    n(this, "y", 0);
    this.props = t, this.client = s, this.element = i, this.coordinates = e;
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
    var s, i, e;
    const t = this.element.getBodyContext();
    if (this.isOver() && this.props.overElement && t && t.scrollHeight > t.offsetHeight) {
      const r = (s = B(this.props.overElement)) == null ? void 0 : s.getBoundingClientRect(), h = (i = this.element.getBody()) == null ? void 0 : i.getBoundingClientRect(), a = t == null ? void 0 : t.getBoundingClientRect(), l = (e = this.element.getControl()) == null ? void 0 : e.getBoundingClientRect();
      if (t && r && h && a) {
        const u = r.height / 2, g = r.top - a.top;
        if (l && this.coordinates.getMaxHeight() === h.height) {
          if (l.top + u < h.top) {
            t.scrollTop += g;
            return;
          }
          if (l.bottom - u > h.bottom) {
            t.scrollTop += g - a.height + r.height;
            return;
          }
          t.scrollTop += g - (l.top - a.top) - l.height / 2 + u;
          return;
        }
        t.scrollTop += g - a.height / 2 + u;
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
  getOverHeight(t, s) {
    var r, h;
    const i = (s - t) / 2;
    if (this.props.overElement) {
      const a = (r = B(this.props.overElement)) == null ? void 0 : r.getBoundingClientRect(), l = (h = this.element.getBody()) == null ? void 0 : h.getBoundingClientRect();
      if (a && l) {
        const u = a.top - l.top, g = a.height / 2;
        return s - u - g - i;
      }
    }
    const e = this.coordinates.getHeight() / 2;
    return s - i - e;
  }
  /**
   * Changes in position along the X coordinate.<br>
   * Изменения положения по координате X.
   */
  setX() {
    const t = this.element.getMain();
    if (t) {
      const s = this.getIndent("x"), i = this.props.contextmenu ? this.client.getX() : this.coordinates.getRight() + s, e = this.props.contextmenu ? this.client.getX() : this.coordinates.getLeft() - s, r = [];
      this.getAxis() === "x" ? r.push(i, e) : r.push(e, i), this.x = this.calculationInner(
        r[0],
        r[1],
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
      const s = this.getIndent("y"), i = this.props.contextmenu ? this.client.getY() : this.coordinates.getTop() - s, e = this.props.contextmenu ? this.client.getY() : this.coordinates.getBottom() + s, r = [];
      if (this.isOver())
        return this.y = this.calculationOver(
          this.getOverHeight(i, e),
          i,
          e,
          t.offsetHeight,
          window.innerHeight
        ), this;
      this.getAxis() !== "x" ? r.push(e, i) : r.push(i, e), this.y = this.calculationInner(
        r[0],
        r[1],
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
  calculationInner(t, s, i, e, r) {
    const h = this.coordinates.getPadding();
    return t + i <= e - h ? t : s - i > h ? s - i : e / 2 - r / 2;
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
  calculationOver(t, s, i, e, r) {
    const h = this.coordinates.getPadding();
    if (i < h)
      return i;
    if (s > r - h) {
      const a = s - e - h;
      return a < h ? h : a;
    }
    return t < h ? h : t + e <= r - h ? t : r - e - h;
  }
}
class K {
  /**
   * Constructor
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param position object for working with the position of the element /<br>объект для работы с положением элемента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s, i) {
    n(this, "x", null);
    n(this, "y", null);
    this.client = t, this.element = s, this.position = i;
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
      const s = this.element.getBodyRect();
      s && (this.x = this.client.getShiftX(s.left), this.y = this.client.getShiftY(s.top));
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
class Q {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s, i) {
    n(this, "activity", !1);
    n(this, "event");
    this.props = t, this.element = s, this.callback = i;
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
    this.isStaticMod() ? !this.event && this.element.getMain() && (this.event = new k(
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
class Z {
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
  constructor(t, s, i, e, r, h, a, l, u, g, $) {
    n(this, "open", !1);
    n(this, "first", !1);
    this.props = t, this.status = s, this.client = i, this.hook = e, this.element = r, this.flash = h, this.coordinates = a, this.position = l, this.origin = u, this.callback = g, this.callbackEmit = $;
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
    return M(
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
class tt {
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
  constructor(t, s, i, e, r, h, a) {
    n(this, "target");
    n(this, "focus");
    this.props = t, this.persistent = s, this.classes = i, this.element = e, this.staticMode = r, this.open = h, this.callback = a;
  }
  /**
   * Обновления статус открытия окно
   * @param target the selected window /<br>выбранное окно
   */
  async update(t) {
    this.target = t, this.focus = this.getFocus(), !this.staticMode.is() && (this.open.get() ? this.isContextmenu() ? (await this.open.reset().watchPosition(), await this.callback()) : this.focus === null ? await this.open.toggle() : this.isFocus() ? this.isTarget() ? this.persistent.on() || await this.open.toggle() : (this.isClose() || this.isAutoClose() || !this.isChildren()) && await this.open.toggle() : this.isNotBlock() && (this.isChildren() ? requestAnimationFrame(async () => {
      var s;
      ["open", "flash"].indexOf(((s = this.focus) == null ? void 0 : s.dataset.status) || "") === -1 && await this.open.toggle();
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
    const s = this.classes.findMain(t);
    return !!(s && (s.dataset.window === this.classes.getId() || this.isChildren(this.classes.findControlByElement(s))));
  }
  /**
   * Checks if the window is enabled or if the conditions for opening the window are met.<br>
   * Проверяет, включено ли окно или подходят ли условия для открытия окна.
   */
  isEnabled() {
    const t = this.classes.getSelectorStatusControl(y.controlStatic);
    return !this.props.disabled && !this.getTarget().closest(t);
  }
  /**
   * Checks if the window needs to be closed automatically.<br>
   * Проверяет, нужно ли автоматически закрывать окно.
   */
  isAutoClose() {
    const t = this.classes.getSelectorStatusControl(y.static);
    return !!this.props.autoClose && !this.getTarget().closest(`${t}, .${this.classes.getId()} .${this.classes.getClassControl()}`);
  }
  /**
   * Checks if the change of the opening status of the window is blocked.<br>
   * Проверяет, заблокировано ли изменение статуса открытия окна.
   */
  isNotBlock() {
    var s;
    const t = this.classes.getSelectorStatusControl(y.block);
    return !this.classes.isWindow(this.getTarget()) && !((s = this.classes.findControlByElement(this.focus)) != null && s.closest(t));
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
    const t = this.classes.getSelectorStatusControl(y.close), s = this.classes.getSelectorStatusControl(y.static);
    return !!this.getTarget().closest(`${t}:not(${s})`);
  }
}
class st {
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
  constructor(t, s, i, e, r, h, a) {
    n(this, "event");
    this.props = t, this.status = s, this.client = i, this.persistent = e, this.flash = r, this.open = h, this.verification = a, this.event = new k(
      "body",
      ["click", "contextmenu"],
      (l) => this.onGlobal(l)
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
      X(t),
      Y(t)
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
class et {
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
  constructor(t, s, i, e, r = "is-window", h = "is-control", a = "is-body", l = "is-body-context") {
    n(this, "status");
    n(this, "client");
    n(this, "persistent");
    n(this, "hook");
    n(this, "classes");
    n(this, "element");
    n(this, "flash");
    n(this, "coordinates");
    n(this, "position");
    n(this, "origin");
    n(this, "staticMode");
    n(this, "open");
    n(this, "verification");
    n(this, "event");
    this.status = new q(), this.client = new _(), this.persistent = new L(t, i), this.hook = new U(t), this.classes = new G(
      this.persistent,
      r,
      h,
      a,
      l
    ), this.element = new V(
      this.classes,
      s
    ), this.flash = new j(
      t,
      this.classes
    ), this.coordinates = new z(
      this.classes,
      this.element
    ), this.position = new J(
      t,
      this.client,
      this.element,
      this.coordinates
    ), this.origin = new K(
      this.client,
      this.element,
      this.position
    ), this.staticMode = new Q(
      t,
      this.element,
      i
    ), this.open = new Z(
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
        await i(), this.event.toggle();
      },
      () => e(this.getEmitOptions())
    ), this.verification = new tt(
      t,
      this.persistent,
      this.classes,
      this.element,
      this.staticMode,
      this.open,
      i
    ), this.event = new st(
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
class it {
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
  constructor(t, s, i, e = "is-window", r = "is-control", h = "is-body", a = "is-body-context") {
    n(this, "window");
    n(this, "status", m());
    n(this, "staticMode", m(!1));
    n(this, "inDom", m(!1));
    n(this, "open", m(!1));
    n(this, "classes", m({}));
    n(this, "styles", m({}));
    this.window = new et(
      t,
      s,
      async () => this.update(),
      i,
      e,
      r,
      h,
      a
    ), x(async () => await this.window.open.set(t.open)), x(async () => {
      this.window.update(), await this.update();
    }), H(() => this.window.stop());
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
    this.status.value = this.window.status.get(), this.staticMode.value = this.window.staticMode.is(), this.inDom.value = this.window.open.inDom(), this.open.value = this.window.open.get(), this.updateClasses(), await E();
  }
  /**
   * Updates the class values.<br>
   * Обновляет значения класса.
   */
  updateClasses() {
    return this.classes.value = this.window.getClasses(), this.styles.value = this.window.getStyles(), this;
  }
}
class nt extends D {
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
    n(this, "window");
    this.window = new it(
      this.props,
      this.element,
      (r) => {
        var h;
        return (h = this.emits) == null ? void 0 : h.call(this, "window", r);
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
        onclick: async (s) => await this.window.onClick(s),
        oncontextmenu: async (s) => this.window.onContextmenu(s)
      },
      setOpen: (s) => this.window.setOpen(s),
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
    const s = this.setup();
    return {
      id: s.id,
      open: s.open,
      setOpen: s.setOpen,
      toggle: s.toggle
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
    const s = this.setup(), i = [];
    if (this.initSlot("control", i, s.slotControl), s.inDom.value) {
      const e = [this.renderBody()];
      i.push(
        v(A, {
          key: "teleport",
          disabled: s.staticMode.value,
          to: "body"
        }, [
          v("div", {
            ...this.getAttrs(),
            key: "main",
            ref: this.element,
            class: s.classes.value.main,
            style: s.styles.value,
            "data-window": s.id,
            "data-status": s.status.value,
            onTransitionend: s.onTransition,
            onAnimationend: s.onPersistent
          }, e)
        ])
      );
    }
    return i;
  }
  /**
   * Render body element.<br>
   * Рендер элемента тела.
   */
  renderBody() {
    const s = this.setup(), i = [
      this.initSlot("title"),
      this.renderBodyContext(),
      this.initSlot("footer")
    ];
    return v("div", {
      key: "body",
      class: s.classes.value.body
    }, i);
  }
  /**
   * Render context element.<br>
   * Рендер элемента контекста.
   */
  renderBodyContext() {
    const s = this.setup(), i = () => this.initSlot("default"), e = {
      key: "bodyContext",
      class: s.classes.value.bodyContext
    };
    return this.components.renderOne("scrollbar", e, i) ?? v("div", e, i);
  }
}
const d = {
  axis: "y",
  indent: 4,
  // :default [!] System label / Системная метка
  overscroll: !0
}, ot = {
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
    default: d == null ? void 0 : d.axis
  },
  indent: {
    type: Number,
    default: d == null ? void 0 : d.indent
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
    default: d == null ? void 0 : d.overscroll
  },
  dense: Boolean,
  fullscreen: Boolean,
  alignment: String,
  origin: String
}, w = {
  // :values [!] System label / Системная метка
  width: ["auto", "max", "sm", "md", "lg"],
  height: ["auto", "max", "sm", "md", "lg"],
  adaptive: ["menu", "modal", "modalDynamic", "static", "auto", "staticSm", "staticMd", "staticLg"],
  alignment: ["center", "top", "right", "bottom", "left"],
  origin: ["center", "top", "right", "bottom", "left", "topToBottom", "rightToLeft", "bottomToTop", "leftToRight"]
  // :values [!] System label / Системная метка
}, f = {
  ...d,
  // :default [!] System label / Системная метка
  adaptive: "auto",
  overscroll: !0
}, rt = {
  ...ot,
  // :prop [!] System label / Системная метка
  width: String,
  height: String,
  adaptive: {
    type: String,
    default: f == null ? void 0 : f.adaptive
  },
  overscroll: {
    type: Boolean,
    default: f == null ? void 0 : f.overscroll
  },
  dense: Boolean,
  fullscreen: Boolean,
  alignment: String,
  origin: String
}, pt = /* @__PURE__ */ W({
  __name: "M3Window",
  props: { ...rt },
  emits: ["window"],
  setup(o, { expose: t, emit: s }) {
    const i = s, e = o, r = b(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-window": !0,
        "m3-window--width--custom": S(e.width) && !p(w.width, e.width),
        [`m3-window--width--${e.width}`]: p(w.width, e.width),
        "m3-window--height--custom": S(e.height) && !p(w.height, e.height),
        [`m3-window--height--${e.height}`]: p(w.height, e.height),
        [`m3-window--adaptive--${e.adaptive}`]: p(w.adaptive, e.adaptive),
        "m3-window--overscroll": e.overscroll,
        "m3-window--dense": e.dense,
        "m3-window--fullscreen": e.fullscreen,
        [`m3-window--alignment--${e.alignment}`]: p(w.alignment, e.alignment),
        [`m3-window--origin--${e.origin}`]: p(w.origin, e.origin)
        // :classes-values [!] System label / Системная метка
      }
    })), h = b(() => ({
      // :styles-values [!] System label / Системная метка
      "m3-window-sys-width": e.width ?? null,
      "m3-window-sys-height": e.height ?? null
      // :styles-values [!] System label / Системная метка
    })), a = new nt(
      "m3.window",
      e,
      {
        emits: i,
        components: {
          scrollbar: N
        },
        classes: r,
        styles: h
      }
    ), l = a.render();
    return t(a.expose()), (u, g) => (R(), F(I(l)));
  }
});
export {
  pt as _,
  M as f
};
