import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
/**
 * Class for converting all properties with sub-values.<br>
 * Класс для преобразования всех свойств с под-значениями.
 */
export declare class PropertiesToSub extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "006-sub";
    /**
     * Converting all elements.<br>
     * Преобразование всех элементов.
     */
    protected init(): void;
    /**
     * Проверяет, если значения
     * @param value current element /<br>текущий элемент
     */
    private is;
    /**
     * Converting all indices to values.<br>
     * Преобразование всех индексов в значения.
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     * @param value values of properties from the value field /<br>значения свойств из поля value
     */
    private getValue;
    /**
     * Converting all indices to values for a field of values.<br>
     * Преобразование всех индексов в значения для поля значения.
     */
    private read;
}
