var W = Object.defineProperty;
var V = (i, l, c) => l in i ? W(i, l, { enumerable: !0, configurable: !0, writable: !0, value: c }) : i[l] = c;
var M = (i, l, c) => (V(i, typeof l != "symbol" ? l + "" : l, c), c);
import { C as X } from "./CacheItem-J86vAm6_.js";
import { computed as a, ref as G, watch as r, triggerRef as K, shallowRef as w, watchEffect as $ } from "vue";
import { G as z, t as Y, D as q, a as B } from "./Datetime-Bb2tzrOm.js";
import { a as O, k as Q, e as R, t as F, B as n, f as I, z as h, w as P } from "./string-BEtu6Ook.js";
import { E as _ } from "./EventItem-CzLiiCw2.js";
import { u as x } from "./useEnv-Cz0t6GQt.js";
import { D as U } from "./DataStorage-CS_uBVlg.js";
class g {
  /**
   * Is the server local.<br>
   * Является ли сервер локальный.
   */
  static isLocalhost() {
    return location.hostname === "localhost";
  }
  /**
   * Getting the header for the request.<br>
   * Получение заголовка для запроса.
   * @param value list of headers /<br>список заголовков
   * @param type type of request /<br>тип запроса
   */
  static getHeaders(l, c = "application/json;charset=UTF-8") {
    if (l !== null) {
      const e = { ...l || {} };
      return c && (e["Content-Type"] = c), e;
    }
  }
  /**
   * Getting the full path to the request script.<br>
   * Получение полного пути к скрипту запроса.
   * @param path path to the script /<br>путь к скрипту
   */
  static getUrl(l) {
    return `${this.isLocalhost() ? this.urlLocalhost : this.url}${l}`.replace("{locale}", z.getLocation()).replace("{country}", z.getCountry()).replace("{language}", z.getLanguage());
  }
  /**
   * Get access to a script by the name of the team.<br>
   * Получение к скрипту по названию команды.
   * @param command name of the team /<br>название команды
   */
  static getUrlByCommand(l) {
    return this.isLocalhost() ? `${this.urlCommand}/${l}.json` : `${this.urlCommand}/?command=${l}`;
  }
  /**
   * Getting data for the body.<br>
   * Получение данных для тела.
   * @param request this request /<br>данный запрос
   */
  static getBody(l) {
    if (O(l))
      return l instanceof FormData || Q(l) ? l : JSON.stringify(l);
  }
  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
   */
  static async response(l) {
    return Q(l) ? await this.fetch({
      path: l
    }) : await this.fetch(l);
  }
  /**
   * Execute a query by the name of the team.<br>
   * Выполнить запрос по названию команды.
   * @param command name of the team /<br>название команды
   * @param request query string or list of parameters /<br>строка запроса или список параметров
   */
  static async responseByCommand(l, c) {
    return await this.fetch({
      path: this.getUrlByCommand(l),
      ...c ?? {}
    });
  }
  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param path path to request /<br>путь к запрос
   * @param method method for request /<br>метод запрос
   * @param request body of the request /<br>тело запроса
   * @param auth enable authorization verification /<br>включить проверку на авторизацию
   * @param headers list of headers /<br>список заголовков
   * @param type type of request /<br>тип запроса
   * @param init additional parameters /<br>дополнительных параметров
   */
  static async fetch({
    path: l = "",
    method: c = "GET",
    request: e = void 0,
    headers: t = {},
    type: d = "application/json;charset=UTF-8",
    init: o = {}
  }) {
    try {
      const s = this.getHeaders(t, d), u = s && c === "GET" ? "POST" : c;
      return await (await fetch(this.getUrl(l), {
        ...o,
        method: u,
        headers: s,
        body: this.getBody(e)
      })).json();
    } catch (s) {
      console.error(s);
    }
    return {};
  }
}
M(g, "url", x("api", "/")), M(g, "urlLocalhost", `${x("BASE_URL", "/")}public/`), M(g, "urlCommand", "ui");
class l2 {
  constructor() {
    M(this, "cache", {});
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  get(l, c, e) {
    return this.getCacheItem(l, c).getCache(e ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getAsync(l, c, e) {
    return await this.getCacheItem(l, c).getCacheAsync(e ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.<br>
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   */
  getCacheItem(l, c) {
    return l in this.cache || (this.cache[l] = new X(c)), this.cache[l];
  }
}
const T = class T {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  static get(l, c, e) {
    return this.cache.get(l, c, e);
  }
};
M(T, "cache"), T.cache = new l2();
let H = T;
const c2 = "cookie-block";
class J {
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
  static set(l) {
    this.storage.set(l);
  }
}
M(J, "storage", new U(c2));
const D = {};
class e2 {
  constructor(l) {
    M(this, "value");
    M(this, "options", {});
    if (this.name = l, l in k)
      return k[l];
    this.value = D == null ? void 0 : D[l], k[l] = this;
  }
  /**
   * Get data or update if none.<br>
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  get(l, c) {
    return this.value === void 0 && l && this.set(l, c), this.value;
  }
  /**
   * Updates cookie data.<br>
   * Обновляет данные cookie.
   * @param value value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  set(l, c) {
    this.value = R(l), Object.assign(this.options, c), this.update();
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
    var l;
    return ((l = this.options) == null ? void 0 : l.age) ?? x("cache") ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  update() {
    var l, c;
    if (!J.get()) {
      const e = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(e)}`,
        `max-age=${e === "" ? "-1" : this.getAge()}`,
        `SameSite=${((l = this.options) == null ? void 0 : l.sameSite) ?? "strict"}`,
        ...((c = this.options) == null ? void 0 : c.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  for (const l of document.cookie.split(";")) {
    const [c, e] = l.trim().split("=");
    c && O(e) && (D[c] = F(e));
  }
})();
const k = {};
class B4 {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(l, c = "date", e = z.getLocation()) {
    M(this, "item");
    M(this, "type");
    M(this, "code");
    M(this, "date");
    M(this, "datetime");
    M(this, "year", a(() => this.date.value && this.datetime.getYear()));
    M(this, "month", a(() => this.date.value && this.datetime.getMonth()));
    M(this, "day", a(() => this.date.value && this.datetime.getDay()));
    M(this, "hour", a(() => this.date.value && this.datetime.getHour()));
    M(this, "minute", a(() => this.date.value && this.datetime.getMinute()));
    M(this, "second", a(() => this.date.value && this.datetime.getSecond()));
    this.item = n(l), this.type = n(c), this.code = n(e), this.date = G(Y(this.item.value)), this.datetime = new q(
      this.date.value,
      this.type.value,
      this.code.value
    ), r(this.item, (t) => {
      this.date.value = Y(t);
    }), r(this.type, (t) => this.datetime.setType(t)), r(this.code, (t) => this.datetime.setCode(t)), r(this.date, (t) => this.datetime.setDate(t)), this.datetime.setWatch(() => K(this.date));
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
    return a(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return a(() => this.date.value && this.datetime.getFirstDayCode());
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
    return a(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(l = this.type.value, c) {
    return a(() => this.date.value && this.datetime.locale(l, c));
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(l = !0) {
    return a(() => this.date.value && this.datetime.standard(l));
  }
}
class R4 extends _ {
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
  constructor(l, c, e = ["click"], t, d, o) {
    const s = n(l), u = n(c);
    super(
      s.value,
      e,
      t,
      d,
      o
    ), u.value && this.setElementControl(u.value), r(s, (S) => this.setElement(S)), r(u, (S) => this.setElementControl(S));
  }
}
const f = class f {
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
  static set(l) {
    z.set(l, !0), this.item.value = z.getItem();
  }
};
M(f, "item", w(z.get())), M(f, "country", a(() => f.item.value.country)), M(f, "language", a(() => f.item.value.language)), M(f, "standard", a(() => f.item.value.standard)), M(f, "firstDay", a(() => f.item.value.firstDay));
let y = f;
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(l = z.getLocation()) {
    this.code = l;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get(l = this.code) {
    var e;
    const c = z.find(l);
    if (c) {
      const t = this.getCountry(c);
      return {
        language: this.getLanguage(c),
        country: t,
        standard: c.standard,
        icon: (e = L.flags) == null ? void 0 : e[c.country],
        label: t,
        value: c.country
      };
    }
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(l = this.code) {
    var c;
    return (c = this.get(l)) == null ? void 0 : c.icon;
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(l) {
    return I(this.getCodes(l), (c) => this.get(c));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(l) {
    return I(this.getList(l), (c) => {
      const e = new L(c.language).get(c.standard);
      return {
        ...c,
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
  setCode(l) {
    return this.code = l, this;
  }
  /**
   * Returns a special object for formatting.<br>
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new B(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.<br>
   * Возвращает список стран для получения данных.
   * @param codes country code /<br>код страны
   */
  getCodes(l) {
    return l ?? Object.keys(L.flags);
  }
  /**
   * Getting the name of the language.<br>
   * Получение названия языка.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getLanguage(l) {
    return this.getLocation().languageName(l.language);
  }
  /**
   * Getting the name of the country.<br>
   * Получение названия страны.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getCountry(l) {
    return this.getLocation().countryName(l.country);
  }
};
M(L, "flags", {
  AD: t2,
  AE: M2,
  AF: i2,
  AG: a2,
  AI: d2,
  AL: h2,
  AM: z2,
  AN: f2,
  AO: r2,
  AQ: s2,
  AR: o2,
  AS: p2,
  AT: m2,
  AU: n2,
  AW: L2,
  AX: j2,
  AZ: u2,
  BA: g2,
  BB: N2,
  BD: I2,
  BE: w2,
  BF: D2,
  BG: x2,
  BH: y2,
  BI: T2,
  BJ: S2,
  BL: k2,
  BM: v2,
  BN: A2,
  BO: b2,
  BQ: E2,
  BR: C2,
  BS: O2,
  BT: U2,
  BV: Y2,
  BW: Q2,
  BY: H2,
  BZ: Z2,
  CA: G2,
  CC: B2,
  CD: R2,
  CF: F2,
  CG: P2,
  CH: J2,
  CI: W2,
  CK: V2,
  CL: X2,
  CM: K2,
  CN: $2,
  CO: q2,
  CR: _2,
  CU: l0,
  CV: c0,
  CW: e0,
  CX: t0,
  CY: M0,
  CZ: i0,
  DE: a0,
  DJ: d0,
  DK: h0,
  DM: z0,
  DO: f0,
  DZ: r0,
  EC: s0,
  EE: o0,
  EG: p0,
  EH: m0,
  ER: n0,
  ES: L0,
  ET: j0,
  FI: u0,
  FJ: g0,
  FK: N0,
  FM: I0,
  FO: w0,
  FR: D0,
  GA: x0,
  GB: y0,
  GD: T0,
  GE: S0,
  GF: k0,
  GG: v0,
  GH: A0,
  GI: b0,
  GL: E0,
  GM: C0,
  GN: O0,
  GP: U0,
  GQ: Y0,
  GR: Q0,
  GT: H0,
  GU: Z0,
  GW: G0,
  GY: B0,
  HK: R0,
  HM: F0,
  HN: P0,
  HR: J0,
  HT: W0,
  HU: V0,
  ID: X0,
  IE: K0,
  IL: $0,
  IM: q0,
  IN: _0,
  IO: l3,
  IQ: c3,
  IR: e3,
  IS: t3,
  IT: M3,
  JE: i3,
  JM: a3,
  JO: d3,
  JP: h3,
  KE: z3,
  KG: f3,
  KH: r3,
  KI: s3,
  KM: o3,
  KN: p3,
  KP: m3,
  KR: n3,
  KW: L3,
  KY: j3,
  KZ: u3,
  LA: g3,
  LB: N3,
  LC: I3,
  LI: w3,
  LK: D3,
  LR: x3,
  LS: y3,
  LT: T3,
  LU: S3,
  LV: k3,
  LY: v3,
  MA: A3,
  MC: b3,
  MD: E3,
  ME: C3,
  MF: O3,
  MG: U3,
  MH: Y3,
  MK: Q3,
  ML: H3,
  MM: Z3,
  MN: G3,
  MO: B3,
  MP: R3,
  MQ: F3,
  MR: P3,
  MS: J3,
  MT: W3,
  MU: V3,
  MV: X3,
  MW: K3,
  MX: $3,
  MY: q3,
  MZ: _3,
  NA: l1,
  NC: c1,
  NE: e1,
  NF: t1,
  NG: M1,
  NI: i1,
  NL: a1,
  NO: d1,
  NP: h1,
  NR: z1,
  NU: f1,
  NZ: r1,
  OM: s1,
  PA: o1,
  PE: p1,
  PF: m1,
  PG: n1,
  PH: L1,
  PK: j1,
  PL: u1,
  PM: g1,
  PN: N1,
  PR: I1,
  PS: w1,
  PT: D1,
  PW: x1,
  PY: y1,
  QA: T1,
  RE: S1,
  RO: k1,
  RS: v1,
  RU: A1,
  RW: b1,
  SA: E1,
  SB: C1,
  SC: O1,
  SD: U1,
  SE: Y1,
  SG: Q1,
  SH: H1,
  SI: Z1,
  SJ: G1,
  SK: B1,
  SL: R1,
  SM: F1,
  SN: P1,
  SO: J1,
  SR: W1,
  SS: V1,
  ST: X1,
  SV: K1,
  SX: $1,
  SY: q1,
  SZ: _1,
  TC: l4,
  TD: c4,
  TG: e4,
  TH: t4,
  TJ: M4,
  TK: i4,
  TL: a4,
  TM: d4,
  TN: h4,
  TO: z4,
  TR: f4,
  TT: r4,
  TV: s4,
  TW: o4,
  TZ: p4,
  UA: m4,
  UG: n4,
  US: L4,
  UY: j4,
  UZ: u4,
  VA: g4,
  VC: N4,
  VE: I4,
  VG: w4,
  VI: D4,
  VN: x4,
  VU: y4,
  WF: T4,
  WS: S4,
  YE: k4,
  YT: v4,
  ZA: A4,
  ZM: b4,
  ZW: E4
});
let C = L;
class F4 {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  constructor(l = z.getLocation()) {
    M(this, "code");
    M(this, "flag");
    this.code = n(l), this.flag = new C(this.code.value), r(this.code, (c) => this.flag.setCode(c));
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
  get(l = this.code.value) {
    return a(() => this.flag.get(l));
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(l = this.code.value) {
    return a(() => {
      var c;
      return (c = this.flag.get(l)) == null ? void 0 : c.icon;
    });
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(l) {
    return a(() => this.flag.getList(l));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(l) {
    return a(() => this.flag.getNational(l));
  }
}
class P4 {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(l) {
    M(this, "location");
    M(this, "intl");
    this.location = n(l), this.intl = a(() => new B(this.location.value ?? y.getLanguage().value));
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(l, c) {
    return a(() => this.intl.value.display(h(l), c));
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(l, c) {
    return a(() => this.intl.value.languageName(h(l), c));
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(l, c) {
    return a(() => this.intl.value.countryName(h(l), c));
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(l, c) {
    return a(() => this.intl.value.number(h(l), c));
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    return a(() => this.intl.value.decimal());
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(l, c, e = !1) {
    return a(() => this.intl.value.currency(h(l), c, e));
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(l, c) {
    return a(() => this.intl.value.unit(h(l), c));
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(l, c) {
    return a(() => this.intl.value.percent(h(l), c));
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(l, c) {
    return a(() => this.intl.value.percentBy100(h(l), c));
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(l, c, e, t) {
    return a(() => this.intl.value.date(h(l), c, e, t));
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(l, c, e) {
    return a(() => this.intl.value.relative(h(l), c, e));
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
  relativeLimit(l, c, e, t, d, o, s) {
    return a(() => this.intl.value.relativeLimit(
      h(l),
      c,
      e,
      t,
      d,
      o,
      s
    ));
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(l, c) {
    return a(() => this.intl.value.month(h(l), c));
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(l) {
    return a(() => this.intl.value.months(l));
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(l, c) {
    return a(() => this.intl.value.weekday(h(l), c));
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(l) {
    return a(() => this.intl.value.weekdays(l));
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(l) {
    return a(() => this.intl.value.time(h(l)));
  }
}
const j = class j {
  /**
   * Getting an object with information about the phone code and country.<br>
   * Получение объекта с информацией о телефонном коде и стране.
   * @param code country and language code /<br>код страны и языка
   */
  static get(l) {
    return this.list.find((c) => l === c.value);
  }
  /**
   * Getting information by phone.<br>
   * Получение информации по телефону.
   * @param phone phone number /<br>номер телефон
   */
  static getByPhone(l) {
    let c = this.map, e, t = "";
    return this.toNumber(l).forEach((d) => {
      t === "" && d in c ? (e = c[d], c = c[d].next) : t += d;
    }), {
      item: e,
      phone: t
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
  static toMask(l, c) {
    if (O(l) && Array.isArray(c) && c.length > 0) {
      const e = this.removeZero(l), t = e.length;
      for (const d of c)
        if (this.getUnnecessaryLength(d) === t)
          return this.toStandard(e, d);
    }
  }
  /**
   * Deletes the country code from the input number.<br>
   * Удаляет код страны по входному номеру.
   * @param phone phone number /<br>номер телефон
   */
  static removeZero(l) {
    return l.match(/^0/) ? l.replace(/^0/, "") : l.match(/^89/) ? l.replace(/^8/, "") : l;
  }
  /**
   * Deletes all characters that do not belong to the mask.<br>
   * Удаляет все символы, не относящиеся к маске.
   * @param mask A mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  static getUnnecessaryLength(l) {
    return l.replace(/[^*]+/ig, "").length;
  }
  /**
   * Creating a list for the map.<br>
   * Формирование списка для карты.
   */
  static makeList() {
    const l = I(z.getList(), (c) => {
      if (c != null && c.phoneMask)
        return {
          phone: (c == null ? void 0 : c.phoneCode) && parseInt(c.phoneCode) || void 0,
          mask: P(c.phoneMask),
          value: c.country
        };
    });
    this.list = l.sort((c, e) => c.phone - e.phone);
  }
  /**
   * Creating a map for search.<br>
   * Создание карты для поиска.
   */
  static makeMap() {
    this.list.forEach((l) => {
      l.mask.forEach((c) => {
        let e = this.map, t;
        this.toNumber(c).forEach((d) => {
          d in e || (e[d] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), t = e[d], e = e[d].next;
        }), t && (t.value === void 0 && (t.info = l, t.value = l.value), t.mask.push(c), t.maskFull.push(c.replace(/\d/ig, "*")), t.items.push(l));
      });
    });
  }
  /**
   * The method parses a string argument and returns a floating point number.<br>
   * Метод принимает строку в качестве аргумента и возвращает десятичное число.
   * @param value the value to parse /<br>текстовая строка
   */
  static toNumber(l) {
    return l.replace(/\D+/ig, "").split("");
  }
  /**
   * Converts the phone to a standard.<br>
   * Преобразовывает телефон в стандарт.
   * @param phone phone number /<br>номер телефон
   * @param mask a mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  static toStandard(l, c) {
    let e = 0;
    return c.replace(/\*/ig, () => l[e++]);
  }
};
M(j, "list", []), M(j, "map", {}), j.makeList(), j.makeMap();
let Z = j;
const m = class m {
  /**
   * Get data from hash.<br>
   * Получение данных из хэша.
   * @param name variable names /<br>названия переменных
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   */
  static get(l, c) {
    return !(l in this.hash) && c && this.set(l, c), this.hash[l];
  }
  /**
   * Change data in hash.<br>
   * Изменение данных в хэше.
   * @param name variable names /<br>названия переменных
   * @param callback value or function to change data /<br>значение или функция для изменения данных
   */
  static set(l, c) {
    var t;
    const e = R(c);
    e !== ((t = this.hash) == null ? void 0 : t[l]) && (this.hash[l] = e, this.update());
  }
  /**
   * Adding an event when data is changed.<br>
   * Добавление события при изменении данных.
   * @param name variable names /<br>названия переменных
   * @param callback the function is called when the data is changed /<br>функция вызывается при изменении данных
   */
  static addWatch(l, c) {
    l in this.watch ? this.watch[l].push(c) : this.watch = { [l]: [c] };
  }
  /**
   * Obtaining data from the URL string.<br>
   * Получение данных из строки URL.
   */
  static getLocation() {
    const l = {};
    return location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...c) => (l[c[1]] = F(c[2]), "")
    ), l;
  }
  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0;
    const l = I(
      this.hash,
      (c, e) => `${e}=${encodeURIComponent(String(c))}`
    );
    l.sort(), history.replaceState(null, "", `#${l.join(";")}`), requestAnimationFrame(() => {
      this.block = !1;
    });
  }
  /**
   * Update hash variable from URL string.<br>
   * Обновление переменной хэша из строки URL.
   */
  static reload() {
    if (!this.block) {
      const l = this.getLocation();
      this.makeWatch(l), this.hash = l;
    }
  }
  /**
   * Calling all functions whose data has changed.<br>
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data /<br>свежий данные
   */
  static makeWatch(l) {
    I(this.watch, (c, e) => {
      var t;
      ((t = this.hash) == null ? void 0 : t[e]) !== (l == null ? void 0 : l[e]) && c.forEach((d) => d(l[e]));
    });
  }
};
M(m, "hash", {}), M(m, "watch", {}), M(m, "block", !1), m.reload(), addEventListener("hashchange", () => m.reload());
let N = m;
class p {
  /**
   * Getting the translation text by its code.<br>
   * Получение текста перевода по его коду.
   * @param name code name /<br>название кода
   */
  static async get(l) {
    var e;
    const c = this.getName(l);
    return c in this.data ? this.data[c] : (await this.add(l), ((e = this.data) == null ? void 0 : e[c]) ?? l);
  }
  /**
   * Getting the translation text by its code (Sync).<br>
   * Получение текста перевода по его коду (Sync).
   * @param name code name /<br>название кода
   */
  static getSync(l) {
    const c = this.getName(l);
    return c in this.data ? this.data[c] : l;
  }
  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static async getList(l) {
    return new Promise((c) => {
      const e = {};
      let t = 0;
      for (const d of l)
        this.get(d).then((o) => {
          e[d] = o, ++t >= l.length && c(e);
        });
    });
  }
  /**
   * Added a list of translated texts.<br>
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static add(l) {
    return new Promise((c) => {
      this.cache.push(...P(l)), this.resolveList.push(c), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.timeout = void 0, this.make().then(() => {
          this.resolveList.forEach((e) => e()), this.resolveList = [];
        });
      }, 1e3);
    });
  }
  /**
   * Getting the full title for translation.<br>
   * Получение полного названия для перевода.
   * @param name code name /<br>название кода
   */
  static getName(l) {
    return `${z.getLocation()}-${l}`;
  }
  /**
   * Getting the list of translations from the server.<br>
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const l = g.isLocalhost() ? this.urlLocalhost : this.url, c = await g.response({
      path: l,
      request: {
        list: this.cache
      }
    });
    return (c == null ? void 0 : c.data) ?? {};
  }
  /**
   * Adding translation data from the server.<br>
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    const l = await this.getResponse();
    this.cache.forEach((c) => {
      this.data[this.getName(c)] = (l == null ? void 0 : l[c]) ?? "";
    }), this.cache = [];
  }
}
M(p, "url", x("apiTranslate")), M(p, "urlLocalhost", "translate.json"), M(p, "data", {}), M(p, "cache", []), M(p, "resolveList", []), M(p, "timeout");
function J4(i, l, c) {
  if (i in v)
    return v[i];
  const e = new e2(i), t = G(e.get(l, c));
  return r(t, (d) => {
    e.set(d, c);
  }), v[i] = t, t;
}
const v = {};
function W4(i, l) {
  if (i in A)
    return A[i];
  const c = w(N.get(i, l));
  return r(c, (e) => N.set(i, e)), N.addWatch(i, (e) => {
    c.value = e;
  }), A[i] = c, c;
}
const A = {};
function V4(i, l) {
  if (i in b)
    return b[i];
  const c = new U(i, !0), e = w(c.get(l));
  return r(e, (t) => c.set(t)), b[i] = e, e;
}
const b = {};
function X4(i, l, c) {
  if (i in E)
    return E[i];
  const e = new U(i), t = w(e.get(l, c));
  return r(t, (d) => e.set(d)), E[i] = t, t;
}
const E = {};
function K4(i) {
  const l = w({});
  return $(async () => {
    y.getLanguage() && (l.value = await p.getList(i));
  }), l;
}
export {
  g as A,
  l2 as C,
  B4 as D,
  R4 as E,
  y as G,
  N as H,
  p as T,
  H as a,
  e2 as b,
  J as c,
  C as d,
  F4 as e,
  P4 as f,
  Z as g,
  W4 as h,
  V4 as i,
  X4 as j,
  K4 as k,
  J4 as u
};