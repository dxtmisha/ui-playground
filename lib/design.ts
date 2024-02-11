import { MutationGlobal } from './../classes/mutation/MutationGlobal'
import { MutationGlobalRef } from './../classes/mutation/MutationGlobalRef.ts'

import * as functions from './../functions/all.ts'
import * as classes from './../classes/all.ts'
import * as components from './components.ts'

MutationGlobal.addFunctionList(functions)
MutationGlobal.addClassList(classes)
MutationGlobal.addComponentList(components)

;(window as any).UI = MutationGlobal
;(window as any).UI_VUE = MutationGlobalRef

export { createUiComponents } from './create.ts'
