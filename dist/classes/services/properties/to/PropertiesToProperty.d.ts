import { PropertiesItemsItem } from '../PropertiesItems';
import { PropertiesToVar } from './PropertiesToVar';
import { PropertyType } from '../../../../types/property';
/**
 * Class for working with custom styles in CSS.<br>
 * Класс для работы с пользовательскими стилями в CSS.
 */
export declare class PropertiesToProperty extends PropertiesToVar {
    protected FILE_CACHE: string;
    protected type: PropertyType;
    /**
     * Name transformation for the var type.<br>
     * Преобразование имени для типа var.
     * @param name base property name /<br>базовое название свойства
     * @param item current element /<br>текущий элемент
     */
    protected getName({ name, item }: PropertiesItemsItem): string;
}
