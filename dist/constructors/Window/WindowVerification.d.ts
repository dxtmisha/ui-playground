import { WindowPersistent } from './WindowPersistent.ts';
import { WindowClasses } from './WindowClasses.ts';
import { WindowElement } from './WindowElement.ts';
import { WindowOpen } from './WindowOpen.ts';
import type { WindowProps } from './props.ts';
import { WindowStatic } from './WindowStatic.ts';
/**
 * Class for managing the opening and closing of the window.<br>
 * Класс для управления открытием и закрытием окна.
 */
export declare class WindowVerification {
    protected readonly props: WindowProps;
    protected readonly persistent: WindowPersistent;
    protected readonly classes: WindowClasses;
    protected readonly element: WindowElement;
    protected readonly staticMode: WindowStatic;
    protected readonly open: WindowOpen;
    protected readonly callback: () => Promise<void>;
    protected target?: HTMLElement;
    protected focus?: HTMLElement;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param persistent object for working with the animation before turning off the window /<br>
     * объект для работы с анимацией перед выключением окна
     * @param classes an object for working with classes and searching for elements /<br>
     * объект для работы с классами и поиском элементов
     * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
     * @param staticMode class object for working with static status /<br>объект класса для работы со статическим статусом
     * @param open the class object for working with the status of closing or opening the window /<br>
     * объект класса для работы со статусом закрытия или открытия окна
     * @param callback callback function /<br>функция обратного вызова
     */
    constructor(props: WindowProps, persistent: WindowPersistent, classes: WindowClasses, element: WindowElement, staticMode: WindowStatic, open: WindowOpen, callback: () => Promise<void>);
    /**
     * Обновления статус открытия окно
     * @param target the selected window /<br>выбранное окно
     */
    update(target: HTMLElement): Promise<void>;
    /**
     * Returns the element in focus.<br>
     * Возвращает элемент в фокусе.
     */
    getFocus(): HTMLElement | undefined;
    protected getTarget<R extends HTMLElement>(): R;
    /**
     * Checks if the selected element is in focus.<br>
     * Проверяет, находится ли выбранный элемент в фокусе.
     */
    protected isFocus(): boolean;
    /**
     * Checks if the target element is the window itself.<br>
     * Проверяет, является ли элемент-цель самим окном.
     */
    protected isTarget(): boolean;
    /**
     * Checks if the selected window is under other windows.<br>
     * Проверяет, находится ли выбранное окно под другими окнами.
     * @param target the selected window /<br>выбранное окно
     */
    protected isChildren(target?: HTMLElement): boolean;
    /**
     * Checks if the window is enabled or if the conditions for opening the window are met.<br>
     * Проверяет, включено ли окно или подходят ли условия для открытия окна.
     */
    protected isEnabled(): boolean;
    /**
     * Checks if the window needs to be closed automatically.<br>
     * Проверяет, нужно ли автоматически закрывать окно.
     */
    protected isAutoClose(): boolean;
    /**
     * Checks if the change of the opening status of the window is blocked.<br>
     * Проверяет, заблокировано ли изменение статуса открытия окна.
     */
    protected isNotBlock(): boolean;
    /**
     * Checks if it needs to be opened when the right button is pressed.<br>
     * Проверяет, нужно ли открывать при нажатии правой кнопки.
     */
    protected isContextmenu(): boolean;
    /**
     * Checks if the window can be closed.<br>
     * Проверяет, можно ли закрыть окно.
     */
    protected isClose(): boolean;
}
