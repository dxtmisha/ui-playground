import { isFilled, isString } from '../../functions/data.ts'

import { Geo } from './Geo.ts'

import { useEnv } from '../../composables/static/useEnv.ts'

export enum ApiMethodItem {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE'
}

export type ApiMethod = string & ApiMethodItem
export type ApiFetch = {
  path: string
  method?: ApiMethod
  request?: FormData | Record<string, any> | string
  auth?: boolean
  headers?: Record<string, string>
  type?: string
  init?: RequestInit
}

/**
 * Class for working with requests.<br>
 * Класс для работы с запросами.
 */
export class Api {
  protected static readonly url = useEnv('api', '/')
  protected static readonly auth = useEnv('auth', false)

  protected static access?: string
  protected static refresh?: string
  protected static signature?: string

  protected static urlCommand: string = 'response'

  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
   */
  static async response<T> (pathRequest: string | ApiFetch): Promise<T> {
    if (isString(pathRequest)) {
      return await this.fetch<T>({
        path: pathRequest
      })
    }

    return await this.fetch<T>(pathRequest)
  }

  /**
   * Execute a query by the name of the team.<br>
   * Выполнить запрос по названию команды.
   * @param command name of the team /<br>название команды
   * @param request query string or list of parameters /<br>строка запроса или список параметров
   */
  static async responseByCommand<T> (
    command: string,
    request?: ApiFetch
  ): Promise<T> {
    return await this.fetch<T>({
      path: this.getUrlByCommand(command),
      ...(request ?? {})
    })
  }

  /**
   * Getting the header for the request.<br>
   * Получение заголовка для запроса.
   * @param value list of headers /<br>список заголовков
   * @param type type of request /<br>тип запроса
   */
  static getHeaders (
    value?: Record<string, string> | null,
    type = 'application/json;charset=UTF-8'
  ): Record<string, string> | undefined {
    if (value !== null) {
      const headers = { ...(value ?? {}) }

      if (type) {
        headers['Content-Type'] = type
      }

      if (this.access) {
        headers['API-AUTH'] = this.access
      }

      if (this.refresh) {
        headers['API-REFRESH'] = this.refresh
      }

      if (this.signature) {
        headers['API-SIGNATURE'] = this.signature
      }

      return headers
    }

    return undefined
  }

  /**
   * Getting the full path to the request script.<br>
   * Получение полного пути к скрипту запроса.
   * @param path path to the script /<br>путь к скрипту
   */
  static getUrl (path: string): string {
    return `${this.url}${path}`
      .replace('{locale}', Geo.getLocation())
      .replace('{country}', Geo.getCountry())
      .replace('{language}', Geo.getLanguage())
  }

  /**
   * Get access to a script by the name of the team.<br>
   * Получение к скрипту по названию команды.
   * @param command name of the team /<br>название команды
   */
  static getUrlByCommand (command: string): string {
    if (this.isLocalhost()) {
      return `${this.urlCommand}/${command}.json`
    }

    return `${this.urlCommand}/?command=${command}`
  }

  /**
   * Getting data for the body.<br>
   * Получение данных для тела.
   * @param request this request /<br>данный запрос
   */
  static getBody (request: ApiFetch['request']): string | FormData | undefined {
    if (isFilled(request)) {
      if (
        request instanceof FormData ||
        isString(request)
      ) {
        return request
      }

      return JSON.stringify(request)
    }

    return undefined
  }

  /**
   * Changing data for authorization (access).<br>
   * Изменение данных для авторизации (access).
   * @param access
   */
  static setAccess (access: string): void {
    this.access = access
  }

  /**
   * Changing data for authorization (refresh).<br>
   * Изменение данных для авторизации (refresh).
   * @param refresh
   */
  static setRefresh (refresh: string): void {
    this.refresh = refresh
  }

  /**
   * Changing data for authorization (signature).<br>
   * Изменение данных для авторизации (signature).
   * @param signature
   */
  static setSignature (signature: string): void {
    this.signature = signature
  }

  /**
   * Is the server local.<br>
   * Является ли сервер локальный.
   */
  protected static isLocalhost (): boolean {
    return location.hostname === 'localhost'
  }

  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param path path to request /<br>путь к запрос
   * @param method method for request /<br>метод запрос
   * @param request body of the request /<br>тело запроса
   * @param auth enable authorization verification /<br>включить проверку на авторизацию
   * @param headers list of headers /<br>список заголовков
   * @param type type of request /<br>тип запроса
   * @param init additional parameters /<br>дополнительных параметров
   */
  protected static async fetch<T> ({
    path = '',
    method = ApiMethodItem.get,
    request = undefined,
    auth = this.auth,
    headers = {},
    type = 'application/json;charset=UTF-8',
    init = {}
  }: ApiFetch): Promise<T> {
    const data = await (await fetch(this.getUrl(path), {
      ...init,
      method,
      headers: this.getHeaders(headers, type),
      body: this.getBody(request)
    })).json()

    if (
      auth &&
      'token' in data &&
      'refresh' in data
    ) {
      return this.fetch({
        path,
        method,
        request,
        auth,
        headers,
        type,
        init
      })
    }

    return data
  }
}
