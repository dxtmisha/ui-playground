import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
/**
 * A class for transforming components.<br>
 * Класс для преобразования компонент.
 */
export declare class PropertiesToComponent extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "028-component";
    protected init(): void;
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
