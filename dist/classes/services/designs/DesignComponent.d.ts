import { DesignCommand } from './DesignCommand';
/**
 * Class for creating a component or updating data.<br>
 * Класс для создания компонента или обновления данных.
 */
export declare class DesignComponent extends DesignCommand {
    protected DIR_SAMPLE: string;
    protected dir: string[];
    /**
     * Constructor
     * @param command component name /<br>названия компонента
     * @param options additional parameters /<br>дополнительные параметры
     */
    constructor(command: string, options?: Record<string, string>);
    /**
     * Initializes the creation of all files for the current team.<br>
     * Инициализирует создание всех файлов для текущей команды.
     */
    protected initMain(): void;
    /**
     * This code generates the properties.json.<br>
     * Генерация файла properties.json.
     */
    protected makeProperties(): this;
    /**
     * This code generates the props.ts.<br>
     * Генерация файла props.ts.
     */
    protected makeProps(): this;
    /**
     * This code generates the style.scss.<br>
     * Генерация файла style.scss.
     */
    protected makeStyle(): this;
    /**
     * This code generates the style.scss.<br>
     * Генерация файла style.scss.
     */
    protected makeMain(): this;
    /**
     * This code generates the index.ts.<br>
     * Генерация файла index.ts.
     */
    protected makeIndex(): this;
    /**
     * This code generates the index.d.ts.<br>
     * Генерация файла index.d.ts.
     */
    protected makeIndexD(): this;
    /**
     * Getting the contents of a file from a constructor.<br>
     * Получение содержимого файла из конструктора.
     * @param file file name /<br>имя файла
     */
    private getFileConstructor;
}
