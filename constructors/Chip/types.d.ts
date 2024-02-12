import { type ConstrClass } from '../../types/constructor.ts';
import { type ButtonComponents, type ButtonEmits, type ButtonExpose, type ButtonSetup, type ButtonSlots } from '../Button/types.ts';
/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ChipComponents = ButtonComponents;
/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type ChipEmits = ButtonEmits;
/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type ChipSetup = ButtonSetup;
/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type ChipExpose = ButtonExpose;
/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type ChipSlots = ButtonSlots;
/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type ChipClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    trailing: string;
    loading: string;
};
