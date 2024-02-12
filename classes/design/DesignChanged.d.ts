/**
 * The class checks the values that have been edited.<br>
 * Класс проверяет значения, которые были отредактированы.
 */
export declare class DesignChanged<T extends Record<string, any>> {
    protected readonly props: T;
    protected readonly watch: string[];
    private readonly cache;
    /**
     * Constructor
     * @param props base data /<br>базовые данные
     * @param watch data for tracking /<br>данные для слежения
     */
    constructor(props: T, watch?: string[]);
    /**
     * Checks if the value has been updated.<br>
     * Проверяет, обновлено ли значение.
     * @param name property name /<br>название свойства
     */
    is(name: string | string[]): boolean;
    /**
     * Checks if there are changes in the data.<br>
     * Проверяет, есть ли изменения в данных.
     */
    isChanged(): boolean;
    /**
     * Updates all values.<br>
     * Обновляет все значения.
     */
    update(): void;
    /**
     * Checking additional data.<br>
     * Проверка дополнительных данных.
     * @param name property name /<br>название свойства
     */
    protected isDifferent(name: string): boolean;
}
