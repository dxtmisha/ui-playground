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
} from './data'

import {
  toDate
} from './date'

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
} from './element'

import {
  getClient,
  getClientX,
  getClientY,
  getKey,
  makeStopPropagation
} from './event'

import {
  frame
} from './frame'

import {
  isIntegerBetween,
  random,
  toNumber
} from './number'

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
} from './object'

import {
  getBindRef,
  getRef,
  render,
  toRefItem
} from './ref'

import {
  getBind,
  getClassName,
  getIndex
} from './render'

import {
  anyToString,
  getClipboardData,
  getExp,
  replaceTemplate,
  strFill,
  toCamelCase,
  toCamelCaseFirst,
  toKebabCase
} from './string'

export {
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
