var h = Object.defineProperty;
var i = (c, s, t) => s in c ? h(c, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[s] = t;
var a = (c, s, t) => (i(c, typeof s != "symbol" ? s + "" : s, t), t);
class r {
  /**
   * Constructor
   * @param callback function for the cache /<br>функция для кэша
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(s) {
    a(this, "cache");
    a(this, "comparisons", []);
    this.callback = s;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  getCache(s) {
    return this.isUpdate(s) && this.setCache(), this.cache;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getCacheAsync(s) {
    return this.isUpdate(s) && await this.setCacheAsync(), this.cache;
  }
  /**
   * Overwrites or adds new values for the cache.<br>
   * Перезаписывает или добавляет новые значения для кэша.
   */
  setCache() {
    this.cache = this.callback();
  }
  /**
   * Overwrites or adds new values for the cache (Async).<br>
   * Перезаписывает или добавляет новые значения для кэша (Async).
   */
  async setCacheAsync() {
    this.cache = await this.callback();
  }
  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  isUpdate(s) {
    return this.cache === void 0 || this.comparisons.length !== s.length || this.comparisons.findIndex((t, e) => t !== s[e]) >= 0 ? (this.comparisons = [...s], !0) : !1;
  }
}
export {
  r as C
};
