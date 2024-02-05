import App from './App.vue'

import './style.css'

const windowIndex = '__UI_PROJECT'
const windowItem = window as any
const windowPath = 'path'

if (windowIndex in windowItem) {
    windowItem[windowIndex][windowPath] = {}
} else {
    windowItem[windowIndex] = {
        [windowPath]: {
            item: App
        }
    }
}
