import { type GeoDate } from '../types/geo.ts';
import { type NumberOrStringOrDate, type NumberOrString } from '../types/basic.ts';
import { type ItemValue } from '../types/object.ts';
/**
 * The Intl namespace object contains several constructors as well as functionality common
 * to the internationalization constructors and other language sensitive functions. Collectively,
 * they comprise the ECMAScript Internationalization API, which provides language sensitive
 * string comparison, number formatting, date and time formatting, and more
 *
 * Объект Intl является пространством имён для API интернационализации ECMAScript, предоставляющим
 * языка-зависимое сравнение строк, форматирование чисел и дат со временем. Конструкторы объектов
 * Collator, NumberFormat и DateTimeFormat являются свойствами объекта Intl. На этой странице
 * описаны эти свойства, а также общая функциональность конструкторов интернационализации и других
 * языка-зависимых функций
 */
export declare class GeoIntl {
    private readonly geo;
    /**
     * Constructor
     * @param code country code, full form language-country or one of them /<br>
     * код страны, полный вид язык-страна или один из них
     */
    constructor(code?: string);
    /**
     * Returns country code and language.<br>
     * Возвращает код страны и языка.
     */
    getLocation(): string;
    /**
     * Returns the first day of the week.<br>
     * Возвращает первый день недели.
     */
    getFirstDay(): string;
    /**
     * The consistent translation of language, region and script display names.<br>
     * Последовательный перевод отображаемых названий языка, региона и скрипта.
     * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
     * @param typeOptions an object with some or all of the following properties /<br>
     * объект с некоторыми или всеми из следующих свойств
     */
    display(value?: string, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): string;
    /**
     * Get display names of language.<br>
     * Получить отображаемые имена языка.
     * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
     * @param style the formatting style to use /<br>используемый стиль форматирования
     */
    languageName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /**
     * Get display names of region.<br>
     * Получить отображаемые имена региона.
     * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
     * @param style the formatting style to use /<br>используемый стиль форматирования
     */
    countryName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /**
     * In basic use without specifying a locale, a formatted string.<br>
     * При обычном использовании без указания локали форматированная строка<br>
     * @param value a number, bigint, or string, to format /<br>число для форматирования
     * @param options an object with some or all properties /<br>объект с некоторыми
     * или всеми свойствами
     */
    number(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Decimal point symbol.<br>
     * Символ десятичной точки.
     */
    decimal(): string;
    /**
     * Currency formatting.<br>
     * Форматирование валюты.
     * @param value a number, bigint, or string, to format /<br>число для форматирования
     * @param currencyOptions the currency to use in currency formatting /<br>
     * валюта для использования в форматировании валюты
     * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
     */
    currency(value: NumberOrString, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
    /**
     * Unit formatting.
     * If the style is 'unit', a unit property must be provided.<br>
     * Форматирование юнитов.
     * @param value a number, bigint, or string, to format /<br>число для форматирования
     * @param unitOptions the unit to use in unit formatting /<br>блок для использования
     * в форматировании блока
     */
    unit(value: NumberOrString, unitOptions?: string | Intl.NumberFormatOptions): string;
    /**
     * Number as a percentage.<br>
     * Число в виде процента.
     * @param value a number, bigint, or string, to format /<br>число для форматирования
     * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
     */
    percent(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Number as a percentage (unit).<br>
     * Число в виде процента (единица).
     * @param value a number, bigint, or string, to format /<br>число для форматирования
     * @param options an object with some or all properties /<br>
     * объект с некоторыми или всеми свойствами
     */
    percentBy100(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Enables language-sensitive date and time formatting.<br>
     * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
     * @param value the date to format /<br>дата для форматирования
     * @param type type of data format /<br>тип формата data
     * @param styleOptions the representation of the month /<br>представление месяца
     * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
     */
    date(value: NumberOrStringOrDate, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): string;
    /**
     * Enables language-sensitive relative time formatting.<br>
     * Включает форматирование относительного времени с учетом языка.
     * @param value a number, bigint, or string, to format /<br>число для форматирования
     * @param styleOptions the length of the internationalized message /<br>
     * длина интернационализированного сообщения
     * @param todayValue current day /<br>текущий день
     */
    relative(value: NumberOrStringOrDate, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): string;
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
    relativeLimit(value: NumberOrStringOrDate, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): string;
    /**
     * Names of months.<br>
     * Названия месяцев.
     * @param value the date to format /<br>дата для форматирования
     * @param style the representation of the month /<br>представление месяца
     */
    month(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['month']): string;
    /**
     * Array to list of months.<br>
     * Массив в список месяцев.
     * @param style the representation of the month /<br>представление месяца
     */
    months(style?: Intl.DateTimeFormatOptions['month']): ItemValue<number | undefined>[];
    /**
     * Returns names of days of the week.<br>
     * Возвращает названия дней недели.
     * @param value the date to format /<br>дата для форматирования
     * @param style the representation of the weekday /<br>представление о дне недели
     */
    weekday(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['weekday']): string;
    /**
     * An array of the list of names of the days of the week.<br>
     * Массив из списка названий дней недели.
     * @param style the representation of the weekday /<br>представление о дне недели
     */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ItemValue<number | undefined>[];
    /**
     * Time.<br>
     * Время.
     * @param value the date to format /<br>дата для форматирования
     */
    time(value: NumberOrStringOrDate): string;
    /**
     * Sorts strings taking into account the characteristics of countries.<br>
     * Сортирует строки с учетом особенностей стран.
     * @param data an array with data /<br>массив с данными
     * @param compareFn a function for sorting /<br>функция для сортировки
     */
    sort<T>(data: T[], compareFn?: (a: T, b: T) => [string, string]): T[];
    /**
     * The object enables language-sensitive number formatting.<br>
     * Объект включает форматирование чисел с учетом языка.
     * @param options an object with some or all properties /<br>
     * объект с некоторыми или всеми свойствами
     */
    private numberObject;
    /**
     * Returns options for data according to its type.<br>
     * Возвращает options для data по его типу.
     * @param type type of data format /<br>тип формата data
     * @param display the representation of the month /<br>представление месяца
     */
    private dateOptions;
}
