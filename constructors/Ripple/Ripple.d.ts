import { type RippleProps } from './props.ts';
/**
 * Base class for working with the wave element.<br>
 * Базовый класс для работы с элементом волны.
 */
export declare class Ripple {
    protected readonly props: RippleProps;
    protected element?: HTMLDivElement | undefined;
    protected readonly classItem: string;
    protected readonly classEnd: string;
    protected readonly styleX: string;
    protected readonly styleY: string;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element image element for scaling /<br>элемент изображения для масштабирования
     * @param classItem class name for the element /<br>название класса для элемента
     * @param classEnd class name for the end of animation status /<br>название класса для статуса конец анимации
     * @param styleX property name for the X coordinate /<br>название свойства для координаты X
     * @param styleY property name for the Y coordinate /<br>название свойства для координаты Y
     */
    constructor(props: RippleProps, element?: HTMLDivElement | undefined, classItem?: string, classEnd?: string, styleX?: string, styleY?: string);
    /**
     * Event when clicking on an element.<br>
     * Событие при клике на элемент.
     * @param event event object /<br>объект события
     */
    onClick(event: MouseEvent): void;
    /**
     * Change the item.<br>
     * Изменить элемент.
     * @param element element /<br>элемент
     */
    setElement(element?: HTMLDivElement): this;
    /**
     * Adding a new light element.<br>
     * Добавление нового элемента свечения.
     * @param x x-coordinate /<br>x-координата
     * @param y y-coordinate /<br>y-координата
     */
    protected addItem(x: number, y: number): void;
}
