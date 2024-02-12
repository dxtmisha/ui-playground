import { MutationItemProps } from '../../constructors/MutationItem/props.ts';
export declare const propsValues: {};
export type PropsToken = {};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<MutationItemProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    item: import("vue").PropType<import("../../classes/mutation/MutationDataItem.ts").MutationDataItem | undefined>;
};
