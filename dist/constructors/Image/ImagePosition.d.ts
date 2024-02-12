import { ImageCoordinator } from './ImageCoordinator.ts';
import { type ImageProps } from './props.ts';
/**
 * A class for obtaining data for the background-position property.<br>
 * Класс для получения данных для свойства background-position.
 */
export declare class ImagePosition {
    protected readonly props: ImageProps;
    protected readonly coordinator: ImageCoordinator;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param coordinator coordinates for margins /<br>координаты для отступов
     */
    constructor(props: ImageProps, coordinator: ImageCoordinator);
    /**
     * Returns the position on the left.<br>
     * Возвращает позицию слева.
     */
    getX(): string;
    /**
     * Returns the position on the top.<br>
     * Возвращает позицию сверху.
     */
    getY(): string;
}
