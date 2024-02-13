import { type ImageCoordinator } from '../types/image';
/**
 * Returns the pressed key.<br>
 * Возвращает нажатую клавишу.
 * @param event event object /<br>объект события
 */
export declare function getKey(event: KeyboardEvent): string;
/**
 * Returns the position of the mouse cursor or the location of the click.<br>
 * Возвращает позицию курсора мыши или место нажатия.
 * @param event event object /<br>объект события
 */
export declare function getClient(event: MouseEvent & TouchEvent): ImageCoordinator;
/**
 * Returns the position of the mouse cursor or the location of the click (X).<br>
 * Возвращает позицию курсора мыши или место нажатия (X).
 * @param event event object / объект события
 */
export declare function getClientX(event: MouseEvent & TouchEvent): number;
/**
 * Returns the position of the mouse cursor or the location of the click (Y).<br>
 * Возвращает позицию курсора мыши или место нажатия (Y).
 * @param event event object / объект события
 */
export declare function getClientY(event: MouseEvent & TouchEvent): number;
/**
 * Stop listening to events in depth.<br>
 * Остановить прослушивания события в глубину.
 * @param event event instance /<br>экземпляр события
 */
export declare function makeStopPropagation(event: Event): void;
