import { type MutationComponentCallback, type MutationComponentProps, type MutationSlots, MutationStatus } from '../../types/mutation.ts';
/**
 * Class for managing the element.<br>
 * Класс для управления элементом.
 */
export declare class MutationDataItem {
    private readonly element;
    private readonly id;
    private readonly componentName;
    private static;
    private readonly slots;
    private props;
    private callback?;
    /**
     * Constructor
     * @param element tracking element /<br>элемент слежения
     */
    constructor(element: HTMLElement);
    /**
     * Checks if the element belongs to the current object.<br>
     * Проверяет, принадлежит ли элемент текущему объекту.
     * @param element tracking element /<br>элемент слежения
     */
    is(element: HTMLElement): boolean;
    /**
     * Returns the identifier.<br>
     * Возвращает идентификатор.
     */
    getId(): string;
    /**
     * Returns the identifier.<br>
     * Возвращает названия компонента.
     */
    getComponentName(): string;
    /**
     * Returns the element.<br>
     * Возвращает элемент.
     */
    getElement(): HTMLElement;
    /**
     * Returns the status.<br>
     * Возвращает статус.
     */
    getStatus(): MutationStatus;
    /**
     * Returns property data.<br>
     * Возвращает данные свойства.
     */
    getProps(): MutationComponentProps;
    /**
     * Returns data about the slot.<br>
     * Возвращает данные о слоте.
     */
    getSlots(): MutationSlots;
    /**
     * Changes the status of the item.<br>
     * Изменяет статус элемента.
     * @param status status values /<br>значения статуса
     */
    setStatus(status: MutationStatus): this;
    /**
     * Registers a component for data update.<br>
     * Регистрирует компонент для обновления данных.
     * @param item element instance /<br>экземпляр элемента
     * @param callback function called upon change /<br>вызываемая функция при изменении
     */
    registration(item: any, callback: MutationComponentCallback): this;
    /**
     * Called upon data update.<br>
     * Вызывается при обновлении данных.
     */
    update(): this;
    /**
     * Termination of observation of changes.<br>
     * Прекращения наблюдения за изменения.
     */
    disconnect(): this;
    /**
     * Returns data from attributes.<br>
     * Возвращает данные из атрибутов.
     */
    private getDataset;
    /**
     * Changes the property.<br>
     * Изменяет свойство.
     * @param props property values /<br>значения свойство
     */
    private setProps;
    /**
     * Data updates for the slot.<br>
     * Обновления данных для слота.
     * @param slots list of slots for update /<br>список слотов для обновления
     */
    private setSlots;
    /**
     * Initializes the data list for the slot.<br>
     * Инициализирует список данных для слота.
     */
    private initSlots;
    /**
     * Initializes the list of child elements.<br>
     * Инициализирует список дочерних элементов.
     * @param children list of child elements /<br>список дочерних элементов
     */
    private initChildrenList;
    /**
     * Initializes data for the child element.<br>
     * Инициализирует данные для дочернего элемента.
     * @param element child element /<br>дочерний элемент
     */
    private initChildren;
    /**
     * Removal of all classes related to the status.<br>
     * Удаление всех классов, относящихся к статусу.
     */
    private removeClasses;
}
