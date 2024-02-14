import { WindowClient } from './WindowClient';
import { WindowElement } from './WindowElement';
import { WindowCoordinates } from './WindowCoordinates';
import { type ConstrStyles } from '../../types/constructor';
import { type WindowProps } from './props';
/**
 * A class for working with position.<br>
 * Класс для работы с позицией.
 */
export declare class WindowPosition {
    protected readonly props: WindowProps;
    protected readonly client: WindowClient;
    protected readonly element: WindowElement;
    protected readonly coordinates: WindowCoordinates;
    protected x: number;
    protected y: number;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
     * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
     * @param coordinates object for working with coordinates /<br>объект для работы с координатами
     */
    constructor(props: WindowProps, client: WindowClient, element: WindowElement, coordinates: WindowCoordinates);
    /**
     * Checks if the alignment type is above the element.<br>
     * Проверяет, является ли тип выравнивания над элементом.
     */
    isOver(): boolean;
    /**
     * Returns the X position.<br>
     * Возвращает позицию X.
     */
    getX(): number;
    /**
     * Returns the Y position.<br>
     * Возвращает позицию Y.
     */
    getY(): number;
    /**
     * Returns the X position for styles.<br>
     * Возвращает позицию X для стилей.
     */
    getStyleX(): string | null;
    /**
     * Returns the Y position for styles.<br>
     * Возвращает позицию Y для стилей.
     */
    getStyleY(): string | null;
    /**
     * Returns the position for displaying the element.<br>
     * Возвращает позицию для отображения элемента.
     */
    getStyles(): ConstrStyles;
    /**
     * Update of the element’s position coordinates.<br>
     * Обновление координаты положения элемента.
     */
    update(): boolean;
    /**
     * Updates the scroll position if an element is selected.<br>
     * Обновляет место скрола, если выбран элемент.
     */
    updateScroll(): void;
    /**
     * Returns the axis alignment values.<br>
     * Возвращает значения оси выравнивания.
     */
    protected getAxis(): WindowProps['axis'];
    /**
     * Returns the margins from the control element.<br>
     * Возвращает отступы от элемента управления.
     * @param axis the axis of alignment of the element /<br>ось выравнивания элемента
     */
    protected getIndent(axis: string): number;
    /**
     * Calculation of the position for window alignment.<br>
     * Вычисление места положения для выравнивания окна.
     * @param rectTop high control coordinates /<br>высокие координаты контрола
     * @param rectBottom lower control coordinates /<br>нижние координаты контрола
     */
    protected getOverHeight(rectTop: number, rectBottom: number): number;
    /**
     * Changes in position along the X coordinate.<br>
     * Изменения положения по координате X.
     */
    protected setX(): this;
    /**
     * Changes in position along the Y coordinate.<br>
     * Изменения положения по координате Y.
     */
    protected setY(): this;
    /**
     * Calculation of the element’s position.<br>
     * Вычисление положения элемента.
     * @param inValue initial values /<br>начальные значения
     * @param outValue final values /<br>конечные значения
     * @param length length of the object /<br>длина объекта
     * @param innerLength length of the indentation /<br>длина отступа
     * @param maxSize maximum length /<br>максимальная длина
     */
    protected calculationInner(inValue: number, outValue: number, length: number, innerLength: number, maxSize: number): number;
    /**
     * Calculation of the element’s position.<br>
     * Вычисление положения над элемента.
     * @param value initial values /<br>начальные значения
     * @param top high control coordinates /<br>высокие координаты контрола
     * @param bottom lower control coordinates /<br>нижние координаты контрола
     * @param length length of the object /<br>длина объекта
     * @param innerLength length of the indentation /<br>длина отступа
     */
    protected calculationOver(value: number, top: number, bottom: number, length: number, innerLength: number): number;
}
