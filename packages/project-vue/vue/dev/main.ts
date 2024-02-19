import { createApp, type Plugin } from 'vue'
import { isFilled, Translate } from 'ui'
import { registrationUiComponents } from 'ui/create'

import 'ui/style-main'
import 'ui/style-components'
import '../src/style.scss'

import App from './../src/App.vue'

import './../src/tailwind.css'

import { init, translate } from './../src/init'

import { createRouter } from 'vue-router'
import { router } from './../src/router'

import { createStore } from 'vuex'
import { store } from './../src/store'

Translate.add(translate).then(async () => {
  const app = createApp(App)

  if (isFilled(router.routes)) {
    app.use(createRouter(router) as Plugin<[]>)
  }

  app.use(createStore(store))

  await registrationUiComponents(app)
  await init(app)

  app.mount('#app')
})
