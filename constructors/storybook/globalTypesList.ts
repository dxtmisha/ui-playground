import { GeoRef } from '../../classes/GeoRef.ts'

/**
 * We get the settings object for the theme.<br>
 * Получаем объект настроек для темы.
 * @param title name for the button /<br>название для кнопки
 */
export const theme = (title: string = 'Theme') => ({
  defaultValue: 'light',
  toolbar: {
    title,
    icon: 'paintbrush',
    items: ['light', 'dark'],
    dynamicTitle: true
  }
})

/**
 * We get the settings object for language selection.<br>
 * Получаем объект настроек для выбора языка.
 * @param title name for the button /<br>название для кнопки
 * @param items list of languages /<br>список языков
 */
export const language = (
  title: string = 'Language',
  items: string[] = [
    'en-US',
    'en-GB',
    'ru-RU',
    'ko-KR',
    'vn-VN'
  ]
) => ({
  defaultValue: GeoRef.getStandard(),
  toolbar: {
    title,
    icon: 'globe',
    items,
    dynamicTitle: true
  }
})
