import { GeoIntl } from './GeoIntl';
import { type GeoDate, type GeoFirstDay, type GeoHours, type GeoTimeZoneStyle } from '../types/geo';
import { type NumberOrStringOrDate } from '../types/basic';
/**
 * A class for working with dates.<br>
 * Класс для работы с датами.
 */
export declare class Datetime {
    protected type: GeoDate;
    protected code: string;
    protected date: Date;
    protected hour24: boolean;
    protected watch?: (date: Date, type: GeoDate, hour24: boolean) => void;
    /**
     * Constructor
     * @param date date for processing /<br>дата для обработки
     * @param type type of date format for output /<br>тип формата даты вывода
     * @param code country and language code /<br>код страны и языка
     */
    constructor(date?: NumberOrStringOrDate, type?: GeoDate, code?: string);
    /**
     * Returns an object for working with formatting.<br>
     * Возвращает объект для работы с форматированием.
     */
    getIntl(): GeoIntl;
    /**
     * Returns a Date object.<br>
     * Возвращает объект Date.
     */
    getDate(): Date;
    /**
     * Returns the type of data output.<br>
     * Возвращает тип вывода данных.
     */
    getType(): string;
    /**
     * Returns the format of hours.<br>
     * Возвращает формат часов.
     */
    getHoursType(): GeoHours;
    /**
     * Whether to use 12-hour time.<br>
     * Использовать ли 12-часовой формат времени.
     */
    getHour24(): boolean;
    /**
     * The method returns the difference, in minutes, between
     * a date as evaluated in the UTC time zone, and the same date as evaluated
     * in the local time zone.<br>
     * Метод возвращает смещение часового пояса относительно часового пояса UTC
     * в минутах для текущей локали.
     */
    getTimeZoneOffset(): number;
    /**
     * Returns the time zone as a string.<br>
     * Возвращает временную зону в виде строки.
     * @param style the style of the returned data /<br>стиль возвращаемых данных
     */
    getTimeZone(style?: GeoTimeZoneStyle): string;
    /**
     * Returns the code of the first day of the week.<br>
     * Возвращает код первого дня недели.
     */
    getFirstDayCode(): GeoFirstDay;
    /**
     * The method returns the year of the specified date according to local time.<br>
     * Метод возвращает год указанной даты по местному времени.
     */
    getYear(): number;
    /**
     * The method returns the month in the specified date according to local time,
     * as a zero-based value.<br>
     * Метод возвращает месяц указанной даты по местному времени, нумерация
     * месяцев начинается с нуля для первого месяца в году.
     */
    getMonth(): number;
    /**
     * The method returns the day of the month for the specified date according to local time.<br>
     * Метод возвращает день месяца указанной даты по местному времени
     */
    getDay(): number;
    /**
     * The method returns the hour for the specified date, according to local time.<br>
     * Метод возвращает часы указанной даты по местному времени.
     */
    getHour(): number;
    /**
     * The method returns the minutes in the specified date according to local time.<br>
     * Метод возвращает минуты указанной даты по местному времени.
     */
    getMinute(): number;
    /**
     * The method returns the seconds in the specified date according to local time.<br>
     * Метод возвращает секунды указанной даты по местному времени.
     */
    getSecond(): number;
    /**
     * Returns the last day of the week.<br>
     * Возвращает последний день недели.
     */
    getMaxDay(): number;
    /**
     * Enables language-sensitive date and time formatting.<br>
     * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
     * @param type type of date format for output /<br>тип формата даты вывода
     * @param styleOptions the representation of the month /<br>представление месяца
     */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): string;
    /**
     * Returns the formatted year.<br>
     * Возвращает отформатированный год.
     * @param style the representation of the month /<br>представление месяца
     */
    localeYear(style?: Intl.DateTimeFormatOptions['year']): string;
    /**
     * Returns the formatted month.<br>
     * Возвращает отформатированный месяц.
     * @param style the representation of the month /<br>представление месяца
     */
    localeMonth(style?: Intl.DateTimeFormatOptions['month']): string;
    /**
     * Returns the formatted day.<br>
     * Возвращает отформатированный день.
     * @param style the representation of the month /<br>представление месяца
     */
    localeDay(style?: Intl.DateTimeFormatOptions['day']): string;
    /**
     * Returns the formatted hour.<br>
     * Возвращает отформатированный час.
     * @param style the representation of the month /<br>представление месяца
     */
    localeHour(style?: Intl.DateTimeFormatOptions['hour']): string;
    /**
     * Returns the formatted minute.<br>
     * Возвращает отформатированную минуту.
     * @param style the representation of the month /<br>представление месяца
     */
    localeMinute(style?: Intl.DateTimeFormatOptions['minute']): string;
    /**
     * Returns the formatted second.<br>
     * Возвращает отформатированную секунду.
     * @param style the representation of the month /<br>представление месяца
     */
    localeSecond(style?: Intl.DateTimeFormatOptions['second']): string;
    /**
     * Output of standard data.<br>
     * Вывод стандартных данных.
     * @param timeZone add time zone /<br>добавить временную зону
     */
    standard(timeZone?: boolean): string;
    /**
     * Change the date completely.<br>
     * Изменять полностью дату.
     * @param value an integer value representing the number /<br>
     * целочисленное значение, представляющее число
     */
    setDate(value: NumberOrStringOrDate): this;
    /**
     * Change the type of data output.<br>
     * Изменить тип вывода данных.
     * @param value type of output /<br>тип вывод
     */
    setType(value: GeoDate): this;
    /**
     * Whether to use 12-hour time.<br>
     * Использовать ли 12-часовой формат времени.
     * @param value If true, output the 12-hour time format /<br>
     * если true, выводить 12-часовой формат времени
     */
    setHour24(value: boolean): this;
    /**
     * To change the location.<br>
     * Изменить местоположение.
     * @param code country and language code /<br>код страны и языка
     */
    setCode(code: string): this;
    /**
     * The function is called when the data is updated.<br>
     * Функция вызывается при обновлении данных.
     * @param watch the function calls /<br>функция вызывает
     */
    setWatch(watch: (date: Date, type: GeoDate, hour24: boolean) => void): this;
    /**
     * The method sets the full year for a specified date according to local time.<br>
     * Метод устанавливает полный год указанной даты по местному времени.
     * @param value value /<br>значения
     */
    setYear(value: number): this;
    /**
     * The method sets the month for a specified date according to the currently set year.<br>
     * Метод устанавливает месяц указанной даты по местному времени.
     * @param value value /<br>значения
     */
    setMonth(value: number): this;
    /**
     * The method changes the day of the month of a given Date instance, based on local time.<br>
     * Метод устанавливает день месяца указанной даты по местному времени.
     * @param value value /<br>значения
     */
    setDay(value: number): this;
    /**
     * The method sets the hours for a specified date according to local time.<br>
     * Метод устанавливает часы указанной даты по местному времени.
     * @param value value /<br>значения
     */
    setHour(value: number): this;
    /**
     * The method sets the minutes for a specified date according to local time
     *
     * Метод устанавливает минуты указанной даты по местному времени
     * @param value value / значения
     */
    setMinute(value: number): this;
    /**
     * The method sets the seconds for a specified date according to local time.<br>
     * Метод устанавливает секунды указанной даты по местному времени.
     * @param value value /<br>значения
     */
    setSecond(value: number): this;
    /**
     * Shift the date by a given value in years.<br>
     * Сдвинуть дату на заданное значение в годах.
     * @param value values for moving /<br>значения для перемещения
     */
    moveByYear(value: number): this;
    /**
     * Shift the date by a given value in months.<br>
     * Сдвинуть дату на заданное значение в месяцах.
     * @param value values for moving /<br>значения для перемещения
     */
    moveByMonth(value: number): this;
    /**
     * Shift the date by a given value in days.<br>
     * Сдвинуть дату на заданное значение в днях.
     * @param value values for moving /<br>значения для перемещения
     */
    moveByDay(value: number): this;
    /**
     * Shift the date by a given value in hours.<br>
     * Сдвинуть дату на заданное значение в часах.
     * @param value values for moving /<br>значения для перемещения
     */
    moveByHour(value: number): this;
    /**
     * Shift the date by a given value in minutes.<br>
     * Сдвинуть дату на заданное значение в минутах.
     * @param value values for moving /<br>значения для перемещения
     */
    moveByMinute(value: number): this;
    /**
     * Shift the date by a given value in seconds.<br>
     * Сдвинуть дату на заданное значение в секундах.
     * @param value values for moving /<br>значения для перемещения
     */
    moveBySecond(value: number): this;
    /**
     * Translate to the first month.<br>
     * Переводить на первый месяц.
     */
    moveMonthFirst(): this;
    /**
     * Translate to the first month.<br>
     * Переводить на первый месяц.
     */
    moveMonthLast(): this;
    /**
     * Translate to the first day of the next month.<br>
     * Переводить на первый день следующего месяца.
     */
    moveMonthNext(): this;
    /**
     * Translate to the first day of the previous month.<br>
     * Переводить на первый день предыдущего месяца.
     */
    moveMonthPrevious(): this;
    /**
     * Translate to the first day of the week.<br>
     * Переводить на первый день недели.
     */
    moveWeekdayFirst(): this;
    /**
     * Translate to the last day of the week.<br>
     * Переводить на последний день недели.
     */
    moveWeekdayLast(): this;
    /**
     * Translate to the first day of the first week of the month.<br>
     * Переводить на первый день первой недели месяца.
     */
    moveWeekdayFirstByMonth(): this;
    /**
     * Translate to the first day of the first full week of the following month.<br>
     * Переводить на первый день первой полной недели следующего месяца.
     */
    moveWeekdayLastByMonth(): this;
    /**
     * Translate to the next week.<br>
     * Переводить на следующую неделю.
     */
    moveWeekdayNext(): this;
    /**
     * Translate to the previous week.<br>
     * Переводить на предыдущую неделю.
     */
    moveWeekdayPrevious(): this;
    /**
     * Translate to the first day of the month.<br>
     * Переводить на первый день месяца.
     */
    moveDayFirst(): this;
    /**
     * Translate to the last day of the month.<br>
     * Переводить на последний день месяца.
     */
    moveDayLast(): this;
    /**
     * Translate to the next day.<br>
     * Переводить на следующий день.
     */
    moveDayNext(): this;
    /**
     * Translate to the previous day.<br>
     * Переводить на предыдущий день.
     */
    moveDayPrevious(): this;
    /**
     * Clone the Date object.<br>
     * Клонировать объект Date.
     */
    clone(): Date;
    /**
     * Clone the GeoDate object.<br>
     * Клонировать объект GeoDate.
     */
    cloneClass(): Datetime;
    /**
     * Clone the GeoDate object and set the month to January.<br>
     * Клонировать объект GeoDate и установить месяц на январь.
     */
    cloneMonthFirst(): Datetime;
    /**
     * Clone the GeoDate object and move the month to the end of the year.<br>
     * Клонировать объект GeoDate и перевести месяц на конец года.
     */
    cloneMonthLast(): Datetime;
    /**
     * Clone the GeoDate object and transfer it one month ahead.<br>
     * Клонировать объект GeoDate и перевести на 1 месяц вперед.
     */
    cloneMonthNext(): Datetime;
    /**
     * Clone the GeoDate object and transfer it one month back.<br>
     * Клонировать объект GeoDate и перевести на 1 месяц назад.
     */
    cloneMonthPrevious(): Datetime;
    /**
     * Returns the first day of the week according to the current date.<br>
     * Возвращает первый день недели по текущей дате.
     */
    cloneWeekdayFirst(): Datetime;
    /**
     * Returns the last day of the week according to the current date.<br>
     * Возвращает последний день недели по текущей дате.
     */
    cloneWeekdayLast(): Datetime;
    /**
     * Returns the first day of the week according to the current month.<br>
     * Возвращает первый день недели по текущему месяцу.
     */
    cloneWeekdayFirstByMonth(): Datetime;
    /**
     * Returns the last day of the week according to the current month.<br>
     * Возвращает последний день недели по текущему месяцу.
     */
    cloneWeekdayLastByMonth(): Datetime;
    /**
     * Returns the next week according to the current date.<br>
     * Возвращает следующую неделю по текущей дате.
     */
    cloneWeekdayNext(): Datetime;
    /**
     * Returns the previous week according to the current date.<br>
     * Возвращает предыдущую неделю по текущей дате.
     */
    cloneWeekdayPrevious(): Datetime;
    /**
     * Clone the GeoDate object and move the day to the beginning of the month.<br>
     * Клонировать объект GeoDate и перевести день на начало месяца.
     */
    cloneDayFirst(): Datetime;
    /**
     * Clone the GeoDate object and move the day to the end of the month.<br>
     * Клонировать объект GeoDate и перевести день на конец месяца.
     */
    cloneDayLast(): Datetime;
    /**
     * Clone the GeoDate object and move by 1 day.<br>
     * Клонировать объект GeoDate и перевести на 1 день.
     */
    cloneDayNext(): Datetime;
    /**
     * Clone the GeoDate object and go back by 1 day.<br>
     * Клонировать объект GeoDate и вернуться на 1 день.
     */
    cloneDayPrevious(): Datetime;
    /**
     * Updating all values.<br>
     * Обновление всех значений.
     */
    protected update(): this;
}
