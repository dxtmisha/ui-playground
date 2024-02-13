import type { PropertyItemInput } from '../../../../types/property';
export type ConvectorShadowItem = {
    type: string;
    color: string;
    x: string;
    y: string;
    blur: string;
    spread: string;
};
/**
 * Transforming data into shadow.<br>
 * Преобразование данных в тень.
 * @param item values for conversion /<br>значения для преобразования
 */
export declare function convectorShadow(item: PropertyItemInput): void;
