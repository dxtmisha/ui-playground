import { DesignStructureItemAbstract } from './DesignStructureItemAbstract.ts';
/**
 * Class for processing styles from tokens for the component.<br>
 * Класс для обработки стилей из токенов для компонента.
 */
export declare class DesignStructureStyles extends DesignStructureItemAbstract<string[]> {
    protected data: string[];
    /**
     * Constructor
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     */
    constructor(design: string, component: string);
    /**
     * Performing transformation.<br>
     * Выполнение преобразования.
     */
    make(): string[];
}
