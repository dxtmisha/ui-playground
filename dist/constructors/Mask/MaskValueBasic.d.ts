import { CacheItem } from '../../classes/CacheItem';
import { MaskRubberTransition } from './MaskRubberTransition';
import { MaskItem } from './MaskItem';
import { MaskSpecial } from './MaskSpecial';
import { MaskCharacter } from './MaskCharacter';
/**
 * Class for getting basic input values.<br>
 * Класс для получения базовых вводимых значений.
 */
export declare class MaskValueBasic extends CacheItem<string> {
    protected readonly rubberTransition: MaskRubberTransition;
    protected readonly mask: MaskItem;
    protected readonly special: MaskSpecial;
    protected readonly character: MaskCharacter;
    constructor(rubberTransition: MaskRubberTransition, mask: MaskItem, special: MaskSpecial, character: MaskCharacter);
    /**
     * Checks if the values are filled in.<br>
     * Проверяет, заполнены ли значения.
     */
    is(): boolean;
    /**
     * Receiving basic standard values.<br>
     * Получение базовых стандартных значений.
     */
    get(): string;
    /**
     * Getting the character from the basic standard values by its key number.<br>
     * Получение символа из базовых стандартных значений по его номеру ключа.
     * @param index key number /<br>номер ключа
     */
    getChar(index: number): string | undefined;
    /**
     * Getting the length of basic standard values.<br>
     * Получение длины базовых стандартных значений.
     */
    getLength(): number;
    /**
     * Initialization of basic standard values.<br>
     * Инициализация базовых стандартных значений.
     */
    protected initValue(): string;
}
