import { DesignStructure } from './DesignStructure';
import { DesignReplace } from './DesignReplace';
/**
 * Base abstract class for generating script files.<br>
 * Базовый абстрактный класс для генерации файлов скриптов.
 */
export declare abstract class DesignCommand {
    protected readonly command: string;
    protected readonly options: Record<string, string>;
    protected abstract DIR_SAMPLE: string;
    protected abstract dir: string[];
    protected structure?: DesignStructure;
    /**
     * Constructor
     * @param command component name /<br>названия компонента
     * @param options additional parameters /<br>дополнительные параметры
     */
    protected constructor(command: string, options?: Record<string, string>);
    /**
     * Entry point for the command.<br>
     * Точка входа для команды.
     */
    make(): void;
    /**
     * Initializes the creation of all files for the current team.<br>
     * Инициализирует создание всех файлов для текущей команды.
     */
    protected abstract initMain(): void;
    /**
     * Checks the presence of a file.<br>
     * Проверяет наличие файла.
     * @param name file name /<br>название файла
     */
    protected isFile(name: string | string[]): boolean;
    /**
     * Returns the path for importing the module.<br>
     * Возвращает путь для подключения модуля.
     */
    protected getRoot(): string;
    /**
     * Returns the names for the team.<br>
     * Возвращает названия для команды.
     */
    protected getCommand(): string;
    /**
     * Returns a structure object.<br>
     * Возвращает объект структуры.
     */
    protected getStructure(): DesignStructure;
    /**
     * Returns an object for template transformation.<br>
     * Возвращает объект для преобразования шаблона.
     * @param sample property template /<br>шаблон свойства
     */
    protected getReplace(sample?: string): DesignReplace;
    /**
     * Reading.<br>
     * Читает файл.
     * @param name file name /<br>название файла
     */
    protected read(name: string | string[]): string | undefined;
    /**
     * This code reads a template.<br>
     * Читает шаблона.
     * @param name file name /<br>название файла
     */
    protected readSample(name: string): string | undefined;
    /**
     * Reads the file itself or its template if it is not found.<br>
     * Читает сам файл или его шаблон, если его нет.
     * @param name file name /<br>название файла
     * @param callback the function is executed if there is no such file /<br>функция выполняется, если такого файла нет
     */
    protected readDefinable(name: string, callback?: (sample: DesignReplace) => void): DesignReplace;
    /**
     * Creating or rewriting a file.<br>
     * Создание или перезапись файла.
     * @param name file name /<br>название файла
     * @param value values for storage /<br>значения для хранения
     */
    protected write(name: string, value: string): void;
    /**
     * Outputting data to the console.<b>
     * Вывод данных в консоль.
     * @param name file name /<br>название файла
     */
    protected console(name: string): void;
}
