import { type ComponentsData, type ComponentsList } from '../../../types/components.ts';
/**
 * Class for working with the list of components.<br>
 * Класс для работы со списком компонентов.
 */
export declare class ComponentsItems {
    protected readonly items: ComponentsList;
    /**
     * Constructor
     */
    constructor();
    /**
     * Returns the list of components divided by design groups.<br>
     * Возвращает список компонентов, разделенных по группам дизайна.
     */
    get(): ComponentsList;
    /**
     * Returns the list of components as an array.<br>
     * Возвращает список компонентов в виде массива.
     */
    getComponentList(): ComponentsData[];
    /**
     * Returns the name of the global property.<br>
     * Возвращает название глобального свойства.
     */
    getGlobalName(): string;
    /**
     * Returns the name of the main design.<br>
     * Возвращает название главного дизайна.
     */
    getDesignMain(): string;
    /**
     * Returns a list of design names.<br>
     * Возвращает список названий дизайнов.
     */
    protected getDesigns(): string[];
    /**
     * Returns a list of components.<br>
     * Возвращает список компонентов.
     * @param design design names /<br>названия дизайна
     */
    protected getComponents(design: string): ComponentsData[];
    /**
     * Initializes data about the component.<br>
     * Инициализирует данные о компоненте.
     */
    protected initItems(): ComponentsList;
}
