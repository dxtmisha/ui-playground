export declare enum ApiMethodItem {
    get = "GET",
    post = "POST",
    put = "PUT",
    delete = "DELETE"
}
export type ApiMethod = string & ApiMethodItem;
export type ApiFetch = {
    path: string;
    method?: ApiMethod;
    request?: FormData | Record<string, any> | string;
    auth?: boolean;
    headers?: Record<string, string>;
    type?: string;
    init?: RequestInit;
};
/**
 * Class for working with requests.<br>
 * Класс для работы с запросами.
 */
export declare class Api {
    protected static readonly url: string;
    protected static readonly urlLocalhost: string;
    protected static urlCommand: string;
    /**
     * Is the server local.<br>
     * Является ли сервер локальный.
     */
    static isLocalhost(): boolean;
    /**
     * Getting the header for the request.<br>
     * Получение заголовка для запроса.
     * @param value list of headers /<br>список заголовков
     * @param type type of request /<br>тип запроса
     */
    static getHeaders(value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    /**
     * Getting the full path to the request script.<br>
     * Получение полного пути к скрипту запроса.
     * @param path path to the script /<br>путь к скрипту
     */
    static getUrl(path: string): string;
    /**
     * Get access to a script by the name of the team.<br>
     * Получение к скрипту по названию команды.
     * @param command name of the team /<br>название команды
     */
    static getUrlByCommand(command: string): string;
    /**
     * Getting data for the body.<br>
     * Получение данных для тела.
     * @param request this request /<br>данный запрос
     */
    static getBody(request: ApiFetch['request']): string | FormData | undefined;
    /**
     * To execute a request.<br>
     * Выполнить запрос.
     * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
     */
    static response<T>(pathRequest: string | ApiFetch): Promise<T>;
    /**
     * Execute a query by the name of the team.<br>
     * Выполнить запрос по названию команды.
     * @param command name of the team /<br>название команды
     * @param request query string or list of parameters /<br>строка запроса или список параметров
     */
    static responseByCommand<T>(command: string, request?: ApiFetch): Promise<T>;
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
    protected static fetch<T>({ path, method, request, headers, type, init }: ApiFetch): Promise<T>;
}
