import { type VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts';
import { MutationItemRef } from './MutationItemRef.ts';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor.ts';
import { type MutationItemProps } from './props.ts';
import { type MutationItemClasses, type MutationItemComponents, type MutationItemEmits, type MutationItemExpose, type MutationItemSetup, type MutationItemSlots } from './types.ts';
/**
 * MutationItemDesign
 */
export declare class MutationItemDesign<COMP extends MutationItemComponents, SETUP extends MutationItemSetup, EXPOSE extends MutationItemExpose, CLASSES extends MutationItemClasses, P extends MutationItemProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, MutationItemEmits, SETUP, EXPOSE, MutationItemSlots, CLASSES, P> {
    protected mutation: MutationItemRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, MutationItemEmits, P>);
    /**
     * Initialization of basic options.<br>
     * Инициализация базовых опций.
     */
    protected makeOptions(): this;
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected initSetup(): SETUP;
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.<br>
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.<br>
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.<br>
     * Метод для рендеринга.
     */
    protected initRender(): VNode | undefined;
    /**
     * Rendering data for the slot.<br>
     * Рендеринг данных для слота.
     */
    private renderSlots;
}
