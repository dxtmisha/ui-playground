import { DesignCommand } from './DesignCommand';
/**
 * Class for generating files based on a constructor.<br>
 * Класс для генерации файлов по конструктору.
 */
export declare class DesignConstructor extends DesignCommand {
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
     * This code generates the types.ts.<br>
     * Генерация файла types.ts.
     */
    protected makeTypes(): this;
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
}
