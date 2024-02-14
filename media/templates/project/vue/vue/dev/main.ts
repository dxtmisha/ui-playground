import { createApp, type Plugin } from 'vue'
import { registrationUiComponents, Translate } from 'ui'

import 'ui/dist/style.css'
import '../src/style.scss'

import App from './../src/App.vue'

import './../src/tailwind.css'

import { init, translate } from './../src/init'

import { createRouter } from 'vue-router'
import { router } from './../src/router'

Translate.add(translate).then(() => {
  const app = createApp(App)

  app.use(createRouter(router) as Plugin<[]>)

  registrationUiComponents(app)
  init(app)

  app.mount('#app')
})
