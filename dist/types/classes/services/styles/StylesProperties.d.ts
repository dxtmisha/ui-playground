import { type PropertiesItemsItem } from '../properties/PropertiesItems.ts';
import { type PropertyItem } from '../../../types/property.ts';
/**
 * A class for converting all property types in SCSS.<br>
 * Класс для преобразования всех тип свойство в виде scss.
 */
export declare class StylesProperties {
    private space;
    private property;
    private parent?;
    private readonly item;
    private readonly data;
    private first;
    /**
     * Constructor
     * @param space пробелы
     * @param property array with all property records /<br>массив со всеми записями свойств
     * @param parent object of ancestor /<br>объект предка
     */
    constructor(space: string, property: PropertiesItemsItem, parent?: PropertyItem | undefined);
    /**
     * Generating all properties and variables.<br>
     * Генерация всех свойств и переменных.
     */
    make(): string[];
    /**
     * Checks if the type is one that requires a space at the beginning.<br>
     * Проверяет, является ли тип тот, для которого надо пробел поставить в начале.
     * @param item element for checking /<br>элемент для проверки
     */
    private isAuxiliary;
    /**
     * Checks if the type is a base property of variables.<br>
     * Проверяет, является ли тип базовым свойством переменных.
     * @param item element for checking /<br>элемент для проверки
     */
    private isNotBasic;
    /**
     * Returns a function for iterating over all records.<br>
     * Возвращает функцию для обхода всех записей.
     * @param property initial variables for processing /<br>начальные переменные для обработки
     */
    private getContent;
    /**
     * Parameters for a class that converts data by type.<br>
     * Параметры для класса, который преобразует данные по типу.
     * @param property initial variables for processing /<br>начальные переменные для обработки
     */
    private getArgumentsForTo;
    /**
     * Converting a value to a string depending on the type.<br>
     * Преобразования значения в строка в зависимости от типа.
     * @param property initial variables for processing /<br>начальные переменные для обработки
     */
    private toByType;
}
