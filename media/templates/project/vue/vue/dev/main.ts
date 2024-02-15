import { createApp, type Plugin } from 'vue'
import { isFilled, registrationUiComponents, Translate } from 'ui'

import 'ui/dist/style.css'
import '../src/style.scss'

import App from './../src/App.vue'

import './../src/tailwind.css'

import { init, translate } from './../src/init'

import { createRouter } from 'vue-router'
import { router } from './../src/router'

Translate.add(translate).then(() => {
  const app = createApp(App)

  if (isFilled(router.routes)) {
    app.use(createRouter(router) as Plugin<[]>)
  }

  registrationUiComponents(app)
  init(app)

  app.mount('#app')
})
