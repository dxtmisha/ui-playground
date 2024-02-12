import { type VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts';
import { CheckboxRef } from './CheckboxRef.ts';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor.ts';
import { type CheckboxProps } from './props.ts';
import { type CheckboxClasses, type CheckboxComponents, type CheckboxEmits, type CheckboxExpose, type CheckboxSetup, type CheckboxSlots } from './types.ts';
/**
 * CheckboxDesign
 */
export declare class CheckboxDesign<COMP extends CheckboxComponents, SETUP extends CheckboxSetup, EXPOSE extends CheckboxExpose, CLASSES extends CheckboxClasses, P extends CheckboxProps> extends DesignConstructorAbstract<HTMLLabelElement, COMP, CheckboxEmits, SETUP, EXPOSE, CheckboxSlots, CLASSES, P> {
    protected checkbox: CheckboxRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, CheckboxEmits, P>);
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
    protected initRender(): VNode;
    /**
     * Rendering of the main input.<br>
     * Рендеринг главного input.
     */
    protected renderInput: () => VNode;
    /**
     * Rendering of the hidden input.<br>
     * Рендеринг скрытого input.
     */
    protected renderInputHidden: () => VNode;
    /**
     * Rendering of the checkbox element.<br>
     * Рендеринг элемента checkbox.
     */
    protected renderChecked: () => VNode;
    /**
     * Rendering of the informational text element.<br>
     * Рендеринг элемента информационного текста.
     */
    protected renderInfo: () => VNode;
}
