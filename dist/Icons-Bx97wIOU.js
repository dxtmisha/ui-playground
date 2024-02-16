var h = Object.defineProperty;
var u = (i, t, s) => t in i ? h(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var c = (i, t, s) => (u(i, typeof t != "symbol" ? t + "" : t, s), s);
import { f as n } from "./string-BEtu6Ook.js";
import { u as m } from "./useEnv-Cz0t6GQt.js";
class o {
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
  static async get(t, s = "") {
    var r, e;
    const a = ((r = this.icons) == null ? void 0 : r[this.getName(t)]) ?? ((e = this.icons) == null ? void 0 : e[t]) ?? `${t.replace(/^@/, s ?? this.url)}.svg`;
    return typeof a == "string" ? a : await a;
  }
  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return n(this.icons, (t, s) => s.replace(/^@/, ""));
  }
  /**
   * Adding custom icons.<br>
   * Добавление пользовательских иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static add(t, s) {
    this.icons[this.getName(t)] = s;
  }
  /**
   * Adding an icon by the list.<br>
   * Добавление иконки по списку.
   * @param list list of icons /<br>список иконки
   */
  static addByList(t) {
    n(t, (s, a) => this.add(a, s));
  }
  /**
   * Returns the icon name.<br>
   * Возвращает название иконки.
   * @param index icon name /<br>название иконки
   */
  static getName(t) {
    return `@${t}`;
  }
}
c(o, "icons", {}), c(o, "url", m("iconPath") ?? "/icons/");
export {
  o as I
};
