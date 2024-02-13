import { PropertyKey } from '../../../../types/property'
import type { PropertyItemInput } from '../../../../types/property'

/**
 * Data conversion into colors.<br>
 * Преобразование данных в цвета.
 * @param item values for conversion /<br>значения для преобразования
 */
export function convectorColor (item: PropertyItemInput): void {
  const type: string | undefined = item?.$extensions?.['studio.tokens']?.modify?.type
  const value: string | undefined = item?.$extensions?.['studio.tokens']?.modify?.value

  if (type) {
    switch (type) {
      case 'alpha':
        item[PropertyKey.cssColorOpacity] = value?.toString() ?? '1'
        break
    }
  }
}
