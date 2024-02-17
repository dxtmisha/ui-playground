var h = Object.defineProperty;
var b = (e, t, i) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var g = (e, t, i) => (b(e, typeof t != "symbol" ? t + "" : t, i), i);
import { computed as l, h as v } from "vue";
import { D as f } from "./DesignConstructorAbstract-pYeoTVwY.js";
import { b as m, c as C } from "./useEnabled-CP9k_YqO.js";
import { b as u } from "./string-BjW7AeH_.js";
import { m as S } from "./event-MN4DTwoE.js";
const T = {
  // Values
  icon: [String, Object],
  // Status
  selected: Boolean,
  iconTurn: Boolean,
  iconHide: Boolean
}, x = {
  ...T,
  iconTrailing: [String, Object]
}, y = function(e, t, i = "is-icon", a = "is-icon-trailing") {
  const n = l(() => u(
    e == null ? void 0 : e.icon,
    {
      class: i,
      active: e == null ? void 0 : e.selected,
      turn: !(e != null && e.iconTrailing) && (e == null ? void 0 : e.iconTurn),
      hide: e == null ? void 0 : e.iconHide,
      animationType: "type2",
      start: !0,
      "data-event-type": "icon"
    },
    "icon"
  )), s = "iconTrailing" in e ? l(() => u(
    e.iconTrailing,
    {
      class: a,
      turn: e == null ? void 0 : e.iconTurn,
      end: !0,
      high: !0,
      "data-event-type": "icon-trailing"
    },
    "icon"
  )) : void 0, r = l(() => !!(e != null && e.icon || e != null && e.iconTrailing));
  return {
    iconBind: n,
    trailingBind: s,
    isIcon: r,
    renderIcon() {
      const c = [];
      return t && (e != null && e.icon && t.renderAdd(
        c,
        "icon",
        n.value,
        void 0,
        "icon"
      ), s && (e != null && e.iconTrailing) && t.renderAdd(
        c,
        "icon",
        s.value,
        void 0,
        "iconTrailing"
      )), c;
    }
  };
}, D = {
  progress: [Boolean, Object]
}, B = function(e, t, i = "is-progress", a) {
  const n = l(() => u(
    e.loading,
    {
      class: i,
      ...a
    },
    "visible"
  ));
  return {
    progressBind: n,
    renderProgress() {
      const s = [];
      return t && (e != null && e.loading) && t.renderAdd(
        s,
        "progress",
        n.value
      ), s;
    }
  };
}, R = {
  to: String,
  value: [String, Number, Object],
  detail: [Object]
}, k = function(e, t, i) {
  const a = (s) => {
    var c, o, d;
    return {
      type: ((d = (o = (c = s.target) == null ? void 0 : c.closest("[data-event-type]")) == null ? void 0 : o.dataset) == null ? void 0 : d.eventType) ?? "click",
      value: e == null ? void 0 : e.value,
      detail: e == null ? void 0 : e.detail
    };
  }, n = () => !1;
  return {
    onClick(s) {
      t.isEnabled.value && !n() ? i == null || i("click", s, a(s)) : S(s);
    }
  };
};
class H extends f {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(i, a, n) {
    super(
      i,
      a,
      n
    );
    g(this, "icons");
    this.icons = y(
      this.props,
      this.components,
      this.getSubClass("icon"),
      this.getSubClass("trailing")
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
    const i = m(this.props);
    return {
      ...C(
        this.props,
        this.slots,
        this.getSubClass("label")
      ),
      ...this.icons,
      ...B(
        this.props,
        this.components,
        this.getSubClass("loading"),
        {
          circular: !0,
          inverse: !0
        }
      ),
      ...i,
      ...k(
        this.props,
        i,
        this.emits
      )
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
        [this.getStatusClass("icon")]: this.icons.isIcon.value
      },
      // :classes [!] System label / Системная метка
      label: this.getSubClass("label"),
      icon: this.getSubClass("icon"),
      trailing: this.getSubClass("trailing"),
      loading: this.getSubClass("loading")
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
    var n;
    const i = this.setup(), a = [
      ...i.renderProgress(),
      ...i.renderLabel(),
      ...i.renderIcon()
    ];
    return i.isEnabled.value && this.components.renderAdd(a, "ripple"), v(((n = this.props) == null ? void 0 : n.tag) || "button", {
      ...this.getAttrs(),
      ref: this.element,
      class: i.classes.value.main,
      style: i.styles.value,
      disabled: i.disabledBind.value,
      onClick: i.onClick
    }, a);
  }
}
export {
  H as B,
  D as a,
  R as b,
  x as u
};
