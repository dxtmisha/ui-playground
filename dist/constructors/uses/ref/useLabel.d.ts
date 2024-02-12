import { type ComputedRef, type VNode } from 'vue';
export type UseLabelSetup = {
    isLabel: ComputedRef<boolean>;
    renderLabel(): VNode[];
};
export type UseLabelSlots = {
    default?(props: any): any;
};
export type UseLabelProps = {
    label?: string | number;
};
export declare const usePropsLabel: {
    label: (StringConstructor | NumberConstructor)[];
};
/**
 * Use for adding text.<br>
 * Использование для добавления текста.
 * @param props input property /<br>входное свойство
 * @param slots object for working with slots /<br>объект для работы со слотами
 * @param className class name /<br>название класса
 */
export declare const useLabel: (props: Readonly<UseLabelProps>, slots?: UseLabelSlots, className?: string) => UseLabelSetup;
