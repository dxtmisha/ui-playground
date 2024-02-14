import { h as r } from "./DesignConstructorAbstract-BkPabKy_.js";
var t = { VITE_DESIGNS_MAIN: "m3", VITE_DESIGNS_GLOBAL: "UI", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const i = {
  api: {
    index: "UI_API_URL",
    value: "/api/"
  },
  apiTranslate: {
    index: "UI_API_TRANSLATE",
    value: "ui/?command=translate"
  },
  cache: {
    index: "UI_CACHE",
    value: 7 * 24 * 60 * 60
  },
  iconPath: {
    index: "UI_ICON_PATH",
    value: "/icons/"
  },
  language: {
    index: "UI_LANGUAGE",
    value: "en-GB"
  },
  prefix: {
    index: "UI_PREFIX",
    value: "ui-playground-"
  }
};
class s {
  /**
   * Constructor
   * @param index property name /<br>название свойства
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    this.index = e;
  }
  /**
   * Returns the values from the env environment.<br>
   * Возвращает значения из окружения env.
   * @param defaultValue default property value /<br>значение свойства по умолчанию
   */
  get(e) {
    try {
      if (import.meta) {
        const a = (t == null ? void 0 : t[this.getName()]) ?? (t == null ? void 0 : t[`VITE_${this.getName()}`]);
        if (a)
          return a;
      }
    } catch {
    }
    return r(
      e ?? this.getValue()
    );
  }
  /**
   * Getting a basic object with a key name and a default value.<br>
   * Получение базового объекта с названием ключа и значения по умолчанию.
   * @private
   */
  getBasic() {
    return i == null ? void 0 : i[this.index];
  }
  /**
   * Get the full key name in env.<br>
   * Получаем полное название ключа в env.
   */
  getName() {
    var e;
    return ((e = this.getBasic()) == null ? void 0 : e.index) ?? this.index;
  }
  /**
   * Gets values by its keys.<br>
   * Получает значения по его ключам.
   */
  getValue() {
    var e;
    return (e = this.getBasic()) == null ? void 0 : e.value;
  }
}
function c(n, e) {
  return new s(n).get(e);
}
export {
  c as u
};
