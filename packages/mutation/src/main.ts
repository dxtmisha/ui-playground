import { createUiComponents } from 'ui/main'

import 'ui/style.css'

import App from './App.vue'

createUiComponents(App).then(app => app.mount('#app'))
