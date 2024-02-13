import { type Ref, ref, watchEffect } from 'vue'
import { isArray } from '../functions/data'

import { GeoRef } from '../classes/GeoRef'
import { Translate } from '../classes/Translate'

/**
 * Getting the translated text by an array of keys or a string with a key.<br>
 * Получение переведенного текста по массиву ключей или строке с ключом.
 * @param names a string or an array with keys /<br>строка или массив с ключами
 */
export function useTranslateRef (
  names: string | string[]
): Ref<string | Record<string, string>> {
  const translate = ref<string | Record<string, string>>('')

  watchEffect(async () => {
    if (GeoRef.getLanguage()) {
      translate.value = isArray(names)
        ? await Translate.getList(names)
        : await Translate.get(names)
    }
  })

  return translate
}

/**
 * Getting the translated text by an array of keys or a string with a key.<br>
 * Получение переведенного текста по массиву ключей или строке с ключом.
 * @param names a string or an array with keys /<br>строка или массив с ключами
 */
export const t = (names: string | string[]) => useTranslateRef(names)
