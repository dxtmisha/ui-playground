import { FieldMessage } from './FieldMessage.ts';
import type { FieldMessageProps } from './props.ts';
/**
 * Class for the component of outputting a message for the input element (Ref).<br>
 * Класс для компонента вывода сообщения для элемента ввода (Ref).
 */
export declare class FieldMessageRef {
    protected readonly item: FieldMessage;
    readonly is: import("vue").ComputedRef<boolean>;
    readonly isMessage: import("vue").ComputedRef<boolean>;
    readonly isValidation: import("vue").ComputedRef<boolean>;
    readonly isCounter: import("vue").ComputedRef<boolean>;
    readonly isMax: import("vue").ComputedRef<boolean>;
    readonly message: import("vue").ComputedRef<string | undefined>;
    readonly counter: import("vue").ComputedRef<string>;
    readonly classes: import("vue").ComputedRef<import("../../types/constructor.ts").ConstrClassObject>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: FieldMessageProps);
}
