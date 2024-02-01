import {
  executeFunction,
  forEach,
  isArray,
  isFilled,
  isFunction,
  isNull,
  isObject,
  isObjectNotArray,
  isSelected,
  isSelectedByList,
  isString,
  transformation
} from './data.ts'

import {
  toDate
} from './date.ts'

import {
  createElement,
  isInDom,
  isWindow,
  getAttributes,
  getElement,
  getElementId,
  getElementItem,
  getElementOrWindow,
  setElementItem
} from './element.ts'

import {
  getClient,
  getClientX,
  getClientY,
  getKey,
  makeStopPropagation
} from './event.ts'

import {
  frame
} from './frame.ts'

import {
  isIntegerBetween,
  random,
  toNumber
} from './number.ts'

import {
  arrFill,
  copyObject,
  inArray,
  isDifferent,
  intersectKey,
  getColumn,
  getMaxLength,
  getMinLength,
  replaceRecursive,
  splice,
  toArray,
  uniqueArray
} from './object.ts'

import {
  getBindRef,
  getRef,
  render,
  toRefItem
} from './ref.ts'

import {
  getBind,
  getClassName,
  getIndex
} from './render.ts'

import {
  anyToString,
  getClipboardData,
  getExp,
  replaceTemplate,
  strFill,
  toCamelCase,
  toCamelCaseFirst,
  toKebabCase
} from './string.ts'

export default {
  // data
  executeFunction,
  forEach,
  isArray,
  isFilled,
  isFunction,
  isNull,
  isObject,
  isObjectNotArray,
  isSelected,
  isSelectedByList,
  isString,
  transformation,

  // date
  toDate,

  // element
  createElement,
  isInDom,
  isWindow,
  getAttributes,
  getElement,
  getElementId,
  getElementItem,
  getElementOrWindow,
  setElementItem,

  // event
  getClient,
  getClientX,
  getClientY,
  getKey,
  makeStopPropagation,

  // frame
  frame,

  // number
  isIntegerBetween,
  random,
  toNumber,

  // object
  arrFill,
  copyObject,
  inArray,
  isDifferent,
  intersectKey,
  getColumn,
  getMaxLength,
  getMinLength,
  replaceRecursive,
  splice,
  toArray,
  uniqueArray,

  // ref
  getBindRef,
  getRef,
  render,
  toRefItem,

  // render
  getBind,
  getClassName,
  getIndex,

  // string
  anyToString,
  getClipboardData,
  getExp,
  replaceTemplate,
  strFill,
  toCamelCase,
  toCamelCaseFirst,
  toKebabCase
}
