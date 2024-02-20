var Ne = Object.defineProperty;
var Re = (n, t, e) => t in n ? Ne(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var a = (n, t, e) => (Re(n, typeof t != "symbol" ? t + "" : t, e), e);
import { toRefs as He, useAttrs as Pe, useSlots as je, ref as Xt, computed as l, h as p, shallowRef as v, watchEffect as H, onUnmounted as Mt, watch as Jt, defineComponent as m, openBlock as f, createBlock as y, unref as b, withCtx as Qt, renderSlot as Zt, onBeforeMount as ze, nextTick as Tt, resolveComponent as Nt, Teleport as te, onMounted as We, createApp as Ke } from "vue";
import { q as z, f as w, x as tt, p as ht, j as W, K as Ye, I as ee, t as G, z as Y, l as k, i as g, e as qe, F as Ge, r as se, g as Ue, v as Xe, b as Je, H as ie, A as Qe, D as Ze } from "./Icons-4MuLhBsh.js";
import { s as Rt, w as ne, A as ts, b as Q, E as P, G as ut, m as _t, c as ct, v as re, a as Bt, p as es, z as It, F as ae, k as ss, C as Et, B as Ht, g as is, l as Pt, f as ns, i as rs, j as as } from "./EventItem-B3PK6XBB.js";
class os {
  /**
   * Constructor
   * @param components list of connected components /<br>список подключенных компонентов
   * @param modification data for modification /<br>данные для модификации
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t = {}, e) {
    this.components = t, this.modification = e;
  }
  /**
   * Check the presence of the component.<br>
   * Проверить наличие компонента.
   * @param name name of the component /<br>названия компонента
   */
  is(t) {
    return t in this.components;
  }
  /**
   * Getting the object of the component.<br>
   * Получение объекта компонента.
   * @param name name of the component /<br>названия компонента
   */
  get(t) {
    var e;
    return (e = this.components) == null ? void 0 : e[t];
  }
  /**
   * Returns the modified input data of the connected components.<br>
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this /<br>название данного
   * @param props basic data /<br>базовые данные
   */
  getModification(t, e) {
    var s;
    if (t) {
      const i = Rt((s = this.modification) == null ? void 0 : s[t]);
      if (i && z(i)) {
        const r = {};
        return w(i, (o, h) => {
          r[h] = Rt(o);
        }), e && Object.assign(r, e), r;
      }
    }
    return e;
  }
  /**
   * Rendering a component by its name and returning an array with one component.<br>
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  render(t, e, s, i) {
    const r = this.renderOne(
      t,
      e,
      s,
      i
    );
    return r ? [r] : [];
  }
  /**
   * Rendering a component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderOne(t, e, s, i) {
    if (this.is(t)) {
      const r = i ?? t;
      return ne(
        this.get(t),
        this.getModification(r, e),
        s,
        r
      );
    }
  }
  /**
   * Rendering the component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param item an array to which the rendered object will be added /<br>
   * массив, по которому будет добавлять объект
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderAdd(t, e, s, i, r) {
    return t.push(...this.render(e, s, i, r)), this;
  }
}
class B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, e, s) {
    a(this, "name");
    a(this, "element", Xt());
    a(this, "refs");
    a(this, "components");
    a(this, "emits");
    a(this, "classes");
    a(this, "classesSub");
    a(this, "styles");
    a(this, "stylesSub");
    a(this, "attrs");
    a(this, "slots");
    a(this, "data");
    a(this, "dataExpose");
    this.props = e, this.name = this.initName(t), this.refs = this.props ? He(this.props) : {}, this.components = new os(s == null ? void 0 : s.components, s == null ? void 0 : s.compMod), this.emits = s == null ? void 0 : s.emits, this.classes = s == null ? void 0 : s.classes, this.styles = s == null ? void 0 : s.styles, this.attrs = Pe(), this.slots = je();
  }
  init() {
    return this.makeOptions(), this.classesSub = l(() => this.initClasses()), this.stylesSub = l(() => this.initStyles()), this.data = {
      name: this.getName(),
      element: this.element,
      classes: l(() => this.updateClasses()),
      styles: l(() => this.updateStyles()),
      ...this.initSetup()
    }, this.dataExpose = this.initExpose(), this;
  }
  /**
   * Getting the class name.<br>
   * Получение названия класса.
   */
  getName() {
    return this.name.join("-");
  }
  /**
   * Getting the class name.<br>
   * Получение названия класса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getSubClass(t) {
    return `${this.getName()}__${tt(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.<br>
   * Получение названия класса для статуса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${tt(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.<br>
   * Получение названия свойства для стиля.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${tt(t).join("-")}`;
  }
  /**
   * Getting additional parameters.<br>
   * Получение дополнительных параметров.
   */
  getAttrs() {
    const t = { ...this.attrs ?? {} };
    return "class" in t && delete t.class, "style" in t && delete t.style, t;
  }
  /**
   * Execution method to replace setup in Vue.<br>
   * Метод выполнения, для замены setup в Vue.
   */
  setup() {
    return this.data ?? {};
  }
  /**
   * List of available external variables.<br>
   * Список доступных переменных извне.
   */
  expose() {
    return this.dataExpose ?? {};
  }
  /**
   * The rendering method for the setup method.<br>
   * Метод рендеринга для метода настройки.
   */
  render() {
    return () => this.initRender();
  }
  /**
   * Initializes the slot.<br>
   * Инициализирует слот.
   * @param name slot name /<br>название слота
   * @param children if you pass this element, the slot will be added to it /<br>
   * если передать этот элемент, то слот добавится в него
   * @param props property for the slot /<br>свойство для слота
   */
  initSlot(t, e, s = {}) {
    var i;
    if (this.slots && ((i = this.slots) != null && i[t]) && typeof this.slots[t] == "function") {
      const r = this.slots[t](s);
      return e && e.push(r), r;
    }
  }
  /**
   * Converts the class name to standard for the current component.<br>
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes /<br>список классов
   */
  toClassName(t) {
    if (ht(t)) {
      const e = {};
      return w(t, (s, i) => {
        i.match(/\?\?/) ? e[i.replace(/\?\?/, this.getName())] = s : i.match(/\?/) ? e[i.replace(/\?/, this.name[0])] = s : e[i] = s;
      }), e;
    }
    return {};
  }
  /**
   * Getting component names as an array.<br>
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation /<br>название компонента для преобразования
   */
  initName(t) {
    return w(t.split(".", 2), (e) => ts(e));
  }
  /**
   * Updating data about the class.<br>
   * Обновление данных об классе.
   */
  updateClasses() {
    var s, i;
    const t = (s = this.classesSub) == null ? void 0 : s.value, e = (i = this.classes) == null ? void 0 : i.value;
    return t && e ? {
      ...t,
      ...e,
      main: {
        ...this.toClass(t == null ? void 0 : t.main),
        ...this.toClass(e == null ? void 0 : e.main)
      }
    } : e ?? {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    var s, i;
    const t = (s = this.stylesSub) == null ? void 0 : s.value, e = (i = this.styles) == null ? void 0 : i.value;
    return t && e ? {
      ...t,
      ...e
    } : e ?? {};
  }
  /**
   * Transformation of the class value into an object.<br>
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation /<br>список классов для преобразования
   */
  toClass(t) {
    return z(t) ? t : Array.isArray(t) ? { [t.filter((s) => typeof s == "string" && s.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
}
class hs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classIcon class name for the main icon /<br>название класса для основной иконки
   * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e = "is-icon", s = "is-icon-active") {
    this.props = t, this.classIcon = e, this.classIconActive = s;
  }
  /**
   * Checks if the additional icon is active.<br>
   * Проверяет, активна ли дополнительная иконка.
   */
  isActive() {
    var t, e;
    return !!((t = this.props) != null && t.active && ((e = this.props) != null && e.iconActive));
  }
  /**
   * Returns the property for the base icon.<br>
   * Возвращает свойство для базовой иконки.
   */
  getIconBind() {
    var t, e, s;
    if ((t = this.props) != null && t.icon)
      return Q(this.props.icon, {
        class: this.classIcon,
        turn: (e = this.props) == null ? void 0 : e.turn,
        disabled: (s = this.props) == null ? void 0 : s.disabled,
        hide: this.isActive()
      });
  }
  /**
   * Returns the property for the additional icon.<br>
   * Возвращает свойство для дополнительной иконки.
   */
  getIconActiveBind() {
    var t, e, s;
    if ((t = this.props) != null && t.iconActive)
      return Q(this.props.iconActive, {
        class: this.classIconActive,
        turn: (e = this.props) == null ? void 0 : e.turn,
        disabled: (s = this.props) == null ? void 0 : s.disabled,
        hide: !this.isActive()
      });
  }
}
class cs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classIcon class name for the main icon /<br>название класса для основной иконки
   * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
   */
  constructor(t, e = "is-icon", s = "is-icon-active") {
    a(this, "item");
    a(this, "active", l(() => this.item.isActive()));
    a(this, "iconBind", l(() => this.item.getIconBind()));
    a(this, "iconActiveBind", l(() => this.item.getIconActiveBind()));
    this.item = new hs(
      t,
      e,
      s
    );
  }
}
class dt extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "icon");
    a(this, "onLoad", (e) => {
      var s;
      return (s = this.emits) == null ? void 0 : s.call(this, "load", e);
    });
    this.icon = new cs(
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
    var i, r;
    const e = this.setup(), s = [];
    return this.initSlot("default", s), this.components.is("image") && ((i = this.props) != null && i.icon && this.components.renderAdd(
      s,
      "image",
      {
        ...e.iconBind.value,
        onLoad: this.onLoad
      },
      void 0,
      "icon"
    ), (r = this.props) != null && r.iconActive && this.components.renderAdd(
      s,
      "image",
      {
        ...e.iconActiveBind.value,
        onLoad: this.onLoad
      },
      void 0,
      "iconActive"
    )), p("span", {
      ...this.getAttrs(),
      ref: this.element,
      class: e.classes.value.main
    }, s);
  }
}
const q = {
  // :default [!] System label / Системная метка
  animationType: "type1"
}, gt = {
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
    default: q == null ? void 0 : q.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean
}, ft = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "xl", "full"],
  size: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, yt = {
  ...q,
  // :default [!] System label / Системная метка
  animationType: "type1"
}, ls = {
  ...gt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: yt == null ? void 0 : yt.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: String,
  size: String
};
class us {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param watch data for tracking /<br>данные для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e = Object.keys(t)) {
    a(this, "cache", {});
    this.props = t, this.watch = e;
  }
  /**
   * Checks if the value has been updated.<br>
   * Проверяет, обновлено ли значение.
   * @param name property name /<br>название свойства
   */
  is(t) {
    return W(t) ? !!t.find((e) => this.isDifferent(e)) : this.isDifferent(t);
  }
  /**
   * Checks if there are changes in the data.<br>
   * Проверяет, есть ли изменения в данных.
   */
  isChanged() {
    const t = this.props;
    return !!this.watch.find((e) => e in t && this.isDifferent(e));
  }
  /**
   * Updates all values.<br>
   * Обновляет все значения.
   */
  update() {
    const t = this.props;
    this.watch.forEach((e) => {
      e in t && this.isDifferent(e) && (this.cache[e] = t[e]);
    });
  }
  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param name property name /<br>название свойства
   */
  isDifferent(t) {
    var e, s;
    return ((e = this.cache) == null ? void 0 : e[t]) !== ((s = this.props) == null ? void 0 : s[t]);
  }
}
class ds {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param callback callback function when the value changes /<br>
   * функция обратного вызова при изменении значения
   * @param changed base data /<br>данный для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    a(this, "event", {});
    a(this, "changed");
    this.props = t, this.callback = e, this.changed = new us(t, s);
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  make(t) {
    return this.makeCallback(t), this;
  }
  /**
   * Checks if there are values in the property.<br>
   * Проверяет, есть ли значения в свойстве.
   * @param name property names /<br>названия свойств
   */
  is(t) {
    return t in this.props;
  }
  /**
   * Checks if the value has been changed by the property name.<br>
   * Проверяет, было ли изменено значение по названию свойства.
   * @param name property names /<br>названия свойств
   * @param nameProp names of properties of the input variable /<br>названия свойств входной переменной
   */
  isChanged(t, e) {
    return !(t in this.event) || this.changed.is(e || t);
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  makeCallback(t = !1) {
    (t || this.changed.isChanged()) && (this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
  /**
   * The function calls an image call.<br>
   * Функция вызывает образный вызов.
   */
  makeCallbackItem() {
    this.callback && this.callback(this.event);
  }
}
class $t extends ds {
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  make(t) {
    return this.makeCallback(t).then(), this;
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  async makeCallback(t) {
    (t || this.changed.isChanged()) && (await this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
}
var S = /* @__PURE__ */ ((n) => (n.file = "file", n.image = "image", n.color = "color", n.public = "public", n.filled = "filled", n.outlined = "outlined", n.round = "round", n.sharp = "sharp", n.twoTone = "two-tone", n.material = "material", n.icon = "icon", n))(S || {});
class gs extends P {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    super(() => this.update()), this.props = t;
  }
  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  get() {
    var t;
    return this.getCache([(t = this.props) == null ? void 0 : t.value]);
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    var e;
    const t = (e = this.props) == null ? void 0 : e.value;
    if (t) {
      if (t instanceof File)
        return S.file;
      if (t.match(/\//))
        return S.image;
      if (t.match(Ye))
        return S.icon;
      if (t.match(/^#/))
        return S.color;
      if (t.match(/^@/))
        return S.public;
      if (t.match(/^\$/))
        return S.material;
      const s = t.match(/^(filled|outlined|round|sharp|two-tone)-/);
      return s ? s[1] : ee.is(t) ? S.public : S.material;
    }
  }
}
const ps = 720;
class ms {
  /**
   * Checks if the file is an image.<br>
   * Проверяет, является ли файл изображением.
   * @param file verified file /<br>проверяемый файл
   */
  static isImage(t) {
    return !!t.type.match(/^image\//);
  }
  /**
   * Creates an image based on a file or a link.<br>
   * Создает изображение на основе файла или ссылки.
   * @param src file or link /<br>файл или ссылка
   */
  static createImage(t) {
    return new Promise((e) => {
      if (t) {
        const s = new Image();
        s.onerror = () => e(void 0), s.onload = () => {
          e({
            image: s,
            src: this.getSRC(s, t),
            width: s.naturalWidth,
            height: s.naturalHeight
          });
        }, (async () => s.src = t instanceof File ? await this.getFileResult(t) : t)();
      } else
        e(void 0);
    });
  }
  /**
   * Returns a link to the image.<br>
   * Возвращает ссылку на изображение.
   * @param src file or link /<br>файл или ссылка
   */
  static getPath(t) {
    return this.createImage(t).then((e) => (e == null ? void 0 : e.src) ?? "");
  }
  /**
   * Image size adaptation. Checks if the image size is larger than maxSize, reduces it to maxSize.<br>
   * Адаптация размера изображения. Проверяет, если размер изображения больше maxSize, уменьшает его до maxSize.
   * @param image image element /<br>элемент изображения
   * @param src link to image /<br>ссылка на изображение
   * @param maxSize maximum allowable image size /<br>максимальный допустимый размер изображения
   */
  static getSRC(t, e, s = ps) {
    var i;
    if ((e instanceof File || e === void 0) && (t.naturalHeight > s || t.naturalWidth > s)) {
      const r = t.naturalWidth >= t.naturalHeight, o = (i = document.createElement("canvas")) == null ? void 0 : i.getContext("2d");
      return o ? (o.canvas.width = r ? s : t.naturalWidth / t.naturalHeight * s, o.canvas.height = r ? t.naturalHeight / t.naturalWidth * s : s, o.drawImage(t, 0, 0, o.canvas.width, o.canvas.height), o.canvas.toDataURL()) : "";
    } else
      return t.src;
  }
  /**
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.<br>
   * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read /<br>Blob или File которые следует прочитать
   */
  static getFileResult(t) {
    return new Promise((e) => {
      if (this.isImage(t)) {
        const s = new FileReader();
        s.onload = () => e(typeof s.result == "string" ? s.result : ""), s.readAsDataURL(t);
      } else
        e("");
    });
  }
}
class fs extends $t {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type image type /<br>тип изображения
   * @param callback callback function upon successful image loading /<br>
   * функция обратного вызова при успешной загрузке изображения
   */
  constructor(e, s, i) {
    var r;
    super(e, i, ["value", "url"]);
    a(this, "item");
    this.type = s, (r = this.props) != null && r.value && this.make();
  }
  /**
   * Checks if there are values.<br>
   * Проверяет, есть ли значения.
   */
  is() {
    return this.getImage() !== void 0;
  }
  /**
   * Checks if the value is a link, that is, a type of string.<br>
   * Проверяет, является ли значение ссылкой, то есть видом строки.
   */
  isLink() {
    return this.is() && typeof this.getImage() == "string";
  }
  /**
   * Checks if the value is an image object.<br>
   * Проверяет, является ли значение объектом изображения.
   */
  isImage() {
    return this.is() && typeof this.getImage() != "string";
  }
  /**
   * Returns images.<br>
   * Возвращает изображения.
   */
  getImage() {
    var e;
    return (e = this.event) == null ? void 0 : e.image;
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  async initEvent() {
    this.isChanged("image", ["value", "url"]) && (this.event.image = await this.initImage());
  }
  /**
   * Calculates the image value and returns it.<br>
   * Вычисляет значение изображения и возвращает его.
   */
  async initImage() {
    var s, i;
    const e = (s = this.props) == null ? void 0 : s.value;
    if (e)
      switch (this.type.get()) {
        case S.image:
        case S.file:
          try {
            return await ms.createImage(e);
          } catch {
            console.error(Image, e);
          }
          break;
        case S.public:
        case S.icon:
          if (G(e))
            return await ee.get(e, (i = this.props) == null ? void 0 : i.url);
          break;
      }
  }
}
class ys {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
  }
  /**
   * Checks if there are coordinates for calculation.<br>
   * Проверяет, есть ли координаты для вычисления.
   */
  is() {
    var e;
    const t = (e = this.props) == null ? void 0 : e.coordinator;
    return W(t) && t.length > 0 && t.length < 5;
  }
  /**
   * Returns the sizes for the background-position property by coordinates.<br>
   * Возвращает размеры для свойства background-position по координатам.
   */
  get() {
    const t = this.getCoordinator();
    return {
      width: 100 - t[1] - t[3],
      height: 100 - t[2] - t[0]
    };
  }
  /**
   * Returns coordinates.<br>
   * Возвращает координаты.
   */
  getCoordinator() {
    var t;
    if (this.is()) {
      const e = (t = this.props) == null ? void 0 : t.coordinator;
      switch (e.length) {
        case 1:
          return [
            e[0],
            e[0],
            e[0],
            e[0]
          ];
        case 2:
          return [
            e[0],
            e[1],
            e[0],
            e[1]
          ];
        case 3:
          return [
            e[0],
            e[1],
            e[2],
            e[1]
          ];
        case 4:
          return e;
      }
    }
    return [0, 0, 0, 0];
  }
  /**
   * Returns the values for the background property.<br>
   * Возвращает значения для свойства background.
   */
  getSize() {
    const t = this.get();
    return {
      width: `${100 / t.width * 100}%`,
      height: `${100 / t.height * 100}%`
    };
  }
}
class bs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param coordinator coordinates for margins /<br>координаты для отступов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.coordinator = e;
  }
  /**
   * Returns the position on the left.<br>
   * Возвращает позицию слева.
   */
  getX() {
    var t, e;
    return this.coordinator.is() ? `${this.coordinator.getCoordinator()[3] + this.coordinator.get().width / 2}%` : ((e = (t = this.props) == null ? void 0 : t.x) == null ? void 0 : e.toString()) || "center";
  }
  /**
   * Returns the position on the top.<br>
   * Возвращает позицию сверху.
   */
  getY() {
    var t, e;
    return this.coordinator.is() ? `${this.coordinator.getCoordinator()[0] + this.coordinator.get().height / 2}%` : ((e = (t = this.props) == null ? void 0 : t.y) == null ? void 0 : e.toString()) || "center";
  }
}
class vs {
  /**
   * Constructor
   * @param name group name /<br>название группы
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    a(this, "factorMax", 1);
    a(this, "size", {
      width: 0,
      height: 0
    });
    a(this, "offset", {
      width: 7680,
      height: 7680
    });
    this.name = t;
  }
  /**
   * Checks whether the element belongs to the current group.<br>
   * Проверяет, принадлежит ли элемент к текущей группе.
   * @param name name of the checked group /<br>название проверяемой группы
   */
  is(t) {
    return this.name === t;
  }
  /**
   * Checks if the group has elements with sizes. It is used to check if there is data for work.<br>
   * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
   */
  isSize() {
    return !!(this.size.width || this.size.width);
  }
  /**
   * Returns the maximum physical width.<br>
   * Возвращает максимальную физическую ширину.
   */
  getWidth() {
    return this.size.width;
  }
  /**
   * Returns the maximum physical height.<br>
   * Возвращает максимальную физическую высоту.
   */
  getHeight() {
    return this.size.height;
  }
  /**
   * Returns the actual width.<br>
   * Возвращает фактическую ширину.
   */
  getOffsetWidth() {
    return this.offset.width;
  }
  /**
   * Returns the actual height.<br>
   * Возвращает фактическую высоту.
   */
  getOffsetHeight() {
    return this.offset.height;
  }
  /**
   * Returns the maximum multiplier for scaling.<br>
   * Возвращает максимальный множитель для масштабирования.
   */
  getFactorMax() {
    return this.factorMax;
  }
  /**
   * Updating size.width, if it is less than the selected value.<br>
   * Обновление size.width, если она меньше выбранного значения.
   * @param width value of the selected width /<br>значение выбранной ширины
   */
  makeWidth(t) {
    return t > this.size.width && (this.size.width = t), this;
  }
  /**
   * Updating size.height, if it is less than the selected value.<br>
   * Обновление size.height, если она меньше выбранного значения.
   * @param height value of the selected height /<br>значение выбранной высоты
   */
  makeHeight(t) {
    return t > this.size.height && (this.size.height = t), this;
  }
  /**
   * Updating offset.width, if it is larger than the selected value.<br>
   * Обновление offset.width, если она больше выбранного значения.
   * @param width value of the selected width /<br>значение выбранной ширины
   */
  makeOffsetWidth(t) {
    return t < this.offset.width && (this.offset.width = t), this;
  }
  /**
   * Updating offset.height, if it is larger than the selected value.<br>
   * Обновление offset.height, если она больше выбранного значения.
   * @param height value of the selected height /<br>значение выбранной высоты
   */
  makeOffsetHeight(t) {
    return t < this.offset.height && (this.offset.height = t), this;
  }
  /**
   * Changes the multiplier value if it is greater than the checked value.<br>
   * Изменяет значение множителя, если оно больше проверяемого значения.
   * @param value values for verification /<br>значения для проверки
   */
  makeFactorMax(t) {
    return t < this.factorMax && (this.factorMax = t), this;
  }
  /**
   * Restoring the value to its original state.<br>
   * Восстановление значения в изначальное состояние.
   */
  reset() {
    return this.factorMax = 1, this.size = {
      width: 0,
      height: 0
    }, this.offset = {
      width: 7680,
      height: 7680
    }, this;
  }
}
class j {
  /**
   * Checks if the group has elements with sizes. It is used to check if there is data for work.<br>
   * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
   */
  static isSize() {
    return this.items.find((t) => t.isSize()) !== void 0;
  }
  /**
   * Returns an object with data for calculation by the name of its group.<br>
   * Возвращает объект с данными для вычисления по названию его группы.
   * @param name group name /<br>название группы
   */
  static get(t) {
    return this.find(t) || this.init(t);
  }
  /**
   * Resets all parameters for all groups.<br>
   * Сбрасывает все параметры для всех групп.
   */
  static reset() {
    this.items.forEach((t) => t.reset());
  }
  /**
   * Search for the ImageCalculation object by the name of the group.<br>
   * Поиск объекта ImageCalculation по названию группы.
   * @param name group name /<br>название группы
   */
  static find(t) {
    return this.items.find((e) => e.is(t));
  }
  /**
   * Creating a new ImageCalculation object by the name of the group.<br>
   * Создание нового объекта ImageCalculation по названию группы.
   * @param name group name /<br>название группы
   */
  static init(t) {
    const e = new vs(t);
    return this.items.push(e), e;
  }
}
a(j, "items", []);
class _ {
  /**
   * Checks if an element is present in the list.<br>
   * Проверяет, присутствует ли элемент в списке.
   * @param item object for working with images /<br>объект для работы с изображениями
   */
  static is(t) {
    return this.objects.findIndex((e) => e === t) !== -1;
  }
  /**
   * Adding a new element for tracking.<br>
   * Добавление нового элемента для отслеживания.
   * @param item object for working with images /<br>объект для работы с изображениями
   */
  static add(t) {
    this.is(t) || (this.objects.push(t), this.make());
  }
  /**
   * Removal of the element.<br>
   * Удаления элемента.
   * @param item object for working with images /<br>объект для работы с изображениями
   */
  static remove(t) {
    const e = this.objects.findIndex((s) => s === t);
    e !== -1 && (this.objects.splice(e, 1), this.cache = []), this.make();
  }
  /**
   * Resets all cached data and rereads scaling for all elements.<br>
   * Обнуляет все кэшированные данные и перечитывает масштабирование для всех элементов.
   */
  static reset() {
    this.cache = [], this.start();
  }
  /**
   * Starts the calculation process or turns it off if there are no active elements in the list.<br>
   * Запускает процесс вычисления или отключает его, если в списке нет активных элементов.
   */
  static make() {
    this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event = new ut(window, ["scroll-sync"], () => this.start()).start(), this.start());
  }
  /**
   * Returns a list of elements that are visible or constantly being calculated.<br>
   * Возвращает список элементов, которые видны или постоянно вычисляются.
   */
  static getItemIdByVisible() {
    const t = [];
    return this.objectsAdaptive.forEach((e) => {
      e.isVisible() && t.push(e.getId());
    }), t;
  }
  /**
   * Method for starting the calculation of scaling elements in the list.<br>
   * Метод для запуска вычисления масштабирования элементов в списке.
   */
  static start() {
    var t;
    if (this.isAdaptive()) {
      this.makeAdaptive();
      const e = this.getItemIdByVisible();
      this.isCache(e) && (this.cache = e, this.makeSize(), this.makePercent(), this.makeFactorMax(), this.makeCallback());
    } else
      (t = this.event) == null || t.stop();
  }
  /**
   * Updates the list of elements available for calculation. These are the
   * elements that are close to the border of the visible area.<br>
   * Обновляет список доступных для вычисления элементов. Это те элементы,
   * которые близки к границе видимой области.
   */
  static makeAdaptive() {
    this.objectsAdaptive = [], this.objects.forEach((t) => {
      t.make(), t.isBeyond() && this.objectsAdaptive.push(t);
    });
  }
  /**
   * Calculates the dimensions of an element relative to the image size,
   * the size of the element, and its physical location on the image.<br>
   * Вычисляет размеры элемента относительно размера изображения,
   * размера элемента и его физического расположения на изображении.
   */
  static makeSize() {
    j.reset(), this.objectsAdaptive.forEach((t) => {
      const e = t.getElement();
      e && t.isVisible() && j.get(t.getGroup()).makeWidth(t.getWidth()).makeHeight(t.getHeight()).makeOffsetWidth(e.offsetWidth).makeOffsetHeight(e.offsetHeight);
    });
  }
  /**
   * Calculation of the basic scaling of an element without taking into account other elements.<br>
   * Вычисление базового масштабирования элемента без учета других элементов.
   */
  static makePercent() {
    j.isSize() && this.objectsAdaptive.forEach((t) => {
      const e = t.getElement(), s = j.get(t.getGroup());
      if (e) {
        const i = s.getWidth(), r = s.getHeight();
        t.setPercent(
          t.getWidth() * (i ? 1 / i : 0) * (s.getOffsetWidth() / e.offsetWidth),
          t.getHeight() * (r ? 1 / r : 0) * (s.getOffsetHeight() / e.offsetHeight)
        );
      }
    });
  }
  /**
   * Calculation of the largest element to determine the base size.
   * This parameter is used for scaling other elements,
   * reducing them to the necessary proportion.<br>
   * Вычисление самого большого элемента для определения базового размера.
   * Этот параметр используется для масштабирования других элементов,
   * уменьшая их до нужной пропорции.
   */
  static makeFactorMax() {
    j.isSize() && this.objectsAdaptive.forEach((t) => {
      t.isVisible() && j.get(t.getGroup()).makeFactorMax(t.getFactor());
    });
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  static makeCallback() {
    this.objectsAdaptive.forEach((t) => {
      t.makeCallback();
    });
  }
  /**
   * Checks if there is an active element at the moment.<br>
   * Проверяет, есть ли в текущий момент активный элемент.
   */
  static isAdaptive() {
    return !!this.objects.find((t) => t.is());
  }
  /**
   * Checks whether the composition of visible elements has changed.<br>
   * Проверяет, изменился ли состав видимых элементов.
   * @param visible list of indices of visible elements /<br>список индексов видимых элементов
   */
  static isCache(t) {
    return this.cache.join("|") !== t.join("|");
  }
}
a(_, "objects", []), a(_, "objectsAdaptive", []), a(_, "cache", []), a(_, "event"), a(_, "time");
const Cs = "main", jt = 256;
class ks {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param data image data /<br>данные изображения
   * @param callback callback function when updating the image scale /<br>
   * функция обратного вызова при обновлении масштаба изображения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i) {
    a(this, "percent", {
      width: 0,
      height: 0
    });
    a(this, "beyond", !1);
    a(this, "visible", !1);
    this.props = t, this.data = e, this.element = s, this.callback = i, this.reset();
  }
  /**
   * Checks if the element’s conditions are suitable for scaling.<br>
   * Проверяет, подходить ли у элемента условия для масштабирования.
   */
  is() {
    var t;
    return !!((t = this.props) != null && t.adaptive) && this.data.isImage() && !!(this.element.value && this.element.value.closest("body") && (this.getWidth() || this.getHeight()));
  }
  /**
   * Checks for compliance with the group.<br>
   * Проверяет на соответствие группе.
   * @param name name of the checked group /<br>название проверяемой группы
   */
  isGroup(t) {
    return this.getGroup() === t;
  }
  /**
   * Is it available for calculation.<br>
   * Доступен ли для вычисления.
   */
  isBeyond() {
    return this.beyond;
  }
  /**
   * Is the element visible.<br>
   * Виден ли элемент.
   */
  isVisible() {
    return this.visible;
  }
  /**
   * Returns the name of the group.<br>
   * Возвращает название группы.
   */
  getGroup() {
    var t;
    return ((t = this.props) == null ? void 0 : t.adaptiveGroup) ?? Cs;
  }
  /**
   * Returns the identifier of the element.<br>
   * Возвращает идентификатор элемента.
   */
  getId() {
    return _t(this.element.value);
  }
  /**
   * Returns the current element.<br>
   * Возвращает текущий элемент.
   */
  getElement() {
    return this.element.value;
  }
  /**
   * Returns the physical width of the object.<br>
   * Возвращает физическую ширину объекта.
   */
  getWidth() {
    var t;
    return Y(((t = this.props) == null ? void 0 : t.objectWidth) ?? 0);
  }
  /**
   * Returns the physical height of the object.<br>
   * Возвращает физическую высоту объекта.
   */
  getHeight() {
    var t;
    return Y(((t = this.props) == null ? void 0 : t.objectHeight) ?? 0);
  }
  /**
   * Returns the axis for scaling.<br>
   * Возвращает ось для масштабирования.
   */
  getType() {
    if (this.getWidth() && this.percent.width > 0)
      return "x";
    if (this.getHeight() && this.percent.height > 0)
      return "y";
  }
  /**
   * Calculation of the base size of the image to determine how to scale the image.<br>
   * Вычисление базового размера изображения, чтобы определить, как надо масштабировать изображение.
   */
  getSize() {
    if (this.element.value && this.data.isImage()) {
      const t = this.data.getImage();
      switch (this.getType()) {
        case "x":
          return t.height * (this.element.value.offsetWidth * this.percent.width / t.width);
        case "y":
          return t.width * (this.element.value.offsetHeight * this.percent.height / t.height);
      }
    }
    return 0;
  }
  /**
   * Multiplier for determining the level of image scaling relative to other elements.<br>
   * Множитель для определения уровня масштабирования изображения относительно других элементов.
   */
  getFactor() {
    const t = this.element.value, e = this.getSize(), s = this.getType();
    if (t) {
      if (s === "x" && e > t.offsetHeight)
        return t.offsetHeight / e;
      if (s === "y" && e > t.offsetWidth)
        return t.offsetWidth / e;
    }
    return 1;
  }
  /**
   * Returns values for the background-size property.<br>
   * Возвращает значения для свойства background-size.
   */
  getBackgroundSize() {
    const t = j.get(this.getGroup()).getFactorMax();
    switch (this.getType()) {
      case "x":
        return `${100 * this.percent.width * t}% auto`;
      case "y":
        return `auto ${100 * this.percent.height * t}%`;
    }
    return null;
  }
  /**
   * Size change for calculation.<br>
   * Изменение размера для вычисления.
   * @param width width value /<br>значение ширины
   * @param height height value /<br>значение высоты
   */
  setPercent(t, e) {
    return this.percent.width = t, this.percent.height = e, this;
  }
  /**
   * Updating the activity status of the element.<br>
   * Обновление статуса активности элемента.
   */
  update() {
    this.is() ? _.add(this) : _.remove(this);
  }
  /**
   * Recalculate scaling for all active elements.<br>
   * Пересчитать масштабирование для всех активных элементов.
   */
  reset() {
    this.is() && (_.is(this) ? _.reset() : _.add(this));
  }
  /**
   * Removal of an element from the scaling list.<br>
   * Удаление элемента из списка для масштабирования.
   */
  remove() {
    this.is() && _.remove(this);
  }
  /**
   * Updating the visibility and activity status of the element.<br>
   * Обновление статуса видимости и активности элемента.
   */
  make() {
    var t, e;
    if (this.beyond = !1, this.visible = !1, this.is())
      if ((t = this.props) != null && t.adaptiveAlways)
        this.beyond = !0, this.visible = !0;
      else {
        const s = (e = this.element.value) == null ? void 0 : e.getBoundingClientRect();
        s && (this.beyond = !(s.bottom < 0 - jt || s.top > window.innerHeight + jt), this.visible = !(s.bottom < 0 || s.top > window.innerHeight));
      }
    return this;
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  makeCallback() {
    var t;
    return (t = this.callback) == null || t.call(this), this;
  }
}
class ws {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param data image data /<br>данные изображения
   * @param coordinator object for working with coordinates /<br>объект для работы с координатами
   * @param adaptive an object for working with adapted scaling /<br>объект для работы с адаптированным масштабированием
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i) {
    this.props = t, this.data = e, this.coordinator = s, this.adaptive = i;
  }
  /**
   * Returns values for the background property.<br>
   * Возвращает значения для свойства background.
   */
  get() {
    if (this.coordinator.is())
      return this.getSizeByCoordinator();
    if (this.adaptive.is()) {
      const t = this.adaptive.getBackgroundSize();
      if (t)
        return t.toString();
    }
    return this.getSizeForItem();
  }
  /**
   * Returns values for the background-image property.<br>
   * Возвращает значения для свойства background-image.
   */
  getImage() {
    const t = this.data.getImage();
    switch (typeof t) {
      case "string":
        return `url("${t}")`;
      case "object":
        return `url("${t.src}")`;
      default:
        return null;
    }
  }
  /**
   * Returns the value for the background-size property.<br>
   * Возвращает значение для свойства background-size.
   * @param width width value /<br>значение ширины
   * @param height height value /<br>значение высоты
   */
  getSize(t, e) {
    const s = this.data.getImage();
    return typeof s == "object" ? s.height < s.width ? `auto ${e}` : `${t} auto` : null;
  }
  /**
   * Returns sizes according to the coordinator property.<br>
   * Возвращает размеры по свойству координатора.
   */
  getSizeByCoordinator() {
    const {
      width: t,
      height: e
    } = this.coordinator.getSize();
    return this.getSize(t, e);
  }
  /**
   * Returns the scaling sizes.<br>
   * Возвращает размеры масштабирования.
   */
  getSizeForItem() {
    var e;
    const t = (e = this.props) == null ? void 0 : e.size;
    return t && k(t) ? t.toString().match(/%$/) ? this.getSize(t, t) : t.toString() : null;
  }
}
let Ss = class extends $t {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param callback callback function on successful image update or data recalculation /<br>
   * функция обратного вызова при успешном обновлении картинки или при перерасчете данных
   */
  constructor(e, s, i) {
    super(e, i);
    a(this, "type");
    a(this, "data");
    a(this, "coordinator");
    a(this, "position");
    a(this, "adaptiveItem");
    a(this, "background");
    this.props = e, this.callback = i, this.type = new gs(e), this.data = new fs(e, this.type, () => {
      this.adaptiveItem.is() ? this.adaptiveItem.reset() : this.make(!0);
    }), this.coordinator = new ys(e), this.position = new bs(e, this.coordinator), this.adaptiveItem = new ks(
      e,
      this.data,
      s,
      () => this.make(!0)
    ), this.background = new ws(
      e,
      this.data,
      this.coordinator,
      this.adaptiveItem
    );
  }
  /**
   * Destructor
   */
  destructor() {
    this.adaptiveItem.remove();
  }
  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  getType() {
    return this.type.get();
  }
  /**
   * Getting the value of the picture.<br>
   * Получение значения картины.
   */
  getValue() {
    var e;
    return (e = this.props) == null ? void 0 : e.value;
  }
  /**
   * A method for obtaining an object with values for an image.<br>
   * Метод для получения объекта с значениями для изображения.
   */
  getData() {
    return this.data;
  }
  /**
   * Values for the text. Text is used for the type of icon that works as a background.<br>
   * Значения для текста. Текст используется для типа иконки, который работает как фон.
   */
  getText() {
    const e = this.type.get(), s = this.getValue();
    if (e && G(s) && [
      "filled",
      "outlined",
      "round",
      "sharp",
      "two-tone",
      "material"
    ].indexOf(e) !== -1)
      return s.replace(/^(filled|outlined|round|sharp|two-tone)-/, "");
  }
  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses() {
    const e = this.type.get(), s = {
      [`??--type--${e}`]: e !== void 0,
      notranslate: !0
    };
    switch (e) {
      case "filled":
      case "outlined":
      case "round":
      case "sharp":
      case "two-tone":
      case "material":
        s["material-icons"] = !0;
        break;
    }
    return s;
  }
  /**
   * Values for the style.<br>
   * Значения для стиля.
   */
  getStyles() {
    var e;
    return ((e = this.event) == null ? void 0 : e.styles) || {};
  }
  /**
   * Updates the adapted elements.<br>
   * Обновляет адаптированные элементы.
   */
  updateAdaptive() {
    return this.adaptiveItem.update(), this.make(!0), this;
  }
  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  async initEvent() {
    this.isChanged("image", ["value", "url"]) && (this.event.image = this.getData().getImage()), this.event.styles = this.initStyles();
  }
  /**
   * Calculates all properties for the style of the element.<br>
   * Вычисляет все свойства для стиля элемента.
   */
  initStyles() {
    var s, i;
    const e = this.getValue();
    if (e)
      switch (this.type.get()) {
        case "file":
        case "image":
          return {
            "background-size": this.background.get(),
            "background-position-x": (s = this.position) == null ? void 0 : s.getX(),
            "background-position-y": (i = this.position) == null ? void 0 : i.getY()
          };
        case "icon":
          return { "background-image": this.background.getImage() };
        case "public":
          return { "mask-image": this.background.getImage() };
        case "color":
          if (G(e))
            return { "background-color": e };
      }
    return {};
  }
};
class Bs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   */
  constructor(t, e) {
    a(this, "item");
    a(this, "type", l(() => this.item.getType()));
    a(this, "data", v());
    a(this, "text", l(() => this.item.getText()));
    a(this, "classes", l(() => this.item.getClasses()));
    a(this, "styles", v());
    this.item = new Ss(
      t,
      e,
      (s) => {
        this.data.value = s.image, this.styles.value = s.styles;
      }
    ), H(() => this.item.data.make(!0)), H(() => this.item.updateAdaptive());
  }
  /**
   * Destructor
   */
  destructor() {
    this.item.destructor();
  }
}
class pt extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "image");
    this.image = new Bs(
      this.props,
      this.element
    ), this.init(), Mt(() => this.image.destructor()), Jt(
      this.image.data,
      (r) => {
        var o;
        return (o = this.emits) == null ? void 0 : o.call(this, "load", {
          type: this.image.type.value,
          image: r
        });
      }
    );
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
      type: this.image.type,
      data: this.image.data,
      text: this.image.text
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    const e = this.setup();
    return {
      type: e.type,
      data: e.data
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        ...this.toClassName(this.image.classes.value)
      }
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {
      ...this.image.styles.value
    };
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    const e = this.setup();
    return p("span", {
      ref: this.element,
      class: e.classes.value.main,
      style: e.styles.value,
      translate: "no"
    }, e.text.value);
  }
}
const Is = {
  adaptiveGroup: "basic"
}, mt = {
  // Values
  value: [String, File],
  coordinator: Array,
  size: String,
  x: [String, Number],
  y: [String, Number],
  // Adaptive
  adaptiveGroup: {
    type: String,
    default: Is.adaptiveGroup
  },
  adaptiveAlways: Boolean,
  objectWidth: [String, Number],
  objectHeight: [String, Number],
  // Options
  url: String,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, xs = {
  ...mt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, oe = /* @__PURE__ */ m({
  name: "M2Image",
  __name: "M2Image",
  props: { ...xs },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-image": !0,
        "m2-image--turn": i.turn,
        "m2-image--disabled": i.disabled,
        "m2-image--hide": i.hide,
        "m2-image--adaptive": i.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new pt(
      "m2.image",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), Ms = /* @__PURE__ */ m({
  name: "M2Icon",
  __name: "M2Icon",
  props: { ...ls },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-icon": !0,
        "m2-icon--turn": i.turn,
        "m2-icon--disabled": i.disabled,
        "m2-icon--hide": i.hide,
        [`m2-icon--animationType--${i.animationType}`]: g(ft.animationType, i.animationType),
        "m2-icon--animationShow": i.animationShow,
        "m2-icon--overlay": i.overlay,
        "m2-icon--dynamic": i.dynamic,
        "m2-icon--start": i.start,
        "m2-icon--end": i.end,
        "m2-icon--high": i.high,
        [`m2-icon--rounded--${i.rounded}`]: g(ft.rounded, i.rounded),
        [`m2-icon--size--${i.size}`]: g(ft.size, i.size)
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new dt(
      "m2.icon",
      i,
      {
        emits: s,
        components: {
          image: oe
        },
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
});
class Ts {
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
  constructor(t, e, s = "is-item", i = "is-end", r = "x", o = "y") {
    this.props = t, this.element = e, this.classItem = s, this.classEnd = i, this.styleX = r, this.styleY = o;
  }
  /**
   * Event when clicking on an element.<br>
   * Событие при клике на элемент.
   * @param event event object /<br>объект события
   */
  onClick(t) {
    this.addItem(t.offsetX, t.offsetY);
  }
  /**
   * Change the item.<br>
   * Изменить элемент.
   * @param element element /<br>элемент
   */
  setElement(t) {
    return this.element = t, this;
  }
  /**
   * Adding a new light element.<br>
   * Добавление нового элемента свечения.
   * @param x x-coordinate /<br>x-координата
   * @param y y-coordinate /<br>y-координата
   */
  addItem(t, e) {
    var s;
    this.element && !((s = this.props) != null && s.disabled) && ct(this.element, "span", (i) => {
      i.onanimationend = () => i.classList.add(this.classEnd), i.ontransitionend = () => {
        var r;
        return (r = i.parentElement) == null ? void 0 : r.removeChild(i);
      }, i.style.setProperty(this.styleX, `${t}px`), i.style.setProperty(this.styleY, `${e}px`), i.classList.add(this.classItem);
    });
  }
}
class _s {
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
  constructor(t, e, s = "is-item", i = "is-end", r = "x", o = "y") {
    a(this, "ripple");
    a(this, "onClick");
    this.ripple = new Ts(
      t,
      e.value,
      s,
      i,
      r,
      o
    ), Jt(e, (h) => this.ripple.setElement(h)), this.onClick = (h) => this.ripple.onClick(h);
  }
}
class he extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "ripple");
    this.ripple = new _s(
      s,
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
    const e = this.setup();
    return p("div", {
      ref: this.element,
      class: e.classes.value.main,
      onMousedown: e.onClick
    });
  }
}
const ce = {
  disabled: Boolean
}, Es = {
  ...ce
}, $s = /* @__PURE__ */ m({
  name: "M2Ripple",
  __name: "M2Ripple",
  props: { ...Es },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new he(
      "m2.ripple",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), Lt = {
  label: [String, Number]
}, le = function(n, t, e = "is-label") {
  const s = l(
    () => !!(n != null && n.label || t && "default" in t)
  );
  return {
    isLabel: s,
    renderLabel() {
      var r;
      const i = [];
      if (s.value) {
        const o = [];
        n != null && n.label && o.push(n.label), t && (t != null && t.default) && o.push((r = t.default) == null ? void 0 : r.call(t, {})), o.length > 0 && i.push(ne(
          "span",
          { class: e || "label" },
          o
        ));
      }
      return i;
    }
  };
}, Ls = {
  // Values
  icon: [String, Object],
  // Status
  selected: Boolean,
  iconTurn: Boolean,
  iconHide: Boolean
}, ue = {
  ...Ls,
  iconTrailing: [String, Object]
}, As = function(n, t, e = "is-icon", s = "is-icon-trailing") {
  const i = l(() => Q(
    n == null ? void 0 : n.icon,
    {
      class: e,
      active: n == null ? void 0 : n.selected,
      turn: !(n != null && n.iconTrailing) && (n == null ? void 0 : n.iconTurn),
      hide: n == null ? void 0 : n.iconHide,
      animationType: "type2",
      start: !0,
      "data-event-type": "icon"
    },
    "icon"
  )), r = "iconTrailing" in n ? l(() => Q(
    n.iconTrailing,
    {
      class: s,
      turn: n == null ? void 0 : n.iconTurn,
      end: !0,
      high: !0,
      "data-event-type": "icon-trailing"
    },
    "icon"
  )) : void 0, o = l(() => !!(n != null && n.icon || n != null && n.iconTrailing));
  return {
    iconBind: i,
    trailingBind: r,
    isIcon: o,
    renderIcon() {
      const h = [];
      return t && (n != null && n.icon && t.renderAdd(
        h,
        "icon",
        i.value,
        void 0,
        "icon"
      ), r && (n != null && n.iconTrailing) && t.renderAdd(
        h,
        "icon",
        r.value,
        void 0,
        "iconTrailing"
      )), h;
    }
  };
}, de = {
  progress: [Boolean, Object]
}, Os = function(n, t, e = "is-progress", s) {
  const i = l(() => Q(
    n.loading,
    {
      class: e,
      ...s
    },
    "visible"
  ));
  return {
    progressBind: i,
    renderProgress() {
      const r = [];
      return t && (n != null && n.loading) && t.renderAdd(
        r,
        "progress",
        i.value
      ), r;
    }
  };
}, At = {
  progress: [Object, Boolean],
  readonly: Boolean,
  disabled: Boolean
}, ge = function(n) {
  const t = () => !!(n != null && n.disabled);
  return {
    disabledBind: l(() => t() || void 0),
    isEnabled: l(
      () => !(n != null && n.disabled) && !(n != null && n.readonly) && !(n != null && n.loading)
    ),
    isReadonly: l(() => !!(n != null && n.readonly)),
    isDisabled: l(() => t()),
    isProgress: l(() => !!(n != null && n.loading))
  };
}, pe = {
  to: String,
  value: [String, Number, Object],
  detail: [Object]
}, Ds = function(n, t, e) {
  const s = (r) => {
    var h, c, u;
    return {
      type: ((u = (c = (h = r.target) == null ? void 0 : h.closest("[data-event-type]")) == null ? void 0 : c.dataset) == null ? void 0 : u.eventType) ?? "click",
      value: n == null ? void 0 : n.value,
      detail: n == null ? void 0 : n.detail
    };
  }, i = () => !1;
  return {
    onClick(r) {
      t.isEnabled.value && !i() ? e == null || e("click", r, s(r)) : re(r);
    }
  };
};
class Ot extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "icons");
    this.icons = As(
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
    const e = ge(this.props);
    return {
      ...le(
        this.props,
        this.slots,
        this.getSubClass("label")
      ),
      ...this.icons,
      ...Os(
        this.props,
        this.components,
        this.getSubClass("loading"),
        {
          circular: !0,
          inverse: !0
        }
      ),
      ...e,
      ...Ds(
        this.props,
        e,
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
    var i;
    const e = this.setup(), s = [
      ...e.renderProgress(),
      ...e.renderLabel(),
      ...e.renderIcon()
    ];
    return e.isEnabled.value && this.components.renderAdd(s, "ripple"), p(((i = this.props) == null ? void 0 : i.tag) || "button", {
      ...this.getAttrs(),
      ref: this.element,
      class: e.classes.value.main,
      style: e.styles.value,
      disabled: e.disabledBind.value,
      onClick: e.onClick
    }, s);
  }
}
const et = {
  tag: "button"
}, me = {
  ...Lt,
  ...ue,
  ...de,
  ...At,
  ...pe,
  // Options
  tag: {
    type: String,
    default: et == null ? void 0 : et.tag
  },
  // :prop [!] System label / Системная метка
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean
}, bt = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["primary", "secondary", "tertiary", "red", "green", "error", "neutral", "neutralVariant"]
  // :values [!] System label / Системная метка
}, U = {
  ...et,
  // :default [!] System label / Системная метка
  height: "md",
  filled: !0
}, Fs = {
  ...me,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  height: {
    type: String,
    default: U == null ? void 0 : U.height
  },
  filled: {
    type: Boolean,
    default: U == null ? void 0 : U.filled
  },
  outlined: Boolean,
  text: Boolean,
  elevated: Boolean,
  tonal: Boolean,
  palette: String
}, Vs = {
  ...mt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, Dt = /* @__PURE__ */ m({
  name: "M3Image",
  __name: "M3Image",
  props: { ...Vs },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-image": !0,
        "m3-image--turn": i.turn,
        "m3-image--disabled": i.disabled,
        "m3-image--hide": i.hide,
        "m3-image--adaptive": i.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new pt(
      "m3.image",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), vt = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "xl", "2xl", "full"],
  size: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, Ct = {
  ...q,
  // :default [!] System label / Системная метка
  animationType: "type1"
}, Ns = {
  ...gt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: Ct == null ? void 0 : Ct.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: String,
  size: String
}, Ft = /* @__PURE__ */ m({
  name: "M3Icon",
  __name: "M3Icon",
  props: { ...Ns },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-icon": !0,
        "m3-icon--turn": i.turn,
        "m3-icon--disabled": i.disabled,
        "m3-icon--hide": i.hide,
        [`m3-icon--animationType--${i.animationType}`]: g(vt.animationType, i.animationType),
        "m3-icon--animationShow": i.animationShow,
        "m3-icon--overlay": i.overlay,
        "m3-icon--dynamic": i.dynamic,
        "m3-icon--start": i.start,
        "m3-icon--end": i.end,
        "m3-icon--high": i.high,
        [`m3-icon--rounded--${i.rounded}`]: g(vt.rounded, i.rounded),
        [`m3-icon--size--${i.size}`]: g(vt.size, i.size)
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new dt(
      "m3.icon",
      i,
      {
        emits: s,
        components: {
          image: Dt
        },
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
});
class Rs extends $t {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, s) {
    super(e, s, [
      "value",
      "visible"
    ]);
    a(this, "timeout");
    a(this, "timeoutReject");
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
    return Y(((e = this.props) == null ? void 0 : e.value) ?? 0);
  }
  /**
   * Returns values in percentages.<br>
   * Возвращает значения в процентах.
   */
  getValueInPercent() {
    var e;
    if (this.isValue()) {
      const s = this.getValue(), i = 100 / this.getMax() * s;
      return (e = this.props) != null && e.circular ? i.toString() : `${100 - i}%`;
    }
    return null;
  }
  /**
   * Returns the maximum allowable value.<br>
   * Возвращает максимально допустимое значение.
   */
  getMax() {
    var e;
    return Y(((e = this.props) == null ? void 0 : e.max) ?? 100);
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
    return new Promise((e, s) => {
      var o, h, c;
      const i = (o = this.props) == null ? void 0 : o.visible, r = Y(((h = this.props) == null ? void 0 : h.delay) ?? 0);
      clearTimeout(this.timeout), this.isValue() ? e([!1, !1]) : !!((c = this.event) != null && c.visible) !== i && (i && r ? (this.timeout = setTimeout(() => {
        clearTimeout(this.timeoutReject), e(this.initVisible());
      }, r), this.timeoutReject = setTimeout(s, r + 1e3)) : e(this.initVisible()));
    });
  }
  /**
   * Updates dependent data when the visible property changes.<br>
   * Обновляет зависимые данные при изменении свойства visible.
   */
  initVisible() {
    var s;
    const e = (s = this.props) == null ? void 0 : s.visible;
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
class Hs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    a(this, "item");
    a(this, "tag", l(() => this.item.getTag()));
    a(this, "valueInPercent", l(() => this.item.getValueInPercent()));
    a(this, "hide", v(!1));
    a(this, "visible", v(!1));
    a(this, "classes", v({}));
    a(this, "styles", l(() => this.item.getStyles()));
    this.props = t, this.item = new Rs(
      t,
      (e) => {
        this.hide.value = e.hide, this.visible.value = e.visible, this.classes.value = e.classes;
      }
    ), H(() => this.item.make());
  }
  /**
   * Monitors the animation event for hiding the element.<br>
   * Следит за событием анимации для скрытия элемента.
   * @param event A string containing the value of the animation-name that generated the animation /<br>
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  onAnimation(t) {
    this.item.onAnimation(t);
  }
}
class fe extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "item");
    this.item = new Hs(s), this.init();
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
    var i, r;
    const e = this.setup(), s = [];
    return (i = this.props) != null && i.circular && (((r = this.props) == null ? void 0 : r.indeterminate) === "type3" && s.push(
      p("circle", {
        class: e.classes.value.circleSub,
        cx: "24",
        cy: "24",
        r: "20"
      })
    ), s.push(
      p("circle", {
        class: e.classes.value.circle,
        cx: "24",
        cy: "24",
        r: "20"
      })
    )), p(e.tag.value, {
      ref: this.element,
      class: e.classes.value.main,
      style: e.styles.value,
      viewBox: "0 0 48 48",
      onAnimationend: e.onAnimation
    }, s);
  }
}
const C = {
  max: 100,
  delay: 360,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
}, ye = {
  // Values
  value: [Number, String],
  max: {
    type: [Number, String],
    default: C == null ? void 0 : C.max
  },
  // Status
  visible: Boolean,
  // Options
  delay: {
    type: [Number, String],
    default: C == null ? void 0 : C.delay
  },
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: C == null ? void 0 : C.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: C == null ? void 0 : C.indeterminate
  },
  position: {
    type: String,
    default: C == null ? void 0 : C.position
  },
  dense: Boolean,
  inverse: Boolean
}, zt = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, O = {
  ...C,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
}, Ps = {
  ...ye,
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: O == null ? void 0 : O.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: O == null ? void 0 : O.indeterminate
  },
  position: {
    type: String,
    default: O == null ? void 0 : O.position
  },
  dense: Boolean,
  inverse: Boolean
}, Vt = /* @__PURE__ */ m({
  name: "M3Progress",
  __name: "M3Progress",
  props: { ...Ps },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-progress": !0,
        "m3-progress--linear": i.linear && !i.circular,
        "m3-progress--circular": i.circular,
        [`m3-progress--indeterminate--${i.indeterminate}`]: g(zt.indeterminate, i.indeterminate),
        [`m3-progress--position--${i.position}`]: g(zt.position, i.position),
        "m3-progress--dense": i.dense,
        "m3-progress--inverse": i.inverse
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new fe(
      "m3.progress",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), js = /* @__PURE__ */ m({
  name: "M3Button",
  __name: "M3Button",
  props: { ...Fs },
  emits: ["click"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-button": !0,
        "m3-button--focus": i.focus,
        "m3-button--disabled": i.disabled,
        "m3-button--selected": i.selected,
        "m3-button--loading": i.loading,
        "m3-button--readonly": i.readonly,
        [`m3-button--adaptive--${i.adaptive}`]: g(bt.adaptive, i.adaptive),
        [`m3-button--height--${i.height}`]: g(bt.height, i.height),
        "m3-button--filled": i.filled && !i.outlined && !i.text && !i.elevated && !i.tonal,
        "m3-button--outlined": i.outlined,
        "m3-button--text": i.text,
        "m3-button--elevated": i.elevated,
        "m3-button--tonal": i.tonal,
        [`m3-palette--${i.palette}`]: g(bt.palette, i.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Ot(
      "m3.button",
      i,
      {
        emits: s,
        components: {
          icon: Ft,
          progress: Vt
        },
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
});
class zs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param type object for working with input type /<br>объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions /<br>
   * объект для работы с проверкой по регулярным выражениям
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i) {
    this.props = t, this.element = e, this.type = s, this.pattern = i;
  }
  /**
   * Returns the input element.<br>
   * Возвращает элемент ввода.
   */
  get() {
    const t = this.element.value;
    if (t)
      return "input" in t ? t.input : t;
  }
  /**
   * Returns the name of the input element.<br>
   * Возвращает название элемента ввода.
   */
  getName() {
    var t;
    return ((t = this.get()) == null ? void 0 : t.name) ?? "";
  }
  /**
   * Returns data for verification.<br>
   * Возвращает данные для проверки.
   */
  getPattern() {
    var t, e, s, i, r, o, h, c, u, d;
    return {
      name: (t = this.props) == null ? void 0 : t.name,
      type: (e = this.type) == null ? void 0 : e.get(),
      required: (s = this.props) == null ? void 0 : s.required,
      pattern: (i = this.pattern) == null ? void 0 : i.get(),
      step: (r = this.props) == null ? void 0 : r.step,
      min: (o = this.props) == null ? void 0 : o.min,
      max: (h = this.props) == null ? void 0 : h.max,
      minlength: (c = this.props) == null ? void 0 : c.minlength,
      maxlength: (u = this.props) == null ? void 0 : u.maxlength,
      ...((d = this.props) == null ? void 0 : d.input) ?? {}
    };
  }
  /**
   * Search for an element by its name inside a group or by selector.<br>
   * Поиск элемента по его названию внутри группы или по селектору.
   * @param nameSelectors element name or selector /<br>название элемента или селектор
   */
  findByName(t) {
    var i;
    if (t instanceof Element)
      return t;
    const e = (i = this.get()) == null ? void 0 : i.form;
    if (e) {
      const r = e.querySelector(`[name="${t}"]`);
      if (r)
        return r;
    }
    const s = document.querySelector(t);
    if (s)
      return s;
  }
  /**
   * Clear all values to the original ones.<br>
   * Очисти все значения до оригинальных.
   */
  clear() {
    var e;
    const t = this.element.value;
    return t && "clear" in t && ((e = t.clear) == null || e.call(t)), this;
  }
}
class Ws extends zs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    super(t, e);
  }
  /**
   * Returns data for verification.<br>
   * Возвращает данные для проверки.
   */
  getPattern() {
    var t, e, s;
    return {
      name: (t = this.props) == null ? void 0 : t.name,
      type: "checkbox",
      required: (e = this.props) == null ? void 0 : e.required,
      ...((s = this.props) == null ? void 0 : s.input) ?? {}
    };
  }
}
class Ks {
  constructor() {
    a(this, "change", !1);
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
  set(t) {
    return this.change = t, this;
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
class Ys {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i) {
    a(this, "value");
    a(this, "valueIs", !1);
    this.props = t, this.element = e, this.change = s, this.callback = i, this.value = this.getOriginal();
  }
  /**
   * Checks if there are any values.<br>
   * Проверяет, есть ли значения.
   */
  is() {
    var t;
    return this.valueIs || this.getBoolean() || !!((t = this.props) != null && t.placeholder);
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
    var e;
    const t = this.get();
    return W(t) ? t.join(", ") : ht(t) ? JSON.stringify(t) : t === !0 ? "1" : t === !1 ? "0" : k(t) ? ((e = t == null ? void 0 : t.toString) == null ? void 0 : e.call(t)) ?? "" : "";
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
    return k(this.get());
  }
  /**
   * Returns the original value.<br>
   * Возвращает оригинальное значение.
   */
  getOriginal() {
    var t, e;
    return ((t = this.props) == null ? void 0 : t.value) || ((e = this.props) == null ? void 0 : e.modelValue);
  }
  /**
   * Returns the length of the entered value.<br>
   * Возвращает длину введенного значения.
   */
  getLength() {
    const t = this.get();
    return W(t) ? t.length : ht(t) ? Object.keys(t).length : this.getString().length ?? 0;
  }
  /**
   * Changes the value.<br>
   * Изменяет значение.
   * @param value changeable value /<br>изменяемое значение
   */
  set(t) {
    return this.value !== t && (this.value = t, this.change.set(this.getOriginal() !== t), this.callback()), this;
  }
  setByEvent(t) {
    switch (typeof t) {
      case "object":
        t && ("value" in t ? this.set(t.value) : "target" in t && this.setByTarget(t.target), "valueIs" in t && (this.valueIs = t.valueIs));
        break;
      default:
        this.set(t);
        break;
    }
    return this;
  }
  /**
   * Changes the values by the selected element.<br>
   * Изменяет значения по выбранному элементу.
   * @param target selected elements /<br>выбранные элементы
   */
  setByTarget(t) {
    const e = this.isCheckbox(t) ? t.checked : t.value;
    return this.set(e);
  }
  /**
   * Changes the value by the checked property.<br>
   * Изменяет значение по свойству checked.
   * @param event event value /<br>значение события
   */
  setByChecked(t) {
    const e = t.target;
    return this.set(e.checked);
  }
  /**
   * Changes the value for radio type.<br>
   * Изменяет значение для типа radio.
   * @param event event object /<br>объект события
   */
  setByRadio(t) {
    const e = t.target, s = e.checked ? e.value : "";
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
  isCheckbox(t) {
    return t.type === "checkbox";
  }
}
class qs {
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.value = e;
  }
  /**
   * Returns data for the icon.<br>
   * Возвращает данные для иконки.
   */
  get() {
    var e;
    const t = this.getIcon();
    return Q(
      ((e = this.props) == null ? void 0 : e.icon) ?? t,
      {
        value: t
      }
    );
  }
  /**
   * Returns the name of the icon.<br>
   * Возвращает название иконки.
   */
  getIcon() {
    var t, e, s;
    if (this.value.getBoolean())
      return (t = this.props) == null ? void 0 : t.iconCheckbox;
    if ((e = this.props) != null && e.indeterminate)
      return (s = this.props) == null ? void 0 : s.iconIndeterminate;
  }
}
class Gs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
  }
  /**
   * Returning error text.<br>
   * Возвращают текст ошибки.
   * @param state object for obtaining error information /<br>объект для получения информации об ошибке
   */
  get(t) {
    var s;
    const e = (s = this.props) == null ? void 0 : s.validationCode;
    if (e && !t.valid) {
      if (typeof e == "string")
        return e;
      {
        const i = this.getIndex(t);
        if (i && i in e)
          return e[i];
      }
    }
  }
  /**
   * Returns error index.<br>
   * Возвращает индекс ошибки.
   * @param state object for obtaining error information /<br>объект для получения информации об ошибке
   */
  getIndex(t) {
    for (const e in t)
      if (e !== "valid" && t[e])
        return e;
  }
}
function lt(n, t = "check") {
  const e = ct(void 0, "input", Us(n));
  return {
    group: t,
    input: e,
    pattern: n,
    check(s) {
      return e.value = Bt(s), {
        group: t,
        input: e,
        status: e.checkValidity(),
        validationMessage: e.validationMessage,
        validity: e.validity,
        pattern: n,
        value: s
      };
    }
  };
}
function Us(n) {
  if (k(n)) {
    const t = qe(n);
    if (G(n))
      return { pattern: n };
    if (z(t))
      return t;
  }
  return {};
}
class Xs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param value object for working with values /<br>объект для работы со значениями
   * @param match object for working with checks for value matches /<br>объект для работы с проверкой на совпадение значений
   * @param code object for working with error codes /<br>объект для работы с кодами ошибок
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r) {
    a(this, "item");
    a(this, "validation");
    this.props = t, this.element = e, this.value = s, this.code = i, this.match = r, this.item = lt(this.element.getPattern());
  }
  /**
   * Checks if there is an error.<br>
   * Проверяет, есть ли ошибка.
   */
  isError() {
    var t;
    return !((t = this.get()) != null && t.status);
  }
  /**
   * Returns error data.<br>
   * Возвращает данные об ошибке.
   */
  get() {
    var t;
    return this.checkGlobal() ?? this.checkItem() ?? ((t = this.match) == null ? void 0 : t.check()) ?? {
      value: void 0
    };
  }
  /**
   * Returns error string.<br>
   * Возвращает строку об ошибке.
   */
  getMessage() {
    var t;
    return ((t = this.get()) == null ? void 0 : t.validationMessage) ?? "";
  }
  /**
   * Changes the validity data.<br>
   * Изменяет данные о валидности.
   * @param validation values for validity /<br>значения для валидности
   */
  set(t) {
    return "status" in t && "validationMessage" in t && "value" in t ? this.validation = {
      status: t.status,
      required: t == null ? void 0 : t.required,
      input: t == null ? void 0 : t.input,
      validationMessage: t.validationMessage,
      validity: t == null ? void 0 : t.validity,
      pattern: t == null ? void 0 : t.pattern,
      value: t.value
    } : this.validation = void 0, this;
  }
  /**
   * Updating data for input.<br>
   * Обновление данных для input.
   */
  update() {
    return this.item = lt(this.element.getPattern()), this;
  }
  /**
   * Check for global data.<br>
   * Проверка для глобальных данных.
   */
  checkGlobal() {
    var t;
    return (t = this.props) != null && t.validationMessage ? {
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
    const t = this.item.check(this.value.get());
    if (!(t != null && t.status))
      return t;
  }
}
class Js {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param value object for working with values /<br>объект для работы со значениями
   * @param validation object for working with validity /<br>объект для работы с валидностью
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r) {
    this.props = t, this.change = e, this.value = s, this.validation = i, this.callbackEmit = r;
  }
  /**
   * Call of data change event.<br>
   * Вызов события изменения данных.
   * @param event event object /<br>объект события
   */
  onInput(t) {
    this.validation.set(t), this.value.setByEvent(t), this.on(t);
  }
  /**
   * Triggering the change event after losing focus.<br>
   * Вызов события изменения после потери фокуса.
   * @param event event object /<br>объект события
   */
  onChange(t) {
    this.on(t, "change");
  }
  /**
   * Triggering the event for select change.<br>
   * Вызов события для изменения селект.
   * @param event event object /<br>объект события
   */
  onSelect(t) {
    this.value.setByEvent(t), this.on(t).onChange(t);
  }
  /**
   * Triggering the event for changes in the checkbox.<br>
   * Вызов события для изменения в checkbox.
   * @param event event object /<br>объект события
   */
  onChecked(t) {
    this.value.setByChecked(t), this.on(t).onChange(t);
  }
  /**
   * Triggering the event for changes in the radio.<br>
   * Вызов события для изменения в radio.
   * @param event event object /<br>объект события
   */
  onRadio(t) {
    this.value.setByRadio(t), this.on(t).onChange(t);
  }
  /**
   * Triggering the event to delete all values.<br>
   * Вызов события для удаления всех значений.
   * @param event event object /<br>объект события
   */
  onClear(t) {
    this.value.clear(), this.on(t).onChange(t);
  }
  /**
   * Triggering the event.<br>
   * Вызов события.
   * @param event event object /<br>объект события
   * @param type event type /<br>тип события
   */
  on(t, e = "input") {
    if (this.callbackEmit(e, t, {
      ...this.getValidation(e),
      ...this.getData()
    }), e === "input") {
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
  isValue(t) {
    return !!(t && ["input", "change"].indexOf(t) >= 0);
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
  getValidation(t) {
    return this.isValue(t) ? this.validation.get() : {};
  }
}
class Qs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, i) {
    a(this, "element");
    a(this, "change");
    a(this, "value");
    a(this, "icon");
    a(this, "code");
    a(this, "validation");
    a(this, "event");
    this.element = new Ws(
      t,
      e
    ), this.change = new Ks(), this.value = new Ys(
      t,
      this.element,
      this.change,
      s
    ), this.icon = new qs(
      t,
      this.value
    ), this.code = new Gs(t), this.validation = new Xs(
      t,
      this.element,
      this.value,
      this.code
    ), this.event = new Js(
      t,
      this.change,
      this.value,
      this.validation,
      i
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
class Zs {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    a(this, "checkbox");
    a(this, "value", v(!1));
    a(this, "iconBind", v({}));
    a(this, "onInput", (t) => this.checkbox.event.onChecked(t));
    this.checkbox = new Qs(
      t,
      e,
      () => {
        this.update();
      },
      s
    ), H(() => this.checkbox.value.update()), H(() => {
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
const at = {
  // Status
  disabled: Boolean,
  // Values
  counter: [String, Number],
  maxlength: [String, Number],
  // Message
  helperMessage: String,
  validationMessage: String
}, ti = {
  disabled: at.disabled,
  helperMessage: at.helperMessage,
  validationMessage: at.validationMessage
}, ei = function(n, t) {
  const e = l(() => ({
    disabled: n == null ? void 0 : n.disabled,
    counter: n == null ? void 0 : n.counter,
    maxlength: n == null ? void 0 : n.maxlength,
    helperMessage: n == null ? void 0 : n.helperMessage,
    validationMessage: n == null ? void 0 : n.validationMessage
  }));
  return {
    messageBind: e,
    renderFieldMessage() {
      const s = [];
      return t && t.renderAdd(
        s,
        "message",
        e.value
      ), s;
    }
  };
};
class si extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "checkbox");
    /**
     * Rendering of the main input.<br>
     * Рендеринг главного input.
     */
    a(this, "renderInput", () => {
      const e = this.setup();
      return p("input", {
        class: e.classes.value.input,
        name: this.props.name,
        type: "checkbox",
        checked: e.value.value,
        on: this.props.on,
        onInput: e.onInput
      });
    });
    /**
     * Rendering of the hidden input.<br>
     * Рендеринг скрытого input.
     */
    a(this, "renderInputHidden", () => p("input", {
      name: this.props.name,
      type: "hidden",
      value: "0"
    }));
    /**
     * Rendering of the checkbox element.<br>
     * Рендеринг элемента checkbox.
     */
    a(this, "renderChecked", () => {
      const e = this.setup(), s = [
        p("span", {
          class: e.classes.value.itemIcon
        }, [
          this.components.renderOne(
            "icon",
            e.iconBind.value
          )
        ])
      ];
      return this.components.renderAdd(
        s,
        "ripple",
        {
          disabled: e.isDisabled.value
        }
      ), p("span", {
        class: e.classes.value.item
      }, s);
    });
    /**
     * Rendering of the informational text element.<br>
     * Рендеринг элемента информационного текста.
     */
    a(this, "renderInfo", () => {
      const e = this.setup(), s = [
        ...e.renderLabel(),
        ...e.renderFieldMessage()
      ];
      return p("span", {
        class: e.classes.value.info
      }, s);
    });
    this.checkbox = new Zs(
      s,
      this.element,
      (r, o, h) => {
        var c;
        (c = this.emits) == null || c.call(
          this,
          r,
          o,
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
      ...le(
        this.props,
        this.slots,
        this.getSubClass(["info", "label"])
      ),
      ...ge(this.props),
      ...ei(
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
    const e = this.setup(), s = [
      e.renderInputHidden(),
      e.renderInput(),
      e.renderChecked()
    ];
    return e.isLabel.value && s.push(e.renderInfo()), p("label", {
      ...this.getAttrs(),
      ref: this.element,
      class: e.classes.value.main
    }, s);
  }
}
class ii {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
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
    var t;
    return k((t = this.props) == null ? void 0 : t.validationMessage);
  }
  /**
   * Returns text.<br>
   * Возвращает текст.
   */
  get() {
    var t;
    if (this.isValidation())
      return this.props.validationMessage;
    if (k((t = this.props) == null ? void 0 : t.helperMessage))
      return this.props.helperMessage;
  }
}
class ni {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
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
    var t;
    return Y(((t = this.props) == null ? void 0 : t.counter) ?? 0);
  }
  /**
   * Returns the maximum available input number.<br>
   * Возвращает максимально доступное вводимое число.
   */
  getMax() {
    var t;
    return Y(((t = this.props) == null ? void 0 : t.maxlength) ?? 0);
  }
}
class ri {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor(t) {
    a(this, "message");
    a(this, "counter");
    this.props = t, this.message = new ii(t), this.counter = new ni(t);
  }
  /**
   * Checks if there are values for outputting the element.<br>
   * Проверяет, есть ли значения для вывода элемента.
   */
  is() {
    var t;
    return !((t = this.props) != null && t.disabled) && (this.message.is() || this.counter.is());
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
class ai {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor(t) {
    a(this, "item");
    a(this, "is", l(() => this.item.is()));
    a(this, "isMessage", l(() => this.item.message.is()));
    a(this, "isValidation", l(() => this.item.message.isValidation()));
    a(this, "isCounter", l(() => this.item.counter.is()));
    a(this, "isMax", l(() => this.item.counter.isMax()));
    a(this, "message", l(() => this.item.message.get()));
    a(this, "counter", l(() => this.item.counter.get()));
    a(this, "classes", l(() => this.item.classes()));
    this.item = new ri(t);
  }
}
class oi extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "message");
    /**
     * Rendering text.<br>
     * Рендеринг текста.
     */
    a(this, "renderInfo", () => {
      const e = this.setup();
      return p("div", {
        key: "message",
        class: e.classes.value.info,
        innerHTML: e.message.value
      });
    });
    /**
     * Rendering the entered number of characters.<br>
     * Рендеринг введенного количества символов.
     */
    a(this, "renderCounter", () => {
      const e = this.setup();
      return p("div", {
        key: "counter",
        class: e.classes.value.counter,
        innerHTML: e.counter.value
      });
    });
    this.message = new ai(s), this.init();
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
    const e = this.setup(), s = [];
    if (e.isMessage.value && s.push(e.renderInfo()), e.isCounter.value && s.push(e.renderCounter()), e.is.value)
      return p("div", {
        ...this.getAttrs(),
        ref: this.element,
        key: "main",
        class: e.classes.value.main
      }, s);
  }
}
const hi = {
  ...at
}, be = /* @__PURE__ */ m({
  name: "M3FieldMessage",
  __name: "M3FieldMessage",
  props: { ...hi },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-fieldMessage": !0
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new oi(
      "m3.fieldMessage",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), ci = {
  ...ce
}, ve = /* @__PURE__ */ m({
  name: "M3Ripple",
  __name: "M3Ripple",
  props: { ...ci },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new he(
      "m3.ripple",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), Wt = {
  type: "text",
  autocomplete: "off"
}, Ce = {
  ...Lt,
  ...At,
  // Values
  name: String,
  value: String,
  modelValue: String,
  detail: Object,
  // Input
  type: {
    type: String,
    default: Wt.type
  },
  inputmode: String,
  spellcheck: Boolean,
  required: Boolean,
  pattern: String,
  match: [String, Object],
  arrow: Boolean,
  step: [String, Number],
  min: [String, Number],
  max: [String, Number],
  minlength: [String, Number],
  maxlength: [String, Number],
  autofocus: Boolean,
  autocomplete: {
    type: String,
    default: Wt.autocomplete
  },
  input: Object,
  // Messages & Validation
  placeholder: String,
  helperMessage: String,
  validationMessage: String,
  validationCode: [String, Object],
  // On
  on: Object,
  "onUpdate:value": Function,
  "onUpdate:modelValue": Function
}, li = {
  ...Ce
}, ui = {}, kt = {
  ...Ce,
  ...ti,
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
}, Kt = {
  ...ui,
  iconCheckbox: "check",
  iconIndeterminate: "indeterminate"
}, di = {
  ...kt,
  iconCheckbox: {
    type: kt.iconCheckbox,
    default: Kt.iconCheckbox
  },
  iconIndeterminate: {
    type: kt.iconIndeterminate,
    default: Kt.iconIndeterminate
  },
  // :prop [!] System label / Системная метка
  required: Boolean
}, gi = /* @__PURE__ */ m({
  name: "M3Checkbox",
  __name: "M3Checkbox",
  props: { ...di },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-checkbox": !0,
        "m3-checkbox--required": i.required
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new si(
      "m3.checkbox",
      i,
      {
        emits: s,
        components: {
          icon: Dt,
          message: be,
          ripple: ve
        },
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
});
class pi extends Ot {
}
const ot = {
  tag: "span"
}, mi = {
  ...Lt,
  ...ue,
  ...de,
  ...At,
  ...pe,
  // Options
  tag: {
    type: String,
    default: ot == null ? void 0 : ot.tag
  },
  // :prop [!] System label / Системная метка
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean
}, wt = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["primary", "secondary", "tertiary", "red", "green", "error", "neutral", "neutralVariant"]
  // :values [!] System label / Системная метка
}, D = {
  ...ot,
  // :default [!] System label / Системная метка
  height: "md",
  outlined: !0,
  input: !0
}, fi = {
  ...mi,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  height: {
    type: String,
    default: D == null ? void 0 : D.height
  },
  outlined: {
    type: Boolean,
    default: D == null ? void 0 : D.outlined
  },
  elevated: Boolean,
  input: {
    type: Boolean,
    default: D == null ? void 0 : D.input
  },
  assist: Boolean,
  filter: Boolean,
  suggestion: Boolean,
  avatar: Boolean,
  dragged: Boolean,
  palette: String
}, yi = /* @__PURE__ */ m({
  name: "M3Chip",
  __name: "M3Chip",
  props: { ...fi },
  emits: ["click"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-chip": !0,
        "m3-chip--focus": i.focus,
        "m3-chip--disabled": i.disabled,
        "m3-chip--selected": i.selected,
        "m3-chip--loading": i.loading,
        "m3-chip--readonly": i.readonly,
        [`m3-chip--adaptive--${i.adaptive}`]: g(wt.adaptive, i.adaptive),
        [`m3-chip--height--${i.height}`]: g(wt.height, i.height),
        "m3-chip--outlined": i.outlined && !i.elevated,
        "m3-chip--elevated": i.elevated,
        "m3-chip--input": i.input && !i.assist && !i.filter && !i.suggestion,
        "m3-chip--assist": i.assist,
        "m3-chip--filter": i.filter,
        "m3-chip--suggestion": i.suggestion,
        "m3-chip--avatar": i.avatar,
        "m3-chip--dragged": i.dragged,
        [`m3-palette--${i.palette}`]: g(wt.palette, i.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new pi(
      "m3.chip",
      i,
      {
        emits: s,
        components: {
          icon: Ft,
          progress: Vt
        },
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c), null, {
      default: Qt(() => [
        Zt(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
class bi extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, e, s) {
    super(
      t,
      e,
      s
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
    var t;
    return p("div", {
      // ...this.getAttrs(),
      ref: this.element,
      class: (t = this.classes) == null ? void 0 : t.value.main
    });
  }
}
const vi = {
  ...li
}, Ci = /* @__PURE__ */ m({
  name: "M3Input",
  __name: "M3Input",
  props: { ...vi },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // TODO: User state classes / Пользовательские классы состояния
        // :classes-values [!] System label / Системная метка
        "m3-input": !0
        // :classes-values [!] System label / Системная метка
      }
      // TODO: User subclasses / Пользовательские подклассы
    })), o = l(() => ({
      // TODO: User styles / Пользовательские стили
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new bi(
      "m3.input",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
});
class ki {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
  }
  /**
   * Is the mask numeric.<br>
   * Является ли маска числовой.
   */
  isNumber() {
    return this.get() === "number";
  }
  /**
   * Is the input mask a currency value.<br>
   * Является ли маска для ввода валютным значением.
   */
  isCurrency() {
    return this.get() === "currency";
  }
  /**
   * Is the input mask one of the numeric types.<br>
   * Является ли маска для ввода одним из числовых типов.
   */
  isCurrencyOrNumber() {
    return this.isNumber() || this.isCurrency();
  }
  /**
   * Is this a mask for email input.<br>
   * Является ли это маской для ввода email.
   */
  isEmail() {
    return this.get() === "email";
  }
  /**
   * Is the mask one of the types for time input.<br>
   * Является ли маска одним из типов для ввода времени.
   */
  isTime() {
    return [
      "full",
      "datetime",
      "time",
      "hour-minute",
      "hour",
      "minute",
      "second"
    ].indexOf(this.get()) !== -1;
  }
  /**
   * Is the mask one of the types for date input.<br>
   * Является ли маска одним из типов для ввода даты.
   */
  isDate() {
    return this.isTime() || [
      "date",
      "year-month",
      "month",
      "day"
    ].indexOf(this.get()) !== -1;
  }
  /**
   * Returns the type of mask.<br>
   * Возвращает тип маски.
   */
  get() {
    var t;
    return ((t = this.props) == null ? void 0 : t.type) ?? "text";
  }
  /**
   * Returns the type of mask for working with dates.<br>
   * Возвращает тип маски для работы с датами.
   */
  getByDate() {
    return this.isDate() ? this.get() : "date";
  }
}
class wi {
  constructor() {
    a(this, "chars", []);
    a(this, "start", !1);
  }
  /**
   * Checks for records in the buffer.
   * Проверяет наличие записей в буфере.
   */
  is() {
    return this.chars.length > 0;
  }
  /**
   * Gets a list of all records in the buffer.<br>
   * Получает список всех записей в буфере.
   */
  get() {
    return this.chars;
  }
  /**
   * Inserts a new input symbol into the buffer.<br>
   * Вставляет новый символ ввода в буфер.
   * @param key symbol that needs to be added /<br>символ, который необходимо добавить
   */
  add(t) {
    return this.chars.push(t), this;
  }
  /**
   * Starts buffering data if data is being processed.<br>
   * Начинает буферизировать данные, если в обработке идут данные.
   * @param key symbol that needs to be added /<br>символ, который необходимо добавить
   */
  go(t) {
    return this.start ? (this.add(t), !1) : (this.goStart(), !0);
  }
  /**
   * Starts buffering data
   * Начинает буферизировать данные.
   */
  goStart() {
    return this.start = !0, this;
  }
  /**
   * Resets all values to the original.<br>
   * Сбрасывает все значения до исходного.
   */
  reset() {
    return this.resetChars(), this.start = !1, this;
  }
  /**
   * Resets the saved values.<br>
   * Сбрасывает сохраненные значения.
   */
  resetChars() {
    return this.chars = [], this;
  }
}
class Si {
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    a(this, "value", !1);
    this.buffer = t;
  }
  /**
   * Checks for focus on the element.<br>
   * Проверяет наличие фокуса у элемента.
   */
  is() {
    return this.value;
  }
  /**
   * Set the element state to focused.<br>
   * Установить состояние элемента на фокусированное.
   */
  in() {
    this.value = !0, this.buffer.reset();
  }
  /**
   * Reset the focus of the element.<br>
   * Сбросить фокус элемента.
   */
  out() {
    this.value = !1, this.buffer.reset();
  }
}
class Bi {
  constructor() {
    a(this, "value", {});
  }
  /**
   * Checks if the selected group has a value.<br>
   * Проверяет, есть ли значение у выбранной группы.
   * @param groupName group name /<br>название группы
   */
  is(t) {
    return t in this.value;
  }
  /**
   * Returns the filling list by groups.<br>
   * Возвращает список заполнения по группам.
   */
  get() {
    return this.value;
  }
  /**
   * Returns data for caching.<br>
   * Возвращает данные для кеширования.
   */
  getCode() {
    return [
      ...Object.keys(this.value),
      ...Object.values(this.value)
    ];
  }
  /**
   * Returns the fill status by the group name.<br>
   * Возвращает заполненность по названию группы.
   * @param groupName group name /<br>название группы
   */
  getByIndex(t) {
    var e;
    return ((e = this.value) == null ? void 0 : e[t]) ?? 0;
  }
  /**
   * Adding a fill feature to the group for another 1 character.<br>
   * Добавление признака заполнения у группы на еще 1 символ.
   * @param groupName group name /<br>название группы
   */
  add(t) {
    return this.value[t] = this.getByIndex(t) + 1, this;
  }
  /**
   * Decrease by 1 the sign of the filled character in the group.<br>
   * Уменьшение на 1 признака заполненного символа у группы.
   * @param groupName group name /<br>название группы
   */
  pop(t) {
    return this.is(t) ? (--this.value[t] <= 0 && delete this.value[t], !0) : !1;
  }
  /**
   * Reset all records to the initial state.<br>
   * Сброс всех записей до начального состояния.
   */
  reset() {
    return this.value = {}, this;
  }
  /**
   * Process the mask so that the length of the rubber records increases
   * depending on the number of filled records.<br>
   * Обрабатывайте маску так, чтобы длина резиновых записей увеличивалась в
   * зависимости от количества заполненных записей.
   * @param mask selected mask /<br>выбранная маска
   */
  expandMask(t) {
    let e = t;
    return w(this.value, (s, i) => {
      e = e.replace(
        es(i, "g", "([:value]+)"),
        (r) => `${r}${It(i, s)}`
      );
    }), e;
  }
}
class Ii {
  constructor() {
    a(this, "char", "");
  }
  /**
   * Checks if the active group has a transition symbol.<br>
   * Проверяет, есть ли у активной группы символ перехода.
   */
  is() {
    return this.char !== "";
  }
  /**
   * Checks if the current character is a transition character.<br>
   * Проверяет, является ли текущий символ символом перехода.
   * @param char transition symbol /<br>символ перехода
   */
  isChar(t) {
    return this.char === t;
  }
  /**
   * Returns the current transition symbol.<br>
   * Возвращает текущий символ перехода.
   */
  get() {
    return this.char;
  }
  /**
   * Changes the transition symbol.<br>
   * Изменяет символ перехода.
   * @param char transition symbol /<br>символ перехода
   */
  set(t) {
    return this.char = t, this;
  }
  /**
   * Resets the values to the base ones.<br>
   * Сбрасывает значения до базовых.
   */
  reset() {
    return this.set("");
  }
}
class xi {
  constructor() {
    a(this, "length", 0);
  }
  /**
   * Checks if the values are filled in.<br>
   * Проверяет, заполнены ли значения.
   */
  is() {
    return this.get() > 0;
  }
  /**
   * Getting the length of input symbols.<br>
   * Получение длины вводимых символов.
   */
  get() {
    return this.length;
  }
  /**
   * Changing the length of input symbols.<br>
   * Изменение длины вводимых символов.
   * @param length new length /<br>новая длина
   */
  set(t) {
    return this.length = t, this;
  }
}
const Mi = {
  Y: "[0-9]{4}",
  M: {
    type: "number",
    min: "1",
    max: "12"
  },
  D: (n) => {
    var e, s;
    return {
      type: "number",
      min: "1",
      max: new ae(`${((e = n == null ? void 0 : n.Y) == null ? void 0 : e.value) ?? "2000"}-${((s = n == null ? void 0 : n.M) == null ? void 0 : s.value) ?? "01"}-01`).getMaxDay().toString()
    };
  },
  h: {
    type: "number",
    min: "0",
    max: "23"
  },
  m: {
    type: "number",
    min: "0",
    max: "59"
  },
  s: {
    type: "number",
    min: "0",
    max: "59"
  }
};
class Ti {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type object of the mask type class /<br>объект класса тип маски
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.type = e;
  }
  /**
   * Returns a DateTime object.<br>
   * Возвращает объект DateTime.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  getDatetime(t) {
    var e;
    return new ae(t ?? "1987-12-18T10:20:30", this.type.getByDate(), (e = this.props) == null ? void 0 : e.language);
  }
  /**
   * Returns a mask for filling in the date.<br>
   * Возвращает маску для заполнения даты.
   */
  getMask() {
    return this.getDatetime().setHour24(!0).locale(void 0, "2-digit").replace("1987", "YYYY").replace("12", "MM").replace("18", "DD").replace("10", "hh").replace("20", "mm").replace("30", "ss").split("");
  }
  /**
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  getValue(t) {
    return this.getDatetime(t).locale(void 0, "2-digit");
  }
  /**
   * Returns the standardized date value.<br>
   * Возвращает стандартизированное значение даты.
   * @param date an object with a filled date, divided into groups of characters /<br>
   * объект с заполненной датой, разделенный на группы символов
   */
  getValueStandard(t) {
    var s, i, r, o, h, c;
    const e = `${((s = t == null ? void 0 : t.Y) == null ? void 0 : s.value) || "2000"}-${((i = t == null ? void 0 : t.M) == null ? void 0 : i.value) || "01"}-${((r = t == null ? void 0 : t.D) == null ? void 0 : r.value) || "01"}T${((o = t == null ? void 0 : t.h) == null ? void 0 : o.value) || "00"}:${((h = t == null ? void 0 : t.m) == null ? void 0 : h.value) || "00"}:${((c = t == null ? void 0 : t.s) == null ? void 0 : c.value) || "00"}`;
    return isNaN(Date.parse(e)) ? "" : this.getDatetime(e).standard(!1);
  }
  /**
   * Returns a validation template for the date.<br>
   * Возвращает шаблон проверки для даты.
   */
  getPattern() {
    return Mi;
  }
  /**
   * Returns a list of symbols for output by group name.<br>
   * Возвращает список символов для вывода по названию группы.
   * @param groupName group name /<br>название группы
   */
  getView(t) {
    var e;
    return (e = this.getViewList()) == null ? void 0 : e[t];
  }
  /**
   * Returns a list of symbols for output by group.<br>
   * Возвращает список символов для вывода по группе.
   */
  getViewList() {
    return {
      Y: "y",
      M: "m",
      D: "d",
      h: "h",
      m: "m",
      s: "s"
    };
  }
}
class _i {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param rubberItem
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    this.props = t, this.type = e, this.rubberItem = s;
  }
  /**
   * Checks if there is a group for the remainder.<br>
   * Проверяет, есть ли группа для остатка.
   */
  isFractionRubber() {
    return this.props.fraction === !0;
  }
  /**
   * Gets an object for working with number formatting.<br>
   * Получает объект для работы с форматированием числа.
   */
  getIntl() {
    var t;
    return new Ge((t = this.props) == null ? void 0 : t.language);
  }
  /**
   * Getting the number of digits in the remainder.<br>
   * Получение количества чисел в остатке.
   */
  getFraction() {
    var e;
    if (this.type.isCurrency())
      return 2;
    const t = (e = this.props) == null ? void 0 : e.fraction;
    return typeof t == "number" ? t : typeof t == "string" && t.match(/[0-9]+/) ? Number(t) : this.rubberItem.is("f") ? this.rubberItem.getByIndex("f") + 1 : t === !0 ? 1 : 0;
  }
  /**
   * Returns masks for a number or price.<br>
   * Возвращает маски для числа или цены.
   */
  getMask() {
    return (this.type.isCurrency() ? this.getCurrency() : this.getNumber()).replace(/9/ig, "n").replace(/3/ig, "f").split("");
  }
  /**
   * Returns the settings of special characters for input.<br>
   * Возвращает настройки специальных символов для ввода.
   */
  getSpecial() {
    return {
      n: {},
      f: {
        defaultValue: "0"
      }
    };
  }
  /**
   * Getting instructions for forming a rubber mask.<br>
   * Получение инструкции для формирования резиновой маски.
   */
  getRubber() {
    return {
      n: {
        rubber: !0,
        transitionChar: this.getDecimal(),
        maxLength: 10
      },
      f: {
        rubber: this.isFractionRubber(),
        maxLength: 4
      }
    };
  }
  /**
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param value a string with a filled date /<br>строка с заполненной датой
   */
  getValueStandard(t) {
    var e, s;
    return `${((e = t == null ? void 0 : t.n) == null ? void 0 : e.value) || "0"}.${((s = t == null ? void 0 : t.f) == null ? void 0 : s.value) || "0"}`;
  }
  /**
   * Returns the data as a formatted number.<br>
   * Возвращает данные в виде отформатированного числа.
   */
  getNumber() {
    return this.getIntl().number(this.getNumberForString(), { maximumFractionDigits: 9 });
  }
  /**
   * Returns the data as a formatted price with a currency symbol.<br>
   * Возвращает данные в виде отформатированной цены с символом валюты.
   */
  getCurrency() {
    return this.getIntl().currency(this.getNumberForString());
  }
  /**
   * Returns a list of delimiter characters for transitioning to the drop group.<br>
   * Возвращает список символов-разделителей для перехода в группу дроп.
   */
  getDecimal() {
    return [this.getIntl().decimal(), "."];
  }
  /**
   * Returns a list of symbols for output by group name.<br>
   * Возвращает список символов для вывода по названию группы.
   */
  getView() {
    return "0";
  }
  /**
   * Returns a string with values for obtaining a formatted value.<br>
   * Возвращает строку со значениями для получения отформатированного значения.
   */
  getNumberForString() {
    var r;
    const t = this.getFraction(), e = It("9", this.rubberItem.getByIndex("n") + 1), s = t ? `.${It("3", t)}` : "", i = this.type.isCurrency() && ((r = this.props) != null && r.currency) ? ` ${this.props.currency}` : "";
    return `${e}${s}${i}`;
  }
}
class Ei extends P {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param format
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    super(() => this.initValue()), this.props = t, this.type = e, this.format = s;
  }
  /**
   * Checks if the character is special.<br>
   * Проверяет, является ли символ специальным.
   * @param char symbol for checking /<br>символ для проверки
   */
  isSpecial(t) {
    return this.get().indexOf(t) !== -1;
  }
  /**
   * Returns the transition symbol for the selected group.<br>
   * Проверяет, является ли символ перехода для выбранной группы.
   * @param groupName group name /<br>название группы
   * @param char symbol for checking /<br>символ для проверки
   */
  isTransitionChar(t, e) {
    const s = this.getTransitionChar(t);
    return s ? se(e, s) : !1;
  }
  /**
   * Checks if the special character is only 1.<br>
   * Проверяет, является ли специальный символ только 1.
   */
  isString() {
    return this.get().length <= 1;
  }
  /**
   * Checks if there are default values.<br>
   * Проверяет, есть ли значения по умолчанию.
   * @param groupName group name /<br>название группы
   */
  isDefault(t) {
    return !!this.getDefault(t);
  }
  /**
   * Returns a list of special symbols<br>.
   * Возвращает список специальных символов.
   */
  get() {
    var t, e;
    return this.getCache([
      (t = this.props) == null ? void 0 : t.type,
      (e = this.props) == null ? void 0 : e.special
    ]);
  }
  /**
   * Returns the first special symbol to determine the entry point.<br>
   * Возвращает первый специальный символ для определения места входа.
   */
  getFirst() {
    var t;
    return ((t = this.get()) == null ? void 0 : t[0]) ?? "*";
  }
  /**
   * Returns the default values.<br>
   * Возвращает значения по умолчанию.
   * @param groupName group name /<br>название группы
   */
  getDefault(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.defaultValue;
  }
  /**
   * Returns the transition symbol for the selected group.<br>
   * Возвращает символ перехода для выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getTransitionChar(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.transitionChar;
  }
  /**
   * Returns a regular expression for checking the incoming character by groups.<br>
   * Возвращает регулярное выражение для проверки входящего символа по группам.
   * @param groupName group name /<br>название группы
   */
  getMatch(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.match;
  }
  /**
   * Returns data for checking the selected group.<br>
   * Возвращает данные для проверки выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getPattern(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.pattern;
  }
  /**
   * Возвращает данные, по который будет отображать на экране.
   * @param groupName group name /<br>название группы
   */
  getView(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.view;
  }
  /**
   * Returns an array of all groups that have special symbols.<br>
   * Возвращает массив всех групп, у которых есть специальные символы.
   */
  getRubberList() {
    const t = {}, e = this.getSpecial();
    return z(e) && w(e, (s, i) => {
      s != null && s.rubber && (t[i] = s);
    }), t;
  }
  /**
   * Getting a special symbol from props.<br>
   * Получение специального символа из props.
   */
  getSpecial() {
    var t;
    return this.type.isCurrencyOrNumber() ? this.format.getSpecial() : ((t = this.props) == null ? void 0 : t.special) ?? "*";
  }
  /**
   * Getting data about a special symbol by group.<br>
   * Получение данных о специальном символе по группе.
   * @param groupName group name /<br>название группы
   */
  getSpecialItem(t) {
    const e = this.getSpecial();
    if (z(e) && t in e)
      return e[t];
  }
  /**
   * Processes all data and returns an array with a list of special symbols.<br>
   * Обрабатывает все данные и возвращает массив со списком специальных символов.
   */
  initValue() {
    if (this.type.isCurrencyOrNumber())
      return ["n", "f"];
    if (this.type.isTime())
      return ["Y", "M", "D", "h", "m", "s"];
    if (this.type.isDate())
      return ["Y", "M", "D"];
    const t = this.getSpecial();
    return W(t) ? t : ht(t) ? Object.keys(t) : [t];
  }
}
const Yt = /[0-9]/;
class $i {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param special
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.special = e;
  }
  /**
   * Checks if the symbol fits.<br>
   * Проверяет, подходит ли символ.
   * @param char symbol for checking /<br>символ для проверки
   * @param groupName group for checking /<br>группа для проверки
   */
  is(t, e) {
    const s = this.get(e);
    return s instanceof RegExp ? !!t.match(s) : G(s) ? !!t.match(new RegExp(s)) : !!t.match(Yt);
  }
  /**
   * Returns the value of the regular expression for checking.<br>
   * Возвращает значение регулярного выражения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  get(t) {
    var e;
    return (t && this.special.getMatch(t)) ?? ((e = this.props) == null ? void 0 : e.match) ?? Yt;
  }
  /**
   * Returns only the characters that can be entered from the string.<br>
   * Возвращает только символы, доступные для ввода из строки.
   * @param text text for checking /<br>текст для проверки
   */
  filter(t) {
    const e = this.special.get();
    return t.split("").filter((s) => e.find((i) => this.is(s, i)));
  }
}
class Li {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param special
   */
  constructor(t, e, s, i) {
    a(this, "inputs");
    this.props = t, this.type = e, this.date = s, this.special = i, this.inputs = new P(() => this.initInput());
  }
  /**
   * Checks if there is a global check of input data.<br>
   * Проверяет, есть ли глобальная проверка вводимых данных.
   */
  isCheck() {
    var t;
    return !!((t = this.props) != null && t.check);
  }
  /**
   * Returns data for verification by the group name.<br>
   * Возвращает данные для проверки по названию группы.
   * @param groupName group for checking /<br>группа для проверки
   */
  get(t) {
    var e;
    return t === "check" ? this.getCheck() : (e = this.getList()) == null ? void 0 : e[t];
  }
  /**
   * Returns a list of all available properties by groups.<br>
   * Возвращает список всех доступных свойств по группам.
   */
  getList() {
    const t = this.getByType();
    for (const e in t) {
      const s = this.getPattern(e);
      z(s) && z(t[e]) && Object.assign(t[e], s);
    }
    return t;
  }
  /**
   * Returns values for verification.<br>
   * Возвращает значения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  getPattern(t) {
    var e;
    return (t && this.special.getPattern(t)) ?? ((e = this.props) == null ? void 0 : e.pattern);
  }
  /**
   * Returns global data for input verification.<br>
   * Возвращает глобальные данные для проверки вводимых данных.
   */
  getCheck() {
    var t;
    return (t = this.props) == null ? void 0 : t.check;
  }
  /**
   * Returns an object for validation by its group.<br>
   * Возвращает объект для проверки на валидность по его группе.
   * @param groupName group for checking /<br>группа для проверки
   */
  getInput(t = "check") {
    var e;
    return (e = this.getInputList()) == null ? void 0 : e[t];
  }
  /**
   * Returns a list of objects for validation, divided by group name.<br>
   * Возвращает список объектов для проверки на валидность, разделенных по названию группы.
   */
  getInputList() {
    var t, e;
    return this.inputs.getCache([
      (t = this.props) == null ? void 0 : t.pattern,
      (e = this.props) == null ? void 0 : e.check
    ]);
  }
  /**
   * Returns a list of basic data for verification.<br>
   * Возвращает список базовых данных для проверки.
   */
  getByType() {
    if (this.type.isDate())
      return this.date.getPattern();
    const t = {};
    return this.special.get().forEach((e) => {
      t[e] = {};
    }), t;
  }
  /**
   * Initializes a list of input objects for validation.<br>
   * Инициализирует список объектов ввода для проверки на валидность.
   */
  initInput() {
    const t = {}, e = this.getCheck();
    return w(this.getList(), (s, i) => {
      t[i] = lt(s, i);
    }), e && (t.check = lt(e)), t;
  }
}
class Ai {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.type = e;
  }
  /**
   * Returns whether the type is a number or mirror.<br>
   * Возвращает, является ли тип номером или зеркальным.
   */
  isEnd() {
    var t;
    return this.type.isCurrencyOrNumber() || ((t = this.props) == null ? void 0 : t.dir) === "rtl" || !1;
  }
  /**
   * Checks if the alignment value is right.<br>
   * Проверяет, является ли значение выравнивания справа.
   */
  isRight() {
    var t;
    return ((t = this.props) == null ? void 0 : t.right) || this.isEnd();
  }
}
class Oi extends P {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param type
   * @param rubberItem
   * @param rubberTransition
   * @param special
   * @param match
   * @param format
   *
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, o, h) {
    super(() => this.initList()), this.props = t, this.type = e, this.rubberItem = s, this.rubberTransition = i, this.special = r, this.match = o, this.format = h;
  }
  /**
   * Checks if the selected group is rubber.<br>
   * Проверяет, является ли выбранная группа резиновой.
   * @param groupName group name /<br>название группы
   */
  is(t) {
    return t in this.getList();
  }
  /**
   * Checks if the symbol is a transition.<br>
   * Проверяет, является ли символ перехода.
   * @param char checkable symbol /<br>проверяемая переменная
   */
  isTransition(t) {
    return this.getTransitionList().indexOf(t) >= 0;
  }
  /**
   * Checks if the selected group has data and whether it is rubber.<br>
   * Проверяет, есть ли данные у выбранной группы и является ли она резиновой.
   * @param data values for verification /<br>значения для проверки
   * @param groupName group name /<br>название группы
   */
  isValue(t, e) {
    return e in t && this.is(e);
  }
  /**
   * Getting properties for the rubber group.<br>
   * Получение свойства для резиновой группы.
   * @param groupName group name /<br>название группы
   */
  get(t) {
    var e;
    return (e = this.getList()) == null ? void 0 : e[t];
  }
  /**
   * Getting a list of rubber groups.<br>
   * Получение списка резиновых групп.
   */
  getList() {
    var t, e;
    return this.getCache([
      (t = this.props) == null ? void 0 : t.type,
      (e = this.props) == null ? void 0 : e.special
    ]);
  }
  /**
   * Getting a list of transition symbols.<br>
   * Получение списка символов перехода.
   */
  getTransitionList() {
    return Ue(
      Object.values(this.getList()).filter(
        (t) => "transitionChar" in t && (G(t.transitionChar) || W(t.transitionChar))
      ),
      "transitionChar"
    ).flat();
  }
  /**
   * Updates the group of rubber symbols if all conditions are met and returns true.<br>
   * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
   * @param data values for verification /<br>значения для проверки
   * @param groupName group name /<br>название группы
   * @param char symbol for checking /<br>символ для проверки
   */
  update(t, e, s) {
    const i = this.get(e), r = t == null ? void 0 : t[e];
    return i && r ? se(s, i == null ? void 0 : i.transitionChar) || i != null && i.maxLength && (i == null ? void 0 : i.maxLength) <= (r == null ? void 0 : r.maxLength) ? (this.rubberTransition.set(e), !1) : (r.end && this.match.is(s, e) && !this.rubberTransition.isChar(e) && (this.rubberItem.add(e), this.rubberTransition.reset()), !0) : !1;
  }
  /**
   * Reduces the length of the entered symbol by its group.<br>
   * Уменьшает длину вводимого символа по его группе.
   * @param groupName group name /<br>название группы
   */
  pop(t) {
    return this.rubberItem.pop(t);
  }
  /**
   * Resets all states of all groups to the initial one.<br>
   * Сбрасывает все состояния всех групп до начального.
   */
  reset() {
    return this.rubberItem.reset(), this.rubberTransition.reset(), this;
  }
  /**
   * Processes data to get an object to work with elastic groups.<br>
   * Обрабатывает данные для получения объекта для работы с резиновыми группами.
   */
  initList() {
    const t = this.special.getRubberList();
    return this.type.isCurrencyOrNumber() ? Xe(
      this.format.getRubber(),
      t
    ) : t;
  }
}
class Di extends P {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param rubberItem
   * @param characterLength
   * @param date
   * @param format
   * @param special
   */
  constructor(e, s, i, r, o, h, c) {
    super(() => this.initMask());
    a(this, "info");
    this.props = e, this.type = s, this.rubberItem = i, this.characterLength = r, this.date = o, this.format = h, this.special = c, this.info = new P(() => this.initInfo());
  }
  /**
   * Returns the mask symbol by its index.<br>
   * Возвращает символ маски по его индексу.
   * @param index index of the symbol’s location /<br>индекс расположения символа
   */
  get(e) {
    var s;
    return ((s = this.getList()) == null ? void 0 : s[e]) ?? "";
  }
  /**
   * Returns an array with information about the location of all special characters.<br>
   * Возвращает массив с информацией о расположении всех специальных символов.
   */
  getInfo() {
    return this.info.getCache(this.getComparison());
  }
  /**
   * Returns information about the selection location.<br>
   * Возвращает информацию о месте выделения.
   * @param selection
   */
  getInfoBySelection(e) {
    const s = this.getInfo();
    return s.find((i) => i.key >= e) ?? s[s.length - 1];
  }
  /**
   * Returns the current mask.<br>
   * Возвращает текущую маску.
   */
  getList() {
    return this.getCache(this.getComparison());
  }
  /**
   * Returns the location number for replacement by its input symbol.<br>
   * Возвращает номер нахождения для замены по его символу ввода.
   * @param char input symbol /<br>символ ввода
   * @param selection minimum index for search <br>минимальный индекс для поиска
   */
  getByChar(e, s = -1) {
    let i = s;
    return this.getList().forEach((r, o) => {
      r === e && o >= s && (i = o);
    }), i;
  }
  /**
   * Returns the length of the active mask.<br>
   * Возвращает длину активной маски.
   */
  getLength() {
    return this.getList().length;
  }
  /**
   * Returns the length of the mask or the maximum length of masks if there are several.<br>
   * Возвращает длину маски или максимальную длину масок, если их несколько.
   */
  getMaxLength() {
    const e = this.getMask();
    return W(e) ? Je(e) : this.getList().length;
  }
  /**
   * Returns the length of only special characters.<br>
   * Возвращает длину только из специальных символов.
   */
  getLengthBySpecial() {
    return this.getInfo().length;
  }
  /**
   * Returns how many special characters were highlighted.<br>
   * Возвращает, сколько специальных символов было выделено.
   * @param start start of selection /<br>начало выделения
   * @param end end of selection /<br>конец выделения
   */
  getQuantity(e, s) {
    if (e === s)
      return 1;
    let i = 0;
    for (let r = e; r < s; r++)
      this.special.isSpecial(this.get(r)) && i++;
    return i;
  }
  /**
   * Returns data for cache to check for changes.<br>
   * Возвращает данные для кэша для проверки на изменения.
   */
  getComparison() {
    var e, s, i, r, o, h;
    return [
      this.characterLength.get(),
      ...this.rubberItem.getCode(),
      (e = this.props) == null ? void 0 : e.mask,
      (s = this.props) == null ? void 0 : s.special,
      (i = this.props) == null ? void 0 : i.fraction,
      (r = this.props) == null ? void 0 : r.currency,
      (o = this.props) == null ? void 0 : o.type,
      (h = this.props) == null ? void 0 : h.language
    ];
  }
  /**
   * Returns a list of masks.<br>
   * Возвращает список масок.
   */
  getMask() {
    var e;
    return ((e = this.props) == null ? void 0 : e.mask) ?? "";
  }
  /**
   * Returns the active mask.<br>
   * Возвращает активную маску.
   */
  getMaskActive() {
    const e = this.getMask();
    return W(e) ? e.find((s) => this.getSpecialLength(s) >= this.characterLength.get()) || (e == null ? void 0 : e[e.length - 1]) || "" : e;
  }
  /**
   * Returns the number of special characters in the current mask.<br>
   * Возвращает количество специальных символов в текущей маске.
   */
  getBasic() {
    return this.rubberItem.expandMask(this.getMaskActive()).split("");
  }
  /**
   * Returns the number of special characters in the current mask.<br>
   * Возвращает количество специальных символов в текущей маске.
   * @param mask selected mask /<br>выбранная маска
   */
  getSpecialLength(e) {
    return e.split("").filter((s) => this.special.isSpecial(s)).length;
  }
  /**
   * Generates a mask by type.<br>
   * Генерирует маску по типу.
   */
  initMask() {
    return this.type.isCurrencyOrNumber() ? this.format.getMask() : this.type.isDate() ? this.date.getMask() : this.getBasic();
  }
  /**
   * Generates information about special characters.<br>
   * Генерирует информацию о специальных символах.
   */
  initInfo() {
    const e = [];
    let s = 0;
    return this.getList().forEach((i, r) => {
      this.special.isSpecial(i) && (e.push({
        index: s,
        key: r,
        char: i
      }), s++);
    }), e;
  }
}
class Fi {
  /**
   * Constructor
   * @param special
   * @param mask
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    a(this, "value", 0);
    a(this, "immediate", 0);
    a(this, "shift", !1);
    this.special = t, this.mask = e;
  }
  /**
   * Getting the selection key number.<br>
   * Получение номера ключа выделения.
   */
  get() {
    return this.value;
  }
  /**
   * Returns the selection number for the first element that is a special symbol.
   * Возвращает номер выделения для первого элемента, являющегося специальным символом.
   */
  getFirst() {
    var t, e;
    return (e = (t = this.mask.getInfo()) == null ? void 0 : t[0]) == null ? void 0 : e.key;
  }
  /**
   * Getting the current key of the selected character.<br>
   * Получение текущего ключа выделенного символа.
   */
  getFocus() {
    return this.getCharacter(this.value);
  }
  /**
   * Getting the next key of the selected character.<br>
   * Получение следующего ключа выделенного символа.
   */
  getNext() {
    return this.getCharacter(this.value + 1);
  }
  /**
   * Getting the previous key of the selected symbol.<br>
   * Получение предыдущего ключа выделенного символа.
   */
  getPrevious() {
    return this.getCharacter(this.value - 1);
  }
  /**
   * Getting the key number of the nearest special character.<br>
   * Получение номера ключа ближайшего специального символа.
   */
  getImmediate() {
    return this.getCharacter(this.immediate);
  }
  /**
   * Getting the number of the key shifted to the left direction.
   * Получение номера ключа, сдвинутого в левом направлении.
   */
  getShift() {
    return this.shift ? this.value > 0 ? this.getCharacter(this.value - 1) + 1 : 0 : this.getFocus();
  }
  /**
   * Changing the selection key number.<br>
   * Изменение номера ключа выделения.
   * @param selection selection number /<br>номер выделения
   */
  set(t) {
    return this.value = t, this;
  }
  /**
   * Changes the selection key number according to the mask structure.<br>
   * Изменяет номер ключа выделения по структуре маски.
   * @param selection selection number /<br>номер выделения
   * @param focus is the element in focus /<br>элемент в фокусе ли
   */
  setByMask(t, e = !0) {
    if (e) {
      let s, i;
      this.mask.getInfo().forEach((r) => {
        s === void 0 && r.key >= t && (s = r.index), r.key <= t && (i = r.index);
      }), this.set(s !== void 0 ? s : this.mask.getLengthBySpecial()), this.setImmediate(i !== void 0 ? i : this.mask.getLengthBySpecial());
    }
    return this;
  }
  /**
   * Changing the selection key for the nearest special character.<br>
   * Изменение ключа выделения для ближайшего специального символа.
   * @param immediate selection key number /<br>номер ключа выделения
   */
  setImmediate(t) {
    return this.immediate = t, this;
  }
  /**
   * Turning shift on or off.<br>
   * Включение или отключение сдвига.
   * @param shift value for shift /<br>значение для сдвига
   */
  setShift(t) {
    return this.shift = t, this;
  }
  /**
   * Resets the selection key for the nearest special character to the selection location.<br>
   * Сбрасывает ключ выделения для ближайшего специального символа до места выделения.
   */
  resetImmediate() {
    return this.immediate = this.value <= 0 ? 0 : this.value - 1, this;
  }
  /**
   * Move the selection location back by 1 step.
   * Передвигаем место выделения назад на 1 шаг.
   */
  goBack() {
    return this.value > 0 && this.value--, this;
  }
  /**
   * Move the selection location forward by 1 step.
   * Передвигаем место выделения вперед на 1 шаг.
   */
  goNext() {
    return this.value <= this.mask.getLength() && this.value++, this;
  }
  /**
   * Getting the key number at the selection location.<br>
   * Получение номера ключа по месту выделения.
   * @param selection selection location /<br>место выделения
   */
  getCharacter(t) {
    for (const e of this.mask.getInfo())
      if (e.index >= t)
        return e.key;
    return this.mask.getLength();
  }
}
const st = "~";
class Vi {
  /**
   * Constructor
   * @param rubberItem
   * @param characterLength
   * @param special
   * @param rubber
   * @param mask
   * @param selection
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, o) {
    a(this, "value", []);
    this.rubberItem = t, this.characterLength = e, this.special = s, this.rubber = i, this.mask = r, this.selection = o;
  }
  /**
   * Checks if the value is filled.<br>
   * Проверяет, заполнено ли значение.
   */
  is() {
    return this.value.length > 0;
  }
  /**
   * Checks if the selected character was previously deleted.<br>
   * Проверяет, является ли выделенный символ ранее удаленным.
   */
  isCharDelete() {
    const t = this.selection.get();
    return t in this.value && this.value[t] === st;
  }
  /**
   * Getting input characters.<br>
   * Получение вводимых символов.
   */
  get() {
    return this.value;
  }
  /**
   * Getting the selected mask character.<br>
   * Получение выбранного символа маски.
   */
  getFocus() {
    return this.mask.get(this.selection.getFocus());
  }
  /**
   * Getting the mask character by the key number of the nearest special character.<br>
   * Получение символа маски по номеру ключа ближайшего специального символа.
   */
  getImmediate() {
    return this.mask.get(this.selection.getImmediate());
  }
  /**
   * Getting the next mask character.<br>
   * Получение следующего символа маски.
   */
  getNext() {
    return this.mask.get(this.selection.getNext());
  }
  /**
   * Adding 1 entered character at its selection location.<br>
   * Добавление 1 введенного символа по месту его выделения.
   * @param char entered character /<br>введенный символ
   */
  add(t) {
    return this.value.splice(this.selection.get(), this.isCharDelete() ? 1 : 0, t), this.selection.goNext().resetImmediate(), this.updateLength(), this;
  }
  /**
   * Deleting 1 entered character at its selection location.<br>
   * Удаление 1 введенного символа по месту его выделения.
   */
  pop() {
    const t = this.selection.get() - 1;
    return this.isSpecialNextAnother() ? this.value[t] = st : (this.value.splice(t, 1), this.updateLength()), this.selection.goBack().resetImmediate(), this;
  }
  /**
   * Resets the values to the initial values.<br>
   * Сбрасывает значения до начальных значений.
   */
  reset() {
    return this.value = [], this.selection.set(0).resetImmediate(), this.updateLength(), this;
  }
  /**
   * Shifts by 1 value depending on the direction of selection change.<br>
   * Сдвигает на 1 значение в зависимости от направления изменения выделения.
   * @param status shift status /<br>статус сдвига
   */
  shift(t = 1) {
    return this.characterLength.set(this.value.length + t), this;
  }
  /**
   * Checks if there is another group of special characters ahead.<br>
   * Проверяет, если впереди другая группа специальных символов.
   */
  isSpecialNextAnother() {
    const t = this.selection.get() - 1, e = this.value.length;
    if (t >= 0 && t <= e) {
      const s = this.mask.getInfo(), i = s[t].char;
      if (!this.rubberItem.is(i)) {
        for (let r = t; r < e; r++)
          if (r in s) {
            const o = s[r].char;
            if (this.special.isSpecial(o) && i !== o)
              return !0;
          }
      }
    }
    return !1;
  }
  /**
   * Updates of the length of entered characters.<br>
   * Обновления длины введенных символов.
   */
  updateLength() {
    return this.characterLength.set(this.value.length), this;
  }
}
class Ni extends P {
  constructor(t, e, s, i) {
    super(() => this.initValue()), this.rubberTransition = t, this.mask = e, this.special = s, this.character = i;
  }
  /**
   * Checks if the values are filled in.<br>
   * Проверяет, заполнены ли значения.
   */
  is() {
    return this.getLength() > 0;
  }
  /**
   * Receiving basic standard values.<br>
   * Получение базовых стандартных значений.
   */
  get() {
    return this.getCache([
      ...this.mask.getList(),
      ...this.character.get()
    ]);
  }
  /**
   * Getting the character from the basic standard values by its key number.<br>
   * Получение символа из базовых стандартных значений по его номеру ключа.
   * @param index key number /<br>номер ключа
   */
  getChar(t) {
    var e;
    return (e = this.get()) == null ? void 0 : e[t];
  }
  /**
   * Getting the length of basic standard values.<br>
   * Получение длины базовых стандартных значений.
   */
  getLength() {
    return this.get().length;
  }
  /**
   * Initialization of basic standard values.<br>
   * Инициализация базовых стандартных значений.
   */
  initValue() {
    const t = this.character.get(), e = [];
    let s = 0;
    for (const i of this.mask.getList())
      if (!this.special.isSpecial(i))
        e.push(i);
      else if (s in t) {
        if (e.push(t[s++]), s > t.length && this.rubberTransition.is() && !this.rubberTransition.isChar(i))
          break;
      } else
        break;
    return e.join("");
  }
}
class Ri {
  /**
   * Constructor
   * @param type
   * @param date
   * @param format
   * @param mask
   * @param special
   * @param valueBasic
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, o) {
    a(this, "info");
    a(this, "valueFinal");
    this.type = t, this.date = e, this.format = s, this.mask = i, this.special = r, this.valueBasic = o, this.info = new P(() => this.initInfo()), this.valueFinal = new P(() => this.initValue());
  }
  /**
   * Checks if the mask is fully filled.<br>
   * Проверяет, полностью ли заполнена маска.
   */
  isFull() {
    for (const t of Object.values(this.getInfo()))
      if (!t.full)
        return !1;
    return !0;
  }
  /**
   * Checks if the mask is fully filled by length.<br>
   * Проверяет, полностью ли заполнена маска по длине.
   */
  isEnd() {
    for (const t of Object.values(this.getInfo()))
      if (!t.end)
        return !1;
    return !0;
  }
  /**
   * Checks if the values are fully filled in for the group.<br>
   * Проверяет, полностью ли заполнены значения по группе.
   * @param groupName group name /<br>название группы
   */
  isFullByGroup(t) {
    var e;
    return ((e = this.getInfoItem(t)) == null ? void 0 : e.full) ?? !1;
  }
  /**
   * Getting the final value for export.<br>
   * Получение конечного значения для экспорта.
   */
  get() {
    return this.type.isCurrencyOrNumber() ? this.format.getValueStandard(this.getInfo()) : this.type.isDate() ? this.isFull() ? this.date.getValueStandard(this.getInfo()) : "" : this.valueFinal.getCache([
      ...this.valueBasic.get()
    ]);
  }
  /**
   * Getting full information for global verification.<br>
   * Получение полной информации для глобальной проверки.
   */
  getForCheck() {
    const t = this.get();
    return {
      group: "check",
      value: t,
      maxLength: t.length,
      full: this.isFull(),
      end: this.isEnd(),
      chars: t.split("")
    };
  }
  /**
   * Receiving a list with information about standard values.<br>
   * Получение списка с информацией о стандартных значениях.
   */
  getInfo() {
    return this.info.getCache([
      this.valueBasic.get(),
      ...this.mask.getList()
    ]);
  }
  /**
   * Getting information for a specific group.<br>
   * Получение информации для конкретной группы.
   * @param groupName group name /<br>название группы
   */
  getInfoItem(t) {
    var e;
    return (e = this.getInfo()) == null ? void 0 : e[t];
  }
  /**
   * Checks if there is a value by the key number in the basic values.<br>
   * Проверяет, есть ли значение по номеру ключа в базовых значениях.
   * @param index key number /<br>номер ключа
   */
  isStandard(t) {
    return !!this.valueBasic.getChar(t);
  }
  /**
   * Adding a new character to the list, divided by groups, if it is not there,
   * and returning the property of the given group.<br>
   * Добавление нового символа в список, разделенный по группам, если его там нет,
   * и возвращение свойства данной группы.
   * @param data data for verification /<br>данные для проверки
   * @param groupName group name /<br>название группы
   */
  add(t, e) {
    return e in t || (t[e] = {
      group: e,
      value: "",
      maxLength: 0,
      full: !1,
      end: !1,
      chars: []
    }), t[e];
  }
  /**
   * Initialization of the list with information about standard values.<br>
   * Инициализация списка с информацией о стандартных значениях.
   */
  initInfo() {
    const t = this.valueBasic.get(), e = {};
    return this.mask.getList().forEach((s, i) => {
      if (this.special.isSpecial(s)) {
        const r = this.add(e, s);
        this.isStandard(i) && t[i] !== st && r.chars.push(t[i]), r.maxLength++, r.value = r.full ? r.chars.join("") : "", r.full = this.special.isDefault(s) || r.maxLength === r.chars.length, r.end = r.maxLength === r.chars.length;
      }
    }), e;
  }
  initValue() {
    const t = this.valueBasic.get().split(""), e = this.mask.getList();
    let s = "";
    for (const i in e)
      if (i in t)
        s += t[i];
      else {
        const r = this.special.getDefault(e[i]);
        r && (s += r);
      }
    return s;
  }
}
class Hi {
  /**
   * Constructor
   * @param pattern
   * @param value
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.pattern = t, this.value = e;
  }
  /**
   * Checks if the current group has an error.<br>
   * Проверяет, есть ли ошибка у текущей группы.
   * @param groupName group name /<br>название группы
   */
  isError(t) {
    var s;
    const e = (s = this.get()) == null ? void 0 : s.group;
    return !!(e && (e === t || e === "check"));
  }
  /**
   * Checks the correctness of filling in the values.<br>
   * Проверяет корректность заполнения значений.
   */
  checkValidity() {
    return this.get() === void 0;
  }
  /**
   * We get an object with information about the error if there is an error, or undefined.<br>
   * Получаем объект с информацией об ошибке, если есть ошибка, или undefined.
   */
  get() {
    for (const t of Object.values(this.pattern.getInputList())) {
      const e = this.value.getInfoItem(t.group);
      if (e && e.full) {
        const s = t.check(e.value);
        if (s && !s.status)
          return s;
      }
    }
    return this.getValidationCheck();
  }
  /**
   * Getting an error message.<br>
   * Получение сообщения об ошибке.
   */
  getMessage() {
    var t;
    return ((t = this.get()) == null ? void 0 : t.validationMessage) ?? "";
  }
  /**
   * Getting global check data.<br>
   * Получение данных глобальной проверки.
   */
  getValidationCheck() {
    var t;
    if (this.value.isFull()) {
      const e = this.value.getForCheck();
      if (this.pattern.isCheck()) {
        const s = (t = this.pattern.getInput(e.group)) == null ? void 0 : t.check(e.value);
        if (s && !s.status)
          return s;
      }
      return {
        value: e.value,
        required: !0
      };
    }
    return {
      value: this.value.get(),
      required: !1
    };
  }
}
const Pi = "_";
class ji {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param format
   * @param special
   * @param rubber
   * @param mask
   * @param valueBasic
   * @param validation
   * @param className define class names for each symbol /<br>определить названия класс для каждого символа
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, o, h, c, u, d = "is-character") {
    this.props = t, this.type = e, this.date = s, this.format = i, this.special = r, this.rubber = o, this.mask = h, this.valueBasic = c, this.validation = u, this.className = d;
  }
  /**
   * Returns an array with information for displaying on the screen.<br>
   * Возвращает массив с информацией для вывода на экран.
   */
  get() {
    const t = [], e = this.valueBasic.get();
    return this.mask.getList().forEach((s, i) => {
      const r = e == null ? void 0 : e[i];
      t.push({
        className: `${this.className} ${this.className}--${this.getStatus(s, r)}`,
        value: this.getValue(s, r)
      });
    }), t;
  }
  /**
   * Getting the basic standard values for the input field.<br>
   * Получение базовых стандартных значений для поля ввода.
   */
  getInput() {
    const t = [], e = this.mask.getList();
    return this.valueBasic.get().split("").forEach((s, i) => {
      s === st ? t.push(
        this.getSpecialToView((e == null ? void 0 : e[i]) ?? "") ?? s
      ) : t.push(s);
    }), t.join("");
  }
  /**
   * Checks if the value is filled in.<br>
   * Проверяет, заполнено ли значение.
   * @param value input values /<br>вводимые значения
   */
  isValue(t) {
    return !!(t && t !== st);
  }
  /**
   * Returns the status by the entered symbol and the location.<br>
   * Возвращает статус по введенному символу и месту.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param value input values /<br>вводимые значения
   */
  getStatus(t, e) {
    return this.isValue(e) ? this.special.isSpecial(t) ? this.validation.isError(t) ? "error" : "special" : "standard" : this.rubber.isTransition(t) ? "transition" : "placeholder";
  }
  /**
   * Returns a symbol from a filled value by mask or special symbol.<br>
   * Возвращает символ из заполненного значения по маске или специальному символу.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param value input values /<br>вводимые значения
   */
  getValue(t, e) {
    return this.isValue(e) ? e : this.getSpecialToView(t);
  }
  /**
   * Returns a special symbol for output by the entered symbol.<br>
   * Возвращает специальный символ для вывода по введенному символу.
   * @param char checkable symbol /<br>проверяемая переменная
   */
  getSpecialToView(t) {
    var e;
    return this.special.isSpecial(t) ? this.getViewChar(t) ?? this.special.getView(t) ?? ((e = this.props) == null ? void 0 : e.view) ?? Pi : t;
  }
  /**
   * Returns a special symbol by symbol.<br>
   * Возвращает специальный символ по типу символа.
   * @param groupName group name /<br>название группы
   */
  getViewChar(t) {
    if (this.type.isDate())
      return this.date.getView(t);
    if (this.type.isCurrencyOrNumber())
      return this.format.getView();
  }
}
class zi {
  /**
   * Constructor
   * @param validation
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    a(this, "type");
    a(this, "event");
    this.validation = t, this.callbackEvent = e;
  }
  /**
   * Checks whether additional data needs to be generated for the current event.<br>
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   */
  isValue() {
    return !!(this.type && ["input", "change"].indexOf(this.type) >= 0);
  }
  /**
   * Initializes event handling.<br>
   * Инициализирует обработку событий.
   */
  go() {
    if (this.type && this.event) {
      const t = this.isValue() ? this.validation.get() : void 0;
      this.callbackEvent(this.type, this.event, t);
    }
    return this;
  }
  /**
   * Changes the event type and event data.<br>
   * Изменяет тип события и данные события.
   * @param type event name /<br>название события
   * @param event event object /<br>объект события
   */
  set(t, e) {
    return this.setType(t), this.setEvent(e), this;
  }
  /**
   * Changes the event type.<br>
   * Изменяет тип события.
   * @param type event name /<br>название события
   */
  setType(t) {
    return this.type = t, this;
  }
  /**
   * Changes the event object.<br>
   * Изменяет объект события.
   * @param event event object /<br>объект события
   */
  setEvent(t) {
    return this.event = t, this;
  }
  /**
   * Resets the state.<br>
   * Сбрасывает состояние.
   */
  reset() {
    return this.resetType(), this.resetEvent(), this;
  }
  /**
   * Resets the type state.<br>
   * Сбрасывает состояние тип.
   */
  resetType() {
    return this.type = void 0, this;
  }
  /**
   * Resets the event state.<br>
   * Сбрасывает состояние события.
   */
  resetEvent() {
    return this.event = void 0, this;
  }
}
class Wi {
  /**
   * Constructor
   * @param type
   * @param buffer
   * @param focus
   * @param rubberTransition
   * @param date
   * @param special
   * @param match
   * @param rubber
   * @param mask
   * @param selection
   * @param character
   * @param valueBasic
   * @param value
   * @param emit
   * @param element input element /<br>элемент ввода
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, o, h, c, u, d, T, A, De, Fe, Ve) {
    this.type = t, this.buffer = e, this.focus = s, this.rubberTransition = i, this.date = r, this.special = o, this.match = h, this.rubber = c, this.mask = u, this.selection = d, this.character = T, this.valueBasic = A, this.value = De, this.emit = Fe, this.element = Ve;
  }
  /**
   * Adding new characters that can be entered by the user.<br>
   * Добавление новых вводимых символов.
   * @param selection number of the selected key /<br>номер выделенного ключа
   * @param chars a list of values that are entered by the user /<br>список вводимых значений
   * @param focus is the element focused /<br>находится ли элемент в фокусе
   */
  add(t, e, s = !0) {
    let i = !1;
    return this.selection.setByMask(t, s), this.rubberTransition.reset(), tt(e).forEach((r) => {
      const o = this.character.getFocus(), h = this.character.getImmediate();
      this.selection.setShift(
        this.rubber.update(this.value.getInfo(), h, r)
      ), this.rubberTransition.is() ? this.selection.setByMask(
        this.mask.getByChar(this.rubberTransition.get(), this.selection.getImmediate()) + 1,
        s
      ) : this.match.is(r, o) && (this.character.shift(), this.character.getFocus() && (this.mask.getMaxLength() > this.valueBasic.getLength() || this.character.isCharDelete()) && (this.character.add(r), i = !0));
    }), this.goSelection(), i;
  }
  /**
   * Removing selected input characters.<br>
   * Удаление выделенных вводимых символов.
   * @param start location of the start of the selected area /<br>место начала выделенной области
   * @param end location of the end of the selected area /<br>конечный место выделенной области
   * @param focus is the element focused /<br>находится ли элемент в фокусе
   */
  pop(t, e = t, s = !0) {
    if (t >= 0 && e <= this.mask.getMaxLength()) {
      let i = this.mask.getQuantity(t, e);
      for (s && this.selection.setByMask(e); i--; )
        this.rubberTransition.reset(), this.character.pop(), this.character.shift(0), this.selection.setShift(
          this.rubber.pop(this.character.getFocus())
        );
      this.goSelection();
    }
    return this;
  }
  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset(t = "") {
    if (this.character.reset(), this.rubber.reset(), k(t)) {
      const e = this.type.isDate() ? this.date.getValue(t) : t;
      this.add(0, this.extra(e.split("")));
    }
    return this;
  }
  /**
   * Removing extra values for insertion.<br>
   * Удаление лишних значений для вставки.
   * @param chars insertion of symbols /<br>вставка символов
   */
  extra(t) {
    var o, h;
    if (this.character.is())
      return t;
    const e = this.mask.getList(), s = [...t];
    let i = this.match.get((h = (o = this.mask.getInfo()) == null ? void 0 : o[0]) == null ? void 0 : h.char), r = 0;
    if (i)
      for (const c in e) {
        const u = e[c];
        if (this.special.isSpecial(u)) {
          for (let d = r; d < s.length && (r++, !s[d].match(i)); d++)
            ;
          i = this.match.get(u);
        } else if (u.match(i)) {
          let d = !1;
          for (let T = r; T < s.length; T++) {
            const A = s[T];
            if (r++, A.match(i)) {
              u === A ? (s.splice(T, 1), r--) : d = !0;
              break;
            }
          }
          if (d)
            break;
        }
      }
    return s;
  }
  /**
   * Restores the selection location.<br>
   * Восстанавливает место выделения.
   */
  goSelection(t = !0) {
    return this.focus.is() && requestAnimationFrame(() => {
      if (this.element.value && (!t || !this.goBuffer())) {
        const e = this.valueBasic.getLength(), s = this.selection.getShift(), i = e < s ? e : s;
        this.element.value.selectionEnd = i, this.element.value.selectionStart = i;
      }
    }), this;
  }
  /**
   * Checks if the data is in the buffer. If it is, then add it.<br>
   * Проверяет, если данный в буфер. Если есть, то добавляем.
   */
  goBuffer() {
    return this.buffer.is() ? (this.add(this.selection.getShift(), this.buffer.get()), this.buffer.resetChars(), !0) : (this.buffer.reset(), this.emit.go(), !1);
  }
}
class Ki {
  /**
   * Constructor
   * @param buffer
   * @param focus
   * @param characterLength
   * @param right
   * @param selection
   * @param valueBasic
   * @param validation
   * @param emit
   * @param data
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, o, h, c, u) {
    a(this, "change", !1);
    a(this, "unidentified");
    this.buffer = t, this.focus = e, this.characterLength = s, this.right = i, this.selection = r, this.valueBasic = o, this.validation = h, this.emit = c, this.data = u;
  }
  /**
   * Capture of the event in focus.<br>
   * Перехват события в фокусе.
   * @param event event object /<br>объект события
   */
  onFocus(t) {
    this.change = !1, this.focus.in(), this.emit.set("focus", t).go();
  }
  /**
   * Capture of the event when focus is lost.<br>
   * Перехват события при потере фокуса.
   * @param event event object /<br>объект события
   */
  onBlur(t) {
    this.change && this.emit.setType("change").go(), this.focus.out(), this.emit.set("blur", t).go();
  }
  /**
   * Intercepting keypress to get a character.<br>
   * Перехват нажатия для получения символа.
   * @param event invoked event /<br>вызываемое событие
   */
  onKeydown(t) {
    const e = this.getSelectionInfo(t), {
      start: s,
      end: i
    } = e;
    this.emit.set("keydown", t).go(), !this.isMetaKey(t) && (this.isKey(t) ? t.key === "Backspace" ? (s > 0 || s !== i) && this.data.pop(s, i) : t.key.length <= 1 && (s === i ? this.buffer.go(t.key) && this.data.add(s, t.key) : (this.buffer.goStart(), this.data.pop(s, i).add(this.selection.getShift(), t.key))) : this.unidentified = e);
  }
  /**
   * Intercept key release to check for arrow presses.<br>
   * Перехват отпуска клавиши для проверки нажатия на стрелки.
   * @param event invoked event /<br>вызываемое событие
   */
  onKeyup(t) {
    this.emit.set("keyup", t).go(), !this.isMetaKey(t) && this.isKey(t) && [
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft"
    ].indexOf(t.key) >= 0 && (this.makeToEnd(t), this.makeToStart(t));
  }
  /**
   * Intercepting the event before data modification.<br>
   * Перехват события перед изменением данных.
   * @param event invoked event /<br>вызываемое событие
   */
  onBeforeinput(t) {
    this.emit.set("beforeinput", t).go(), this.unidentified || (this.makeChange(t), re(t));
  }
  /**
   * Intercepting the event during data modification.
   * Перехват события при изменении данных.
   * @param event invoked event /<br>вызываемое событие
   */
  onInput(t) {
    if (this.unidentified) {
      const e = t.target;
      (this.unidentified.length > e.value.length || this.unidentified.start !== this.unidentified.end) && this.data.pop(this.unidentified.start, this.unidentified.end), "data" in t ? t.data && this.buffer.go(t.data) && this.data.add(this.unidentified.start, t.data) : this.data.reset(e.value), this.makeChange(t), this.unidentified = void 0;
    }
  }
  /**
   * Intercepting the event of data insertion from the buffer.<br>
   * Перехват события вставки данных из буфера.
   * @param event invoked event /<br>вызываемое событие
   */
  onPaste(t) {
    const {
      start: e,
      end: s
    } = this.getSelectionInfo(t);
    ss(t).then((i) => {
      const r = i.split("");
      e === s ? this.data.add(e, this.data.extra(r)) : this.data.pop(e, s).add(this.selection.getShift(), this.data.extra(r)), this.change = !0, this.emit.set("paste", t).go();
    }).catch((i) => console.error("getClipboardData", i));
  }
  /**
   * Intercepting the change event, this is for intercepting the browser’s autocomplete event.<br>
   * Перехват события изменения, это для перехвата события автозаполнения в браузере.
   * @param event invoked event /<br>вызываемое событие
   */
  onChange(t) {
    const e = t.target;
    this.data.reset(e.value), this.emit.set("change", t).go();
  }
  /**
   * Intercepting the click event to change the selection location, if necessary.<br>
   * Перехват события клика для изменения места выделения, если это необходимо.
   * @param event invoked event /<br>вызываемое событие
   */
  onClick(t) {
    this.makeToEnd(t), this.makeToStart(t);
  }
  /**
   * Was the meta button pressed.<br>
   * Была ли нажата мета-кнопка.
   * @param event invoked event /<br>вызываемое событие
   */
  isMetaKey(t) {
    return t.metaKey || t.altKey || t.ctrlKey;
  }
  /**
   * Checks the key values in the event.<br>
   * Проверяет значения key в событии.
   * @param event invoked event /<br>вызываемое событие
   */
  isKey(t) {
    return "key" in t && t.key !== "Unidentified";
  }
  /**
   * Getting data about the selection at the event element.<br>
   * Получение данных о выделении у элемента события.
   * @param event invoked event /<br>вызываемое событие
   */
  getSelectionInfo(t) {
    const e = t.target;
    return {
      target: e,
      start: e.selectionStart ?? 0,
      end: e.selectionEnd ?? 0,
      length: e.value.length
    };
  }
  /**
   * Preparing to send an event.<br>
   * Подготовка для отправки события.
   * @param event invoked event /<br>вызываемое событие
   */
  makeChange(t) {
    this.change = !0, this.emit.set("input", t), !this.buffer.is() && (this.emit.go(), this.emit.resetType());
  }
  /**
   * Changes the cursor position if the alignment is right.<br>
   * Изменяет место указателя, если выравнивание справа.
   * @param event invoked event /<br>вызываемое событие
   */
  makeToEnd(t) {
    if (this.right.isRight()) {
      const e = this.valueBasic.getLength(), {
        target: s,
        start: i,
        end: r
      } = this.getSelectionInfo(t);
      i > e && (s.selectionStart = e), r > e && (s.selectionEnd = e);
    }
  }
  /**
   * Check when selecting from the front, before all special characters.<br>
   * Проверка при выделении спереди, перед всеми специальными символами.
   * @param event invoked event /<br>вызываемое событие
   */
  makeToStart(t) {
    const e = this.selection.getFirst(), {
      target: s,
      start: i
    } = this.getSelectionInfo(t);
    i < e && (s.selectionStart = e, s.selectionEnd = e);
  }
}
class Yi {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   */
  constructor(t, e, s, i = "is-character") {
    a(this, "type");
    a(this, "buffer");
    a(this, "focus");
    a(this, "rubberItem");
    a(this, "rubberTransition");
    a(this, "characterLength");
    a(this, "date");
    a(this, "format");
    a(this, "special");
    a(this, "match");
    a(this, "pattern");
    a(this, "right");
    a(this, "rubber");
    a(this, "item");
    a(this, "selection");
    a(this, "character");
    a(this, "valueBasic");
    a(this, "value");
    a(this, "validation");
    a(this, "view");
    a(this, "emit");
    a(this, "data");
    a(this, "event");
    a(this, "oldValue", "");
    this.type = new ki(t), this.buffer = new wi(), this.focus = new Si(this.buffer), this.rubberItem = new Bi(), this.rubberTransition = new Ii(), this.characterLength = new xi(), this.date = new Ti(t, this.type), this.format = new _i(
      t,
      this.type,
      this.rubberItem
    ), this.special = new Ei(
      t,
      this.type,
      this.format
    ), this.match = new $i(t, this.special), this.pattern = new Li(
      t,
      this.type,
      this.date,
      this.special
    ), this.right = new Ai(
      t,
      this.type
    ), this.rubber = new Oi(
      t,
      this.type,
      this.rubberItem,
      this.rubberTransition,
      this.special,
      this.match,
      this.format
    ), this.item = new Di(
      t,
      this.type,
      this.rubberItem,
      this.characterLength,
      this.date,
      this.format,
      this.special
    ), this.selection = new Fi(
      this.special,
      this.item
    ), this.character = new Vi(
      this.rubberItem,
      this.characterLength,
      this.special,
      this.rubber,
      this.item,
      this.selection
    ), this.valueBasic = new Ni(
      this.rubberTransition,
      this.item,
      this.special,
      this.character
    ), this.value = new Ri(
      this.type,
      this.date,
      this.format,
      this.item,
      this.special,
      this.valueBasic
    ), this.validation = new Hi(
      this.pattern,
      this.value
    ), this.view = new ji(
      t,
      this.type,
      this.date,
      this.format,
      this.special,
      this.rubber,
      this.item,
      this.valueBasic,
      this.validation,
      i
    ), this.emit = new zi(
      this.validation,
      s
    ), this.data = new Wi(
      this.type,
      this.buffer,
      this.focus,
      this.rubberTransition,
      this.date,
      this.special,
      this.match,
      this.rubber,
      this.item,
      this.selection,
      this.character,
      this.valueBasic,
      this.value,
      this.emit,
      e
    ), this.event = new Ki(
      this.buffer,
      this.focus,
      this.characterLength,
      this.right,
      this.selection,
      this.valueBasic,
      this.validation,
      this.emit,
      this.data
    ), t != null && t.value && (this.oldValue = Bt(t == null ? void 0 : t.value), this.data.reset(this.oldValue));
  }
  /**
   * Receiving basic standard values.<br>
   * Получение базовых стандартных значений.
   */
  getValueBasic() {
    if (this.right.isRight()) {
      let t = "";
      return this.view.get().forEach((e) => {
        t += e.value;
      }), t;
    }
    return this.view.getInput();
  }
  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses() {
    return {
      "??--value": this.characterLength.is(),
      "??--end": this.right.isEnd()
    };
  }
  /**
   * Restores the selection location.<br>
   * Восстанавливает место выделения.
   */
  goSelection() {
    return this.data.goSelection(!1), this;
  }
  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset(t) {
    const e = Bt(t);
    return this.oldValue !== e ? (this.oldValue = e, this.data.reset(e), this.emit.set("reset", {}).go(), !0) : !1;
  }
}
class qi {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param element input element /<br>элемент ввода
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, i = "is-character") {
    a(this, "mask");
    a(this, "valueBasic", v(""));
    a(this, "value", v(""));
    a(this, "view", v([]));
    a(this, "classes", v({}));
    a(this, "onFocus", (t) => this.mask.event.onFocus(t));
    a(this, "onBlur", (t) => this.mask.event.onBlur(t));
    a(this, "onKeydown", (t) => this.mask.event.onKeydown(t));
    a(this, "onKeyup", (t) => this.mask.event.onKeyup(t));
    a(this, "onBeforeinput", (t) => this.mask.event.onBeforeinput(t));
    a(this, "onInput", (t) => this.mask.event.onInput(t));
    a(this, "onChange", (t) => this.mask.event.onChange(t));
    a(this, "onPaste", (t) => this.mask.event.onPaste(t));
    a(this, "onClick", (t) => this.mask.event.onClick(t));
    this.mask = new Yi(
      t,
      e,
      (r, o, h) => {
        r === "input" && this.updateValue(), s(r, o, h);
      },
      i
    ), H(() => {
      this.mask.reset(t == null ? void 0 : t.value), this.updateValue();
    });
  }
  /**
   * Updating the entered data.<br>
   * Обновление введенных данных.
   */
  updateValue() {
    const t = this.mask.getValueBasic(), e = t !== this.valueBasic.value;
    return this.valueBasic.value = t, this.value.value = this.mask.value.get(), this.view.value = this.mask.view.get(), e && this.mask.goSelection(), this.classes.value = this.mask.getClasses(), this;
  }
}
class Gi extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "mask");
    this.mask = new qi(
      s,
      this.element,
      (r, o, h) => {
        var c;
        (c = this.emits) == null || c.call(
          this,
          r,
          o,
          h
        );
      },
      this.getSubClass(["character", "item"])
    ), this.init();
  }
  /**
   * Element for storing the final data.<br>
   * Элемент для хранения конечных данных.
   */
  renderData() {
    var s;
    const e = this.setup();
    if ((s = this.props) != null && s.name)
      return p("input", {
        type: "hidden",
        name: this.props.name,
        value: e.value.value
      });
  }
  /**
   * Rendering method for input.<br>
   * Метод рендеринга для ввода.
   */
  renderInput() {
    const e = this.setup();
    return p("input", {
      ref: this.element,
      class: e.classes.value.input,
      value: e.valueBasic.value,
      onFocus: e.onFocus,
      onBlur: e.onBlur,
      onKeydown: e.onKeydown,
      onKeyup: e.onKeyup,
      onBeforeinput: e.onBeforeinput,
      onInput: e.onInput,
      onChange: e.onChange,
      onPaste: e.onPaste,
      onClick: e.onClick
    });
  }
  /**
   * Rendering method for displaying the mask and the input data.<br>
   * Метод рендеринга для вывода маски и вводимых данных.
   */
  renderView() {
    const e = this.setup(), s = e.view.value;
    if (s.length > 0) {
      const i = [];
      return s.forEach((r, o) => {
        i.push(
          p("span", {
            key: o,
            class: r.className
          }, r.value)
        );
      }), p("span", { class: e.classes.value.character }, i);
    }
    return p("span", {
      class: e.classes.value.character,
      innerHTML: "&nbsp;"
    });
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
      valueBasic: this.mask.valueBasic,
      value: this.mask.value,
      view: this.mask.view,
      onFocus: this.mask.onFocus,
      onBlur: this.mask.onBlur,
      onKeydown: this.mask.onKeydown,
      onKeyup: this.mask.onKeyup,
      onBeforeinput: this.mask.onBeforeinput,
      onInput: this.mask.onInput,
      onChange: this.mask.onChange,
      onPaste: this.mask.onPaste,
      onClick: this.mask.onClick
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
      main: {
        ...this.toClassName(this.mask.classes.value)
      },
      // :classes [!] System label / Системная метка
      input: this.getSubClass("input"),
      character: this.getSubClass("character"),
      characterItem: this.getSubClass("character__item")
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
    const e = this.setup(), s = [
      this.renderData(),
      this.renderInput(),
      this.renderView()
    ];
    return p("label", {
      ...this.getAttrs(),
      class: e.classes.value.main
    }, s);
  }
}
const I = {
  special: "*",
  match: /[0-9]/,
  type: "text",
  view: "_"
}, Ui = {
  // Values
  type: {
    type: String,
    default: I == null ? void 0 : I.type
  },
  name: String,
  value: [String, Number],
  mask: [String, Array],
  special: {
    type: [String, Array, Object],
    default: I == null ? void 0 : I.special
  },
  match: {
    type: [String, RegExp],
    default: I == null ? void 0 : I.match
  },
  pattern: Object,
  check: Object,
  fraction: [String, Boolean, Number],
  currency: String,
  // Options
  language: String,
  view: {
    type: String,
    default: I == null ? void 0 : I.view
  },
  // :prop [!] System label / Системная метка
  visible: Boolean,
  right: Boolean,
  dir: String
}, Xi = {
  // :values [!] System label / Системная метка
  dir: ["ltr", "rtl"]
  // :values [!] System label / Системная метка
}, Ji = {
  ...Ui,
  // :prop [!] System label / Системная метка
  visible: Boolean,
  right: Boolean,
  dir: String
}, Qi = /* @__PURE__ */ m({
  name: "M3Mask",
  __name: "M3Mask",
  props: { ...Ji },
  emits: ["focus", "blur", "keydown", "keyup", "beforeinput", "input", "change", "paste", "reset"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mask": !0,
        "m3-mask--visible": i.visible,
        "m3-mask--right": i.right,
        [`m3-mask--dir--${i.dir}`]: g(Xi.dir, i.dir)
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Gi(
      "m3.mask",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), qt = "d-mutation", Zi = Et(ie("DESIGNS_MAIN", "design")), tn = Et(ie("DESIGNS_GLOBAL", "ui")), ke = "init", we = "end", it = "__UI_PROJECT";
var L = /* @__PURE__ */ ((n) => (n.new = "new", n[n.init = ke] = "init", n[n.end = we] = "end", n))(L || {});
class $ {
  /**
   * Returns the names of keys indicating the design name.<br>
   * Возвращает названия ключей, обозначающих название дизайна.
   */
  static getKeyUi() {
    return tn;
  }
  /**
   * Returns the names of keys indicating that the element is being processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент находится в обработке.
   */
  static getKeyInit() {
    return ke;
  }
  /**
   * Returns the names of keys indicating that the element has already been processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент уже обработан.
   */
  static getKeyEnd() {
    return we;
  }
  /**
   * Returns the names of attributes indicating the design name.<br>
   * Возвращает названия атрибутов, обозначающих название дизайна.
   */
  static getAttributeUi() {
    return `data-${this.getKeyUi()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент находится в обработке.
   */
  static getClassInit() {
    return `${qt}--${this.getKeyInit()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент уже обработан.
   */
  static getClassEnd() {
    return `${qt}--${this.getKeyEnd()}`;
  }
  /**
   * Initial stage, start of searching for all unprocessed elements.<br>
   * Начальный этап, начало поиска всех необработанных элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   * @param status status name /<br>название статуса
   */
  static find(t = document.body, e = L.new) {
    const s = [];
    if ("querySelector" in t) {
      const i = this.getSelectorByStatus(e);
      t.querySelector(i) && t.querySelectorAll(i).forEach((r) => s.push(r));
    }
    return s;
  }
  /**
   * Checks if the parent element is in processing.<br>
   * Проверяет, находится ли родительский элемент в обработке.
   * @param element tracking element /<br>элемент слежения
   */
  static closestInit(t) {
    var e, s;
    return !!((e = t == null ? void 0 : t.closest) != null && e.call(t, this.getSelectorInit()) || !((s = t == null ? void 0 : t.closest) != null && s.call(t, "body")));
  }
  /**
   * Returns the select for a new element.<br>
   * Возвращает селект для нового элемента.
   */
  static getSelectorNew() {
    return `*[${this.getAttributeUi()}]:not(.${this.getClassInit()}):not(.${this.getClassEnd()})`;
  }
  /**
   * Returns the select for an element in processing.<br>
   * Возвращает селект для элемента в обработке.
   */
  static getSelectorInit() {
    return `*[${this.getAttributeUi()}].${this.getClassInit()}`;
  }
  /**
   * Returns the select for an element that has already been processed.<br>
   * Возвращает селект для элемента, который уже обработан.
   */
  static getSelectorEnd() {
    return `*[${this.getAttributeUi()}].${this.getClassEnd()}`;
  }
  /**
   * Returns the select for searching elements by their status.<br>
   * Возвращает селект для поиска элементов по их статусу.
   * @param status status name /<br>название статуса
   */
  static getSelectorByStatus(t) {
    switch (t) {
      case L.init:
        return `${this.getSelectorInit()}, ${this.getSelectorEnd()}`;
      case L.end:
        return this.getSelectorEnd();
      default:
        return this.getSelectorNew();
    }
  }
}
class R {
  /**
   * Checks if a function is in the list by its name.<br>
   * Проверяет, есть ли функция в списке по ее имени.
   * @param name function name /<br>название функции
   */
  static isFunction(t) {
    return t in this.functions;
  }
  /**
   * Checks if a class is in the list by its name.<br>
   * Проверяет, есть ли класс в списке по его имени.
   * @param name class name /<br>название класса
   */
  static isClass(t) {
    return t in this.classes;
  }
  /**
   * Checks if a class is in the list by its name.<br>
   * Проверяет, есть ли компонент в списке по его имени.
   * @param name component name /<br>название компонента
   */
  static isComponent(t) {
    return t in this.components;
  }
  /**
   * Returns a list of connected components.<br>
   * Возвращает список подключенных компонентов.
   */
  static getComponentList() {
    return this.components;
  }
  /**
   * Returns a list of global projects.<br>
   * Возвращает список глобальных проектов.
   */
  static getComponentGlobal() {
    return it in window ? window[it] : {};
  }
  /**
   * Returns the global project by its name.<br>
   * Возвращает глобальный проект по его названию.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentGlobalItem(t) {
    var e;
    if (it in window)
      return ((e = window[it]) == null ? void 0 : e[t]) ?? void 0;
  }
  /**
   * Returns connected Vue components by their name.<br>
   * Возвращает подключенные компоненты Vue по их имени.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentVue(t) {
    if (t in this.components)
      return this.components[t];
  }
  /**
   * Returns an instance of the element.<br>
   * Возвращает экземпляр элемента.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentItem(t) {
    if (t in this.compItems)
      return this.compItems[t].item;
  }
  /**
   * Adds a new function.<br>
   * Добавляет новую функцию.
   * @param name function name /<br>название функции
   * @param item new function /<br>новая функция
   */
  static addFunction(t, e) {
    this.isFunction(t) || (this.functions[t] = e);
  }
  /**
   * Adds a new class.<br>
   * Добавляет новый класс.
   * @param name class name /<br>название класса
   * @param item new class /<br>новый класс
   */
  static addClass(t, e) {
    this.isClass(t) || (this.classes[t] = e);
  }
  /**
   * Adds a new component.<br>
   * Добавляет новый компонент.
   * @param name component name /<br>название компонента
   * @param component new component /<br>новый компонент
   */
  static addComponent(t, e) {
    this.isComponent(t) || (this.components[t] = e);
  }
  /**
   * Adding a new function to a list.<br>
   * Добавление новой функции в список.
   * @param functions list of functions to be added /<br>список добавляемой функции
   */
  static addFunctionList(t) {
    w(t, (e, s) => {
      this.addFunction(s, e);
    });
  }
  /**
   * Adding a new class to a list.<br>
   * Добавление нового класса в список.
   * @param classes list of classes to be added /<br>список добавляемого класса
   */
  static addClassList(t) {
    w(t, (e, s) => {
      this.addClass(s, e);
    });
  }
  /**
   * Adding a new component to a list.<br>
   * Добавление нового компонента в список.
   * @param components list of components to be added /<br>список добавляемого компонента
   */
  static addComponentList(t) {
    w(t, (e, s) => {
      this.addComponent(s, e);
    });
  }
  /**
   * Registers a component to track parameter changes.<br>
   * Регистрирует компонент для слежения за изменением параметра.
   * @param name component identifier /<br>идентификатор компонента
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  static registrationComponent(t, e, s) {
    if (this.compItems[t] = {
      item: e,
      callback: s
    }, t in this.compCaching) {
      const i = this.compCaching[t];
      return delete this.compCaching[t], i;
    }
  }
  /**
   * Calls data update.<br>
   * Вызывает обновление данных.
   * @param name component identifier /<br>идентификатор компонента
   * @param props component property /<br>свойство компонента
   */
  static comp(t, e) {
    t in this.compItems ? this.compItems[t].callback(e) : this.compCaching[t] = e;
  }
  /**
   * Removal of the component from the list.<br>
   * Удаление компонента из списка.
   * @param name component identifier /<br>идентификатор компонента
   */
  static removeComponent(t) {
    t in this.compItems && delete this.compItems[t];
  }
}
a(R, "functions", {}), a(R, "classes", {}), a(R, "components", {}), a(R, "compItems", {}), a(R, "compCaching", {});
class Se {
  /**
   * Constructor
   * @param element tracking element /<br>элемент слежения
   */
  constructor(t) {
    a(this, "id");
    a(this, "componentName");
    a(this, "static");
    a(this, "slots", {});
    a(this, "props", {});
    a(this, "callback");
    var e;
    this.element = t, this.id = _t(t), this.componentName = ((e = t.dataset) == null ? void 0 : e[$.getKeyUi()]) ?? "component", this.static = L.new, this.slots = this.initSlots(), this.setStatus(L.init), this.element.classList.add(this.getClassMain());
  }
  /**
   * Checks if the element belongs to the current object.<br>
   * Проверяет, принадлежит ли элемент текущему объекту.
   * @param element tracking element /<br>элемент слежения
   */
  is(t) {
    return this.element === t;
  }
  /**
   * Checks if the current element is a link.<br>
   * Проверяет, является ли текущий элемент ссылкой.
   */
  isLink() {
    return !!this.componentName.match("/");
  }
  /**
   * Returns the identifier.<br>
   * Возвращает идентификатор.
   */
  getId() {
    return this.id;
  }
  /**
   * Returns the identifier.<br>
   * Возвращает названия компонента.
   */
  getComponentName() {
    if (this.isLink())
      return this.componentName;
    const t = Ht(this.componentName);
    return R.isComponent(t) ? t : Ht(`${Zi}-${this.componentName}`);
  }
  /**
   * Returns the name of the design.<br>
   * Возвращает название дизайна.
   */
  getDesign() {
    return Et(this.getComponentName()).replace(/-.*?$/, "");
  }
  /**
   * Returns the name of the main class.<br>
   * Возвращает название главного класса.
   */
  getClassMain() {
    return `${this.getDesign()}-init`;
  }
  /**
   * Returns the element.<br>
   * Возвращает элемент.
   */
  getElement() {
    return this.element;
  }
  /**
   * Returns the status.<br>
   * Возвращает статус.
   */
  getStatus() {
    return this.static;
  }
  /**
   * Returns property data.<br>
   * Возвращает данные свойства.
   */
  getProps() {
    return {
      ...this.getDataset(),
      ...this.props
    };
  }
  /**
   * Returns data about the slot.<br>
   * Возвращает данные о слоте.
   */
  getSlots() {
    return this.slots;
  }
  /**
   * Changes the status of the item.<br>
   * Изменяет статус элемента.
   * @param status status values /<br>значения статуса
   */
  setStatus(t) {
    switch (this.removeClasses(), this.static = t, this.static) {
      case L.init:
        this.element.classList.add($.getClassInit());
        break;
      case L.end:
        this.element.classList.add($.getClassEnd());
        break;
    }
    return this;
  }
  /**
   * Registers a component for data update.<br>
   * Регистрирует компонент для обновления данных.
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  registration(t, e) {
    const s = R.registrationComponent(
      this.getId(),
      t,
      (i) => {
        k(i) && this.setProps(i).update();
      }
    );
    return s && this.setProps(s), this.callback = e, this;
  }
  /**
   * Called upon data update.<br>
   * Вызывается при обновлении данных.
   */
  update() {
    var t;
    return (t = this.callback) == null || t.call(
      this,
      this.getProps()
    ), this;
  }
  /**
   * Termination of observation of changes.<br>
   * Прекращения наблюдения за изменения.
   */
  disconnect() {
    return R.removeComponent(this.getId()), this;
  }
  /**
   * Returns data from attributes.<br>
   * Возвращает данные из атрибутов.
   */
  getDataset() {
    const t = {};
    return w(this.element.dataset, (e, s) => {
      s !== $.getKeyUi() && (t[s] = Qe(e));
    }), t;
  }
  /**
   * Changes the property.<br>
   * Изменяет свойство.
   * @param props property values /<br>значения свойство
   */
  setProps(t) {
    return k(t) && w(t, (e, s) => {
      s === "slots" ? this.setSlots(e) : this.props[s] = e;
    }), this;
  }
  /**
   * Data updates for the slot.<br>
   * Обновления данных для слота.
   * @param slots list of slots for update /<br>список слотов для обновления
   */
  setSlots(t) {
    return k(t) && w(t, (e, s) => {
      this.slots[s] = this.initChildrenList(tt(e));
    }), this;
  }
  /**
   * Initializes the data list for the slot.<br>
   * Инициализирует список данных для слота.
   */
  initSlots() {
    const t = {}, e = [];
    for (const s of this.element.children) {
      const i = s.getAttribute("data-slot");
      if (i)
        t[i] = this.initChildrenList(s.childNodes);
      else {
        const r = this.initChildren(s);
        r && ("default" in t ? t.default.push(r) : t.default = [r]);
      }
      e.push(s);
    }
    for (const s of e)
      this.element.removeChild(s);
    return t;
  }
  /**
   * Initializes the list of child elements.<br>
   * Инициализирует список дочерних элементов.
   * @param children list of child elements /<br>список дочерних элементов
   */
  initChildrenList(t) {
    const e = [];
    for (const s of t) {
      const i = this.initChildren(s);
      i && e.push(i);
    }
    return e;
  }
  /**
   * Initializes data for the child element.<br>
   * Инициализирует данные для дочернего элемента.
   * @param element child element /<br>дочерний элемент
   */
  initChildren(t) {
    var s, i;
    if (t instanceof HTMLElement)
      return {
        tag: t.nodeName,
        attributes: {
          ...is(t),
          innerHTML: (t == null ? void 0 : t.innerHTML) ?? ""
        }
      };
    const e = (i = (s = t == null ? void 0 : t.textContent) == null ? void 0 : s.trim) == null ? void 0 : i.call(s);
    if (k(e))
      return e;
    if (G(t) && k(t))
      return t;
  }
  /**
   * Removal of all classes related to the status.<br>
   * Удаление всех классов, относящихся к статусу.
   */
  removeClasses() {
    return this.element.classList.remove($.getClassInit()), this.element.classList.remove($.getClassEnd()), this;
  }
}
class en {
  constructor() {
    a(this, "items", []);
  }
  /**
   * Checks if the element is in the list.<br>
   * Проверяет, есть ли элемент в списке.
   * @param element tracking element /<br>элемент слежения
   */
  is(t) {
    return !!this.getItem(t);
  }
  /**
   * Checks if the element is a component.<br>
   * Проверяет, является ли элемент компонентом.
   * @param element tracking element /<br>элемент слежения
   */
  isComponent(t) {
    var e;
    return !!((e = t.dataset) != null && e[$.getKeyUi()]);
  }
  /**
   * Retrieving a list of all data.<br>
   * Получение списка всех данных.
   */
  get() {
    return this.items;
  }
  /**
   * Returns an object with information about the element.<br>
   * Возвращает объект с информацией об элементе.
   * @param element tracking element /<br>элемент слежения
   */
  getItem(t) {
    var e;
    return (e = this.items) == null ? void 0 : e[this.find(t)];
  }
  /**
   * Adding an element for processing.<br>
   * Добавление элемента для обработки.
   * @param element tracking element /<br>элемент слежения
   */
  add(t) {
    return this.isComponent(t) && !this.is(t) && !$.closestInit(t) && this.items.push(new Se(t)), this;
  }
  /**
   * Removes an element from the list.<br>
   * Удаляет элемент из списка.
   * @param element tracking element /<br>элемент слежения
   */
  remove(t) {
    const e = this.find(t);
    return e >= 0 && (this.items[e].disconnect(), this.items.splice(e, 1)), this;
  }
  /**
   * Searching for an element in the list.<br>
   * Поиск элемента в списке.
   * @param element tracking element /<br>элемент слежения
   */
  find(t) {
    return this.items.findIndex((e) => e.is(t));
  }
}
class sn {
  /**
   * Constructor
   * @param addCallback function for adding an element /<br>функция для добавления элемента
   * @param removeCallback function for removing an element /<br>функция для удаления элемента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    a(this, "mutation");
    this.addCallback = t, this.removeCallback = e;
  }
  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start() {
    return this.mutation || (this.mutation = new MutationObserver((t) => this.callback(t)), this.mutation.observe(document.body, {
      attributes: !1,
      attributeOldValue: !1,
      characterData: !1,
      characterDataOldValue: !1,
      childList: !0,
      subtree: !0
    })), this;
  }
  /**
   * Stop observing the DOM changes.<br>
   * Остановка наблюдения за изменениями DOM.
   */
  end() {
    return this.mutation && (this.mutation.disconnect(), this.mutation = void 0), this;
  }
  /**
   * A method for tracking changes.<br>
   * Метод для слежения за изменениями.
   * @param record an array of MutationRecord objects /<br>массив объектов MutationRecord
   */
  callback(t) {
    t.forEach((e) => {
      e.removedNodes.forEach((s) => this.removeCallback(s)), e.addedNodes.forEach((s) => this.addCallback(s));
    });
  }
}
class nn {
  /**
   * Constructor
   * @param items object for working with elements /<br>объект для работы с элементами
   * @param update function for updating data /<br>функция обновления данных
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    a(this, "mutation");
    this.items = t, this.update = e;
  }
  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start() {
    this.mutation && this.end();
    const t = this.items.get();
    if (t.length > 0) {
      this.mutation = new MutationObserver((e) => this.callback(e));
      for (const e of t)
        this.mutation.observe(e.getElement(), {
          attributes: !0,
          attributeOldValue: !1,
          characterData: !1,
          characterDataOldValue: !1,
          childList: !1,
          subtree: !1
        });
    }
    return this;
  }
  /**
   * Stop observing the DOM changes.<br>
   * Остановка наблюдения за изменениями DOM.
   */
  end() {
    return this.mutation && (this.mutation.disconnect(), this.mutation = void 0), this;
  }
  /**
   * A method for tracking changes.<br>
   * Метод для слежения за изменениями.
   * @param record an array of MutationRecord objects /<br>массив объектов MutationRecord
   */
  callback(t) {
    t.forEach((e) => {
      e.type === "attributes" && this.update(e.target);
    });
  }
}
class rn {
  /**
   * Constructor
   */
  constructor(t) {
    a(this, "mutationGlobal");
    a(this, "mutationItems");
    a(this, "items", new en());
    this.callback = t, this.mutationGlobal = new sn(
      (e) => this.add(e),
      (e) => this.remove(e)
    ), this.mutationItems = new nn(
      this.items,
      (e) => {
        var s;
        return (s = this.items.getItem(e)) == null ? void 0 : s.update();
      }
    );
  }
  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start() {
    return this.addList(), this.mutationGlobal.start(), this.mutationItems.start(), this;
  }
  /**
   * Termination of observation of changes.<br>
   * Прекращения наблюдения за изменения.
   */
  stop() {
    return this.mutationGlobal.end(), this;
  }
  /**
   * Adding an element and its child elements.<br>
   * Добавление элемента и его дочерних элементы.
   * @param element element for deletion /<br>элемент для удаления
   */
  add(t) {
    this.items.add(t), this.addList(t), this.callback(), this.mutationItems.start();
  }
  /**
   * Adding child elements.<br>
   * Добавления дочерних элементы.
   * @param initial initial element for search /<br>начальный элемент для поиска
   */
  addList(t = document.body) {
    $.find(t).forEach((e) => this.items.add(e));
  }
  /**
   * Removing an element and its child elements from the list.<br>
   * Удаление элемента и его дочерних элементов из списка.
   * @param element element for deletion /<br>элемент для удаления
   */
  remove(t) {
    this.items.remove(t), this.removeList(t), this.callback(), this.mutationItems.start();
  }
  /**
   * Removing child elements.<br>
   * Удаление дочерних элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   */
  removeList(t = document.body) {
    $.find(t, L.init).forEach((e) => this.items.remove(e));
  }
}
class an {
  /**
   * Constructor
   */
  constructor() {
    a(this, "mutation");
    a(this, "items", v([]));
    this.mutation = new rn(() => this.update()), ze(async () => {
      await Tt(), requestAnimationFrame(() => {
        this.mutation.start(), this.update();
      });
    }), Mt(() => this.mutation.stop());
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    return this.items.value = [...this.mutation.items.get()], this;
  }
}
class Be extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "mutation");
    this.mutation = new an(), this.init();
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
      items: this.mutation.items
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      items: this.setup().items
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
    const e = this.setup(), s = [];
    return this.components.is("item") && e.items.value.forEach((i) => {
      this.components.renderAdd(
        s,
        "item",
        { item: i },
        void 0,
        i.getId()
      );
    }), p("div", {
      ...this.getAttrs(),
      ref: this.element,
      class: e.classes.value.main
    }, s);
  }
}
class on {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element instance of the element itself /<br>экземпляр самого элемента
   */
  constructor(t, e) {
    a(this, "mainElement", document.body);
    a(this, "componentName", "div");
    a(this, "componentItem", v());
    a(this, "binds", v({}));
    a(this, "slots", v({}));
    var s;
    this.props = t, t.item && (this.mainElement = t.item.getElement(), this.componentName = t.item.getComponentName(), t.item.registration(e, () => this.update()), this.initComponentItem().then((i) => {
      this.componentItem.value = i;
    })), (s = t.item) == null || s.setStatus(L.end), this.update();
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    var e, s;
    const t = (e = this.props.item) == null ? void 0 : e.getSlots();
    return this.binds.value = { ...((s = this.props.item) == null ? void 0 : s.getProps()) ?? {} }, this.slots.value = t ? { ...t } : void 0, this;
  }
  /**
   * Returns a global object.<br>
   * Возвращает глобальный объект.
   */
  getComponentGlobalItem() {
    var t;
    return (t = R.getComponentGlobalItem(this.componentName)) == null ? void 0 : t.item;
  }
  /**
   * Initializes data for the component.<br>
   * Инициализирует данные для компонента.
   */
  async initComponentItem() {
    return new Promise((t) => {
      var s;
      const e = this.getComponentGlobalItem();
      if (e)
        t(e);
      else if ((s = this.props.item) != null && s.isLink()) {
        let i = 24;
        const r = setInterval(() => {
          if (console.log("repeat", this.componentName), i-- > 0) {
            const o = this.getComponentGlobalItem();
            o && (clearInterval(r), t(o));
          } else
            clearInterval(r), t(Nt(this.componentName));
        }, 64);
      } else
        t(Nt(this.componentName));
    });
  }
}
class Ie extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "mutation");
    this.mutation = new on(s, this.element), this.init();
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
      renderSlots: l(() => this.renderSlots())
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
    var s;
    const e = this.setup();
    if (e.componentItem.value)
      return p(te, {
        ref: this.element,
        class: (s = this.classes) == null ? void 0 : s.value.main,
        to: e.mainElement
      }, [
        p(
          e.componentItem.value,
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
    const e = this.setup(), s = {}, i = e.slots.value;
    return i && w(i, (r, o) => {
      const h = [];
      let c = !1;
      r.forEach((u) => {
        typeof u == "string" ? h.push(u) : h.push(p(
          u.tag,
          { ...u.attributes }
        ));
      }), s[o] = (u) => {
        var d, T;
        if (!c && u) {
          const A = h == null ? void 0 : h[0];
          A && "UI" in window && z(A) && ((d = A.props) != null && d["data-ui"]) && (window.UI.comp(
            (T = A.props) == null ? void 0 : T.id,
            u
          ), c = !0);
        }
        return h;
      };
    }), s;
  }
}
const xe = {
  item: Se
}, hn = {
  ...xe
}, Me = /* @__PURE__ */ m({
  name: "M3MutationItem",
  __name: "M3MutationItem",
  props: { ...hn },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mutationItem": !0
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Ie(
      "m3.mutationItem",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), Te = {
  disabled: Boolean
}, cn = {
  ...Te
}, ln = /* @__PURE__ */ m({
  name: "M3Mutation",
  __name: "M3Mutation",
  props: { ...cn },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mutation": !0
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Be(
      "m3.mutation",
      i,
      {
        emits: s,
        components: {
          item: Me
        },
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
});
class xt {
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
      const e = await this.init();
      return this.storage.set(e), e;
    }
    return t;
  }
  /**
   * Creates elements to check the width of the scroll.<br>
   * Создает элементы для проверки ширины скролла.
   */
  static createElement() {
    return ct(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", ct(t, "div", (e) => {
        e.style.height = "100px";
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
      const e = this.createElement();
      requestAnimationFrame(() => {
        t(e.offsetWidth - e.clientWidth), e.remove(), this.calculate = !1;
      });
    });
  }
}
a(xt, "storage", new Ze("scrollbar", !0)), a(xt, "calculate", !1);
const Gt = 8;
class un {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    a(this, "event");
    a(this, "top", !1);
    a(this, "bottom", !1);
    this.props = t, this.element = e, this.callback = s;
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
    return this.event ? this.event.start() : this.event = new ut(
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
  setData(t, e) {
    return (this.top !== t || this.bottom !== e) && (this.top = t, this.bottom = e, this.callback && this.callback()), this;
  }
  /**
   * Function for the event of monitoring scroll changes.<br>
   * Функция для события слежения за изменениями скролла.
   */
  on() {
    const t = this.element.value;
    t && this.setData(
      t.scrollTop > Gt,
      t.scrollTop < t.scrollHeight - t.clientHeight - Gt
    );
  }
}
class dn {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    a(this, "border");
    this.border = new un(
      t,
      e,
      s
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
    return await xt.is();
  }
}
class gn {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   */
  constructor(t, e) {
    a(this, "scrollbar");
    a(this, "classes", Xt({}));
    this.scrollbar = new dn(
      t,
      e,
      () => this.updateClasses().then()
    ), H(async () => {
      this.scrollbar.border.reset(), await this.updateClasses();
    }), We(async () => {
      await Tt(), requestAnimationFrame(() => this.scrollbar.border.toggle());
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
class pn extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "scrollbar");
    this.scrollbar = new gn(this.props, this.element), this.init();
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
    const e = this.setup(), s = [this.initSlot("default")];
    return p(this.props.tag, {
      ...this.getAttrs(),
      ref: this.element,
      class: e.classes.value.main
    }, s);
  }
}
const mn = {
  tag: "div"
}, fn = {
  tag: {
    type: String,
    default: mn.tag
  },
  // :prop [!] System label / Системная метка
  visible: Boolean,
  border: Boolean,
  inverse: Boolean
}, yn = {
  ...fn,
  // :prop [!] System label / Системная метка
  visible: Boolean,
  border: Boolean,
  inverse: Boolean
}, _e = /* @__PURE__ */ m({
  name: "M3Scrollbar",
  __name: "M3Scrollbar",
  props: { ...yn },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // TODO: User state classes / Пользовательские классы состояния
        // :classes-values [!] System label / Системная метка
        "m3-scrollbar": !0,
        "m3-scrollbar--visible": i.visible,
        "m3-scrollbar--border": i.border,
        "m3-scrollbar--inverse": i.inverse
        // :classes-values [!] System label / Системная метка
      }
      // TODO: User subclasses / Пользовательские подклассы
    })), o = l(() => ({
      // TODO: User styles / Пользовательские стили
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new pn(
      "m3.scrollbar",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
});
var M = /* @__PURE__ */ ((n) => (n.display = "display", n.preparation = "preparation", n.flash = "flash", n.open = "open", n.hide = "hide", n.close = "close", n))(M || {}), J = /* @__PURE__ */ ((n) => (n.block = "block", n.close = "close", n.static = "static", n.controlStatic = "controlStatic", n))(J || {}), Z = /* @__PURE__ */ ((n) => (n.top = "top", n.center = "center", n.bottom = "bottom", n))(Z || {});
class bn {
  constructor() {
    a(this, "status", M.close);
  }
  /**
   * Checks if the current status is closed (hide).<br>
   * Проверяет, является ли текущий статус закрытым (hide).
   */
  isHide() {
    return this.status === M.hide;
  }
  /**
   * Checks if the current status is open (open/flash).<br>
   * Проверяет, является ли текущий статус открытым (open/flash).
   */
  isOpen() {
    return this.status === M.open || this.status === M.flash;
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
    return this.set(M.display), this;
  }
  /**
   * Translates status to preparation.<br>
   * Переводит статус в preparation.
   */
  toPreparation() {
    return this.set(M.preparation), this;
  }
  /**
   * Translates status to flash.<br>
   * Переводит статус в flash.
   */
  toFlash() {
    return this.set(M.flash), this;
  }
  /**
   * Translates status to open.<br>
   * Переводит статус в open.
   */
  toOpen() {
    return this.set(M.open), this;
  }
  /**
   * Translates status to hide.<br>
   * Переводит статус в hide.
   */
  toHide() {
    return this.set(M.hide), this;
  }
  /**
   * Translates status to close.<br>
   * Переводит статус в close.
   */
  toClose() {
    return this.set(M.close), this;
  }
}
class vn {
  constructor() {
    a(this, "x", 0);
    a(this, "y", 0);
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
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  /**
   * Resets all data to initial values.<br>
   * Сбрасывает все данные к начальным значениям.
   */
  reset() {
    return this.x = 0, this.y = 0, this;
  }
}
class Cn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    a(this, "persistent", !1);
    this.props = t, this.callback = e;
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
class kn {
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
class wn {
  /**
   * Constructor
   * @param persistent object for working with the animation before turning off the window /<br>объект для работы с анимацией перед выключением окна
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   * @param classBodyContext class name for the context body /<br>название класса для тела контекста
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e = "is-window", s = "is-control", i = "is-body", r = "is-body-context") {
    /**
     * Identification of the current window. Used to search for the current component and its control.<br>
     * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
     */
    a(this, "id", `window--${_t()}`);
    this.persistent = t, this.className = e, this.classControl = s, this.classBody = i, this.classBodyContext = r;
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
    var e;
    if (t)
      return document.querySelector(`.${this.getClassControl()}.${(e = t.dataset) == null ? void 0 : e.window}`) ?? void 0;
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
class Sn {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   * @param element the element of the window itself /<br>элемент самого окна
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.classes = t, this.element = e;
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
class Bn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    a(this, "control", !1);
    this.props = t, this.classes = e;
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
    return this.is() || !!document.querySelector(`.${this.classes.getClassStatus(M.hide)}`);
  }
  /**
   * Change the value of the control parameter<br>
   * Изменить значение параметра control.
   * @param target the element that gets focus on click /<br>элемент, который получает фокус при клике
   */
  setControl(t) {
    var e;
    return this.control = ((e = t == null ? void 0 : t.closest(`.${this.classes.getClassControl()}`)) == null ? void 0 : e.dataset.window) === this.classes.getId(), this;
  }
}
class In {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    a(this, "top", 0);
    a(this, "right", 0);
    a(this, "bottom", 0);
    a(this, "left", 0);
    a(this, "width", 0);
    a(this, "height", 0);
    a(this, "innerWidth", 0);
    a(this, "innerHeight", 0);
    a(this, "padding", 0);
    a(this, "location", Z.center);
    this.classes = t, this.element = e;
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
    const t = this.element.getMain(), e = this.element.getControlRect();
    return t && e && (this.top !== e.top || this.right !== e.right || this.bottom !== e.bottom || this.left !== e.left || this.width !== t.offsetWidth || this.height !== t.offsetHeight || this.innerWidth !== window.innerWidth || this.innerHeight !== window.innerHeight) ? (this.top = e.top, this.right = e.right, this.bottom = e.bottom, this.left = e.left, this.width = t.offsetWidth, this.height = t.offsetHeight, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.padding = (window.innerHeight - this.getMaxHeight()) / 2, this.location = this.initLocation(e.top + e.height / 2), !0) : !1;
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
        return Z.top;
      case 2:
        return Z.bottom;
    }
    return Z.center;
  }
}
class xn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param coordinates object for working with coordinates /<br>объект для работы с координатами
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i) {
    a(this, "x", 0);
    a(this, "y", 0);
    this.props = t, this.client = e, this.element = s, this.coordinates = i;
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
    var e, s, i;
    const t = this.element.getBodyContext();
    if (this.isOver() && this.props.overElement && t && t.scrollHeight > t.offsetHeight) {
      const r = (e = Pt(this.props.overElement)) == null ? void 0 : e.getBoundingClientRect(), o = (s = this.element.getBody()) == null ? void 0 : s.getBoundingClientRect(), h = t == null ? void 0 : t.getBoundingClientRect(), c = (i = this.element.getControl()) == null ? void 0 : i.getBoundingClientRect();
      if (t && r && o && h) {
        const u = r.height / 2, d = r.top - h.top;
        if (c && this.coordinates.getMaxHeight() === o.height) {
          if (c.top + u < o.top) {
            t.scrollTop += d;
            return;
          }
          if (c.bottom - u > o.bottom) {
            t.scrollTop += d - h.height + r.height;
            return;
          }
          t.scrollTop += d - (c.top - h.top) - c.height / 2 + u;
          return;
        }
        t.scrollTop += d - h.height / 2 + u;
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
  getOverHeight(t, e) {
    var r, o;
    const s = (e - t) / 2;
    if (this.props.overElement) {
      const h = (r = Pt(this.props.overElement)) == null ? void 0 : r.getBoundingClientRect(), c = (o = this.element.getBody()) == null ? void 0 : o.getBoundingClientRect();
      if (h && c) {
        const u = h.top - c.top, d = h.height / 2;
        return e - u - d - s;
      }
    }
    const i = this.coordinates.getHeight() / 2;
    return e - s - i;
  }
  /**
   * Changes in position along the X coordinate.<br>
   * Изменения положения по координате X.
   */
  setX() {
    const t = this.element.getMain();
    if (t) {
      const e = this.getIndent("x"), s = this.props.contextmenu ? this.client.getX() : this.coordinates.getRight() + e, i = this.props.contextmenu ? this.client.getX() : this.coordinates.getLeft() - e, r = [];
      this.getAxis() === "x" ? r.push(s, i) : r.push(i, s), this.x = this.calculationInner(
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
      const e = this.getIndent("y"), s = this.props.contextmenu ? this.client.getY() : this.coordinates.getTop() - e, i = this.props.contextmenu ? this.client.getY() : this.coordinates.getBottom() + e, r = [];
      if (this.isOver())
        return this.y = this.calculationOver(
          this.getOverHeight(s, i),
          s,
          i,
          t.offsetHeight,
          window.innerHeight
        ), this;
      this.getAxis() !== "x" ? r.push(i, s) : r.push(s, i), this.y = this.calculationInner(
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
  calculationInner(t, e, s, i, r) {
    const o = this.coordinates.getPadding();
    return t + s <= i - o ? t : e - s > o ? e - s : i / 2 - r / 2;
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
  calculationOver(t, e, s, i, r) {
    const o = this.coordinates.getPadding();
    if (s < o)
      return s;
    if (e > r - o) {
      const h = e - i - o;
      return h < o ? o : h;
    }
    return t < o ? o : t + i <= r - o ? t : r - i - o;
  }
}
class Mn {
  /**
   * Constructor
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param position object for working with the position of the element /<br>объект для работы с положением элемента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    a(this, "x", null);
    a(this, "y", null);
    this.client = t, this.element = e, this.position = s;
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
      const e = this.element.getBodyRect();
      e && (this.x = this.client.getShiftX(e.left), this.y = this.client.getShiftY(e.top));
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
class Tn {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    a(this, "activity", !1);
    a(this, "event");
    this.props = t, this.element = e, this.callback = s;
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
    this.isStaticMod() ? !this.event && this.element.getMain() && (this.event = new ut(
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
class _n {
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
  constructor(t, e, s, i, r, o, h, c, u, d, T) {
    a(this, "open", !1);
    a(this, "first", !1);
    this.props = t, this.status = e, this.client = s, this.hook = i, this.element = r, this.flash = o, this.coordinates = h, this.position = c, this.origin = u, this.callback = d, this.callbackEmit = T;
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
    return ns(
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
class En {
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
  constructor(t, e, s, i, r, o, h) {
    a(this, "target");
    a(this, "focus");
    this.props = t, this.persistent = e, this.classes = s, this.element = i, this.staticMode = r, this.open = o, this.callback = h;
  }
  /**
   * Обновления статус открытия окно
   * @param target the selected window /<br>выбранное окно
   */
  async update(t) {
    this.target = t, this.focus = this.getFocus(), !this.staticMode.is() && (this.open.get() ? this.isContextmenu() ? (await this.open.reset().watchPosition(), await this.callback()) : this.focus === null ? await this.open.toggle() : this.isFocus() ? this.isTarget() ? this.persistent.on() || await this.open.toggle() : (this.isClose() || this.isAutoClose() || !this.isChildren()) && await this.open.toggle() : this.isNotBlock() && (this.isChildren() ? requestAnimationFrame(async () => {
      var e;
      ["open", "flash"].indexOf(((e = this.focus) == null ? void 0 : e.dataset.status) || "") === -1 && await this.open.toggle();
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
    const e = this.classes.findMain(t);
    return !!(e && (e.dataset.window === this.classes.getId() || this.isChildren(this.classes.findControlByElement(e))));
  }
  /**
   * Checks if the window is enabled or if the conditions for opening the window are met.<br>
   * Проверяет, включено ли окно или подходят ли условия для открытия окна.
   */
  isEnabled() {
    const t = this.classes.getSelectorStatusControl(J.controlStatic);
    return !this.props.disabled && !this.getTarget().closest(t);
  }
  /**
   * Checks if the window needs to be closed automatically.<br>
   * Проверяет, нужно ли автоматически закрывать окно.
   */
  isAutoClose() {
    const t = this.classes.getSelectorStatusControl(J.static);
    return !!this.props.autoClose && !this.getTarget().closest(`${t}, .${this.classes.getId()} .${this.classes.getClassControl()}`);
  }
  /**
   * Checks if the change of the opening status of the window is blocked.<br>
   * Проверяет, заблокировано ли изменение статуса открытия окна.
   */
  isNotBlock() {
    var e;
    const t = this.classes.getSelectorStatusControl(J.block);
    return !this.classes.isWindow(this.getTarget()) && !((e = this.classes.findControlByElement(this.focus)) != null && e.closest(t));
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
    const t = this.classes.getSelectorStatusControl(J.close), e = this.classes.getSelectorStatusControl(J.static);
    return !!this.getTarget().closest(`${t}:not(${e})`);
  }
}
class $n {
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
  constructor(t, e, s, i, r, o, h) {
    a(this, "event");
    this.props = t, this.status = e, this.client = s, this.persistent = i, this.flash = r, this.open = o, this.verification = h, this.event = new ut(
      "body",
      ["click", "contextmenu"],
      (c) => this.onGlobal(c)
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
      rs(t),
      as(t)
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
class Ln {
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
  constructor(t, e, s, i, r = "is-window", o = "is-control", h = "is-body", c = "is-body-context") {
    a(this, "status");
    a(this, "client");
    a(this, "persistent");
    a(this, "hook");
    a(this, "classes");
    a(this, "element");
    a(this, "flash");
    a(this, "coordinates");
    a(this, "position");
    a(this, "origin");
    a(this, "staticMode");
    a(this, "open");
    a(this, "verification");
    a(this, "event");
    this.status = new bn(), this.client = new vn(), this.persistent = new Cn(t, s), this.hook = new kn(t), this.classes = new wn(
      this.persistent,
      r,
      o,
      h,
      c
    ), this.element = new Sn(
      this.classes,
      e
    ), this.flash = new Bn(
      t,
      this.classes
    ), this.coordinates = new In(
      this.classes,
      this.element
    ), this.position = new xn(
      t,
      this.client,
      this.element,
      this.coordinates
    ), this.origin = new Mn(
      this.client,
      this.element,
      this.position
    ), this.staticMode = new Tn(
      t,
      this.element,
      s
    ), this.open = new _n(
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
        await s(), this.event.toggle();
      },
      () => i(this.getEmitOptions())
    ), this.verification = new En(
      t,
      this.persistent,
      this.classes,
      this.element,
      this.staticMode,
      this.open,
      s
    ), this.event = new $n(
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
class An {
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
  constructor(t, e, s, i = "is-window", r = "is-control", o = "is-body", h = "is-body-context") {
    a(this, "window");
    a(this, "status", v());
    a(this, "staticMode", v(!1));
    a(this, "inDom", v(!1));
    a(this, "open", v(!1));
    a(this, "classes", v({}));
    a(this, "styles", v({}));
    this.window = new Ln(
      t,
      e,
      async () => this.update(),
      s,
      i,
      r,
      o,
      h
    ), H(async () => await this.window.open.set(t.open)), H(async () => {
      this.window.update(), await this.update();
    }), Mt(() => this.window.stop());
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
    this.status.value = this.window.status.get(), this.staticMode.value = this.window.staticMode.is(), this.inDom.value = this.window.open.inDom(), this.open.value = this.window.open.get(), this.updateClasses(), await Tt();
  }
  /**
   * Updates the class values.<br>
   * Обновляет значения класса.
   */
  updateClasses() {
    return this.classes.value = this.window.getClasses(), this.styles.value = this.window.getStyles(), this;
  }
}
class On extends B {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "window");
    this.window = new An(
      this.props,
      this.element,
      (r) => {
        var o;
        return (o = this.emits) == null ? void 0 : o.call(this, "window", r);
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
        onclick: async (e) => await this.window.onClick(e),
        oncontextmenu: async (e) => this.window.onContextmenu(e)
      },
      setOpen: (e) => this.window.setOpen(e),
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
    const e = this.setup();
    return {
      id: e.id,
      open: e.open,
      setOpen: e.setOpen,
      toggle: e.toggle
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
    const e = this.setup(), s = [];
    if (this.initSlot("control", s, e.slotControl), e.inDom.value) {
      const i = [this.renderBody()];
      s.push(
        p(te, {
          key: "teleport",
          disabled: e.staticMode.value,
          to: "body"
        }, [
          p("div", {
            ...this.getAttrs(),
            key: "main",
            ref: this.element,
            class: e.classes.value.main,
            style: e.styles.value,
            "data-window": e.id,
            "data-status": e.status.value,
            onTransitionend: e.onTransition,
            onAnimationend: e.onPersistent
          }, i)
        ])
      );
    }
    return s;
  }
  /**
   * Render body element.<br>
   * Рендер элемента тела.
   */
  renderBody() {
    const e = this.setup(), s = [
      this.initSlot("title"),
      this.renderBodyContext(),
      this.initSlot("footer")
    ];
    return p("div", {
      key: "body",
      class: e.classes.value.body
    }, s);
  }
  /**
   * Render context element.<br>
   * Рендер элемента контекста.
   */
  renderBodyContext() {
    const e = this.setup(), s = () => this.initSlot("default"), i = {
      key: "bodyContext",
      class: e.classes.value.bodyContext
    };
    return this.components.renderOne("scrollbar", i, s) ?? p("div", i, s);
  }
}
const E = {
  axis: "y",
  indent: 4,
  // :default [!] System label / Системная метка
  overscroll: !0
}, Dn = {
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
    default: E == null ? void 0 : E.axis
  },
  indent: {
    type: Number,
    default: E == null ? void 0 : E.indent
  },
  persistent: Boolean,
  overElement: [String, Object],
  autoClose: Boolean,
  flash: Boolean,
  inDom: Boolean,
  // :prop [!] System label / Системная метка
  width: String,
  height: String,
  adaptive: String,
  overscroll: {
    type: Boolean,
    default: E == null ? void 0 : E.overscroll
  },
  dense: Boolean,
  fullscreen: Boolean,
  alignment: String,
  origin: String
}, K = {
  // :values [!] System label / Системная метка
  width: ["auto", "max", "sm", "md", "lg"],
  height: ["auto", "max", "sm", "md", "lg"],
  adaptive: ["menu", "modal", "modalDynamic", "static", "auto", "staticSm", "staticMd", "staticLg"],
  alignment: ["center", "top", "right", "bottom", "left"],
  origin: ["center", "top", "right", "bottom", "left", "topToBottom", "rightToLeft", "bottomToTop", "leftToRight"]
  // :values [!] System label / Системная метка
}, X = {
  ...E,
  // :default [!] System label / Системная метка
  adaptive: "auto",
  overscroll: !0
}, Fn = {
  ...Dn,
  // :prop [!] System label / Системная метка
  width: String,
  height: String,
  adaptive: {
    type: String,
    default: X == null ? void 0 : X.adaptive
  },
  overscroll: {
    type: Boolean,
    default: X == null ? void 0 : X.overscroll
  },
  dense: Boolean,
  fullscreen: Boolean,
  alignment: String,
  origin: String
}, Vn = /* @__PURE__ */ m({
  name: "M3Window",
  __name: "M3Window",
  props: { ...Fn },
  emits: ["window"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-window": !0,
        "m3-window--width--custom": k(i.width) && !g(K.width, i.width),
        [`m3-window--width--${i.width}`]: g(K.width, i.width),
        "m3-window--height--custom": k(i.height) && !g(K.height, i.height),
        [`m3-window--height--${i.height}`]: g(K.height, i.height),
        [`m3-window--adaptive--${i.adaptive}`]: g(K.adaptive, i.adaptive),
        "m3-window--overscroll": i.overscroll,
        "m3-window--dense": i.dense,
        "m3-window--fullscreen": i.fullscreen,
        [`m3-window--alignment--${i.alignment}`]: g(K.alignment, i.alignment),
        [`m3-window--origin--${i.origin}`]: g(K.origin, i.origin)
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      "m3-window-sys-width": i.width ?? null,
      "m3-window-sys-height": i.height ?? null
      // :styles-values [!] System label / Системная метка
    })), h = new On(
      "m3.window",
      i,
      {
        emits: s,
        components: {
          scrollbar: _e
        },
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), Nn = {
  ...mt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, Ee = /* @__PURE__ */ m({
  name: "C1Image",
  __name: "C1Image",
  props: { ...Nn },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-image": !0,
        "c1-image--turn": i.turn,
        "c1-image--disabled": i.disabled,
        "c1-image--hide": i.hide,
        "c1-image--adaptive": i.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new pt(
      "c1.image",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), St = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "full"],
  size: ["xs", "sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, F = {
  ...q,
  // :default [!] System label / Системная метка
  animationType: "type1",
  rounded: "md",
  size: "xs"
}, Rn = {
  ...gt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: F == null ? void 0 : F.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: {
    type: String,
    default: F == null ? void 0 : F.rounded
  },
  size: {
    type: String,
    default: F == null ? void 0 : F.size
  }
}, Hn = /* @__PURE__ */ m({
  name: "C1Icon",
  __name: "C1Icon",
  props: { ...Rn },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-icon": !0,
        "c1-icon--turn": i.turn,
        "c1-icon--disabled": i.disabled,
        "c1-icon--hide": i.hide,
        [`c1-icon--animationType--${i.animationType}`]: g(St.animationType, i.animationType),
        "c1-icon--animationShow": i.animationShow,
        "c1-icon--overlay": i.overlay,
        "c1-icon--dynamic": i.dynamic,
        "c1-icon--start": i.start,
        "c1-icon--end": i.end,
        "c1-icon--high": i.high,
        [`c1-icon--rounded--${i.rounded}`]: g(St.rounded, i.rounded),
        [`c1-icon--size--${i.size}`]: g(St.size, i.size)
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new dt(
      "c1.icon",
      i,
      {
        emits: s,
        components: {
          image: Ee
        },
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), Pn = {
  ...mt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, $e = /* @__PURE__ */ m({
  name: "C2Image",
  __name: "C2Image",
  props: { ...Pn },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-image": !0,
        "c2-image--turn": i.turn,
        "c2-image--disabled": i.disabled,
        "c2-image--hide": i.hide,
        "c2-image--adaptive": i.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new pt(
      "c2.image",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), nt = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  variation: ["icon", "payment", "avatar", "country"],
  shape: ["rect", "circle", "box"],
  size: ["12", "16", "20", "24", "32"]
  // :values [!] System label / Системная метка
}, x = {
  ...q,
  // :default [!] System label / Системная метка
  animationType: "type1",
  variation: "icon",
  shape: "box",
  size: "24"
}, jn = {
  ...gt,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: x == null ? void 0 : x.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  variation: {
    type: String,
    default: x == null ? void 0 : x.variation
  },
  shape: {
    type: String,
    default: x == null ? void 0 : x.shape
  },
  size: {
    type: String,
    default: x == null ? void 0 : x.size
  }
}, Le = /* @__PURE__ */ m({
  name: "C2Icon",
  __name: "C2Icon",
  props: { ...jn },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-icon": !0,
        "c2-icon--turn": i.turn,
        "c2-icon--disabled": i.disabled,
        "c2-icon--hide": i.hide,
        [`c2-icon--animationType--${i.animationType}`]: g(nt.animationType, i.animationType),
        "c2-icon--animationShow": i.animationShow,
        "c2-icon--overlay": i.overlay,
        "c2-icon--dynamic": i.dynamic,
        "c2-icon--start": i.start,
        "c2-icon--end": i.end,
        "c2-icon--high": i.high,
        [`c2-icon--variation--${i.variation}`]: g(nt.variation, i.variation),
        [`c2-icon--shape--${i.shape}`]: g(nt.shape, i.shape),
        [`c2-icon--size--${i.size}`]: g(nt.size, i.size)
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new dt(
      "c2.icon",
      i,
      {
        components: {
          image: $e
        },
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), Ut = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, V = {
  ...C,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type3",
  position: "top"
}, zn = {
  ...ye,
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: V == null ? void 0 : V.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: V == null ? void 0 : V.indeterminate
  },
  position: {
    type: String,
    default: V == null ? void 0 : V.position
  },
  dense: Boolean,
  inverse: Boolean
}, Ae = /* @__PURE__ */ m({
  name: "C2Progress",
  __name: "C2Progress",
  props: { ...zn },
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // TODO: User state classes / Пользовательские классы состояния
        // :classes-values [!] System label / Системная метка
        "c2-progress": !0,
        "c2-progress--linear": i.linear && !i.circular,
        "c2-progress--circular": i.circular,
        [`c2-progress--indeterminate--${i.indeterminate}`]: g(Ut.indeterminate, i.indeterminate),
        [`c2-progress--position--${i.position}`]: g(Ut.position, i.position),
        "c2-progress--dense": i.dense,
        "c2-progress--inverse": i.inverse
        // :classes-values [!] System label / Системная метка
      }
      // TODO: User subclasses / Пользовательские подклассы
    })), o = l(() => ({
      // TODO: User styles / Пользовательские стили
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new fe(
      "c2.progress",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), rt = {
  // :values [!] System label / Системная метка
  adaptive: ["icon"],
  size: ["xl", "lg", "md", "sm", "xs", "x"],
  intent: ["positive", "informative", "negative", "neutral", "default"],
  palette: ["carmine", "iris", "redfish", "goldenrod", "asparagus", "slate", "gray", "alpha", "pistachio", "mint", "jade", "teal", "celestial", "indigo", "orchid", "cerise"]
  // :values [!] System label / Системная метка
}, N = {
  ...et,
  // :default [!] System label / Системная метка
  size: "md",
  intent: "default",
  primary: !0
}, Wn = {
  ...me,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  size: {
    type: String,
    default: N == null ? void 0 : N.size
  },
  outline: Boolean,
  link: Boolean,
  intent: {
    type: String,
    default: N == null ? void 0 : N.intent
  },
  primary: {
    type: Boolean,
    default: N == null ? void 0 : N.primary
  },
  secondary: Boolean,
  ghost: Boolean,
  palette: String
}, Kn = /* @__PURE__ */ m({
  name: "C2Button",
  __name: "C2Button",
  props: { ...Wn },
  emits: ["click"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-button": !0,
        "c2-button--focus": i.focus,
        "c2-button--disabled": i.disabled,
        "c2-button--selected": i.selected,
        "c2-button--loading": i.loading,
        "c2-button--readonly": i.readonly,
        [`c2-button--adaptive--${i.adaptive}`]: g(rt.adaptive, i.adaptive),
        [`c2-button--size--${i.size}`]: g(rt.size, i.size),
        "c2-button--outline": i.outline,
        "c2-button--link": i.link,
        [`c2-button--intent--${i.intent}`]: g(rt.intent, i.intent),
        "c2-button--primary": i.primary && !i.outline && !i.link && !i.secondary && !i.ghost,
        "c2-button--secondary": i.secondary,
        "c2-button--ghost": i.ghost,
        [`c2-palette--${i.palette}`]: g(rt.palette, i.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Ot(
      "c2.button",
      i,
      {
        components: {
          icon: Le,
          progress: Ae
        },
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c), null, {
      default: Qt(() => [
        Zt(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Yn = {
  ...xe
}, Oe = /* @__PURE__ */ m({
  name: "C2MutationItem",
  __name: "C2MutationItem",
  props: { ...Yn },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-mutationItem": !0
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Ie(
      "c2.mutationItem",
      i,
      {
        emits: s,
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), qn = {
  ...Te
}, Gn = /* @__PURE__ */ m({
  name: "C2Mutation",
  __name: "C2Mutation",
  props: { ...qn },
  emits: ["load"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-mutation": !0
        // :classes-values [!] System label / Системная метка
      }
    })), o = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Be(
      "c2.mutation",
      i,
      {
        emits: s,
        components: {
          item: Oe
        },
        classes: r,
        styles: o
      }
    ), c = h.render();
    return t(h.expose()), (u, d) => (f(), y(b(c)));
  }
}), Un = {
  M2Icon: Ms,
  M2Image: oe,
  M2Ripple: $s,
  M3Button: js,
  M3Checkbox: gi,
  M3Chip: yi,
  M3FieldMessage: be,
  M3Icon: Ft,
  M3Image: Dt,
  M3Input: Ci,
  M3Mask: Qi,
  M3Mutation: ln,
  M3MutationItem: Me,
  M3Progress: Vt,
  M3Ripple: ve,
  M3Scrollbar: _e,
  M3Window: Vn,
  C1Icon: Hn,
  C1Image: Ee,
  C2Button: Kn,
  C2Icon: Le,
  C2Image: $e,
  C2Mutation: Gn,
  C2MutationItem: Oe,
  C2Progress: Ae
};
async function Xn(n) {
  await (await import("./media.js")).makeMediaGlobal(), w(Un, (t, e) => {
    n.component(e, t);
  });
}
async function sr(n) {
  const t = Ke(n);
  return await Xn(t), t;
}
export {
  it as K,
  R as M,
  sr as a,
  Un as c,
  Xn as r
};
