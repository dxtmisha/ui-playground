import { ComputedRef, Ref } from 'vue';
import { Datetime } from './Datetime.ts';
import { type GeoDate, GeoFirstDay, GeoHours } from '../types/geo.ts';
import { type NumberOrStringOrDate } from '../types/basic.ts';
import { type RefOrNormal } from '../types/ref.ts';
/**
 * A class for working with dates.<br>
 * Класс для работы с датами.
 */
export declare class DatetimeRef {
    protected item: Ref<NumberOrStringOrDate>;
    protected type: Ref<GeoDate>;
    protected code: Ref<string>;
    protected date: Ref<Date>;
    protected datetime: Datetime;
    protected year: ComputedRef<number>;
    protected month: ComputedRef<number>;
    protected day: ComputedRef<number>;
    protected hour: ComputedRef<number>;
    protected minute: ComputedRef<number>;
    protected second: ComputedRef<number>;
    /**
     * Constructor
     * @param date date for processing /<br>дата для обработки
     * @param type type of date format for output /<br>тип формата даты вывода
     * @param code country and language code /<br>код страны и языка
     */
    constructor(date: RefOrNormal<NumberOrStringOrDate>, type?: RefOrNormal<GeoDate>, code?: RefOrNormal<string>);
    /**
     * Returns the basic data for the date.<br>
     * Возвращает основные данные для даты.
     */
    getItem(): RefOrNormal<NumberOrStringOrDate>;
    /**
     * Returns a Date object.<br>
     * Возвращает объект Date.
     */
    getDate(): Ref<Date>;
    /**
     * Obtaining an object of the basic Datetime class.<br>
     * Получение объекта основного класса Datetime.
     */
    getDatetime(): Datetime;
    /**
     * Returns the format of hours.<br>
     * Возвращает формат часов.
     */
    getHoursType(): ComputedRef<GeoHours>;
    /**
     * Returns the code of the first day of the week.<br>
     * Возвращает код первого дня недели.
     */
    getFirstDayCode(): ComputedRef<GeoFirstDay>;
    /**
     * The method returns the year of the specified date according to local time.<br>
     * Метод возвращает год указанной даты по местному времени.
     */
    getYear(): ComputedRef<number>;
    /**
     * The method returns the month in the specified date according to local time,
     * as a zero-based value.<br>
     * Метод возвращает месяц указанной даты по местному времени, нумерация
     * месяцев начинается с нуля для первого месяца в году.
     */
    getMonth(): ComputedRef<number>;
    /**
     * The method returns the day of the month for the specified date according to local time.<br>
     * Метод возвращает день месяца указанной даты по местному времени.
     */
    getDay(): ComputedRef<number>;
    /**
     * The method returns the hour for the specified date, according to local time.<br>
     * Метод возвращает часы указанной даты по местному времени.
     */
    getHour(): ComputedRef<number>;
    /**
     * The method returns the minutes in the specified date according to local time.<br>
     * Метод возвращает минуты указанной даты по местному времени.
     */
    getMinute(): ComputedRef<number>;
    /**
     * The method returns the seconds in the specified date according to local time.<br>
     * Метод возвращает секунды указанной даты по местному времени.
     */
    getSecond(): ComputedRef<number>;
    /**
     * Returns the last day of the week.<br>
     * Возвращает последний день недели.
     */
    getMaxDay(): ComputedRef<number>;
    /**
     * Enables language-sensitive date and time formatting.<br>
     * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
     * @param type type of date format for output /<br>тип формата даты вывода
     * @param styleOptions the representation of the month /<br>представление месяца
     */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): ComputedRef<string>;
    /**
     * Output of standard data.<br>
     * Вывод стандартных данных.
     * @param timeZone add time zone /<br>добавить временную зону
     */
    standard(timeZone?: boolean): ComputedRef<string>;
}
