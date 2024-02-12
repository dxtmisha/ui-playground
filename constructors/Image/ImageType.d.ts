import { CacheItem } from '../../classes/CacheItem.ts';
import { type ImageProps } from './props.ts';
import { type ImageTypeItem } from './typesBasic.ts';
/**
 * Class for working with the image type.<br>
 * Класс для работы с типом изображения.
 */
export declare class ImageType extends CacheItem<ImageTypeItem> {
    protected readonly props: ImageProps;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: ImageProps);
    /**
     * Get the image type.<br>
     * Получения тип изображения.
     */
    get(): ImageTypeItem;
    /**
     * Data update.<br>
     * Обновление данных.
     */
    protected update(): ImageTypeItem;
}
