import { isObject } from '../../../../functions/data.ts'
import { toArray } from '../../../../functions/object.ts'

import type { PropertyItemInput } from '../../../../types/property.ts'

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
 * @param item values for conversion /<br>значения для преобразования
 */
export function convectorShadow (item: PropertyItemInput): void {
  const data: string | ConvectorShadowItem | ConvectorShadowItem[] = item?.value

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

    item.value = shadows.join(', ')
  }
}
