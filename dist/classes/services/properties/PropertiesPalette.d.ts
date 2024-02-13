import { PropertiesItems } from './PropertiesItems';
import { type PropertyItem } from '../../../types/property';
export type PropertiesPaletteItem = {
    design: string;
    value: PropertyItem['value'][];
};
export type PropertiesPaletteList = PropertiesPaletteItem[];
export type PropertiesPaletteUsed = {
    name: string;
    value: string[];
};
/**
 * Class for working with colors.<br>
 * Класс для работы с цветами.
 */
export declare class PropertiesPalette {
    private items;
    /**
     * Constructor
     * @param items
     */
    constructor(items: PropertiesItems);
    /**
     * Returns a list of available saturation levels.<br>
     * Возвращает список доступных уровней насыщенности.
     */
    getShade(): PropertiesPaletteList;
    /**
     * Getting a list of used values.<br>
     * Получаем список использованных значений.
     */
    getUsed(): PropertiesPaletteUsed[];
    /**
     * Getting a list of all colors.<br>
     * Получение списка всех цветов.
     */
    private getList;
}
