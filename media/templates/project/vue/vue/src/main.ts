import { createApp } from 'vue'
import { registrationUiComponents } from 'ui/lib/main.ts'

import App from '../src/App.vue'

import 'ui/design-style.scss'

import '../src/tailwind.css'
import '../src/style.scss'

createApp(App)
  .use(registrationUiComponents)
  .mount('#app')
