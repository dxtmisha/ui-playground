import { Properties } from '../properties/Properties';
import { PropertiesItemsItem } from '../properties/PropertiesItems';
export declare abstract class DesignStructureItemAbstract<D> {
    protected readonly design: string;
    protected readonly component: string;
    protected properties: Properties;
    protected items?: PropertiesItemsItem;
    protected abstract data: D;
    /**
     * Constructor
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     */
    protected constructor(design: string, component: string);
    /**
     * Getting all data about dependencies of the current component.<br>
     * Получение всех данных об зависимостях у текущего компонента.
     */
    get(): D;
    /**
     * Returns a reference to the component.<br>
     * Возвращает ссылку на компонент.
     * Это полный массив со всеми обработанными свойствами.
     */
    protected getLink(): string;
}
