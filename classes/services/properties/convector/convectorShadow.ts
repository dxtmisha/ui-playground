import { isObject } from '../../../../functions/data.ts'
import { toArray } from '../../../../functions/object.ts'

export type ConvectorShadowItem = {
  type: string
  color: string
  x: string
  y: string
  blur: string
  spread: string
}

/**
 * Transforming data into shadow.<br>
 * Преобразование данных в тень.
 * @param data data for transformation /<br>данные для преобразования
 */
export function convectorShadow (data: string | ConvectorShadowItem | ConvectorShadowItem[]): string {
  if (isObject(data)) {
    const shadows: string[] = []

    toArray(data)
      .forEach((item) => {
        const shadow: string[] = []
        const {
          type,
          color,
          x,
          y,
          blur,
          spread
        } = item

        if (type === 'innerShadow') {
          shadow.push('inset')
        }

        shadow.push(
          x ?? '0',
          y ?? '0',
          blur ?? '0',
          spread ?? '',
          color ?? 'rgba(0, 0, 0, 1)'
        )

        shadows.push(shadow.join(' ').trim())
      })

    return shadows.join(', ')
  }

  return data
}
