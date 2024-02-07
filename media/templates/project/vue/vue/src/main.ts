import { createApp } from 'vue'
import { uiMakeComponents } from 'ui/design-component.ts'

import App from '../src/App.vue'

import 'ui/design-style.scss'

import '../src/tailwind.css'
import '../src/style.scss'

createApp(App)
  .use(uiMakeComponents)
  .mount('#app')
