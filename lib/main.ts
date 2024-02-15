// This file is generated by a script, do not edit.
// Этот файл генерируется скриптом, не редактировать.

import { MutationGlobal } from './../classes/mutation/MutationGlobal'
import { MutationGlobalRef } from './../classes/mutation/MutationGlobalRef'

import * as functions from './../functions/all'
import * as classes from './../classes/all'
import { components } from './components'

MutationGlobal.addFunctionList(functions)
MutationGlobal.addClassList(classes)
MutationGlobal.addComponentList(components)

;(window as any).UI = MutationGlobal
;(window as any).UI_VUE = MutationGlobalRef

export * from './create'
export * from './index'
