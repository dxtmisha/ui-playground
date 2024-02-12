import { WindowProps } from './props.ts';
/**
 * A class for working with hooks when opening and closing a window.<br>
 * Класс для работы с хуками при открытии и закрытии окна.
 */
export declare class WindowHook {
    protected readonly props: WindowProps;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: WindowProps);
    /**
     * Hook for preparing elements before opening/closing.<br>
     * Хук для подготовки элементов перед открытием/закрытием.
     * @param open current state of the window /<br>текущее состояние окна
     */
    preparation(open: boolean): Promise<void>;
    /**
     * Hook before opening/closing.<br>
     * Хук перед открытием/закрытием.
     * @param open current state of the window /<br>текущее состояние окна
     */
    beforeOpening(open: boolean): Promise<boolean>;
    /**
     * Hook after opening/closing.<br>
     * Хук после открытия/закрытия.
     * @param open current state of the window /<br>текущее состояние окна
     */
    opening(open: boolean): Promise<boolean>;
}
