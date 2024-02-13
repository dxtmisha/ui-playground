import { ComputedRef } from 'vue';
import { type ConstrClass } from '../../types/constructor';
/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ProgressComponents = {};
/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type ProgressEmits = {};
/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type ProgressSetup = {
    tag: ComputedRef<string>;
    valueInPercent?: ComputedRef<string | null>;
    hide: ComputedRef<boolean>;
    visible: ComputedRef<boolean>;
    onAnimation: (event: AnimationEvent) => void;
};
/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type ProgressExpose = {};
/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type ProgressSlots = {};
/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type ProgressClasses = {
    main: ConstrClass;
    circle: string;
    circleSub: string;
};
