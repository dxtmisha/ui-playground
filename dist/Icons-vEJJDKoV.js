var R = Object.defineProperty;
var v = (o, e, a) => e in o ? R(o, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[e] = a;
var g = (o, e, a) => (v(o, typeof e != "symbol" ? e + "" : e, a), a);
function S(o) {
  return o == null;
}
function h(o) {
  return !!(o && typeof o == "object");
}
function Q(o) {
  return h(o) && !Array.isArray(o);
}
function X(o) {
  return Array.isArray(o);
}
function N(o) {
  return typeof o == "string";
}
function O(o) {
  return o instanceof Function || typeof o == "function";
}
function K(o) {
  if (o)
    switch (typeof o) {
      case "bigint":
      case "number":
        return o !== 0;
      case "boolean":
        return o;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(o) ? o.length > 0 : Object.values(o).some((e) => !S(e));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(o);
      case "undefined":
        return !1;
      default:
        return !!o;
    }
  return !1;
}
function B(o, e) {
  return S(o) ? !1 : Array.isArray(e) ? e.includes(o) : o === e;
}
function q(o, e) {
  return Array.isArray(o) ? o.every((a) => B(a, e)) : B(o, e);
}
function m() {
  try {
    return !!window;
  } catch {
  }
  return !1;
}
function p(o, e) {
  if (h(o)) {
    const a = [];
    return o instanceof Map ? o.forEach((t, r) => a.push(e(t, r, o))) : Array.isArray(o) ? o.forEach((t, r) => a.push(e(t, r, o))) : Object.entries(o).forEach(
      ([t, r]) => a.push(e(r, t, o))
    ), a.filter((t) => t !== void 0);
  }
  return [];
}
function U(o) {
  return O(o) ? o() : o;
}
function j(o, e = !1) {
  if (typeof o == "string") {
    const a = o.trim();
    switch (a) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(a))
          try {
            return JSON.parse(a);
          } catch {
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(a))
            return parseFloat(a);
          if (/^[0-9]+$/.exec(a))
            return parseInt(a, 10);
          if (e && window && a in window && typeof window[a] == "function")
            return window[a];
        }
    }
  }
  return o;
}
function A(o) {
  if (o instanceof Date)
    return o;
  if (S(o))
    return /* @__PURE__ */ new Date();
  if (typeof o == "number")
    return new Date(o);
  let e = o, a = "";
  o.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (r, i, s) => (e = i, a = s, r));
  const t = (/^\d{4}\d{2}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(e) && `${e}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(e) && `${e}-01T00:00:00`) ?? (/^\d{4}$/.exec(e) && `${e}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}`) ?? e.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${t}${a}`);
}
function ee(o, e) {
  const a = Math.floor(e);
  return o >= a && o < a + 1;
}
function ne(o, e) {
  return Math.floor(Math.random() * (e - o + 1) + o);
}
function E(o) {
  return typeof o == "number" ? o : _(o) || 0;
}
function _(o) {
  let e = o.replace(/[^\d., ]+/ig, "");
  return e.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? e = e.replace(/ /ig, "").replace(/,/ig, ".") : e.match(/,[0-9]{3}[,.]/ig) ? e = e.replace(/,/ig, "") : e.match(/[.][0-9]{3}[,.]/ig) ? e = e.replace(/[.]/ig, "").replace(/,/ig, ".") : e = e.replace(/,/ig, "."), parseFloat(e);
}
function ae(o, e) {
  let a = Object.keys(o).length !== Object.keys(e).length;
  return a || p(o, (t, r) => {
    t !== (e == null ? void 0 : e[r]) && (a = !0);
  }), a;
}
function oe(o, e) {
  return o.indexOf(e) !== -1;
}
function te(o, e) {
  return p(o, (a) => a == null ? void 0 : a[e]);
}
function re(o) {
  return Math.min(...F(o));
}
function ie(o) {
  return Math.max(...F(o));
}
function D(o) {
  return JSON.parse(JSON.stringify(o));
}
function H(o) {
  return [...new Set(o)];
}
function se(o, e) {
  return Array(e).fill(o);
}
function $(o, e, a = !0) {
  const t = D(o);
  return h(o) && h(e) && p(
    e,
    (r, i) => {
      const s = o == null ? void 0 : o[i];
      h(s) && h(r) ? a && Array.isArray(s) && Array.isArray(r) ? t[i] = D(H([...s, ...r])) : t[i] = $(
        Array.isArray(s) ? { ...s } : s,
        r,
        a
      ) : t[i] = h(r) ? D(r) : r;
    }
  ), t;
}
function ue(o, e, a) {
  if (h(o) && h(e)) {
    if (a) {
      let t = {}, r = !1;
      return p(o, (i, s) => {
        !r && (a === s || a === i) ? (r = !0, t = $(t, e)) : r ? t = $(t, { [s]: i }) : t[s] = h(i) ? D(i) : i;
      }), r ? t : $(o, e);
    }
    if (h(e))
      return $(o, e);
  }
  return D(o);
}
function le(o, e) {
  const a = {};
  return h(o) && h(e) && p(o, (t, r) => {
    r in e && (a[r] = t);
  }), a;
}
function ge(o) {
  return Array.isArray(o) ? o : [o];
}
function F(o) {
  return p(o, (e) => e.length);
}
var M = { VITE_DESIGNS_MAIN: "m3", VITE_DESIGNS_GLOBAL: "UI", VITE_UI_GIT: "git+https://github.com/dxtmisha/ui-playground.git", VITE_UI_WEB: "https://ru.dev2.coralclub.app", VITE_UI_PATH: "/ui/", VITE_UI_API_TRANSLATE: "restApi/uiTranslate", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const L = {
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
class V {
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
        const a = (M == null ? void 0 : M[this.getName()]) ?? (M == null ? void 0 : M[`VITE_${this.getName()}`]);
        if (a)
          return a;
      }
    } catch {
    }
    return j(
      e ?? this.getValue()
    );
  }
  /**
   * Getting a basic object with a key name and a default value.<br>
   * Получение базового объекта с названием ключа и значения по умолчанию.
   * @private
   */
  getBasic() {
    return L == null ? void 0 : L[this.index];
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
function k(o, e) {
  return new V(o).get(e);
}
class Z {
  /**
   * Constructor
   * @param name value name /<br>название значения
   * @param isSession should we use a session? /<br>использовать ли сессию?
   */
  constructor(e, a = !1) {
    g(this, "value");
    g(this, "age");
    this.name = e, this.isSession = a;
    const t = `${a ? "session" : "storage"}#${e}`;
    if (t in b)
      return b[t];
    const r = this.getValue();
    r && (this.value = r.value, this.age = r.age), b[t] = this;
  }
  /**
   * Getting data from local storage.<br>
   * Получение данных из локального хранилища.
   * @param defaultValue default value /<br>значение по умолчанию
   * @param cache cache time /<br>время кэширования
   */
  get(e, a) {
    if (this.value && this.isCache(a))
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
    var a, t;
    return this.value = U(e), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (a = this.getMethod()) == null || a.removeItem(this.getIndex()) : (t = this.getMethod()) == null || t.setItem(this.getIndex(), JSON.stringify({
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
    return S(e) || this.age && this.age + e * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (m())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${k("prefix", "")}${this.name}`;
  }
  /**
   * Getting data from storage.<br>
   * Получение данных из хранилища.
   */
  getValue() {
    var a;
    const e = (a = this.getMethod()) == null ? void 0 : a.getItem(this.getIndex());
    if (e)
      try {
        return JSON.parse(e);
      } catch {
      }
  }
}
const b = {}, x = [
  {
    country: "US",
    countryAlternative: [
      "EN"
    ],
    language: "en",
    languageAlternative: [
      "us"
    ],
    firstDay: "Su",
    zone: "America/New_York",
    phoneCode: "1",
    phoneMask: [
      "+1-***-***-****"
    ]
  },
  {
    country: "GB",
    countryAlternative: [
      "UK"
    ],
    language: "en",
    firstDay: "Mo",
    zone: "Europe/London",
    phoneCode: "44",
    phoneMask: [
      "+44-**-****-****"
    ]
  },
  {
    country: "AF",
    language: "fa",
    firstDay: "Sa",
    zone: "Asia/Kabul",
    phoneCode: "93",
    phoneMask: [
      "+93-**-***-****"
    ]
  },
  {
    country: "AL",
    language: "sq",
    firstDay: "Mo",
    zone: "Europe/Tirane",
    phoneCode: "355",
    phoneMask: [
      "+355-***-***-***"
    ]
  },
  {
    country: "DZ",
    language: "ar",
    firstDay: "Sa",
    zone: "Africa/Algiers",
    phoneCode: "213",
    phoneMask: [
      "+213-**-***-****"
    ]
  },
  {
    country: "AS",
    language: "en",
    firstDay: null,
    zone: "Pacific/Pago_Pago",
    phoneCode: "1-684",
    phoneMask: [
      "+1-684-***-****"
    ]
  },
  {
    country: "AD",
    language: "ca",
    firstDay: "Mo",
    zone: "Europe/Andorra",
    phoneCode: "376",
    phoneMask: [
      "+376-***-***"
    ]
  },
  {
    country: "AO",
    language: "pt",
    firstDay: null,
    zone: "Africa/Lagos",
    phoneCode: "244",
    phoneMask: [
      "+244-***-***-***"
    ]
  },
  {
    country: "AI",
    language: "en",
    firstDay: null,
    zone: "America/Port_of_Spain",
    phoneCode: "1-264",
    phoneMask: [
      "+1-264-***-****"
    ]
  },
  {
    country: "AQ",
    language: "",
    firstDay: null,
    zone: "Antarctica/Troll",
    phoneCode: "672",
    phoneMask: [
      "+672-1-**-***"
    ]
  },
  {
    country: "AG",
    language: "en",
    firstDay: null,
    zone: "America/Antigua",
    phoneCode: "1-268",
    phoneMask: [
      "+1-268-***-****"
    ]
  },
  {
    country: "AR",
    language: "es",
    firstDay: "Su",
    zone: "America/Argentina/Buenos_Aires",
    phoneCode: "54",
    phoneMask: [
      "+54-***-***-****"
    ]
  },
  {
    country: "AM",
    language: "hy",
    firstDay: "Mo",
    zone: "Asia/Yerevan",
    phoneCode: "374",
    phoneMask: [
      "+374-**-***-***"
    ]
  },
  {
    country: "AW",
    language: "nl",
    firstDay: null,
    zone: "America/Curacao",
    phoneCode: "297",
    phoneMask: [
      "+297-***-****"
    ]
  },
  {
    country: "AU",
    language: "en",
    firstDay: "Mo",
    zone: "Australia/Sydney",
    phoneCode: "61",
    phoneMask: [
      "+61-*-****-****"
    ]
  },
  {
    country: "AT",
    language: "de",
    firstDay: "Mo",
    zone: "Europe/Vienna",
    phoneCode: "43",
    phoneMask: [
      "+43-***-***-****"
    ]
  },
  {
    country: "AZ",
    language: "az",
    firstDay: "Mo",
    zone: "Asia/Baku",
    phoneCode: "994",
    phoneMask: "+994-**-***-**-**"
  },
  {
    country: "BS",
    language: "en",
    firstDay: null,
    zone: "America/Nassau",
    phoneCode: "1-242",
    phoneMask: "+1-242-***-****"
  },
  {
    country: "BH",
    language: "ar",
    firstDay: "Sa",
    zone: "Asia/Bahrain",
    phoneCode: "973",
    phoneMask: "+973-****-****"
  },
  {
    country: "BD",
    language: "bn",
    firstDay: null,
    zone: "Asia/Dhaka",
    phoneCode: "880",
    phoneMask: "+880-**-***-***"
  },
  {
    country: "BB",
    language: "en",
    firstDay: null,
    zone: "America/Barbados",
    phoneCode: "1-246",
    phoneMask: "+1-246-***-****"
  },
  {
    country: "BY",
    language: "be",
    firstDay: "Mo",
    zone: "Europe/Minsk",
    phoneCode: "375",
    phoneMask: "+375-**-***-**-**"
  },
  {
    country: "BE",
    language: "nl",
    firstDay: "Mo",
    zone: "Europe/Brussels",
    phoneCode: "32",
    phoneMask: "+32-***-***-***"
  },
  {
    country: "BZ",
    language: "en",
    firstDay: "Su",
    zone: "America/Belize",
    phoneCode: "501",
    phoneMask: "+501-***-****"
  },
  {
    country: "BJ",
    language: "fr",
    firstDay: null,
    zone: "Africa/Lagos",
    phoneCode: "229",
    phoneMask: "+229-**-**-****"
  },
  {
    country: "BM",
    language: "en",
    firstDay: null,
    zone: "Atlantic/Bermuda",
    phoneCode: "1-441",
    phoneMask: "+1-441-***-****"
  },
  {
    country: "BT",
    language: "dz",
    firstDay: null,
    zone: "Asia/Thimphu",
    phoneCode: "975",
    phoneMask: [
      "+975-*-***-***",
      "+975-17-***-***"
    ]
  },
  {
    country: "BO",
    language: "es",
    firstDay: "Su",
    zone: "America/La_Paz",
    phoneCode: "591",
    phoneMask: "+591-*-***-****"
  },
  {
    country: "BA",
    language: "bs",
    firstDay: null,
    zone: "Europe/Belgrade",
    phoneCode: "387",
    phoneMask: [
      "+387-**-****",
      "+387-**-*****"
    ]
  },
  {
    country: "BW",
    language: "en",
    firstDay: null,
    zone: "Africa/Maputo",
    phoneCode: "267",
    phoneMask: "+267-**-***-***"
  },
  {
    country: "BR",
    language: "pt",
    firstDay: "Su",
    zone: "America/Sao_Paulo",
    phoneCode: "55",
    phoneMask: [
      "+55-**-****-****",
      "+55-**-*****-****"
    ]
  },
  {
    country: "IO",
    language: "en",
    firstDay: null,
    zone: "Indian/Chagos",
    phoneCode: "246",
    phoneMask: "+246-***-****"
  },
  {
    country: "VG",
    language: "en",
    firstDay: null,
    zone: "America/Port_of_Spain",
    phoneCode: "1-284",
    phoneMask: "+1-284-***-****"
  },
  {
    country: "BN",
    language: "ms",
    firstDay: "Mo",
    zone: "Asia/Brunei",
    phoneCode: "673",
    phoneMask: "+673-***-****"
  },
  {
    country: "BG",
    language: "bg",
    firstDay: "Mo",
    zone: "Europe/Sofia",
    phoneCode: "359",
    phoneMask: "+359-***-***-***"
  },
  {
    country: "BF",
    language: "fr",
    firstDay: null,
    zone: "Africa/Abidjan",
    phoneCode: "226",
    phoneMask: "+226-**-**-****"
  },
  {
    country: "BI",
    language: "fr",
    firstDay: null,
    zone: "Africa/Maputo",
    phoneCode: "257",
    phoneMask: "+257-**-**-****"
  },
  {
    country: "KH",
    language: "km",
    firstDay: null,
    zone: "Asia/Phnom_Penh",
    phoneCode: "855",
    phoneMask: "+855-**-***-***"
  },
  {
    country: "CM",
    phoneCode: "237",
    zone: "Africa/Lagos",
    language: "en",
    firstDay: null,
    phoneMask: "+237-****-****"
  },
  {
    country: "CA",
    phoneCode: "1",
    zone: "America/Toronto",
    language: "en",
    firstDay: "Su",
    phoneMask: "+1-***-***-****"
  },
  {
    country: "CV",
    phoneCode: "238",
    zone: "Atlantic/Cape_Verde",
    language: "pt",
    firstDay: null,
    phoneMask: "+238-***-**-**"
  },
  {
    country: "KY",
    phoneCode: "1-345",
    zone: "America/Cayman",
    language: "en",
    firstDay: null,
    phoneMask: "+1-345-***-****"
  },
  {
    country: "CF",
    phoneCode: "236",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+236-**-**-****"
  },
  {
    country: "TD",
    phoneCode: "235",
    zone: "Africa/Ndjamena",
    language: "fr",
    firstDay: null,
    phoneMask: "+235-**-**-**-**"
  },
  {
    country: "CL",
    phoneCode: "56",
    zone: "America/Santiago",
    language: "es",
    firstDay: "Su",
    phoneMask: "+56-*-****-****"
  },
  {
    country: "CN",
    phoneCode: "86",
    zone: "Asia/Shanghai",
    language: "zh",
    firstDay: "Su",
    phoneMask: [
      "+86-***-****-***",
      "+86-***-****-****",
      "+86-**-*****-*****"
    ]
  },
  {
    country: "CX",
    phoneCode: "61",
    zone: "Indian/Christmas",
    language: "en",
    firstDay: null
  },
  {
    country: "CC",
    phoneCode: "61",
    zone: "Indian/Cocos",
    language: "ms",
    firstDay: null
  },
  {
    country: "CO",
    phoneCode: "57",
    zone: "America/Bogota",
    language: "es",
    firstDay: "Su",
    phoneMask: "+57-***-***-****"
  },
  {
    country: "KM",
    phoneCode: "269",
    zone: "Indian/Comoro",
    language: "ar",
    firstDay: null,
    phoneMask: "+269-**-*****"
  },
  {
    country: "CK",
    phoneCode: "682",
    zone: "Pacific/Rarotonga",
    language: "en",
    firstDay: null,
    phoneMask: "+682-**-***"
  },
  {
    country: "CR",
    phoneCode: "506",
    zone: "America/Costa_Rica",
    language: "es",
    firstDay: "Su",
    phoneMask: "+506-****-****"
  },
  {
    country: "HR",
    phoneCode: "385",
    zone: "Europe/Belgrade",
    language: "hr",
    firstDay: "Mo",
    phoneMask: "+385-**-***-***"
  },
  {
    country: "CU",
    phoneCode: "53",
    zone: "America/Havana",
    language: "es",
    firstDay: null,
    phoneMask: "+53-*-***-****"
  },
  {
    country: "CW",
    phoneCode: "599",
    zone: "America/Curacao",
    language: "nl",
    firstDay: null,
    phoneMask: "+599-***-****"
  },
  {
    country: "CY",
    phoneCode: "357",
    zone: "Asia/Nicosia",
    language: "el",
    firstDay: null,
    phoneMask: "+357-**-***-***"
  },
  {
    country: "CZ",
    phoneCode: "420",
    zone: "Europe/Prague",
    language: "cs",
    firstDay: "Mo",
    phoneMask: "+420-***-***-***"
  },
  {
    country: "CD",
    phoneCode: "243",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+243-***-***-***"
  },
  {
    country: "DK",
    phoneCode: "45",
    zone: "Europe/Copenhagen",
    language: "da",
    firstDay: "Mo",
    phoneMask: "+45-**-**-**-**"
  },
  {
    country: "DJ",
    phoneCode: "253",
    zone: "Africa/Djibouti",
    language: "fr",
    firstDay: null,
    phoneMask: "+253-**-**-**-**"
  },
  {
    country: "DM",
    phoneCode: "1-767",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-767-***-****"
  },
  {
    country: "DO",
    phoneCode: "1-809",
    zone: "North America",
    language: "America/Santo_Domingo",
    firstDay: "Su",
    phoneMask: [
      "+1-809-***-****",
      "+1-829-***-****",
      "+1-849-***-****"
    ]
  },
  {
    country: "TL",
    phoneCode: "670",
    zone: "Asia/Dili",
    language: "tet",
    firstDay: null,
    phoneMask: [
      "+670-***-****",
      "+670-77-*-*****",
      "+670-78-*-*****"
    ]
  },
  {
    country: "EC",
    phoneCode: "593",
    zone: "America/Guayaquil",
    language: "es",
    firstDay: "Su",
    phoneMask: [
      "+593-*-***-****",
      "+593-**-***-****"
    ]
  },
  {
    country: "EG",
    phoneCode: "20",
    zone: "Africa/Cairo",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+20-***-***-****"
  },
  {
    country: "SV",
    phoneCode: "503",
    zone: "America/El_Salvador",
    language: "es",
    firstDay: "Su",
    phoneMask: "+503-**-**-****"
  },
  {
    country: "GQ",
    phoneCode: "240",
    zone: "Africa/Lagos",
    language: "es",
    firstDay: null,
    phoneMask: "+240-**-***-****"
  },
  {
    country: "ER",
    phoneCode: "291",
    zone: "Africa/Asmara",
    language: "aa",
    firstDay: null,
    phoneMask: "+291-*-***-***"
  },
  {
    country: "EE",
    phoneCode: "372",
    zone: "Europe/Tallinn",
    language: "et",
    firstDay: "Mo",
    phoneMask: [
      "+372-***-****",
      "+372-****-****"
    ]
  },
  {
    country: "ET",
    phoneCode: "251",
    zone: "Africa/Addis_Ababa",
    language: "am",
    firstDay: null,
    phoneMask: "+251-**-***-****"
  },
  {
    country: "FK",
    phoneCode: "500",
    zone: "Atlantic/Stanley",
    language: "en",
    firstDay: null,
    phoneMask: "+500-*****"
  },
  {
    country: "FO",
    phoneCode: "298",
    zone: "Atlantic/Faroe",
    language: "fo",
    firstDay: null,
    phoneMask: "+298-***-***"
  },
  {
    country: "FJ",
    phoneCode: "679",
    zone: "Pacific/Fiji",
    language: "en",
    firstDay: null,
    phoneMask: "+679-**-*****"
  },
  {
    country: "FI",
    phoneCode: "358",
    zone: "Europe/Helsinki",
    language: "fi",
    firstDay: "Mo",
    phoneMask: "+358-***-***-**-**"
  },
  {
    country: "FR",
    phoneCode: "33",
    zone: "Europe/Paris",
    language: "fr",
    firstDay: "Mo",
    phoneMask: [
      "+33-***-***-***",
      "+262-*****-****",
      "+508-**-****",
      "+590-***-***-***"
    ]
  },
  {
    country: "PF",
    phoneCode: "689",
    zone: "Pacific/Tahiti",
    language: "fr",
    firstDay: null,
    phoneMask: "+689-**-**-**"
  },
  {
    country: "GA",
    phoneCode: "241",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+241-*-**-**-**"
  },
  {
    country: "GM",
    phoneCode: "220",
    zone: "Africa/Abidjan",
    language: "en",
    firstDay: null,
    phoneMask: "+220-***-**-**"
  },
  {
    country: "GE",
    phoneCode: "995",
    zone: "Asia/Tbilisi",
    language: "ka",
    firstDay: "Mo",
    phoneMask: "+995-***-***-***"
  },
  {
    country: "DE",
    phoneCode: "49",
    zone: "Europe/Berlin",
    language: "de",
    firstDay: "Mo",
    phoneMask: [
      "+49-***-***",
      "+49-***-***-****",
      "+49-****-***-****"
    ]
  },
  {
    country: "GH",
    phoneCode: "233",
    zone: "Africa/Accra",
    language: "en",
    firstDay: null,
    phoneMask: "+233-***-***-***"
  },
  {
    country: "GI",
    phoneCode: "350",
    zone: "Europe/Gibraltar",
    language: "en",
    firstDay: null,
    phoneMask: "+350-***-*****"
  },
  {
    country: "GR",
    phoneCode: "30",
    zone: "Europe/Athens",
    language: "el",
    firstDay: "Mo",
    phoneMask: "+30-***-***-****"
  },
  {
    country: "GL",
    phoneCode: "299",
    zone: "America/Godthab",
    language: "kl",
    firstDay: null,
    phoneMask: "+299-**-**-**"
  },
  {
    country: "GD",
    phoneCode: "1-473",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-473-***-****"
  },
  {
    country: "GU",
    phoneCode: "1-671",
    zone: "Pacific/Guam",
    language: "en",
    firstDay: null,
    phoneMask: "+1-671-***-****"
  },
  {
    country: "GT",
    phoneCode: "502",
    zone: "America/Guatemala",
    language: "es",
    firstDay: "Su",
    phoneMask: "+502-*-***-****"
  },
  {
    country: "GG",
    phoneCode: "44-1481",
    zone: "Europe/London",
    language: "en",
    firstDay: null
  },
  {
    country: "GN",
    phoneCode: "224",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+224-**-***-***"
  },
  {
    country: "GW",
    phoneCode: "245",
    zone: "Africa/Bissau",
    language: "pt",
    firstDay: null,
    phoneMask: "+245-*-******"
  },
  {
    country: "GY",
    phoneCode: "592",
    zone: "America/Guyana",
    language: "en",
    firstDay: null,
    phoneMask: "+592-***-****"
  },
  {
    country: "HT",
    phoneCode: "509",
    zone: "America/Port-au-Prince",
    language: "ht",
    firstDay: null,
    phoneMask: "+509-**-**-****"
  },
  {
    country: "HN",
    phoneCode: "504",
    zone: "America/Tegucigalpa",
    language: "es",
    firstDay: "Su",
    phoneMask: "+504-****-****"
  },
  {
    country: "HK",
    phoneCode: "852",
    zone: "Asia/Hong_Kong",
    language: "zh",
    firstDay: "Su",
    phoneMask: "+852-****-****"
  },
  {
    country: "HU",
    phoneCode: "36",
    zone: "Europe/Budapest",
    language: "hu",
    firstDay: "Mo",
    phoneMask: "+36-***-***-***"
  },
  {
    country: "IS",
    phoneCode: "354",
    zone: "Atlantic/Reykjavik",
    language: "is",
    firstDay: "Mo",
    phoneMask: "+354-***-****"
  },
  {
    country: "IN",
    phoneCode: "91",
    zone: "Asia/Kolkata",
    language: "en",
    firstDay: "Mo",
    phoneMask: "+91-****-***-***"
  },
  {
    country: "ID",
    phoneCode: "62",
    zone: "Asia/Jakarta",
    language: "id",
    firstDay: "Mo",
    phoneMask: [
      "+62-**-***-**",
      "+62-**-***-***",
      "+62-**-***-****",
      "+62-8-**-***-***",
      "+62-8-**-***-****",
      "+62-8-**-***-**-***"
    ]
  },
  {
    country: "IR",
    phoneCode: "98",
    zone: "Asia/Tehran",
    language: "fa",
    firstDay: "Sa",
    phoneMask: "+98-***-***-****"
  },
  {
    country: "IQ",
    phoneCode: "964",
    zone: "Asia/Baghdad",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+964-***-***-****"
  },
  {
    country: "IE",
    firstDay: "Mo",
    language: "en",
    phoneCode: "353",
    phoneMask: "+353-***-***-***",
    zone: "Europe/Dublin"
  },
  {
    country: "IM",
    firstDay: null,
    language: "Pound",
    phoneCode: "44-1624",
    zone: "Isle of Man"
  },
  {
    country: "IL",
    firstDay: "Su",
    language: "he",
    languageAlternative: [
      "il"
    ],
    phoneCode: "972",
    phoneMask: [
      "+972-*-***-****",
      "+972-5-*-***-****"
    ],
    zone: "Asia/Jerusalem"
  },
  {
    country: "IT",
    firstDay: "Mo",
    language: "it",
    phoneCode: "39",
    phoneMask: "+39-***-****-***",
    zone: "Europe/Rome"
  },
  {
    country: "CI",
    phoneCode: "225",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+225-**-***-***"
  },
  {
    country: "JM",
    phoneCode: "1-876",
    zone: "America/Jamaica",
    language: "en",
    firstDay: "Su",
    phoneMask: "+1-876-***-****"
  },
  {
    country: "JP",
    phoneCode: "81",
    zone: "Asia/Tokyo",
    language: "ja",
    firstDay: "Su",
    phoneMask: [
      "+81-***-***-***",
      "+81-**-****-****"
    ]
  },
  {
    country: "JE",
    phoneCode: "44-1534",
    zone: "Europe/London",
    language: "en",
    firstDay: null
  },
  {
    country: "JO",
    phoneCode: "962",
    zone: "Asia/Amman",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+962-*-****-****"
  },
  {
    country: "KZ",
    phoneCode: "7",
    zone: "Asia/Almaty",
    language: "kk",
    firstDay: "Mo",
    phoneMask: [
      "+7-6-**-***-**-**",
      "+7-7-**-***-**-**"
    ]
  },
  {
    country: "KE",
    phoneCode: "254",
    zone: "Africa/Nairobi",
    language: "en",
    firstDay: "Su",
    phoneMask: "+254-***-******"
  },
  {
    country: "KI",
    phoneCode: "686",
    zone: "Pacific/Tarawa",
    language: "en",
    firstDay: null,
    phoneMask: "+686-**-***"
  },
  {
    country: "XK",
    phoneCode: "383",
    zone: "Europe/Belgrade",
    language: "sq",
    firstDay: "Mo"
  },
  {
    country: "KW",
    phoneCode: "965",
    zone: "Asia/Kuwait",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+965-****-****"
  },
  {
    country: "KG",
    phoneCode: "996",
    zone: "Asia/Bishkek",
    language: "ky",
    firstDay: "Mo",
    phoneMask: "+996-***-***-***"
  },
  {
    country: "LA",
    phoneCode: "856",
    zone: "Asia/Vientiane",
    language: "lo",
    firstDay: null,
    phoneMask: [
      "+856-**-***-***",
      "+856-20-**-***-***"
    ]
  },
  {
    country: "LV",
    phoneCode: "371",
    zone: "Europe/Riga",
    language: "lv",
    firstDay: "Mo",
    phoneMask: "+371-**-***-***"
  },
  {
    country: "LB",
    phoneCode: "961",
    zone: "Asia/Beirut",
    language: "ar",
    firstDay: "Mo",
    phoneMask: [
      "+961-*-***-***",
      "+961-**-***-***"
    ]
  },
  {
    country: "LS",
    phoneCode: "266",
    zone: "Africa/Johannesburg",
    language: "en",
    firstDay: null,
    phoneMask: "+266-*-***-****"
  },
  {
    country: "LR",
    phoneCode: "231",
    zone: "Africa/Monrovia",
    language: "en",
    firstDay: null,
    phoneMask: "+231-**-***-***"
  },
  {
    country: "LY",
    phoneCode: "218",
    zone: "Africa/Tripoli",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+218-**-***-***",
      "+218-21-***-****"
    ]
  },
  {
    country: "LI",
    phoneCode: "423",
    zone: "Europe/Zurich",
    language: "de",
    firstDay: null,
    phoneMask: "+423-***-***-****"
  },
  {
    country: "LT",
    phoneCode: "370",
    zone: "Europe/Vilnius",
    language: "lt",
    firstDay: "Mo",
    phoneMask: "+370-***-**-***"
  },
  {
    country: "LU",
    phoneCode: "352",
    zone: "Europe/Luxembourg",
    language: "lb",
    firstDay: "Mo",
    phoneMask: "+352-***-***-***"
  },
  {
    country: "MO",
    phoneCode: "853",
    zone: "Asia/Macau",
    language: "zh",
    firstDay: null,
    phoneMask: "+853-****-****"
  },
  {
    country: "MK",
    phoneCode: "389",
    zone: "Europe/Belgrade",
    language: "mk",
    firstDay: "Mo",
    phoneMask: "+389-**-***-***"
  },
  {
    country: "MG",
    phoneCode: "261",
    zone: "Indian/Antananarivo",
    language: "fr",
    firstDay: null,
    phoneMask: "+261-**-**-*****"
  },
  {
    country: "MW",
    phoneCode: "265",
    zone: "Africa/Maputo",
    language: "ny",
    firstDay: null,
    phoneMask: [
      "+265-*-****-****",
      "+265-1-***-***"
    ]
  },
  {
    country: "MY",
    phoneCode: "60",
    zone: "Asia/Kuala_Lumpur",
    language: "ms",
    firstDay: "Mo",
    phoneMask: [
      "+60-*-***-***",
      "+60-**-***-***",
      "+60-**-***-****",
      "+60-***-***-***"
    ]
  },
  {
    country: "MV",
    phoneCode: "960",
    zone: "Indian/Maldives",
    language: "dv",
    firstDay: null,
    phoneMask: "+960-***-****"
  },
  {
    country: "ML",
    phoneCode: "223",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+223-**-**-****"
  },
  {
    country: "MT",
    phoneCode: "356",
    zone: "Europe/Malta",
    language: "mt",
    firstDay: null,
    phoneMask: "+356-****-****"
  },
  {
    country: "MH",
    phoneCode: "692",
    zone: "Pacific/Majuro",
    language: "mh",
    firstDay: null,
    phoneMask: "+692-***-****"
  },
  {
    country: "MR",
    phoneCode: "222",
    zone: "Africa/Abidjan",
    language: "ar",
    firstDay: null,
    phoneMask: "+222-**-**-****"
  },
  {
    country: "MU",
    phoneCode: "230",
    zone: "Indian/Mauritius",
    language: "en",
    firstDay: null,
    phoneMask: "+230-***-****"
  },
  {
    country: "YT",
    phoneCode: "262",
    zone: "Indian/Mayotte",
    language: "fr",
    firstDay: null
  },
  {
    country: "MX",
    phoneCode: "52",
    zone: "America/Mexico_City",
    language: "es",
    firstDay: "Su",
    phoneMask: [
      "+52-**-**-****",
      "+52-***-***-****"
    ]
  },
  {
    country: "FM",
    phoneCode: "691",
    zone: "Pacific/Pohnpei",
    language: "en",
    firstDay: null,
    phoneMask: "+691-***-****"
  },
  {
    country: "MD",
    phoneCode: "373",
    zone: "Europe/Chisinau",
    language: "ro",
    firstDay: null,
    phoneMask: "+373-****-****"
  },
  {
    country: "MC",
    phoneCode: "377",
    zone: "Europe/Monaco",
    language: "fr",
    firstDay: "Mo",
    phoneMask: [
      "+377-**-***-***",
      "+377-***-***-***"
    ]
  },
  {
    country: "MN",
    phoneCode: "976",
    zone: "Asia/Ulaanbaatar",
    language: "mn",
    firstDay: "Mo",
    phoneMask: "+976-**-**-****"
  },
  {
    country: "ME",
    phoneCode: "382",
    zone: "Europe/Belgrade",
    language: "sr",
    firstDay: null,
    phoneMask: "+382-**-***-***"
  },
  {
    country: "MS",
    phoneCode: "1-664",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-664-***-****"
  },
  {
    country: "MA",
    phoneCode: "212",
    zone: "Africa/Casablanca",
    language: "ar",
    firstDay: "Mo",
    phoneMask: "+212-**-****-***"
  },
  {
    country: "MZ",
    phoneCode: "258",
    zone: "Africa/Maputo",
    language: "pt",
    firstDay: null,
    phoneMask: "+258-**-***-***"
  },
  {
    country: "MM",
    phoneCode: "95",
    zone: "Asia/Rangoon",
    language: "my",
    firstDay: null,
    phoneMask: [
      "+95-***-***",
      "+95-*-***-***",
      "+95-**-***-***"
    ]
  },
  {
    country: "NA",
    phoneCode: "264",
    zone: "Africa/Windhoek",
    language: "en",
    firstDay: null,
    phoneMask: "+264-**-***-****"
  },
  {
    country: "NR",
    phoneCode: "674",
    zone: "Pacific/Nauru",
    language: "na",
    firstDay: null,
    phoneMask: "+674-***-****"
  },
  {
    country: "NP",
    phoneCode: "977",
    zone: "Asia/Kathmandu",
    language: "ne",
    firstDay: null,
    phoneMask: "+977-**-***-***"
  },
  {
    country: "NL",
    phoneCode: "31",
    zone: "Europe/Amsterdam",
    language: "nl",
    firstDay: "Mo",
    phoneMask: "+31-**-***-****"
  },
  {
    country: "AN",
    phoneCode: "599",
    zone: "America/Curacao",
    language: "nl",
    firstDay: null,
    phoneMask: [
      "+599-***-****",
      "+599-9-***-****"
    ]
  },
  {
    country: "NC",
    phoneCode: "687",
    zone: "Pacific/Noumea",
    language: "fr",
    firstDay: null,
    phoneMask: "+687-**-****"
  },
  {
    country: "NZ",
    phoneCode: "64",
    zone: "Pacific/Auckland",
    language: "en",
    firstDay: "Mo",
    phoneMask: [
      "+64-**-***-***",
      "+64-***-***-***",
      "+64-***-***-****"
    ]
  },
  {
    country: "NI",
    phoneCode: "505",
    zone: "America/Managua",
    language: "es",
    firstDay: "Su",
    phoneMask: "+505-****-****"
  },
  {
    country: "NE",
    phoneCode: "227",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+227-**-**-****"
  },
  {
    country: "NG",
    phoneCode: "234",
    zone: "Africa/Lagos",
    language: "en",
    firstDay: null,
    phoneMask: [
      "+234-**-***-**",
      "+234-**-***-***",
      "+234-***-***-****"
    ]
  },
  {
    country: "NU",
    phoneCode: "683",
    zone: "Pacific/Niue",
    language: "niu",
    firstDay: null,
    phoneMask: "+683-****"
  },
  {
    country: "KP",
    phoneCode: "850",
    zone: "Asia/Pyongyang",
    language: "ko",
    firstDay: null,
    phoneMask: [
      "+850-***-***",
      "+850-**-***-***",
      "+850-****-****",
      "+850-***-****-***",
      "+850-****-*************",
      "+850-191-***-****"
    ]
  },
  {
    country: "MP",
    phoneCode: "1-670",
    zone: "Pacific/Saipan",
    language: "fil",
    firstDay: null,
    phoneMask: "+1-670-***-****"
  },
  {
    country: "NO",
    phoneCode: "47",
    zone: "Europe/Oslo",
    language: "no",
    firstDay: "Mo",
    phoneMask: "+47-***-**-***"
  },
  {
    country: "OM",
    phoneCode: "968",
    zone: "Asia/Muscat",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+968-**-***-***"
  },
  {
    country: "PK",
    phoneCode: "92",
    zone: "Asia/Karachi",
    language: "ur",
    firstDay: "Mo",
    phoneMask: "+92-***-***-****"
  },
  {
    country: "PW",
    phoneCode: "680",
    zone: "Pacific/Palau",
    language: "pau",
    firstDay: null,
    phoneMask: "+680-***-****"
  },
  {
    country: "PS",
    phoneCode: "970",
    zone: "Asia/Hebron",
    language: "ar",
    firstDay: null,
    phoneMask: "+970-**-***-****"
  },
  {
    country: "PA",
    phoneCode: "507",
    zone: "America/Panama",
    language: "es",
    firstDay: "Su",
    phoneMask: "+507-***-****"
  },
  {
    country: "PG",
    phoneCode: "675",
    zone: "Pacific/Port_Moresby",
    language: "en",
    firstDay: null,
    phoneMask: "+675-***-**-***"
  },
  {
    country: "PY",
    phoneCode: "595",
    zone: "America/Asuncion",
    language: "es",
    firstDay: "Mo",
    phoneMask: "+595-***-***-***"
  },
  {
    country: "PE",
    phoneCode: "51",
    zone: "America/Lima",
    language: "es",
    firstDay: "Su",
    phoneMask: "+51-***-***-***"
  },
  {
    country: "PH",
    phoneCode: "63",
    zone: "Asia/Manila",
    language: "tl",
    firstDay: "Su",
    phoneMask: "+63-***-***-****"
  },
  {
    country: "PN",
    phoneCode: "64",
    zone: "Pacific/Pitcairn",
    language: "en",
    firstDay: null
  },
  {
    country: "PL",
    phoneCode: "48",
    zone: "Europe/Warsaw",
    language: "pl",
    firstDay: "Mo",
    phoneMask: "+48-***-***-***"
  },
  {
    country: "PT",
    phoneCode: "351",
    zone: "Europe/Lisbon",
    language: "pt",
    firstDay: "Mo",
    phoneMask: "+351-**-***-****"
  },
  {
    country: "PR",
    phoneCode: "1-787",
    zone: "San Juan",
    language: "Dollar",
    firstDay: "Su"
  },
  {
    country: "QA",
    phoneCode: "974",
    zone: "Asia/Qatar",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+974-****-****"
  },
  {
    country: "CG",
    phoneCode: "242",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+242-**-***-****"
  },
  {
    country: "RE",
    phoneCode: "262",
    zone: "Indian/Reunion",
    language: "fr",
    firstDay: null,
    phoneMask: "+262-*****-****"
  },
  {
    country: "RO",
    phoneCode: "40",
    zone: "Europe/Bucharest",
    language: "ro",
    firstDay: "Mo",
    phoneMask: "+40-**-***-****"
  },
  {
    country: "RU",
    phoneCode: "7",
    zone: "Europe/Moscow",
    language: "ru",
    firstDay: "Mo",
    phoneMask: "+7-***-***-**-**"
  },
  {
    country: "RW",
    phoneCode: "250",
    zone: "Africa/Maputo",
    language: "rw",
    firstDay: null,
    phoneMask: "+250-***-***-***"
  },
  {
    country: "BL",
    phoneCode: "590",
    zone: "America/Port_of_Spain",
    language: "fr",
    firstDay: null
  },
  {
    country: "SH",
    phoneCode: "290",
    zone: "Africa/Abidjan",
    language: "en",
    firstDay: null,
    phoneMask: "+290-****"
  },
  {
    country: "KN",
    phoneCode: "1-869",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-869-***-****"
  },
  {
    country: "LC",
    phoneCode: "1-758",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-758-***-****"
  },
  {
    country: "MF",
    phoneCode: "590",
    zone: "America/Port_of_Spain",
    language: "fr",
    firstDay: null
  },
  {
    country: "PM",
    phoneCode: "508",
    zone: "America/Miquelon",
    language: "fr",
    firstDay: null
  },
  {
    country: "VC",
    phoneCode: "1-784",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-784-***-****"
  },
  {
    country: "WS",
    phoneCode: "685",
    zone: "Pacific/Apia",
    language: "sm",
    firstDay: null,
    phoneMask: "+685-**-****"
  },
  {
    country: "SM",
    phoneCode: "378",
    zone: "Europe/Rome",
    language: "it",
    firstDay: null,
    phoneMask: "+378-****-******"
  },
  {
    country: "ST",
    phoneCode: "239",
    zone: "Africa/Abidjan",
    language: "pt",
    firstDay: null,
    phoneMask: "+239-**-*****"
  },
  {
    country: "SA",
    phoneCode: "966",
    zone: "Asia/Riyadh",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+966-*-***-****",
      "+966-5-****-****"
    ]
  },
  {
    country: "SN",
    phoneCode: "221",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+221-**-***-****"
  },
  {
    country: "RS",
    phoneCode: "381",
    zone: "Europe/Belgrade",
    language: "sr",
    firstDay: "Mo",
    phoneMask: "+381-**-***-****"
  },
  {
    country: "SC",
    phoneCode: "248",
    zone: "Indian/Mahe",
    language: "en",
    firstDay: null,
    phoneMask: "+248-*-***-***"
  },
  {
    country: "SL",
    phoneCode: "232",
    zone: "Africa/Abidjan",
    language: "en",
    firstDay: null,
    phoneMask: "+232-**-******"
  },
  {
    country: "SG",
    phoneCode: "65",
    zone: "Asia/Singapore",
    language: "cmn",
    firstDay: "Mo",
    phoneMask: "+65-****-****"
  },
  {
    country: "SX",
    phoneCode: "1-721",
    zone: "America/Curacao",
    language: "nl",
    firstDay: null,
    phoneMask: "+1-721-***-****"
  },
  {
    country: "SK",
    phoneCode: "421",
    zone: "Europe/Prague",
    language: "sk",
    firstDay: "Mo",
    phoneMask: "+421-***-***-***"
  },
  {
    country: "SI",
    phoneCode: "386",
    zone: "Europe/Belgrade",
    language: "sl",
    firstDay: null,
    phoneMask: "+386-**-***-***"
  },
  {
    country: "SB",
    phoneCode: "677",
    zone: "Pacific/Guadalcanal",
    language: "en",
    firstDay: null,
    phoneMask: [
      "+677-*****",
      "+677-***-****"
    ]
  },
  {
    country: "SO",
    phoneCode: "252",
    zone: "Africa/Mogadishu",
    language: "so",
    firstDay: null,
    phoneMask: [
      "+252-*-***-***",
      "+252-**-***-***"
    ]
  },
  {
    country: "ZA",
    phoneCode: "27",
    zone: "Africa/Johannesburg",
    language: "zu",
    firstDay: "Su",
    phoneMask: "+27-**-***-****"
  },
  {
    country: "KR",
    phoneCode: "82",
    zone: "Asia/Seoul",
    language: "ko",
    firstDay: "Su",
    phoneMask: "+82-**-***-****"
  },
  {
    country: "SS",
    phoneCode: "211",
    zone: "Africa/Khartoum",
    language: "en",
    firstDay: null,
    phoneMask: "+211-**-***-****"
  },
  {
    country: "ES",
    phoneCode: "34",
    zone: "Europe/Madrid",
    language: "es",
    firstDay: "Mo",
    phoneMask: "+34-***-***-***"
  },
  {
    country: "LK",
    phoneCode: "94",
    zone: "Asia/Colombo",
    language: "si",
    firstDay: null,
    phoneMask: "+94-**-***-****"
  },
  {
    country: "SD",
    phoneCode: "249",
    zone: "Africa/Khartoum",
    language: "ar",
    firstDay: null,
    phoneMask: "+249-**-***-****"
  },
  {
    country: "SR",
    phoneCode: "597",
    zone: "America/Paramaribo",
    language: "nl",
    firstDay: null,
    phoneMask: [
      "+597-***-***",
      "+597-***-****"
    ]
  },
  {
    country: "SJ",
    phoneCode: "47",
    zone: "Europe/Oslo",
    language: "no",
    firstDay: null
  },
  {
    country: "SZ",
    phoneCode: "268",
    zone: "Africa/Johannesburg",
    language: "en",
    firstDay: null,
    phoneMask: "+268-**-**-****"
  },
  {
    country: "SE",
    phoneCode: "46",
    zone: "Europe/Stockholm",
    language: "sv",
    firstDay: "Mo",
    phoneMask: "+46-**-***-****"
  },
  {
    country: "CH",
    phoneCode: "41",
    zone: "Europe/Zurich",
    language: "de",
    firstDay: "Mo",
    phoneMask: "+41-**-***-****"
  },
  {
    country: "SY",
    phoneCode: "963",
    zone: "Asia/Damascus",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+963-**-****-***"
  },
  {
    country: "TW",
    phoneCode: "886",
    zone: "Asia/Taipei",
    language: "zh",
    firstDay: "Su",
    phoneMask: [
      "+886-****-****",
      "+886-*-****-****"
    ]
  },
  {
    country: "TJ",
    phoneCode: "992",
    zone: "Asia/Dushanbe",
    language: "tg",
    firstDay: null,
    phoneMask: "+992-**-***-****"
  },
  {
    country: "TZ",
    phoneCode: "255",
    zone: "Africa/Dar_es_Salaam",
    language: "sw",
    firstDay: null,
    phoneMask: "+255-**-***-****"
  },
  {
    country: "TH",
    phoneCode: "66",
    zone: "Asia/Bangkok",
    language: "th",
    firstDay: "Mo",
    phoneMask: "+66-**-***-****"
  },
  {
    country: "TG",
    phoneCode: "228",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+228-**-***-***"
  },
  {
    country: "TK",
    phoneCode: "690",
    zone: "Pacific/Fakaofo",
    language: "tkl",
    firstDay: null,
    phoneMask: "+690-****"
  },
  {
    country: "TO",
    phoneCode: "676",
    zone: "Pacific/Tongatapu",
    language: "to",
    firstDay: null,
    phoneMask: "+676-*****"
  },
  {
    country: "TT",
    phoneCode: "1-868",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-868-***-****"
  },
  {
    country: "TN",
    phoneCode: "216",
    zone: "Africa/Tunis",
    language: "ar",
    firstDay: "Mo",
    phoneMask: "+216-**-***-***"
  },
  {
    country: "TR",
    phoneCode: "90",
    zone: "Europe/Istanbul",
    language: "tr",
    firstDay: "Mo",
    phoneMask: "+90-***-***-****"
  },
  {
    country: "TM",
    phoneCode: "993",
    zone: "Asia/Ashgabat",
    language: "tk",
    firstDay: null,
    phoneMask: "+993-*-***-****"
  },
  {
    country: "TC",
    phoneCode: "1-649",
    zone: "America/Grand_Turk",
    language: "en",
    firstDay: null,
    phoneMask: "+1-649-***-****"
  },
  {
    country: "TV",
    phoneCode: "688",
    zone: "Pacific/Funafuti",
    language: "tvl",
    firstDay: null,
    phoneMask: [
      "+688-2-****",
      "+688-90-****"
    ]
  },
  {
    country: "VI",
    phoneCode: "1-340",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-340-***-****"
  },
  {
    country: "UG",
    phoneCode: "256",
    zone: "Africa/Kampala",
    language: "en",
    firstDay: null,
    phoneMask: "+256-***-***-***"
  },
  {
    country: "UA",
    phoneCode: "380",
    zone: "Europe/Kiev",
    language: "uk",
    languageAlternative: [
      "ua"
    ],
    firstDay: "Mo",
    phoneMask: "+380-**-***-**-**"
  },
  {
    country: "AE",
    phoneCode: "971",
    zone: "Asia/Dubai",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+971-*-***-****",
      "+971-5-*-***-****"
    ]
  },
  {
    country: "UY",
    phoneCode: "598",
    zone: "America/Montevideo",
    language: "es",
    firstDay: "Mo",
    phoneMask: "+598-*-***-**-**"
  },
  {
    country: "UZ",
    phoneCode: "998",
    zone: "Asia/Tashkent",
    language: "uz",
    firstDay: "Mo",
    phoneMask: "+998-**-***-****"
  },
  {
    country: "VU",
    phoneCode: "678",
    zone: "Pacific/Efate",
    language: "bi",
    firstDay: null,
    phoneMask: [
      "+678-*****",
      "+678-**-*****"
    ]
  },
  {
    country: "VA",
    phoneCode: "379",
    zone: "Europe/Rome",
    language: "la",
    firstDay: null,
    phoneMask: "+39-6-698-*****"
  },
  {
    country: "VE",
    phoneCode: "58",
    zone: "America/Caracas",
    language: "es",
    firstDay: "Su",
    phoneMask: "+58-***-***-****"
  },
  {
    country: "VN",
    phoneCode: "84",
    zone: "Asia/Ho_Chi_Minh",
    language: "vi",
    firstDay: "Mo",
    phoneMask: [
      "+84-**-****-***",
      "+84-***-****-***"
    ]
  },
  {
    country: "WF",
    phoneCode: "681",
    zone: "Pacific/Wallis",
    language: "wls",
    firstDay: null,
    phoneMask: "+681-**-****"
  },
  {
    country: "EH",
    phoneCode: "212",
    zone: "Africa/El_Aaiun",
    language: "ar",
    firstDay: null
  },
  {
    country: "YE",
    phoneCode: "967",
    zone: "Asia/Aden",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+967-*-***-***",
      "+967-**-***-***",
      "+967-***-***-***"
    ]
  },
  {
    country: "ZM",
    phoneCode: "260",
    zone: "Africa/Maputo",
    language: "en",
    firstDay: null,
    phoneMask: "+260-**-***-****"
  },
  {
    country: "ZW",
    phoneCode: "263",
    zone: "Africa/Maputo",
    language: "en",
    firstDay: "Su",
    phoneMask: "+263-*-******"
  },
  {
    country: "GF",
    phoneCode: "594",
    zone: "America/Cayenne",
    language: "fr",
    firstDay: "Mo",
    phoneMask: "+594-*****-****"
  },
  {
    country: "MQ",
    phoneCode: "596",
    zone: "America/Martinique",
    language: "fr",
    firstDay: "Mo",
    phoneMask: "+596-***-**-**-**"
  },
  {
    country: "NF",
    phoneCode: "672-3",
    zone: "Pacific/Norfolk",
    language: "en",
    firstDay: "Mo",
    phoneMask: "+672-3-**-***"
  },
  {
    country: "IC",
    phoneCode: "3428",
    zone: "Europe/Berlin",
    language: "es",
    firstDay: "Mo"
  }
], J = "geo-code", c = class c {
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
    return this.item.country;
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
    return this.item.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  static getFirstDay() {
    return this.item.firstDay;
  }
  /**
   * Full format.<br>
   * Полный формат.
   */
  static getLocation() {
    return this.location;
  }
  /**
   * Obtaining processed data.<br>
   * Получение обработанных данных.
   */
  static getItem() {
    return {
      ...this.item,
      language: this.language
    };
  }
  /**
   * Returns the full list of countries.<br>
   * Возвращает полный список стран.
   */
  static getList() {
    return x;
  }
  /**
   * Determines the current country by its full name.<br>
   * Определяет текущую страну по ее полному названию.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static find(e) {
    return this.getByCode(e);
  }
  /**
   * Returns a complete string with the country code and language.<br>
   * Возвращает полную строку с кодом страны и языка.
   * @param item object with data about the current country /<br>
   * объект с данными об текущей стране
   */
  static toStandard(e) {
    return `${e.language}-${e.country}`;
  }
  /**
   * Changes the data by the full code.<br>
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   * @param save save the result /<br>сохранить результат
   */
  static set(e, a) {
    this.location = e, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), a && this.storage.set(this.location);
  }
  /**
   * Returns the data about the country by its full code.<br>
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(e) {
    let a;
    return e && (e.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (a = this.getByCodeFull(e)), !a && e.match(/[A-Z]{2}/) && (a = this.getByCountry(this.toCountry(e))), !a && e.match(/[a-z]{2}/) && (a = this.getByLanguage(this.toLanguage(e)))), this.toFull(D(a ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.<br>
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country /<br>строка в виде язык-страна
   */
  static getByCodeFull(e) {
    return this.getList().find(
      (a) => B(e, [
        `${a.language}-${a.country}`,
        `${a.country}-${a.language}`
      ])
    );
  }
  /**
   * Returns the full data by country.<br>
   * Возвращает полные данные по стране.
   * @param country country /<br>страна
   */
  static getByCountry(e) {
    return this.getList().find((a) => {
      var t;
      return a.country === e || ((t = a == null ? void 0 : a.countryAlternative) == null ? void 0 : t.find((r) => r === e));
    });
  }
  /**
   * Returns the full data by language.<br>
   * Возвращает полные данные по языку.
   * @param language language /<br>язык
   */
  static getByLanguage(e) {
    return this.getList().find((a) => {
      var t;
      return a.language === e || ((t = a == null ? void 0 : a.languageAlternative) == null ? void 0 : t.find((r) => r === e));
    });
  }
  /**
   * Determines the current location.<br>
   * Определяет текущую локацию.
   */
  static findLocation() {
    var e;
    return m() && (this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || k("language")) || "en-GB";
  }
  /**
   * Determines the current language.<br>
   * Определяет текущий язык.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static findLanguage(e) {
    return e && e.match(/[a-z]{2}/) ? this.toLanguage(e) : this.item.language;
  }
  /**
   * Returns the country code by its full language-country.<br>
   * Возвращает код страны по ее полному язык-страна.
   * @param code country code /<br>код страна
   */
  static toCountry(e) {
    return e.replace(/[^A-Z]+/g, "");
  }
  /**
   * Returns the language code by its full language-country.<br>
   * Возвращает код языка по его полному язык-страна.
   * @param code country code /<br>код страна
   */
  static toLanguage(e) {
    return e.replace(/[^a-z]+/g, "");
  }
  /**
   * Adding missing data.<br>
   * Добавление недостающих данных.
   * @param item object with data about the current country /<br>
   * объект с данными об текущей стране
   */
  static toFull(e) {
    return {
      ...e,
      standard: this.toStandard(e),
      firstDay: (e == null ? void 0 : e.firstDay) || "Mo"
    };
  }
};
g(c, "storage", new Z(J)), g(c, "location"), g(c, "item"), g(c, "language"), c.location = c.findLocation(), c.language = c.findLanguage(c.location), c.item = c.getByCode(c.location);
let y = c;
class z {
  /**
   * Is the server local.<br>
   * Является ли сервер локальный.
   */
  static isLocalhost() {
    return m() ? location.hostname === "localhost" : !0;
  }
  /**
   * Getting the header for the request.<br>
   * Получение заголовка для запроса.
   * @param value list of headers /<br>список заголовков
   * @param type type of request /<br>тип запроса
   */
  static getHeaders(e, a = "application/json;charset=UTF-8") {
    if (e !== null) {
      const t = { ...e || {} };
      return a && (t["Content-Type"] = a), t;
    }
  }
  /**
   * Getting the full path to the request script.<br>
   * Получение полного пути к скрипту запроса.
   * @param path path to the script /<br>путь к скрипту
   */
  static getUrl(e) {
    return `${this.isLocalhost() ? this.urlLocalhost : this.url}${e}`.replace("{locale}", y.getLocation()).replace("{country}", y.getCountry()).replace("{language}", y.getLanguage());
  }
  /**
   * Get access to a script by the name of the team.<br>
   * Получение к скрипту по названию команды.
   * @param command name of the team /<br>название команды
   */
  static getUrlByCommand(e) {
    return this.isLocalhost() ? `${this.urlCommand}/${e}.json` : `${this.urlCommand}/?command=${e}`;
  }
  /**
   * Getting data for the body.<br>
   * Получение данных для тела.
   * @param request this request /<br>данный запрос
   */
  static getBody(e) {
    if (K(e))
      return e instanceof FormData || N(e) ? e : JSON.stringify(e);
  }
  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
   */
  static async response(e) {
    return N(e) ? await this.fetch({
      path: e
    }) : await this.fetch(e);
  }
  /**
   * Execute a query by the name of the team.<br>
   * Выполнить запрос по названию команды.
   * @param command name of the team /<br>название команды
   * @param request query string or list of parameters /<br>строка запроса или список параметров
   */
  static async responseByCommand(e, a) {
    return await this.fetch({
      path: this.getUrlByCommand(e),
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
    path: e = "",
    method: a = "GET",
    request: t = void 0,
    headers: r = {},
    type: i = "application/json;charset=UTF-8",
    init: s = {}
  }) {
    try {
      if (m()) {
        const u = this.getHeaders(r, i), l = u && a === "GET" ? "POST" : a;
        return await (await fetch(this.getUrl(e), {
          ...s,
          method: l,
          headers: u,
          body: this.getBody(t)
        })).json();
      }
    } catch (u) {
      console.error(u);
    }
    return {};
  }
}
g(z, "url", k("api", "/")), g(z, "urlLocalhost", `${k("BASE_URL", "/")}public/`), g(z, "urlCommand", "ui");
class W {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(e = y.getLocation()) {
    g(this, "geo");
    this.geo = y.find(e);
    const a = this.getLocation();
    if (a in T)
      return T[a];
    T[a] = this;
  }
  /**
   * Returns country code and language.<br>
   * Возвращает код страны и языка.
   */
  getLocation() {
    return this.geo.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  getFirstDay() {
    return this.geo.firstDay;
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(e, a) {
    let t = { type: "language" }, r;
    a && (typeof a == "string" ? t.type = a : t = {
      ...t,
      ...a
    });
    try {
      e ? r = new Intl.DisplayNames(this.getLocation(), t).of(e) : t.type === "language" ? r = new Intl.DisplayNames(this.getLocation(), t).of(this.geo.language) : t.type === "region" && (r = new Intl.DisplayNames(this.getLocation(), t).of(this.geo.country));
    } catch {
    }
    return r ?? e ?? "";
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(e, a) {
    const t = {
      type: "language",
      style: a
    };
    return this.display(e, t);
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(e, a) {
    const t = {
      type: "region",
      style: a
    };
    return this.display(e, t);
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(e, a) {
    var t, r;
    return ((r = (t = this.numberObject(a)) == null ? void 0 : t.format) == null ? void 0 : r.call(t, E(e))) || e.toString();
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    var e, a, t, r, i;
    return ((i = (r = (t = (a = (e = this.numberObject()) == null ? void 0 : e.formatToParts) == null ? void 0 : a.call(e, 1.2)) == null ? void 0 : t.find) == null ? void 0 : r.call(t, (s) => s.type === "decimal")) == null ? void 0 : i.value) || ".";
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(e, a, t = !1) {
    const r = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof a == "string" ? { currency: a } : a || {}
    }, i = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...s) => (r.currency = s[2].toUpperCase(), s[1]));
    if (t) {
      const s = this.numberObject(r);
      return s ? s.formatToParts(E(e)).filter((u) => ["literal", "currency"].indexOf(u.type) === -1).join("") : e.toString();
    } else
      return this.number(i, r);
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(e, a) {
    const t = {
      style: "unit",
      ...typeof a == "string" ? { unit: a } : a || {}
    }, r = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...i) => (t.unit = i[2].toLowerCase(), i[1]));
    return this.number(r, t);
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(e, a) {
    return this.number(e, {
      style: "percent",
      ...a || {}
    });
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(e, a) {
    return this.percent(E(e) / 100, a);
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(e, a, t, r) {
    const i = A(e), s = typeof t == "string", u = this.dateOptions(a, s ? t : "short");
    return r && (u.hour12 = !1), s || Object.assign(u, t), i.toLocaleString(this.getLocation(), u);
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(e, a, t) {
    const r = A(e), i = t || /* @__PURE__ */ new Date(), s = {
      numeric: "auto",
      ...typeof a == "string" ? { style: a } : a || {}
    };
    let u = "second", l = (r.getTime() - i.getTime()) / 1e3;
    Math.abs(l) >= 60 && (u = "minute", l /= 60, Math.abs(l) >= 60 && (u = "hour", l /= 60, Math.abs(l) >= 24 && (u = "day", l /= 24, Math.abs(l) >= 30 && (u = "month", l /= 30, Math.abs(l) >= 12 && (u = "year", l /= 12)))));
    try {
      return new Intl.RelativeTimeFormat(this.getLocation(), s).format(Math.round(l), u);
    } catch {
    }
    return "";
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
  relativeLimit(e, a, t, r, i, s, u) {
    const l = A(e), d = t || /* @__PURE__ */ new Date(), P = new Date(d), I = new Date(d);
    return P.setDate(d.getDate() - a), I.setDate(d.getDate() + a), l >= P && l <= I ? this.relative(
      l,
      r,
      d
    ) : this.date(
      l,
      s,
      i,
      u
    );
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(e, a) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { month: a || "long" }).format(A(e));
    } catch {
    }
    return "";
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(e) {
    const a = [{
      label: "",
      value: void 0
    }];
    try {
      const t = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { month: e || "long" });
      for (let i = 0; i < 12; i++)
        t.setMonth(i), a.push({
          label: r.format(t).replace(/^./, (s) => s.toUpperCase()),
          value: i + 1
        });
    } catch {
    }
    return a;
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(e, a) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { weekday: a || "long" }).format(A(e));
    } catch {
    }
    return "";
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(e) {
    const a = [{
      label: "",
      value: void 0
    }];
    try {
      const t = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }), i = t.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
      t.setDate(t.getDate() - i);
      for (let s = 0; s < 7; s++)
        a.push({
          label: r.format(t).replace(/^./, (u) => u.toUpperCase()),
          value: t.getDay()
        }), t.setDate(t.getDate() + 1);
    } catch {
    }
    return a;
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(e) {
    return this.date(e, "time");
  }
  /**
   * Sorts strings taking into account the characteristics of countries.<br>
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data /<br>массив с данными
   * @param compareFn a function for sorting /<br>функция для сортировки
   */
  sort(e, a = (t, r) => [t, r]) {
    const t = new Intl.Collator(this.getLocation());
    return e.sort((r, i) => t.compare(...a(r, i)));
  }
  /**
   * The object enables language-sensitive number formatting.<br>
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  numberObject(e) {
    try {
      return new Intl.NumberFormat(this.getLocation(), e);
    } catch {
    }
  }
  /**
   * Returns options for data according to its type.<br>
   * Возвращает options для data по его типу.
   * @param type type of data format /<br>тип формата data
   * @param display the representation of the month /<br>представление месяца
   */
  dateOptions(e, a = "short") {
    const t = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(e) !== -1 && (t.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month"].indexOf(e) !== -1 && (t.month = a), ["full", "datetime", "date", void 0, "day"].indexOf(e) !== -1 && (t.day = "2-digit"), e !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(e) !== -1 && (t.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(e) !== -1 && (t.minute = "2-digit"), ["full", "time", "second"].indexOf(e) !== -1 && (t.second = "2-digit")), t;
  }
}
const T = {}, n = "@flag", C = class C {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e = y.getLocation()) {
    this.code = e;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get(e = this.code) {
    var t;
    const a = y.find(e);
    if (a) {
      const r = this.getCountry(a);
      return {
        language: this.getLanguage(a),
        country: r,
        standard: a.standard,
        icon: (t = C.flags) == null ? void 0 : t[a.country],
        label: r,
        value: a.country
      };
    }
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(e = this.code) {
    var a;
    return (a = this.get(e)) == null ? void 0 : a.icon;
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(e) {
    return p(this.getCodes(e), (a) => this.get(a));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(e) {
    return p(this.getList(e), (a) => {
      const t = new C(a.language).get(a.standard);
      return {
        ...a,
        nationalLanguage: t == null ? void 0 : t.language,
        nationalCountry: t == null ? void 0 : t.country
      };
    });
  }
  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode(e) {
    return this.code = e, this;
  }
  /**
   * Returns a special object for formatting.<br>
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new W(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.<br>
   * Возвращает список стран для получения данных.
   * @param codes country code /<br>код страны
   */
  getCodes(e) {
    return e ?? Object.keys(C.flags);
  }
  /**
   * Getting the name of the language.<br>
   * Получение названия языка.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getLanguage(e) {
    return this.getLocation().languageName(e.language);
  }
  /**
   * Getting the name of the country.<br>
   * Получение названия страны.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getCountry(e) {
    return this.getLocation().countryName(e.country);
  }
};
g(C, "flags", {
  AD: `${n}-ad`,
  AE: `${n}-ae`,
  AF: `${n}-af`,
  AG: `${n}-ag`,
  AI: `${n}-ai`,
  AL: `${n}-al`,
  AM: `${n}-am`,
  AN: `${n}-an`,
  AO: `${n}-ao`,
  AQ: `${n}-aq`,
  AR: `${n}-ar`,
  AS: `${n}-as`,
  AT: `${n}-at`,
  AU: `${n}-au`,
  AW: `${n}-aw`,
  AX: `${n}-ax`,
  AZ: `${n}-az`,
  BA: `${n}-ba`,
  BB: `${n}-bb`,
  BD: `${n}-bd`,
  BE: `${n}-be`,
  BF: `${n}-bf`,
  BG: `${n}-bg`,
  BH: `${n}-bh`,
  BI: `${n}-bi`,
  BJ: `${n}-bj`,
  BL: `${n}-bl`,
  BM: `${n}-bm`,
  BN: `${n}-bn`,
  BO: `${n}-bo`,
  BQ: `${n}-bq`,
  BR: `${n}-br`,
  BS: `${n}-bs`,
  BT: `${n}-bt`,
  BV: `${n}-bv`,
  BW: `${n}-bw`,
  BY: `${n}-by`,
  BZ: `${n}-bz`,
  CA: `${n}-ca`,
  CC: `${n}-cc`,
  CD: `${n}-cd`,
  CF: `${n}-cf`,
  CG: `${n}-cg`,
  CH: `${n}-ch`,
  CI: `${n}-ci`,
  CK: `${n}-ck`,
  CL: `${n}-cl`,
  CM: `${n}-cm`,
  CN: `${n}-cn`,
  CO: `${n}-co`,
  CR: `${n}-cr`,
  CU: `${n}-cu`,
  CV: `${n}-cv`,
  CW: `${n}-cw`,
  CX: `${n}-cx`,
  CY: `${n}-cy`,
  CZ: `${n}-cz`,
  DE: `${n}-de`,
  DJ: `${n}-dj`,
  DK: `${n}-dk`,
  DM: `${n}-dm`,
  DO: `${n}-do`,
  DZ: `${n}-dz`,
  EC: `${n}-ec`,
  EE: `${n}-ee`,
  EG: `${n}-eg`,
  EH: `${n}-eh`,
  ER: `${n}-er`,
  ES: `${n}-es`,
  ET: `${n}-et`,
  FI: `${n}-fi`,
  FJ: `${n}-fj`,
  FK: `${n}-fk`,
  FM: `${n}-fm`,
  FO: `${n}-fo`,
  FR: `${n}-fr`,
  GA: `${n}-ga`,
  GB: `${n}-gb`,
  GD: `${n}-gd`,
  GE: `${n}-ge`,
  GF: `${n}-gf`,
  GG: `${n}-gg`,
  GH: `${n}-gh`,
  GI: `${n}-gi`,
  GL: `${n}-gl`,
  GM: `${n}-gm`,
  GN: `${n}-gn`,
  GP: `${n}-gp`,
  GQ: `${n}-gq`,
  GR: `${n}-gr`,
  GT: `${n}-gt`,
  GU: `${n}-gu`,
  GW: `${n}-gw`,
  GY: `${n}-gy`,
  HK: `${n}-hk`,
  HM: `${n}-hm`,
  HN: `${n}-hn`,
  HR: `${n}-hr`,
  HT: `${n}-ht`,
  HU: `${n}-hu`,
  ID: `${n}-id`,
  IE: `${n}-ie`,
  IL: `${n}-il`,
  IM: `${n}-im`,
  IN: `${n}-in`,
  IO: `${n}-io`,
  IQ: `${n}-iq`,
  IR: `${n}-ir`,
  IS: `${n}-is`,
  IT: `${n}-it`,
  JE: `${n}-je`,
  JM: `${n}-jm`,
  JO: `${n}-jo`,
  JP: `${n}-jp`,
  KE: `${n}-ke`,
  KG: `${n}-kg`,
  KH: `${n}-kh`,
  KI: `${n}-ki`,
  KM: `${n}-km`,
  KN: `${n}-kn`,
  KP: `${n}-kp`,
  KR: `${n}-kr`,
  KW: `${n}-kw`,
  KY: `${n}-ky`,
  KZ: `${n}-kz`,
  LA: `${n}-la`,
  LB: `${n}-lb`,
  LC: `${n}-lc`,
  LI: `${n}-li`,
  LK: `${n}-lk`,
  LR: `${n}-lr`,
  LS: `${n}-ls`,
  LT: `${n}-lt`,
  LU: `${n}-lu`,
  LV: `${n}-lv`,
  LY: `${n}-ly`,
  MA: `${n}-ma`,
  MC: `${n}-mc`,
  MD: `${n}-md`,
  ME: `${n}-me`,
  MF: `${n}-mf`,
  MG: `${n}-mg`,
  MH: `${n}-mh`,
  MK: `${n}-mk`,
  ML: `${n}-ml`,
  MM: `${n}-mm`,
  MN: `${n}-mn`,
  MO: `${n}-mo`,
  MP: `${n}-mp`,
  MQ: `${n}-mq`,
  MR: `${n}-mr`,
  MS: `${n}-ms`,
  MT: `${n}-mt`,
  MU: `${n}-mu`,
  MV: `${n}-mv`,
  MW: `${n}-mw`,
  MX: `${n}-mx`,
  MY: `${n}-my`,
  MZ: `${n}-mz`,
  NA: `${n}-na`,
  NC: `${n}-nc`,
  NE: `${n}-ne`,
  NF: `${n}-nf`,
  NG: `${n}-ng`,
  NI: `${n}-ni`,
  NL: `${n}-nl`,
  NO: `${n}-no`,
  NP: `${n}-np`,
  NR: `${n}-nr`,
  NU: `${n}-nu`,
  NZ: `${n}-nz`,
  OM: `${n}-om`,
  PA: `${n}-pa`,
  PE: `${n}-pe`,
  PF: `${n}-pf`,
  PG: `${n}-pg`,
  PH: `${n}-ph`,
  PK: `${n}-pk`,
  PL: `${n}-pl`,
  PM: `${n}-pm`,
  PN: `${n}-pn`,
  PR: `${n}-pr`,
  PS: `${n}-ps`,
  PT: `${n}-pt`,
  PW: `${n}-pw`,
  PY: `${n}-py`,
  QA: `${n}-qa`,
  RE: `${n}-re`,
  RO: `${n}-ro`,
  RS: `${n}-rs`,
  RU: `${n}-ru`,
  RW: `${n}-rw`,
  SA: `${n}-sa`,
  SB: `${n}-sb`,
  SC: `${n}-sc`,
  SD: `${n}-sd`,
  SE: `${n}-se`,
  SG: `${n}-sg`,
  SH: `${n}-sh`,
  SI: `${n}-si`,
  SJ: `${n}-sj`,
  SK: `${n}-sk`,
  SL: `${n}-sl`,
  SM: `${n}-sm`,
  SN: `${n}-sn`,
  SO: `${n}-so`,
  SR: `${n}-sr`,
  SS: `${n}-ss`,
  ST: `${n}-st`,
  SV: `${n}-sv`,
  SX: `${n}-sx`,
  SY: `${n}-sy`,
  SZ: `${n}-sz`,
  TC: `${n}-tc`,
  TD: `${n}-td`,
  TG: `${n}-tg`,
  TH: `${n}-th`,
  TJ: `${n}-tj`,
  TK: `${n}-tk`,
  TL: `${n}-tl`,
  TM: `${n}-tm`,
  TN: `${n}-tn`,
  TO: `${n}-to`,
  TR: `${n}-tr`,
  TT: `${n}-tt`,
  TV: `${n}-tv`,
  TW: `${n}-tw`,
  TZ: `${n}-tz`,
  UA: `${n}-ua`,
  UG: `${n}-ug`,
  US: `${n}-us`,
  UY: `${n}-uy`,
  UZ: `${n}-uz`,
  VA: `${n}-va`,
  VC: `${n}-vc`,
  VE: `${n}-ve`,
  VG: `${n}-vg`,
  VI: `${n}-vi`,
  VN: `${n}-vn`,
  VU: `${n}-vu`,
  WF: `${n}-wf`,
  WS: `${n}-ws`,
  YE: `${n}-ye`,
  YT: `${n}-yt`,
  ZA: `${n}-za`,
  ZM: `${n}-zm`,
  ZW: `${n}-zw`
});
let w = C;
const f = class f {
  /**
   * Checks if the given icon is in the list of connected icons.<br>
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name /<br>название иконки
   */
  static is(e) {
    return e in this.icons || this.getName(e) in this.icons;
  }
  /**
   * Returns the icon by the name.<br>
   * Возвращает иконку по названию.
   * @param index icon name /<br>название иконки
   * @param url path to the storage location of the icon, if the icon does not exist /<br>
   * путь к месту хранения иконки, если иконка не существует
   */
  static async get(e, a = "") {
    var r, i;
    this.isFlag(e) && await this.makeFlags();
    const t = ((r = this.icons) == null ? void 0 : r[this.getName(e)]) ?? ((i = this.icons) == null ? void 0 : i[e]) ?? `${e.replace(/^@/, a ?? this.url)}.svg`;
    return typeof t == "string" ? t : await t;
  }
  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return p(this.icons, (e, a) => a.replace(/^@/, ""));
  }
  /**
   * Adding custom icons.<br>
   * Добавление пользовательских иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static add(e, a) {
    this.icons[this.getName(e)] = a;
  }
  /**
   * Adding custom global icons.<br>
   * Добавление пользовательских глобальных иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static addGlobal(e, a) {
    this.icons[this.getName(e)] = `${this.urlGlobal}${a}`;
  }
  /**
   * Adding an icon by the list.<br>
   * Добавление иконки по списку.
   * @param list list of icons /<br>список иконки
   */
  static addByList(e) {
    p(e, (a, t) => this.add(t, a));
  }
  /**
   * Checks if the icon is a flag.<br>
   * Проверяет, является ли иконка флагом.
   * @param index icon name /<br>название иконки
   */
  static isFlag(e) {
    return !!e.match(n);
  }
  /**
   * Returns the icon name.<br>
   * Возвращает название иконки.
   * @param index icon name /<br>название иконки
   */
  static getName(e) {
    return `@${e}`;
  }
  /**
   * Connecting flag icons.<br>
   * Подключение иконок флагов.
   */
  static makeFlags() {
    return new Promise((e) => {
      switch (this.flags) {
        case "init":
          this.makeFlagsWait(e);
          break;
        case "none":
          this.flags = "init", import("./flags-Y8MK61fs.js").then((a) => {
            a.makeFlagsGlobal(), this.flags = "read", e();
          });
          break;
      }
    });
  }
  static makeFlagsWait(e) {
    const a = setInterval(() => {
      this.flags === "read" && (clearInterval(a), e());
    }, 64);
  }
};
g(f, "icons", {}), g(f, "url", k("UI_PATH") ?? "/icons/"), g(f, "urlGlobal", `${z.isLocalhost(), ""}${f.url}`), g(f, "flags", "none");
let G = f;
export {
  j as A,
  H as B,
  z as C,
  Z as D,
  w as E,
  W as F,
  y as G,
  k as H,
  G as I,
  m as J,
  n as K,
  se as a,
  ie as b,
  D as c,
  re as d,
  U as e,
  p as f,
  te as g,
  le as h,
  oe as i,
  X as j,
  ae as k,
  K as l,
  O as m,
  ee as n,
  S as o,
  h as p,
  Q as q,
  B as r,
  q as s,
  N as t,
  ne as u,
  $ as v,
  ue as w,
  ge as x,
  A as y,
  E as z
};
