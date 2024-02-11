import { ComponentsItems } from './ComponentsItems.ts';
export declare class ComponentsTypes {
    protected readonly items: ComponentsItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: ComponentsItems);
    make(): this;
    /**
     * Initializes the list of available components.<br>
     * Инициализирует список доступных компонентов.
     */
    protected initComponents(): string[];
}
