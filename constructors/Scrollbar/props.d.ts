import { type PropType } from 'vue';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ScrollbarProps = {
    tag: string;
    visible?: boolean;
    border?: boolean;
    inverse?: boolean;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsScrollbar: ScrollbarProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsScrollbar: {
    visible: BooleanConstructor;
    border: BooleanConstructor;
    inverse: BooleanConstructor;
    tag: {
        type: PropType<string>;
        default: string;
    };
};
