import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  PropertyKey,
  type PropertyReplace
} from '../../../../types/property'

export type PropertiesReplaceValue = string | Partial<PropertyReplace>

/**
 * A class for transforming an expression through regular expressions.<br>
 * Класс для преобразования выражения через регулярные выражения.
 */
export class PropertiesToReplace extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '001-replace'

  /**
   * Transforming all of its properties.<br>
   * Преобразование всех своих свойств.
   */
  protected init (): void {
    this.items.each(({ item }) => {
      if (
        item?.[PropertyKey.replace] &&
        typeof item.value === 'string'
      ) {
        item.value = this.getValue(
          this.getInfo(item[PropertyKey.replace]),
          item.value
        )

        delete item[PropertyKey.replace]
      }
    })
  }

  /**
   * Getting information about the transformation.<br>
   * Получение информации о преобразовании.
   * @param info information for verification /<br>информация для проверки
   */
  private getInfo (info: PropertiesReplaceValue): PropertyReplace {
    if (typeof info === 'object') {
      return {
        pattern: info?.pattern,
        flags: info?.flags || 'i',
        replace: info?.replace || '$1'
      }
    } else {
      return {
        pattern: info || undefined,
        flags: 'i',
        replace: '$1'
      }
    }
  }

  /**
   * Returns the transformed value.<br>
   * Возвращает преобразованное значение.
   * @param info information for verification /<br>информация для проверки
   * @param value
   */
  private getValue (info: PropertyReplace, value: string): string {
    if (info?.pattern) {
      return value.replace(new RegExp(info.pattern, info.flags), info.replace)
    } else {
      return value
    }
  }
}
