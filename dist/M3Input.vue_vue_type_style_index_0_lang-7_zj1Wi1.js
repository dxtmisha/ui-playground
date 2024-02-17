import { h as a, defineComponent as m, computed as o, openBlock as l, createBlock as d, unref as f } from "vue";
import { D as h } from "./DesignConstructorAbstract-pYeoTVwY.js";
import { p as _ } from "./props-DZE-6KDc.js";
class x extends h {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, t, n) {
    super(
      e,
      t,
      n
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
    var e;
    return a("div", {
      // ...this.getAttrs(),
      ref: this.element,
      class: (e = this.classes) == null ? void 0 : e.value.main
    });
  }
}
const k = {
  ..._
}, D = /* @__PURE__ */ m({
  name: "M3Input",
  __name: "M3Input",
  props: { ...k },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(s, { expose: e, emit: t }) {
    const n = t, i = s, p = o(() => ({
      main: {
        // TODO: User state classes / Пользовательские классы состояния
        // :classes-values [!] System label / Системная метка
        "m3-input": !0
        // :classes-values [!] System label / Системная метка
      }
      // TODO: User subclasses / Пользовательские подклассы
    })), u = o(() => ({
      // TODO: User styles / Пользовательские стили
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new x(
      "m3.input",
      i,
      {
        emits: n,
        classes: p,
        styles: u
      }
    ), c = r.render();
    return e(r.expose()), (I, g) => (l(), d(f(c)));
  }
});
export {
  D as _
};
