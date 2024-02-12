import { type ImageSize } from './typesBasic.ts';
/**
 * A class for storing data for adaptive computation of image scaling for a specific group.<br>
 * Класс для хранения данных для адаптивного вычисления масштабирования изображения для конкретной группы.
 */
export declare class ImageCalculation {
    protected readonly name: string;
    protected factorMax: number;
    protected size: ImageSize;
    protected offset: ImageSize;
    /**
     * Constructor
     * @param name group name /<br>название группы
     */
    constructor(name: string);
    /**
     * Checks whether the element belongs to the current group.<br>
     * Проверяет, принадлежит ли элемент к текущей группе.
     * @param name name of the checked group /<br>название проверяемой группы
     */
    is(name: string): boolean;
    /**
     * Checks if the group has elements with sizes. It is used to check if there is data for work.<br>
     * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
     */
    isSize(): boolean;
    /**
     * Returns the maximum physical width.<br>
     * Возвращает максимальную физическую ширину.
     */
    getWidth(): number;
    /**
     * Returns the maximum physical height.<br>
     * Возвращает максимальную физическую высоту.
     */
    getHeight(): number;
    /**
     * Returns the actual width.<br>
     * Возвращает фактическую ширину.
     */
    getOffsetWidth(): number;
    /**
     * Returns the actual height.<br>
     * Возвращает фактическую высоту.
     */
    getOffsetHeight(): number;
    /**
     * Returns the maximum multiplier for scaling.<br>
     * Возвращает максимальный множитель для масштабирования.
     */
    getFactorMax(): number;
    /**
     * Updating size.width, if it is less than the selected value.<br>
     * Обновление size.width, если она меньше выбранного значения.
     * @param width value of the selected width /<br>значение выбранной ширины
     */
    makeWidth(width: number): this;
    /**
     * Updating size.height, if it is less than the selected value.<br>
     * Обновление size.height, если она меньше выбранного значения.
     * @param height value of the selected height /<br>значение выбранной высоты
     */
    makeHeight(height: number): this;
    /**
     * Updating offset.width, if it is larger than the selected value.<br>
     * Обновление offset.width, если она больше выбранного значения.
     * @param width value of the selected width /<br>значение выбранной ширины
     */
    makeOffsetWidth(width: number): this;
    /**
     * Updating offset.height, if it is larger than the selected value.<br>
     * Обновление offset.height, если она больше выбранного значения.
     * @param height value of the selected height /<br>значение выбранной высоты
     */
    makeOffsetHeight(height: number): this;
    /**
     * Changes the multiplier value if it is greater than the checked value.<br>
     * Изменяет значение множителя, если оно больше проверяемого значения.
     * @param value values for verification /<br>значения для проверки
     */
    makeFactorMax(value: number): this;
    /**
     * Restoring the value to its original state.<br>
     * Восстановление значения в изначальное состояние.
     */
    reset(): this;
}
