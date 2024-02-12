import { VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts';
import { ProgressRef } from './ProgressRef.ts';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor.ts';
import { type ProgressProps } from './props.ts';
import { type ProgressClasses, type ProgressComponents, type ProgressEmits, type ProgressExpose, type ProgressSetup, type ProgressSlots } from './types.ts';
/**
 * Class constructor for the loader component.<br>
 * Класс-конструктор для компонента загрузчика.
 */
export declare class ProgressDesign<COMP extends ProgressComponents, SETUP extends ProgressSetup, EXPOSE extends ProgressExpose, CLASSES extends ProgressClasses, P extends ProgressProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, ProgressEmits, SETUP, EXPOSE, ProgressSlots, CLASSES, P> {
    protected readonly item: ProgressRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ProgressEmits, P>);
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
}
