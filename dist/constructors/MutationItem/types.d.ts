import { type ComputedRef, type ShallowRef, type VNode } from 'vue';
import { type ConstrClass } from '../../types/constructor';
import { type MutationComponentProps, type MutationSlots } from '../../types/mutation';
export type MutationSlotsRefItem = (VNode | string);
export type MutationSlotsRef = Record<string, () => MutationSlotsRefItem[]>;
/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MutationItemComponents = {};
/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type MutationItemEmits = {
    load: [];
};
/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type MutationItemSetup = {
    mainElement: HTMLElement;
    componentName: string;
    componentItem: ShallowRef;
    binds: ShallowRef<MutationComponentProps | undefined>;
    slots: ShallowRef<MutationSlots | undefined>;
    renderSlots: ComputedRef<MutationSlotsRef>;
};
/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type MutationItemExpose = {};
/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type MutationItemSlots = {};
/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type MutationItemClasses = {
    main: ConstrClass;
};
