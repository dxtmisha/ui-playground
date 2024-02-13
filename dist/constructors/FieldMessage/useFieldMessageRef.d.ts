import { type ComputedRef, type VNode } from 'vue';
import { DesignComponents } from '../../classes/design/DesignComponents';
import { type FieldMessageProps } from './props';
export type UseFieldMessageComponent = {
    message?: object;
};
export type UseFieldMessageSetup = {
    messageBind: ComputedRef<FieldMessageProps>;
    renderFieldMessage: () => VNode[];
};
export type UseFieldMessageProps = {
    disabled?: FieldMessageProps['disabled'];
    helperMessage?: FieldMessageProps['helperMessage'];
    validationMessage?: FieldMessageProps['validationMessage'];
};
export type UseFieldMessageCounterProps = UseFieldMessageProps & {
    counter?: FieldMessageProps['counter'];
    maxlength?: FieldMessageProps['maxlength'];
};
export declare const usePropsFieldMessage: {
    disabled: BooleanConstructor;
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
};
export declare const usePropsFieldMessageCounter: {
    counter: (StringConstructor | NumberConstructor)[];
    maxlength: (StringConstructor | NumberConstructor)[];
    disabled: BooleanConstructor;
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
};
/**
 * The function returns data for working with the FieldMessage component.<br>
 * Функция возвращает данные для работы с компонентом FieldMessage.
 * @param props input parameter /<br>входной параметр
 * @param components object for working with components /<br>объект для работы с компонентами
 */
export declare const useFieldMessageRef: <COMP extends UseFieldMessageComponent, P extends UseFieldMessageCounterProps>(props: P, components?: DesignComponents<COMP, P> | undefined) => UseFieldMessageSetup;
