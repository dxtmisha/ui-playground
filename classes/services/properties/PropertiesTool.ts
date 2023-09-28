import { DIR_CONSTRUCTOR, NAME_CONSTRUCTOR } from '../../../types/property.ts'

export class PropertiesTool {
  /**
   * Checks if the names of the design relate to the construction.<br>
   * Проверяет, относятся ли названия дизайна к конструкции.
   * @param design design name /<br>название дизайна
   */
  static isConstructor (design: string): boolean {
    return design === NAME_CONSTRUCTOR
  }

  /**
   * This method returns the names of designs from the environment variable (env).<br>
   * Данный метод возвращает названия дизайнов из переменной окружения (env)
   */
  static getDesigns (): string[] {
    return process.env?.DESIGNS
      ?.toString()
      ?.split(',') ?? []
  }

  /**
   * Getting the directory name by its name.<br>
   * Получение названия директории по его имени.
   * @param name design name /<br>название дизайна
   */
  static getDirByName (name: string): string {
    return name === NAME_CONSTRUCTOR ? DIR_CONSTRUCTOR : name
  }
}
