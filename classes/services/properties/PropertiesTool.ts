export class PropertiesTool {
  /**
   * This method returns the names of designs from the environment variable (env).<br>
   * Данный метод возвращает названия дизайнов из переменной окружения (env)
   */
  static getDesigns (): string[] {
    return process.env?.DESIGNS
      ?.toString()
      ?.split(',') ?? []
  }
}
