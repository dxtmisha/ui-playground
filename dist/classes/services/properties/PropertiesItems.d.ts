import { type PropertyItem, type PropertyList } from '../../../types/property.ts';
export type PropertiesItemsParent = {
    name: string;
    item: PropertyItem;
};
export type PropertiesItemsItem = {
    design: string;
    component?: string;
    name: string;
    index: string;
    value: PropertyItem['value'];
    item: PropertyItem;
    previous?: PropertyItem;
    parent?: PropertyItem;
    parents: PropertiesItemsParent[];
};
export type PropertiesItemsCallback<T> = (item: PropertiesItemsItem) => T;
export type PropertiesItemsMedia = Record<string, PropertyList>;
/**
 * Class for working with a list of all properties.<br>
 * Класс для работы со списком всех свойств.
 */
export declare class PropertiesItems {
    private readonly properties;
    private focusDesign?;
    /**
     * Constructor
     * @param properties array with all property records /<br>массив со всеми записями свойств
     */
    constructor(properties: PropertyList);
    /**
     * Checks if the record complies with the design requirements.<br>
     * Проверяет, соответствует ли запись условиям дизайна.
     * @param name names of items /<br>названия объектов
     * @param design design name /<br>название дизайна
     * @private
     */
    isFocusDesign(name: string, design?: string): boolean;
    /**
     * Getting full structure property.<br>
     * Получение полной структуры свойства.
     */
    get(): PropertyList;
    /**
     * Returns a list of design names.<br>
     * Возвращает список названий дизайнов.
     */
    getDesigns(): string[];
    /**
     * Returns values by index.<br>
     * Возвращает значения по индексу.
     * @param index index for splitting /<br>индекс для разделения
     */
    getItem(index: string): PropertyItem | undefined;
    /**
     * Returns the full information about the element by its link.<br>
     * Возвращает полную информацию об элементе по его ссылке.
     * @param index index for splitting /<br>индекс для разделения
     */
    getInfo(index: string): PropertiesItemsItem | undefined;
    /**
     * Divides an index into sections.<br>
     * Разделяет индекс на разделы.
     * @param index index for splitting /<br>индекс для разделения
     */
    getKeys(index: string): string[];
    /**
     * Returns the name of the property, taking into account the parameter of changing the name.<br>
     * Возвращает название свойства, учитывая параметр изменения имени.
     * @param name name of property /<br>название свойства
     * @param item object of property /<br>объект свойства
     */
    getName(name: string, item: PropertyItem): string;
    /**
     * Returns the used name.<br>
     * Возвращает использованное имя.
     * @param name name of property /<br>название свойства
     * @param item object of property /<br>объект свойства
     */
    getReName(name: string, item: PropertyItem): string;
    /**
     * Returns ancestor names.<br>
     * Возвращает имена предков.
     * @param parents array of all ancestor properties along the tree from the top level /<br>
     * массив со всеми свойствами предков по дереву от верхнего уровня
     * @param variable list of types to exclude, such types are ignored /<br>
     * список типов для исключения, такие типы игнорируются
     */
    getParentsName(parents: PropertiesItemsItem['parents'], variable?: string[]): string[];
    /**
     * Returns a list of information about media file list.<br>
     * Возвращает список информации о списках медиафайлов.
     */
    getMedia(): PropertiesItemsMedia;
    /**
     * Replaces labels with design and component names.<br>
     * Заменяет метки на названия дизайна и компонента.
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     * @param value values of properties from the value field /<br>значения свойств из поля value
     * @param separator разделитель
     */
    getLink(design: string, component: string, value: string, separator?: string): string;
    /**
     * Get values for links and convert them to accessible code.<br>
     * Получаем значения для ссылок и преобразуем их в доступный код.
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     * @param value values of properties from the value field /<br>значения свойств из поля value
     */
    getLinkToName(design: string, component: string, value: string): string;
    /**
     * Get values for links and convert them to accessible code.<br>
     * Получаем значения для ссылок и преобразуем их в значения для ссылки.
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     * @param value values of properties from the value field /<br>значения свойств из поля value
     */
    getLinkToValue(design: string, component: string, value: string): string;
    /**
     * Replaces labels with design and component names (for the name).<br>
     * Заменяет метки на названия дизайна и компонента (для названия).
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     * @param value values of properties from the value field /<br>значения свойств из поля value
     */
    getLinkForName(design: string, component: string, value: string): string;
    /**
     * Adds the name of the design at the beginning if it is missing.<br>
     * Добавляет название дизайна в начало, если его нет.
     * @param design design name /<br>название дизайна
     * @param value values of properties from the value field /<br>значения свойств из поля value
     */
    getLinkByDesign(design: string, value: string): string;
    /**
     * Recursively applies a custom function to each element of the property.<br>
     * Рекурсивно применяет пользовательскую функцию к каждому элементу свойства.
     * @param callback the callback function is executed for each element /<br>
     * выполняется функция обратного вызова (callback) для каждого элемента
     * @param property
     */
    each<T>(callback: PropertiesItemsCallback<T>, property?: PropertiesItemsItem): T[];
    /**
     * Applies a user function to elements on the current level.<br>
     * Применяет пользовательскую функцию к элементам на текущем уровне.
     * @param callback the callback function is executed for each element /<br>
     * выполняется функция обратного вызова (callback) для каждого элемента
     * @param property
     */
    eachMainOnly<T>(callback: PropertiesItemsCallback<T>, property?: PropertiesItemsItem): T[];
    /**
     * Search for a record by selected conditions.<br>
     * Поиск записи по выбранным условиям.
     * @param callback function for checking the condition /<br>функция для проверки условия
     */
    find(callback: (property: PropertiesItemsItem) => boolean): PropertiesItemsItem[];
    /**
     * Searching for records with selected categories.<br>
     * Поиск записей с выделенными категориями.
     * @param category names of categories /<br>названия категорий
     */
    findCategory(category: string | string[]): PropertiesItemsItem[];
    /**
     * Searching for records with selected categories.<br>
     * Поиск записей с выделенными категориями.
     * @param variable names of categories /<br>названия категорий
     */
    findVariable(variable: string | string[]): PropertiesItemsItem[];
    /**
     * Changes the focused design.<br>
     * Изменяет фокусированный дизайн.
     * @param design
     */
    setFocusDesign(design: string): this;
    /**
     * Saves intermediate data.<br>
     * Сохраняет промежуточные данные.
     * @param name file name /<br>название файла
     */
    write(name: string): void;
    /**
     * Returns complete information about the property.<br>
     * Возвращает полную информацию о свойстве.
     * @param parents an object with information about properties /<br>объект с информацией о свойствах
     */
    private getIndex;
    /**
     * Recursively applies a custom function to each element of the property.<br
     * Рекурсивно применяет пользовательскую функцию к каждому элементу свойства.
     * @param callback the callback function is executed for each element /<br>
     * выполняется функция обратного вызова (callback) для каждого элемента
     * @param subItem scan child elements of the current element /<br>сканировать дочерние элементы текущего элемента
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     * @param properties object for traversal /<br>объект для обхода
     * @param parent ancestor element /<br>элемент-предок
     * @param parents list of ancestor names /<br>список названий предков
     */
    private read;
}
