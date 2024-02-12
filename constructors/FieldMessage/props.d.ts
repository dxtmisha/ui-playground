/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type FieldMessageProps = {
    disabled?: boolean;
    counter?: string | number;
    maxlength?: string | number;
    helperMessage?: string;
    validationMessage?: string;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFieldMessage: FieldMessageProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsFieldMessage: {
    disabled: BooleanConstructor;
    counter: (StringConstructor | NumberConstructor)[];
    maxlength: (StringConstructor | NumberConstructor)[];
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
};
