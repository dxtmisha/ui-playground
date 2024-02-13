import { StylesToAbstract } from './StylesToAbstract.ts';
/**
 * CSS variable converter class.<br>
 * Класс для преобразования в переменные CSS.
 */
export declare class StylesToVar extends StylesToAbstract {
    /**
     * Getting all variables in the current branch.<br>
     * Получение всех переменных в текущей ветке.
     */
    protected treatment(): string[];
    /**
     * Acquiring full ownership.<br>
     * Получения полного свойства.
     * @param item current element /<br>текущий элемент
     */
    private getCode;
    /**
     * Adds a property responsible for transparency.<br>
     * Добавляет свойство, отвечающее за прозрачность.
     * @param item current element /<br>текущий элемент
     */
    private getCodeColorOpacity;
}
