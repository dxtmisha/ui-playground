import { type Undefined } from '../../types/basic';
import { type ImageProps } from './props';
import { type ImageCoordinatorItem, type ImageSize } from './typesBasic';
/**
 * A class for calculating the central part of the image by its coordinates.<br>
 * Класс для вычисления центральной части изображения по его координатам.
 */
export declare class ImageCoordinator {
    protected readonly props: ImageProps;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: ImageProps);
    /**
     * Checks if there are coordinates for calculation.<br>
     * Проверяет, есть ли координаты для вычисления.
     */
    is(): this is {
        coordinator: Exclude<ImageCoordinatorItem, Undefined>;
    };
    /**
     * Returns the sizes for the background-position property by coordinates.<br>
     * Возвращает размеры для свойства background-position по координатам.
     */
    get(): ImageSize;
    /**
     * Returns coordinates.<br>
     * Возвращает координаты.
     */
    getCoordinator(): [number, number, number, number];
    /**
     * Returns the values for the background property.<br>
     * Возвращает значения для свойства background.
     */
    getSize(): ImageSize<string>;
}
