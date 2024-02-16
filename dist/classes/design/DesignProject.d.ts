export declare const DIR_TEMPLATE: string[];
export declare const DIR_PROJECT: string[];
export declare const DIR_TEMP = "temp";
/**
 * Class for working with template projects.<br>
 * Класс для работы с шаблонными проектами.
 */
export declare class DesignProject {
    private readonly template;
    private paths;
    /**
     * Constructor
     * @param template template name /<br>название шаблона
     */
    constructor(template: string);
    /**
     * Initialization of files for the project.<br>
     * Инициализация файлов для проекта.
     */
    make(): void;
    makeBuild(): void;
    /**
     * Returns the name of the template directory.<br>
     * Возвращает название шаблонной директории.
     */
    private getTemplateDir;
    /**
     * Returns the path to the template file.<br>
     * Возвращает путь к файлу шаблона.
     */
    private getTemplatePath;
    /**
     * Returns the path to the project.<br>
     * Возвращает путь к проекту.
     * @param path name of the element being checked /<br>название проверяемого элемента
     */
    private getProjectPath;
    /**
     * Reads the file from the template.<br>
     * Читает файл из шаблона.
     * @param path name of the element being checked /<br>название проверяемого элемента
     */
    private read;
    /**
     * Reads the selected files in the project.<br>
     * Читает выбранные файлы в проекте.
     * @param path name of the element being checked /<br>название проверяемого элемента
     */
    /**
     *
     * @param dist
     * @param build
     */
    private copyBuild;
    /**
     * We get a list of links to files.<br>
     * Получаем список ссылок на файлы.
     */
    private initTemplatePaths;
    /**
     * Deleting temporary files, if they exist.<br>
     * Удаление временных файлов, если они есть.
     */
    private removeTempDir;
}
