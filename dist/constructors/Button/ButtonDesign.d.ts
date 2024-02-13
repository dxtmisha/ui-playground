import { type VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract';
import { type UseIconSetup } from '../Icon/useIconRef';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor';
import { type ButtonProps } from './props';
import { type ButtonClasses, type ButtonComponents, type ButtonEmits, type ButtonExpose, type ButtonSetup, type ButtonSlots } from './types';
/**
 * Class constructor for the button component.<br>
 * Класс-конструктор для компонента кнопки.
 */
export declare class ButtonDesign<COMP extends ButtonComponents, SETUP extends ButtonSetup, EXPOSE extends ButtonExpose, CLASSES extends ButtonClasses, P extends ButtonProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, ButtonEmits, SETUP, EXPOSE, ButtonSlots, CLASSES, P> {
    protected readonly icons: UseIconSetup;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ButtonEmits, P>);
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
