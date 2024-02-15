var m = Object.defineProperty;
var d = (e, t, s) => t in e ? m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => (d(e, typeof t != "symbol" ? t + "" : t, s), s);
import { ref as f, watchEffect as g, onMounted as v, nextTick as w, h as y, defineComponent as S, computed as n, openBlock as C, createBlock as x, unref as B } from "vue";
import { D as k } from "./DesignConstructorAbstract-ySDET9gv.js";
import { c } from "./element-CA9epvId.js";
import { D } from "./DataStorage-CS_uBVlg.js";
import { E } from "./EventItem-CzLiiCw2.js";
class a {
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
      const s = await this.init();
      return this.storage.set(s), s;
    }
    return t;
  }
  /**
   * Creates elements to check the width of the scroll.<br>
   * Создает элементы для проверки ширины скролла.
   */
  static createElement() {
    return c(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", c(t, "div", (s) => {
        s.style.height = "100px";
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
      const s = this.createElement();
      requestAnimationFrame(() => {
        t(s.offsetWidth - s.clientWidth), s.remove(), this.calculate = !1;
      });
    });
  }
}
r(a, "storage", new D("scrollbar", !0)), r(a, "calculate", !1);
const h = 8;
class _ {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s, i) {
    r(this, "event");
    r(this, "top", !1);
    r(this, "bottom", !1);
    this.props = t, this.element = s, this.callback = i;
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
    return this.event ? this.event.start() : this.event = new E(
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
  setData(t, s) {
    return (this.top !== t || this.bottom !== s) && (this.top = t, this.bottom = s, this.callback && this.callback()), this;
  }
  /**
   * Function for the event of monitoring scroll changes.<br>
   * Функция для события слежения за изменениями скролла.
   */
  on() {
    const t = this.element.value;
    t && this.setData(
      t.scrollTop > h,
      t.scrollTop < t.scrollHeight - t.clientHeight - h
    );
  }
}
class T {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s, i) {
    r(this, "border");
    this.border = new _(
      t,
      s,
      i
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
    return await a.is();
  }
}
class A {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   */
  constructor(t, s) {
    r(this, "scrollbar");
    r(this, "classes", f({}));
    this.scrollbar = new T(
      t,
      s,
      () => this.updateClasses().then()
    ), g(async () => {
      this.scrollbar.border.reset(), await this.updateClasses();
    }), v(async () => {
      await w(), requestAnimationFrame(() => this.scrollbar.border.toggle());
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
class R extends k {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(s, i, o) {
    super(
      s,
      i,
      o
    );
    r(this, "scrollbar");
    this.scrollbar = new A(this.props, this.element), this.init();
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
    const s = this.setup(), i = [this.initSlot("default")];
    return y(this.props.tag, {
      ...this.getAttrs(),
      ref: this.element,
      class: s.classes.value.main
    }, i);
  }
}
const F = {
  tag: "div"
}, H = {
  tag: {
    type: String,
    default: F.tag
  },
  // :prop [!] System label / Системная метка
  visible: Boolean,
  border: Boolean,
  inverse: Boolean
}, I = {
  ...H,
  // :prop [!] System label / Системная метка
  visible: Boolean,
  border: Boolean,
  inverse: Boolean
}, j = /* @__PURE__ */ S({
  __name: "M3Scrollbar",
  props: { ...I },
  setup(e, { expose: t, emit: s }) {
    const i = s, o = e, u = n(() => ({
      main: {
        // TODO: User state classes / Пользовательские классы состояния
        // :classes-values [!] System label / Системная метка
        "m3-scrollbar": !0,
        "m3-scrollbar--visible": o.visible,
        "m3-scrollbar--border": o.border,
        "m3-scrollbar--inverse": o.inverse
        // :classes-values [!] System label / Системная метка
      }
      // TODO: User subclasses / Пользовательские подклассы
    })), p = n(() => ({
      // TODO: User styles / Пользовательские стили
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), l = new R(
      "m3.scrollbar",
      o,
      {
        emits: i,
        classes: u,
        styles: p
      }
    ), b = l.render();
    return t(l.expose()), (q, L) => (C(), x(B(b)));
  }
});
export {
  j as _
};
