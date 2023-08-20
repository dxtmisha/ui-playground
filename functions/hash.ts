import { executeFunction, forEach, isFilled, transformation } from './data.ts'

const hash = new Map<string, any>()
let block = false

/**
 * Get data from hash.<br>
 * Получение данных из хэша.
 * @param name variable names /<br>названия переменных
 * @param callback value or function to change data /<br>значение или функция для изменения данных
 */
export function getHash<T> (
  name: string,
  callback?: T | (() => T)
): T | undefined {
  if (hash.has(name)) {
    return hash.get(name) as T
  }

  if (callback) {
    setHash(name, callback)
    return getHash(name)
  }

  return undefined
}

/**
 * Change data in hash.<br>
 * Изменение данных в хэше.
 * @param name variable names /<br>названия переменных
 * @param callback value or function to change data /<br>значение или функция для изменения данных
 */
export function setHash<T> (
  name: string,
  callback: T | (() => T)
) {
  set(name, executeFunction(callback))
  update()
}

/**
 * Delete values from hash.<br>
 * Удаление значений из хэша.
 * @param name variable names /<br>названия переменных
 */
export function removeHash (name: string) {
  if (hash.has(name)) {
    hash.delete(name)
    update()
  }
}

/**
 * Change data in hash variable.<br>
 * Изменение данных в переменной hash.
 * @param name variable names /<br>названия переменных
 * @param value values to change /<br>значения для изменения
 */
function set<T> (name: string, value: T) {
  if (isFilled(value)) {
    hash.set(name, value)
  } else if (hash.has(name)) {
    hash.delete(name)
  }
}

/**
 * Temporary blocking of hash variable update when URL string changes.<br>
 * Временная блокировка обновления переменной хэша при изменении строки URL.
 */
function makeBlock () {
  block = true

  setTimeout(() => {
    block = false
  }, 120)
}

/**
 * Update hash string in URL.<br>
 * Обновление строки хэша в URL.
 */
function update () {
  const list: string[] = forEach(
    hash,
    (item, name) => `${name}=${encodeURIComponent(String(item))}`
  )

  if (list.length > 0) {
    makeBlock()
    list.sort()
    history.replaceState(null, '', `#${list.join(';')}`)
  }
}

/**
 * Update hash variable from URL string.<br>
 * Обновление переменной хэша из строки URL.
 */
function reload () {
  if (!block) {
    hash.clear()
    location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...item: string[]) => {
        set(item[1], transformation(item[2]))
        return ''
      }
    )
  }
}

reload()
addEventListener('hashchange', reload)
