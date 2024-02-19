import { createUiComponents } from 'ui/main'

import 'ui/style-init'
import 'ui/style-components'
import './styles.scss'

import App from './App.vue'

createUiComponents(App).then(app => app.mount('#ui-app-mutation'))
