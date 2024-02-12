import { DesignStructure } from './DesignStructure.ts';
import { type DesignStructureClasses, type DesignStructureItem, type DesignStructureItemSub, type DesignStructureList } from '../../../types/design.ts';
/**
 * Class with basic replacement for templates.<br>
 * Класс с базовой заменой для шаблонов.
 */
export declare class DesignReplace {
    protected structure: DesignStructure;
    protected sample: string;
    protected readonly component: string;
    protected readonly mark: string;
    /**
     * Constructor
     * @param structure object for working with components /<br>объект для работы с компонентами
     * @param mark метка для замена на имя
     * @param sample property template /<br>шаблон свойства
     */
    constructor(structure: DesignStructure, mark: string, sample: string);
    /**
     * Returns the modified template.<br>
     * Возвращает изменённый шаблон.
     */
    get(): string;
    /**
     * Returns the path for importing the module.<br>
     * Возвращает путь для подключения модуля.
     */
    getRoot(): string;
    /**
     * Changes the names in accordance with the component name.<br>
     * Изменяет названия в соответствии с названием компонента.
     * @param name the name of a file /<br>название файла
     */
    getNameFile(name: string): string;
    /**
     * Changing the name of the component.<br>
     * Изменение названия компонента.
     */
    replaceName(): this;
    /**
     * Change the path to the file.<br>
     * Изменение пути к файлу.
     */
    replacePath(): this;
    /**
     * Replaces values with selected label.<br>
     * Заменяет значения на выбранную метку.
     * @param name label name /<br>название метки
     * @param data data for replacement /<br>данные для замены
     * @param end symbol at the end of the line /<br>символ в конце строки
     */
    replaceMark(name: string, data: string[], end?: string): this;
    /**
     * Replaces values with the selected label only once.<br>
     * Заменяет значения на выбранную метку только 1 раз.
     * @param name label name /<br>название метки
     * @param removeReplacement data deletion /<br>удаление данных
     */
    replaceOnce(name?: string, removeReplacement?: boolean | ((data: string) => string)): this;
    /**
     * Adding types for properties.<br>
     * Добавление типов для свойств.
     * @param constructor additional data for processing /<br>дополнительные данные для обработки
     */
    replaceType(constructor?: string): this;
    /**
     * Adding default values for properties.<br>
     * Добавление значения по умолчанию для свойств.
     */
    replaceDefault(): this;
    /**
     * Adding types for properties.<br>
     * Добавление самих свойств.
     */
    replaceProps(): this;
    /**
     * Transforms the given value into a list.<br>
     * Преобразовывает данное значение в список.
     */
    replacePropsValues(): this;
    /**
     * Adding a list of available classes.<br>
     * Добавление списка доступных классов.
     * @param template a function that returns a template /<br>функция, которая возвращает шаблон
     * @param end symbol at the end of the line /<br>символ в конце строки
     */
    replaceClasses(template?: (item: DesignStructureClasses) => string, end?: string): this;
    /**
     * Transformation for active status classes.<br>
     * Преобразование для активных классов статуса.
     */
    replaceClassesValues(): this;
    /**
     * Transformation for active status classes.<br>
     * Преобразование для активных классов статуса.
     */
    replaceStylesValues(): this;
    /**
     * Adding a list of available classes for a constructor.<br>
     * Добавление списка доступных классов для конструктора.
     */
    replaceConstructorClasses(): this;
    /**
     * Checks if the data type is boolean.<br>
     * Проверяет, является ли тип данных булевым.
     * @param value values to check /<br>значения для проверки
     */
    protected isBoolean(value: DesignStructureItem['value']): boolean;
    /**
     * Checks if the data type is string.<br>
     * Проверяет, является ли тип данных строковым.
     * @param value values to check /<br>значения для проверки
     */
    protected isString(value: DesignStructureItem['value']): boolean;
    /**
     * Checks whether the current property should be excluded by its label.<br>
     * Проверяет, следует ли исключить текущее свойство по его метке.
     * @param mark label property /<br>метка свойства
     * @param name property name /<br>название свойства
     */
    protected isNoMark(mark: string, name: string): boolean;
    /**
     * Returns default values.<br>
     * Возвращает значения по умолчанию.
     * @param value default values /<br>значения по умолчанию
     */
    protected getDefault(value: DesignStructureItem['default']): string;
    /**
     * Returns available types for property.<br>
     * Возвращает доступные типы для свойства.
     * @param name property name /<br>название свойства
     * @param value values to check /<br>значения для проверки
     */
    protected getPropByValue(name: string, value: DesignStructureItem['value']): string;
    /**
     * Returns a string with the data type.<br>
     * Возвращает строку с типом данных.
     * @param value values to check /<br>значения для проверки
     * @param style is the property style present /<br>является ли свойство style
     */
    protected getPropTypeByValue(value: DesignStructureItem['value'], style?: boolean): string;
    /**
     * Getting a list of available data for the property.<br>
     * Получение списка доступных данных у свойства.
     * @param value values to check /<br>значения для проверки
     */
    protected getPropValuesByValue(value: DesignStructureItem['value']): string | undefined;
    /**
     * Returns the names of parameters.<br>
     * Возвращает названия параметров переменных.
     */
    protected getIndexProp(): string | undefined;
    /**
     * Returns the names of parameters and their default values.<br>
     * Возвращает названия параметров и значения по умолчанию.
     */
    protected getIndexDefault(): string | undefined;
    /**
     * Getting base properties from a constructor.<br>
     * Получение базовых свойств из конструктора.
     * @param constructor data for processing /<br>данные для обработки
     */
    protected getTypeForConstructor(constructor: string): string[];
    /**
     * Adds new data from tokens to existing data.<br>
     * Добавляет новые данные из токенов к уже существующим.
     * @param mark label property /<br>метка свойства
     * @param name property name /<br>название свойства
     * @param value property value /<br>значение свойства
     */
    protected initMarkAddValue(mark: string, name: string, value: string): boolean;
    /**
     * Getting an array with all classes and conditions of activity status.<br>
     * Получение массива со всеми классами и условиями статуса активности.
     * @param items data list /<br>список данных
     * @param parent ancestor data /<br>данные о предке
     * @param values activity conditions /<br>условия активности
     * @protected
     */
    protected initClassesValues(items?: DesignStructureList | DesignStructureItemSub[], parent?: string, values?: string[]): string[];
    /**
     * Adding an exception for the current property.<br>
     * Добавление исключения для текущего свойства.
     * @param item object for checking /<br>объект для проверки
     */
    protected initClassesCategory(item: DesignStructureItem | DesignStructureItemSub): string[];
    /**
     * Getting an array with all component styles.<br>
     * Получение массива со всеми стилями компонента.
     * @param items data list /<br>список данных
     * @protected
     */
    protected initStylesValues(items?: DesignStructureList): string[];
}
