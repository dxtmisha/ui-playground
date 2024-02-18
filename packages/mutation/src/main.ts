import { createUiComponents } from 'ui/main'

import 'ui/style-init'
import 'ui/style.css'

import App from './App.vue'

import './tailwind.css'

createUiComponents(App).then(app => app.mount('#ui-app-mutation'))
