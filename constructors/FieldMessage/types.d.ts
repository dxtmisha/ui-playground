import { ComputedRef, VNode } from 'vue';
import { type ConstrClass } from '../../types/constructor.ts';
/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type FieldMessageComponents = {};
/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type FieldMessageEmits = {};
/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type FieldMessageSetup = {
    is: ComputedRef<boolean>;
    isMessage: ComputedRef<boolean>;
    isValidation: ComputedRef<boolean>;
    isCounter: ComputedRef<boolean>;
    isMax: ComputedRef<boolean>;
    message: ComputedRef<string | undefined>;
    counter: ComputedRef<string | undefined>;
    renderInfo: () => VNode;
    renderCounter: () => VNode;
};
/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type FieldMessageExpose = {};
/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type FieldMessageSlots = {};
/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type FieldMessageClasses = {
    main: ConstrClass;
    info: string;
    counter: string;
};
