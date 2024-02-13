import { PropertiesToAbstract } from './PropertiesToAbstract';
/**
 * A class for transforming animate.<br>
 * Класс для преобразования animate.
 */
export declare class PropertiesToAnimate extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "044-animate";
    protected init(): void;
    /**
     * @param name base property name /<br>базовое название свойства
     * @param item current element /<br>текущий элемент
     * @param parents array of all ancestor properties along the tree from the top level /<br>
     * массив со всеми свойствами предков по дереву от верхнего уровня
     */
    private getName;
}
