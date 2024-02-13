import type { WindowProps } from './props.ts';
/**
 * Class for managing the animation output before closing the window.<br>
 * Класс управления выводом анимации перед закрытием окна.
 */
export declare class WindowPersistent {
    protected readonly props: WindowProps;
    protected readonly callback?: (() => void) | undefined;
    protected persistent: boolean;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param callback callback function /<br>функция обратного вызова
     */
    constructor(props: WindowProps, callback?: (() => void) | undefined);
    /**
     * Returns the prohibition status.<br>
     * Возвращает статус запрета.
     */
    get(): boolean;
    /**
     * Request to enable animation.<br>
     * Запрос на включение анимации.
     */
    on(): boolean;
    /**
     * Request to disable animation.<br>
     * Запрос на выключение анимации.
     */
    disabled(): this;
    /**
     * Calls the function if the value has been changed.<br>
     * Вызывает функцию, если было изменено значение.
     */
    protected makeCallback(): this;
}
