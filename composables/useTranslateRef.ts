import { type ShallowRef, shallowRef, watchEffect } from 'vue'

import { GeoRef } from '../classes/GeoRef'
import { Translate, type TranslateList } from '../classes/Translate'

/**
 * Getting the translated text by an array of keys or a string with a key.<br>
 * Получение переведенного текста по массиву ключей или строке с ключом.
 * @param names a string or an array with keys /<br>строка или массив с ключами
 */
export function useTranslateRef<
  T extends string[]
> (
  names: T
): ShallowRef<TranslateList<T>> {
  const translate = shallowRef<TranslateList<T>>({} as TranslateList<T>)

  watchEffect(async () => {
    if (GeoRef.getLanguage()) {
      translate.value = await Translate.getList(names)
    }
  })

  return translate
}

/**
 * Getting the translated text by an array of keys or a string with a key.<br>
 * Получение переведенного текста по массиву ключей или строке с ключом.
 * @param names a string or an array with keys /<br>строка или массив с ключами
 */
export const t = <T extends string[]> (names: T) => useTranslateRef(names)
