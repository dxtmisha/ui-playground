var h = Object.defineProperty;
var d = (n, t, i) => t in n ? h(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[t] = i;
var o = (n, t, i) => (d(n, typeof t != "symbol" ? t + "" : t, i), i);
import { computed as c, h as l } from "vue";
import { D as v } from "./DesignConstructorAbstract-COYvvqjm.js";
import { b as p } from "./string-BTYg8-hJ.js";
class u {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classIcon class name for the main icon /<br>название класса для основной иконки
   * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, i = "is-icon", s = "is-icon-active") {
    this.props = t, this.classIcon = i, this.classIconActive = s;
  }
  /**
   * Checks if the additional icon is active.<br>
   * Проверяет, активна ли дополнительная иконка.
   */
  isActive() {
    var t, i;
    return !!((t = this.props) != null && t.active && ((i = this.props) != null && i.iconActive));
  }
  /**
   * Returns the property for the base icon.<br>
   * Возвращает свойство для базовой иконки.
   */
  getIconBind() {
    var t, i, s;
    if ((t = this.props) != null && t.icon)
      return p(this.props.icon, {
        class: this.classIcon,
        turn: (i = this.props) == null ? void 0 : i.turn,
        disabled: (s = this.props) == null ? void 0 : s.disabled,
        hide: this.isActive()
      });
  }
  /**
   * Returns the property for the additional icon.<br>
   * Возвращает свойство для дополнительной иконки.
   */
  getIconActiveBind() {
    var t, i, s;
    if ((t = this.props) != null && t.iconActive)
      return p(this.props.iconActive, {
        class: this.classIconActive,
        turn: (i = this.props) == null ? void 0 : i.turn,
        disabled: (s = this.props) == null ? void 0 : s.disabled,
        hide: !this.isActive()
      });
  }
}
class m {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classIcon class name for the main icon /<br>название класса для основной иконки
   * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
   */
  constructor(t, i = "is-icon", s = "is-icon-active") {
    o(this, "item");
    o(this, "active", c(() => this.item.isActive()));
    o(this, "iconBind", c(() => this.item.getIconBind()));
    o(this, "iconActiveBind", c(() => this.item.getIconActiveBind()));
    this.item = new u(
      t,
      i,
      s
    );
  }
}
class b extends v {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(i, s, e) {
    super(
      i,
      s,
      e
    );
    o(this, "icon");
    o(this, "onLoad", (i) => {
      var s;
      return (s = this.emits) == null ? void 0 : s.call(this, "load", i);
    });
    this.icon = new m(
      this.props,
      this.getSubClass("icon"),
      this.getSubClass("iconActive")
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
      iconBind: this.icon.iconBind,
      iconActiveBind: this.icon.iconActiveBind,
      isActive: this.icon.active
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      isActive: this.setup().isActive
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
    var e, a;
    const i = this.setup(), s = [];
    return this.initSlot("default", s), this.components.is("image") && ((e = this.props) != null && e.icon && this.components.renderAdd(
      s,
      "image",
      {
        ...i.iconBind.value,
        onLoad: this.onLoad
      },
      void 0,
      "icon"
    ), (a = this.props) != null && a.iconActive && this.components.renderAdd(
      s,
      "image",
      {
        ...i.iconActiveBind.value,
        onLoad: this.onLoad
      },
      void 0,
      "iconActive"
    )), l("span", {
      ...this.getAttrs(),
      ref: this.element,
      class: i.classes.value.main
    }, s);
  }
}
const r = {
  // :default [!] System label / Системная метка
  animationType: "type1"
}, f = {
  // Values
  icon: [String, Object],
  iconActive: [String, Object],
  // Status
  active: Boolean,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: r == null ? void 0 : r.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean
};
export {
  b as I,
  r as d,
  f as p
};
