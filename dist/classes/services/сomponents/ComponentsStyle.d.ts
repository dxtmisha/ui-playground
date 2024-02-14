import { ComponentsItems } from './ComponentsItems';
/**
 * Class for creating a connection file for the split.<br>
 * Класс для создания файла подключения спила.
 */
export declare class ComponentsStyle {
    protected readonly items: ComponentsItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: ComponentsItems);
    /**
     * Creates a common style file.<br>
     * Создает общий файл стилей.
     */
    make(): this;
}
