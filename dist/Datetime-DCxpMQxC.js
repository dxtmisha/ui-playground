var u = Object.defineProperty;
var l = (i, t, e) => t in i ? u(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var o = (i, t, e) => (l(i, typeof t != "symbol" ? t + "" : t, e), e);
import { t as a, G as y, a as d } from "./GeoIntl-BuIZUv_8.js";
class h {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, e = "date", s = y.getLocation()) {
    o(this, "date");
    o(this, "hour24", !1);
    o(this, "watch");
    this.type = e, this.code = s, this.date = a(t);
  }
  /**
   * Returns an object for working with formatting.<br>
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new d(this.code);
  }
  /**
   * Returns a Date object.<br>
   * Возвращает объект Date.
   */
  getDate() {
    return this.date;
  }
  /**
   * Returns the type of data output.<br>
   * Возвращает тип вывода данных.
   */
  getType() {
    return this.type;
  }
  /**
   * Returns the format of hours.<br>
   * Возвращает формат часов.
   */
  getHoursType() {
    const t = this.clone();
    return t.setHours(23), t.toLocaleTimeString(this.getIntl().getLocation(), { hour: "2-digit" }).match(/23/ig) ? "24" : "12";
  }
  /**
   * Whether to use 12-hour time.<br>
   * Использовать ли 12-часовой формат времени.
   */
  getHour24() {
    return this.hour24;
  }
  /**
   * The method returns the difference, in minutes, between
   * a date as evaluated in the UTC time zone, and the same date as evaluated
   * in the local time zone.<br>
   * Метод возвращает смещение часового пояса относительно часового пояса UTC
   * в минутах для текущей локали.
   */
  getTimeZoneOffset() {
    return this.date.getTimezoneOffset();
  }
  /**
   * Returns the time zone as a string.<br>
   * Возвращает временную зону в виде строки.
   * @param style the style of the returned data /<br>стиль возвращаемых данных
   */
  getTimeZone(t) {
    const e = this.getTimeZoneOffset();
    if (t === "minute")
      return e.toString();
    const s = e / 60 * -1;
    if (t === "hour")
      return this.getIntl().number(Math.trunc(s), { signDisplay: "always" });
    const r = this.getIntl().number(Math.trunc(s), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), n = s.toString().match(/.\d+/) ? "30" : "00";
    return t === "RFC" ? `${r}${n}` : `${r}:${n}`;
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    const t = this.getIntl().getFirstDay();
    return t === "Sa" ? 6 : t === "Su" ? 0 : 1;
  }
  /**
   * The method returns the year of the specified date according to local time.<br>
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear() {
    return this.date.getFullYear();
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.<br>
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return this.date.getMonth() + 1;
  }
  /**
   * The method returns the day of the month for the specified date according to local time.<br>
   * Метод возвращает день месяца указанной даты по местному времени
   */
  getDay() {
    return this.date.getDate();
  }
  /**
   * The method returns the hour for the specified date, according to local time.<br>
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return this.date.getHours();
  }
  /**
   * The method returns the minutes in the specified date according to local time.<br>
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return this.date.getMinutes();
  }
  /**
   * The method returns the seconds in the specified date according to local time.<br>
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return this.date.getSeconds();
  }
  /**
   * Returns the last day of the week.<br>
   * Возвращает последний день недели.
   */
  getMaxDay() {
    return this.getMonth() > 0 ? this.cloneDayLast().getDay() : 0;
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(t = this.type, e) {
    return this.getIntl().date(
      this.date,
      t,
      e,
      this.hour24
    );
  }
  /**
   * Returns the formatted year.<br>
   * Возвращает отформатированный год.
   * @param style the representation of the month /<br>представление месяца
   */
  localeYear(t = "numeric") {
    return this.locale("year", { year: t });
  }
  /**
   * Returns the formatted month.<br>
   * Возвращает отформатированный месяц.
   * @param style the representation of the month /<br>представление месяца
   */
  localeMonth(t = "long") {
    return this.locale("month", { month: t });
  }
  /**
   * Returns the formatted day.<br>
   * Возвращает отформатированный день.
   * @param style the representation of the month /<br>представление месяца
   */
  localeDay(t = "numeric") {
    return this.locale("day", { day: t });
  }
  /**
   * Returns the formatted hour.<br>
   * Возвращает отформатированный час.
   * @param style the representation of the month /<br>представление месяца
   */
  localeHour(t = "numeric") {
    return this.locale("hour", { hour: t });
  }
  /**
   * Returns the formatted minute.<br>
   * Возвращает отформатированную минуту.
   * @param style the representation of the month /<br>представление месяца
   */
  localeMinute(t = "numeric") {
    return this.locale("minute", { minute: t });
  }
  /**
   * Returns the formatted second.<br>
   * Возвращает отформатированную секунду.
   * @param style the representation of the month /<br>представление месяца
   */
  localeSecond(t = "numeric") {
    return this.locale("second", { second: t });
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(t = !0) {
    const e = new h(this.date, this.type, "en-GB"), s = [];
    let r;
    return e.setHour24(!0), this.type === "hour-minute" ? r = e.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (s.push(e.localeYear()), s.push(e.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && s.push(e.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (r = e.locale("time"))), `${s.join("-")}${r ? `T${r}${t ? e.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.<br>
   * Изменять полностью дату.
   * @param value an integer value representing the number /<br>
   * целочисленное значение, представляющее число
   */
  setDate(t) {
    return this.date = a(t), this.update(), this;
  }
  /**
   * Change the type of data output.<br>
   * Изменить тип вывода данных.
   * @param value type of output /<br>тип вывод
   */
  setType(t) {
    return this.type = t, this.update(), this;
  }
  /**
   * Whether to use 12-hour time.<br>
   * Использовать ли 12-часовой формат времени.
   * @param value If true, output the 12-hour time format /<br>
   * если true, выводить 12-часовой формат времени
   */
  setHour24(t) {
    return this.hour24 = t, this.update(), this;
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
   * The function is called when the data is updated.<br>
   * Функция вызывается при обновлении данных.
   * @param watch the function calls /<br>функция вызывает
   */
  setWatch(t) {
    return this.watch = t, this;
  }
  /**
   * The method sets the full year for a specified date according to local time.<br>
   * Метод устанавливает полный год указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setYear(t) {
    return this.date.setFullYear(t), this.update(), this;
  }
  /**
   * The method sets the month for a specified date according to the currently set year.<br>
   * Метод устанавливает месяц указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setMonth(t) {
    return this.date.setMonth(t - 1), this.update(), this;
  }
  /**
   * The method changes the day of the month of a given Date instance, based on local time.<br>
   * Метод устанавливает день месяца указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setDay(t) {
    return this.date.setDate(t), this.update(), this;
  }
  /**
   * The method sets the hours for a specified date according to local time.<br>
   * Метод устанавливает часы указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setHour(t) {
    return this.date.setHours(t), this.update(), this;
  }
  /**
   * The method sets the minutes for a specified date according to local time
   *
   * Метод устанавливает минуты указанной даты по местному времени
   * @param value value / значения
   */
  setMinute(t) {
    return this.date.setMinutes(t), this.update(), this;
  }
  /**
   * The method sets the seconds for a specified date according to local time.<br>
   * Метод устанавливает секунды указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setSecond(t) {
    return this.date.setSeconds(t), this.update(), this;
  }
  /**
   * Shift the date by a given value in years.<br>
   * Сдвинуть дату на заданное значение в годах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByYear(t) {
    return this.setYear(this.date.getFullYear() + t), this;
  }
  /**
   * Shift the date by a given value in months.<br>
   * Сдвинуть дату на заданное значение в месяцах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByMonth(t) {
    return this.setMonth(this.date.getMonth() + 1 + t), this;
  }
  /**
   * Shift the date by a given value in days.<br>
   * Сдвинуть дату на заданное значение в днях.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByDay(t) {
    return this.setDay(this.date.getDate() + t), this;
  }
  /**
   * Shift the date by a given value in hours.<br>
   * Сдвинуть дату на заданное значение в часах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByHour(t) {
    return this.setHour(this.date.getHours() + t), this;
  }
  /**
   * Shift the date by a given value in minutes.<br>
   * Сдвинуть дату на заданное значение в минутах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByMinute(t) {
    return this.setMinute(this.date.getMinutes() + t), this;
  }
  /**
   * Shift the date by a given value in seconds.<br>
   * Сдвинуть дату на заданное значение в секундах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveBySecond(t) {
    return this.setSecond(this.date.getSeconds() + t), this;
  }
  /**
   * Translate to the first month.<br>
   * Переводить на первый месяц.
   */
  moveMonthFirst() {
    return this.setMonth(1), this;
  }
  /**
   * Translate to the first month.<br>
   * Переводить на первый месяц.
   */
  moveMonthLast() {
    return this.setMonth(12), this;
  }
  /**
   * Translate to the first day of the next month.<br>
   * Переводить на первый день следующего месяца.
   */
  moveMonthNext() {
    return this.setDay(1).moveByMonth(1), this;
  }
  /**
   * Translate to the first day of the previous month.<br>
   * Переводить на первый день предыдущего месяца.
   */
  moveMonthPrevious() {
    return this.setDay(1).moveByMonth(-1), this;
  }
  /**
   * Translate to the first day of the week.<br>
   * Переводить на первый день недели.
   */
  moveWeekdayFirst() {
    const t = this.date.getDay(), e = this.getFirstDayCode();
    return this.moveByDay(
      (e === 6 ? -1 : e) - t
    ), this;
  }
  /**
   * Translate to the last day of the week.<br>
   * Переводить на последний день недели.
   */
  moveWeekdayLast() {
    return this.moveWeekdayFirst().moveByDay(6), this;
  }
  /**
   * Translate to the first day of the first week of the month.<br>
   * Переводить на первый день первой недели месяца.
   */
  moveWeekdayFirstByMonth() {
    return this.moveDayFirst().moveWeekdayFirst(), this;
  }
  /**
   * Translate to the first day of the first full week of the following month.<br>
   * Переводить на первый день первой полной недели следующего месяца.
   */
  moveWeekdayLastByMonth() {
    return this.moveDayLast().moveWeekdayLast(), this;
  }
  /**
   * Translate to the next week.<br>
   * Переводить на следующую неделю.
   */
  moveWeekdayNext() {
    return this.moveWeekdayFirst().moveByDay(7), this;
  }
  /**
   * Translate to the previous week.<br>
   * Переводить на предыдущую неделю.
   */
  moveWeekdayPrevious() {
    return this.moveWeekdayFirst().moveByDay(-7), this;
  }
  /**
   * Translate to the first day of the month.<br>
   * Переводить на первый день месяца.
   */
  moveDayFirst() {
    return this.setDay(1), this;
  }
  /**
   * Translate to the last day of the month.<br>
   * Переводить на последний день месяца.
   */
  moveDayLast() {
    return this.setDay(1).moveByMonth(1).moveByDay(-1), this;
  }
  /**
   * Translate to the next day.<br>
   * Переводить на следующий день.
   */
  moveDayNext() {
    return this.moveByDay(1), this;
  }
  /**
   * Translate to the previous day.<br>
   * Переводить на предыдущий день.
   */
  moveDayPrevious() {
    return this.moveByDay(-1), this;
  }
  /**
   * Clone the Date object.<br>
   * Клонировать объект Date.
   */
  clone() {
    return new Date(this.date);
  }
  /**
   * Clone the GeoDate object.<br>
   * Клонировать объект GeoDate.
   */
  cloneClass() {
    return new this.constructor(
      this.clone(),
      this.type,
      this.code
    );
  }
  /**
   * Clone the GeoDate object and set the month to January.<br>
   * Клонировать объект GeoDate и установить месяц на январь.
   */
  cloneMonthFirst() {
    return this.cloneClass().moveMonthFirst();
  }
  /**
   * Clone the GeoDate object and move the month to the end of the year.<br>
   * Клонировать объект GeoDate и перевести месяц на конец года.
   */
  cloneMonthLast() {
    return this.cloneClass().moveMonthLast();
  }
  /**
   * Clone the GeoDate object and transfer it one month ahead.<br>
   * Клонировать объект GeoDate и перевести на 1 месяц вперед.
   */
  cloneMonthNext() {
    return this.cloneClass().moveMonthNext();
  }
  /**
   * Clone the GeoDate object and transfer it one month back.<br>
   * Клонировать объект GeoDate и перевести на 1 месяц назад.
   */
  cloneMonthPrevious() {
    return this.cloneClass().moveMonthPrevious();
  }
  /**
   * Returns the first day of the week according to the current date.<br>
   * Возвращает первый день недели по текущей дате.
   */
  cloneWeekdayFirst() {
    return this.cloneClass().moveWeekdayFirst();
  }
  /**
   * Returns the last day of the week according to the current date.<br>
   * Возвращает последний день недели по текущей дате.
   */
  cloneWeekdayLast() {
    return this.cloneClass().moveWeekdayLast();
  }
  /**
   * Returns the first day of the week according to the current month.<br>
   * Возвращает первый день недели по текущему месяцу.
   */
  cloneWeekdayFirstByMonth() {
    return this.cloneClass().moveWeekdayFirstByMonth();
  }
  /**
   * Returns the last day of the week according to the current month.<br>
   * Возвращает последний день недели по текущему месяцу.
   */
  cloneWeekdayLastByMonth() {
    return this.cloneClass().moveWeekdayLastByMonth();
  }
  /**
   * Returns the next week according to the current date.<br>
   * Возвращает следующую неделю по текущей дате.
   */
  cloneWeekdayNext() {
    return this.cloneClass().moveWeekdayNext();
  }
  /**
   * Returns the previous week according to the current date.<br>
   * Возвращает предыдущую неделю по текущей дате.
   */
  cloneWeekdayPrevious() {
    return this.cloneClass().moveWeekdayPrevious();
  }
  /**
   * Clone the GeoDate object and move the day to the beginning of the month.<br>
   * Клонировать объект GeoDate и перевести день на начало месяца.
   */
  cloneDayFirst() {
    return this.cloneClass().moveDayFirst();
  }
  /**
   * Clone the GeoDate object and move the day to the end of the month.<br>
   * Клонировать объект GeoDate и перевести день на конец месяца.
   */
  cloneDayLast() {
    return this.cloneClass().moveDayLast();
  }
  /**
   * Clone the GeoDate object and move by 1 day.<br>
   * Клонировать объект GeoDate и перевести на 1 день.
   */
  cloneDayNext() {
    return this.cloneClass().moveDayNext();
  }
  /**
   * Clone the GeoDate object and go back by 1 day.<br>
   * Клонировать объект GeoDate и вернуться на 1 день.
   */
  cloneDayPrevious() {
    return this.cloneClass().moveDayPrevious();
  }
  /**
   * Updating all values.<br>
   * Обновление всех значений.
   */
  update() {
    var t;
    return (t = this.watch) == null || t.call(
      this,
      this.date,
      this.type,
      this.hour24
    ), this;
  }
}
export {
  h as D
};
