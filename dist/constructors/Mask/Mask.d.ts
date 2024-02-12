import { MaskType } from './MaskType.ts';
import { MaskBuffer } from './MaskBuffer.ts';
import { MaskFocus } from './MaskFocus.ts';
import { MaskRubberItem } from './MaskRubberItem.ts';
import { MaskRubberTransition } from './MaskRubberTransition.ts';
import { MaskCharacterLength } from './MaskCharacterLength.ts';
import { MaskDate } from './MaskDate.ts';
import { MaskFormat } from './MaskFormat.ts';
import { MaskSpecial } from './MaskSpecial.ts';
import { MaskMatch } from './MaskMatch.ts';
import { MaskPattern } from './MaskPattern.ts';
import { MaskRight } from './MaskRight.ts';
import { MaskRubber } from './MaskRubber.ts';
import { MaskItem } from './MaskItem.ts';
import { MaskSelection } from './MaskSelection.ts';
import { MaskCharacter } from './MaskCharacter.ts';
import { MaskValueBasic } from './MaskValueBasic.ts';
import { MaskValue } from './MaskValue.ts';
import { MaskValidation } from './MaskValidation.ts';
import { MaskView } from './MaskView.ts';
import { MaskEmit } from './MaskEmit.ts';
import { MaskData } from './MaskData.ts';
import { MaskEvent } from './MaskEvent.ts';
import { type ConstrClassObject, type ConstrValue } from '../../types/constructor.ts';
import { type MaskElementInput, type MaskEventData } from './typesBasic.ts';
import type { MaskEmits } from './types.ts';
import type { MaskProps } from './props.ts';
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
