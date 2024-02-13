import { type PropertyListOrData } from '../../../types/property';
export type PropertiesPathItem = {
    design: string;
    paths: string[][];
};
export type PropertiesPathList = PropertiesPathItem[];
/**
 * Class for working with paths by the given name of the design.<br>
 * Класс для работы с путями по заданному названию дизайна.
 */
export declare class PropertiesPath {
    private designs;
    private readonly paths;
    /**
     * Constructor
     * @param designs list of design names corresponding to folder names /<br>
     * список названий дизайнов, соответствующих названиям папок
     */
    constructor(designs: string[]);
    /**
     * Returns the names of available designs.<br>
     * Возвращает названия доступных дизайнов.
     */
    getDesigns(): string[];
    /**
     * Gets a list of available paths to the file of global component settings.<br>
     * Получает список доступных путей к файлу глобальных настроек компонента.
     * @param name design name /<br>название дизайна
     */
    getPath(name: string): PropertiesPathItem | undefined;
    /**
     * List of available paths.<br>
     * Список доступных путей.
     */
    getPaths(): PropertiesPathList;
    /**
     * Processes all token values for the selected design and combines them into one-big array.<br>
     * Обрабатывает все значения токена у выбранного дизайна и соединяет их в одну-большую массива.
     * @param name name of the group /<br>названия группы
     * @param design design name /<br>название дизайна
     * @param callback function for processing /<br>функция для обработки
     */
    to(name: string, design: string, callback: (path: string[], design: string) => PropertyListOrData): PropertyListOrData;
    /**
     * Processes all token values for all designs and combines them into one-big array.<br>
     * Обрабатывает все значения токена у всех дизайнов и соединяет их в одну-большую массива.
     * @param name name of the group /<br>названия группы
     * @param callback function for processing /<br>функция для обработки
     */
    toAll(name: string, callback: (path: string[], design: string) => PropertyListOrData): PropertyListOrData;
    /**
     * Returns the path to a file by design name.<br>
     * Возвращает путь к файлу по названию дизайна.
     * @param name design name /<br>название дизайна
     */
    private getDir;
}
