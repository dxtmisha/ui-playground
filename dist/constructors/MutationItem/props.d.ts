import { type PropType } from 'vue';
import { MutationDataItem } from '../../classes/mutation/MutationDataItem';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type MutationItemProps = {
    item?: MutationDataItem;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMutationItem: MutationItemProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsMutationItem: {
    item: PropType<MutationDataItem | undefined>;
};
