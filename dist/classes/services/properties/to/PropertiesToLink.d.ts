import { PropertiesToAbstract } from './PropertiesToAbstract';
/**
 * The method for changing all links.<br>
 * Метод для изменения всех ссылок.
 */
export declare class PropertiesToLink extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "004-link";
    private update;
    private readonly ignore;
    private readonly links;
    /**
     * The method searches for all links and replaces their values with the specified link.<br>
     * Метод ищет все ссылки и заменяет значения на указанную ссылку.
     */
    protected init(): void;
    /**
     * The method searches for all links and replaces their values with the specified link.<br>
     * Метод ищет все ссылки и заменяет значения на указанную ссылку.
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     * @param properties array with all property records /<br>массив со всеми записями свойств
     * @param parent object of ancestor /<br>объект предка
     */
    private read;
    /**
     * Checks for compliance by type.<br>
     * Проверяет на соответствие по типу.
     * @param item current element /<br>текущий элемент
     */
    private isType;
    /**
     * Checks whether a value is a reference.<br>
     * Проверяет, является ли значение ссылкой.
     * @param value current element /<br>текущий элемент
     */
    private isValue;
    /**
     * Checks if the values are valid, if such values have been checked.<br>
     * Проверяет, подходят ли значения, проверены ли такие значения.
     * @param value current element /<br>текущий элемент
     */
    private isIgnore;
    /**
     * Checks if the values are processed for the current link.<br>
     * Проверяет, обработаны ли значения у текущей ссылки.
     * @param value current element /<br>текущий элемент
     */
    private isLink;
    /**
     * Checks if the given link meets the conditions.<br>
     * Проверяет, подходит ли данный ссылка под условия.
     * @param value current element /<br>текущий элемент
     */
    private isData;
    /**
     * Checks if the values are hidden.<br>
     * Проверяет, являются ли значения скрытыми.
     * @param parents list of ancestors /<br>список предков
     * @private
     */
    /**
     * Adds new entries.<br>
     * Добавляет новые записи.
     * @param parent ссылка на предка /<br>ссылка на предка
     * @param items data for processing /<br>данные для обработки
     */
    private add;
    /**
     * We will add the values to the ignore.<br>
     * Добавим значения в игнор.
     * @param value current element /<br>текущий элемент
     */
    private addIgnore;
    /**
     * We will add a label that the current link is processed.<br>
     * Добавим метку, что текущая ссылка обработана.
     * @param value current element /<br>текущий элемент
     */
    private addLink;
}
