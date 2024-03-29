var V = Object.defineProperty;
var G = (i, t, e) => t in i ? V(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => (G(i, typeof t != "symbol" ? t + "" : t, e), e);
import { D as I, e as O, H as T, J as L, l as W, A as q, y as $, G as g, E as z, F as Y, f as E, x as U, C as j, I as _, a as tt, c as et, g as st, b as at, d as it, i as rt, h as nt, j as ht, k as ct, m as ot, n as ut, o as lt, p as gt, q as dt, r as mt, s as vt, t as ft, u as pt, v as yt, w as Ct, z as wt, B as kt } from "./Icons-vEJJDKoV.js";
import { E as Z, D as d, F as H, G as J, s as c, a as Lt, c as Et, f as Dt, g as It, b as Nt, d as St, e as bt, h as At, i as Ft, j as Mt, k as xt, l as $t, m as jt, n as Rt, o as Bt, p as Ot, q as Tt, r as Wt, t as qt, u as Ut, v as Kt, w as zt, x as Yt, y as Zt, z as Ht, A as Jt, B as Xt, C as Pt } from "./EventItem-TyHf2q46.js";
import { computed as n, ref as X, watch as u, triggerRef as Qt, shallowRef as C, watchEffect as Vt } from "vue";
class P {
  constructor() {
    r(this, "cache", {});
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  get(t, e, s) {
    return this.getCacheItem(t, e).getCache(s ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getAsync(t, e, s) {
    return await this.getCacheItem(t, e).getCacheAsync(s ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.<br>
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   */
  getCacheItem(t, e) {
    return t in this.cache || (this.cache[t] = new Z(e)), this.cache[t];
  }
}
const D = class D {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  static get(t, e, s) {
    return this.cache.get(t, e, s);
  }
};
r(D, "cache"), D.cache = new P();
let R = D;
const Gt = "cookie-block";
class K {
  /**
   * Obtaining status.<br>
   * Получение статуса.
   */
  static get() {
    return this.storage.get() ?? !1;
  }
  /**
   * Changing status.<br>
   * Изменение статуса.
   * @param value value to be changed /<br>значение, на которое будет изменен
   */
  static set(t) {
    this.storage.set(t);
  }
}
r(K, "storage", new I(Gt));
const k = {};
class Q {
  constructor(t) {
    r(this, "value");
    r(this, "options", {});
    if (this.name = t, t in b)
      return b[t];
    this.value = k == null ? void 0 : k[t], b[t] = this;
  }
  /**
   * Get data or update if none.<br>
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  get(t, e) {
    return this.value === void 0 && t && this.set(t, e), this.value;
  }
  /**
   * Updates cookie data.<br>
   * Обновляет данные cookie.
   * @param value value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  set(t, e) {
    this.value = O(t), Object.assign(this.options, e), this.update();
  }
  /**
   * Delete cookie data.<br>
   * Удаление данных из cookie.
   */
  remove() {
    this.set("");
  }
  /**
   * Returns cache time.<br>
   * Возвращает время кэширования.
   */
  getAge() {
    var t;
    return ((t = this.options) == null ? void 0 : t.age) ?? T("cache") ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  update() {
    var t, e;
    if (L() && !K.get()) {
      const s = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(s)}`,
        `max-age=${s === "" ? "-1" : this.getAge()}`,
        `SameSite=${((t = this.options) == null ? void 0 : t.sameSite) ?? "strict"}`,
        ...((e = this.options) == null ? void 0 : e.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  if (L())
    for (const t of document.cookie.split(";")) {
      const [e, s] = t.trim().split("=");
      e && W(s) && (k[e] = q(s));
    }
})();
const b = {};
class _t {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, e = "date", s = g.getLocation()) {
    r(this, "item");
    r(this, "type");
    r(this, "code");
    r(this, "date");
    r(this, "datetime");
    r(this, "year", n(() => this.date.value && this.datetime.getYear()));
    r(this, "month", n(() => this.date.value && this.datetime.getMonth()));
    r(this, "day", n(() => this.date.value && this.datetime.getDay()));
    r(this, "hour", n(() => this.date.value && this.datetime.getHour()));
    r(this, "minute", n(() => this.date.value && this.datetime.getMinute()));
    r(this, "second", n(() => this.date.value && this.datetime.getSecond()));
    this.item = d(t), this.type = d(e), this.code = d(s), this.date = X($(this.item.value)), this.datetime = new H(
      this.date.value,
      this.type.value,
      this.code.value
    ), u(this.item, (a) => {
      this.date.value = $(a);
    }), u(this.type, (a) => this.datetime.setType(a)), u(this.code, (a) => this.datetime.setCode(a)), u(this.date, (a) => this.datetime.setDate(a)), this.datetime.setWatch(() => Qt(this.date));
  }
  /**
   * Returns the basic data for the date.<br>
   * Возвращает основные данные для даты.
   */
  getItem() {
    return this.item;
  }
  /**
   * Returns a Date object.<br>
   * Возвращает объект Date.
   */
  getDate() {
    return this.date;
  }
  /**
   * Obtaining an object of the basic Datetime class.<br>
   * Получение объекта основного класса Datetime.
   */
  getDatetime() {
    return this.datetime;
  }
  /**
   * Returns the format of hours.<br>
   * Возвращает формат часов.
   */
  getHoursType() {
    return n(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return n(() => this.date.value && this.datetime.getFirstDayCode());
  }
  /**
   * The method returns the year of the specified date according to local time.<br>
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear() {
    return this.year;
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.<br>
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return this.month;
  }
  /**
   * The method returns the day of the month for the specified date according to local time.<br>
   * Метод возвращает день месяца указанной даты по местному времени.
   */
  getDay() {
    return this.day;
  }
  /**
   * The method returns the hour for the specified date, according to local time.<br>
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return this.hour;
  }
  /**
   * The method returns the minutes in the specified date according to local time.<br>
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return this.minute;
  }
  /**
   * The method returns the seconds in the specified date according to local time.<br>
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return this.second;
  }
  /**
   * Returns the last day of the week.<br>
   * Возвращает последний день недели.
   */
  getMaxDay() {
    return n(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(t = this.type.value, e) {
    return n(() => this.date.value && this.datetime.locale(t, e));
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(t = !0) {
    return n(() => this.date.value && this.datetime.standard(t));
  }
}
class te extends J {
  /**
   * Classes Constructor
   * @param elementSelector element /<br>элемент
   * @param elementSelectorControl control element /<br>элемент управления
   * @param type type /<br>тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs /<br>объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics /<br>объект options
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  constructor(t, e, s = ["click"], a, h, p) {
    const w = d(t), N = d(e);
    super(
      w.value,
      s,
      a,
      h,
      p
    ), N.value && this.setElementControl(N.value), u(w, (S) => this.setElement(S)), u(N, (S) => this.setElementControl(S));
  }
}
const o = class o {
  /**
   * Information about the current country.<br>
   * Информация об текущей стране.
   */
  static get() {
    return this.item;
  }
  /**
   * Current country.<br>
   * Текущая страна.
   */
  static getCountry() {
    return this.country;
  }
  /**
   * Current language.<br>
   * Текущий язык.
   */
  static getLanguage() {
    return this.language;
  }
  /**
   * Full format according to the standard.<br>
   * Полный формат согласно стандарту.
   */
  static getStandard() {
    return this.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  static getFirstDay() {
    return this.firstDay;
  }
  /**
   * Changes the data by the full code.<br>
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static set(t) {
    g.set(t, !0), this.item.value = g.getItem();
  }
};
r(o, "item", C(g.get())), r(o, "country", n(() => o.item.value.country)), r(o, "language", n(() => o.item.value.language)), r(o, "standard", n(() => o.item.value.standard)), r(o, "firstDay", n(() => o.item.value.firstDay));
let y = o;
class ee {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t = g.getLocation()) {
    r(this, "code");
    r(this, "flag");
    this.code = d(t), this.flag = new z(this.code.value), u(this.code, (e) => this.flag.setCode(e));
  }
  /**
   * Obtaining a reactive object with the country code.<br>
   * Получение реактивного объекта с кодом страны.
   */
  getCode() {
    return this.code;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get(t = this.code.value) {
    return n(() => this.flag.get(t));
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(t = this.code.value) {
    return n(() => {
      var e;
      return (e = this.flag.get(t)) == null ? void 0 : e.icon;
    });
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(t) {
    return n(() => this.flag.getList(t));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(t) {
    return n(() => this.flag.getNational(t));
  }
}
class se {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    r(this, "location");
    r(this, "intl");
    this.location = d(t), this.intl = n(() => new Y(this.location.value ?? y.getLanguage().value));
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, e) {
    return n(() => this.intl.value.display(c(t), e));
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(t, e) {
    return n(() => this.intl.value.languageName(c(t), e));
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(t, e) {
    return n(() => this.intl.value.countryName(c(t), e));
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(t, e) {
    return n(() => this.intl.value.number(c(t), e));
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    return n(() => this.intl.value.decimal());
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(t, e, s = !1) {
    return n(() => this.intl.value.currency(c(t), e, s));
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(t, e) {
    return n(() => this.intl.value.unit(c(t), e));
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return n(() => this.intl.value.percent(c(t), e));
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, e) {
    return n(() => this.intl.value.percentBy100(c(t), e));
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(t, e, s, a) {
    return n(() => this.intl.value.date(c(t), e, s, a));
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(t, e, s) {
    return n(() => this.intl.value.relative(c(t), e, s));
  }
  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.<br>
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param limit values that determine the output limit (values per day) /<br>
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day /<br>текущий день
   * @param relativeOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month /<br>представление месяца
   * @param type type of data format /<br>тип формата data
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  relativeLimit(t, e, s, a, h, p, w) {
    return n(() => this.intl.value.relativeLimit(
      c(t),
      e,
      s,
      a,
      h,
      p,
      w
    ));
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(t, e) {
    return n(() => this.intl.value.month(c(t), e));
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(t) {
    return n(() => this.intl.value.months(t));
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(t, e) {
    return n(() => this.intl.value.weekday(c(t), e));
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(t) {
    return n(() => this.intl.value.weekdays(t));
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(t) {
    return n(() => this.intl.value.time(c(t)));
  }
}
const v = class v {
  /**
   * Getting an object with information about the phone code and country.<br>
   * Получение объекта с информацией о телефонном коде и стране.
   * @param code country and language code /<br>код страны и языка
   */
  static get(t) {
    return this.list.find((e) => t === e.value);
  }
  /**
   * Getting information by phone.<br>
   * Получение информации по телефону.
   * @param phone phone number /<br>номер телефон
   */
  static getByPhone(t) {
    let e = this.map, s, a = "";
    return this.toNumber(t).forEach((h) => {
      a === "" && h in e ? (s = e[h], e = e[h].next) : a += h;
    }), {
      item: s,
      phone: a
    };
  }
  /**
   * We get an array from a list of all phone numbers.<br>
   * Получаем массив из списка всех телефонных кодов.
   */
  static getList() {
    return this.list;
  }
  /**
   * We get a map of a tree, sorted by its code.<br>
   * Получаем карту дерева, отсортированную по его коду.
   */
  static getMap() {
    return this.map;
  }
  /**
   * Convert to phone mask.<br>
   * Преобразовать в маску телефона.
   * @param phone phone number /<br>номер телефон
   * @param masks a mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  static toMask(t, e) {
    if (W(t) && Array.isArray(e) && e.length > 0) {
      const s = this.removeZero(t), a = s.length;
      for (const h of e)
        if (this.getUnnecessaryLength(h) === a)
          return this.toStandard(s, h);
    }
  }
  /**
   * Deletes the country code from the input number.<br>
   * Удаляет код страны по входному номеру.
   * @param phone phone number /<br>номер телефон
   */
  static removeZero(t) {
    return t.match(/^0/) ? t.replace(/^0/, "") : t.match(/^89/) ? t.replace(/^8/, "") : t;
  }
  /**
   * Deletes all characters that do not belong to the mask.<br>
   * Удаляет все символы, не относящиеся к маске.
   * @param mask A mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  static getUnnecessaryLength(t) {
    return t.replace(/[^*]+/ig, "").length;
  }
  /**
   * Creating a list for the map.<br>
   * Формирование списка для карты.
   */
  static makeList() {
    const t = E(g.getList(), (e) => {
      if (e != null && e.phoneMask)
        return {
          phone: (e == null ? void 0 : e.phoneCode) && parseInt(e.phoneCode) || void 0,
          mask: U(e.phoneMask),
          value: e.country
        };
    });
    this.list = t.sort((e, s) => e.phone - s.phone);
  }
  /**
   * Creating a map for search.<br>
   * Создание карты для поиска.
   */
  static makeMap() {
    this.list.forEach((t) => {
      t.mask.forEach((e) => {
        let s = this.map, a;
        this.toNumber(e).forEach((h) => {
          h in s || (s[h] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), a = s[h], s = s[h].next;
        }), a && (a.value === void 0 && (a.info = t, a.value = t.value), a.mask.push(e), a.maskFull.push(e.replace(/\d/ig, "*")), a.items.push(t));
      });
    });
  }
  /**
   * The method parses a string argument and returns a floating point number.<br>
   * Метод принимает строку в качестве аргумента и возвращает десятичное число.
   * @param value the value to parse /<br>текстовая строка
   */
  static toNumber(t) {
    return t.replace(/\D+/ig, "").split("");
  }
  /**
   * Converts the phone to a standard.<br>
   * Преобразовывает телефон в стандарт.
   * @param phone phone number /<br>номер телефон
   * @param mask a mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  static toStandard(t, e) {
    let s = 0;
    return e.replace(/\*/ig, () => t[s++]);
  }
};
r(v, "list", []), r(v, "map", {}), v.makeList(), v.makeMap();
let B = v;
const m = class m {
  /**
   * Get data from hash.<br>
   * Получение данных из хэша.
   * @param name variable names /<br>названия переменных
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   */
  static get(t, e) {
    return !(t in this.hash) && e && this.set(t, e), this.hash[t];
  }
  /**
   * Change data in hash.<br>
   * Изменение данных в хэше.
   * @param name variable names /<br>названия переменных
   * @param callback value or function to change data /<br>значение или функция для изменения данных
   */
  static set(t, e) {
    var a;
    const s = O(e);
    s !== ((a = this.hash) == null ? void 0 : a[t]) && (this.hash[t] = s, this.update());
  }
  /**
   * Adding an event when data is changed.<br>
   * Добавление события при изменении данных.
   * @param name variable names /<br>названия переменных
   * @param callback the function is called when the data is changed /<br>функция вызывается при изменении данных
   */
  static addWatch(t, e) {
    t in this.watch ? this.watch[t].push(e) : this.watch = { [t]: [e] };
  }
  /**
   * Obtaining data from the URL string.<br>
   * Получение данных из строки URL.
   */
  static getLocation() {
    const t = {};
    return L() && location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...e) => (t[e[1]] = q(e[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0;
    const t = E(
      this.hash,
      (e, s) => `${s}=${encodeURIComponent(String(e))}`
    );
    t.sort(), history.replaceState(null, "", `#${t.join(";")}`), requestAnimationFrame(() => {
      this.block = !1;
    });
  }
  /**
   * Update hash variable from URL string.<br>
   * Обновление переменной хэша из строки URL.
   */
  static reload() {
    if (!this.block) {
      const t = this.getLocation();
      this.makeWatch(t), this.hash = t;
    }
  }
  /**
   * Calling all functions whose data has changed.<br>
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data /<br>свежий данные
   */
  static makeWatch(t) {
    E(this.watch, (e, s) => {
      var a;
      ((a = this.hash) == null ? void 0 : a[s]) !== (t == null ? void 0 : t[s]) && e.forEach((h) => h(t[s]));
    });
  }
};
r(m, "hash", {}), r(m, "watch", {}), r(m, "block", !1), L() && (m.reload(), addEventListener("hashchange", () => m.reload()));
let f = m;
class l {
  /**
   * Getting the translation text by its code.<br>
   * Получение текста перевода по его коду.
   * @param name code name /<br>название кода
   */
  static async get(t) {
    var s;
    const e = this.getName(t);
    return e in this.data ? this.data[e] : (await this.add(t), ((s = this.data) == null ? void 0 : s[e]) ?? t);
  }
  /**
   * Getting the translation text by its code (Sync).<br>
   * Получение текста перевода по его коду (Sync).
   * @param name code name /<br>название кода
   */
  static getSync(t) {
    const e = this.getName(t);
    return e in this.data ? this.data[e] : t;
  }
  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static async getList(t) {
    return new Promise((e) => {
      const s = {};
      let a = 0;
      for (const h of t)
        this.get(h).then((p) => {
          s[h] = p, ++a >= t.length && e(s);
        });
    });
  }
  /**
   * Added a list of translated texts.<br>
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static add(t) {
    return new Promise((e) => {
      this.cache.push(...U(t)), this.resolveList.push(e), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.timeout = void 0, this.make().then(() => {
          this.resolveList.forEach((s) => s()), this.resolveList = [];
        });
      }, 160);
    });
  }
  /**
   * Getting the full title for translation.<br>
   * Получение полного названия для перевода.
   * @param name code name /<br>название кода
   */
  static getName(t) {
    return `${g.getLocation()}-${t}`;
  }
  /**
   * Getting the list of translations from the server.<br>
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const t = j.isLocalhost() ? this.urlLocalhost : this.url, e = await j.response({
      path: t,
      request: {
        list: this.cache
      }
    });
    return (e == null ? void 0 : e.data) ?? {};
  }
  /**
   * Adding translation data from the server.<br>
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    const t = await this.getResponse();
    this.cache.forEach((e) => {
      this.data[this.getName(e)] = (t == null ? void 0 : t[e]) ?? "";
    }), this.cache = [];
  }
}
r(l, "url", T("apiTranslate")), r(l, "urlLocalhost", "translate.json"), r(l, "data", {}), r(l, "cache", []), r(l, "resolveList", []), r(l, "timeout");
function ae(i, t, e) {
  if (i in A)
    return A[i];
  const s = new Q(i), a = X(s.get(t, e));
  return u(a, (h) => {
    s.set(h, e);
  }), A[i] = a, a;
}
const A = {};
function ie(i, t) {
  if (i in F)
    return F[i];
  const e = C(f.get(i, t));
  return u(e, (s) => f.set(i, s)), f.addWatch(i, (s) => {
    e.value = s;
  }), F[i] = e, e;
}
const F = {};
function re(i, t) {
  if (i in M)
    return M[i];
  const e = new I(i, !0), s = C(e.get(t));
  return u(s, (a) => e.set(a)), M[i] = s, s;
}
const M = {};
function ne(i, t, e) {
  if (i in x)
    return x[i];
  const s = new I(i), a = C(s.get(t, e));
  return u(a, (h) => s.set(h)), x[i] = a, a;
}
const x = {};
function he(i) {
  const t = C({});
  return Vt(async () => {
    y.getLanguage() && (t.value = await l.getList(i));
  }), t;
}
const ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: j,
  Cache: P,
  CacheItem: Z,
  CacheStatic: R,
  Cookie: Q,
  CookieBlock: K,
  DataStorage: I,
  Datetime: H,
  DatetimeRef: _t,
  EventItem: J,
  EventRef: te,
  Geo: g,
  GeoFlag: z,
  GeoFlagRef: ee,
  GeoIntl: Y,
  GeoIntlRef: se,
  GeoPhone: B,
  GeoRef: y,
  Hash: f,
  Icons: _,
  Translate: l,
  anyToString: Lt,
  arrFill: tt,
  copyObject: et,
  createElement: Et,
  executeFunction: O,
  forEach: E,
  frame: Dt,
  getAttributes: It,
  getBind: Nt,
  getBindRef: St,
  getClassName: bt,
  getClient: At,
  getClientX: Ft,
  getClientY: Mt,
  getClipboardData: xt,
  getColumn: st,
  getElement: $t,
  getElementId: jt,
  getElementItem: Rt,
  getElementOrWindow: Bt,
  getExp: Ot,
  getIndex: Tt,
  getKey: Wt,
  getMaxLength: at,
  getMinLength: it,
  getRef: c,
  inArray: rt,
  intersectKey: nt,
  isArray: ht,
  isDifferent: ct,
  isFilled: W,
  isFunction: ot,
  isInDom: qt,
  isIntegerBetween: ut,
  isNull: lt,
  isObject: gt,
  isObjectNotArray: dt,
  isSelected: mt,
  isSelectedByList: vt,
  isString: ft,
  isWindow: Ut,
  makeStopPropagation: Kt,
  random: pt,
  render: zt,
  replaceRecursive: yt,
  replaceTemplate: Yt,
  setElementItem: Zt,
  splice: Ct,
  strFill: Ht,
  toArray: U,
  toCamelCase: Jt,
  toCamelCaseFirst: Xt,
  toDate: $,
  toKebabCase: Pt,
  toNumber: wt,
  toRefItem: d,
  transformation: q,
  uniqueArray: kt,
  useCookieRef: ae,
  useEnv: T,
  useHashRef: ie,
  useSessionRef: re,
  useStorageRef: ne,
  useTranslateRef: he
}, Symbol.toStringTag, { value: "Module" }));
export {
  P as C,
  _t as D,
  te as E,
  ee as G,
  f as H,
  l as T,
  R as a,
  Q as b,
  K as c,
  se as d,
  B as e,
  y as f,
  ae as g,
  ie as h,
  re as i,
  ne as j,
  he as k,
  ge as u
};
