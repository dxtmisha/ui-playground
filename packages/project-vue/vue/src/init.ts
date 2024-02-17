import { type App } from 'vue'

import translateList from './../dev/public/translate.json'

export const translate: string[] = [
  // TODO: list of translation keys that need to be obtained before initializing the component
  // TODO: список ключей переводов, которые надо получить перед инициализацией компонента
  ...Object.keys(translateList)
]

export const init = async (app: App): Promise<void> => {
  // TODO: place to connect plugins for vue
  // TODO: место для подключения плагинов для vue
  console.log('App', app)
}
