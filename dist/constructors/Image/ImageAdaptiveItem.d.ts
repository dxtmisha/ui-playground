import { ImageData } from './ImageData.ts';
import { type FunctionVoid } from '../../types/basic.ts';
import { type ConstrValue } from '../../types/constructor.ts';
import { type ImageProps } from './props.ts';
import { type ImageElement, type ImageSize } from './typesBasic.ts';
declare enum ImageAdaptiveItemType {
    x = "x",
    y = "y"
}
/**
 * The value in pixels indicating when an element is still considered active,
 * even if it has gone off the screen.<br>
 * Значение в пикселях, указывающее, когда элемент считается еще активным,
 * даже если он ушел за экран.
 */
export declare const MAX_BEYOND = 256;
/**
 * A class for managing the adapted scaling of a specific element.<br>
 * Класс для управления адаптированным масштабированием конкретного элемента.
 */
export declare class ImageAdaptiveItem {
    protected readonly props: ImageProps;
    protected readonly data: ImageData;
    protected readonly element: ConstrValue<ImageElement>;
    protected readonly callback?: FunctionVoid | undefined;
    readonly percent: ImageSize;
    protected beyond: boolean;
    protected visible: boolean;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element image element for scaling /<br>элемент изображения для масштабирования
     * @param data image data /<br>данные изображения
     * @param callback callback function when updating the image scale /<br>
     * функция обратного вызова при обновлении масштаба изображения
     */
    constructor(props: ImageProps, data: ImageData, element: ConstrValue<ImageElement>, callback?: FunctionVoid | undefined);
    /**
     * Checks if the element’s conditions are suitable for scaling.<br>
     * Проверяет, подходить ли у элемента условия для масштабирования.
     */
    is(): boolean;
    /**
     * Checks for compliance with the group.<br>
     * Проверяет на соответствие группе.
     * @param name name of the checked group /<br>название проверяемой группы
     */
    isGroup(name: string): boolean;
    /**
     * Is it available for calculation.<br>
     * Доступен ли для вычисления.
     */
    isBeyond(): boolean;
    /**
     * Is the element visible.<br>
     * Виден ли элемент.
     */
    isVisible(): boolean;
    /**
     * Returns the name of the group.<br>
     * Возвращает название группы.
     */
    getGroup(): string;
    /**
     * Returns the identifier of the element.<br>
     * Возвращает идентификатор элемента.
     */
    getId(): string;
    /**
     * Returns the current element.<br>
     * Возвращает текущий элемент.
     */
    getElement(): ImageElement;
    /**
     * Returns the physical width of the object.<br>
     * Возвращает физическую ширину объекта.
     */
    getWidth(): number;
    /**
     * Returns the physical height of the object.<br>
     * Возвращает физическую высоту объекта.
     */
    getHeight(): number;
    /**
     * Returns the axis for scaling.<br>
     * Возвращает ось для масштабирования.
     */
    getType(): ImageAdaptiveItemType | undefined;
    /**
     * Calculation of the base size of the image to determine how to scale the image.<br>
     * Вычисление базового размера изображения, чтобы определить, как надо масштабировать изображение.
     */
    getSize(): number;
    /**
     * Multiplier for determining the level of image scaling relative to other elements.<br>
     * Множитель для определения уровня масштабирования изображения относительно других элементов.
     */
    getFactor(): number;
    /**
     * Returns values for the background-size property.<br>
     * Возвращает значения для свойства background-size.
     */
    getBackgroundSize(): string | null;
    /**
     * Size change for calculation.<br>
     * Изменение размера для вычисления.
     * @param width width value /<br>значение ширины
     * @param height height value /<br>значение высоты
     */
    setPercent(width: number, height: number): this;
    /**
     * Updating the activity status of the element.<br>
     * Обновление статуса активности элемента.
     */
    update(): void;
    /**
     * Recalculate scaling for all active elements.<br>
     * Пересчитать масштабирование для всех активных элементов.
     */
    reset(): void;
    /**
     * Removal of an element from the scaling list.<br>
     * Удаление элемента из списка для масштабирования.
     */
    remove(): void;
    /**
     * Updating the visibility and activity status of the element.<br>
     * Обновление статуса видимости и активности элемента.
     */
    make(): this;
    /**
     * Calls the callback function.<br>
     * Вызывает функцию обратного вызова.
     */
    makeCallback(): this;
}
export {};
