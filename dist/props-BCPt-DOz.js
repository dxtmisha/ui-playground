var w = Object.defineProperty;
var y = (s, t, e) => t in s ? w(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var a = (s, t, e) => (y(s, typeof t != "symbol" ? t + "" : t, e), e);
import { computed as g, shallowRef as l, watchEffect as f, onUnmounted as k, watch as I, h as S } from "vue";
import { D as z } from "./DesignConstructorAbstract-pYeoTVwY.js";
import { a as d, j as x, i as C } from "./object-Cv4Jn6-r.js";
import { D as v } from "./DesignAsyncAbstract-DzgDV4VG.js";
import { C as H } from "./CacheItem-J86vAm6_.js";
import { a as j, I as b } from "./Icons-DMQHsPhi.js";
import { t as m } from "./number-Bmx0fGP3.js";
import { b as W } from "./element-DOaDn3jQ.js";
import { E as A } from "./EventItem-4BdmI3V8.js";
var n = /* @__PURE__ */ ((s) => (s.file = "file", s.image = "image", s.color = "color", s.public = "public", s.filled = "filled", s.outlined = "outlined", s.round = "round", s.sharp = "sharp", s.twoTone = "two-tone", s.material = "material", s.icon = "icon", s))(n || {});
class E extends H {
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
        return n.file;
      if (t.match(/\//))
        return n.image;
      if (t.match(j))
        return n.icon;
      if (t.match(/^#/))
        return n.color;
      if (t.match(/^@/))
        return n.public;
      if (t.match(/^\$/))
        return n.material;
      const i = t.match(/^(filled|outlined|round|sharp|two-tone)-/);
      return i ? i[1] : b.is(t) ? n.public : n.material;
    }
  }
}
const B = 720;
class F {
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
        const i = new Image();
        i.onerror = () => e(void 0), i.onload = () => {
          e({
            image: i,
            src: this.getSRC(i, t),
            width: i.naturalWidth,
            height: i.naturalHeight
          });
        }, (async () => i.src = t instanceof File ? await this.getFileResult(t) : t)();
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
  static getSRC(t, e, i = B) {
    var r;
    if ((e instanceof File || e === void 0) && (t.naturalHeight > i || t.naturalWidth > i)) {
      const o = t.naturalWidth >= t.naturalHeight, c = (r = document.createElement("canvas")) == null ? void 0 : r.getContext("2d");
      return c ? (c.canvas.width = o ? i : t.naturalWidth / t.naturalHeight * i, c.canvas.height = o ? t.naturalHeight / t.naturalWidth * i : i, c.drawImage(t, 0, 0, c.canvas.width, c.canvas.height), c.canvas.toDataURL()) : "";
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
        const i = new FileReader();
        i.onload = () => e(typeof i.result == "string" ? i.result : ""), i.readAsDataURL(t);
      } else
        e("");
    });
  }
}
class M extends v {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type image type /<br>тип изображения
   * @param callback callback function upon successful image loading /<br>
   * функция обратного вызова при успешной загрузке изображения
   */
  constructor(e, i, r) {
    var o;
    super(e, r, ["value", "url"]);
    a(this, "item");
    this.type = i, (o = this.props) != null && o.value && this.make();
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
    var i, r;
    const e = (i = this.props) == null ? void 0 : i.value;
    if (e)
      switch (this.type.get()) {
        case n.image:
        case n.file:
          try {
            return await F.createImage(e);
          } catch {
            console.error(Image, e);
          }
          break;
        case n.public:
        case n.icon:
          if (d(e))
            return await b.get(e, (r = this.props) == null ? void 0 : r.url);
          break;
      }
  }
}
class O {
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
    return x(t) && t.length > 0 && t.length < 5;
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
class $ {
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
class R {
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
class u {
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
    const e = new R(t);
    return this.items.push(e), e;
  }
}
a(u, "items", []);
class h {
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
    const e = this.objects.findIndex((i) => i === t);
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
    this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event = new A(window, ["scroll-sync"], () => this.start()).start(), this.start());
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
    u.reset(), this.objectsAdaptive.forEach((t) => {
      const e = t.getElement();
      e && t.isVisible() && u.get(t.getGroup()).makeWidth(t.getWidth()).makeHeight(t.getHeight()).makeOffsetWidth(e.offsetWidth).makeOffsetHeight(e.offsetHeight);
    });
  }
  /**
   * Calculation of the basic scaling of an element without taking into account other elements.<br>
   * Вычисление базового масштабирования элемента без учета других элементов.
   */
  static makePercent() {
    u.isSize() && this.objectsAdaptive.forEach((t) => {
      const e = t.getElement(), i = u.get(t.getGroup());
      if (e) {
        const r = i.getWidth(), o = i.getHeight();
        t.setPercent(
          t.getWidth() * (r ? 1 / r : 0) * (i.getOffsetWidth() / e.offsetWidth),
          t.getHeight() * (o ? 1 / o : 0) * (i.getOffsetHeight() / e.offsetHeight)
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
    u.isSize() && this.objectsAdaptive.forEach((t) => {
      t.isVisible() && u.get(t.getGroup()).makeFactorMax(t.getFactor());
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
a(h, "objects", []), a(h, "objectsAdaptive", []), a(h, "cache", []), a(h, "event"), a(h, "time");
const D = "main", p = 256;
class G {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param data image data /<br>данные изображения
   * @param callback callback function when updating the image scale /<br>
   * функция обратного вызова при обновлении масштаба изображения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, i, r) {
    a(this, "percent", {
      width: 0,
      height: 0
    });
    a(this, "beyond", !1);
    a(this, "visible", !1);
    this.props = t, this.data = e, this.element = i, this.callback = r, this.reset();
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
    return ((t = this.props) == null ? void 0 : t.adaptiveGroup) ?? D;
  }
  /**
   * Returns the identifier of the element.<br>
   * Возвращает идентификатор элемента.
   */
  getId() {
    return W(this.element.value);
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
    return m(((t = this.props) == null ? void 0 : t.objectWidth) ?? 0);
  }
  /**
   * Returns the physical height of the object.<br>
   * Возвращает физическую высоту объекта.
   */
  getHeight() {
    var t;
    return m(((t = this.props) == null ? void 0 : t.objectHeight) ?? 0);
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
    const t = this.element.value, e = this.getSize(), i = this.getType();
    if (t) {
      if (i === "x" && e > t.offsetHeight)
        return t.offsetHeight / e;
      if (i === "y" && e > t.offsetWidth)
        return t.offsetWidth / e;
    }
    return 1;
  }
  /**
   * Returns values for the background-size property.<br>
   * Возвращает значения для свойства background-size.
   */
  getBackgroundSize() {
    const t = u.get(this.getGroup()).getFactorMax();
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
    this.is() ? h.add(this) : h.remove(this);
  }
  /**
   * Recalculate scaling for all active elements.<br>
   * Пересчитать масштабирование для всех активных элементов.
   */
  reset() {
    this.is() && (h.is(this) ? h.reset() : h.add(this));
  }
  /**
   * Removal of an element from the scaling list.<br>
   * Удаление элемента из списка для масштабирования.
   */
  remove() {
    this.is() && h.remove(this);
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
        const i = (e = this.element.value) == null ? void 0 : e.getBoundingClientRect();
        i && (this.beyond = !(i.bottom < 0 - p || i.top > window.innerHeight + p), this.visible = !(i.bottom < 0 || i.top > window.innerHeight));
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
class N {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param data image data /<br>данные изображения
   * @param coordinator object for working with coordinates /<br>объект для работы с координатами
   * @param adaptive an object for working with adapted scaling /<br>объект для работы с адаптированным масштабированием
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, i, r) {
    this.props = t, this.data = e, this.coordinator = i, this.adaptive = r;
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
    const i = this.data.getImage();
    return typeof i == "object" ? i.height < i.width ? `auto ${e}` : `${t} auto` : null;
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
    return t && C(t) ? t.toString().match(/%$/) ? this.getSize(t, t) : t.toString() : null;
  }
}
let P = class extends v {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param callback callback function on successful image update or data recalculation /<br>
   * функция обратного вызова при успешном обновлении картинки или при перерасчете данных
   */
  constructor(e, i, r) {
    super(e, r);
    a(this, "type");
    a(this, "data");
    a(this, "coordinator");
    a(this, "position");
    a(this, "adaptiveItem");
    a(this, "background");
    this.props = e, this.callback = r, this.type = new E(e), this.data = new M(e, this.type, () => {
      this.adaptiveItem.is() ? this.adaptiveItem.reset() : this.make(!0);
    }), this.coordinator = new O(e), this.position = new $(e, this.coordinator), this.adaptiveItem = new G(
      e,
      this.data,
      i,
      () => this.make(!0)
    ), this.background = new N(
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
    const e = this.type.get(), i = this.getValue();
    if (e && d(i) && [
      "filled",
      "outlined",
      "round",
      "sharp",
      "two-tone",
      "material"
    ].indexOf(e) !== -1)
      return i.replace(/^(filled|outlined|round|sharp|two-tone)-/, "");
  }
  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses() {
    const e = this.type.get(), i = {
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
        i["material-icons"] = !0;
        break;
    }
    return i;
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
    var i, r;
    const e = this.getValue();
    if (e)
      switch (this.type.get()) {
        case "file":
        case "image":
          return {
            "background-size": this.background.get(),
            "background-position-x": (i = this.position) == null ? void 0 : i.getX(),
            "background-position-y": (r = this.position) == null ? void 0 : r.getY()
          };
        case "icon":
          return { "background-image": this.background.getImage() };
        case "public":
          return { "mask-image": this.background.getImage() };
        case "color":
          if (d(e))
            return { "background-color": e };
      }
    return {};
  }
};
class _ {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   */
  constructor(t, e) {
    a(this, "item");
    a(this, "type", g(() => this.item.getType()));
    a(this, "data", l());
    a(this, "text", g(() => this.item.getText()));
    a(this, "classes", g(() => this.item.getClasses()));
    a(this, "styles", l());
    this.item = new P(
      t,
      e,
      (i) => {
        this.data.value = i.image, this.styles.value = i.styles;
      }
    ), f(() => this.item.data.make(!0)), f(() => this.item.updateAdaptive());
  }
  /**
   * Destructor
   */
  destructor() {
    this.item.destructor();
  }
}
class et extends z {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, i, r) {
    super(
      e,
      i,
      r
    );
    a(this, "image");
    this.image = new _(
      this.props,
      this.element
    ), this.init(), k(() => this.image.destructor()), I(
      this.image.data,
      (o) => {
        var c;
        return (c = this.emits) == null ? void 0 : c.call(this, "load", {
          type: this.image.type.value,
          image: o
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
    return S("span", {
      ref: this.element,
      class: e.classes.value.main,
      style: e.styles.value,
      translate: "no"
    }, e.text.value);
  }
}
const L = {
  adaptiveGroup: "basic"
}, it = {
  // Values
  value: [String, File],
  coordinator: Array,
  size: String,
  x: [String, Number],
  y: [String, Number],
  // Adaptive
  adaptiveGroup: {
    type: String,
    default: L.adaptiveGroup
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
};
export {
  et as I,
  it as p
};
