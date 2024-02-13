import { DesignStructureItemAbstract } from './DesignStructureItemAbstract.ts';
import { type PropertyItem } from '../../../types/property.ts';
import { type DesignStructureItem, type DesignStructureList, type DesignStructureStateList } from '../../../types/design.ts';
/**
 * Class for processing dependency properties of the component.<br>
 * Класс для обработки зависимости свойств у компонента.
 */
export declare class DesignStructureRead extends DesignStructureItemAbstract<DesignStructureList> {
    protected states: DesignStructureStateList;
    protected data: DesignStructureList;
    /**
     * Constructor
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     */
    constructor(design: string, component: string);
    /**
     * Getting all dependencies of the component.<br>
     * Получение всех зависимостей у компонента.
     */
    getStates(): DesignStructureStateList;
    /**
     * Checks if the property is available for addition to props.<br>
     * Проверяет, доступно ли свойство для добавления в props.
     * @param item object for checking /<br>объект для проверки
     */
    protected isProps(item: PropertyItem): boolean;
    /**
     * Checks whether the property is a reference to a class.<br>
     * Проверяет, является ли свойство ссылкой на класс.
     * @param item object for checking /<br>объект для проверки
     */
    protected isLinkClass(item: PropertyItem): boolean;
    /**
     * Transformations to a class name.<br>
     * Преобразование в имя класса.
     * @param value values of properties from the value field /<br>значения свойств из поля value
     */
    protected getClass(value: string): string;
    /**
     * Returns all properties of a component by its reference.<br>
     * Возвращает все свойства компонента по его reference.
     * @param index link to a property /<br>ссылка на свойство
     */
    protected getClassState(index: string): PropertyItem | undefined;
    /**
     * Returns records that meet state conditions.<br>
     * Возвращает записи, удовлетворяющие условиям состояния.
     * @param properties input data /<br>входной данный
     */
    protected makeState(properties?: PropertyItem['value']): DesignStructureStateList;
    /**
     * Retrieves all properties for preparing data filling.<br>
     * Получает все свойства для подготовки заполнения данными.
     */
    protected makeMain(): this;
    /**
     * Receives the default values.<br>
     * Получает базовые значения.
     */
    protected makeValue(): this;
    /**
     * Gets all possible values.<br>
     * Получает всех возможных значения.
     * @param state basic values /<br>базовые значения
     */
    protected makeValueAll(state?: import("../../../types/design.ts").DesignStructureState[]): this;
    /**
     * Updates values by removing duplicates and updating the style property value.<br>
     * Обновляет значения, удаляя все повторы и обновляя значения свойства style.
     */
    protected makeValueUnique(): this;
    /**
     * Updates values in a map.<br>
     * Обновляет значения в карте.
     * @param states basic values /<br>базовые значения
     * @param parent
     */
    protected makeValueState(states?: import("../../../types/design.ts").DesignStructureState[], parent?: DesignStructureItem['state']): this;
    /**
     * Returns a formatted string with the property name.<br>
     * Возвращает отформатированную строку с названием свойства.
     * @param item object for checking /<br>объект для проверки
     * @param index property identifier /<br>идентификатор свойства
     */
    protected toName(item: PropertyItem, index: string): string;
    /**
     * Returns all available values.<br>
     * Возвращает все доступные значения.
     * @param properties array with all property records /<br>массив со всеми записями свойств
     */
    protected toValue(properties?: PropertyItem['value']): DesignStructureItem['value'];
}
