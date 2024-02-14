import { StylesToAbstract } from './StylesToAbstract';
export declare const TYPES: string[];
/**
 * CSS class for converting to CSS property.<br>
 * Класс для преобразования в свойство CSS.
 */
export declare class StylesToProperty extends StylesToAbstract {
    /**
     * Acquiring full ownership.<br>
     * Получения полного свойства.
     */
    protected treatment(): string[];
    /**
     * Generating values for variables.
     * Генерация значений для переменных.
     */
    private getVar;
    /**
     * Generating value for property.<br>
     * Генерация значения для свойства.
     */
    private getPropertyValue;
}
