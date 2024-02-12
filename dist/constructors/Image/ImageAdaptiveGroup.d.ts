import { EventItem } from '../../classes/EventItem.ts';
import { ImageAdaptiveItem } from './ImageAdaptiveItem.ts';
/**
 * Class for working with image scaling according to the physical size of the object in the image.<br>
 * Класс для работы с масштабированием изображения по физическому размеру объекта на изображении.
 */
export declare class ImageAdaptiveGroup {
    protected static objects: ImageAdaptiveItem[];
    protected static objectsAdaptive: ImageAdaptiveItem[];
    private static cache;
    protected static event?: EventItem<Window, Event, any>;
    protected static time?: number;
    /**
     * Checks if an element is present in the list.<br>
     * Проверяет, присутствует ли элемент в списке.
     * @param item object for working with images /<br>объект для работы с изображениями
     */
    static is(item: ImageAdaptiveItem): boolean;
    /**
     * Adding a new element for tracking.<br>
     * Добавление нового элемента для отслеживания.
     * @param item object for working with images /<br>объект для работы с изображениями
     */
    static add(item: ImageAdaptiveItem): void;
    /**
     * Removal of the element.<br>
     * Удаления элемента.
     * @param item object for working with images /<br>объект для работы с изображениями
     */
    static remove(item: ImageAdaptiveItem): void;
    /**
     * Resets all cached data and rereads scaling for all elements.<br>
     * Обнуляет все кэшированные данные и перечитывает масштабирование для всех элементов.
     */
    static reset(): void;
    /**
     * Starts the calculation process or turns it off if there are no active elements in the list.<br>
     * Запускает процесс вычисления или отключает его, если в списке нет активных элементов.
     */
    static make(): void;
    /**
     * Returns a list of elements that are visible or constantly being calculated.<br>
     * Возвращает список элементов, которые видны или постоянно вычисляются.
     */
    protected static getItemIdByVisible(): string[];
    /**
     * Method for starting the calculation of scaling elements in the list.<br>
     * Метод для запуска вычисления масштабирования элементов в списке.
     */
    protected static start(): void;
    /**
     * Updates the list of elements available for calculation. These are the
     * elements that are close to the border of the visible area.<br>
     * Обновляет список доступных для вычисления элементов. Это те элементы,
     * которые близки к границе видимой области.
     */
    protected static makeAdaptive(): void;
    /**
     * Calculates the dimensions of an element relative to the image size,
     * the size of the element, and its physical location on the image.<br>
     * Вычисляет размеры элемента относительно размера изображения,
     * размера элемента и его физического расположения на изображении.
     */
    protected static makeSize(): void;
    /**
     * Calculation of the basic scaling of an element without taking into account other elements.<br>
     * Вычисление базового масштабирования элемента без учета других элементов.
     */
    protected static makePercent(): void;
    /**
     * Calculation of the largest element to determine the base size.
     * This parameter is used for scaling other elements,
     * reducing them to the necessary proportion.<br>
     * Вычисление самого большого элемента для определения базового размера.
     * Этот параметр используется для масштабирования других элементов,
     * уменьшая их до нужной пропорции.
     */
    protected static makeFactorMax(): void;
    /**
     * Calls the callback function.<br>
     * Вызывает функцию обратного вызова.
     */
    protected static makeCallback(): void;
    /**
     * Checks if there is an active element at the moment.<br>
     * Проверяет, есть ли в текущий момент активный элемент.
     */
    private static isAdaptive;
    /**
     * Checks whether the composition of visible elements has changed.<br>
     * Проверяет, изменился ли состав видимых элементов.
     * @param visible list of indices of visible elements /<br>список индексов видимых элементов
     */
    private static isCache;
}
