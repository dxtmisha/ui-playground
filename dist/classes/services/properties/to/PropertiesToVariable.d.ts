import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
/**
 * Class for performing data type conversions.<br>
 * Класс для выполнения преобразования типов данных.
 */
export declare class PropertiesToVariable extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "008-variable";
    /**
     * Determine all properties and their property types in an object.<br>
     * Определяем все свойства и их типы свойств в объекте.
     */
    protected init(): void;
    /**
     * If there is a value of category, changes the property to the required one.<br>
     * Если есть значение категории, изменяет свойство на нужное.
     * @param item current property /<br>текущее свойство
     */
    private getByCategory;
    /**
     * If the name matches the name of the design or component.<br>
     * Если название совпадает с названием дизайна или компонента.
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     * @param name key name /<br>название ключа
     */
    private getByMain;
    /**
     * If the name of the property matches the name of the style in CSS.<br>
     * Если название свойства совпадает с названием стиля в CSS.
     * @param name key name /<br>название ключа
     */
    private getByProperty;
    /**
     * If the name of the property matches the name of the pseudo-class.<br>
     * Если название свойства совпадает с названием псевдо-класса.
     * @param name key name /<br>название ключа
     */
    private getBySelector;
    /**
     * If the element has no properties and values.<br>
     * Если у элемента нет ни одного свойства и значения.
     * @param item current property /<br>текущее свойство
     */
    private getBySubclass;
    /**
     * If the ancestor has type var.<br>
     * Если у предка тип var.
     * @param parent object of ancestor /<br>объект предка
     */
    private getByVarParent;
    /**
     * Checks if the type is hidden.<br>
     * Проверяет, является ли тип скрытым.
     * @param item current property /<br>текущее свойство
     */
    private getByNone;
    /**
     * If the type is a pseudo-element.<br>
     * Если тип псевдо-элемента.
     * @param name key name /<br>название ключа
     */
    private getByVirtual;
    /**
     * Search for a suitable property by name.<br>
     * Поиск подходящего свойства по названию.
     * @param name key name /<br>название ключа
     * @param item current property /<br>текущее свойство
     */
    private findType;
}
