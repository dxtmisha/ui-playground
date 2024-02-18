import { g as r } from "./object-Cv4Jn6-r.js";
var e = { VITE_DESIGNS_MAIN: "m3", VITE_DESIGNS_GLOBAL: "UI", VITE_UI_GIT: "git+https://github.com/dxtmisha/ui-playground.git", VITE_UI_WEB: "https://ru.dev2.coralclub.app", VITE_UI_PATH: "/ui/", VITE_UI_API_TRANSLATE: "restApi/uiTranslate", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
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
  constructor(t) {
    this.index = t;
  }
  /**
   * Returns the values from the env environment.<br>
   * Возвращает значения из окружения env.
   * @param defaultValue default property value /<br>значение свойства по умолчанию
   */
  get(t) {
    try {
      if (import.meta) {
        const a = (e == null ? void 0 : e[this.getName()]) ?? (e == null ? void 0 : e[`VITE_${this.getName()}`]);
        if (a)
          return a;
      }
    } catch {
    }
    return r(
      t ?? this.getValue()
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
    var t;
    return ((t = this.getBasic()) == null ? void 0 : t.index) ?? this.index;
  }
  /**
   * Gets values by its keys.<br>
   * Получает значения по его ключам.
   */
  getValue() {
    var t;
    return (t = this.getBasic()) == null ? void 0 : t.value;
  }
}
function I(n, t) {
  return new s(n).get(t);
}
export {
  I as u
};
