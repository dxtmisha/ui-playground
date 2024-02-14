import { WindowStatus } from './WindowStatus';
import { WindowClient } from './WindowClient';
import { WindowHook } from './WindowHook';
import { WindowElement } from './WindowElement';
import { WindowFlash } from './WindowFlash';
import { WindowCoordinates } from './WindowCoordinates';
import { WindowPosition } from './WindowPosition';
import { WindowOrigin } from './WindowOrigin';
import { type WindowProps } from './props';
/**
 * Class for managing the status of an open window.<br>
 * Класс для управления статусом открытого окна.
 */
export declare class WindowOpen {
    protected readonly props: WindowProps;
    protected readonly status: WindowStatus;
    protected readonly client: WindowClient;
    protected readonly hook: WindowHook;
    protected readonly element: WindowElement;
    protected readonly flash: WindowFlash;
    protected readonly coordinates: WindowCoordinates;
    protected readonly position: WindowPosition;
    protected readonly origin: WindowOrigin;
    protected readonly callback: () => Promise<void>;
    protected readonly callbackEmit: () => void;
    protected open: boolean;
    protected first: boolean;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param status object for working with statuses /<br>объект для работы со статусами
     * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
     * @param hook object for working with hooks /<br>объект для работы с хуками
     * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
     * @param flash class object for working with fast window opening /<br>объект класса для работы с быстрым открытием окна
     * @param coordinates object for working with coordinates /<br>объект для работы с координатами
     * @param position object for working with the position of the element /<br>объект для работы с положением элемента
     * @param origin the object for work is in the initial position upon opening <br>объект для работы в начальной позиции при открытии
     * @param callback callback function /<br>функция обратного вызова
     * @param callbackEmit call function when the opening state changes /<br>
     * функция вызова при изменении состояния открытия
     */
    constructor(props: WindowProps, status: WindowStatus, client: WindowClient, hook: WindowHook, element: WindowElement, flash: WindowFlash, coordinates: WindowCoordinates, position: WindowPosition, origin: WindowOrigin, callback: () => Promise<void>, callbackEmit: () => void);
    /**
     * Checks whether the element should be kept in the DOM.<br>
     * Проверяет, надо ли элемент оставить в DOM.
     */
    inDom(): boolean;
    /**
     * Returns the current state.<br>
     * Возвращает текущее состояние.
     */
    get(): boolean;
    /**
     * Changes the current state.<br>
     * Изменяет текущее состояние.
     * @param open the value of the current state /<br>значение текущего состояния
     */
    set(open?: boolean): Promise<this>;
    /**
     * Switches the state, that is, opens or closes the window, depending on the value of item.<br>
     * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
     */
    toggle(): Promise<this>;
    /**
     * The method closes the window.<br>
     * Метод закрывает окно.
     */
    close(): void;
    /**
     * Resets all data to initial values.<br>
     * Сбрасывает все данные к начальным значениям.
     */
    reset(): this;
    /**
     * The method updates the current position.<br>
     * Метод обновляет текущее положение.
     */
    watchPosition(): Promise<void>;
    /**
     * Changes values and triggers events.<br>
     * Изменяет значения и вызывает события.
     * @param open the value of the current state /<br>значение текущего состояния
     */
    setOpenAndEmit(open: boolean): Promise<this>;
    /**
     * Changing the location of the menu window.<br>
     * Изменение расположения окна меню.
     */
    protected watchCoordinates(): this;
    /**
     * Transition to the closing state.<br>
     * Переход в состояние закрытия.
     */
    protected toClose(): void;
}
