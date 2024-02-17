var M = Object.defineProperty;
var y = (n, $, a) => $ in n ? M(n, $, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[$] = a;
var i = (n, $, a) => (y(n, typeof $ != "symbol" ? $ + "" : $, a), a);
import { a as p, k as d, f as u } from "./object-DLpcn8Yy.js";
import { G as o, a as N } from "./GeoIntl-COEyZZH7.js";
import { u as m } from "./useEnv-o01b3-Ig.js";
class h {
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
  static getHeaders($, a = "application/json;charset=UTF-8") {
    if ($ !== null) {
      const s = { ...$ || {} };
      return a && (s["Content-Type"] = a), s;
    }
  }
  /**
   * Getting the full path to the request script.<br>
   * Получение полного пути к скрипту запроса.
   * @param path path to the script /<br>путь к скрипту
   */
  static getUrl($) {
    return `${this.isLocalhost() ? this.urlLocalhost : this.url}${$}`.replace("{locale}", o.getLocation()).replace("{country}", o.getCountry()).replace("{language}", o.getLanguage());
  }
  /**
   * Get access to a script by the name of the team.<br>
   * Получение к скрипту по названию команды.
   * @param command name of the team /<br>название команды
   */
  static getUrlByCommand($) {
    return this.isLocalhost() ? `${this.urlCommand}/${$}.json` : `${this.urlCommand}/?command=${$}`;
  }
  /**
   * Getting data for the body.<br>
   * Получение данных для тела.
   * @param request this request /<br>данный запрос
   */
  static getBody($) {
    if (p($))
      return $ instanceof FormData || d($) ? $ : JSON.stringify($);
  }
  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
   */
  static async response($) {
    return d($) ? await this.fetch({
      path: $
    }) : await this.fetch($);
  }
  /**
   * Execute a query by the name of the team.<br>
   * Выполнить запрос по названию команды.
   * @param command name of the team /<br>название команды
   * @param request query string or list of parameters /<br>строка запроса или список параметров
   */
  static async responseByCommand($, a) {
    return await this.fetch({
      path: this.getUrlByCommand($),
      ...a ?? {}
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
    path: $ = "",
    method: a = "GET",
    request: s = void 0,
    headers: e = {},
    type: l = "application/json;charset=UTF-8",
    init: L = {}
  }) {
    try {
      const g = this.getHeaders(e, l), G = g && a === "GET" ? "POST" : a;
      return await (await fetch(this.getUrl($), {
        ...L,
        method: G,
        headers: g,
        body: this.getBody(s)
      })).json();
    } catch (g) {
      console.error(g);
    }
    return {};
  }
}
i(h, "url", m("api", "/")), i(h, "urlLocalhost", `${m("BASE_URL", "/")}public/`), i(h, "urlCommand", "ui");
const t = "@flag", c = class c {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor($ = o.getLocation()) {
    this.code = $;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get($ = this.code) {
    var s;
    const a = o.find($);
    if (a) {
      const e = this.getCountry(a);
      return {
        language: this.getLanguage(a),
        country: e,
        standard: a.standard,
        icon: (s = c.flags) == null ? void 0 : s[a.country],
        label: e,
        value: a.country
      };
    }
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag($ = this.code) {
    var a;
    return (a = this.get($)) == null ? void 0 : a.icon;
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList($) {
    return u(this.getCodes($), (a) => this.get(a));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational($) {
    return u(this.getList($), (a) => {
      const s = new c(a.language).get(a.standard);
      return {
        ...a,
        nationalLanguage: s == null ? void 0 : s.language,
        nationalCountry: s == null ? void 0 : s.country
      };
    });
  }
  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode($) {
    return this.code = $, this;
  }
  /**
   * Returns a special object for formatting.<br>
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new N(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.<br>
   * Возвращает список стран для получения данных.
   * @param codes country code /<br>код страны
   */
  getCodes($) {
    return $ ?? Object.keys(c.flags);
  }
  /**
   * Getting the name of the language.<br>
   * Получение названия языка.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getLanguage($) {
    return this.getLocation().languageName($.language);
  }
  /**
   * Getting the name of the country.<br>
   * Получение названия страны.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getCountry($) {
    return this.getLocation().countryName($.country);
  }
};
i(c, "flags", {
  AD: `${t}-ad`,
  AE: `${t}-ae`,
  AF: `${t}-af`,
  AG: `${t}-ag`,
  AI: `${t}-ai`,
  AL: `${t}-al`,
  AM: `${t}-am`,
  AN: `${t}-an`,
  AO: `${t}-ao`,
  AQ: `${t}-aq`,
  AR: `${t}-ar`,
  AS: `${t}-as`,
  AT: `${t}-at`,
  AU: `${t}-au`,
  AW: `${t}-aw`,
  AX: `${t}-ax`,
  AZ: `${t}-az`,
  BA: `${t}-ba`,
  BB: `${t}-bb`,
  BD: `${t}-bd`,
  BE: `${t}-be`,
  BF: `${t}-bf`,
  BG: `${t}-bg`,
  BH: `${t}-bh`,
  BI: `${t}-bi`,
  BJ: `${t}-bj`,
  BL: `${t}-bl`,
  BM: `${t}-bm`,
  BN: `${t}-bn`,
  BO: `${t}-bo`,
  BQ: `${t}-bq`,
  BR: `${t}-br`,
  BS: `${t}-bs`,
  BT: `${t}-bt`,
  BV: `${t}-bv`,
  BW: `${t}-bw`,
  BY: `${t}-by`,
  BZ: `${t}-bz`,
  CA: `${t}-ca`,
  CC: `${t}-cc`,
  CD: `${t}-cd`,
  CF: `${t}-cf`,
  CG: `${t}-cg`,
  CH: `${t}-ch`,
  CI: `${t}-ci`,
  CK: `${t}-ck`,
  CL: `${t}-cl`,
  CM: `${t}-cm`,
  CN: `${t}-cn`,
  CO: `${t}-co`,
  CR: `${t}-cr`,
  CU: `${t}-cu`,
  CV: `${t}-cv`,
  CW: `${t}-cw`,
  CX: `${t}-cx`,
  CY: `${t}-cy`,
  CZ: `${t}-cz`,
  DE: `${t}-de`,
  DJ: `${t}-dj`,
  DK: `${t}-dk`,
  DM: `${t}-dm`,
  DO: `${t}-do`,
  DZ: `${t}-dz`,
  EC: `${t}-ec`,
  EE: `${t}-ee`,
  EG: `${t}-eg`,
  EH: `${t}-eh`,
  ER: `${t}-er`,
  ES: `${t}-es`,
  ET: `${t}-et`,
  FI: `${t}-fi`,
  FJ: `${t}-fj`,
  FK: `${t}-fk`,
  FM: `${t}-fm`,
  FO: `${t}-fo`,
  FR: `${t}-fr`,
  GA: `${t}-ga`,
  GB: `${t}-gb`,
  GD: `${t}-gd`,
  GE: `${t}-ge`,
  GF: `${t}-gf`,
  GG: `${t}-gg`,
  GH: `${t}-gh`,
  GI: `${t}-gi`,
  GL: `${t}-gl`,
  GM: `${t}-gm`,
  GN: `${t}-gn`,
  GP: `${t}-gp`,
  GQ: `${t}-gq`,
  GR: `${t}-gr`,
  GT: `${t}-gt`,
  GU: `${t}-gu`,
  GW: `${t}-gw`,
  GY: `${t}-gy`,
  HK: `${t}-hk`,
  HM: `${t}-hm`,
  HN: `${t}-hn`,
  HR: `${t}-hr`,
  HT: `${t}-ht`,
  HU: `${t}-hu`,
  ID: `${t}-id`,
  IE: `${t}-ie`,
  IL: `${t}-il`,
  IM: `${t}-im`,
  IN: `${t}-in`,
  IO: `${t}-io`,
  IQ: `${t}-iq`,
  IR: `${t}-ir`,
  IS: `${t}-is`,
  IT: `${t}-it`,
  JE: `${t}-je`,
  JM: `${t}-jm`,
  JO: `${t}-jo`,
  JP: `${t}-jp`,
  KE: `${t}-ke`,
  KG: `${t}-kg`,
  KH: `${t}-kh`,
  KI: `${t}-ki`,
  KM: `${t}-km`,
  KN: `${t}-kn`,
  KP: `${t}-kp`,
  KR: `${t}-kr`,
  KW: `${t}-kw`,
  KY: `${t}-ky`,
  KZ: `${t}-kz`,
  LA: `${t}-la`,
  LB: `${t}-lb`,
  LC: `${t}-lc`,
  LI: `${t}-li`,
  LK: `${t}-lk`,
  LR: `${t}-lr`,
  LS: `${t}-ls`,
  LT: `${t}-lt`,
  LU: `${t}-lu`,
  LV: `${t}-lv`,
  LY: `${t}-ly`,
  MA: `${t}-ma`,
  MC: `${t}-mc`,
  MD: `${t}-md`,
  ME: `${t}-me`,
  MF: `${t}-mf`,
  MG: `${t}-mg`,
  MH: `${t}-mh`,
  MK: `${t}-mk`,
  ML: `${t}-ml`,
  MM: `${t}-mm`,
  MN: `${t}-mn`,
  MO: `${t}-mo`,
  MP: `${t}-mp`,
  MQ: `${t}-mq`,
  MR: `${t}-mr`,
  MS: `${t}-ms`,
  MT: `${t}-mt`,
  MU: `${t}-mu`,
  MV: `${t}-mv`,
  MW: `${t}-mw`,
  MX: `${t}-mx`,
  MY: `${t}-my`,
  MZ: `${t}-mz`,
  NA: `${t}-na`,
  NC: `${t}-nc`,
  NE: `${t}-ne`,
  NF: `${t}-nf`,
  NG: `${t}-ng`,
  NI: `${t}-ni`,
  NL: `${t}-nl`,
  NO: `${t}-no`,
  NP: `${t}-np`,
  NR: `${t}-nr`,
  NU: `${t}-nu`,
  NZ: `${t}-nz`,
  OM: `${t}-om`,
  PA: `${t}-pa`,
  PE: `${t}-pe`,
  PF: `${t}-pf`,
  PG: `${t}-pg`,
  PH: `${t}-ph`,
  PK: `${t}-pk`,
  PL: `${t}-pl`,
  PM: `${t}-pm`,
  PN: `${t}-pn`,
  PR: `${t}-pr`,
  PS: `${t}-ps`,
  PT: `${t}-pt`,
  PW: `${t}-pw`,
  PY: `${t}-py`,
  QA: `${t}-qa`,
  RE: `${t}-re`,
  RO: `${t}-ro`,
  RS: `${t}-rs`,
  RU: `${t}-ru`,
  RW: `${t}-rw`,
  SA: `${t}-sa`,
  SB: `${t}-sb`,
  SC: `${t}-sc`,
  SD: `${t}-sd`,
  SE: `${t}-se`,
  SG: `${t}-sg`,
  SH: `${t}-sh`,
  SI: `${t}-si`,
  SJ: `${t}-sj`,
  SK: `${t}-sk`,
  SL: `${t}-sl`,
  SM: `${t}-sm`,
  SN: `${t}-sn`,
  SO: `${t}-so`,
  SR: `${t}-sr`,
  SS: `${t}-ss`,
  ST: `${t}-st`,
  SV: `${t}-sv`,
  SX: `${t}-sx`,
  SY: `${t}-sy`,
  SZ: `${t}-sz`,
  TC: `${t}-tc`,
  TD: `${t}-td`,
  TG: `${t}-tg`,
  TH: `${t}-th`,
  TJ: `${t}-tj`,
  TK: `${t}-tk`,
  TL: `${t}-tl`,
  TM: `${t}-tm`,
  TN: `${t}-tn`,
  TO: `${t}-to`,
  TR: `${t}-tr`,
  TT: `${t}-tt`,
  TV: `${t}-tv`,
  TW: `${t}-tw`,
  TZ: `${t}-tz`,
  UA: `${t}-ua`,
  UG: `${t}-ug`,
  US: `${t}-us`,
  UY: `${t}-uy`,
  UZ: `${t}-uz`,
  VA: `${t}-va`,
  VC: `${t}-vc`,
  VE: `${t}-ve`,
  VG: `${t}-vg`,
  VI: `${t}-vi`,
  VN: `${t}-vn`,
  VU: `${t}-vu`,
  WF: `${t}-wf`,
  WS: `${t}-ws`,
  YE: `${t}-ye`,
  YT: `${t}-yt`,
  ZA: `${t}-za`,
  ZM: `${t}-zm`,
  ZW: `${t}-zw`
});
let f = c;
const r = class r {
  /**
   * Checks if the given icon is in the list of connected icons.<br>
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name /<br>название иконки
   */
  static is($) {
    return $ in this.icons || this.getName($) in this.icons;
  }
  /**
   * Returns the icon by the name.<br>
   * Возвращает иконку по названию.
   * @param index icon name /<br>название иконки
   * @param url path to the storage location of the icon, if the icon does not exist /<br>
   * путь к месту хранения иконки, если иконка не существует
   */
  static async get($, a = "") {
    var e, l;
    this.isFlag($) && await this.makeFlags();
    const s = ((e = this.icons) == null ? void 0 : e[this.getName($)]) ?? ((l = this.icons) == null ? void 0 : l[$]) ?? `${$.replace(/^@/, a ?? this.url)}.svg`;
    return typeof s == "string" ? s : await s;
  }
  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return u(this.icons, ($, a) => a.replace(/^@/, ""));
  }
  /**
   * Adding custom icons.<br>
   * Добавление пользовательских иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static add($, a) {
    this.icons[this.getName($)] = a;
  }
  /**
   * Adding custom global icons.<br>
   * Добавление пользовательских глобальных иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static addGlobal($, a) {
    this.icons[this.getName($)] = `${this.urlGlobal}${a}`;
  }
  /**
   * Adding an icon by the list.<br>
   * Добавление иконки по списку.
   * @param list list of icons /<br>список иконки
   */
  static addByList($) {
    u($, (a, s) => this.add(s, a));
  }
  /**
   * Checks if the icon is a flag.<br>
   * Проверяет, является ли иконка флагом.
   * @param index icon name /<br>название иконки
   */
  static isFlag($) {
    return !!$.match(t);
  }
  /**
   * Returns the icon name.<br>
   * Возвращает название иконки.
   * @param index icon name /<br>название иконки
   */
  static getName($) {
    return `@${$}`;
  }
  /**
   * Connecting flag icons.<br>
   * Подключение иконок флагов.
   */
  static makeFlags() {
    return new Promise(($) => {
      switch (this.flags) {
        case "init":
          this.makeFlagsWait($);
          break;
        case "none":
          this.flags = "init", import("./flags-qCws0bX7.js").then((a) => {
            a.makeFlagsGlobal(), this.flags = "read", $();
          });
          break;
      }
    });
  }
  static makeFlagsWait($) {
    const a = setInterval(() => {
      this.flags === "read" && (clearInterval(a), $());
    }, 64);
  }
};
i(r, "icons", {}), i(r, "url", m("UI_PATH") ?? "/icons/"), i(r, "urlGlobal", `${h.isLocalhost(), ""}${r.url}`), i(r, "flags", "none");
let C = r;
export {
  h as A,
  f as G,
  C as I,
  t as a
};
