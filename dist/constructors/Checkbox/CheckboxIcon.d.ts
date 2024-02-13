import { InputValue } from '../Input/InputValue';
import { type ImageProps } from '../Image/props';
import { type CheckboxProps } from './props';
/**
 * Class for working with icons for checkbox.<br>
 * Класс для работы с иконками для checkbox.
 */
export declare class CheckboxIcon {
    protected readonly props: CheckboxProps;
    protected readonly value: InputValue;
    constructor(props: CheckboxProps, value: InputValue);
    /**
     * Returns data for the icon.<br>
     * Возвращает данные для иконки.
     */
    get(): ImageProps;
    /**
     * Returns the name of the icon.<br>
     * Возвращает название иконки.
     */
    protected getIcon(): string | undefined;
}
