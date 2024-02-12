import { type PropertyList } from '../../../types/property.ts';
/**
 * Class for working with external files, which adds them to the current list of properties.<br>
 * Класс для работы с внешними файлами, который подключает их к текущему списку свойств.
 */
export declare class PropertiesImport {
    private properties;
    private root;
    /**
     * Constructor
     * @param properties array with all property records /<br>массив со всеми записями свойств
     * @param root path to the directory /<br>путь к директории
     */
    constructor(properties: PropertyList, root: string[]);
    /**
     * Method that adds external files to the current property.<br>
     * Метод подключает внешние файлы к текущему свойству.
     * @param properties An array that needs to be transformed /<br>
     * Массив, который нужно преобразовать
     * @param root path to the directory /<br>путь к директории
     */
    to(properties?: PropertyList, root?: string[]): PropertyList;
    /**
     * Returns the path to the file.<br>
     * Возвращает путь к файлу.
     * @param root path to the directory /<br>путь к директории
     * @param value object with data /<br>объект с данными
     */
    private getPath;
    /**
     * Generates the path to the file and prepares entries in the tree to go through.<br>
     * Генерирует путь к файлу и подготавливает записи в дереве, по которому надо пройтись.
     * @param root path to the directory /<br>путь к директории
     * @param value object with data /<br>объект с данными
     */
    private initLink;
    /**
     * Reads a file or an entire directory.<br>
     * Читает файл или всю директорию.
     * @param path path to file /<br>путь к файлу
     */
    private read;
    /**
     * Reads the file and leaves the data only along the selected path.<br>
     * Читает файл и оставляет данные только по выделенному пути.
     * @param read read data /<br>прочитанные данные
     * @param link the path to the entry that needs to be used /<br>путь к записи, который надо использовать
     */
    private readByLink;
    /**
     * Reads a directory.<br>
     * Читает директорию.
     * @param path path to file /<br>путь к файлу
     */
    private readByDir;
}
