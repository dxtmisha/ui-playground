/**
 * Class for changing the path of module connection.<br>
 * Класс для изменения пути подключения модулей.
 */
export declare class DesignProjectModule {
    private readonly dirs;
    /**
     * Constructor
     * @param dirs path to the file /<br>путь к файлу
     */
    constructor(dirs: string[]);
    make(): this;
    /**
     * Returns the module code by its code.<br>
     * Возвращает код модуля по его коду.
     * @param name module name /<br>название модуля
     */
    private getModule;
    /**
     * Returns a list of links for export.<br>
     * Возвращает список ссылок для экспорта.
     */
    private getRegList;
    /**
     * Returns a regular expression to check if the data exists.<br>
     * Возвращает регулярное выражение для проверки наличия данных.
     */
    private getRegMatch;
    /**
     * Returns a regular expression to change the data.<br>
     * Возвращает регулярное выражение для изменения данных.
     */
    private getRegReplace;
}
