import { type PropertiesFilePath, type PropertiesFileValue } from './PropertiesFile';
/**
 * Processing for storing temporary files.<br>
 * Обработка для хранения временных файлов.
 */
export declare class PropertiesCache {
    private static time;
    private static readonly files;
    private static readonly sizes;
    private static readonly listenerName;
    /**
     * Reads data from the cache or updates the cache if the data is outdated.<br>
     * Читает данные из кэша или обновляет кэш, если данные устарели.
     * @param path path to the file /<br>путь к файлу
     * @param name file name /<br>название файла
     * @param callback if the file is not found, the callback function is called
     * and its result is saved in the current file /<br>
     * если файл не найден, вызывается функция обратного вызова (callback) и её
     * результат сохраняется в текущем файле
     * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
     */
    static get<T extends PropertiesFileValue>(path: PropertiesFilePath, name: string, callback: () => T, extension?: string): T;
    /**
     * Returns the content of the file by the specified path.<br>
     * Возвращает содержимое файла по указанному пути.
     * @param path filename /<br>имя файла
     */
    static read<R>(path: PropertiesFilePath): R | undefined;
    /**
     * Saves intermediate data.<br>
     * Сохраняет промежуточные данные.
     * @param name file name /<br>название файла
     * @param value values for storage /<br>значения для хранения
     */
    static write<T extends PropertiesFileValue>(name: string, value: T): void;
    /**
     * Clear cached data.<br>
     * Очистить кешированные данные.
     */
    static clear(): void;
    /**
     * Checks if there are files to read.<br>
     * Проверяет наличие файлов для чтения.
     * @param path path to the file /<br>путь к файлу
     * @param name file name /<br>название файла
     * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
     */
    private static is;
    /**
     * Checks if there are updated files.<br>
     * Проверяет, есть ли обновленные файлы.
     * @param name the name of the cache /<br>название кэша
     */
    private static isBySystem;
    /**
     * Returns the path to the file.<br>
     * Возвращает путь к файлу.
     * @param path path to the file /<br>путь к файлу
     */
    private static getPath;
    /**
     * Returns the full path to the file.<br>
     * Возвращает полный путь к файлу.
     * @param path path to the file /<br>путь к файлу
     * @param name file name /<br>название файла
     * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
     */
    private static getPathName;
    /**
     * Reads the content of the file.<br>
     * Читает содержимое файла.
     * @param path path to the file /<br>путь к файлу
     * @param name file name /<br>название файла
     * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
     */
    private static readFile;
    /**
     * Writing data to a file.<br>
     * Запись данных в файл.
     * @param path path to the file /<br>путь к файлу
     * @param name file name /<br>название файла
     * @param value values for storage /<br>значения для хранения
     * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
     */
    private static writeFile;
    /**
     * Updates the system data and writes them. Executes after saving the cache.<br>
     * Обновляет системные данные и записывает их. Выполняется после сохранения кэша.
     */
    private static writeSystem;
    /**
     * Adding a new message to the console.<br>
     * Добавление нового сообщения в консоли.
     * @param text text of the message /<br>текст сообщения
     */
    private static console;
}
