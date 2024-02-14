import { type Ref } from 'vue';
import { Mask } from './Mask';
import { type ConstrClassObject } from '../../types/constructor';
import { type MaskElementInput, type MaskEventData, type MaskViewList } from './typesBasic';
import type { MaskEmits } from './types';
import type { MaskProps } from './props';
/**
 * A class for working with a mask.<br>
 * Класс для работы с маской.
 */
export declare class MaskRef {
    protected mask: Mask;
    readonly valueBasic: import("vue").ShallowRef<string>;
    readonly value: import("vue").ShallowRef<string>;
    readonly view: import("vue").ShallowRef<MaskViewList>;
    readonly classes: import("vue").ShallowRef<ConstrClassObject>;
    /**
     * Constructor
     * @param props base data /<br>базовые данные
     * @param element input element /<br>элемент ввода
     * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
     * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
     */
    constructor(props: MaskProps, element: Ref<MaskElementInput>, callbackEvent: (type: string & keyof MaskEmits, event: Event, value?: MaskEventData) => void, classCharacter?: string);
    readonly onFocus: (event: FocusEvent) => void;
    readonly onBlur: (event: FocusEvent) => void;
    readonly onKeydown: (event: KeyboardEvent) => void;
    readonly onKeyup: (event: KeyboardEvent) => void;
    readonly onBeforeinput: (event: InputEvent) => void;
    readonly onInput: (event: InputEvent) => void;
    readonly onChange: (event: Event) => void;
    readonly onPaste: (event: ClipboardEvent) => void;
    readonly onClick: (event: MouseEvent) => void;
    /**
     * Updating the entered data.<br>
     * Обновление введенных данных.
     */
    updateValue(): this;
}
