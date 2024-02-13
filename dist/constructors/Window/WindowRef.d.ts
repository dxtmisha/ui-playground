import { Window } from './Window.ts';
import { type RefUndefined } from '../../types/ref.ts';
import { type ConstrClassObject, type ConstrStyles } from '../../types/constructor.ts';
import { type WindowEmitOptions, WindowStatusItem } from './typesBasic.ts';
import { type WindowProps } from './props.ts';
/**
 * The base class for working with the window (Ref).<br>
 * Базовый класс для работы с окном (Ref).
 */
export declare class WindowRef {
    readonly window: Window;
    readonly status: import("vue").ShallowRef<WindowStatusItem | undefined>;
    readonly staticMode: import("vue").ShallowRef<boolean>;
    readonly inDom: import("vue").ShallowRef<boolean>;
    readonly open: import("vue").ShallowRef<boolean>;
    readonly classes: import("vue").ShallowRef<ConstrClassObject>;
    readonly styles: import("vue").ShallowRef<ConstrStyles>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element window element /<br>элемент окна
     * @param callbackEmit call function when the opening state changes /<br>
     * функция вызова при изменении состояния открытия
     * @param className class name /<br>название класса
     * @param classControl control element class name /<br>название класса элемента управления
     * @param classBody class name for the body /<br>название класса для тела
     * @param classBodyContext class name for the context body /<br>название класса для тела контекста
     */
    constructor(props: WindowProps, element: RefUndefined<HTMLDivElement>, callbackEmit: (options: WindowEmitOptions) => void, className?: string, classControl?: string, classBody?: string, classBodyContext?: string);
    /**
     * Returns the identifier of the current window.<br>
     * Возвращает идентификатор текущего окна.
     */
    getId(): string;
    /**
     * Returns the class name for control.<br>
     * Возвращает название класса для контроля.
     */
    getClassControl(): string;
    /**
     * Changes the current state.<br>
     * Изменяет текущее состояние.
     * @param open the value of the current state /<br>значение текущего состояния
     */
    setOpen(open?: boolean): Promise<void>;
    /**
     * Switches the state, that is, opens or closes the window, depending on the value of item.<br>
     * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
     */
    toggle(): Promise<void>;
    /**
     * Events of pressing a control element.<br>
     * События нажатия на элемент управления.
     * @param event event object /<br>объект события
     */
    onClick(event: MouseEvent & TouchEvent): Promise<void>;
    /**
     * Events of pressing the right mouse button on a control element.<br>
     * События нажатия на правую кнопку мыши на элемент управления.
     * @param event event object /<br>объект события
     */
    onContextmenu(event: MouseEvent & TouchEvent): Promise<void>;
    /**
     * Event of animation end when closing the window.<br>
     * Событие окончания анимации при закрытии окна.
     */
    onTransition(): void;
    /**
     * Event of the animation end of the closing prohibition.<br>
     * Событие окончания анимации запрета на закрытие.
     */
    onPersistent(): void;
    /**
     * Updates all values.<br>
     * Обновляет все значения.
     */
    update(): Promise<void>;
    /**
     * Updates the class values.<br>
     * Обновляет значения класса.
     */
    updateClasses(): this;
}
