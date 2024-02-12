/**
 * Class for managing icons.<br>
 * Класс для управления иконками.
 */
export declare class Icons {
    protected static readonly icons: Record<string, string>;
    protected static readonly url: string;
    /**
     * Checks if the given icon is in the list of connected icons.<br>
     * Проверяет, есть ли данная иконка в списке подключенных иконок.
     * @param index icon name /<br>название иконки
     */
    static is(index: string): boolean;
    /**
     * Returns the icon by the name.<br>
     * Возвращает иконку по названию.
     * @param index icon name /<br>название иконки
     * @param url path to the storage location of the icon, if the icon does not exist /<br>
     * путь к месту хранения иконки, если иконка не существует
     */
    static get(index: string, url?: string): string;
    /**
     * Returns a list of names of all registered icons.<br>
     * Возвращает список названий всех зарегистрированных иконок.
     */
    static getNameList(): string[];
    /**
     * Adding custom icons.<br>
     * Добавление пользовательских иконок.
     * @param index icon name /<br>название иконки
     * @param file path to the file /<br>путь к файлу
     */
    static add(index: string, file: string): void;
    /**
     * Adding an icon by the list.<br>
     * Добавление иконки по списку.
     * @param list list of icons /<br>список иконки
     */
    static addByList(list: Record<string, string>): void;
    /**
     * Returns the icon name.<br>
     * Возвращает название иконки.
     * @param index icon name /<br>название иконки
     */
    protected static getName(index: string): string;
}
