import { ShallowRef, type VNode } from 'vue';
import { type ConstrClass } from '../../types/constructor.ts';
import { type WindowEmitOptions } from './typesBasic.ts';
/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type WindowComponents = {
    scrollbar?: object;
};
/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type WindowEmits = {
    window: [options: WindowEmitOptions];
};
/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type WindowSetup = {
    id: string;
    status: ShallowRef<string>;
    open: ShallowRef<boolean>;
    inDom: ShallowRef<boolean>;
    staticMode: ShallowRef<boolean>;
    slotControl: {
        class: string;
        onclick: (event: MouseEvent & TouchEvent) => Promise<void>;
        oncontextmenu: (event: MouseEvent & TouchEvent) => Promise<void>;
    };
    setOpen(): Promise<void>;
    toggle(): Promise<void>;
    onTransition(): void;
    onPersistent(): void;
    renderBodyContext(): VNode | undefined;
};
/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type WindowExpose = {
    id: string;
    open: ShallowRef<boolean>;
    setOpen(): Promise<void>;
    toggle(): Promise<void>;
};
/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type WindowSlots = {
    control?(props: WindowSetup['slotControl']): any;
    title?(props: any): any;
    footer?(props: any): any;
    default?(props: any): any;
};
/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type WindowClasses = {
    main: ConstrClass;
    body: string;
    bodyContext: string;
    control: string;
};
