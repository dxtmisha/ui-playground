import { InputElement } from './InputElement';
import { type InputBasicProps } from './props';
import { InputChange } from './InputChange';
/**
 * Class for working with input values.<br>
 * Класс для работы со значениями инпута.
 */
export declare class InputValue<V = any> {
    protected readonly props: InputBasicProps<V>;
    protected readonly element: InputElement;
    protected readonly change: InputChange;
    protected readonly callback: () => void;
    protected value?: V;
    protected valueIs: boolean;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element object for working with the input element /<br>объект для работы с элементом ввода
     * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
     * @param callback callback function /<br>функция обратного вызова
     */
    constructor(props: InputBasicProps<V>, element: InputElement, change: InputChange, callback: () => void);
    /**
     * Checks if there are any values.<br>
     * Проверяет, есть ли значения.
     */
    is(): boolean;
    /**
     * Returns the current value.<br>
     * Возвращает текущее значение.
     */
    get(): V | undefined;
    /**
     * Returns the current value, converted to a string.<br>
     * Возвращает текущее значение, преобразованное в строку.
     */
    getString(): string;
    /**
     * Returns the current value, converted to a number.<br>
     * Возвращает текущее значение, преобразованное в номер.
     */
    getNumber(): number;
    /**
     * Returns the current value of type boolean.<br>
     * Возвращает текущее значение типа boolean.
     */
    getBoolean(): boolean;
    /**
     * Returns the original value.<br>
     * Возвращает оригинальное значение.
     */
    getOriginal(): V | undefined;
    /**
     * Returns the length of the entered value.<br>
     * Возвращает длину введенного значения.
     */
    getLength(): number;
    /**
     * Changes the value.<br>
     * Изменяет значение.
     * @param value changeable value /<br>изменяемое значение
     */
    set(value: V | undefined): this;
    /**
     * Changes the values by the selected element.<br>
     * Изменяет значения по выбранному элементу.
     * @param event event object /<br>объект события
     */
    setByEvent(event: Event): this;
    setByEvent(value: Record<string, any>): this;
    setByEvent(value: V): this;
    /**
     * Changes the values by the selected element.<br>
     * Изменяет значения по выбранному элементу.
     * @param target selected elements /<br>выбранные элементы
     */
    setByTarget(target: HTMLInputElement): this;
    /**
     * Changes the value by the checked property.<br>
     * Изменяет значение по свойству checked.
     * @param event event value /<br>значение события
     */
    setByChecked(event: Event): this;
    /**
     * Changes the value for radio type.<br>
     * Изменяет значение для типа radio.
     * @param event event object /<br>объект события
     */
    setByRadio(event: Event): this;
    /**
     * Changes the values to the original ones.<br>
     * Изменяет значения на оригинальные.
     */
    update(): this;
    /**
     * Clear all values to the original ones.<br>
     * Очисти все значения до оригинальных.
     */
    clear(): this;
    /**
     * Is the selected type a checkbox.<br>
     * Является ли выбранный тип чекбокс.
     * @param target selected elements /<br>выбранные элементы
     */
    protected isCheckbox(target: HTMLInputElement): boolean;
}
