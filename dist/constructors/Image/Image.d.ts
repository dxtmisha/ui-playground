import { DesignAsyncAbstract } from '../../classes/design/DesignAsyncAbstract';
import { ImageType } from './ImageType';
import { ImageData } from './ImageData';
import { ImageCoordinator } from './ImageCoordinator';
import { ImagePosition } from './ImagePosition';
import { ImageAdaptiveItem } from './ImageAdaptiveItem';
import { ImageBackground } from './ImageBackground';
import { type ConstrClassObject, type ConstrStyles, type ConstrValue } from '../../types/constructor';
import { type ImageProps } from './props';
import { type ImageElement, type ImageEventLoad, type ImageTypeItem } from './typesBasic';
/**
 * Base class for working with images and icons.<br>
 * Базовый класс для работы с изображениями и иконками.
 */
export declare class Image extends DesignAsyncAbstract<ImageProps, ImageEventLoad> {
    protected readonly props: ImageProps;
    protected readonly callback?: ((event: ImageEventLoad) => void) | undefined;
    readonly type: ImageType;
    readonly data: ImageData;
    readonly coordinator: ImageCoordinator;
    readonly position: ImagePosition;
    readonly adaptiveItem: ImageAdaptiveItem;
    readonly background: ImageBackground;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element image element for scaling /<br>элемент изображения для масштабирования
     * @param callback callback function on successful image update or data recalculation /<br>
     * функция обратного вызова при успешном обновлении картинки или при перерасчете данных
     */
    constructor(props: ImageProps, element: ConstrValue<ImageElement>, callback?: ((event: ImageEventLoad) => void) | undefined);
    /**
     * Destructor
     */
    destructor(): void;
    /**
     * Get the image type.<br>
     * Получения тип изображения.
     */
    getType(): ImageTypeItem;
    /**
     * Getting the value of the picture.<br>
     * Получение значения картины.
     */
    getValue(): ImageProps['value'];
    /**
     * A method for obtaining an object with values for an image.<br>
     * Метод для получения объекта с значениями для изображения.
     */
    getData(): ImageData;
    /**
     * Values for the text. Text is used for the type of icon that works as a background.<br>
     * Значения для текста. Текст используется для типа иконки, который работает как фон.
     */
    getText(): string | undefined;
    /**
     * Values for the class.<br>
     * Значения для класса.
     */
    getClasses(): ConstrClassObject;
    /**
     * Values for the style.<br>
     * Значения для стиля.
     */
    getStyles(): ConstrStyles;
    /**
     * Updates the adapted elements.<br>
     * Обновляет адаптированные элементы.
     */
    updateAdaptive(): this;
    /**
     * A function that is called each time the input values are changed.<br>
     * Функция, которая вызывается каждый раз, когда изменяются входные значения.
     */
    protected initEvent(): Promise<void>;
    /**
     * Calculates all properties for the style of the element.<br>
     * Вычисляет все свойства для стиля элемента.
     */
    protected initStyles(): ConstrStyles;
}
