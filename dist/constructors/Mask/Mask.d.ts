import { MaskType } from './MaskType';
import { MaskBuffer } from './MaskBuffer';
import { MaskFocus } from './MaskFocus';
import { MaskRubberItem } from './MaskRubberItem';
import { MaskRubberTransition } from './MaskRubberTransition';
import { MaskCharacterLength } from './MaskCharacterLength';
import { MaskDate } from './MaskDate';
import { MaskFormat } from './MaskFormat';
import { MaskSpecial } from './MaskSpecial';
import { MaskMatch } from './MaskMatch';
import { MaskPattern } from './MaskPattern';
import { MaskRight } from './MaskRight';
import { MaskRubber } from './MaskRubber';
import { MaskItem } from './MaskItem';
import { MaskSelection } from './MaskSelection';
import { MaskCharacter } from './MaskCharacter';
import { MaskValueBasic } from './MaskValueBasic';
import { MaskValue } from './MaskValue';
import { MaskValidation } from './MaskValidation';
import { MaskView } from './MaskView';
import { MaskEmit } from './MaskEmit';
import { MaskData } from './MaskData';
import { MaskEvent } from './MaskEvent';
import { type ConstrClassObject, type ConstrValue } from '../../types/constructor';
import { type MaskElementInput, type MaskEventData } from './typesBasic';
import type { MaskEmits } from './types';
import type { MaskProps } from './props';
/**
 * Base class for working with the mask.<br>
 * Базовый класс для работы с маской.
 */
export declare class Mask {
    readonly type: MaskType;
    readonly buffer: MaskBuffer;
    readonly focus: MaskFocus;
    readonly rubberItem: MaskRubberItem;
    readonly rubberTransition: MaskRubberTransition;
    readonly characterLength: MaskCharacterLength;
    readonly date: MaskDate;
    readonly format: MaskFormat;
    readonly special: MaskSpecial;
    readonly match: MaskMatch;
    readonly pattern: MaskPattern;
    readonly right: MaskRight;
    readonly rubber: MaskRubber;
    readonly item: MaskItem;
    readonly selection: MaskSelection;
    readonly character: MaskCharacter;
    readonly valueBasic: MaskValueBasic;
    readonly value: MaskValue;
    readonly validation: MaskValidation;
    readonly view: MaskView;
    readonly emit: MaskEmit;
    readonly data: MaskData;
    readonly event: MaskEvent;
    protected oldValue: string;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element input element /<br>элемент ввода
     * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
     * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
     */
    constructor(props: MaskProps, element: ConstrValue<MaskElementInput>, callbackEvent: (type: string & keyof MaskEmits, event: Event, value?: MaskEventData) => void, classCharacter?: string);
    /**
     * Receiving basic standard values.<br>
     * Получение базовых стандартных значений.
     */
    getValueBasic(): string;
    /**
     * Values for the class.<br>
     * Значения для класса.
     */
    getClasses(): ConstrClassObject;
    /**
     * Restores the selection location.<br>
     * Восстанавливает место выделения.
     */
    goSelection(): this;
    /**
     * Resets all values or updates to the new one.<br>
     * Сбрасывает все значения или обновляется до нового.
     * @param value new values /<br>новые значения
     */
    reset(value?: string | number): boolean;
}
