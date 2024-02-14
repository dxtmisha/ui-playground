import { type PropertiesItemsItem } from '../PropertiesItems';
import { PropertiesToAbstract } from './PropertiesToAbstract';
import { type PropertyItem, PropertyType } from '../../../../types/property';
/**
 * A class for working with custom properties in CSS.<br>
 * Класс для работы с пользовательским свойством в CSS.
 */
export declare class PropertiesToVar extends PropertiesToAbstract {
    protected FILE_CACHE: string;
    protected type: PropertyType;
    protected init(): void;
    /**
     * Name transformation for the var type.<br>
     * Преобразование имени для типа var.
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     * @param name base property name /<br>базовое название свойства
     * @param item current element /<br>текущий элемент
     * @param parents array of all ancestor properties along the tree from the top level /<br>
     * массив со всеми свойствами предков по дереву от верхнего уровня
     */
    protected getName({ design, component, name, item, parents }: PropertiesItemsItem): string;
    /**
     * Checks if the value has a mathematical expression.<br>
     * Проверяет, есть ли у значения математическое выражение.
     * @param value values to process /<br>значения для преобразования
     * @param full the expression is complete /<br>выражение является полным
     */
    protected toCalculator(value: string, full?: boolean): string;
    /**
     * Returns the transformed pointer.<br>
     * Возвращает преобразованный указатель.
     * @param {string} value values to process /<br>значения для преобразования
     */
    protected toLink(value: string): string;
    /**
     * Transformation to the CSS property.<br>
     * Преобразование в свойство CSS.
     * @param value values to process /<br>значения для преобразования
     * @param defaultValue default values /<br>значения по умолчанию
     */
    protected toValue(value: string, defaultValue?: PropertyItem['_default']): string;
    /**
     * Checks if the values are hidden.<br>
     * Проверяет, являются ли значения скрытыми.
     * @param parents list of ancestors /<br>список предков
     */
    private isNone;
    /**
     * Checks if the element has transparency.<br>
     * Проверяет, есть ли прозрачность у элемента.
     * @param property property value /<br>значение свойства
     */
    private isColorWithOpacity;
}
