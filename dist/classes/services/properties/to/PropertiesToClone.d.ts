import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
import { type PropertyItem } from '../../../../types/property.ts';
/**
 * Class for duplicating configuration parameters to child elements.<br>
 * Класс для дублирования параметров настройки к дочерним элементам.
 */
export declare class PropertiesToClone extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "007-01-clone";
    protected init(): void;
    /**
     * Search in child elements for similar properties.<br>
     * Поиск в дочерних элементах похожих свойств.
     * @param parent starting element for search /<br>начальный элемент для поиска
     * @param name property name /<br>название свойства
     */
    protected findItem(parent: PropertyItem, name: string): PropertyItem[];
    /**
     * Data update for selected elements.<br>
     * Обновление данных для выбранных элементов.
     * @param original original element /<br>оригинальный элемент
     * @param properties element for update /<br>элемент для обновления
     */
    protected update(original: PropertyItem, properties: PropertyItem[]): void;
}
