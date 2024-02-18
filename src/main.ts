import { createUiComponents } from '../lib/main.ts'

import App from './App.vue'

import './../lib/style.scss'
import './style.scss'

createUiComponents(App).then(app => app.mount('#app'))
