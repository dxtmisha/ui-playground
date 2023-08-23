import { shallowReactive, shallowReadonly } from 'vue'
import {
  getCountry,
  getGeo,
  getGeoCode,
  getGeoStandard,
  getLanguage,
  setGeo
} from '../functions/geo.ts'

import { GeoType } from '../types/geo.ts'

export type GeoRefType = {
  geo: GeoType
  standard: string
  location: string
  language: string
  country: string
  setGeo: (code: string, save?: boolean) => void
}

const set = (code: string, save?: boolean) => {
  setGeo(code, save)

  item.geo = getGeo()
  item.standard = getGeoStandard()
  item.location = getGeoCode()
  item.language = getLanguage()
  item.country = getCountry()
}

const item = shallowReactive<GeoRefType>({
  geo: getGeo(),
  standard: getGeoStandard(),
  location: getGeoCode(),
  language: getLanguage(),
  country: getCountry(),
  setGeo: set
})

/**
 * Creates a reactive variable to get data about the current country.<br>
 * Создает реактивную переменную для получения данных о текущей стране.
 */
export function useGeo (): Readonly<GeoRefType> {
  return shallowReadonly(item)
}
