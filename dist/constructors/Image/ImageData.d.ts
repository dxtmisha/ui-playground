import { DesignAsyncAbstract } from '../../classes/design/DesignAsyncAbstract';
import { ImageType } from './ImageType';
import { type Undefined } from '../../types/basic';
import { type ImageProps } from './props';
import { type ImageEventData, type ImageEventItem, type ImageItem } from './typesBasic';
/**
 * A class for obtaining image or icon data.<br>
 * Класс для получения данных изображения или иконки.
 */
export declare class ImageData extends DesignAsyncAbstract<ImageProps, ImageEventData> {
    protected readonly type: ImageType;
    protected item?: ImageEventItem;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param type image type /<br>тип изображения
     * @param callback callback function upon successful image loading /<br>
     * функция обратного вызова при успешной загрузке изображения
     */
    constructor(props: ImageProps, type: ImageType, callback?: (event: ImageEventData) => void);
    /**
     * Checks if there are values.<br>
     * Проверяет, есть ли значения.
     */
    is(): this is {
        event: {
            image: Exclude<ImageEventItem, Undefined>;
        };
    };
    /**
     * Checks if the value is a link, that is, a type of string.<br>
     * Проверяет, является ли значение ссылкой, то есть видом строки.
     */
    isLink(): this is {
        event: {
            image: string;
        };
    };
    /**
     * Checks if the value is an image object.<br>
     * Проверяет, является ли значение объектом изображения.
     */
    isImage(): this is {
        event: {
            image: ImageItem;
        };
    };
    /**
     * Returns images.<br>
     * Возвращает изображения.
     */
    getImage(): ImageEventItem;
    /**
     * Calls the callback function.<br>
     * Вызывает функцию обратного вызова.
     */
    protected initEvent(): Promise<void>;
    /**
     * Calculates the image value and returns it.<br>
     * Вычисляет значение изображения и возвращает его.
     */
    protected initImage(): Promise<ImageEventItem>;
}
