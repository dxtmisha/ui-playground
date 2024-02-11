import { type ConstrEmit } from '../../../types/constructor.ts';
import { type UseEnabledSetup } from './useEnabled.ts';
type UseEventClickValue = {
    type: string;
    value: any;
    detail: Record<string, any> | undefined;
};
export type UseEventClickSetup = {
    /**
     * Events when clicking on the button itself.<br>
     * События при клике на самой кнопке.
     * @param event press events /<br>события нажатия
     */
    onClick(event: MouseEvent): void;
};
export type UseEventClickEmits = {
    click: [
        event: MouseEvent,
        value: UseEventClickValue
    ];
};
export type UseEventClickProps = {
    to?: string;
    value?: any;
    detail?: Record<string, any>;
};
export declare const usePropsEventClick: {
    to: StringConstructor;
    value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    detail: ObjectConstructor[];
};
/**
 * Base class for working with button events.<br>
 * Базовый класс для работы с событиями кнопки.
 */
export declare const useEventClick: (props: UseEventClickProps, enabled: UseEnabledSetup, emits?: ConstrEmit<UseEventClickEmits>) => UseEventClickSetup;
export {};
