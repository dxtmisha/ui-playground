import { EventItem } from '../../classes/EventItem.ts';
import { WindowElement } from './WindowElement.ts';
import type { WindowProps } from './props.ts';
/**
 * Class for working with a static window.<br>
 * Класс для работы со статичным окном.
 */
export declare class WindowStatic {
    protected readonly props: WindowProps;
    protected readonly element: WindowElement;
    protected readonly callback?: (() => void) | undefined;
    protected activity: boolean;
    protected event?: EventItem<Window, Event>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
     * @param callback callback function /<br>функция обратного вызова
     */
    constructor(props: WindowProps, element: WindowElement, callback?: (() => void) | undefined);
    /**
     * Checks if the status is active.<br>
     * Проверяет, активен ли статус.
     */
    is(): boolean;
    /**
     * Checks if the static mode is enabled.<br>
     * Проверяет, включен ли режим статичности.
     */
    isStaticMod(): boolean;
    /**
     * Updates the values of static modification.<br>
     * Обновляет значения модификации статичности.
     */
    update(): boolean;
    /**
     * Performs status check and activates events when turned on.<br>
     * Выполняет проверку статуса и активизирует события при включении.
     */
    make(): void;
    /**
     * Performs a check of the adaptation status.<br>
     * Выполняет проверку статуса адаптации.
     */
    makeAdaptive(): void;
    /**
     * Restores the data to its previous state.<br>
     * Восстанавливает данные в прежнее состояние.
     */
    stop(): void;
    /**
     * Checks if the static window is active.<br>
     * Проверяет, активно ли статичное окно.
     */
    protected isStatic(): boolean;
    /**
     * The function called when an event is triggered.<br>
     * Вызываемая функция при срабатывании события.
     */
    protected listener(): void;
}
