/**
 * Cyclically calls requestAnimationFrame until next returns true
 * The window.requestAnimationFrame() method tells the browser that you wish to perform
 * an animation and requests that the browser calls a specified function to update an
 * animation right before the next repaint.<br>
 * Циклически вызывает requestAnimationFrame, пока next возвращает true
 * window.requestAnimationFrame указывает браузеру на то, что вы хотите произвести
 * анимацию, и просит его запланировать перерисовку на следующем кадре анимации.
 * @param callback the function to call when it's time to update your animation for the next repaint /<br>функция,
 * которая будет вызвана, когда придёт время обновить вашу анимацию на следующей перерисовке
 * @param next function that determines repetition /<br>функция, которая определяет повторность
 * @param end function that is executed if the animation stops /<br>функция,
 * которая выполняется, если останавливается анимация
 */
export function frame (
  callback: () => void,
  next?: () => false,
  end?: () => void
) {
  requestAnimationFrame(() => {
    callback()

    if (next?.()) {
      frame(callback, next, end)
    } else {
      end?.()
    }
  })
}
