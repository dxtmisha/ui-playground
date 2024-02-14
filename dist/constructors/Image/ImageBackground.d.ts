import { ImageData } from './ImageData';
import { ImageCoordinator } from './ImageCoordinator';
import { ImageAdaptiveItem } from './ImageAdaptiveItem';
import { type NumberOrString } from '../../types/basic';
import { type ImageProps } from './props';
/**
 * A class for getting the value of background.<br>
 * Класс для получения значения background.
 */
export declare class ImageBackground {
    protected readonly props: ImageProps;
    protected readonly data: ImageData;
    protected readonly coordinator: ImageCoordinator;
    protected readonly adaptive: ImageAdaptiveItem;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param data image data /<br>данные изображения
     * @param coordinator object for working with coordinates /<br>объект для работы с координатами
     * @param adaptive an object for working with adapted scaling /<br>объект для работы с адаптированным масштабированием
     */
    constructor(props: ImageProps, data: ImageData, coordinator: ImageCoordinator, adaptive: ImageAdaptiveItem);
    /**
     * Returns values for the background property.<br>
     * Возвращает значения для свойства background.
     */
    get(): string | null;
    /**
     * Returns values for the background-image property.<br>
     * Возвращает значения для свойства background-image.
     */
    getImage(): string | null;
    /**
     * Returns the value for the background-size property.<br>
     * Возвращает значение для свойства background-size.
     * @param width width value /<br>значение ширины
     * @param height height value /<br>значение высоты
     */
    protected getSize(width: NumberOrString, height: NumberOrString): string | null;
    /**
     * Returns sizes according to the coordinator property.<br>
     * Возвращает размеры по свойству координатора.
     */
    protected getSizeByCoordinator(): string | null;
    /**
     * Returns the scaling sizes.<br>
     * Возвращает размеры масштабирования.
     */
    protected getSizeForItem(): string | null;
}
