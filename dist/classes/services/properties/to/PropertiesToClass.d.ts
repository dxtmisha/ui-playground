import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
/**
 * A class for transforming class.<br>
 * Класс для преобразования class.
 */
export declare class PropertiesToClass extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "030-class";
    protected init(): void;
    /**
     * @param name base property name /<br>базовое название свойства
     * @param item current element /<br>текущий элемент
     * @param parents array of all ancestor properties along the tree from the top level /<br>
     * массив со всеми свойствами предков по дереву от верхнего уровня
     */
    private getName;
}
