var n = Object.defineProperty;
var o = (s, e, t) => e in s ? n(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => (o(s, typeof e != "symbol" ? e + "" : e, t), t);
import { e as u, c as g } from "./data-DjQiFeY2.js";
import { u as l } from "./useEnv-Cv-RoeJ-.js";
class d {
  /**
   * Constructor
   * @param name value name /<br>название значения
   * @param isSession should we use a session? /<br>использовать ли сессию?
   */
  constructor(e, t = !1) {
    r(this, "value");
    r(this, "age");
    this.name = e, this.isSession = t;
    const i = `${t ? "session" : "storage"}#${e}`;
    if (i in h)
      return h[i];
    const a = this.getValue();
    a && (this.value = a.value, this.age = a.age), h[i] = this;
  }
  /**
   * Getting data from local storage.<br>
   * Получение данных из локального хранилища.
   * @param defaultValue default value /<br>значение по умолчанию
   * @param cache cache time /<br>время кэширования
   */
  get(e, t) {
    if (this.value && this.isCache(t))
      return this.value;
    if (e)
      return this.set(e);
  }
  /**
   * Changing data in storage.<br>
   * Изменение данных в хранилище.
   * @param value new values /<br>новые значения
   */
  set(e) {
    var t, i;
    return this.value = u(e), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (t = this.getMethod()) == null || t.removeItem(this.getIndex()) : (i = this.getMethod()) == null || i.setItem(this.getIndex(), JSON.stringify({
      value: this.value,
      age: this.age
    })), this.value;
  }
  /**
   * Checks for storage time limit.<br>
   * Проверяет на лимит времени хранения.
   * @param cache cache time /<br>время кэширования
   */
  isCache(e) {
    return g(e) || this.age && this.age + e * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${l("prefix", "")}${this.name}`;
  }
  /**
   * Getting data from storage.<br>
   * Получение данных из хранилища.
   */
  getValue() {
    var t;
    const e = (t = this.getMethod()) == null ? void 0 : t.getItem(this.getIndex());
    if (e)
      try {
        return JSON.parse(e);
      } catch {
      }
  }
}
const h = {};
export {
  d as D
};
