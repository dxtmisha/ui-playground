import { type VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts';
import { IconRef } from './IconRef.ts';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor.ts';
import { type ImageEventData } from '../Image/typesBasic.ts';
import { type IconProps } from './props.ts';
import { type IconClasses, type IconComponents, type IconEmits, type IconExpose, type IconSetup, type IconSlots } from './types.ts';
/**
 * Constructor class for the icon component.<br>
 * Класс-конструктор для компонента иконки.
 */
export declare class IconDesign<COMP extends IconComponents, SETUP extends IconSetup, EXPOSE extends IconExpose, CLASSES extends IconClasses, P extends IconProps> extends DesignConstructorAbstract<HTMLSpanElement, COMP, IconEmits, SETUP, EXPOSE, IconSlots, CLASSES, P> {
    protected readonly icon: IconRef;
    protected readonly onLoad: (event: ImageEventData) => void | undefined;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, IconEmits, P>);
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
