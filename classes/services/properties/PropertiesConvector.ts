import { forEach, isObjectNotArray } from '../../../functions/data'

import { convectorColor } from './convector/convectorColor'
import { convectorShadow } from './convector/convectorShadow'
import { convectorFontFamilies } from './convector/convectorFontFamilies'
import { convectorTypography } from './convector/convectorTypography'

import type { PropertyItemInput, PropertyListOrData } from '../../../types/property'

const LIST: Record<string, (item: PropertyItemInput) => void> = {
  boxShadow: convectorShadow,
  color: convectorColor,
  fontFamilies: convectorFontFamilies,
  typography: convectorTypography
}

/**
 * Class for data type conversion.<br>
 * Класс для преобразования типов данных.
 */
export class PropertiesConvector {
  /**
   * Basic value transformation.<br>
   * Базовое преобразование значения.
   * @param properties an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   */
  static to (properties: PropertyListOrData): void {
    forEach(properties, item => {
      if (
        item?.type &&
        item.type in LIST
      ) {
        LIST[item.type](item)
      } else if (
        item?.value &&
        isObjectNotArray(item.value)
      ) {
        this.to(item.value)
      } else if (isObjectNotArray(item)) {
        this.to(item)
      }
    })
  }
}
