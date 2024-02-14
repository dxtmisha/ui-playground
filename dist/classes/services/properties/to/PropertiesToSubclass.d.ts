import { PropertiesToAbstract } from './PropertiesToAbstract';
/**
 * A class for transforming subclass.<br>
 * Класс для преобразования subclass.
 */
export declare class PropertiesToSubclass extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "036-subclass";
    protected init(): void;
    /**
     * Checks if the top-level type is a state.<br>
     * Проверяет, является ли тип верхнего уровня - это state.
     * @param parents array of all ancestor properties along the tree from the top level /<br>
     * массив со всеми свойствами предков по дереву от верхнего уровня
     */
    private isParentState;
    /**
     * Name transformation for the component type.<br>
     * Преобразование имени для типа component.
     * @param name base property name /<br>базовое название свойства
     * @param item current element /<br>текущий элемент
     * @param parents array of all ancestor properties along the tree from the top level /<br>
     * массив со всеми свойствами предков по дереву от верхнего уровня
     */
    private getName;
}
