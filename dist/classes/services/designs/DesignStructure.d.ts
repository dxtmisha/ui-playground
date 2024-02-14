import { DesignStructureClassesList, type DesignStructureList } from '../../../types/design';
/**
 * Class for processing structured components.<br>
 * Класс для обработки структурированных компонентов.
 */
export declare class DesignStructure {
    protected readonly design: string;
    protected readonly component: string;
    protected items?: DesignStructureList;
    protected itemsClasses?: DesignStructureClassesList;
    protected itemsStyles?: string[];
    constructor(path: string);
    constructor(design: string, component: string);
    /**
     * Getting all data from the structure.<br>
     * Получение всех данных из структуры.
     */
    get(): DesignStructureList;
    /**
     * Obtaining a list of subclasses from a structure.<br>
     * Получение списка подклассов из структуры.
     */
    getClasses(): DesignStructureClassesList;
    /**
     * Returns all styles from tokens.<br>
     * Возвращает все стили из токенов.
     */
    getStyles(): string[];
    /**
     * Returns the name of the design.<br>
     * Возвращает название дизайна.
     */
    getDesign(): string;
    /**
     * Returns the name of the component.<br>
     * Возвращает название компонента.
     */
    getComponentName(): string;
    /**
     * Returns the name of the component with a capital letter.<br>
     * Возвращает название компонента с заглавной буквой.
     */
    getComponentNameFirst(): string;
    /**
     * Returns the names of component files.<br>
     * Возвращает названия файлов компонентов.
     */
    getFileName(): string;
    /**
     * Returns the name of the cache file. It contains all processed properties.<br>
     * Возвращает название файла для кэша.
     * Это полный массив со всеми обработанными свойствами.
     */
    getPathName(): string;
    /**
     * Returns the name of the file with data about the subclass.<br>
     * Возвращает название файла с данными о подклассе.
     */
    protected getPathClasses(): string;
    /**
     * Data generation.<br>
     * Генерация данных.
     */
    protected make(): DesignStructureList;
    /**
     * Generation of data for the subclass.<br>
     * Генерация данных для подкласса.
     */
    protected makeClasses(): DesignStructureClassesList;
    /**
     * Performing transformation of tokens into styles for the component.<br>
     * Выполнение преобразования токенов в стили для компонента.
     */
    protected makeStyles(): string[];
}
