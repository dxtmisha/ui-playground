export type CookieSameSite = 'strict' | 'lax'

export type CookieOptions = {
  age?: number
  sameSite?: CookieSameSite
  arguments?: string[]
}

export type CookieValue<T> = {
  value: T
  options: CookieOptions
}
