import { type InputBasicProps } from './props.ts';
/**
 * Class for processing standard error text.<br>
 * Класс для обработки стандартного текста ошибки.
 */
export declare class InputCode {
    protected readonly props: InputBasicProps;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: InputBasicProps);
    /**
     * Returning error text.<br>
     * Возвращают текст ошибки.
     * @param state object for obtaining error information /<br>объект для получения информации об ошибке
     */
    get(state: ValidityState): string | undefined;
    /**
     * Returns error index.<br>
     * Возвращает индекс ошибки.
     * @param state object for obtaining error information /<br>объект для получения информации об ошибке
     */
    protected getIndex(state: ValidityState): keyof ValidityState | undefined;
}
