import { type ImageCoordinatorType } from '../types/image.ts'

/**
 * Returns the position of the mouse cursor or the location of the click.<br>
 * Возвращает позицию курсора мыши или место нажатия.
 * @param event event object /<br>объект события
 */
export function getClient (event: MouseEvent & TouchEvent): ImageCoordinatorType {
  return {
    x: getClientX(event),
    y: getClientY(event)
  }
}

/**
 * Returns the position of the mouse cursor or the location of the click (X).<br>
 * Возвращает позицию курсора мыши или место нажатия (X).
 * @param event event object / объект события
 */
export function getClientX (event: MouseEvent & TouchEvent): number {
  return event?.clientX || event?.targetTouches?.[0].clientX || event?.touches?.[0].clientX || 0
}

/**
 * Returns the position of the mouse cursor or the location of the click (Y).<br>
 * Возвращает позицию курсора мыши или место нажатия (Y).
 * @param event event object / объект события
 */
export function getClientY (event: MouseEvent & TouchEvent): number {
  return event?.clientY || event?.targetTouches?.[0].clientY || event?.touches?.[0].clientY || 0
}

/**
 * Stop listening to events in depth.<br>
 * Остановить прослушивания события в глубину.
 * @param event event instance /<br>экземпляр события
 */
export function makeStopPropagation (event: Event): void {
  event.preventDefault()
  event.stopPropagation()
}
