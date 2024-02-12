import { ComponentsItems } from './ComponentsItems.ts';
/**
 * Class for working with the main files.<br>
 * Класс для работы с главными файлами.
 */
export declare class ComponentsMain {
    protected readonly items: ComponentsItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: ComponentsItems);
    /**
     * Export data for the main file.<br>
     * Экспортировать данные для главного файла.
     */
    make(): this;
}
