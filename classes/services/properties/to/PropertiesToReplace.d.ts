import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
import { type PropertyReplace } from '../../../../types/property.ts';
export type PropertiesReplaceValue = string | Partial<PropertyReplace>;
/**
 * A class for transforming an expression through regular expressions.<br>
 * Класс для преобразования выражения через регулярные выражения.
 */
export declare class PropertiesToReplace extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "001-replace";
    /**
     * Transforming all of its properties.<br>
     * Преобразование всех своих свойств.
     */
    protected init(): void;
    /**
     * Getting information about the transformation.<br>
     * Получение информации о преобразовании.
     * @param info information for verification /<br>информация для проверки
     */
    private getInfo;
    /**
     * Returns the transformed value.<br>
     * Возвращает преобразованное значение.
     * @param info information for verification /<br>информация для проверки
     * @param value
     */
    private getValue;
}
