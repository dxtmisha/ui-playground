import { ImageItem } from './typesBasic';
/**
 * Maximum size allowed without conversion.<br>
 * Максимальный размер, допустимый без преобразования.
 */
export declare const MAX_SIZE: number;
/**
 * Class for working with uploaded images.<br>
 * Класс для работы с загруженными изображениями.
 */
export declare class ImageFile {
    /**
     * Checks if the file is an image.<br>
     * Проверяет, является ли файл изображением.
     * @param file verified file /<br>проверяемый файл
     */
    static isImage(file: File): boolean;
    /**
     * Creates an image based on a file or a link.<br>
     * Создает изображение на основе файла или ссылки.
     * @param src file or link /<br>файл или ссылка
     */
    static createImage(src: string | File): Promise<ImageItem | undefined>;
    /**
     * Returns a link to the image.<br>
     * Возвращает ссылку на изображение.
     * @param src file or link /<br>файл или ссылка
     */
    static getPath(src: string | File): Promise<string>;
    /**
     * Image size adaptation. Checks if the image size is larger than maxSize, reduces it to maxSize.<br>
     * Адаптация размера изображения. Проверяет, если размер изображения больше maxSize, уменьшает его до maxSize.
     * @param image image element /<br>элемент изображения
     * @param src link to image /<br>ссылка на изображение
     * @param maxSize maximum allowable image size /<br>максимальный допустимый размер изображения
     */
    protected static getSRC(image: HTMLImageElement, src?: string | File, maxSize?: number): string;
    /**
     * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.<br>
     * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
     * @param file the Blob or File from which to read /<br>Blob или File которые следует прочитать
     */
    protected static getFileResult(file: File): Promise<string>;
}
