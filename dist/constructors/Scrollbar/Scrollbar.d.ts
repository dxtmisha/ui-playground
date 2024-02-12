import { ScrollbarBorder } from './ScrollbarBorder.ts';
import { type ConstrClassObject, type ConstrValue } from '../../types/constructor.ts';
import { type ScrollbarProps } from './props.ts';
/**
 * Class for working with scroll components.<br>
 * Класс для работы с компонентами скролла.
 */
export declare class Scrollbar {
    readonly border: ScrollbarBorder;
    /**
     * Constructor
     * @param props properties /<br>свойства
     * @param element input element /<br>элемент ввода
     * @param callback callback function /<br>функция обратного вызова
     */
    constructor(props: ScrollbarProps, element: ConstrValue<HTMLDivElement>, callback: () => void);
    /**
     * Returns values for the class.<br>
     * Возвращает значения для класса.
     */
    getClasses(): Promise<ConstrClassObject>;
    /**
     * Returns information on whether to disable scroll changes.
     * This is when the scroll has no width.<br>
     * Возвращает информацию, надо ли выключить изменения скролла.
     * Это когда скролл не имеет ширины.
     */
    getDisabled(): Promise<boolean>;
}
