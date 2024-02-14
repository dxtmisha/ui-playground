import { WindowClasses } from './WindowClasses';
import { type ConstrValue } from '../../types/constructor';
/**
 * A class for working with elements.<br>
 * Класс для работы с элементами.
 */
export declare class WindowElement {
    protected readonly classes: WindowClasses;
    protected readonly element: ConstrValue<HTMLDivElement>;
    /**
     * Constructor
     * @param classes an object for working with classes and searching for elements /<br>
     * объект для работы с классами и поиском элементов
     * @param element the element of the window itself /<br>элемент самого окна
     */
    constructor(classes: WindowClasses, element: ConstrValue<HTMLDivElement>);
    /**
     * Checks if the main element exists.<br>
     * Проверяет, есть ли главный элемент.
     */
    isMain(): boolean;
    /**
     * Returns the main element.<br>
     * Возвращает главного элемента.
     */
    getMain(): HTMLDivElement | undefined;
    /**
     * Returns the control element of the current component.<br>
     * Возвращает элемент управления текущего компонента.
     */
    getControl(): HTMLElement | undefined;
    /**
     * Returns the dimensions of the control element.<br>
     * Возвращает размеры элемента управления.
     */
    getControlRect(): DOMRect | undefined;
    /**
     * Returns the body element of the window.<br>
     * Возвращает элемент тела окна.
     */
    getBody(): HTMLDivElement | undefined;
    /**
     * Returns the dimensions of the window’s body element.<br>
     * Возвращает размеры элемента тела окна.
     */
    getBodyRect(): DOMRect | undefined;
    /**
     * Returns the window context element.<br>
     * Возвращает элемент контекста окна.
     */
    getBodyContext(): HTMLDivElement | undefined;
}
