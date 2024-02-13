import { WindowPersistent } from './WindowPersistent.ts';
import { type ConstrClassObject } from '../../types/constructor.ts';
import { WindowStatusControlItem, WindowStatusItem } from './typesBasic.ts';
/**
 * Class for working with class names.<br>
 * Класс для работы с названиями классов.
 */
export declare class WindowClasses {
    protected readonly persistent: WindowPersistent;
    protected readonly className: string;
    protected readonly classControl: string;
    protected readonly classBody: string;
    protected readonly classBodyContext: string;
    /**
     * Identification of the current window. Used to search for the current component and its control.<br>
     * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
     */
    protected readonly id: string;
    /**
     * Constructor
     * @param persistent object for working with the animation before turning off the window /<br>объект для работы с анимацией перед выключением окна
     * @param className class name /<br>название класса
     * @param classControl control element class name /<br>название класса элемента управления
     * @param classBody class name for the body /<br>название класса для тела
     * @param classBodyContext class name for the context body /<br>название класса для тела контекста
     */
    constructor(persistent: WindowPersistent, className?: string, classControl?: string, classBody?: string, classBodyContext?: string);
    /**
     * Проверяет, является ли выбранный элемент окном
     * @param target selected item /<br>выбранный элемент
     */
    isWindow(target?: HTMLElement): boolean;
    /**
     * Returns the identifier of the current window.<br>
     * Возвращает идентификатор текущего окна.
     */
    getId(): string;
    /**
     * Returns the name of the main class.<br>
     * Возвращает название главного класса.
     */
    getClassMain(): string;
    /**
     * Returns the class name for control.<br>
     * Возвращает название класса для контроля.
     */
    getClassControl(): string;
    /**
     * Returns the class name for control along with the ID.<br>
     * Возвращает название класса для управления вместе с ID.
     */
    getClassControlAndId(): string;
    /**
     * Returns the full name of the class for the status.<br>
     * Возвращает полное название класса для статуса.
     * @param status названия статуса
     */
    getClassStatus(status: WindowStatusItem): string;
    /**
     * Returns the list of available classes.<br>
     * Возвращает список доступных классов.
     */
    getClasses(): ConstrClassObject;
    /**
     * Returns the class selector for control.<br>
     * Возвращает селектор класса для управления.
     */
    getSelectorControl(): string;
    /**
     * Returns the name of the class for status control.<br>
     * Возвращает название класса для контроля статуса.
     * @param name the name of the class for control /<br>название класса для контроля
     */
    getSelectorStatusControl(name: WindowStatusControlItem): string;
    /**
     * Search and return the window element at the selected item.<br>
     * Поиск и возврат элемента окна у выбранного элемента.
     * @param target selected item /<br>выбранный элемент
     */
    findMain<T extends HTMLElement>(target: HTMLElement): T | undefined;
    /**
     * Search and return of the control element of the current component.<br>
     * Поиск и возврат элемента управления текущего компонента.
     */
    findControl(): HTMLElement | undefined;
    /**
     * Find the control at the selected window.<br>
     * Найди элемент управления у выбранного окна.
     * @param element window element /<br>элемент окна
     */
    findControlByElement(element?: HTMLElement): HTMLElement | undefined;
    /**
     * Search and return of the window body element for the current component.<br>
     * Поиск и возврат элемента тела окна для текущего компонента.
     */
    findBody(): HTMLDivElement | undefined;
    /**
     * Search and return of the context body element of the window for the current component.<br>
     * Поиск и возврат элемента контекста тела окна для текущего компонента.
     */
    findBodyContext(): HTMLDivElement | undefined;
}
