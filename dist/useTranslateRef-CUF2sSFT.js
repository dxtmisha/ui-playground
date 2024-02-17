var Y = Object.defineProperty;
var $ = (l, t, a) => t in l ? Y(l, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[t] = a;
var i = (l, t, a) => ($(l, typeof t != "symbol" ? t + "" : t, a), a);
import { C as V, G as h } from "./CacheItem-CG-KsNyj.js";
import { computed as g, ref as O, watch as c, triggerRef as J, shallowRef as C, watchEffect as q } from "vue";
import { t as F, D as Q, G as P } from "./Datetime-C3OarrO4.js";
import { e as W, a as j, t as H, B as d, f as L, z as f, w as Z } from "./string-BEtu6Ook.js";
import { E as X } from "./EventItem-CzLiiCw2.js";
import { u as z } from "./useEnv-YUBoiK5i.js";
import { D as R } from "./DataStorage-D0F_KbgZ.js";
import { A as G } from "./Icons-D16ozvyn.js";
class _ {
  constructor() {
    i(this, "cache", {});
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  get(t, a, e) {
    return this.getCacheItem(t, a).getCache(e ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getAsync(t, a, e) {
    return await this.getCacheItem(t, a).getCacheAsync(e ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.<br>
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   */
  getCacheItem(t, a) {
    return t in this.cache || (this.cache[t] = new V(a)), this.cache[t];
  }
}
const w = class w {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  static get(t, a, e) {
    return this.cache.get(t, a, e);
  }
};
i(w, "cache"), w.cache = new _();
let K = w;
const tt = "cookie-block";
class x {
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
i(x, "storage", new R(tt));
const k = {};
class at {
  constructor(t) {
    i(this, "value");
    i(this, "options", {});
    if (this.name = t, t in A)
      return A[t];
    this.value = k == null ? void 0 : k[t], A[t] = this;
  }
  /**
   * Get data or update if none.<br>
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  get(t, a) {
    return this.value === void 0 && t && this.set(t, a), this.value;
  }
  /**
   * Updates cookie data.<br>
   * Обновляет данные cookie.
   * @param value value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  set(t, a) {
    this.value = W(t), Object.assign(this.options, a), this.update();
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
    return ((t = this.options) == null ? void 0 : t.age) ?? z("cache") ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  update() {
    var t, a;
    if (!x.get()) {
      const e = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(e)}`,
        `max-age=${e === "" ? "-1" : this.getAge()}`,
        `SameSite=${((t = this.options) == null ? void 0 : t.sameSite) ?? "strict"}`,
        ...((a = this.options) == null ? void 0 : a.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  for (const t of document.cookie.split(";")) {
    const [a, e] = t.trim().split("=");
    a && j(e) && (k[a] = H(e));
  }
})();
const A = {};
class ht {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, a = "date", e = h.getLocation()) {
    i(this, "item");
    i(this, "type");
    i(this, "code");
    i(this, "date");
    i(this, "datetime");
    i(this, "year", g(() => this.date.value && this.datetime.getYear()));
    i(this, "month", g(() => this.date.value && this.datetime.getMonth()));
    i(this, "day", g(() => this.date.value && this.datetime.getDay()));
    i(this, "hour", g(() => this.date.value && this.datetime.getHour()));
    i(this, "minute", g(() => this.date.value && this.datetime.getMinute()));
    i(this, "second", g(() => this.date.value && this.datetime.getSecond()));
    this.item = d(t), this.type = d(a), this.code = d(e), this.date = O(F(this.item.value)), this.datetime = new Q(
      this.date.value,
      this.type.value,
      this.code.value
    ), c(this.item, (s) => {
      this.date.value = F(s);
    }), c(this.type, (s) => this.datetime.setType(s)), c(this.code, (s) => this.datetime.setCode(s)), c(this.date, (s) => this.datetime.setDate(s)), this.datetime.setWatch(() => J(this.date));
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
    return g(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return g(() => this.date.value && this.datetime.getFirstDayCode());
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
    return g(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(t = this.type.value, a) {
    return g(() => this.date.value && this.datetime.locale(t, a));
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(t = !0) {
    return g(() => this.date.value && this.datetime.standard(t));
  }
}
class ot extends X {
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
  constructor(t, a, e = ["click"], s, r, p) {
    const M = d(t), N = d(a);
    super(
      M.value,
      e,
      s,
      r,
      p
    ), N.value && this.setElementControl(N.value), c(M, (E) => this.setElement(E)), c(N, (E) => this.setElementControl(E));
  }
}
const n = class n {
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
    h.set(t, !0), this.item.value = h.getItem();
  }
};
i(n, "item", C(h.get())), i(n, "country", g(() => n.item.value.country)), i(n, "language", g(() => n.item.value.language)), i(n, "standard", g(() => n.item.value.standard)), i(n, "firstDay", g(() => n.item.value.firstDay));
let S = n;
const m = class m {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t = h.getLocation()) {
    this.code = t;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get(t = this.code) {
    var e;
    const a = h.find(t);
    if (a) {
      const s = this.getCountry(a);
      return {
        language: this.getLanguage(a),
        country: s,
        standard: a.standard,
        icon: (e = m.flags) == null ? void 0 : e[a.country],
        label: s,
        value: a.country
      };
    }
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(t = this.code) {
    var a;
    return (a = this.get(t)) == null ? void 0 : a.icon;
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(t) {
    return L(this.getCodes(t), (a) => this.get(a));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(t) {
    return L(this.getList(t), (a) => {
      const e = new m(a.language).get(a.standard);
      return {
        ...a,
        nationalLanguage: e == null ? void 0 : e.language,
        nationalCountry: e == null ? void 0 : e.country
      };
    });
  }
  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode(t) {
    return this.code = t, this;
  }
  /**
   * Returns a special object for formatting.<br>
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new P(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.<br>
   * Возвращает список стран для получения данных.
   * @param codes country code /<br>код страны
   */
  getCodes(t) {
    return t ?? Object.keys(m.flags);
  }
  /**
   * Getting the name of the language.<br>
   * Получение названия языка.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getLanguage(t) {
    return this.getLocation().languageName(t.language);
  }
  /**
   * Getting the name of the country.<br>
   * Получение названия страны.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getCountry(t) {
    return this.getLocation().countryName(t.country);
  }
};
i(m, "flags", {
  AD: "@flag-ad",
  AE: "@flag-ae",
  AF: "@flag-af",
  AG: "@flag-ag",
  AI: "@flag-ai",
  AL: "@flag-al",
  AM: "@flag-am",
  AN: "@flag-an",
  AO: "@flag-ao",
  AQ: "@flag-aq",
  AR: "@flag-ar",
  AS: "@flag-as",
  AT: "@flag-at",
  AU: "@flag-au",
  AW: "@flag-aw",
  AX: "@flag-ax",
  AZ: "@flag-az",
  BA: "@flag-ba",
  BB: "@flag-bb",
  BD: "@flag-bd",
  BE: "@flag-be",
  BF: "@flag-bf",
  BG: "@flag-bg",
  BH: "@flag-bh",
  BI: "@flag-bi",
  BJ: "@flag-bj",
  BL: "@flag-bl",
  BM: "@flag-bm",
  BN: "@flag-bn",
  BO: "@flag-bo",
  BQ: "@flag-bq",
  BR: "@flag-br",
  BS: "@flag-bs",
  BT: "@flag-bt",
  BV: "@flag-bv",
  BW: "@flag-bw",
  BY: "@flag-by",
  BZ: "@flag-bz",
  CA: "@flag-ca",
  CC: "@flag-cc",
  CD: "@flag-cd",
  CF: "@flag-cf",
  CG: "@flag-cg",
  CH: "@flag-ch",
  CI: "@flag-ci",
  CK: "@flag-ck",
  CL: "@flag-cl",
  CM: "@flag-cm",
  CN: "@flag-cn",
  CO: "@flag-co",
  CR: "@flag-cr",
  CU: "@flag-cu",
  CV: "@flag-cv",
  CW: "@flag-cw",
  CX: "@flag-cx",
  CY: "@flag-cy",
  CZ: "@flag-cz",
  DE: "@flag-de",
  DJ: "@flag-dj",
  DK: "@flag-dk",
  DM: "@flag-dm",
  DO: "@flag-do",
  DZ: "@flag-dz",
  EC: "@flag-ec",
  EE: "@flag-ee",
  EG: "@flag-eg",
  EH: "@flag-eh",
  ER: "@flag-er",
  ES: "@flag-es",
  ET: "@flag-et",
  FI: "@flag-fi",
  FJ: "@flag-fj",
  FK: "@flag-fk",
  FM: "@flag-fm",
  FO: "@flag-fo",
  FR: "@flag-fr",
  GA: "@flag-ga",
  GB: "@flag-gb",
  GD: "@flag-gd",
  GE: "@flag-ge",
  GF: "@flag-gf",
  GG: "@flag-gg",
  GH: "@flag-gh",
  GI: "@flag-gi",
  GL: "@flag-gl",
  GM: "@flag-gm",
  GN: "@flag-gn",
  GP: "@flag-gp",
  GQ: "@flag-gq",
  GR: "@flag-gr",
  GT: "@flag-gt",
  GU: "@flag-gu",
  GW: "@flag-gw",
  GY: "@flag-gy",
  HK: "@flag-hk",
  HM: "@flag-hm",
  HN: "@flag-hn",
  HR: "@flag-hr",
  HT: "@flag-ht",
  HU: "@flag-hu",
  ID: "@flag-id",
  IE: "@flag-ie",
  IL: "@flag-il",
  IM: "@flag-im",
  IN: "@flag-in",
  IO: "@flag-io",
  IQ: "@flag-iq",
  IR: "@flag-ir",
  IS: "@flag-is",
  IT: "@flag-it",
  JE: "@flag-je",
  JM: "@flag-jm",
  JO: "@flag-jo",
  JP: "@flag-jp",
  KE: "@flag-ke",
  KG: "@flag-kg",
  KH: "@flag-kh",
  KI: "@flag-ki",
  KM: "@flag-km",
  KN: "@flag-kn",
  KP: "@flag-kp",
  KR: "@flag-kr",
  KW: "@flag-kw",
  KY: "@flag-ky",
  KZ: "@flag-kz",
  LA: "@flag-la",
  LB: "@flag-lb",
  LC: "@flag-lc",
  LI: "@flag-li",
  LK: "@flag-lk",
  LR: "@flag-lr",
  LS: "@flag-ls",
  LT: "@flag-lt",
  LU: "@flag-lu",
  LV: "@flag-lv",
  LY: "@flag-ly",
  MA: "@flag-ma",
  MC: "@flag-mc",
  MD: "@flag-md",
  ME: "@flag-me",
  MF: "@flag-mf",
  MG: "@flag-mg",
  MH: "@flag-mh",
  MK: "@flag-mk",
  ML: "@flag-ml",
  MM: "@flag-mm",
  MN: "@flag-mn",
  MO: "@flag-mo",
  MP: "@flag-mp",
  MQ: "@flag-mq",
  MR: "@flag-mr",
  MS: "@flag-ms",
  MT: "@flag-mt",
  MU: "@flag-mu",
  MV: "@flag-mv",
  MW: "@flag-mw",
  MX: "@flag-mx",
  MY: "@flag-my",
  MZ: "@flag-mz",
  NA: "@flag-na",
  NC: "@flag-nc",
  NE: "@flag-ne",
  NF: "@flag-nf",
  NG: "@flag-ng",
  NI: "@flag-ni",
  NL: "@flag-nl",
  NO: "@flag-no",
  NP: "@flag-np",
  NR: "@flag-nr",
  NU: "@flag-nu",
  NZ: "@flag-nz",
  OM: "@flag-om",
  PA: "@flag-pa",
  PE: "@flag-pe",
  PF: "@flag-pf",
  PG: "@flag-pg",
  PH: "@flag-ph",
  PK: "@flag-pk",
  PL: "@flag-pl",
  PM: "@flag-pm",
  PN: "@flag-pn",
  PR: "@flag-pr",
  PS: "@flag-ps",
  PT: "@flag-pt",
  PW: "@flag-pw",
  PY: "@flag-py",
  QA: "@flag-qa",
  RE: "@flag-re",
  RO: "@flag-ro",
  RS: "@flag-rs",
  RU: "@flag-ru",
  RW: "@flag-rw",
  SA: "@flag-sa",
  SB: "@flag-sb",
  SC: "@flag-sc",
  SD: "@flag-sd",
  SE: "@flag-se",
  SG: "@flag-sg",
  SH: "@flag-sh",
  SI: "@flag-si",
  SJ: "@flag-sj",
  SK: "@flag-sk",
  SL: "@flag-sl",
  SM: "@flag-sm",
  SN: "@flag-sn",
  SO: "@flag-so",
  SR: "@flag-sr",
  SS: "@flag-ss",
  ST: "@flag-st",
  SV: "@flag-sv",
  SX: "@flag-sx",
  SY: "@flag-sy",
  SZ: "@flag-sz",
  TC: "@flag-tc",
  TD: "@flag-td",
  TG: "@flag-tg",
  TH: "@flag-th",
  TJ: "@flag-tj",
  TK: "@flag-tk",
  TL: "@flag-tl",
  TM: "@flag-tm",
  TN: "@flag-tn",
  TO: "@flag-to",
  TR: "@flag-tr",
  TT: "@flag-tt",
  TV: "@flag-tv",
  TW: "@flag-tw",
  TZ: "@flag-tz",
  UA: "@flag-ua",
  UG: "@flag-ug",
  US: "@flag-us",
  UY: "@flag-uy",
  UZ: "@flag-uz",
  VA: "@flag-va",
  VC: "@flag-vc",
  VE: "@flag-ve",
  VG: "@flag-vg",
  VI: "@flag-vi",
  VN: "@flag-vn",
  VU: "@flag-vu",
  WF: "@flag-wf",
  WS: "@flag-ws",
  YE: "@flag-ye",
  YT: "@flag-yt",
  ZA: "@flag-za",
  ZM: "@flag-zm",
  ZW: "@flag-zw"
});
let B = m;
class ut {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t = h.getLocation()) {
    i(this, "code");
    i(this, "flag");
    this.code = d(t), this.flag = new B(this.code.value), c(this.code, (a) => this.flag.setCode(a));
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
    return g(() => this.flag.get(t));
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(t = this.code.value) {
    return g(() => {
      var a;
      return (a = this.flag.get(t)) == null ? void 0 : a.icon;
    });
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(t) {
    return g(() => this.flag.getList(t));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(t) {
    return g(() => this.flag.getNational(t));
  }
}
class dt {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    i(this, "location");
    i(this, "intl");
    this.location = d(t), this.intl = g(() => new P(this.location.value ?? S.getLanguage().value));
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, a) {
    return g(() => this.intl.value.display(f(t), a));
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(t, a) {
    return g(() => this.intl.value.languageName(f(t), a));
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(t, a) {
    return g(() => this.intl.value.countryName(f(t), a));
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(t, a) {
    return g(() => this.intl.value.number(f(t), a));
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    return g(() => this.intl.value.decimal());
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(t, a, e = !1) {
    return g(() => this.intl.value.currency(f(t), a, e));
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(t, a) {
    return g(() => this.intl.value.unit(f(t), a));
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(t, a) {
    return g(() => this.intl.value.percent(f(t), a));
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, a) {
    return g(() => this.intl.value.percentBy100(f(t), a));
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(t, a, e, s) {
    return g(() => this.intl.value.date(f(t), a, e, s));
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(t, a, e) {
    return g(() => this.intl.value.relative(f(t), a, e));
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
  relativeLimit(t, a, e, s, r, p, M) {
    return g(() => this.intl.value.relativeLimit(
      f(t),
      a,
      e,
      s,
      r,
      p,
      M
    ));
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(t, a) {
    return g(() => this.intl.value.month(f(t), a));
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(t) {
    return g(() => this.intl.value.months(t));
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(t, a) {
    return g(() => this.intl.value.weekday(f(t), a));
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(t) {
    return g(() => this.intl.value.weekdays(t));
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(t) {
    return g(() => this.intl.value.time(f(t)));
  }
}
const v = class v {
  /**
   * Getting an object with information about the phone code and country.<br>
   * Получение объекта с информацией о телефонном коде и стране.
   * @param code country and language code /<br>код страны и языка
   */
  static get(t) {
    return this.list.find((a) => t === a.value);
  }
  /**
   * Getting information by phone.<br>
   * Получение информации по телефону.
   * @param phone phone number /<br>номер телефон
   */
  static getByPhone(t) {
    let a = this.map, e, s = "";
    return this.toNumber(t).forEach((r) => {
      s === "" && r in a ? (e = a[r], a = a[r].next) : s += r;
    }), {
      item: e,
      phone: s
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
  static toMask(t, a) {
    if (j(t) && Array.isArray(a) && a.length > 0) {
      const e = this.removeZero(t), s = e.length;
      for (const r of a)
        if (this.getUnnecessaryLength(r) === s)
          return this.toStandard(e, r);
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
    const t = L(h.getList(), (a) => {
      if (a != null && a.phoneMask)
        return {
          phone: (a == null ? void 0 : a.phoneCode) && parseInt(a.phoneCode) || void 0,
          mask: Z(a.phoneMask),
          value: a.country
        };
    });
    this.list = t.sort((a, e) => a.phone - e.phone);
  }
  /**
   * Creating a map for search.<br>
   * Создание карты для поиска.
   */
  static makeMap() {
    this.list.forEach((t) => {
      t.mask.forEach((a) => {
        let e = this.map, s;
        this.toNumber(a).forEach((r) => {
          r in e || (e[r] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), s = e[r], e = e[r].next;
        }), s && (s.value === void 0 && (s.info = t, s.value = t.value), s.mask.push(a), s.maskFull.push(a.replace(/\d/ig, "*")), s.items.push(t));
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
  static toStandard(t, a) {
    let e = 0;
    return a.replace(/\*/ig, () => t[e++]);
  }
};
i(v, "list", []), i(v, "map", {}), v.makeList(), v.makeMap();
let U = v;
const u = class u {
  /**
   * Get data from hash.<br>
   * Получение данных из хэша.
   * @param name variable names /<br>названия переменных
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   */
  static get(t, a) {
    return !(t in this.hash) && a && this.set(t, a), this.hash[t];
  }
  /**
   * Change data in hash.<br>
   * Изменение данных в хэше.
   * @param name variable names /<br>названия переменных
   * @param callback value or function to change data /<br>значение или функция для изменения данных
   */
  static set(t, a) {
    var s;
    const e = W(a);
    e !== ((s = this.hash) == null ? void 0 : s[t]) && (this.hash[t] = e, this.update());
  }
  /**
   * Adding an event when data is changed.<br>
   * Добавление события при изменении данных.
   * @param name variable names /<br>названия переменных
   * @param callback the function is called when the data is changed /<br>функция вызывается при изменении данных
   */
  static addWatch(t, a) {
    t in this.watch ? this.watch[t].push(a) : this.watch = { [t]: [a] };
  }
  /**
   * Obtaining data from the URL string.<br>
   * Получение данных из строки URL.
   */
  static getLocation() {
    const t = {};
    return location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...a) => (t[a[1]] = H(a[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0;
    const t = L(
      this.hash,
      (a, e) => `${e}=${encodeURIComponent(String(a))}`
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
    L(this.watch, (a, e) => {
      var s;
      ((s = this.hash) == null ? void 0 : s[e]) !== (t == null ? void 0 : t[e]) && a.forEach((r) => r(t[e]));
    });
  }
};
i(u, "hash", {}), i(u, "watch", {}), i(u, "block", !1), u.reload(), addEventListener("hashchange", () => u.reload());
let y = u;
class o {
  /**
   * Getting the translation text by its code.<br>
   * Получение текста перевода по его коду.
   * @param name code name /<br>название кода
   */
  static async get(t) {
    var e;
    const a = this.getName(t);
    return a in this.data ? this.data[a] : (await this.add(t), ((e = this.data) == null ? void 0 : e[a]) ?? t);
  }
  /**
   * Getting the translation text by its code (Sync).<br>
   * Получение текста перевода по его коду (Sync).
   * @param name code name /<br>название кода
   */
  static getSync(t) {
    const a = this.getName(t);
    return a in this.data ? this.data[a] : t;
  }
  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static async getList(t) {
    return new Promise((a) => {
      const e = {};
      let s = 0;
      for (const r of t)
        this.get(r).then((p) => {
          e[r] = p, ++s >= t.length && a(e);
        });
    });
  }
  /**
   * Added a list of translated texts.<br>
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static add(t) {
    return new Promise((a) => {
      this.cache.push(...Z(t)), this.resolveList.push(a), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.timeout = void 0, this.make().then(() => {
          this.resolveList.forEach((e) => e()), this.resolveList = [];
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
    return `${h.getLocation()}-${t}`;
  }
  /**
   * Getting the list of translations from the server.<br>
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const t = G.isLocalhost() ? this.urlLocalhost : this.url, a = await G.response({
      path: t,
      request: {
        list: this.cache
      }
    });
    return (a == null ? void 0 : a.data) ?? {};
  }
  /**
   * Adding translation data from the server.<br>
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    const t = await this.getResponse();
    this.cache.forEach((a) => {
      this.data[this.getName(a)] = (t == null ? void 0 : t[a]) ?? "";
    }), this.cache = [];
  }
}
i(o, "url", z("apiTranslate")), i(o, "urlLocalhost", "translate.json"), i(o, "data", {}), i(o, "cache", []), i(o, "resolveList", []), i(o, "timeout");
function mt(l, t, a) {
  if (l in D)
    return D[l];
  const e = new at(l), s = O(e.get(t, a));
  return c(s, (r) => {
    e.set(r, a);
  }), D[l] = s, s;
}
const D = {};
function vt(l, t) {
  if (l in I)
    return I[l];
  const a = C(y.get(l, t));
  return c(a, (e) => y.set(l, e)), y.addWatch(l, (e) => {
    a.value = e;
  }), I[l] = a, a;
}
const I = {};
function pt(l, t) {
  if (l in b)
    return b[l];
  const a = new R(l, !0), e = C(a.get(t));
  return c(e, (s) => a.set(s)), b[l] = e, e;
}
const b = {};
function yt(l, t, a) {
  if (l in T)
    return T[l];
  const e = new R(l), s = C(e.get(t, a));
  return c(s, (r) => e.set(r)), T[l] = s, s;
}
const T = {};
function Lt(l) {
  const t = C({});
  return q(async () => {
    S.getLanguage() && (t.value = await o.getList(l));
  }), t;
}
export {
  _ as C,
  ht as D,
  ot as E,
  S as G,
  y as H,
  o as T,
  K as a,
  at as b,
  x as c,
  B as d,
  ut as e,
  dt as f,
  U as g,
  vt as h,
  pt as i,
  yt as j,
  Lt as k,
  mt as u
};
