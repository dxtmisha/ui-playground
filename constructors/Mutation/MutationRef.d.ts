import { Mutation } from '../../classes/mutation/Mutation.ts';
import { type MutationDataItem } from '../../classes/mutation/MutationDataItem.ts';
/**
 * A class for global monitoring of changes and searching for new elements to transform into components (Ref).<br>
 * Класс для глобального слежения за изменениями и поиска новых элементов для преобразования в компоненты (Ref).
 */
export declare class MutationRef {
    readonly mutation: Mutation;
    readonly items: import("vue").ShallowRef<MutationDataItem[]>;
    /**
     * Constructor
     */
    constructor();
    /**
     * Data update.<br>
     * Обновление данных.
     */
    update(): this;
}
