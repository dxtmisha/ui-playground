import { MaskBuffer } from './MaskBuffer.ts';
import { MaskFocus } from './MaskFocus.ts';
import { MaskCharacterLength } from './MaskCharacterLength.ts';
import { MaskRight } from './MaskRight.ts';
import { MaskSelection } from './MaskSelection.ts';
import { MaskValueBasic } from './MaskValueBasic.ts';
import { MaskValidation } from './MaskValidation.ts';
import { MaskEmit } from './MaskEmit.ts';
import { MaskData } from './MaskData.ts';
import { type MaskEventSelection } from './typesBasic.ts';
/**
 * Class for working with events.<br>
 * Класс для работы с событиями.
 */
export declare class MaskEvent {
    protected readonly buffer: MaskBuffer;
    protected readonly focus: MaskFocus;
    protected readonly characterLength: MaskCharacterLength;
    protected readonly right: MaskRight;
    protected readonly selection: MaskSelection;
    protected readonly valueBasic: MaskValueBasic;
    protected readonly validation: MaskValidation;
    protected readonly emit: MaskEmit;
    protected readonly data: MaskData;
    protected change: boolean;
    protected unidentified?: MaskEventSelection;
    /**
     * Constructor
     * @param buffer
     * @param focus
     * @param characterLength
     * @param right
     * @param selection
     * @param valueBasic
     * @param validation
     * @param emit
     * @param data
     */
    constructor(buffer: MaskBuffer, focus: MaskFocus, characterLength: MaskCharacterLength, right: MaskRight, selection: MaskSelection, valueBasic: MaskValueBasic, validation: MaskValidation, emit: MaskEmit, data: MaskData);
    /**
     * Capture of the event in focus.<br>
     * Перехват события в фокусе.
     * @param event event object /<br>объект события
     */
    onFocus(event: FocusEvent): void;
    /**
     * Capture of the event when focus is lost.<br>
     * Перехват события при потере фокуса.
     * @param event event object /<br>объект события
     */
    onBlur(event: FocusEvent): void;
    /**
     * Intercepting keypress to get a character.<br>
     * Перехват нажатия для получения символа.
     * @param event invoked event /<br>вызываемое событие
     */
    onKeydown(event: KeyboardEvent): void;
    /**
     * Intercept key release to check for arrow presses.<br>
     * Перехват отпуска клавиши для проверки нажатия на стрелки.
     * @param event invoked event /<br>вызываемое событие
     */
    onKeyup(event: KeyboardEvent): void;
    /**
     * Intercepting the event before data modification.<br>
     * Перехват события перед изменением данных.
     * @param event invoked event /<br>вызываемое событие
     */
    onBeforeinput(event: InputEvent): void;
    /**
     * Intercepting the event during data modification.
     * Перехват события при изменении данных.
     * @param event invoked event /<br>вызываемое событие
     */
    onInput(event: InputEvent): void;
    /**
     * Intercepting the event of data insertion from the buffer.<br>
     * Перехват события вставки данных из буфера.
     * @param event invoked event /<br>вызываемое событие
     */
    onPaste(event: ClipboardEvent): void;
    /**
     * Intercepting the change event, this is for intercepting the browser’s autocomplete event.<br>
     * Перехват события изменения, это для перехвата события автозаполнения в браузере.
     * @param event invoked event /<br>вызываемое событие
     */
    onChange(event: Event): void;
    /**
     * Intercepting the click event to change the selection location, if necessary.<br>
     * Перехват события клика для изменения места выделения, если это необходимо.
     * @param event invoked event /<br>вызываемое событие
     */
    onClick(event: MouseEvent): void;
    /**
     * Was the meta button pressed.<br>
     * Была ли нажата мета-кнопка.
     * @param event invoked event /<br>вызываемое событие
     */
    protected isMetaKey(event: KeyboardEvent): boolean;
    /**
     * Checks the key values in the event.<br>
     * Проверяет значения key в событии.
     * @param event invoked event /<br>вызываемое событие
     */
    protected isKey(event: KeyboardEvent): boolean;
    /**
     * Getting data about the selection at the event element.<br>
     * Получение данных о выделении у элемента события.
     * @param event invoked event /<br>вызываемое событие
     */
    protected getSelectionInfo(event: Event): MaskEventSelection;
    /**
     * Preparing to send an event.<br>
     * Подготовка для отправки события.
     * @param event invoked event /<br>вызываемое событие
     */
    protected makeChange(event: Event): void;
    /**
     * Changes the cursor position if the alignment is right.<br>
     * Изменяет место указателя, если выравнивание справа.
     * @param event invoked event /<br>вызываемое событие
     */
    protected makeToEnd(event: Event): void;
    /**
     * Check when selecting from the front, before all special characters.<br>
     * Проверка при выделении спереди, перед всеми специальными символами.
     * @param event invoked event /<br>вызываемое событие
     */
    protected makeToStart(event: Event): void;
}
