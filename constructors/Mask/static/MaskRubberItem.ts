import { forEach } from '../../../functions/data.ts'
import { getExp, strFill } from '../../../functions/string.ts'

/**
 * Class for storing data about the state of rubber symbols.<br>
 * Класс для хранения данных о количество водимый символы для резиновых типы.
 */
export class MaskRubberItem {
  protected value: Record<string, number> = {}

  /**
   * Checks if the selected group has a value.<br>
   * Проверяет, есть ли значение у выбранной группы.
   * @param groupName group name /<br>название группы
   */
  is (groupName: string): boolean {
    return groupName in this.value
  }

  /**
   * Getting the fill list by group.<br>
   * Получение списка заполнения по группе.
   */
  get (): Record<string, number> {
    return this.value
  }

  /**
   * Returns the fill status by the group name.<br>
   * Возвращает заполненность по названию группы.
   * @param groupName group name /<br>название группы
   */
  getByIndex (groupName: string): number {
    return this.value?.[groupName] ?? 0
  }

  /**
   * Adding a fill feature to the group for another 1 character.<br>
   * Добавление признака заполнения у группы на еще 1 символ.
   * @param groupName group name /<br>название группы
   */
  add (groupName: string): this {
    this.value[groupName] = this.getByIndex(groupName) + 1
    return this
  }

  /**
   * Decrease by 1 the sign of the filled character in the group.<br>
   * Уменьшение на 1 признака заполненного символа у группы.
   * @param groupName group name /<br>название группы
   */
  pop (groupName: string): boolean {
    if (this.is(groupName)) {
      if (--this.value[groupName] <= 0) {
        delete this.value[groupName]
      }

      return true
    }

    return false
  }

  /**
   * Reset all records to the initial state.<br>
   * Сброс всех записей до начального состояния.
   */
  reset (): this {
    this.value = {}
    return this
  }

  /**
   * Process the mask so that the length of the rubber records increases
   * depending on the number of filled records.<br>
   * Обрабатывайте маску так, чтобы длина резиновых записей увеличивалась в
   * зависимости от количества заполненных записей.
   * @param mask selected mask /<br>выбранная маска
   */
  expandMask (mask: string): string {
    let value = mask

    forEach(this.value, (length, index) => {
      value = value.replace(
        getExp(index, 'g', '([:value]+)'),
        (all: string) => `${all}${strFill(index, length)}`
      )
    })

    return value
  }
}
