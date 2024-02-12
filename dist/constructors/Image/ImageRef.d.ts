import { Image } from './Image.ts';
import { type RefUndefined } from '../../types/ref.ts';
import { type ConstrStyles } from '../../types/constructor.ts';
import { type ImageProps } from './props.ts';
import { type ImageElement, type ImageEventItem } from './typesBasic.ts';
/**
 * Base Image class for working in Vue.<br>
 * Базовый класс Image для работы во Vue.
 */
export declare class ImageRef {
    protected readonly item: Image;
    readonly type: import("vue").ComputedRef<import("./typesBasic.ts").ImageTypeItem>;
    readonly data: import("vue").ShallowRef<ImageEventItem>;
    readonly text: import("vue").ComputedRef<string | undefined>;
    readonly classes: import("vue").ComputedRef<import("../../types/constructor.ts").ConstrClassObject>;
    readonly styles: import("vue").ShallowRef<ConstrStyles | undefined>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element image element for scaling /<br>элемент изображения для масштабирования
     */
    constructor(props: ImageProps, element: RefUndefined<ImageElement>);
    /**
     * Destructor
     */
    destructor(): void;
}
