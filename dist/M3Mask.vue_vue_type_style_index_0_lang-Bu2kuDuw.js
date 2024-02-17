var F = Object.defineProperty;
var O = (n, t, e) => t in n ? F(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var a = (n, t, e) => (O(n, typeof t != "symbol" ? t + "" : t, e), e);
import { shallowRef as k, watchEffect as K, h as m, defineComponent as R, computed as S, openBlock as A, createBlock as $, unref as N } from "vue";
import { f as I, h as x, g as v, i as y, d as j, k as M, q as P, u as _, r as Y, w as q, a as H, n as U } from "./object-DLpcn8Yy.js";
import { D as G } from "./DesignConstructorAbstract-COYvvqjm.js";
import { h as Q, s as C, f as W, e as w } from "./string-BTYg8-hJ.js";
import { D as V } from "./Datetime-DeBly8TY.js";
import { a as z } from "./GeoIntl-COEyZZH7.js";
import { C as f } from "./CacheItem-J86vAm6_.js";
import { u as B } from "./useInputCheck-CeNkakET.js";
import { m as J } from "./event-MN4DTwoE.js";
class X {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.props = t;
  }
  /**
   * Is the mask numeric.<br>
   * Является ли маска числовой.
   */
  isNumber() {
    return this.get() === "number";
  }
  /**
   * Is the input mask a currency value.<br>
   * Является ли маска для ввода валютным значением.
   */
  isCurrency() {
    return this.get() === "currency";
  }
  /**
   * Is the input mask one of the numeric types.<br>
   * Является ли маска для ввода одним из числовых типов.
   */
  isCurrencyOrNumber() {
    return this.isNumber() || this.isCurrency();
  }
  /**
   * Is this a mask for email input.<br>
   * Является ли это маской для ввода email.
   */
  isEmail() {
    return this.get() === "email";
  }
  /**
   * Is the mask one of the types for time input.<br>
   * Является ли маска одним из типов для ввода времени.
   */
  isTime() {
    return [
      "full",
      "datetime",
      "time",
      "hour-minute",
      "hour",
      "minute",
      "second"
    ].indexOf(this.get()) !== -1;
  }
  /**
   * Is the mask one of the types for date input.<br>
   * Является ли маска одним из типов для ввода даты.
   */
  isDate() {
    return this.isTime() || [
      "date",
      "year-month",
      "month",
      "day"
    ].indexOf(this.get()) !== -1;
  }
  /**
   * Returns the type of mask.<br>
   * Возвращает тип маски.
   */
  get() {
    var t;
    return ((t = this.props) == null ? void 0 : t.type) ?? "text";
  }
  /**
   * Returns the type of mask for working with dates.<br>
   * Возвращает тип маски для работы с датами.
   */
  getByDate() {
    return this.isDate() ? this.get() : "date";
  }
}
class Z {
  constructor() {
    a(this, "chars", []);
    a(this, "start", !1);
  }
  /**
   * Checks for records in the buffer.
   * Проверяет наличие записей в буфере.
   */
  is() {
    return this.chars.length > 0;
  }
  /**
   * Gets a list of all records in the buffer.<br>
   * Получает список всех записей в буфере.
   */
  get() {
    return this.chars;
  }
  /**
   * Inserts a new input symbol into the buffer.<br>
   * Вставляет новый символ ввода в буфер.
   * @param key symbol that needs to be added /<br>символ, который необходимо добавить
   */
  add(t) {
    return this.chars.push(t), this;
  }
  /**
   * Starts buffering data if data is being processed.<br>
   * Начинает буферизировать данные, если в обработке идут данные.
   * @param key symbol that needs to be added /<br>символ, который необходимо добавить
   */
  go(t) {
    return this.start ? (this.add(t), !1) : (this.goStart(), !0);
  }
  /**
   * Starts buffering data
   * Начинает буферизировать данные.
   */
  goStart() {
    return this.start = !0, this;
  }
  /**
   * Resets all values to the original.<br>
   * Сбрасывает все значения до исходного.
   */
  reset() {
    return this.resetChars(), this.start = !1, this;
  }
  /**
   * Resets the saved values.<br>
   * Сбрасывает сохраненные значения.
   */
  resetChars() {
    return this.chars = [], this;
  }
}
class tt {
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    a(this, "value", !1);
    this.buffer = t;
  }
  /**
   * Checks for focus on the element.<br>
   * Проверяет наличие фокуса у элемента.
   */
  is() {
    return this.value;
  }
  /**
   * Set the element state to focused.<br>
   * Установить состояние элемента на фокусированное.
   */
  in() {
    this.value = !0, this.buffer.reset();
  }
  /**
   * Reset the focus of the element.<br>
   * Сбросить фокус элемента.
   */
  out() {
    this.value = !1, this.buffer.reset();
  }
}
class et {
  constructor() {
    a(this, "value", {});
  }
  /**
   * Checks if the selected group has a value.<br>
   * Проверяет, есть ли значение у выбранной группы.
   * @param groupName group name /<br>название группы
   */
  is(t) {
    return t in this.value;
  }
  /**
   * Returns the filling list by groups.<br>
   * Возвращает список заполнения по группам.
   */
  get() {
    return this.value;
  }
  /**
   * Returns data for caching.<br>
   * Возвращает данные для кеширования.
   */
  getCode() {
    return [
      ...Object.keys(this.value),
      ...Object.values(this.value)
    ];
  }
  /**
   * Returns the fill status by the group name.<br>
   * Возвращает заполненность по названию группы.
   * @param groupName group name /<br>название группы
   */
  getByIndex(t) {
    var e;
    return ((e = this.value) == null ? void 0 : e[t]) ?? 0;
  }
  /**
   * Adding a fill feature to the group for another 1 character.<br>
   * Добавление признака заполнения у группы на еще 1 символ.
   * @param groupName group name /<br>название группы
   */
  add(t) {
    return this.value[t] = this.getByIndex(t) + 1, this;
  }
  /**
   * Decrease by 1 the sign of the filled character in the group.<br>
   * Уменьшение на 1 признака заполненного символа у группы.
   * @param groupName group name /<br>название группы
   */
  pop(t) {
    return this.is(t) ? (--this.value[t] <= 0 && delete this.value[t], !0) : !1;
  }
  /**
   * Reset all records to the initial state.<br>
   * Сброс всех записей до начального состояния.
   */
  reset() {
    return this.value = {}, this;
  }
  /**
   * Process the mask so that the length of the rubber records increases
   * depending on the number of filled records.<br>
   * Обрабатывайте маску так, чтобы длина резиновых записей увеличивалась в
   * зависимости от количества заполненных записей.
   * @param mask selected mask /<br>выбранная маска
   */
  expandMask(t) {
    let e = t;
    return I(this.value, (s, i) => {
      e = e.replace(
        Q(i, "g", "([:value]+)"),
        (r) => `${r}${C(i, s)}`
      );
    }), e;
  }
}
class st {
  constructor() {
    a(this, "char", "");
  }
  /**
   * Checks if the active group has a transition symbol.<br>
   * Проверяет, есть ли у активной группы символ перехода.
   */
  is() {
    return this.char !== "";
  }
  /**
   * Checks if the current character is a transition character.<br>
   * Проверяет, является ли текущий символ символом перехода.
   * @param char transition symbol /<br>символ перехода
   */
  isChar(t) {
    return this.char === t;
  }
  /**
   * Returns the current transition symbol.<br>
   * Возвращает текущий символ перехода.
   */
  get() {
    return this.char;
  }
  /**
   * Changes the transition symbol.<br>
   * Изменяет символ перехода.
   * @param char transition symbol /<br>символ перехода
   */
  set(t) {
    return this.char = t, this;
  }
  /**
   * Resets the values to the base ones.<br>
   * Сбрасывает значения до базовых.
   */
  reset() {
    return this.set("");
  }
}
class it {
  constructor() {
    a(this, "length", 0);
  }
  /**
   * Checks if the values are filled in.<br>
   * Проверяет, заполнены ли значения.
   */
  is() {
    return this.get() > 0;
  }
  /**
   * Getting the length of input symbols.<br>
   * Получение длины вводимых символов.
   */
  get() {
    return this.length;
  }
  /**
   * Changing the length of input symbols.<br>
   * Изменение длины вводимых символов.
   * @param length new length /<br>новая длина
   */
  set(t) {
    return this.length = t, this;
  }
}
const rt = {
  Y: "[0-9]{4}",
  M: {
    type: "number",
    min: "1",
    max: "12"
  },
  D: (n) => {
    var e, s;
    return {
      type: "number",
      min: "1",
      max: new V(`${((e = n == null ? void 0 : n.Y) == null ? void 0 : e.value) ?? "2000"}-${((s = n == null ? void 0 : n.M) == null ? void 0 : s.value) ?? "01"}-01`).getMaxDay().toString()
    };
  },
  h: {
    type: "number",
    min: "0",
    max: "23"
  },
  m: {
    type: "number",
    min: "0",
    max: "59"
  },
  s: {
    type: "number",
    min: "0",
    max: "59"
  }
};
class at {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type object of the mask type class /<br>объект класса тип маски
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.type = e;
  }
  /**
   * Returns a DateTime object.<br>
   * Возвращает объект DateTime.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  getDatetime(t) {
    var e;
    return new V(t ?? "1987-12-18T10:20:30", this.type.getByDate(), (e = this.props) == null ? void 0 : e.language);
  }
  /**
   * Returns a mask for filling in the date.<br>
   * Возвращает маску для заполнения даты.
   */
  getMask() {
    return this.getDatetime().setHour24(!0).locale(void 0, "2-digit").replace("1987", "YYYY").replace("12", "MM").replace("18", "DD").replace("10", "hh").replace("20", "mm").replace("30", "ss").split("");
  }
  /**
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  getValue(t) {
    return this.getDatetime(t).locale(void 0, "2-digit");
  }
  /**
   * Returns the standardized date value.<br>
   * Возвращает стандартизированное значение даты.
   * @param date an object with a filled date, divided into groups of characters /<br>
   * объект с заполненной датой, разделенный на группы символов
   */
  getValueStandard(t) {
    var s, i, r, h, u, c;
    const e = `${((s = t == null ? void 0 : t.Y) == null ? void 0 : s.value) || "2000"}-${((i = t == null ? void 0 : t.M) == null ? void 0 : i.value) || "01"}-${((r = t == null ? void 0 : t.D) == null ? void 0 : r.value) || "01"}T${((h = t == null ? void 0 : t.h) == null ? void 0 : h.value) || "00"}:${((u = t == null ? void 0 : t.m) == null ? void 0 : u.value) || "00"}:${((c = t == null ? void 0 : t.s) == null ? void 0 : c.value) || "00"}`;
    return isNaN(Date.parse(e)) ? "" : this.getDatetime(e).standard(!1);
  }
  /**
   * Returns a validation template for the date.<br>
   * Возвращает шаблон проверки для даты.
   */
  getPattern() {
    return rt;
  }
  /**
   * Returns a list of symbols for output by group name.<br>
   * Возвращает список символов для вывода по названию группы.
   * @param groupName group name /<br>название группы
   */
  getView(t) {
    var e;
    return (e = this.getViewList()) == null ? void 0 : e[t];
  }
  /**
   * Returns a list of symbols for output by group.<br>
   * Возвращает список символов для вывода по группе.
   */
  getViewList() {
    return {
      Y: "y",
      M: "m",
      D: "d",
      h: "h",
      m: "m",
      s: "s"
    };
  }
}
class nt {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param rubberItem
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    this.props = t, this.type = e, this.rubberItem = s;
  }
  /**
   * Checks if there is a group for the remainder.<br>
   * Проверяет, есть ли группа для остатка.
   */
  isFractionRubber() {
    return this.props.fraction === !0;
  }
  /**
   * Gets an object for working with number formatting.<br>
   * Получает объект для работы с форматированием числа.
   */
  getIntl() {
    var t;
    return new z((t = this.props) == null ? void 0 : t.language);
  }
  /**
   * Getting the number of digits in the remainder.<br>
   * Получение количества чисел в остатке.
   */
  getFraction() {
    var e;
    if (this.type.isCurrency())
      return 2;
    const t = (e = this.props) == null ? void 0 : e.fraction;
    return typeof t == "number" ? t : typeof t == "string" && t.match(/[0-9]+/) ? Number(t) : this.rubberItem.is("f") ? this.rubberItem.getByIndex("f") + 1 : t === !0 ? 1 : 0;
  }
  /**
   * Returns masks for a number or price.<br>
   * Возвращает маски для числа или цены.
   */
  getMask() {
    return (this.type.isCurrency() ? this.getCurrency() : this.getNumber()).replace(/9/ig, "n").replace(/3/ig, "f").split("");
  }
  /**
   * Returns the settings of special characters for input.<br>
   * Возвращает настройки специальных символов для ввода.
   */
  getSpecial() {
    return {
      n: {},
      f: {
        defaultValue: "0"
      }
    };
  }
  /**
   * Getting instructions for forming a rubber mask.<br>
   * Получение инструкции для формирования резиновой маски.
   */
  getRubber() {
    return {
      n: {
        rubber: !0,
        transitionChar: this.getDecimal(),
        maxLength: 10
      },
      f: {
        rubber: this.isFractionRubber(),
        maxLength: 4
      }
    };
  }
  /**
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param value a string with a filled date /<br>строка с заполненной датой
   */
  getValueStandard(t) {
    var e, s;
    return `${((e = t == null ? void 0 : t.n) == null ? void 0 : e.value) || "0"}.${((s = t == null ? void 0 : t.f) == null ? void 0 : s.value) || "0"}`;
  }
  /**
   * Returns the data as a formatted number.<br>
   * Возвращает данные в виде отформатированного числа.
   */
  getNumber() {
    return this.getIntl().number(this.getNumberForString(), { maximumFractionDigits: 9 });
  }
  /**
   * Returns the data as a formatted price with a currency symbol.<br>
   * Возвращает данные в виде отформатированной цены с символом валюты.
   */
  getCurrency() {
    return this.getIntl().currency(this.getNumberForString());
  }
  /**
   * Returns a list of delimiter characters for transitioning to the drop group.<br>
   * Возвращает список символов-разделителей для перехода в группу дроп.
   */
  getDecimal() {
    return [this.getIntl().decimal(), "."];
  }
  /**
   * Returns a list of symbols for output by group name.<br>
   * Возвращает список символов для вывода по названию группы.
   */
  getView() {
    return "0";
  }
  /**
   * Returns a string with values for obtaining a formatted value.<br>
   * Возвращает строку со значениями для получения отформатированного значения.
   */
  getNumberForString() {
    var r;
    const t = this.getFraction(), e = C("9", this.rubberItem.getByIndex("n") + 1), s = t ? `.${C("3", t)}` : "", i = this.type.isCurrency() && ((r = this.props) != null && r.currency) ? ` ${this.props.currency}` : "";
    return `${e}${s}${i}`;
  }
}
class ht extends f {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param format
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s) {
    super(() => this.initValue()), this.props = t, this.type = e, this.format = s;
  }
  /**
   * Checks if the character is special.<br>
   * Проверяет, является ли символ специальным.
   * @param char symbol for checking /<br>символ для проверки
   */
  isSpecial(t) {
    return this.get().indexOf(t) !== -1;
  }
  /**
   * Returns the transition symbol for the selected group.<br>
   * Проверяет, является ли символ перехода для выбранной группы.
   * @param groupName group name /<br>название группы
   * @param char symbol for checking /<br>символ для проверки
   */
  isTransitionChar(t, e) {
    const s = this.getTransitionChar(t);
    return s ? x(e, s) : !1;
  }
  /**
   * Checks if the special character is only 1.<br>
   * Проверяет, является ли специальный символ только 1.
   */
  isString() {
    return this.get().length <= 1;
  }
  /**
   * Checks if there are default values.<br>
   * Проверяет, есть ли значения по умолчанию.
   * @param groupName group name /<br>название группы
   */
  isDefault(t) {
    return !!this.getDefault(t);
  }
  /**
   * Returns a list of special symbols<br>.
   * Возвращает список специальных символов.
   */
  get() {
    var t, e;
    return this.getCache([
      (t = this.props) == null ? void 0 : t.type,
      (e = this.props) == null ? void 0 : e.special
    ]);
  }
  /**
   * Returns the first special symbol to determine the entry point.<br>
   * Возвращает первый специальный символ для определения места входа.
   */
  getFirst() {
    var t;
    return ((t = this.get()) == null ? void 0 : t[0]) ?? "*";
  }
  /**
   * Returns the default values.<br>
   * Возвращает значения по умолчанию.
   * @param groupName group name /<br>название группы
   */
  getDefault(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.defaultValue;
  }
  /**
   * Returns the transition symbol for the selected group.<br>
   * Возвращает символ перехода для выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getTransitionChar(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.transitionChar;
  }
  /**
   * Returns a regular expression for checking the incoming character by groups.<br>
   * Возвращает регулярное выражение для проверки входящего символа по группам.
   * @param groupName group name /<br>название группы
   */
  getMatch(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.match;
  }
  /**
   * Returns data for checking the selected group.<br>
   * Возвращает данные для проверки выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getPattern(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.pattern;
  }
  /**
   * Возвращает данные, по который будет отображать на экране.
   * @param groupName group name /<br>название группы
   */
  getView(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.view;
  }
  /**
   * Returns an array of all groups that have special symbols.<br>
   * Возвращает массив всех групп, у которых есть специальные символы.
   */
  getRubberList() {
    const t = {}, e = this.getSpecial();
    return v(e) && I(e, (s, i) => {
      s != null && s.rubber && (t[i] = s);
    }), t;
  }
  /**
   * Getting a special symbol from props.<br>
   * Получение специального символа из props.
   */
  getSpecial() {
    var t;
    return this.type.isCurrencyOrNumber() ? this.format.getSpecial() : ((t = this.props) == null ? void 0 : t.special) ?? "*";
  }
  /**
   * Getting data about a special symbol by group.<br>
   * Получение данных о специальном символе по группе.
   * @param groupName group name /<br>название группы
   */
  getSpecialItem(t) {
    const e = this.getSpecial();
    if (v(e) && t in e)
      return e[t];
  }
  /**
   * Processes all data and returns an array with a list of special symbols.<br>
   * Обрабатывает все данные и возвращает массив со списком специальных символов.
   */
  initValue() {
    if (this.type.isCurrencyOrNumber())
      return ["n", "f"];
    if (this.type.isTime())
      return ["Y", "M", "D", "h", "m", "s"];
    if (this.type.isDate())
      return ["Y", "M", "D"];
    const t = this.getSpecial();
    return y(t) ? t : j(t) ? Object.keys(t) : [t];
  }
}
const L = /[0-9]/;
class ut {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param special
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.special = e;
  }
  /**
   * Checks if the symbol fits.<br>
   * Проверяет, подходит ли символ.
   * @param char symbol for checking /<br>символ для проверки
   * @param groupName group for checking /<br>группа для проверки
   */
  is(t, e) {
    const s = this.get(e);
    return s instanceof RegExp ? !!t.match(s) : M(s) ? !!t.match(new RegExp(s)) : !!t.match(L);
  }
  /**
   * Returns the value of the regular expression for checking.<br>
   * Возвращает значение регулярного выражения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  get(t) {
    var e;
    return (t && this.special.getMatch(t)) ?? ((e = this.props) == null ? void 0 : e.match) ?? L;
  }
  /**
   * Returns only the characters that can be entered from the string.<br>
   * Возвращает только символы, доступные для ввода из строки.
   * @param text text for checking /<br>текст для проверки
   */
  filter(t) {
    const e = this.special.get();
    return t.split("").filter((s) => e.find((i) => this.is(s, i)));
  }
}
class ct {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param special
   */
  constructor(t, e, s, i) {
    a(this, "inputs");
    this.props = t, this.type = e, this.date = s, this.special = i, this.inputs = new f(() => this.initInput());
  }
  /**
   * Checks if there is a global check of input data.<br>
   * Проверяет, есть ли глобальная проверка вводимых данных.
   */
  isCheck() {
    var t;
    return !!((t = this.props) != null && t.check);
  }
  /**
   * Returns data for verification by the group name.<br>
   * Возвращает данные для проверки по названию группы.
   * @param groupName group for checking /<br>группа для проверки
   */
  get(t) {
    var e;
    return t === "check" ? this.getCheck() : (e = this.getList()) == null ? void 0 : e[t];
  }
  /**
   * Returns a list of all available properties by groups.<br>
   * Возвращает список всех доступных свойств по группам.
   */
  getList() {
    const t = this.getByType();
    for (const e in t) {
      const s = this.getPattern(e);
      v(s) && v(t[e]) && Object.assign(t[e], s);
    }
    return t;
  }
  /**
   * Returns values for verification.<br>
   * Возвращает значения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  getPattern(t) {
    var e;
    return (t && this.special.getPattern(t)) ?? ((e = this.props) == null ? void 0 : e.pattern);
  }
  /**
   * Returns global data for input verification.<br>
   * Возвращает глобальные данные для проверки вводимых данных.
   */
  getCheck() {
    var t;
    return (t = this.props) == null ? void 0 : t.check;
  }
  /**
   * Returns an object for validation by its group.<br>
   * Возвращает объект для проверки на валидность по его группе.
   * @param groupName group for checking /<br>группа для проверки
   */
  getInput(t = "check") {
    var e;
    return (e = this.getInputList()) == null ? void 0 : e[t];
  }
  /**
   * Returns a list of objects for validation, divided by group name.<br>
   * Возвращает список объектов для проверки на валидность, разделенных по названию группы.
   */
  getInputList() {
    var t, e;
    return this.inputs.getCache([
      (t = this.props) == null ? void 0 : t.pattern,
      (e = this.props) == null ? void 0 : e.check
    ]);
  }
  /**
   * Returns a list of basic data for verification.<br>
   * Возвращает список базовых данных для проверки.
   */
  getByType() {
    if (this.type.isDate())
      return this.date.getPattern();
    const t = {};
    return this.special.get().forEach((e) => {
      t[e] = {};
    }), t;
  }
  /**
   * Initializes a list of input objects for validation.<br>
   * Инициализирует список объектов ввода для проверки на валидность.
   */
  initInput() {
    const t = {}, e = this.getCheck();
    return I(this.getList(), (s, i) => {
      t[i] = B(s, i);
    }), e && (t.check = B(e)), t;
  }
}
class ot {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.props = t, this.type = e;
  }
  /**
   * Returns whether the type is a number or mirror.<br>
   * Возвращает, является ли тип номером или зеркальным.
   */
  isEnd() {
    var t;
    return this.type.isCurrencyOrNumber() || ((t = this.props) == null ? void 0 : t.dir) === "rtl" || !1;
  }
  /**
   * Checks if the alignment value is right.<br>
   * Проверяет, является ли значение выравнивания справа.
   */
  isRight() {
    var t;
    return ((t = this.props) == null ? void 0 : t.right) || this.isEnd();
  }
}
class lt extends f {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param type
   * @param rubberItem
   * @param rubberTransition
   * @param special
   * @param match
   * @param format
   *
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, h, u) {
    super(() => this.initList()), this.props = t, this.type = e, this.rubberItem = s, this.rubberTransition = i, this.special = r, this.match = h, this.format = u;
  }
  /**
   * Checks if the selected group is rubber.<br>
   * Проверяет, является ли выбранная группа резиновой.
   * @param groupName group name /<br>название группы
   */
  is(t) {
    return t in this.getList();
  }
  /**
   * Checks if the symbol is a transition.<br>
   * Проверяет, является ли символ перехода.
   * @param char checkable symbol /<br>проверяемая переменная
   */
  isTransition(t) {
    return this.getTransitionList().indexOf(t) >= 0;
  }
  /**
   * Checks if the selected group has data and whether it is rubber.<br>
   * Проверяет, есть ли данные у выбранной группы и является ли она резиновой.
   * @param data values for verification /<br>значения для проверки
   * @param groupName group name /<br>название группы
   */
  isValue(t, e) {
    return e in t && this.is(e);
  }
  /**
   * Getting properties for the rubber group.<br>
   * Получение свойства для резиновой группы.
   * @param groupName group name /<br>название группы
   */
  get(t) {
    var e;
    return (e = this.getList()) == null ? void 0 : e[t];
  }
  /**
   * Getting a list of rubber groups.<br>
   * Получение списка резиновых групп.
   */
  getList() {
    var t, e;
    return this.getCache([
      (t = this.props) == null ? void 0 : t.type,
      (e = this.props) == null ? void 0 : e.special
    ]);
  }
  /**
   * Getting a list of transition symbols.<br>
   * Получение списка символов перехода.
   */
  getTransitionList() {
    return P(
      Object.values(this.getList()).filter(
        (t) => "transitionChar" in t && (M(t.transitionChar) || y(t.transitionChar))
      ),
      "transitionChar"
    ).flat();
  }
  /**
   * Updates the group of rubber symbols if all conditions are met and returns true.<br>
   * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
   * @param data values for verification /<br>значения для проверки
   * @param groupName group name /<br>название группы
   * @param char symbol for checking /<br>символ для проверки
   */
  update(t, e, s) {
    const i = this.get(e), r = t == null ? void 0 : t[e];
    return i && r ? x(s, i == null ? void 0 : i.transitionChar) || i != null && i.maxLength && (i == null ? void 0 : i.maxLength) <= (r == null ? void 0 : r.maxLength) ? (this.rubberTransition.set(e), !1) : (r.end && this.match.is(s, e) && !this.rubberTransition.isChar(e) && (this.rubberItem.add(e), this.rubberTransition.reset()), !0) : !1;
  }
  /**
   * Reduces the length of the entered symbol by its group.<br>
   * Уменьшает длину вводимого символа по его группе.
   * @param groupName group name /<br>название группы
   */
  pop(t) {
    return this.rubberItem.pop(t);
  }
  /**
   * Resets all states of all groups to the initial one.<br>
   * Сбрасывает все состояния всех групп до начального.
   */
  reset() {
    return this.rubberItem.reset(), this.rubberTransition.reset(), this;
  }
  /**
   * Processes data to get an object to work with elastic groups.<br>
   * Обрабатывает данные для получения объекта для работы с резиновыми группами.
   */
  initList() {
    const t = this.special.getRubberList();
    return this.type.isCurrencyOrNumber() ? _(
      this.format.getRubber(),
      t
    ) : t;
  }
}
class gt extends f {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param rubberItem
   * @param characterLength
   * @param date
   * @param format
   * @param special
   */
  constructor(e, s, i, r, h, u, c) {
    super(() => this.initMask());
    a(this, "info");
    this.props = e, this.type = s, this.rubberItem = i, this.characterLength = r, this.date = h, this.format = u, this.special = c, this.info = new f(() => this.initInfo());
  }
  /**
   * Returns the mask symbol by its index.<br>
   * Возвращает символ маски по его индексу.
   * @param index index of the symbol’s location /<br>индекс расположения символа
   */
  get(e) {
    var s;
    return ((s = this.getList()) == null ? void 0 : s[e]) ?? "";
  }
  /**
   * Returns an array with information about the location of all special characters.<br>
   * Возвращает массив с информацией о расположении всех специальных символов.
   */
  getInfo() {
    return this.info.getCache(this.getComparison());
  }
  /**
   * Returns information about the selection location.<br>
   * Возвращает информацию о месте выделения.
   * @param selection
   */
  getInfoBySelection(e) {
    const s = this.getInfo();
    return s.find((i) => i.key >= e) ?? s[s.length - 1];
  }
  /**
   * Returns the current mask.<br>
   * Возвращает текущую маску.
   */
  getList() {
    return this.getCache(this.getComparison());
  }
  /**
   * Returns the location number for replacement by its input symbol.<br>
   * Возвращает номер нахождения для замены по его символу ввода.
   * @param char input symbol /<br>символ ввода
   * @param selection minimum index for search <br>минимальный индекс для поиска
   */
  getByChar(e, s = -1) {
    let i = s;
    return this.getList().forEach((r, h) => {
      r === e && h >= s && (i = h);
    }), i;
  }
  /**
   * Returns the length of the active mask.<br>
   * Возвращает длину активной маски.
   */
  getLength() {
    return this.getList().length;
  }
  /**
   * Returns the length of the mask or the maximum length of masks if there are several.<br>
   * Возвращает длину маски или максимальную длину масок, если их несколько.
   */
  getMaxLength() {
    const e = this.getMask();
    return y(e) ? Y(e) : this.getList().length;
  }
  /**
   * Returns the length of only special characters.<br>
   * Возвращает длину только из специальных символов.
   */
  getLengthBySpecial() {
    return this.getInfo().length;
  }
  /**
   * Returns how many special characters were highlighted.<br>
   * Возвращает, сколько специальных символов было выделено.
   * @param start start of selection /<br>начало выделения
   * @param end end of selection /<br>конец выделения
   */
  getQuantity(e, s) {
    if (e === s)
      return 1;
    let i = 0;
    for (let r = e; r < s; r++)
      this.special.isSpecial(this.get(r)) && i++;
    return i;
  }
  /**
   * Returns data for cache to check for changes.<br>
   * Возвращает данные для кэша для проверки на изменения.
   */
  getComparison() {
    var e, s, i, r, h, u;
    return [
      this.characterLength.get(),
      ...this.rubberItem.getCode(),
      (e = this.props) == null ? void 0 : e.mask,
      (s = this.props) == null ? void 0 : s.special,
      (i = this.props) == null ? void 0 : i.fraction,
      (r = this.props) == null ? void 0 : r.currency,
      (h = this.props) == null ? void 0 : h.type,
      (u = this.props) == null ? void 0 : u.language
    ];
  }
  /**
   * Returns a list of masks.<br>
   * Возвращает список масок.
   */
  getMask() {
    var e;
    return ((e = this.props) == null ? void 0 : e.mask) ?? "";
  }
  /**
   * Returns the active mask.<br>
   * Возвращает активную маску.
   */
  getMaskActive() {
    const e = this.getMask();
    return y(e) ? e.find((s) => this.getSpecialLength(s) >= this.characterLength.get()) || (e == null ? void 0 : e[e.length - 1]) || "" : e;
  }
  /**
   * Returns the number of special characters in the current mask.<br>
   * Возвращает количество специальных символов в текущей маске.
   */
  getBasic() {
    return this.rubberItem.expandMask(this.getMaskActive()).split("");
  }
  /**
   * Returns the number of special characters in the current mask.<br>
   * Возвращает количество специальных символов в текущей маске.
   * @param mask selected mask /<br>выбранная маска
   */
  getSpecialLength(e) {
    return e.split("").filter((s) => this.special.isSpecial(s)).length;
  }
  /**
   * Generates a mask by type.<br>
   * Генерирует маску по типу.
   */
  initMask() {
    return this.type.isCurrencyOrNumber() ? this.format.getMask() : this.type.isDate() ? this.date.getMask() : this.getBasic();
  }
  /**
   * Generates information about special characters.<br>
   * Генерирует информацию о специальных символах.
   */
  initInfo() {
    const e = [];
    let s = 0;
    return this.getList().forEach((i, r) => {
      this.special.isSpecial(i) && (e.push({
        index: s,
        key: r,
        char: i
      }), s++);
    }), e;
  }
}
class ft {
  /**
   * Constructor
   * @param special
   * @param mask
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    a(this, "value", 0);
    a(this, "immediate", 0);
    a(this, "shift", !1);
    this.special = t, this.mask = e;
  }
  /**
   * Getting the selection key number.<br>
   * Получение номера ключа выделения.
   */
  get() {
    return this.value;
  }
  /**
   * Returns the selection number for the first element that is a special symbol.
   * Возвращает номер выделения для первого элемента, являющегося специальным символом.
   */
  getFirst() {
    var t, e;
    return (e = (t = this.mask.getInfo()) == null ? void 0 : t[0]) == null ? void 0 : e.key;
  }
  /**
   * Getting the current key of the selected character.<br>
   * Получение текущего ключа выделенного символа.
   */
  getFocus() {
    return this.getCharacter(this.value);
  }
  /**
   * Getting the next key of the selected character.<br>
   * Получение следующего ключа выделенного символа.
   */
  getNext() {
    return this.getCharacter(this.value + 1);
  }
  /**
   * Getting the previous key of the selected symbol.<br>
   * Получение предыдущего ключа выделенного символа.
   */
  getPrevious() {
    return this.getCharacter(this.value - 1);
  }
  /**
   * Getting the key number of the nearest special character.<br>
   * Получение номера ключа ближайшего специального символа.
   */
  getImmediate() {
    return this.getCharacter(this.immediate);
  }
  /**
   * Getting the number of the key shifted to the left direction.
   * Получение номера ключа, сдвинутого в левом направлении.
   */
  getShift() {
    return this.shift ? this.value > 0 ? this.getCharacter(this.value - 1) + 1 : 0 : this.getFocus();
  }
  /**
   * Changing the selection key number.<br>
   * Изменение номера ключа выделения.
   * @param selection selection number /<br>номер выделения
   */
  set(t) {
    return this.value = t, this;
  }
  /**
   * Changes the selection key number according to the mask structure.<br>
   * Изменяет номер ключа выделения по структуре маски.
   * @param selection selection number /<br>номер выделения
   * @param focus is the element in focus /<br>элемент в фокусе ли
   */
  setByMask(t, e = !0) {
    if (e) {
      let s, i;
      this.mask.getInfo().forEach((r) => {
        s === void 0 && r.key >= t && (s = r.index), r.key <= t && (i = r.index);
      }), this.set(s !== void 0 ? s : this.mask.getLengthBySpecial()), this.setImmediate(i !== void 0 ? i : this.mask.getLengthBySpecial());
    }
    return this;
  }
  /**
   * Changing the selection key for the nearest special character.<br>
   * Изменение ключа выделения для ближайшего специального символа.
   * @param immediate selection key number /<br>номер ключа выделения
   */
  setImmediate(t) {
    return this.immediate = t, this;
  }
  /**
   * Turning shift on or off.<br>
   * Включение или отключение сдвига.
   * @param shift value for shift /<br>значение для сдвига
   */
  setShift(t) {
    return this.shift = t, this;
  }
  /**
   * Resets the selection key for the nearest special character to the selection location.<br>
   * Сбрасывает ключ выделения для ближайшего специального символа до места выделения.
   */
  resetImmediate() {
    return this.immediate = this.value <= 0 ? 0 : this.value - 1, this;
  }
  /**
   * Move the selection location back by 1 step.
   * Передвигаем место выделения назад на 1 шаг.
   */
  goBack() {
    return this.value > 0 && this.value--, this;
  }
  /**
   * Move the selection location forward by 1 step.
   * Передвигаем место выделения вперед на 1 шаг.
   */
  goNext() {
    return this.value <= this.mask.getLength() && this.value++, this;
  }
  /**
   * Getting the key number at the selection location.<br>
   * Получение номера ключа по месту выделения.
   * @param selection selection location /<br>место выделения
   */
  getCharacter(t) {
    for (const e of this.mask.getInfo())
      if (e.index >= t)
        return e.key;
    return this.mask.getLength();
  }
}
const d = "~";
class pt {
  /**
   * Constructor
   * @param rubberItem
   * @param characterLength
   * @param special
   * @param rubber
   * @param mask
   * @param selection
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, h) {
    a(this, "value", []);
    this.rubberItem = t, this.characterLength = e, this.special = s, this.rubber = i, this.mask = r, this.selection = h;
  }
  /**
   * Checks if the value is filled.<br>
   * Проверяет, заполнено ли значение.
   */
  is() {
    return this.value.length > 0;
  }
  /**
   * Checks if the selected character was previously deleted.<br>
   * Проверяет, является ли выделенный символ ранее удаленным.
   */
  isCharDelete() {
    const t = this.selection.get();
    return t in this.value && this.value[t] === d;
  }
  /**
   * Getting input characters.<br>
   * Получение вводимых символов.
   */
  get() {
    return this.value;
  }
  /**
   * Getting the selected mask character.<br>
   * Получение выбранного символа маски.
   */
  getFocus() {
    return this.mask.get(this.selection.getFocus());
  }
  /**
   * Getting the mask character by the key number of the nearest special character.<br>
   * Получение символа маски по номеру ключа ближайшего специального символа.
   */
  getImmediate() {
    return this.mask.get(this.selection.getImmediate());
  }
  /**
   * Getting the next mask character.<br>
   * Получение следующего символа маски.
   */
  getNext() {
    return this.mask.get(this.selection.getNext());
  }
  /**
   * Adding 1 entered character at its selection location.<br>
   * Добавление 1 введенного символа по месту его выделения.
   * @param char entered character /<br>введенный символ
   */
  add(t) {
    return this.value.splice(this.selection.get(), this.isCharDelete() ? 1 : 0, t), this.selection.goNext().resetImmediate(), this.updateLength(), this;
  }
  /**
   * Deleting 1 entered character at its selection location.<br>
   * Удаление 1 введенного символа по месту его выделения.
   */
  pop() {
    const t = this.selection.get() - 1;
    return this.isSpecialNextAnother() ? this.value[t] = d : (this.value.splice(t, 1), this.updateLength()), this.selection.goBack().resetImmediate(), this;
  }
  /**
   * Resets the values to the initial values.<br>
   * Сбрасывает значения до начальных значений.
   */
  reset() {
    return this.value = [], this.selection.set(0).resetImmediate(), this.updateLength(), this;
  }
  /**
   * Shifts by 1 value depending on the direction of selection change.<br>
   * Сдвигает на 1 значение в зависимости от направления изменения выделения.
   * @param status shift status /<br>статус сдвига
   */
  shift(t = 1) {
    return this.characterLength.set(this.value.length + t), this;
  }
  /**
   * Checks if there is another group of special characters ahead.<br>
   * Проверяет, если впереди другая группа специальных символов.
   */
  isSpecialNextAnother() {
    const t = this.selection.get() - 1, e = this.value.length;
    if (t >= 0 && t <= e) {
      const s = this.mask.getInfo(), i = s[t].char;
      if (!this.rubberItem.is(i)) {
        for (let r = t; r < e; r++)
          if (r in s) {
            const h = s[r].char;
            if (this.special.isSpecial(h) && i !== h)
              return !0;
          }
      }
    }
    return !1;
  }
  /**
   * Updates of the length of entered characters.<br>
   * Обновления длины введенных символов.
   */
  updateLength() {
    return this.characterLength.set(this.value.length), this;
  }
}
class mt extends f {
  constructor(t, e, s, i) {
    super(() => this.initValue()), this.rubberTransition = t, this.mask = e, this.special = s, this.character = i;
  }
  /**
   * Checks if the values are filled in.<br>
   * Проверяет, заполнены ли значения.
   */
  is() {
    return this.getLength() > 0;
  }
  /**
   * Receiving basic standard values.<br>
   * Получение базовых стандартных значений.
   */
  get() {
    return this.getCache([
      ...this.mask.getList(),
      ...this.character.get()
    ]);
  }
  /**
   * Getting the character from the basic standard values by its key number.<br>
   * Получение символа из базовых стандартных значений по его номеру ключа.
   * @param index key number /<br>номер ключа
   */
  getChar(t) {
    var e;
    return (e = this.get()) == null ? void 0 : e[t];
  }
  /**
   * Getting the length of basic standard values.<br>
   * Получение длины базовых стандартных значений.
   */
  getLength() {
    return this.get().length;
  }
  /**
   * Initialization of basic standard values.<br>
   * Инициализация базовых стандартных значений.
   */
  initValue() {
    const t = this.character.get(), e = [];
    let s = 0;
    for (const i of this.mask.getList())
      if (!this.special.isSpecial(i))
        e.push(i);
      else if (s in t) {
        if (e.push(t[s++]), s > t.length && this.rubberTransition.is() && !this.rubberTransition.isChar(i))
          break;
      } else
        break;
    return e.join("");
  }
}
class dt {
  /**
   * Constructor
   * @param type
   * @param date
   * @param format
   * @param mask
   * @param special
   * @param valueBasic
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, h) {
    a(this, "info");
    a(this, "valueFinal");
    this.type = t, this.date = e, this.format = s, this.mask = i, this.special = r, this.valueBasic = h, this.info = new f(() => this.initInfo()), this.valueFinal = new f(() => this.initValue());
  }
  /**
   * Checks if the mask is fully filled.<br>
   * Проверяет, полностью ли заполнена маска.
   */
  isFull() {
    for (const t of Object.values(this.getInfo()))
      if (!t.full)
        return !1;
    return !0;
  }
  /**
   * Checks if the mask is fully filled by length.<br>
   * Проверяет, полностью ли заполнена маска по длине.
   */
  isEnd() {
    for (const t of Object.values(this.getInfo()))
      if (!t.end)
        return !1;
    return !0;
  }
  /**
   * Checks if the values are fully filled in for the group.<br>
   * Проверяет, полностью ли заполнены значения по группе.
   * @param groupName group name /<br>название группы
   */
  isFullByGroup(t) {
    var e;
    return ((e = this.getInfoItem(t)) == null ? void 0 : e.full) ?? !1;
  }
  /**
   * Getting the final value for export.<br>
   * Получение конечного значения для экспорта.
   */
  get() {
    return this.type.isCurrencyOrNumber() ? this.format.getValueStandard(this.getInfo()) : this.type.isDate() ? this.isFull() ? this.date.getValueStandard(this.getInfo()) : "" : this.valueFinal.getCache([
      ...this.valueBasic.get()
    ]);
  }
  /**
   * Getting full information for global verification.<br>
   * Получение полной информации для глобальной проверки.
   */
  getForCheck() {
    const t = this.get();
    return {
      group: "check",
      value: t,
      maxLength: t.length,
      full: this.isFull(),
      end: this.isEnd(),
      chars: t.split("")
    };
  }
  /**
   * Receiving a list with information about standard values.<br>
   * Получение списка с информацией о стандартных значениях.
   */
  getInfo() {
    return this.info.getCache([
      this.valueBasic.get(),
      ...this.mask.getList()
    ]);
  }
  /**
   * Getting information for a specific group.<br>
   * Получение информации для конкретной группы.
   * @param groupName group name /<br>название группы
   */
  getInfoItem(t) {
    var e;
    return (e = this.getInfo()) == null ? void 0 : e[t];
  }
  /**
   * Checks if there is a value by the key number in the basic values.<br>
   * Проверяет, есть ли значение по номеру ключа в базовых значениях.
   * @param index key number /<br>номер ключа
   */
  isStandard(t) {
    return !!this.valueBasic.getChar(t);
  }
  /**
   * Adding a new character to the list, divided by groups, if it is not there,
   * and returning the property of the given group.<br>
   * Добавление нового символа в список, разделенный по группам, если его там нет,
   * и возвращение свойства данной группы.
   * @param data data for verification /<br>данные для проверки
   * @param groupName group name /<br>название группы
   */
  add(t, e) {
    return e in t || (t[e] = {
      group: e,
      value: "",
      maxLength: 0,
      full: !1,
      end: !1,
      chars: []
    }), t[e];
  }
  /**
   * Initialization of the list with information about standard values.<br>
   * Инициализация списка с информацией о стандартных значениях.
   */
  initInfo() {
    const t = this.valueBasic.get(), e = {};
    return this.mask.getList().forEach((s, i) => {
      if (this.special.isSpecial(s)) {
        const r = this.add(e, s);
        this.isStandard(i) && t[i] !== d && r.chars.push(t[i]), r.maxLength++, r.value = r.full ? r.chars.join("") : "", r.full = this.special.isDefault(s) || r.maxLength === r.chars.length, r.end = r.maxLength === r.chars.length;
      }
    }), e;
  }
  initValue() {
    const t = this.valueBasic.get().split(""), e = this.mask.getList();
    let s = "";
    for (const i in e)
      if (i in t)
        s += t[i];
      else {
        const r = this.special.getDefault(e[i]);
        r && (s += r);
      }
    return s;
  }
}
class bt {
  /**
   * Constructor
   * @param pattern
   * @param value
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    this.pattern = t, this.value = e;
  }
  /**
   * Checks if the current group has an error.<br>
   * Проверяет, есть ли ошибка у текущей группы.
   * @param groupName group name /<br>название группы
   */
  isError(t) {
    var s;
    const e = (s = this.get()) == null ? void 0 : s.group;
    return !!(e && (e === t || e === "check"));
  }
  /**
   * Checks the correctness of filling in the values.<br>
   * Проверяет корректность заполнения значений.
   */
  checkValidity() {
    return this.get() === void 0;
  }
  /**
   * We get an object with information about the error if there is an error, or undefined.<br>
   * Получаем объект с информацией об ошибке, если есть ошибка, или undefined.
   */
  get() {
    for (const t of Object.values(this.pattern.getInputList())) {
      const e = this.value.getInfoItem(t.group);
      if (e && e.full) {
        const s = t.check(e.value);
        if (s && !s.status)
          return s;
      }
    }
    return this.getValidationCheck();
  }
  /**
   * Getting an error message.<br>
   * Получение сообщения об ошибке.
   */
  getMessage() {
    var t;
    return ((t = this.get()) == null ? void 0 : t.validationMessage) ?? "";
  }
  /**
   * Getting global check data.<br>
   * Получение данных глобальной проверки.
   */
  getValidationCheck() {
    var t;
    if (this.value.isFull()) {
      const e = this.value.getForCheck();
      if (this.pattern.isCheck()) {
        const s = (t = this.pattern.getInput(e.group)) == null ? void 0 : t.check(e.value);
        if (s && !s.status)
          return s;
      }
      return {
        value: e.value,
        required: !0
      };
    }
    return {
      value: this.value.get(),
      required: !1
    };
  }
}
const kt = "_";
class vt {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param format
   * @param special
   * @param rubber
   * @param mask
   * @param valueBasic
   * @param validation
   * @param className define class names for each symbol /<br>определить названия класс для каждого символа
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, h, u, c, l, g = "is-character") {
    this.props = t, this.type = e, this.date = s, this.format = i, this.special = r, this.rubber = h, this.mask = u, this.valueBasic = c, this.validation = l, this.className = g;
  }
  /**
   * Returns an array with information for displaying on the screen.<br>
   * Возвращает массив с информацией для вывода на экран.
   */
  get() {
    const t = [], e = this.valueBasic.get();
    return this.mask.getList().forEach((s, i) => {
      const r = e == null ? void 0 : e[i];
      t.push({
        className: `${this.className} ${this.className}--${this.getStatus(s, r)}`,
        value: this.getValue(s, r)
      });
    }), t;
  }
  /**
   * Getting the basic standard values for the input field.<br>
   * Получение базовых стандартных значений для поля ввода.
   */
  getInput() {
    const t = [], e = this.mask.getList();
    return this.valueBasic.get().split("").forEach((s, i) => {
      s === d ? t.push(
        this.getSpecialToView((e == null ? void 0 : e[i]) ?? "") ?? s
      ) : t.push(s);
    }), t.join("");
  }
  /**
   * Checks if the value is filled in.<br>
   * Проверяет, заполнено ли значение.
   * @param value input values /<br>вводимые значения
   */
  isValue(t) {
    return !!(t && t !== d);
  }
  /**
   * Returns the status by the entered symbol and the location.<br>
   * Возвращает статус по введенному символу и месту.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param value input values /<br>вводимые значения
   */
  getStatus(t, e) {
    return this.isValue(e) ? this.special.isSpecial(t) ? this.validation.isError(t) ? "error" : "special" : "standard" : this.rubber.isTransition(t) ? "transition" : "placeholder";
  }
  /**
   * Returns a symbol from a filled value by mask or special symbol.<br>
   * Возвращает символ из заполненного значения по маске или специальному символу.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param value input values /<br>вводимые значения
   */
  getValue(t, e) {
    return this.isValue(e) ? e : this.getSpecialToView(t);
  }
  /**
   * Returns a special symbol for output by the entered symbol.<br>
   * Возвращает специальный символ для вывода по введенному символу.
   * @param char checkable symbol /<br>проверяемая переменная
   */
  getSpecialToView(t) {
    var e;
    return this.special.isSpecial(t) ? this.getViewChar(t) ?? this.special.getView(t) ?? ((e = this.props) == null ? void 0 : e.view) ?? kt : t;
  }
  /**
   * Returns a special symbol by symbol.<br>
   * Возвращает специальный символ по типу символа.
   * @param groupName group name /<br>название группы
   */
  getViewChar(t) {
    if (this.type.isDate())
      return this.date.getView(t);
    if (this.type.isCurrencyOrNumber())
      return this.format.getView();
  }
}
class yt {
  /**
   * Constructor
   * @param validation
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    a(this, "type");
    a(this, "event");
    this.validation = t, this.callbackEvent = e;
  }
  /**
   * Checks whether additional data needs to be generated for the current event.<br>
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   */
  isValue() {
    return !!(this.type && ["input", "change"].indexOf(this.type) >= 0);
  }
  /**
   * Initializes event handling.<br>
   * Инициализирует обработку событий.
   */
  go() {
    if (this.type && this.event) {
      const t = this.isValue() ? this.validation.get() : void 0;
      this.callbackEvent(this.type, this.event, t);
    }
    return this;
  }
  /**
   * Changes the event type and event data.<br>
   * Изменяет тип события и данные события.
   * @param type event name /<br>название события
   * @param event event object /<br>объект события
   */
  set(t, e) {
    return this.setType(t), this.setEvent(e), this;
  }
  /**
   * Changes the event type.<br>
   * Изменяет тип события.
   * @param type event name /<br>название события
   */
  setType(t) {
    return this.type = t, this;
  }
  /**
   * Changes the event object.<br>
   * Изменяет объект события.
   * @param event event object /<br>объект события
   */
  setEvent(t) {
    return this.event = t, this;
  }
  /**
   * Resets the state.<br>
   * Сбрасывает состояние.
   */
  reset() {
    return this.resetType(), this.resetEvent(), this;
  }
  /**
   * Resets the type state.<br>
   * Сбрасывает состояние тип.
   */
  resetType() {
    return this.type = void 0, this;
  }
  /**
   * Resets the event state.<br>
   * Сбрасывает состояние события.
   */
  resetEvent() {
    return this.event = void 0, this;
  }
}
class Ct {
  /**
   * Constructor
   * @param type
   * @param buffer
   * @param focus
   * @param rubberTransition
   * @param date
   * @param special
   * @param match
   * @param rubber
   * @param mask
   * @param selection
   * @param character
   * @param valueBasic
   * @param value
   * @param emit
   * @param element input element /<br>элемент ввода
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, h, u, c, l, g, p, b, T, D, E) {
    this.type = t, this.buffer = e, this.focus = s, this.rubberTransition = i, this.date = r, this.special = h, this.match = u, this.rubber = c, this.mask = l, this.selection = g, this.character = p, this.valueBasic = b, this.value = T, this.emit = D, this.element = E;
  }
  /**
   * Adding new characters that can be entered by the user.<br>
   * Добавление новых вводимых символов.
   * @param selection number of the selected key /<br>номер выделенного ключа
   * @param chars a list of values that are entered by the user /<br>список вводимых значений
   * @param focus is the element focused /<br>находится ли элемент в фокусе
   */
  add(t, e, s = !0) {
    let i = !1;
    return this.selection.setByMask(t, s), this.rubberTransition.reset(), q(e).forEach((r) => {
      const h = this.character.getFocus(), u = this.character.getImmediate();
      this.selection.setShift(
        this.rubber.update(this.value.getInfo(), u, r)
      ), this.rubberTransition.is() ? this.selection.setByMask(
        this.mask.getByChar(this.rubberTransition.get(), this.selection.getImmediate()) + 1,
        s
      ) : this.match.is(r, h) && (this.character.shift(), this.character.getFocus() && (this.mask.getMaxLength() > this.valueBasic.getLength() || this.character.isCharDelete()) && (this.character.add(r), i = !0));
    }), this.goSelection(), i;
  }
  /**
   * Removing selected input characters.<br>
   * Удаление выделенных вводимых символов.
   * @param start location of the start of the selected area /<br>место начала выделенной области
   * @param end location of the end of the selected area /<br>конечный место выделенной области
   * @param focus is the element focused /<br>находится ли элемент в фокусе
   */
  pop(t, e = t, s = !0) {
    if (t >= 0 && e <= this.mask.getMaxLength()) {
      let i = this.mask.getQuantity(t, e);
      for (s && this.selection.setByMask(e); i--; )
        this.rubberTransition.reset(), this.character.pop(), this.character.shift(0), this.selection.setShift(
          this.rubber.pop(this.character.getFocus())
        );
      this.goSelection();
    }
    return this;
  }
  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset(t = "") {
    if (this.character.reset(), this.rubber.reset(), H(t)) {
      const e = this.type.isDate() ? this.date.getValue(t) : t;
      this.add(0, this.extra(e.split("")));
    }
    return this;
  }
  /**
   * Removing extra values for insertion.<br>
   * Удаление лишних значений для вставки.
   * @param chars insertion of symbols /<br>вставка символов
   */
  extra(t) {
    var h, u;
    if (this.character.is())
      return t;
    const e = this.mask.getList(), s = [...t];
    let i = this.match.get((u = (h = this.mask.getInfo()) == null ? void 0 : h[0]) == null ? void 0 : u.char), r = 0;
    if (i)
      for (const c in e) {
        const l = e[c];
        if (this.special.isSpecial(l)) {
          for (let g = r; g < s.length && (r++, !s[g].match(i)); g++)
            ;
          i = this.match.get(l);
        } else if (l.match(i)) {
          let g = !1;
          for (let p = r; p < s.length; p++) {
            const b = s[p];
            if (r++, b.match(i)) {
              l === b ? (s.splice(p, 1), r--) : g = !0;
              break;
            }
          }
          if (g)
            break;
        }
      }
    return s;
  }
  /**
   * Restores the selection location.<br>
   * Восстанавливает место выделения.
   */
  goSelection(t = !0) {
    return this.focus.is() && requestAnimationFrame(() => {
      if (this.element.value && (!t || !this.goBuffer())) {
        const e = this.valueBasic.getLength(), s = this.selection.getShift(), i = e < s ? e : s;
        this.element.value.selectionEnd = i, this.element.value.selectionStart = i;
      }
    }), this;
  }
  /**
   * Checks if the data is in the buffer. If it is, then add it.<br>
   * Проверяет, если данный в буфер. Если есть, то добавляем.
   */
  goBuffer() {
    return this.buffer.is() ? (this.add(this.selection.getShift(), this.buffer.get()), this.buffer.resetChars(), !0) : (this.buffer.reset(), this.emit.go(), !1);
  }
}
class It {
  /**
   * Constructor
   * @param buffer
   * @param focus
   * @param characterLength
   * @param right
   * @param selection
   * @param valueBasic
   * @param validation
   * @param emit
   * @param data
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e, s, i, r, h, u, c, l) {
    a(this, "change", !1);
    a(this, "unidentified");
    this.buffer = t, this.focus = e, this.characterLength = s, this.right = i, this.selection = r, this.valueBasic = h, this.validation = u, this.emit = c, this.data = l;
  }
  /**
   * Capture of the event in focus.<br>
   * Перехват события в фокусе.
   * @param event event object /<br>объект события
   */
  onFocus(t) {
    this.change = !1, this.focus.in(), this.emit.set("focus", t).go();
  }
  /**
   * Capture of the event when focus is lost.<br>
   * Перехват события при потере фокуса.
   * @param event event object /<br>объект события
   */
  onBlur(t) {
    this.change && this.emit.setType("change").go(), this.focus.out(), this.emit.set("blur", t).go();
  }
  /**
   * Intercepting keypress to get a character.<br>
   * Перехват нажатия для получения символа.
   * @param event invoked event /<br>вызываемое событие
   */
  onKeydown(t) {
    const e = this.getSelectionInfo(t), {
      start: s,
      end: i
    } = e;
    this.emit.set("keydown", t).go(), !this.isMetaKey(t) && (this.isKey(t) ? t.key === "Backspace" ? (s > 0 || s !== i) && this.data.pop(s, i) : t.key.length <= 1 && (s === i ? this.buffer.go(t.key) && this.data.add(s, t.key) : (this.buffer.goStart(), this.data.pop(s, i).add(this.selection.getShift(), t.key))) : this.unidentified = e);
  }
  /**
   * Intercept key release to check for arrow presses.<br>
   * Перехват отпуска клавиши для проверки нажатия на стрелки.
   * @param event invoked event /<br>вызываемое событие
   */
  onKeyup(t) {
    this.emit.set("keyup", t).go(), !this.isMetaKey(t) && this.isKey(t) && [
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft"
    ].indexOf(t.key) >= 0 && (this.makeToEnd(t), this.makeToStart(t));
  }
  /**
   * Intercepting the event before data modification.<br>
   * Перехват события перед изменением данных.
   * @param event invoked event /<br>вызываемое событие
   */
  onBeforeinput(t) {
    this.emit.set("beforeinput", t).go(), this.unidentified || (this.makeChange(t), J(t));
  }
  /**
   * Intercepting the event during data modification.
   * Перехват события при изменении данных.
   * @param event invoked event /<br>вызываемое событие
   */
  onInput(t) {
    if (this.unidentified) {
      const e = t.target;
      (this.unidentified.length > e.value.length || this.unidentified.start !== this.unidentified.end) && this.data.pop(this.unidentified.start, this.unidentified.end), "data" in t ? t.data && this.buffer.go(t.data) && this.data.add(this.unidentified.start, t.data) : this.data.reset(e.value), this.makeChange(t), this.unidentified = void 0;
    }
  }
  /**
   * Intercepting the event of data insertion from the buffer.<br>
   * Перехват события вставки данных из буфера.
   * @param event invoked event /<br>вызываемое событие
   */
  onPaste(t) {
    const {
      start: e,
      end: s
    } = this.getSelectionInfo(t);
    W(t).then((i) => {
      const r = i.split("");
      e === s ? this.data.add(e, this.data.extra(r)) : this.data.pop(e, s).add(this.selection.getShift(), this.data.extra(r)), this.change = !0, this.emit.set("paste", t).go();
    }).catch((i) => console.error("getClipboardData", i));
  }
  /**
   * Intercepting the change event, this is for intercepting the browser’s autocomplete event.<br>
   * Перехват события изменения, это для перехвата события автозаполнения в браузере.
   * @param event invoked event /<br>вызываемое событие
   */
  onChange(t) {
    const e = t.target;
    this.data.reset(e.value), this.emit.set("change", t).go();
  }
  /**
   * Intercepting the click event to change the selection location, if necessary.<br>
   * Перехват события клика для изменения места выделения, если это необходимо.
   * @param event invoked event /<br>вызываемое событие
   */
  onClick(t) {
    this.makeToEnd(t), this.makeToStart(t);
  }
  /**
   * Was the meta button pressed.<br>
   * Была ли нажата мета-кнопка.
   * @param event invoked event /<br>вызываемое событие
   */
  isMetaKey(t) {
    return t.metaKey || t.altKey || t.ctrlKey;
  }
  /**
   * Checks the key values in the event.<br>
   * Проверяет значения key в событии.
   * @param event invoked event /<br>вызываемое событие
   */
  isKey(t) {
    return "key" in t && t.key !== "Unidentified";
  }
  /**
   * Getting data about the selection at the event element.<br>
   * Получение данных о выделении у элемента события.
   * @param event invoked event /<br>вызываемое событие
   */
  getSelectionInfo(t) {
    const e = t.target;
    return {
      target: e,
      start: e.selectionStart ?? 0,
      end: e.selectionEnd ?? 0,
      length: e.value.length
    };
  }
  /**
   * Preparing to send an event.<br>
   * Подготовка для отправки события.
   * @param event invoked event /<br>вызываемое событие
   */
  makeChange(t) {
    this.change = !0, this.emit.set("input", t), !this.buffer.is() && (this.emit.go(), this.emit.resetType());
  }
  /**
   * Changes the cursor position if the alignment is right.<br>
   * Изменяет место указателя, если выравнивание справа.
   * @param event invoked event /<br>вызываемое событие
   */
  makeToEnd(t) {
    if (this.right.isRight()) {
      const e = this.valueBasic.getLength(), {
        target: s,
        start: i,
        end: r
      } = this.getSelectionInfo(t);
      i > e && (s.selectionStart = e), r > e && (s.selectionEnd = e);
    }
  }
  /**
   * Check when selecting from the front, before all special characters.<br>
   * Проверка при выделении спереди, перед всеми специальными символами.
   * @param event invoked event /<br>вызываемое событие
   */
  makeToStart(t) {
    const e = this.selection.getFirst(), {
      target: s,
      start: i
    } = this.getSelectionInfo(t);
    i < e && (s.selectionStart = e, s.selectionEnd = e);
  }
}
class St {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   */
  constructor(t, e, s, i = "is-character") {
    a(this, "type");
    a(this, "buffer");
    a(this, "focus");
    a(this, "rubberItem");
    a(this, "rubberTransition");
    a(this, "characterLength");
    a(this, "date");
    a(this, "format");
    a(this, "special");
    a(this, "match");
    a(this, "pattern");
    a(this, "right");
    a(this, "rubber");
    a(this, "item");
    a(this, "selection");
    a(this, "character");
    a(this, "valueBasic");
    a(this, "value");
    a(this, "validation");
    a(this, "view");
    a(this, "emit");
    a(this, "data");
    a(this, "event");
    a(this, "oldValue", "");
    this.type = new X(t), this.buffer = new Z(), this.focus = new tt(this.buffer), this.rubberItem = new et(), this.rubberTransition = new st(), this.characterLength = new it(), this.date = new at(t, this.type), this.format = new nt(
      t,
      this.type,
      this.rubberItem
    ), this.special = new ht(
      t,
      this.type,
      this.format
    ), this.match = new ut(t, this.special), this.pattern = new ct(
      t,
      this.type,
      this.date,
      this.special
    ), this.right = new ot(
      t,
      this.type
    ), this.rubber = new lt(
      t,
      this.type,
      this.rubberItem,
      this.rubberTransition,
      this.special,
      this.match,
      this.format
    ), this.item = new gt(
      t,
      this.type,
      this.rubberItem,
      this.characterLength,
      this.date,
      this.format,
      this.special
    ), this.selection = new ft(
      this.special,
      this.item
    ), this.character = new pt(
      this.rubberItem,
      this.characterLength,
      this.special,
      this.rubber,
      this.item,
      this.selection
    ), this.valueBasic = new mt(
      this.rubberTransition,
      this.item,
      this.special,
      this.character
    ), this.value = new dt(
      this.type,
      this.date,
      this.format,
      this.item,
      this.special,
      this.valueBasic
    ), this.validation = new bt(
      this.pattern,
      this.value
    ), this.view = new vt(
      t,
      this.type,
      this.date,
      this.format,
      this.special,
      this.rubber,
      this.item,
      this.valueBasic,
      this.validation,
      i
    ), this.emit = new yt(
      this.validation,
      s
    ), this.data = new Ct(
      this.type,
      this.buffer,
      this.focus,
      this.rubberTransition,
      this.date,
      this.special,
      this.match,
      this.rubber,
      this.item,
      this.selection,
      this.character,
      this.valueBasic,
      this.value,
      this.emit,
      e
    ), this.event = new It(
      this.buffer,
      this.focus,
      this.characterLength,
      this.right,
      this.selection,
      this.valueBasic,
      this.validation,
      this.emit,
      this.data
    ), t != null && t.value && (this.oldValue = w(t == null ? void 0 : t.value), this.data.reset(this.oldValue));
  }
  /**
   * Receiving basic standard values.<br>
   * Получение базовых стандартных значений.
   */
  getValueBasic() {
    if (this.right.isRight()) {
      let t = "";
      return this.view.get().forEach((e) => {
        t += e.value;
      }), t;
    }
    return this.view.getInput();
  }
  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses() {
    return {
      "??--value": this.characterLength.is(),
      "??--end": this.right.isEnd()
    };
  }
  /**
   * Restores the selection location.<br>
   * Восстанавливает место выделения.
   */
  goSelection() {
    return this.data.goSelection(!1), this;
  }
  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset(t) {
    const e = w(t);
    return this.oldValue !== e ? (this.oldValue = e, this.data.reset(e), this.emit.set("reset", {}).go(), !0) : !1;
  }
}
class wt {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param element input element /<br>элемент ввода
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, i = "is-character") {
    a(this, "mask");
    a(this, "valueBasic", k(""));
    a(this, "value", k(""));
    a(this, "view", k([]));
    a(this, "classes", k({}));
    a(this, "onFocus", (t) => this.mask.event.onFocus(t));
    a(this, "onBlur", (t) => this.mask.event.onBlur(t));
    a(this, "onKeydown", (t) => this.mask.event.onKeydown(t));
    a(this, "onKeyup", (t) => this.mask.event.onKeyup(t));
    a(this, "onBeforeinput", (t) => this.mask.event.onBeforeinput(t));
    a(this, "onInput", (t) => this.mask.event.onInput(t));
    a(this, "onChange", (t) => this.mask.event.onChange(t));
    a(this, "onPaste", (t) => this.mask.event.onPaste(t));
    a(this, "onClick", (t) => this.mask.event.onClick(t));
    this.mask = new St(
      t,
      e,
      (r, h, u) => {
        r === "input" && this.updateValue(), s(r, h, u);
      },
      i
    ), K(() => {
      this.mask.reset(t == null ? void 0 : t.value), this.updateValue();
    });
  }
  /**
   * Updating the entered data.<br>
   * Обновление введенных данных.
   */
  updateValue() {
    const t = this.mask.getValueBasic(), e = t !== this.valueBasic.value;
    return this.valueBasic.value = t, this.value.value = this.mask.value.get(), this.view.value = this.mask.view.get(), e && this.mask.goSelection(), this.classes.value = this.mask.getClasses(), this;
  }
}
class Bt extends G {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, s, i) {
    super(
      e,
      s,
      i
    );
    a(this, "mask");
    this.mask = new wt(
      s,
      this.element,
      (r, h, u) => {
        var c;
        (c = this.emits) == null || c.call(
          this,
          r,
          h,
          u
        );
      },
      this.getSubClass(["character", "item"])
    ), this.init();
  }
  /**
   * Element for storing the final data.<br>
   * Элемент для хранения конечных данных.
   */
  renderData() {
    var s;
    const e = this.setup();
    if ((s = this.props) != null && s.name)
      return m("input", {
        type: "hidden",
        name: this.props.name,
        value: e.value.value
      });
  }
  /**
   * Rendering method for input.<br>
   * Метод рендеринга для ввода.
   */
  renderInput() {
    const e = this.setup();
    return m("input", {
      ref: this.element,
      class: e.classes.value.input,
      value: e.valueBasic.value,
      onFocus: e.onFocus,
      onBlur: e.onBlur,
      onKeydown: e.onKeydown,
      onKeyup: e.onKeyup,
      onBeforeinput: e.onBeforeinput,
      onInput: e.onInput,
      onChange: e.onChange,
      onPaste: e.onPaste,
      onClick: e.onClick
    });
  }
  /**
   * Rendering method for displaying the mask and the input data.<br>
   * Метод рендеринга для вывода маски и вводимых данных.
   */
  renderView() {
    const e = this.setup(), s = e.view.value;
    if (s.length > 0) {
      const i = [];
      return s.forEach((r, h) => {
        i.push(
          m("span", {
            key: h,
            class: r.className
          }, r.value)
        );
      }), m("span", { class: e.classes.value.character }, i);
    }
    return m("span", {
      class: e.classes.value.character,
      innerHTML: "&nbsp;"
    });
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      valueBasic: this.mask.valueBasic,
      value: this.mask.value,
      view: this.mask.view,
      onFocus: this.mask.onFocus,
      onBlur: this.mask.onBlur,
      onKeydown: this.mask.onKeydown,
      onKeyup: this.mask.onKeyup,
      onBeforeinput: this.mask.onBeforeinput,
      onInput: this.mask.onInput,
      onChange: this.mask.onChange,
      onPaste: this.mask.onPaste,
      onClick: this.mask.onClick
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        ...this.toClassName(this.mask.classes.value)
      },
      // :classes [!] System label / Системная метка
      input: this.getSubClass("input"),
      character: this.getSubClass("character"),
      characterItem: this.getSubClass("character__item")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    const e = this.setup(), s = [
      this.renderData(),
      this.renderInput(),
      this.renderView()
    ];
    return m("label", {
      ...this.getAttrs(),
      class: e.classes.value.main
    }, s);
  }
}
const o = {
  special: "*",
  match: /[0-9]/,
  type: "text",
  view: "_"
}, Lt = {
  // Values
  type: {
    type: String,
    default: o == null ? void 0 : o.type
  },
  name: String,
  value: [String, Number],
  mask: [String, Array],
  special: {
    type: [String, Array, Object],
    default: o == null ? void 0 : o.special
  },
  match: {
    type: [String, RegExp],
    default: o == null ? void 0 : o.match
  },
  pattern: Object,
  check: Object,
  fraction: [String, Boolean, Number],
  currency: String,
  // Options
  language: String,
  view: {
    type: String,
    default: o == null ? void 0 : o.view
  },
  // :prop [!] System label / Системная метка
  visible: Boolean,
  right: Boolean,
  dir: String
}, xt = {
  // :values [!] System label / Системная метка
  dir: ["ltr", "rtl"]
  // :values [!] System label / Системная метка
}, Mt = {
  ...Lt,
  // :prop [!] System label / Системная метка
  visible: Boolean,
  right: Boolean,
  dir: String
}, Nt = /* @__PURE__ */ R({
  name: "M3Mask",
  __name: "M3Mask",
  props: { ...Mt },
  emits: ["focus", "blur", "keydown", "keyup", "beforeinput", "input", "change", "paste", "reset"],
  setup(n, { expose: t, emit: e }) {
    const s = e, i = n, r = S(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mask": !0,
        "m3-mask--visible": i.visible,
        "m3-mask--right": i.right,
        [`m3-mask--dir--${i.dir}`]: U(xt.dir, i.dir)
        // :classes-values [!] System label / Системная метка
      }
    })), h = S(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), u = new Bt(
      "m3.mask",
      i,
      {
        emits: s,
        classes: r,
        styles: h
      }
    ), c = u.render();
    return t(u.expose()), (l, g) => (A(), $(N(c)));
  }
});
export {
  Nt as _
};
