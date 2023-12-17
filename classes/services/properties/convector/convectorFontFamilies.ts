import type { PropertyItemInput } from '../../../../types/property.ts'

/**
 * Data conversion to standard fonts.<br>
 * Преобразование данных в соответствие стандартным шрифтам.
 * @param item values for conversion /<br>значения для преобразования
 */
export function convectorFontFamilies (item: PropertyItemInput): void {
  if (
    typeof item?.value === 'string' &&
    !item.value.match(/[{}]/)
  ) {
    item.value = `'${item.value}', sans-serif`
  }
}
