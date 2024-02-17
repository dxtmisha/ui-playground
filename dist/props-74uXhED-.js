var a = Object.defineProperty;
var h = (n, s, t) => s in n ? a(n, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[s] = t;
var r = (n, s, t) => (h(n, typeof s != "symbol" ? s + "" : s, t), t);
import { watch as c, h as d } from "vue";
import { D as m } from "./DesignConstructorAbstract-pYeoTVwY.js";
import { c as u } from "./element-DOaDn3jQ.js";
class y {
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
  constructor(s, t, i = "is-item", e = "is-end", l = "x", p = "y") {
    this.props = s, this.element = t, this.classItem = i, this.classEnd = e, this.styleX = l, this.styleY = p;
  }
  /**
   * Event when clicking on an element.<br>
   * Событие при клике на элемент.
   * @param event event object /<br>объект события
   */
  onClick(s) {
    this.addItem(s.offsetX, s.offsetY);
  }
  /**
   * Change the item.<br>
   * Изменить элемент.
   * @param element element /<br>элемент
   */
  setElement(s) {
    return this.element = s, this;
  }
  /**
   * Adding a new light element.<br>
   * Добавление нового элемента свечения.
   * @param x x-coordinate /<br>x-координата
   * @param y y-coordinate /<br>y-координата
   */
  addItem(s, t) {
    var i;
    this.element && !((i = this.props) != null && i.disabled) && u(this.element, "span", (e) => {
      e.onanimationend = () => e.classList.add(this.classEnd), e.ontransitionend = () => {
        var l;
        return (l = e.parentElement) == null ? void 0 : l.removeChild(e);
      }, e.style.setProperty(this.styleX, `${s}px`), e.style.setProperty(this.styleY, `${t}px`), e.classList.add(this.classItem);
    });
  }
}
class C {
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
  constructor(s, t, i = "is-item", e = "is-end", l = "x", p = "y") {
    r(this, "ripple");
    r(this, "onClick");
    this.ripple = new y(
      s,
      t.value,
      i,
      e,
      l,
      p
    ), c(t, (o) => this.ripple.setElement(o)), this.onClick = (o) => this.ripple.onClick(o);
  }
}
class E extends m {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, i, e) {
    super(
      t,
      i,
      e
    );
    r(this, "ripple");
    this.ripple = new C(
      i,
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
    const t = this.setup();
    return d("div", {
      ref: this.element,
      class: t.classes.value.main,
      onMousedown: t.onClick
    });
  }
}
const R = {
  disabled: Boolean
};
export {
  E as R,
  R as p
};
