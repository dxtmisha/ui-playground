import { MaskBuffer } from './MaskBuffer.ts';
/**
 * Class for storing information about the focus of an element.<br>
 * Класс для хранения информации о фокусировке элемента.
 */
export declare class MaskFocus {
    protected readonly buffer: MaskBuffer;
    protected value: boolean;
    constructor(buffer: MaskBuffer);
    /**
     * Checks for focus on the element.<br>
     * Проверяет наличие фокуса у элемента.
     */
    is(): boolean;
    /**
     * Set the element state to focused.<br>
     * Установить состояние элемента на фокусированное.
     */
    in(): void;
    /**
     * Reset the focus of the element.<br>
     * Сбросить фокус элемента.
     */
    out(): void;
}
