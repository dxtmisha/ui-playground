import { WindowClient } from './WindowClient';
import { WindowElement } from './WindowElement';
import { WindowPosition } from './WindowPosition';
import type { ConstrStyles } from '../../types/constructor';
/**
 * Class for defining the initial position for the animation.<br>
 * Класс для определения начального положения для анимации.
 */
export declare class WindowOrigin {
    protected readonly client: WindowClient;
    protected readonly element: WindowElement;
    protected readonly position: WindowPosition;
    protected x: number | null;
    protected y: number | null;
    /**
     * Constructor
     * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
     * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
     * @param position object for working with the position of the element /<br>объект для работы с положением элемента
     */
    constructor(client: WindowClient, element: WindowElement, position: WindowPosition);
    /**
     * Returns the initial X point for the start of the animation.<br>
     * Возвращает начальную точку X для начала анимации.
     */
    getStyleX(): string | null;
    /**
     * Returns the initial Y point for the start of the animation.<br>
     * Возвращает начальную точку Y для начала анимации.
     */
    getStyleY(): string | null;
    /**
     * Returns styles for the initial point of the animation.<br>
     * Возвращает стили для начальной точки анимации.
     */
    getStyles(): ConstrStyles;
    /**
     * Updating the initial position of the element for the animation.<br>
     * Обновление начального положения элемента для анимации.
     */
    update(): this;
    /**
     * Resets all data to initial values.<br>
     * Сбрасывает все данные к начальным значениям.
     */
    reset(): this;
}
