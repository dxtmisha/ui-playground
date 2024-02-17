import { forEach } from '../functions/data'

import { Geo } from './Geo'
import { GeoIntl } from './GeoIntl'
import {
  type GeoFlagItem,
  type GeoFlagNational,
  type GeoItemFull
} from '../types/geo'

/**
 * Class for working with Flags.<br>
 * Класс для работы с Флагами.
 */
export class GeoFlag {
  static flags: Record<string, string> = {
    AD: '@flag-ad',
    AE: '@flag-ae',
    AF: '@flag-af',
    AG: '@flag-ag',
    AI: '@flag-ai',
    AL: '@flag-al',
    AM: '@flag-am',
    AN: '@flag-an',
    AO: '@flag-ao',
    AQ: '@flag-aq',
    AR: '@flag-ar',
    AS: '@flag-as',
    AT: '@flag-at',
    AU: '@flag-au',
    AW: '@flag-aw',
    AX: '@flag-ax',
    AZ: '@flag-az',
    BA: '@flag-ba',
    BB: '@flag-bb',
    BD: '@flag-bd',
    BE: '@flag-be',
    BF: '@flag-bf',
    BG: '@flag-bg',
    BH: '@flag-bh',
    BI: '@flag-bi',
    BJ: '@flag-bj',
    BL: '@flag-bl',
    BM: '@flag-bm',
    BN: '@flag-bn',
    BO: '@flag-bo',
    BQ: '@flag-bq',
    BR: '@flag-br',
    BS: '@flag-bs',
    BT: '@flag-bt',
    BV: '@flag-bv',
    BW: '@flag-bw',
    BY: '@flag-by',
    BZ: '@flag-bz',
    CA: '@flag-ca',
    CC: '@flag-cc',
    CD: '@flag-cd',
    CF: '@flag-cf',
    CG: '@flag-cg',
    CH: '@flag-ch',
    CI: '@flag-ci',
    CK: '@flag-ck',
    CL: '@flag-cl',
    CM: '@flag-cm',
    CN: '@flag-cn',
    CO: '@flag-co',
    CR: '@flag-cr',
    CU: '@flag-cu',
    CV: '@flag-cv',
    CW: '@flag-cw',
    CX: '@flag-cx',
    CY: '@flag-cy',
    CZ: '@flag-cz',
    DE: '@flag-de',
    DJ: '@flag-dj',
    DK: '@flag-dk',
    DM: '@flag-dm',
    DO: '@flag-do',
    DZ: '@flag-dz',
    EC: '@flag-ec',
    EE: '@flag-ee',
    EG: '@flag-eg',
    EH: '@flag-eh',
    ER: '@flag-er',
    ES: '@flag-es',
    ET: '@flag-et',
    FI: '@flag-fi',
    FJ: '@flag-fj',
    FK: '@flag-fk',
    FM: '@flag-fm',
    FO: '@flag-fo',
    FR: '@flag-fr',
    GA: '@flag-ga',
    GB: '@flag-gb',
    GD: '@flag-gd',
    GE: '@flag-ge',
    GF: '@flag-gf',
    GG: '@flag-gg',
    GH: '@flag-gh',
    GI: '@flag-gi',
    GL: '@flag-gl',
    GM: '@flag-gm',
    GN: '@flag-gn',
    GP: '@flag-gp',
    GQ: '@flag-gq',
    GR: '@flag-gr',
    GT: '@flag-gt',
    GU: '@flag-gu',
    GW: '@flag-gw',
    GY: '@flag-gy',
    HK: '@flag-hk',
    HM: '@flag-hm',
    HN: '@flag-hn',
    HR: '@flag-hr',
    HT: '@flag-ht',
    HU: '@flag-hu',
    ID: '@flag-id',
    IE: '@flag-ie',
    IL: '@flag-il',
    IM: '@flag-im',
    IN: '@flag-in',
    IO: '@flag-io',
    IQ: '@flag-iq',
    IR: '@flag-ir',
    IS: '@flag-is',
    IT: '@flag-it',
    JE: '@flag-je',
    JM: '@flag-jm',
    JO: '@flag-jo',
    JP: '@flag-jp',
    KE: '@flag-ke',
    KG: '@flag-kg',
    KH: '@flag-kh',
    KI: '@flag-ki',
    KM: '@flag-km',
    KN: '@flag-kn',
    KP: '@flag-kp',
    KR: '@flag-kr',
    KW: '@flag-kw',
    KY: '@flag-ky',
    KZ: '@flag-kz',
    LA: '@flag-la',
    LB: '@flag-lb',
    LC: '@flag-lc',
    LI: '@flag-li',
    LK: '@flag-lk',
    LR: '@flag-lr',
    LS: '@flag-ls',
    LT: '@flag-lt',
    LU: '@flag-lu',
    LV: '@flag-lv',
    LY: '@flag-ly',
    MA: '@flag-ma',
    MC: '@flag-mc',
    MD: '@flag-md',
    ME: '@flag-me',
    MF: '@flag-mf',
    MG: '@flag-mg',
    MH: '@flag-mh',
    MK: '@flag-mk',
    ML: '@flag-ml',
    MM: '@flag-mm',
    MN: '@flag-mn',
    MO: '@flag-mo',
    MP: '@flag-mp',
    MQ: '@flag-mq',
    MR: '@flag-mr',
    MS: '@flag-ms',
    MT: '@flag-mt',
    MU: '@flag-mu',
    MV: '@flag-mv',
    MW: '@flag-mw',
    MX: '@flag-mx',
    MY: '@flag-my',
    MZ: '@flag-mz',
    NA: '@flag-na',
    NC: '@flag-nc',
    NE: '@flag-ne',
    NF: '@flag-nf',
    NG: '@flag-ng',
    NI: '@flag-ni',
    NL: '@flag-nl',
    NO: '@flag-no',
    NP: '@flag-np',
    NR: '@flag-nr',
    NU: '@flag-nu',
    NZ: '@flag-nz',
    OM: '@flag-om',
    PA: '@flag-pa',
    PE: '@flag-pe',
    PF: '@flag-pf',
    PG: '@flag-pg',
    PH: '@flag-ph',
    PK: '@flag-pk',
    PL: '@flag-pl',
    PM: '@flag-pm',
    PN: '@flag-pn',
    PR: '@flag-pr',
    PS: '@flag-ps',
    PT: '@flag-pt',
    PW: '@flag-pw',
    PY: '@flag-py',
    QA: '@flag-qa',
    RE: '@flag-re',
    RO: '@flag-ro',
    RS: '@flag-rs',
    RU: '@flag-ru',
    RW: '@flag-rw',
    SA: '@flag-sa',
    SB: '@flag-sb',
    SC: '@flag-sc',
    SD: '@flag-sd',
    SE: '@flag-se',
    SG: '@flag-sg',
    SH: '@flag-sh',
    SI: '@flag-si',
    SJ: '@flag-sj',
    SK: '@flag-sk',
    SL: '@flag-sl',
    SM: '@flag-sm',
    SN: '@flag-sn',
    SO: '@flag-so',
    SR: '@flag-sr',
    SS: '@flag-ss',
    ST: '@flag-st',
    SV: '@flag-sv',
    SX: '@flag-sx',
    SY: '@flag-sy',
    SZ: '@flag-sz',
    TC: '@flag-tc',
    TD: '@flag-td',
    TG: '@flag-tg',
    TH: '@flag-th',
    TJ: '@flag-tj',
    TK: '@flag-tk',
    TL: '@flag-tl',
    TM: '@flag-tm',
    TN: '@flag-tn',
    TO: '@flag-to',
    TR: '@flag-tr',
    TT: '@flag-tt',
    TV: '@flag-tv',
    TW: '@flag-tw',
    TZ: '@flag-tz',
    UA: '@flag-ua',
    UG: '@flag-ug',
    US: '@flag-us',
    UY: '@flag-uy',
    UZ: '@flag-uz',
    VA: '@flag-va',
    VC: '@flag-vc',
    VE: '@flag-ve',
    VG: '@flag-vg',
    VI: '@flag-vi',
    VN: '@flag-vn',
    VU: '@flag-vu',
    WF: '@flag-wf',
    WS: '@flag-ws',
    YE: '@flag-ye',
    YT: '@flag-yt',
    ZA: '@flag-za',
    ZM: '@flag-zm',
    ZW: '@flag-zw'
  }

  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected code: string = Geo.getLocation()
  ) {
  }

  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get (code = this.code): GeoFlagItem | undefined {
    const data = Geo.find(code)

    if (data) {
      const country = this.getCountry(data)

      return {
        language: this.getLanguage(data),
        country,
        standard: data.standard,
        icon: GeoFlag.flags?.[data.country],
        label: country,
        value: data.country
      }
    }

    return undefined
  }

  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag (code = this.code): string | undefined {
    return this.get(code)?.icon
  }

  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList (codes?: string[]): GeoFlagItem[] {
    return forEach(this.getCodes(codes), code => this.get(code)) as GeoFlagItem[]
  }

  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational (codes?: string[]): GeoFlagNational[] {
    return forEach(this.getList(codes), item => {
      const geo = new GeoFlag(item.language).get(item.standard)

      return {
        ...item,
        nationalLanguage: geo?.language,
        nationalCountry: geo?.country
      }
    }) as GeoFlagNational[]
  }

  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode (code: string): this {
    this.code = code
    return this
  }

  /**
   * Returns a special object for formatting.<br>
   * Возвращает специальный объект для работы с форматированием.
   */
  protected getLocation () {
    return new GeoIntl(this.code)
  }

  /**
   * Returns a list of countries to retrieve data from.<br>
   * Возвращает список стран для получения данных.
   * @param codes country code /<br>код страны
   */
  protected getCodes (codes?: string[]): string[] {
    return codes ?? Object.keys(GeoFlag.flags)
  }

  /**
   * Getting the name of the language.<br>
   * Получение названия языка.
   * @param data object with information of data /<br>объект с информацией данных
   */
  protected getLanguage (data: GeoItemFull): string {
    return this.getLocation().languageName(data.language)
  }

  /**
   * Getting the name of the country.<br>
   * Получение названия страны.
   * @param data object with information of data /<br>объект с информацией данных
   */
  protected getCountry (data: GeoItemFull): string {
    return this.getLocation().countryName(data.country)
  }
}
