var b = Object.defineProperty;
var d = (l, s, e) => s in l ? b(l, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[s] = e;
var n = (l, s, e) => (d(l, typeof s != "symbol" ? s + "" : s, e), e);
import { watchEffect as g, computed as o, shallowRef as c, h } from "vue";
import { D as y } from "./DesignConstructorAbstract-ySDET9gv.js";
import { t as u } from "./number-Bmx0fGP3.js";
import { D as f } from "./DesignAsyncAbstract-NAKp_GI2.js";
class S extends f {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, i) {
    super(e, i, [
      "value",
      "visible"
    ]);
    n(this, "timeout");
    n(this, "timeoutReject");
  }
  /**
   * Checks if there are any values.<br>
   * Проверяет, есть ли значения.
   */
  isValue() {
    return this.getValue() > 0;
  }
  /**
   * Returns the tag type for the element.<br>
   * Возвращает тип тега для элемента.
   */
  getTag() {
    var e;
    return (e = this.props) != null && e.circular ? "svg" : "div";
  }
  /**
   * Returns values.<br>
   * Возвращает значения.
   */
  getValue() {
    var e;
    return u(((e = this.props) == null ? void 0 : e.value) ?? 0);
  }
  /**
   * Returns values in percentages.<br>
   * Возвращает значения в процентах.
   */
  getValueInPercent() {
    var e;
    if (this.isValue()) {
      const i = this.getValue(), a = 100 / this.getMax() * i;
      return (e = this.props) != null && e.circular ? a.toString() : `${100 - a}%`;
    }
    return null;
  }
  /**
   * Returns the maximum allowable value.<br>
   * Возвращает максимально допустимое значение.
   */
  getMax() {
    var e;
    return u(((e = this.props) == null ? void 0 : e.max) ?? 100);
  }
  /**
   * Returns the property for style.<br>
   * Возвращает свойство для стиля.
   */
  getStyles() {
    return {
      "--??-sys-value": this.getValueInPercent()
    };
  }
  /**
   * Monitors the animation event for hiding the element.<br>
   * Следит за событием анимации для скрытия элемента.
   * @param animationName A string containing the value of the animation-name that generated the animation /<br>
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  onAnimation({ animationName: e }) {
    e.match("-hidden") && (this.event.hide = !1, this.event.classes = this.initClasses(), this.makeCallbackItem());
  }
  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  async initEvent() {
    this.isChanged("visible") && ([
      this.event.hide,
      this.event.visible
    ] = await this.makeVisible()), this.isChanged("classes", [
      "value",
      "visible"
    ]) && (this.event.classes = this.initClasses());
  }
  /**
   * The mode is triggered when the visible property changes to change the output status of the element.<br>
   * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
   */
  makeVisible() {
    return new Promise((e, i) => {
      var m, p, v;
      const a = (m = this.props) == null ? void 0 : m.visible, r = u(((p = this.props) == null ? void 0 : p.delay) ?? 0);
      clearTimeout(this.timeout), this.isValue() ? e([!1, !1]) : !!((v = this.event) != null && v.visible) !== a && (a && r ? (this.timeout = setTimeout(() => {
        clearTimeout(this.timeoutReject), e(this.initVisible());
      }, r), this.timeoutReject = setTimeout(i, r + 1e3)) : e(this.initVisible()));
    });
  }
  /**
   * Updates dependent data when the visible property changes.<br>
   * Обновляет зависимые данные при изменении свойства visible.
   */
  initVisible() {
    var i;
    const e = (i = this.props) == null ? void 0 : i.visible;
    return [!e, !!e];
  }
  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  initClasses() {
    return {
      "??--hide": this.event.hide,
      "??--visible": this.event.visible,
      "??--value": this.isValue()
    };
  }
}
class V {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(s) {
    n(this, "item");
    n(this, "tag", o(() => this.item.getTag()));
    n(this, "valueInPercent", o(() => this.item.getValueInPercent()));
    n(this, "hide", c(!1));
    n(this, "visible", c(!1));
    n(this, "classes", c({}));
    n(this, "styles", o(() => this.item.getStyles()));
    this.props = s, this.item = new S(
      s,
      (e) => {
        this.hide.value = e.hide, this.visible.value = e.visible, this.classes.value = e.classes;
      }
    ), g(() => this.item.make());
  }
  /**
   * Monitors the animation event for hiding the element.<br>
   * Следит за событием анимации для скрытия элемента.
   * @param event A string containing the value of the animation-name that generated the animation /<br>
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  onAnimation(s) {
    this.item.onAnimation(s);
  }
}
class I extends y {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, i, a) {
    super(
      e,
      i,
      a
    );
    n(this, "item");
    this.item = new V(i), this.init();
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
      tag: this.item.tag,
      valueInPercent: this.item.valueInPercent,
      hide: this.item.hide,
      visible: this.item.visible,
      onAnimation: (e) => this.item.onAnimation(e)
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
        ...this.toClassName(this.item.classes.value)
      },
      // :classes [!] System label / Системная метка
      circle: this.getSubClass("circle"),
      circleSub: this.getSubClass("circleSub")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {
      ...this.toClassName(this.item.styles.value)
    };
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    var a, r;
    const e = this.setup(), i = [];
    return (a = this.props) != null && a.circular && (((r = this.props) == null ? void 0 : r.indeterminate) === "type3" && i.push(
      h("circle", {
        class: e.classes.value.circleSub,
        cx: "24",
        cy: "24",
        r: "20"
      })
    ), i.push(
      h("circle", {
        class: e.classes.value.circle,
        cx: "24",
        cy: "24",
        r: "20"
      })
    )), h(e.tag.value, {
      ref: this.element,
      class: e.classes.value.main,
      style: e.styles.value,
      viewBox: "0 0 48 48",
      onAnimationend: e.onAnimation
    }, i);
  }
}
const t = {
  max: 100,
  delay: 360,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
}, k = {
  // Values
  value: [Number, String],
  max: {
    type: [Number, String],
    default: t == null ? void 0 : t.max
  },
  // Status
  visible: Boolean,
  // Options
  delay: {
    type: [Number, String],
    default: t == null ? void 0 : t.delay
  },
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: t == null ? void 0 : t.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: t == null ? void 0 : t.indeterminate
  },
  position: {
    type: String,
    default: t == null ? void 0 : t.position
  },
  dense: Boolean,
  inverse: Boolean
};
export {
  I as P,
  t as d,
  k as p
};
