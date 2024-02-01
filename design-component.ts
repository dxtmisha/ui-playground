import { type App, createApp } from 'vue'

import { MutationGlobal } from './classes/mutation/MutationGlobal'

import functions from './functions/all.ts'
import classes from './classes/all.ts'

import m2 from './m2/components.ts'
import m3 from './m3/components.ts'
import c1 from './c1/components.ts'
import c2 from './c2/components.ts'

import M2Icon from './m2/Icon/M2Icon.vue'
import M2Image from './m2/Image/M2Image.vue'
import M2Ripple from './m2/Ripple/M2Ripple.vue'
import M3Button from './m3/Button/M3Button.vue'
import M3Checkbox from './m3/Checkbox/M3Checkbox.vue'
import M3Chip from './m3/Chip/M3Chip.vue'
import M3FieldMessage from './m3/FieldMessage/M3FieldMessage.vue'
import M3Icon from './m3/Icon/M3Icon.vue'
import M3Image from './m3/Image/M3Image.vue'
import M3Input from './m3/Input/M3Input.vue'
import M3Mask from './m3/Mask/M3Mask.vue'
import M3Mutation from './m3/Mutation/M3Mutation.vue'
import M3MutationItem from './m3/MutationItem/M3MutationItem.vue'
import M3Progress from './m3/Progress/M3Progress.vue'
import M3Ripple from './m3/Ripple/M3Ripple.vue'
import M3Scrollbar from './m3/Scrollbar/M3Scrollbar.vue'
import M3Window from './m3/Window/M3Window.vue'
import C1Icon from './c1/Icon/C1Icon.vue'
import C1Image from './c1/Image/C1Image.vue'
import C2Button from './c2/Button/C2Button.vue'
import C2Icon from './c2/Icon/C2Icon.vue'
import C2Image from './c2/Image/C2Image.vue'
import C2Progress from './c2/Progress/C2Progress.vue'

MutationGlobal.addFunctionList(functions)
MutationGlobal.addClassList(classes)
MutationGlobal.addComponentList(m2)
MutationGlobal.addComponentList(m3)
MutationGlobal.addComponentList(c1)
MutationGlobal.addComponentList(c2)

;(window as any).UI = MutationGlobal

export function initComponents (App: any): App<Element> {
  const app = createApp(App)

  app.component('M2Icon', M2Icon)
  app.component('M2Image', M2Image)
  app.component('M2Ripple', M2Ripple)
  app.component('M3Button', M3Button)
  app.component('M3Checkbox', M3Checkbox)
  app.component('M3Chip', M3Chip)
  app.component('M3FieldMessage', M3FieldMessage)
  app.component('M3Icon', M3Icon)
  app.component('M3Image', M3Image)
  app.component('M3Input', M3Input)
  app.component('M3Mask', M3Mask)
  app.component('M3Mutation', M3Mutation)
  app.component('M3MutationItem', M3MutationItem)
  app.component('M3Progress', M3Progress)
  app.component('M3Ripple', M3Ripple)
  app.component('M3Scrollbar', M3Scrollbar)
  app.component('M3Window', M3Window)
  app.component('C1Icon', C1Icon)
  app.component('C1Image', C1Image)
  app.component('C2Button', C2Button)
  app.component('C2Icon', C2Icon)
  app.component('C2Image', C2Image)
  app.component('C2Progress', C2Progress)

  return app
}
