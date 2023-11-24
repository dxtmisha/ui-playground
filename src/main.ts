import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { Icons } from '../classes/Icons.ts'

import iconVue from './assets/vue.svg'

Icons.add('vue', iconVue)

createApp(App).mount('#app')
