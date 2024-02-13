import { DesignStructureItemAbstract } from './DesignStructureItemAbstract';
import { type PropertyItem } from '../../../types/property';
import { type DesignStructureClassesList } from '../../../types/design';
/**
 * A class for getting a list of classes of components.<br>
 * Класс для получения списка классов компонентов.
 */
export declare class DesignStructureClasses extends DesignStructureItemAbstract<DesignStructureClassesList> {
    protected data: DesignStructureClassesList;
    /**
     * Constructor
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     */
    constructor(design: string, component: string);
    /**
     * Returns records that meet state conditions.<br>
     * Возвращает записи, удовлетворяющие условиям состояния.
     * @param properties input data /<br>входной данный
     * @param parent ancestor name /<br>название предка
     */
    protected make(properties?: PropertyItem['value'], parent?: string[]): DesignStructureClassesList;
    /**
     * Does this property belong to the class.<br>
     * Является ли это свойство частью класса.
     * @param item object for checking /<br>объект для проверки
     */
    protected isClasses(item: PropertyItem): boolean;
    /**
     * Obtaining the name of the class.<br>
     * Получение имени класса.
     * @param item object for checking /<br>объект для проверки
     * @param parent list of names of ancestors /<br>список имен предков
     */
    protected getNames(item: PropertyItem, parent: string[]): string[];
}
