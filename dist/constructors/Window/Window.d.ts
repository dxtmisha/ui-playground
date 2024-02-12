import { WindowStatus } from './WindowStatus.ts';
import { WindowClient } from './WindowClient.ts';
import { WindowPersistent } from './WindowPersistent.ts';
import { WindowHook } from './WindowHook.ts';
import { WindowClasses } from './WindowClasses.ts';
import { WindowElement } from './WindowElement.ts';
import { WindowFlash } from './WindowFlash.ts';
import { WindowCoordinates } from './WindowCoordinates.ts';
import { WindowPosition } from './WindowPosition.ts';
import { WindowOrigin } from './WindowOrigin.ts';
import { WindowStatic } from './WindowStatic.ts';
import { WindowOpen } from './WindowOpen.ts';
import { WindowVerification } from './WindowVerification.ts';
import { WindowEvent } from './WindowEvent.ts';
import { WindowEmitOptions } from './typesBasic.ts';
import { type ConstrClassObject, type ConstrStyles, type ConstrValue } from '../../types/constructor.ts';
import { type WindowProps } from './props.ts';
/**
 * The base class for working with the window.<br>
 * Базовый класс для работы с окном.
 */
export declare class Window {
    readonly status: WindowStatus;
    readonly client: WindowClient;
    readonly persistent: WindowPersistent;
    readonly hook: WindowHook;
    readonly classes: WindowClasses;
    readonly element: WindowElement;
    readonly flash: WindowFlash;
    readonly coordinates: WindowCoordinates;
    readonly position: WindowPosition;
    readonly origin: WindowOrigin;
    readonly staticMode: WindowStatic;
    readonly open: WindowOpen;
    readonly verification: WindowVerification;
    readonly event: WindowEvent;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element window element /<br>элемент окна
     * @param callback callback function /<br>функция обратного вызова
     * @param callbackEmit call function when the opening state changes /<br>
     * функция вызова при изменении состояния открытия
     * @param className class name /<br>название класса
     * @param classControl control element class name /<br>название класса элемента управления
     * @param classBody class name for the body /<br>название класса для тела
     * @param classBodyContext class name for the context body /<br>название класса для тела контекста
     */
    constructor(props: WindowProps, element: ConstrValue<HTMLDivElement>, callback: () => Promise<void>, callbackEmit: (options: WindowEmitOptions) => void, className?: string, classControl?: string, classBody?: string, classBodyContext?: string);
    /**
     * Returns the list of available classes.<br>
     * Возвращает список доступных классов.
     */
    getClasses(): ConstrClassObject;
    /**
     * Returns the position for displaying the element.<br>
     * Возвращает позицию для отображения элемента.
     */
    getStyles(): ConstrStyles;
    /**
     * Returns an object for calling the event handler.<br>
     * Возвращает объект для вызова обработчика события.
     */
    getEmitOptions(): WindowEmitOptions;
    /**
     * Data update.<br>
     * Обновление данных.
     */
    update(): this;
    /**
     * Restores the data to its previous state.<br>
     * Восстанавливает данные в прежнее состояние.
     */
    stop(): this;
}
