import { DesignAsyncAbstract } from '../../classes/design/DesignAsyncAbstract.ts';
import { type ProgressProps } from './props.ts';
import { type ProgressEventLoad } from './typesBasic.ts';
import { type ConstrClassObject, type ConstrStyles } from '../../types/constructor.ts';
/**
 * Base class for working with the loader.<br>
 * Базовый класс для работы с загрузчиком.
 */
export declare class Progress extends DesignAsyncAbstract<ProgressProps, ProgressEventLoad> {
    protected timeout?: any;
    protected timeoutReject?: any;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param callback callback function /<br>функция обратного вызова
     */
    constructor(props: ProgressProps, callback: (event: ProgressEventLoad) => void);
    /**
     * Checks if there are any values.<br>
     * Проверяет, есть ли значения.
     */
    isValue(): this is {
        props: {
            value: number;
        };
    };
    /**
     * Returns the tag type for the element.<br>
     * Возвращает тип тега для элемента.
     */
    getTag(): string;
    /**
     * Returns values.<br>
     * Возвращает значения.
     */
    getValue(): number;
    /**
     * Returns values in percentages.<br>
     * Возвращает значения в процентах.
     */
    getValueInPercent(): string | null;
    /**
     * Returns the maximum allowable value.<br>
     * Возвращает максимально допустимое значение.
     */
    getMax(): number;
    /**
     * Returns the property for style.<br>
     * Возвращает свойство для стиля.
     */
    getStyles(): ConstrStyles;
    /**
     * Monitors the animation event for hiding the element.<br>
     * Следит за событием анимации для скрытия элемента.
     * @param animationName A string containing the value of the animation-name that generated the animation /<br>
     * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
     */
    onAnimation({ animationName }: AnimationEvent): void;
    /**
     * A function that is called each time the input values are changed.<br>
     * Функция, которая вызывается каждый раз, когда изменяются входные значения.
     */
    protected initEvent(): Promise<void>;
    /**
     * The mode is triggered when the visible property changes to change the output status of the element.<br>
     * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
     */
    protected makeVisible(): Promise<[boolean, boolean]>;
    /**
     * Updates dependent data when the visible property changes.<br>
     * Обновляет зависимые данные при изменении свойства visible.
     */
    protected initVisible(): [boolean, boolean];
    /**
     * Values for the class.<br>
     * Значения для класса.
     */
    protected initClasses(): ConstrClassObject;
}
