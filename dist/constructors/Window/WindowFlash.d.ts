import { WindowProps } from './props';
import { WindowClasses } from './WindowClasses';
/**
 * The class for working with the flash parameter. The flash property is
 * responsible for disabling the animation when opening the window. Also,
 * the animation is disabled when there are already open windows.<br>
 * Класс для работы с параметром flash. Свойство flash отвечает за отключение
 * анимации при открытии окна. А также отключается анимация, когда уже есть
 * открытые окна.
 */
export declare class WindowFlash {
    protected readonly props: WindowProps;
    protected readonly classes: WindowClasses;
    protected control: boolean;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param classes an object for working with classes and searching for elements /<br>
     * объект для работы с классами и поиском элементов
     */
    constructor(props: WindowProps, classes: WindowClasses);
    /**
     * Is the flash property active.<br>
     * Активно ли свойство flash.
     */
    is(): boolean;
    /**
     * Checks whether the animation needs to be disabled.<br>
     * Проверяет, надо ли отключить анимацию.
     */
    isOpen(): boolean;
    /**
     * Checks whether the animation needs to be disabled when closing.<br>
     * Проверяет, надо ли отключить анимацию при закрытии.
     */
    isClose(): boolean;
    /**
     * Change the value of the control parameter<br>
     * Изменить значение параметра control.
     * @param target the element that gets focus on click /<br>элемент, который получает фокус при клике
     */
    setControl(target?: HTMLElement): this;
}
