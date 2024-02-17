var p = Object.defineProperty;
var d = (i, s, e) => s in i ? p(i, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[s] = e;
var t = (i, s, e) => (d(i, typeof s != "symbol" ? s + "" : s, e), e);
import { computed as r, h as o, defineComponent as M, openBlock as f, createBlock as C, unref as v } from "vue";
import { D as x } from "./DesignConstructorAbstract-pYeoTVwY.js";
import { i as l } from "./object-Cv4Jn6-r.js";
import { t as c } from "./number-Bmx0fGP3.js";
const F = {
  // Status
  disabled: Boolean,
  // Values
  counter: [String, Number],
  maxlength: [String, Number],
  // Message
  helperMessage: String,
  validationMessage: String
};
class S {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(s) {
    this.props = s;
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
    var s;
    return l((s = this.props) == null ? void 0 : s.validationMessage);
  }
  /**
   * Returns text.<br>
   * Возвращает текст.
   */
  get() {
    var s;
    if (this.isValidation())
      return this.props.validationMessage;
    if (l((s = this.props) == null ? void 0 : s.helperMessage))
      return this.props.helperMessage;
  }
}
class b {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(s) {
    this.props = s;
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
    var s;
    return c(((s = this.props) == null ? void 0 : s.counter) ?? 0);
  }
  /**
   * Returns the maximum available input number.<br>
   * Возвращает максимально доступное вводимое число.
   */
  getMax() {
    var s;
    return c(((s = this.props) == null ? void 0 : s.maxlength) ?? 0);
  }
}
class k {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor(s) {
    t(this, "message");
    t(this, "counter");
    this.props = s, this.message = new S(s), this.counter = new b(s);
  }
  /**
   * Checks if there are values for outputting the element.<br>
   * Проверяет, есть ли значения для вывода элемента.
   */
  is() {
    var s;
    return !((s = this.props) != null && s.disabled) && (this.message.is() || this.counter.is());
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
class V {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor(s) {
    t(this, "item");
    t(this, "is", r(() => this.item.is()));
    t(this, "isMessage", r(() => this.item.message.is()));
    t(this, "isValidation", r(() => this.item.message.isValidation()));
    t(this, "isCounter", r(() => this.item.counter.is()));
    t(this, "isMax", r(() => this.item.counter.isMax()));
    t(this, "message", r(() => this.item.message.get()));
    t(this, "counter", r(() => this.item.counter.get()));
    t(this, "classes", r(() => this.item.classes()));
    this.item = new k(s);
  }
}
class _ extends x {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, n, a) {
    super(
      e,
      n,
      a
    );
    t(this, "message");
    /**
     * Rendering text.<br>
     * Рендеринг текста.
     */
    t(this, "renderInfo", () => {
      const e = this.setup();
      return o("div", {
        key: "message",
        class: e.classes.value.info,
        innerHTML: e.message.value
      });
    });
    /**
     * Rendering the entered number of characters.<br>
     * Рендеринг введенного количества символов.
     */
    t(this, "renderCounter", () => {
      const e = this.setup();
      return o("div", {
        key: "counter",
        class: e.classes.value.counter,
        innerHTML: e.counter.value
      });
    });
    this.message = new V(n), this.init();
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
    const e = this.setup(), n = [];
    if (e.isMessage.value && n.push(e.renderInfo()), e.isCounter.value && n.push(e.renderCounter()), e.is.value)
      return o("div", {
        ...this.getAttrs(),
        ref: this.element,
        key: "main",
        class: e.classes.value.main
      }, n);
  }
}
const y = {
  ...F
}, H = /* @__PURE__ */ M({
  name: "M3FieldMessage",
  __name: "M3FieldMessage",
  props: { ...y },
  setup(i, { expose: s, emit: e }) {
    const n = e, a = i, g = r(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-fieldMessage": !0
        // :classes-values [!] System label / Системная метка
      }
    })), h = r(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), u = new _(
      "m3.fieldMessage",
      a,
      {
        emits: n,
        classes: g,
        styles: h
      }
    ), m = u.render();
    return s(u.expose()), (w, I) => (f(), C(v(m)));
  }
});
export {
  H as _,
  F as p
};
