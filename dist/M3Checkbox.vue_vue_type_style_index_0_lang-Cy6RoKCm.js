var B = Object.defineProperty;
var y = (i, e, t) => e in i ? B(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var r = (i, e, t) => (y(i, typeof e != "symbol" ? e + "" : e, t), t);
import { shallowRef as f, watchEffect as b, computed as m, h as u, defineComponent as M, openBlock as _, createBlock as S, unref as E } from "vue";
import { D as w } from "./DesignConstructorAbstract-COYvvqjm.js";
import { i as k, d as v, a as x } from "./object-DLpcn8Yy.js";
import { b as q } from "./string-BTYg8-hJ.js";
import { u as I } from "./useInputCheck-CeNkakET.js";
import { c as O, b as F } from "./useEnabled-DiFbdMDN.js";
import { p, _ as R } from "./M3FieldMessage.vue_vue_type_style_index_0_lang-cm0xQ-Vp.js";
import { _ as D } from "./M3Image.vue_vue_type_style_index_0_lang-bYfDsXs_.js";
import { _ as j } from "./M3Ripple.vue_vue_type_style_index_0_lang-BmBcJSf-.js";
import { a as A } from "./props-BMlJ7yOm.js";
class L {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param type object for working with input type /<br>объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions /<br>
   * объект для работы с проверкой по регулярным выражениям
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, s, n) {
    this.props = e, this.element = t, this.type = s, this.pattern = n;
  }
  /**
   * Returns the input element.<br>
   * Возвращает элемент ввода.
   */
  get() {
    const e = this.element.value;
    if (e)
      return "input" in e ? e.input : e;
  }
  /**
   * Returns the name of the input element.<br>
   * Возвращает название элемента ввода.
   */
  getName() {
    var e;
    return ((e = this.get()) == null ? void 0 : e.name) ?? "";
  }
  /**
   * Returns data for verification.<br>
   * Возвращает данные для проверки.
   */
  getPattern() {
    var e, t, s, n, a, c, h, o, l, d;
    return {
      name: (e = this.props) == null ? void 0 : e.name,
      type: (t = this.type) == null ? void 0 : t.get(),
      required: (s = this.props) == null ? void 0 : s.required,
      pattern: (n = this.pattern) == null ? void 0 : n.get(),
      step: (a = this.props) == null ? void 0 : a.step,
      min: (c = this.props) == null ? void 0 : c.min,
      max: (h = this.props) == null ? void 0 : h.max,
      minlength: (o = this.props) == null ? void 0 : o.minlength,
      maxlength: (l = this.props) == null ? void 0 : l.maxlength,
      ...((d = this.props) == null ? void 0 : d.input) ?? {}
    };
  }
  /**
   * Search for an element by its name inside a group or by selector.<br>
   * Поиск элемента по его названию внутри группы или по селектору.
   * @param nameSelectors element name or selector /<br>название элемента или селектор
   */
  findByName(e) {
    var n;
    if (e instanceof Element)
      return e;
    const t = (n = this.get()) == null ? void 0 : n.form;
    if (t) {
      const a = t.querySelector(`[name="${e}"]`);
      if (a)
        return a;
    }
    const s = document.querySelector(e);
    if (s)
      return s;
  }
  /**
   * Clear all values to the original ones.<br>
   * Очисти все значения до оригинальных.
   */
  clear() {
    var t;
    const e = this.element.value;
    return e && "clear" in e && ((t = e.clear) == null || t.call(e)), this;
  }
}
class P extends L {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t) {
    super(e, t);
  }
  /**
   * Returns data for verification.<br>
   * Возвращает данные для проверки.
   */
  getPattern() {
    var e, t, s;
    return {
      name: (e = this.props) == null ? void 0 : e.name,
      type: "checkbox",
      required: (t = this.props) == null ? void 0 : t.required,
      ...((s = this.props) == null ? void 0 : s.input) ?? {}
    };
  }
}
class H {
  constructor() {
    r(this, "change", !1);
  }
  /**
   * Returns values.<br>
   * Возвращает значения.
   */
  get() {
    return this.change;
  }
  /**
   * Changes values.<br>
   * Изменяет значения.
   * @param change values for change /<br>значения для изменения
   */
  set(e) {
    return this.change = e, this;
  }
  /**
   * Transitions to editing state.<br>
   * Переходит в состояние редактирования.
   */
  toChange() {
    return this.set(!0);
  }
  /**
   * Restores the original value.<br>
   * Восстанавливает первоначальное значение.
   */
  reset() {
    return this.set(!1);
  }
}
class N {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, s, n) {
    r(this, "value");
    r(this, "valueIs", !1);
    this.props = e, this.element = t, this.change = s, this.callback = n, this.value = this.getOriginal();
  }
  /**
   * Checks if there are any values.<br>
   * Проверяет, есть ли значения.
   */
  is() {
    var e;
    return this.valueIs || this.getBoolean() || !!((e = this.props) != null && e.placeholder);
  }
  /**
   * Returns the current value.<br>
   * Возвращает текущее значение.
   */
  get() {
    return this.value;
  }
  /**
   * Returns the current value, converted to a string.<br>
   * Возвращает текущее значение, преобразованное в строку.
   */
  getString() {
    var t;
    const e = this.get();
    return k(e) ? e.join(", ") : v(e) ? JSON.stringify(e) : e === !0 ? "1" : e === !1 ? "0" : x(e) ? ((t = e == null ? void 0 : e.toString) == null ? void 0 : t.call(e)) ?? "" : "";
  }
  /**
   * Returns the current value, converted to a number.<br>
   * Возвращает текущее значение, преобразованное в номер.
   */
  getNumber() {
    return this.getBoolean() ? parseFloat(this.getString()) : 0;
  }
  /**
   * Returns the current value of type boolean.<br>
   * Возвращает текущее значение типа boolean.
   */
  getBoolean() {
    return x(this.get());
  }
  /**
   * Returns the original value.<br>
   * Возвращает оригинальное значение.
   */
  getOriginal() {
    var e, t;
    return ((e = this.props) == null ? void 0 : e.value) || ((t = this.props) == null ? void 0 : t.modelValue);
  }
  /**
   * Returns the length of the entered value.<br>
   * Возвращает длину введенного значения.
   */
  getLength() {
    const e = this.get();
    return k(e) ? e.length : v(e) ? Object.keys(e).length : this.getString().length ?? 0;
  }
  /**
   * Changes the value.<br>
   * Изменяет значение.
   * @param value changeable value /<br>изменяемое значение
   */
  set(e) {
    return this.value !== e && (this.value = e, this.change.set(this.getOriginal() !== e), this.callback()), this;
  }
  setByEvent(e) {
    switch (typeof e) {
      case "object":
        e && ("value" in e ? this.set(e.value) : "target" in e && this.setByTarget(e.target), "valueIs" in e && (this.valueIs = e.valueIs));
        break;
      default:
        this.set(e);
        break;
    }
    return this;
  }
  /**
   * Changes the values by the selected element.<br>
   * Изменяет значения по выбранному элементу.
   * @param target selected elements /<br>выбранные элементы
   */
  setByTarget(e) {
    const t = this.isCheckbox(e) ? e.checked : e.value;
    return this.set(t);
  }
  /**
   * Changes the value by the checked property.<br>
   * Изменяет значение по свойству checked.
   * @param event event value /<br>значение события
   */
  setByChecked(e) {
    const t = e.target;
    return this.set(t.checked);
  }
  /**
   * Changes the value for radio type.<br>
   * Изменяет значение для типа radio.
   * @param event event object /<br>объект события
   */
  setByRadio(e) {
    const t = e.target, s = t.checked ? t.value : "";
    return this.set(s);
  }
  /**
   * Changes the values to the original ones.<br>
   * Изменяет значения на оригинальные.
   */
  update() {
    return this.set(this.getOriginal());
  }
  /**
   * Clear all values to the original ones.<br>
   * Очисти все значения до оригинальных.
   */
  clear() {
    return this.set(""), this.element.clear(), this.valueIs = !1, this;
  }
  /**
   * Is the selected type a checkbox.<br>
   * Является ли выбранный тип чекбокс.
   * @param target selected elements /<br>выбранные элементы
   */
  isCheckbox(e) {
    return e.type === "checkbox";
  }
}
class T {
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t) {
    this.props = e, this.value = t;
  }
  /**
   * Returns data for the icon.<br>
   * Возвращает данные для иконки.
   */
  get() {
    var t;
    const e = this.getIcon();
    return q(
      ((t = this.props) == null ? void 0 : t.icon) ?? e,
      {
        value: e
      }
    );
  }
  /**
   * Returns the name of the icon.<br>
   * Возвращает название иконки.
   */
  getIcon() {
    var e, t, s;
    if (this.value.getBoolean())
      return (e = this.props) == null ? void 0 : e.iconCheckbox;
    if ((t = this.props) != null && t.indeterminate)
      return (s = this.props) == null ? void 0 : s.iconIndeterminate;
  }
}
class $ {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    this.props = e;
  }
  /**
   * Returning error text.<br>
   * Возвращают текст ошибки.
   * @param state object for obtaining error information /<br>объект для получения информации об ошибке
   */
  get(e) {
    var s;
    const t = (s = this.props) == null ? void 0 : s.validationCode;
    if (t && !e.valid) {
      if (typeof t == "string")
        return t;
      {
        const n = this.getIndex(e);
        if (n && n in t)
          return t[n];
      }
    }
  }
  /**
   * Returns error index.<br>
   * Возвращает индекс ошибки.
   * @param state object for obtaining error information /<br>объект для получения информации об ошибке
   */
  getIndex(e) {
    for (const t in e)
      if (t !== "valid" && e[t])
        return t;
  }
}
class G {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param value object for working with values /<br>объект для работы со значениями
   * @param match object for working with checks for value matches /<br>объект для работы с проверкой на совпадение значений
   * @param code object for working with error codes /<br>объект для работы с кодами ошибок
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, s, n, a) {
    r(this, "item");
    r(this, "validation");
    this.props = e, this.element = t, this.value = s, this.code = n, this.match = a, this.item = I(this.element.getPattern());
  }
  /**
   * Checks if there is an error.<br>
   * Проверяет, есть ли ошибка.
   */
  isError() {
    var e;
    return !((e = this.get()) != null && e.status);
  }
  /**
   * Returns error data.<br>
   * Возвращает данные об ошибке.
   */
  get() {
    var e;
    return this.checkGlobal() ?? this.checkItem() ?? ((e = this.match) == null ? void 0 : e.check()) ?? {
      value: void 0
    };
  }
  /**
   * Returns error string.<br>
   * Возвращает строку об ошибке.
   */
  getMessage() {
    var e;
    return ((e = this.get()) == null ? void 0 : e.validationMessage) ?? "";
  }
  /**
   * Changes the validity data.<br>
   * Изменяет данные о валидности.
   * @param validation values for validity /<br>значения для валидности
   */
  set(e) {
    return "status" in e && "validationMessage" in e && "value" in e ? this.validation = {
      status: e.status,
      required: e == null ? void 0 : e.required,
      input: e == null ? void 0 : e.input,
      validationMessage: e.validationMessage,
      validity: e == null ? void 0 : e.validity,
      pattern: e == null ? void 0 : e.pattern,
      value: e.value
    } : this.validation = void 0, this;
  }
  /**
   * Updating data for input.<br>
   * Обновление данных для input.
   */
  update() {
    return this.item = I(this.element.getPattern()), this;
  }
  /**
   * Check for global data.<br>
   * Проверка для глобальных данных.
   */
  checkGlobal() {
    var e;
    return (e = this.props) != null && e.validationMessage ? {
      status: !1,
      validationMessage: this.props.validationMessage,
      value: this.value.get()
    } : this.validation ?? void 0;
  }
  /**
   * Check for selected data.<br>
   * Проверка для выбранных данных.
   */
  checkItem() {
    const e = this.item.check(this.value.get());
    if (!(e != null && e.status))
      return e;
  }
}
class V {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param value object for working with values /<br>объект для работы со значениями
   * @param validation object for working with validity /<br>объект для работы с валидностью
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, s, n, a) {
    this.props = e, this.change = t, this.value = s, this.validation = n, this.callbackEmit = a;
  }
  /**
   * Call of data change event.<br>
   * Вызов события изменения данных.
   * @param event event object /<br>объект события
   */
  onInput(e) {
    this.validation.set(e), this.value.setByEvent(e), this.on(e);
  }
  /**
   * Triggering the change event after losing focus.<br>
   * Вызов события изменения после потери фокуса.
   * @param event event object /<br>объект события
   */
  onChange(e) {
    this.on(e, "change");
  }
  /**
   * Triggering the event for select change.<br>
   * Вызов события для изменения селект.
   * @param event event object /<br>объект события
   */
  onSelect(e) {
    this.value.setByEvent(e), this.on(e).onChange(e);
  }
  /**
   * Triggering the event for changes in the checkbox.<br>
   * Вызов события для изменения в checkbox.
   * @param event event object /<br>объект события
   */
  onChecked(e) {
    this.value.setByChecked(e), this.on(e).onChange(e);
  }
  /**
   * Triggering the event for changes in the radio.<br>
   * Вызов события для изменения в radio.
   * @param event event object /<br>объект события
   */
  onRadio(e) {
    this.value.setByRadio(e), this.on(e).onChange(e);
  }
  /**
   * Triggering the event to delete all values.<br>
   * Вызов события для удаления всех значений.
   * @param event event object /<br>объект события
   */
  onClear(e) {
    this.value.clear(), this.on(e).onChange(e);
  }
  /**
   * Triggering the event.<br>
   * Вызов события.
   * @param event event object /<br>объект события
   * @param type event type /<br>тип события
   */
  on(e, t = "input") {
    if (this.callbackEmit(t, e, {
      ...this.getValidation(t),
      ...this.getData()
    }), t === "input") {
      const s = this.value.get();
      this.callbackEmit("update:value", s, { value: s }), this.callbackEmit("update:modelValue", s, { value: s });
    }
    return this;
  }
  /**
   * Checks whether additional data needs to be generated for the current event.<br>
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   * @param type event type /<br>тип события
   */
  isValue(e) {
    return !!(e && ["input", "change"].indexOf(e) >= 0);
  }
  /**
   * Returns input data.<br>
   * Возвращает данные об вводе.
   */
  getData() {
    return {
      value: this.value.get(),
      detail: this.props.detail
    };
  }
  /**
   * Returns validity data.<br>
   * Возвращает данные валидности.
   * @param type event type /<br>тип события
   */
  getValidation(e) {
    return this.isValue(e) ? this.validation.get() : {};
  }
}
class J {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor(e, t, s, n) {
    r(this, "element");
    r(this, "change");
    r(this, "value");
    r(this, "icon");
    r(this, "code");
    r(this, "validation");
    r(this, "event");
    this.element = new P(
      e,
      t
    ), this.change = new H(), this.value = new N(
      e,
      this.element,
      this.change,
      s
    ), this.icon = new T(
      e,
      this.value
    ), this.code = new $(e), this.validation = new G(
      e,
      this.element,
      this.value,
      this.code
    ), this.event = new V(
      e,
      this.change,
      this.value,
      this.validation,
      n
    );
  }
  /**
   * Value update.<br>
   * Обновление значения.
   */
  update() {
    return this.value.update(), this;
  }
}
class z {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, s) {
    r(this, "checkbox");
    r(this, "value", f(!1));
    r(this, "iconBind", f({}));
    r(this, "onInput", (e) => this.checkbox.event.onChecked(e));
    this.checkbox = new J(
      e,
      t,
      () => {
        this.update();
      },
      s
    ), b(() => this.checkbox.value.update()), b(() => {
      this.update();
    });
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    return this.value.value = this.checkbox.value.getBoolean(), this.iconBind.value = this.checkbox.icon.get(), this;
  }
}
const K = {
  disabled: p.disabled,
  helperMessage: p.helperMessage,
  validationMessage: p.validationMessage
}, Q = function(i, e) {
  const t = m(() => ({
    disabled: i == null ? void 0 : i.disabled,
    counter: i == null ? void 0 : i.counter,
    maxlength: i == null ? void 0 : i.maxlength,
    helperMessage: i == null ? void 0 : i.helperMessage,
    validationMessage: i == null ? void 0 : i.validationMessage
  }));
  return {
    messageBind: t,
    renderFieldMessage() {
      const s = [];
      return e && e.renderAdd(
        s,
        "message",
        t.value
      ), s;
    }
  };
};
class U extends w {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, s, n) {
    super(
      t,
      s,
      n
    );
    r(this, "checkbox");
    /**
     * Rendering of the main input.<br>
     * Рендеринг главного input.
     */
    r(this, "renderInput", () => {
      const t = this.setup();
      return u("input", {
        class: t.classes.value.input,
        name: this.props.name,
        type: "checkbox",
        checked: t.value.value,
        on: this.props.on,
        onInput: t.onInput
      });
    });
    /**
     * Rendering of the hidden input.<br>
     * Рендеринг скрытого input.
     */
    r(this, "renderInputHidden", () => u("input", {
      name: this.props.name,
      type: "hidden",
      value: "0"
    }));
    /**
     * Rendering of the checkbox element.<br>
     * Рендеринг элемента checkbox.
     */
    r(this, "renderChecked", () => {
      const t = this.setup(), s = [
        u("span", {
          class: t.classes.value.itemIcon
        }, [
          this.components.renderOne(
            "icon",
            t.iconBind.value
          )
        ])
      ];
      return this.components.renderAdd(
        s,
        "ripple",
        {
          disabled: t.isDisabled.value
        }
      ), u("span", {
        class: t.classes.value.item
      }, s);
    });
    /**
     * Rendering of the informational text element.<br>
     * Рендеринг элемента информационного текста.
     */
    r(this, "renderInfo", () => {
      const t = this.setup(), s = [
        ...t.renderLabel(),
        ...t.renderFieldMessage()
      ];
      return u("span", {
        class: t.classes.value.info
      }, s);
    });
    this.checkbox = new z(
      s,
      this.element,
      (a, c, h) => {
        var o;
        (o = this.emits) == null || o.call(
          this,
          a,
          c,
          h
        );
      }
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
      value: this.checkbox.value,
      iconBind: this.checkbox.iconBind,
      renderInput: this.renderInput,
      renderInputHidden: this.renderInputHidden,
      renderChecked: this.renderChecked,
      renderInfo: this.renderInfo,
      onInput: this.checkbox.onInput,
      ...O(
        this.props,
        this.slots,
        this.getSubClass(["info", "label"])
      ),
      ...F(this.props),
      ...Q(
        this.props,
        this.components
      )
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
      main: {},
      // :classes [!] System label / Системная метка
      input: this.getSubClass("input"),
      item: this.getSubClass("item"),
      itemIcon: this.getSubClass("item__icon"),
      info: this.getSubClass("info"),
      infoLabel: this.getSubClass("info__label")
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
    const t = this.setup(), s = [
      t.renderInputHidden(),
      t.renderInput(),
      t.renderChecked()
    ];
    return t.isLabel.value && s.push(t.renderInfo()), u("label", {
      ...this.getAttrs(),
      ref: this.element,
      class: t.classes.value.main
    }, s);
  }
}
const W = {}, g = {
  ...A,
  ...K,
  // Values
  value: [String, Boolean],
  modelValue: [String, Boolean],
  icon: [String, Object],
  indeterminate: Boolean,
  // Styles
  iconCheckbox: String,
  iconIndeterminate: String,
  // :prop [!] System label / Системная метка
  comp: Boolean,
  required: Boolean
}, C = {
  ...W,
  iconCheckbox: "check",
  iconIndeterminate: "indeterminate"
}, X = {
  ...g,
  iconCheckbox: {
    type: g.iconCheckbox,
    default: C.iconCheckbox
  },
  iconIndeterminate: {
    type: g.iconIndeterminate,
    default: C.iconIndeterminate
  },
  // :prop [!] System label / Системная метка
  required: Boolean
}, ce = /* @__PURE__ */ M({
  name: "M3Checkbox",
  __name: "M3Checkbox",
  props: { ...X },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(i, { expose: e, emit: t }) {
    const s = t, n = i, a = m(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-checkbox": !0,
        "m3-checkbox--required": n.required
        // :classes-values [!] System label / Системная метка
      }
    })), c = m(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new U(
      "m3.checkbox",
      n,
      {
        emits: s,
        components: {
          icon: D,
          message: R,
          ripple: j
        },
        classes: a,
        styles: c
      }
    ), o = h.render();
    return e(h.expose()), (l, d) => (_(), S(E(o)));
  }
});
export {
  ce as _
};
