/**
 * CSS style processing class.<br>
 * Класс с базовыми функциями для обработки стилей.
 */
export declare class StylesTool {
    /**
     * Getting a directory to store a file.<br>
     * Получение директории для хранения файла.
     * @param design design name /<br>название дизайна
     */
    static getDir(design: string): string[];
    /**
     * Returns a space.<br>
     * Возвращает пробел
     */
    static getSpace(): string;
    /**
     * Getting an indent.<br>
     * Получение отступа.
     * @param level level /<br>уровень
     */
    static addSpace(level: number): string;
    /**
     * Код строки для импорта файла.<br>
     * Code line for file import.
     * @param path path to the file /<br>путь к файлу
     */
    static addImport(path: string): string;
    /**
     * Getting a reference to a base function.<br>
     * Получение ссылки на базовую функцию.
     * @param path path to the file /<br>путь к файлу
     */
    static addImportProperties(path?: string): string;
    /**
     * Combines the elements of an array into one string.<br>
     * Объединяет элементы массива в одну строку.
     * @param data array containing records /<br>массив, содержащий записи
     */
    static join(data: string[]): string;
    /**
     * Adding an access level.<br>
     * Добавление уровня доступа.
     * @param space space /<br>пробел
     */
    static increaseSpace(space: string): string;
    static toFunctionCss(value: string): string;
}
