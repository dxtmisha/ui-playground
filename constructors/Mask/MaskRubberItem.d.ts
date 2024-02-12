/**
 * Class for storing data about the state of rubber symbols.<br>
 * Класс для хранения данных о количество водимый символы для резиновых типы.
 */
export declare class MaskRubberItem {
    protected value: Record<string, number>;
    /**
     * Checks if the selected group has a value.<br>
     * Проверяет, есть ли значение у выбранной группы.
     * @param groupName group name /<br>название группы
     */
    is(groupName: string): boolean;
    /**
     * Returns the filling list by groups.<br>
     * Возвращает список заполнения по группам.
     */
    get(): Record<string, number>;
    /**
     * Returns data for caching.<br>
     * Возвращает данные для кеширования.
     */
    getCode(): (string | number)[];
    /**
     * Returns the fill status by the group name.<br>
     * Возвращает заполненность по названию группы.
     * @param groupName group name /<br>название группы
     */
    getByIndex(groupName: string): number;
    /**
     * Adding a fill feature to the group for another 1 character.<br>
     * Добавление признака заполнения у группы на еще 1 символ.
     * @param groupName group name /<br>название группы
     */
    add(groupName: string): this;
    /**
     * Decrease by 1 the sign of the filled character in the group.<br>
     * Уменьшение на 1 признака заполненного символа у группы.
     * @param groupName group name /<br>название группы
     */
    pop(groupName: string): boolean;
    /**
     * Reset all records to the initial state.<br>
     * Сброс всех записей до начального состояния.
     */
    reset(): this;
    /**
     * Process the mask so that the length of the rubber records increases
     * depending on the number of filled records.<br>
     * Обрабатывайте маску так, чтобы длина резиновых записей увеличивалась в
     * зависимости от количества заполненных записей.
     * @param mask selected mask /<br>выбранная маска
     */
    expandMask(mask: string): string;
}
