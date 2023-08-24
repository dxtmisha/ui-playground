import { CookieValue } from '../types/cookie.ts'

const STORAGE_NAME_BLOCK = 'cookie-block'

class CookieItem<T> {
  constructor (name: string) {
  }
}

export class Cookie {
  private cookie = new Map<string, CookieItem<any>>()
}
