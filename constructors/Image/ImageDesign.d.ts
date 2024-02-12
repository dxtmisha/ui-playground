import { type VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts';
import { ImageRef } from './ImageRef.ts';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor.ts';
import { type ImageProps } from './props.ts';
import { type ImageClasses, type ImageComponents, type ImageEmits, type ImageExpose, type ImageSetup, type ImageSlots } from './types.ts';
/**
 * Constructor class for the image component.<br>
 * Класс-конструктор для компонента изображения.
 */
export declare class ImageDesign<COMP extends ImageComponents, SETUP extends ImageSetup, EXPOSE extends ImageExpose, CLASSES extends ImageClasses, P extends ImageProps> extends DesignConstructorAbstract<HTMLSpanElement, COMP, ImageEmits, SETUP, EXPOSE, ImageSlots, CLASSES, P> {
    protected image: ImageRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ImageEmits, P>);
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
