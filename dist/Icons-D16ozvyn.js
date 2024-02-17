var y = Object.defineProperty;
var $ = (r, t, a) => t in r ? y(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[t] = a;
var i = (r, t, a) => ($(r, typeof t != "symbol" ? t + "" : t, a), a);
import { a as L, k as d, f as g } from "./string-BEtu6Ook.js";
import { G as h } from "./CacheItem-CG-KsNyj.js";
import { u } from "./useEnv-YUBoiK5i.js";
class l {
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
  static getHeaders(t, a = "application/json;charset=UTF-8") {
    if (t !== null) {
      const s = { ...t || {} };
      return a && (s["Content-Type"] = a), s;
    }
  }
  /**
   * Getting the full path to the request script.<br>
   * Получение полного пути к скрипту запроса.
   * @param path path to the script /<br>путь к скрипту
   */
  static getUrl(t) {
    return `${this.isLocalhost() ? this.urlLocalhost : this.url}${t}`.replace("{locale}", h.getLocation()).replace("{country}", h.getCountry()).replace("{language}", h.getLanguage());
  }
  /**
   * Get access to a script by the name of the team.<br>
   * Получение к скрипту по названию команды.
   * @param command name of the team /<br>название команды
   */
  static getUrlByCommand(t) {
    return this.isLocalhost() ? `${this.urlCommand}/${t}.json` : `${this.urlCommand}/?command=${t}`;
  }
  /**
   * Getting data for the body.<br>
   * Получение данных для тела.
   * @param request this request /<br>данный запрос
   */
  static getBody(t) {
    if (L(t))
      return t instanceof FormData || d(t) ? t : JSON.stringify(t);
  }
  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
   */
  static async response(t) {
    return d(t) ? await this.fetch({
      path: t
    }) : await this.fetch(t);
  }
  /**
   * Execute a query by the name of the team.<br>
   * Выполнить запрос по названию команды.
   * @param command name of the team /<br>название команды
   * @param request query string or list of parameters /<br>строка запроса или список параметров
   */
  static async responseByCommand(t, a) {
    return await this.fetch({
      path: this.getUrlByCommand(t),
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
    path: t = "",
    method: a = "GET",
    request: s = void 0,
    headers: o = {},
    type: c = "application/json;charset=UTF-8",
    init: f = {}
  }) {
    try {
      const n = this.getHeaders(o, c), p = n && a === "GET" ? "POST" : a;
      return await (await fetch(this.getUrl(t), {
        ...f,
        method: p,
        headers: n,
        body: this.getBody(s)
      })).json();
    } catch (n) {
      console.error(n);
    }
    return {};
  }
}
i(l, "url", u("api", "/")), i(l, "urlLocalhost", `${u("BASE_URL", "/")}public/`), i(l, "urlCommand", "ui");
const e = class e {
  /**
   * Checks if the given icon is in the list of connected icons.<br>
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name /<br>название иконки
   */
  static is(t) {
    return t in this.icons || this.getName(t) in this.icons;
  }
  /**
   * Returns the icon by the name.<br>
   * Возвращает иконку по названию.
   * @param index icon name /<br>название иконки
   * @param url path to the storage location of the icon, if the icon does not exist /<br>
   * путь к месту хранения иконки, если иконка не существует
   */
  static async get(t, a = "") {
    var o, c;
    const s = ((o = this.icons) == null ? void 0 : o[this.getName(t)]) ?? ((c = this.icons) == null ? void 0 : c[t]) ?? `${t.replace(/^@/, a ?? this.url)}.svg`;
    return typeof s == "string" ? s : await s;
  }
  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return g(this.icons, (t, a) => a.replace(/^@/, ""));
  }
  /**
   * Adding custom icons.<br>
   * Добавление пользовательских иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static add(t, a) {
    this.icons[this.getName(t)] = a;
  }
  /**
   * Adding custom global icons.<br>
   * Добавление пользовательских глобальных иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static addGlobal(t, a) {
    this.icons[this.getName(t)] = `${this.urlGlobal}${a}`;
  }
  /**
   * Adding an icon by the list.<br>
   * Добавление иконки по списку.
   * @param list list of icons /<br>список иконки
   */
  static addByList(t) {
    g(t, (a, s) => this.add(s, a));
  }
  /**
   * Returns the icon name.<br>
   * Возвращает название иконки.
   * @param index icon name /<br>название иконки
   */
  static getName(t) {
    return `@${t}`;
  }
};
i(e, "icons", {}), i(e, "url", u("UI_PATH") ?? "/icons/"), i(e, "urlGlobal", `${l.isLocalhost(), ""}${e.url}`);
let m = e;
export {
  l as A,
  m as I
};
