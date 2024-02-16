import './../src/style.scss'

import App from './../src/App.vue'

import './../src/tailwind.css'

import { router } from '../src/router.ts'
import { store } from '../src/store.ts'
import { init, translate } from '../src/init.ts'

(window as any).UI_VUE.addComponent(
  import.meta.env.BASE_URL,
  App,
  router,
  store,
  init,
  translate
)
