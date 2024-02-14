import { PropertiesToAbstract } from './PropertiesToAbstract';
/**
 * Class for converting properties with multiple values.<br>
 * Класс для преобразования свойств с множеством значений.
 */
export declare class PropertiesToMulti extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "012-multi";
    /**
     * Converts property records with multiple types.<br>
     * Преобразует записи свойств со множеством типов.
     */
    protected init(): void;
    /**
     * Returns a list of properties with multiple values.<br>
     * Возвращает список свойств с множеством значений.
     */
    private getList;
    /**
     * Transformation for the element.<br>
     * Преобразование для элемента.
     * @param name property name /<br>название свойства transformed /<br>
     * массив, который нужно преобразовать
     * @param properties array with all property records /<br>массив со всеми записями свойств
     * @param isVar should i convert the type to var /<br>надо ли преобразовывать тип в var
     */
    private read;
}
