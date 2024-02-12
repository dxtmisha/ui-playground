import { type Ref } from 'vue';
import { Scrollbar } from './Scrollbar.ts';
import type { ConstrClassObject } from '../../types/constructor.ts';
import type { ScrollbarProps } from './props.ts';
/**
 * Reactive class for working with the scroll component.<br>
 * Реактивный класс для работы с компонентом скролла.
 */
export declare class ScrollbarRef {
    protected readonly scrollbar: Scrollbar;
    readonly classes: Ref<ConstrClassObject>;
    /**
     * Constructor
     * @param props properties /<br>свойства
     * @param element input element /<br>элемент ввода
     */
    constructor(props: ScrollbarProps, element: Ref<HTMLDivElement | undefined>);
    /**
     * Updates the class values.<br>
     * Обновляет значения класса.
     */
    updateClasses(): Promise<this>;
}
