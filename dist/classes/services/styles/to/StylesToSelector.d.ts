import { StylesToAbstract } from './StylesToAbstract.ts';
/**
 * Class for generating data for sub property styles.<br>
 * Класс для генерация данный для под свойство стили.
 */
export declare class StylesToSelector extends StylesToAbstract {
    /**
     * Method for converting data into a style structure.<br>
     * Метод преобразования данных в структуру стиля.
     */
    protected treatment(): string[];
    /**
     * Getting the name of the class of a component.<br>
     * Получение названия класса у компонента.
     */
    private getClassName;
    /**
     * Returns a string for a selector.<br>
     * Возвращает строку для селектора.
     */
    private getSelector;
}
