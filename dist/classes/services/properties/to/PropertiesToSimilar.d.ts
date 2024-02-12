import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
/**
 * A class for searching for related properties at a higher level to adopt their properties.<br>
 * Класс для поиска родственных свойств на уровне выше для принятия их свойств.
 */
export declare class PropertiesToSimilar extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "010-similar";
    /**
     * Finding similar data for editing.<br>
     * Поиск похожих данных для редактирования.
     */
    protected init(): void;
    /**
     * Returns similar values by its name.<br>
     * Возвращает похожие значения по его имени.
     * @param name name of the name /<br>название имени
     * @param item object for checking /<br>объект для проверки
     * @param parents array of all ancestor properties along the tree from the top level /<br>
     * массив со всеми свойствами предков по дереву от верхнего уровня
     */
    private getParent;
    /**
     * Checks if the property is available for inheritance.<br>
     * Проверяет, доступно ли свойство для наследования.
     * @param item object for checking /<br>объект для проверки
     */
    private is;
    /**
     * Checks if inheriting the property is prohibited.<br>
     * Проверяет, запрещено ли наследовать свойство.
     * @param item object for checking /<br>объект для проверки
     */
    private isException;
}
