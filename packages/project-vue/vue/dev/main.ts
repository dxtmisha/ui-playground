import { createApp, type Plugin } from 'vue'
import { isFilled, Translate } from 'ui'
import { registrationUiComponents } from 'ui/create'

import 'ui/style'
import 'ui/dist/style.css'
import '../src/style.scss'

import App from './../src/App.vue'

import './../src/tailwind.css'

import { init, translate } from './../src/init'

import { createRouter } from 'vue-router'
import { router } from './../src/router'

import { createStore } from 'vuex'
import { store } from './../src/store'

Translate.add(translate).then(() => {
  const app = createApp(App)

  if (isFilled(router.routes)) {
    app.use(createRouter(router) as Plugin<[]>)
  }

  app.use(createStore(store))

  registrationUiComponents(app)
  init(app)

  app.mount('#app')
})
