import { ComponentsItems } from './ComponentsItems.ts';
/**
 * A class for creating a connection file for all components.<br>
 * Класс для создания файла подключения всех компонентов.
 */
export declare class ComponentsRegistration {
    protected readonly items: ComponentsItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: ComponentsItems);
    /**
     * Creating a file for connecting components.<br>
     * Создание файла для подключения компонентов.
     */
    make(): this;
}
