import { type RefUndefined } from '../../types/ref';
import { type MutationComponentProps, type MutationSlots } from '../../types/mutation';
import { type MutationItemProps } from './props';
/**
 * Class for working with the component element.<br>
 * Класс для работы с элементом компонента.
 */
export declare class MutationItemRef {
    protected readonly props: MutationItemProps;
    readonly mainElement: HTMLElement;
    readonly componentName: string;
    readonly componentItem: any;
    readonly binds: import("vue").ShallowRef<undefined> | import("vue").ShallowRef<MutationComponentProps>;
    readonly slots: import("vue").ShallowRef<MutationSlots | undefined>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element instance of the element itself /<br>экземпляр самого элемента
     */
    constructor(props: MutationItemProps, element: RefUndefined<any>);
    /**
     * Data update.<br>
     * Обновление данных.
     */
    update(): this;
    /**
     * Initializes data for the component.<br>
     * Инициализирует данные для компонента.
     */
    private initComponentItem;
}
