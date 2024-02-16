var c = Object.defineProperty;
var h = (s, t, e) => t in s ? c(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var o = (s, t, e) => (h(s, typeof t != "symbol" ? t + "" : t, e), e);
import { shallowRef as u, resolveComponent as d, computed as f, h as r, Teleport as I } from "vue";
import { f as b } from "./data-DjQiFeY2.js";
import { D as g } from "./DesignConstructorAbstract-7RdiEQPS.js";
import { M as v, c as E } from "./MutationGlobal-BITbMHbx.js";
import { M } from "./MutationDataItem-9omIKaoj.js";
class S {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element instance of the element itself /<br>экземпляр самого элемента
   */
  constructor(t, e) {
    o(this, "mainElement", document.body);
    o(this, "componentName", "div");
    o(this, "componentItem");
    o(this, "binds", u({}));
    o(this, "slots", u({}));
    var n;
    this.props = t, t.item && (this.mainElement = t.item.getElement(), this.componentName = t.item.getComponentName(), this.componentItem = this.initComponentItem(), t.item.registration(e, () => this.update())), (n = t.item) == null || n.setStatus(v.end), this.update();
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    var e, n;
    const t = (e = this.props.item) == null ? void 0 : e.getSlots();
    return this.binds.value = { ...((n = this.props.item) == null ? void 0 : n.getProps()) ?? {} }, this.slots.value = t ? { ...t } : void 0, this;
  }
  /**
   * Initializes data for the component.<br>
   * Инициализирует данные для компонента.
   */
  initComponentItem() {
    var t;
    return ((t = E.getComponentGlobalItem(this.componentName)) == null ? void 0 : t.item) ?? d(this.componentName);
  }
}
class w extends g {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, n, i) {
    super(
      e,
      n,
      i
    );
    o(this, "mutation");
    this.mutation = new S(n, this.element), this.init();
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
      mainElement: this.mutation.mainElement,
      componentName: this.mutation.componentName,
      componentItem: this.mutation.componentItem,
      binds: this.mutation.binds,
      slots: this.mutation.slots,
      renderSlots: f(() => this.renderSlots())
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
    var n;
    const e = this.setup();
    if (e.componentItem)
      return r(I, {
        ref: this.element,
        class: (n = this.classes) == null ? void 0 : n.value.main,
        to: e.mainElement
      }, [
        r(
          e.componentItem,
          e.binds.value,
          e.renderSlots.value
        )
      ]);
  }
  /**
   * Rendering data for the slot.<br>
   * Рендеринг данных для слота.
   */
  renderSlots() {
    const e = this.setup(), n = {}, i = e.slots.value;
    return i && b(i, (l, p) => {
      const a = [];
      l.forEach((m) => {
        typeof m == "string" ? a.push(m) : a.push(r(
          m.tag,
          { ...m.attributes }
        ));
      }), n[p] = () => a;
    }), n;
  }
}
const G = {
  item: M
};
export {
  w as M,
  G as p
};
