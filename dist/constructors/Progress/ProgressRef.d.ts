import { Progress } from './Progress.ts';
import { type ConstrClassObject, type ConstrStyles } from '../../types/constructor.ts';
import { type ProgressProps } from './props.ts';
/**
 * Base class Progress for working in Vue.<br>
 * Базовый класс Progress для работы в Vue.
 */
export declare class ProgressRef {
    protected readonly props: ProgressProps;
    protected readonly item: Progress;
    readonly tag: import("vue").ComputedRef<string>;
    readonly valueInPercent: import("vue").ComputedRef<string | null>;
    readonly hide: import("vue").ShallowRef<boolean>;
    readonly visible: import("vue").ShallowRef<boolean>;
    readonly classes: import("vue").ShallowRef<ConstrClassObject>;
    readonly styles: import("vue").ComputedRef<ConstrStyles>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: ProgressProps);
    /**
     * Monitors the animation event for hiding the element.<br>
     * Следит за событием анимации для скрытия элемента.
     * @param event A string containing the value of the animation-name that generated the animation /<br>
     * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
     */
    onAnimation(event: AnimationEvent): void;
}
