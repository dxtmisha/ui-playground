import { computed, ComputedRef, Ref, ref } from 'vue'
import {
  getCountry,
  getGeo,
  getGeoCode,
  getGeoStandard,
  getLanguage,
  setGeo
} from '../../functions/geo.ts'

import { GeoType } from '../../types/geo.ts'

export type GeoRefType = {
  geo: Ref<GeoType | undefined>
  geoStandard: ComputedRef<string>
  geoCode: ComputedRef<string>
  language: ComputedRef<string>
  country: ComputedRef<string>
  setGeo: (code: string, save?: boolean) => void
}

const geo = ref<GeoType | undefined>(getGeo())

const geoStandard = computed<string>(() => (geo.value && getGeoStandard()) || 'en-GB')
const geoCode = computed<string>(() => (geo.value && getGeoCode()) || 'en-GB')
const language = computed<string>(() => (geo.value && getLanguage()) || 'en')
const country = computed<string>(() => (geo.value && getCountry()) || 'GB')

const set = (code: string, save?: boolean) => {
  setGeo(code, save)
  geo.value = getGeo()
}

/**
 * Creates a reactive variable to get data about the current country.<br>
 * Создает реактивную переменную для получения данных о текущей стране.
 */
export function useGeoRef (): GeoRefType {
  return {
    geo,
    geoStandard,
    geoCode,
    language,
    country,
    setGeo: set
  }
}
