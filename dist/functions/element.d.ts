import { type ElementOrString, type ElementOrWindow } from '../types/element';
/**
 * Checks if object is Window.<br>
 * Проверяет, является ли объект Window.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export declare function isWindow<E>(element: E): element is Extract<E, Window>;
/**
 * Checks if an element is still in the DOM tree.<br>
 * Проверяет, находится ли еще элемент в дереве DOM.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export declare function isInDom<E extends ElementOrWindow>(element?: ElementOrString<E>): boolean;
/**
 * Returns the first Element in the document that matches the specified selector or the element.<br>
 * Возвращает первый Element документа, который соответствует указанному селектору или саму element.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export declare function getElement<E extends ElementOrWindow, R extends Exclude<E, Window>>(element?: ElementOrString<E>): R | undefined;
/**
 * Returns window or element.<br>
 * Возвращает окно или элемент.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export declare function getElementOrWindow<E extends ElementOrWindow>(element?: ElementOrString<E>): E | undefined;
/**
 * Returns the identifier (ID) of the element or creates it if the element has no ID.<br>
 * Возвращает идентификатор (ID) элемента или создает его, если у элемента нет ID.
 * @param element element from which you obtain an ID /<br>элемент, с которого получаете ID
 * @param selector selectors for matching /<br>селекторов для сопоставления
 */
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;
/**
 * Returns the value of an element by its key.<br>
 * Возвращает значение элемента по его ключу.
 * @param element checked element /<br>проверяемый элемент
 * @param index index at which we retrieve values /<br>индекс, по которому получаем значения
 * @param defaultValue returns this parameter if the value is missing /<br>возвращает этот параметр,
 * если значение отсутствует
 */
export declare function getElementItem<T extends ElementOrWindow, K extends keyof T, D>(element: ElementOrString<T>, index: K | string, defaultValue?: D): T[K] | D | undefined;
/**
 * Gets a list of attributes of an element.<br>
 * Получает список атрибутов у элемента.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export declare function getAttributes<E extends ElementOrWindow>(element?: ElementOrString<E>): Record<string, string | undefined>;
/**
 * Modifies the value of an element identified by its key.<br>
 * Изменяет значение элемента, определенного ключом.
 * @param element checked element /<br>проверяемый элемент
 * @param index index at which we retrieve values /<br>индекс, по которому получаем значения
 * @param value new value /<br>новое значение
 */
export declare function setElementItem<E extends ElementOrWindow, K extends keyof E, V extends E[K] = E[K]>(element: ElementOrString<E>, index: K, value: V | Record<string, V>): E | undefined;
/**
 * In HTML documents, creates an element with the tag that is specified in the argument.<br>
 * В HTML-документах создаёт элемент с тегом, который указан в аргументе.
 * @param parentElement the DOM node's parent Element /<br>родитель для нового элемента
 * @param tagName A string that specifies the type of element to be created /<br>строка,
 * указывающая элемент какого типа должен быть создан
 * @param options an object with attributes or a function for processing an element /<br>объект
 * с атрибутами или функция для обработки элемента
 * @param referenceElement the node before which newNode is inserted /<br>элемент,
 * перед которым будет вставлен newElement
 */
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void), referenceElement?: HTMLElement): T;
