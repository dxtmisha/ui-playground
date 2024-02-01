import { MutationGlobal } from './classes/mutation/MutationGlobal'

import functions from './functions/all.ts'
import classes from './classes/all.ts'

import m2 from './m2/components.ts'
import m3 from './m3/components.ts'
import c1 from './c1/components.ts'
import c2 from './c2/components.ts'

MutationGlobal.addFunctionList(functions)
MutationGlobal.addClassList(classes)
MutationGlobal.addComponentList(m2)
MutationGlobal.addComponentList(m3)
MutationGlobal.addComponentList(c1)
MutationGlobal.addComponentList(c2)
