export type DesignIconsItem = {
    name: string;
    path: string;
};
export type DesignIconsList = DesignIconsItem[];
/**
 * A class for creating an icon information file.<br>
 * Класс для создания файла информации иконки.
 */
export declare class DesignIcons {
    protected readonly design: string;
    constructor(design: string);
    /**
     * File initialization.<br>
     * Инициализация файла.
     */
    make(): this;
    /**
     * Returns a list of icons.<br>
     * Возвращает список иконок.
     * @param paths path to the icons folder /<br>путь к папке иконок
     */
    protected getList(paths?: string[]): DesignIconsList | undefined;
    /**
     * Returns the directory to the icon.<br>
     * Возвращает директорию к иконке.
     * @param paths path to the icons folder /<br>путь к папке иконок
     */
    protected getDirs(paths: string[]): string[];
    /**
     * Saves the file.<br>
     * Сохраняет файл.
     * @param file data for writing /<br>данные для записи
     */
    protected write(file: string[]): this;
}
