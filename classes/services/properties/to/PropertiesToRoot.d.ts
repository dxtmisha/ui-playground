import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
/**
 * A class for transforming class.<br>
 * Класс для преобразования class.
 */
export declare class PropertiesToRoot extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "038-root";
    protected init(): void;
    /**
     * @param design design name /<br>название дизайна
     * @param component component name /<br>название компонента
     * @param name base property name /<br>базовое название свойства
     */
    private getName;
}
