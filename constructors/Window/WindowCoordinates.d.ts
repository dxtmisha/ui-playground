import { WindowClasses } from './WindowClasses.ts';
import { WindowElement } from './WindowElement.ts';
import { WindowLocation } from './typesBasic.ts';
/**
 * A class for working with coordinates.<br>
 * Класс для работы с координатами.
 */
export declare class WindowCoordinates {
    protected readonly classes: WindowClasses;
    protected readonly element: WindowElement;
    protected top: number;
    protected right: number;
    protected bottom: number;
    protected left: number;
    protected width: number;
    protected height: number;
    protected innerWidth: number;
    protected innerHeight: number;
    protected padding: number;
    protected location: WindowLocation;
    /**
     * Constructor
     * @param classes an object for working with classes and searching for elements /<br>
     * объект для работы с классами и поиском элементов
     * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
     */
    constructor(classes: WindowClasses, element: WindowElement);
    /**
     * Returns the distance from the top point.<br>
     * Возвращает расстояние от верхней точки.
     */
    getTop(): number;
    /**
     * Returns the distance from the right point.<br>
     * Возвращает расстояние от правой точки.
     */
    getRight(): number;
    /**
     * Returns the distance from the lower point.<br>
     * Возвращает расстояние от нижней точки.
     */
    getBottom(): number;
    /**
     * Returns the distance from the left point.<br>
     * Возвращает расстояние от левой точки.
     */
    getLeft(): number;
    /**
     * Returns the width of the element.<br>
     * Возвращает ширину элемента.
     */
    getWidth(): number;
    /**
     * Returns the height of the element.<br>
     * Возвращает высоту элемента.
     */
    getHeight(): number;
    /**
     * Returns the width of the window.<br>
     * Возвращает ширину окна.
     */
    getInnerWidth(): number;
    /**
     * Returns the height of the window.<br>
     * Возвращает высоту окна.
     */
    getInnerHeight(): number;
    /**
     * Returns the margins of the element.<br>
     * Возвращает отступы у элемента.
     */
    getPadding(): number;
    /**
     * Returns the values of the element's position.<br>
     * Возвращает значения положения элемента.
     */
    getLocation(): WindowLocation;
    /**
     * Returns the maximum height of the body.<br>
     * Возвращает максимальную высоту у body.
     */
    getMaxHeight(): number;
    /**
     * Data updates.<br>
     * Обновления данных.
     */
    update(): boolean;
    /**
     * Resets all data to initial values.<br>
     * Сбрасывает все данные к начальным значениям.
     */
    reset(): this;
    /**
     * Calculates control position values.<br>
     * Вычисляет значения положения контроля
     * @param top position of an element /<br>положение элемента
     */
    protected initLocation(top: number): WindowLocation;
}
