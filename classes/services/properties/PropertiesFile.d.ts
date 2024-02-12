/// <reference types="node" />
/// <reference types="node" />
import requireFs from 'fs';
import requirePath from 'path';
export type PropertiesFilePath = string | string[];
export type PropertiesFileValue<T = any> = string | Record<string, T>;
/**
 * A class for working with files.<br>
 * Класс для работы с файлами.
 */
export declare class PropertiesFile {
    protected static root: string;
    protected static module: boolean;
    /**
     * The fs.existsSync() method is used to synchronously check if a file already
     * exists in the given path or not. It returns a boolean value which indicates
     * the presence of a file.<br>
     * Метод fs.existsSync() используется для синхронной проверки наличия файла в
     * указанном пути. Он возвращает логическое значение, которое указывает на
     * наличие файла.
     * @param path it holds the path of the file that has to be checked /<br>
     * это содержит путь к файлу, который необходимо проверить
     */
    static is(path: PropertiesFilePath): boolean;
    /**
     * Checks whether it is a directory.<br>
     * Проверяет, является ли это директорией.
     * @param path name of the element being checked /<br>название проверяемого элемента
     */
    static isDir(path: PropertiesFilePath): boolean;
    /**
     * Determines whether the package is connected as a module.<br>
     * Определяет, является ли пакет подключенным как модуль.
     */
    static isModule(): boolean;
    /**
     * The path.joinPath() method joins all given path segments together using the
     * platform-specific separator as a delimiter, then normalizes the resulting path.<br>
     * Метод path.joinPath() объединяет все указанные сегменты пути с использованием
     * специфического для платформы разделителя в качестве разделителя,
     * а затем нормализует полученный путь.
     * @param path a sequence of path segments /<br>последовательность сегментов пути
     */
    static joinPath(path: PropertiesFilePath): string;
    /**
     * Getting the path to the file by its name and the path to the directory.<br>
     * Получение пути к файлу по его названию и пути к директории.
     * @param path path to the file /<br>путь к файлу
     * @param name file name /<br>название файла
     * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
     */
    static joinPathByName(path: PropertiesFilePath, name: string, extension?: string): string;
    /**
     * Returns the root path.<br>
     * Возвращает корневой путь.
     */
    static getRoot(): string;
    /**
     * Returns the file name.<br>
     * Возвращает имя файла.
     * @param name element name /<br>название элемента
     * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
     */
    static getFileName(name: string, extension?: string): string;
    /**
     * Returns the path to the directory, removing the file name from the path.<br>
     * Возвращает путь к директории, убрав название файла из пути.
     * @param path path to the file /<br>путь к файлу
     */
    static getPathDir(path: PropertiesFilePath): string;
    /**
     * Returns the path to the file.<br>
     * Возвращает путь к файлу.
     * @param path path to the file /<br>путь к файлу
     * @param name element name /<br>название элемента
     * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
     */
    static getPathFile(path: PropertiesFilePath, name: string, extension?: string): string[];
    /**
     * The method splits the path into an array of components.<br>
     * Метод разбивает путь на массив компонентов.
     * @param path path to the directory /<br>путь к директории
     */
    static splitForDir(path: PropertiesFilePath): string[];
    /**
     * Method returns an object whose properties represent significant elements of the path.<br>
     * Метод возвращает объект, свойства которого представляют существенные элементы пути.
     * @param path filename /<br>имя файла
     */
    static parse(path: PropertiesFilePath): requirePath.ParsedPath;
    /**
     * Getting information about the file.<br>
     * Получение информации о файле.
     * @param path path to the file /<br>путь к файлу
     */
    static stat(path: PropertiesFilePath): requireFs.Stats | undefined;
    /**
     * Reads the contents of the directory.<br>
     * Читает содержимое директории.
     * @param path path to the directory /<br>путь к директории
     */
    static readDir(path: PropertiesFilePath): string[];
    /**
     * Reads the contents of the directory recursively.<br>
     * Читает содержимое директории рекурсивно.
     * @param path path to the directory /<br>путь к директории
     * @param fullPath recursive directory /<br>рекурсивная директория
     */
    static readDirRecursive(path: PropertiesFilePath, fullPath?: PropertiesFilePath): string[];
    /**
     * Returns the contents of the path.<br>
     * Возвращает содержимое пути.
     * @param path filename /<br>имя файла
     */
    static readFile<R>(path: PropertiesFilePath): R | undefined;
    /**
     * Returns the content of the file, without converting the value.<br>
     * Возвращает содержимое файла, без преобразования значения.
     * @param path filename /<br>имя файла
     */
    static readFileOnly(path: PropertiesFilePath): string | undefined;
    /**
     * Synchronously creates a directory.<br>
     * Синхронно создает директорию.
     * @param path path to the directory /<br>путь к директории
     */
    static createDir(path: PropertiesFilePath): void;
    /**
     * Writing data to a file.<br>
     * Запись данных в файл.
     * @param path path to the file /<br>путь к файлу
     * @param name file name /<br>название файла
     * @param value values for storage /<br>значения для хранения
     * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
     */
    static write<T extends PropertiesFileValue>(path: PropertiesFilePath, name: string, value: T, extension?: string): void;
    /**
     * Writes to the selected path.<br>
     * Записывает по выбранному пути.
     * @param path path to the file /<br>путь к файлу
     * @param value values for storage /<br>значения для хранения
     */
    static writeByPath<T extends PropertiesFileValue>(path: PropertiesFilePath, value: T): void;
    /**
     * List of slots for update.<br>
     * Список слотов для обновления.
     * @param path path to the directory /<br>путь к директории
     */
    static removeDir(path: PropertiesFilePath): void;
    /**
     * Removing root from the path.<br>
     * Удаление root из пути.
     * @param path path to the directory /<br>путь к директории
     */
    private static removeRootInPath;
}
