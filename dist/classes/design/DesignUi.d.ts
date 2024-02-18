import { ComponentsItems } from '../services/components/ComponentsItems';
import { ComponentsList } from '../services/components/ComponentsList';
import { ComponentsFlags } from '../services/components/ComponentsFlags.ts';
import { ComponentsMedia } from '../services/components/ComponentsMedia.ts';
import { ComponentsMain } from '../services/components/ComponentsMain';
import { ComponentsTypes } from '../services/components/ComponentsTypes';
import { ComponentsStyle } from '../services/components/ComponentsStyle';
import { ComponentsRegistration } from '../services/components/ComponentsRegistration';
import { ComponentsFileTypes } from '../services/components/ComponentsFileTypes.ts';
/**
 * A class for updating styles and tokens.<br>
 * Класс для обновления стилей и токенов.
 */
export declare class DesignUi {
    protected readonly name: string;
    protected readonly components: ComponentsItems;
    protected readonly componentsList: ComponentsList;
    protected readonly componentsFlags: ComponentsFlags;
    protected readonly componentsMedia: ComponentsMedia;
    protected readonly componentsMain: ComponentsMain;
    protected readonly componentsTypes: ComponentsTypes;
    protected readonly componentsFileTypes: ComponentsFileTypes;
    protected readonly componentsStyle: ComponentsStyle;
    protected readonly componentsRegistration: ComponentsRegistration;
    /**
     * Constructor
     * @param name component name /<br>названия компонента
     */
    constructor(name?: string);
    /**
     * Returns the name as an array.<br>
     * Возвращает название в виде массива.
     */
    protected get names(): string[];
    /**
     * Returns the design name by the component name.<br>
     * Возвращает название дизайна по имени компонента.
     */
    protected get design(): string;
    /**
     * Returns the component name by its name.<br>
     * Возвращает название компонента по имени.
     */
    protected get component(): string;
    /**
     * Initialization of the component.<br>
     * Инициализация компоненты.
     */
    make(): void;
    /**
     * Are there component names in the passed names.<br>
     * Есть ли названия компонентов в передаваемых названиях.
     * @param design design names /<br>названия дизайна
     */
    protected isDesign(design: string): boolean;
    /**
     * Are there component names in the passed names.<br>
     * Есть ли названия компонентов в передаваемых названиях.
     * @param component component name /<br>название компонента
     */
    protected isComponent(component: string): boolean;
    /**
     * Creates or updates the list of components.<br>
     * Создает или обновляет список компонентов.
     */
    protected makeConstructorComponent(): this;
    protected makePackageJson(): void;
}
