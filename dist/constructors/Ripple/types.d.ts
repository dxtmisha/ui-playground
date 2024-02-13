import { type ConstrClass } from '../../types/constructor';
/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type RippleComponents = {};
/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type RippleEmits = {};
/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type RippleSetup = {
    onClick: (event: MouseEvent) => void;
};
/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type RippleExpose = {};
/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type RippleSlots = {};
/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type RippleClasses = {
    main: ConstrClass;
    item: string;
};
