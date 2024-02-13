import { ImageCalculation } from './ImageCalculation.ts';
/**
 * Class for managing all ImageCalculation objects.<br>
 * Класс для управления всеми объектами ImageCalculation.
 */
export declare class ImageCalculationList {
    protected static items: ImageCalculation[];
    /**
     * Checks if the group has elements with sizes. It is used to check if there is data for work.<br>
     * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
     */
    static isSize(): boolean;
    /**
     * Returns an object with data for calculation by the name of its group.<br>
     * Возвращает объект с данными для вычисления по названию его группы.
     * @param name group name /<br>название группы
     */
    static get(name: string): ImageCalculation;
    /**
     * Resets all parameters for all groups.<br>
     * Сбрасывает все параметры для всех групп.
     */
    static reset(): void;
    /**
     * Search for the ImageCalculation object by the name of the group.<br>
     * Поиск объекта ImageCalculation по названию группы.
     * @param name group name /<br>название группы
     */
    protected static find(name: string): ImageCalculation | undefined;
    /**
     * Creating a new ImageCalculation object by the name of the group.<br>
     * Создание нового объекта ImageCalculation по названию группы.
     * @param name group name /<br>название группы
     */
    protected static init(name: string): ImageCalculation;
}
