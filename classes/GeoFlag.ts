import { forEach } from '../functions/data'

import { Geo } from './Geo'
import { GeoIntl } from './GeoIntl'
import {
  type GeoFlagItem,
  type GeoFlagNational,
  type GeoItemFull
} from '../types/geo'

export const GEO_FLAG_ICON_NAME = '@flag'

/**
 * Class for working with Flags.<br>
 * Класс для работы с Флагами.
 */
export class GeoFlag {
  static flags: Record<string, string> = {
    AD: `${GEO_FLAG_ICON_NAME}-ad`,
    AE: `${GEO_FLAG_ICON_NAME}-ae`,
    AF: `${GEO_FLAG_ICON_NAME}-af`,
    AG: `${GEO_FLAG_ICON_NAME}-ag`,
    AI: `${GEO_FLAG_ICON_NAME}-ai`,
    AL: `${GEO_FLAG_ICON_NAME}-al`,
    AM: `${GEO_FLAG_ICON_NAME}-am`,
    AN: `${GEO_FLAG_ICON_NAME}-an`,
    AO: `${GEO_FLAG_ICON_NAME}-ao`,
    AQ: `${GEO_FLAG_ICON_NAME}-aq`,
    AR: `${GEO_FLAG_ICON_NAME}-ar`,
    AS: `${GEO_FLAG_ICON_NAME}-as`,
    AT: `${GEO_FLAG_ICON_NAME}-at`,
    AU: `${GEO_FLAG_ICON_NAME}-au`,
    AW: `${GEO_FLAG_ICON_NAME}-aw`,
    AX: `${GEO_FLAG_ICON_NAME}-ax`,
    AZ: `${GEO_FLAG_ICON_NAME}-az`,
    BA: `${GEO_FLAG_ICON_NAME}-ba`,
    BB: `${GEO_FLAG_ICON_NAME}-bb`,
    BD: `${GEO_FLAG_ICON_NAME}-bd`,
    BE: `${GEO_FLAG_ICON_NAME}-be`,
    BF: `${GEO_FLAG_ICON_NAME}-bf`,
    BG: `${GEO_FLAG_ICON_NAME}-bg`,
    BH: `${GEO_FLAG_ICON_NAME}-bh`,
    BI: `${GEO_FLAG_ICON_NAME}-bi`,
    BJ: `${GEO_FLAG_ICON_NAME}-bj`,
    BL: `${GEO_FLAG_ICON_NAME}-bl`,
    BM: `${GEO_FLAG_ICON_NAME}-bm`,
    BN: `${GEO_FLAG_ICON_NAME}-bn`,
    BO: `${GEO_FLAG_ICON_NAME}-bo`,
    BQ: `${GEO_FLAG_ICON_NAME}-bq`,
    BR: `${GEO_FLAG_ICON_NAME}-br`,
    BS: `${GEO_FLAG_ICON_NAME}-bs`,
    BT: `${GEO_FLAG_ICON_NAME}-bt`,
    BV: `${GEO_FLAG_ICON_NAME}-bv`,
    BW: `${GEO_FLAG_ICON_NAME}-bw`,
    BY: `${GEO_FLAG_ICON_NAME}-by`,
    BZ: `${GEO_FLAG_ICON_NAME}-bz`,
    CA: `${GEO_FLAG_ICON_NAME}-ca`,
    CC: `${GEO_FLAG_ICON_NAME}-cc`,
    CD: `${GEO_FLAG_ICON_NAME}-cd`,
    CF: `${GEO_FLAG_ICON_NAME}-cf`,
    CG: `${GEO_FLAG_ICON_NAME}-cg`,
    CH: `${GEO_FLAG_ICON_NAME}-ch`,
    CI: `${GEO_FLAG_ICON_NAME}-ci`,
    CK: `${GEO_FLAG_ICON_NAME}-ck`,
    CL: `${GEO_FLAG_ICON_NAME}-cl`,
    CM: `${GEO_FLAG_ICON_NAME}-cm`,
    CN: `${GEO_FLAG_ICON_NAME}-cn`,
    CO: `${GEO_FLAG_ICON_NAME}-co`,
    CR: `${GEO_FLAG_ICON_NAME}-cr`,
    CU: `${GEO_FLAG_ICON_NAME}-cu`,
    CV: `${GEO_FLAG_ICON_NAME}-cv`,
    CW: `${GEO_FLAG_ICON_NAME}-cw`,
    CX: `${GEO_FLAG_ICON_NAME}-cx`,
    CY: `${GEO_FLAG_ICON_NAME}-cy`,
    CZ: `${GEO_FLAG_ICON_NAME}-cz`,
    DE: `${GEO_FLAG_ICON_NAME}-de`,
    DJ: `${GEO_FLAG_ICON_NAME}-dj`,
    DK: `${GEO_FLAG_ICON_NAME}-dk`,
    DM: `${GEO_FLAG_ICON_NAME}-dm`,
    DO: `${GEO_FLAG_ICON_NAME}-do`,
    DZ: `${GEO_FLAG_ICON_NAME}-dz`,
    EC: `${GEO_FLAG_ICON_NAME}-ec`,
    EE: `${GEO_FLAG_ICON_NAME}-ee`,
    EG: `${GEO_FLAG_ICON_NAME}-eg`,
    EH: `${GEO_FLAG_ICON_NAME}-eh`,
    ER: `${GEO_FLAG_ICON_NAME}-er`,
    ES: `${GEO_FLAG_ICON_NAME}-es`,
    ET: `${GEO_FLAG_ICON_NAME}-et`,
    FI: `${GEO_FLAG_ICON_NAME}-fi`,
    FJ: `${GEO_FLAG_ICON_NAME}-fj`,
    FK: `${GEO_FLAG_ICON_NAME}-fk`,
    FM: `${GEO_FLAG_ICON_NAME}-fm`,
    FO: `${GEO_FLAG_ICON_NAME}-fo`,
    FR: `${GEO_FLAG_ICON_NAME}-fr`,
    GA: `${GEO_FLAG_ICON_NAME}-ga`,
    GB: `${GEO_FLAG_ICON_NAME}-gb`,
    GD: `${GEO_FLAG_ICON_NAME}-gd`,
    GE: `${GEO_FLAG_ICON_NAME}-ge`,
    GF: `${GEO_FLAG_ICON_NAME}-gf`,
    GG: `${GEO_FLAG_ICON_NAME}-gg`,
    GH: `${GEO_FLAG_ICON_NAME}-gh`,
    GI: `${GEO_FLAG_ICON_NAME}-gi`,
    GL: `${GEO_FLAG_ICON_NAME}-gl`,
    GM: `${GEO_FLAG_ICON_NAME}-gm`,
    GN: `${GEO_FLAG_ICON_NAME}-gn`,
    GP: `${GEO_FLAG_ICON_NAME}-gp`,
    GQ: `${GEO_FLAG_ICON_NAME}-gq`,
    GR: `${GEO_FLAG_ICON_NAME}-gr`,
    GT: `${GEO_FLAG_ICON_NAME}-gt`,
    GU: `${GEO_FLAG_ICON_NAME}-gu`,
    GW: `${GEO_FLAG_ICON_NAME}-gw`,
    GY: `${GEO_FLAG_ICON_NAME}-gy`,
    HK: `${GEO_FLAG_ICON_NAME}-hk`,
    HM: `${GEO_FLAG_ICON_NAME}-hm`,
    HN: `${GEO_FLAG_ICON_NAME}-hn`,
    HR: `${GEO_FLAG_ICON_NAME}-hr`,
    HT: `${GEO_FLAG_ICON_NAME}-ht`,
    HU: `${GEO_FLAG_ICON_NAME}-hu`,
    ID: `${GEO_FLAG_ICON_NAME}-id`,
    IE: `${GEO_FLAG_ICON_NAME}-ie`,
    IL: `${GEO_FLAG_ICON_NAME}-il`,
    IM: `${GEO_FLAG_ICON_NAME}-im`,
    IN: `${GEO_FLAG_ICON_NAME}-in`,
    IO: `${GEO_FLAG_ICON_NAME}-io`,
    IQ: `${GEO_FLAG_ICON_NAME}-iq`,
    IR: `${GEO_FLAG_ICON_NAME}-ir`,
    IS: `${GEO_FLAG_ICON_NAME}-is`,
    IT: `${GEO_FLAG_ICON_NAME}-it`,
    JE: `${GEO_FLAG_ICON_NAME}-je`,
    JM: `${GEO_FLAG_ICON_NAME}-jm`,
    JO: `${GEO_FLAG_ICON_NAME}-jo`,
    JP: `${GEO_FLAG_ICON_NAME}-jp`,
    KE: `${GEO_FLAG_ICON_NAME}-ke`,
    KG: `${GEO_FLAG_ICON_NAME}-kg`,
    KH: `${GEO_FLAG_ICON_NAME}-kh`,
    KI: `${GEO_FLAG_ICON_NAME}-ki`,
    KM: `${GEO_FLAG_ICON_NAME}-km`,
    KN: `${GEO_FLAG_ICON_NAME}-kn`,
    KP: `${GEO_FLAG_ICON_NAME}-kp`,
    KR: `${GEO_FLAG_ICON_NAME}-kr`,
    KW: `${GEO_FLAG_ICON_NAME}-kw`,
    KY: `${GEO_FLAG_ICON_NAME}-ky`,
    KZ: `${GEO_FLAG_ICON_NAME}-kz`,
    LA: `${GEO_FLAG_ICON_NAME}-la`,
    LB: `${GEO_FLAG_ICON_NAME}-lb`,
    LC: `${GEO_FLAG_ICON_NAME}-lc`,
    LI: `${GEO_FLAG_ICON_NAME}-li`,
    LK: `${GEO_FLAG_ICON_NAME}-lk`,
    LR: `${GEO_FLAG_ICON_NAME}-lr`,
    LS: `${GEO_FLAG_ICON_NAME}-ls`,
    LT: `${GEO_FLAG_ICON_NAME}-lt`,
    LU: `${GEO_FLAG_ICON_NAME}-lu`,
    LV: `${GEO_FLAG_ICON_NAME}-lv`,
    LY: `${GEO_FLAG_ICON_NAME}-ly`,
    MA: `${GEO_FLAG_ICON_NAME}-ma`,
    MC: `${GEO_FLAG_ICON_NAME}-mc`,
    MD: `${GEO_FLAG_ICON_NAME}-md`,
    ME: `${GEO_FLAG_ICON_NAME}-me`,
    MF: `${GEO_FLAG_ICON_NAME}-mf`,
    MG: `${GEO_FLAG_ICON_NAME}-mg`,
    MH: `${GEO_FLAG_ICON_NAME}-mh`,
    MK: `${GEO_FLAG_ICON_NAME}-mk`,
    ML: `${GEO_FLAG_ICON_NAME}-ml`,
    MM: `${GEO_FLAG_ICON_NAME}-mm`,
    MN: `${GEO_FLAG_ICON_NAME}-mn`,
    MO: `${GEO_FLAG_ICON_NAME}-mo`,
    MP: `${GEO_FLAG_ICON_NAME}-mp`,
    MQ: `${GEO_FLAG_ICON_NAME}-mq`,
    MR: `${GEO_FLAG_ICON_NAME}-mr`,
    MS: `${GEO_FLAG_ICON_NAME}-ms`,
    MT: `${GEO_FLAG_ICON_NAME}-mt`,
    MU: `${GEO_FLAG_ICON_NAME}-mu`,
    MV: `${GEO_FLAG_ICON_NAME}-mv`,
    MW: `${GEO_FLAG_ICON_NAME}-mw`,
    MX: `${GEO_FLAG_ICON_NAME}-mx`,
    MY: `${GEO_FLAG_ICON_NAME}-my`,
    MZ: `${GEO_FLAG_ICON_NAME}-mz`,
    NA: `${GEO_FLAG_ICON_NAME}-na`,
    NC: `${GEO_FLAG_ICON_NAME}-nc`,
    NE: `${GEO_FLAG_ICON_NAME}-ne`,
    NF: `${GEO_FLAG_ICON_NAME}-nf`,
    NG: `${GEO_FLAG_ICON_NAME}-ng`,
    NI: `${GEO_FLAG_ICON_NAME}-ni`,
    NL: `${GEO_FLAG_ICON_NAME}-nl`,
    NO: `${GEO_FLAG_ICON_NAME}-no`,
    NP: `${GEO_FLAG_ICON_NAME}-np`,
    NR: `${GEO_FLAG_ICON_NAME}-nr`,
    NU: `${GEO_FLAG_ICON_NAME}-nu`,
    NZ: `${GEO_FLAG_ICON_NAME}-nz`,
    OM: `${GEO_FLAG_ICON_NAME}-om`,
    PA: `${GEO_FLAG_ICON_NAME}-pa`,
    PE: `${GEO_FLAG_ICON_NAME}-pe`,
    PF: `${GEO_FLAG_ICON_NAME}-pf`,
    PG: `${GEO_FLAG_ICON_NAME}-pg`,
    PH: `${GEO_FLAG_ICON_NAME}-ph`,
    PK: `${GEO_FLAG_ICON_NAME}-pk`,
    PL: `${GEO_FLAG_ICON_NAME}-pl`,
    PM: `${GEO_FLAG_ICON_NAME}-pm`,
    PN: `${GEO_FLAG_ICON_NAME}-pn`,
    PR: `${GEO_FLAG_ICON_NAME}-pr`,
    PS: `${GEO_FLAG_ICON_NAME}-ps`,
    PT: `${GEO_FLAG_ICON_NAME}-pt`,
    PW: `${GEO_FLAG_ICON_NAME}-pw`,
    PY: `${GEO_FLAG_ICON_NAME}-py`,
    QA: `${GEO_FLAG_ICON_NAME}-qa`,
    RE: `${GEO_FLAG_ICON_NAME}-re`,
    RO: `${GEO_FLAG_ICON_NAME}-ro`,
    RS: `${GEO_FLAG_ICON_NAME}-rs`,
    RU: `${GEO_FLAG_ICON_NAME}-ru`,
    RW: `${GEO_FLAG_ICON_NAME}-rw`,
    SA: `${GEO_FLAG_ICON_NAME}-sa`,
    SB: `${GEO_FLAG_ICON_NAME}-sb`,
    SC: `${GEO_FLAG_ICON_NAME}-sc`,
    SD: `${GEO_FLAG_ICON_NAME}-sd`,
    SE: `${GEO_FLAG_ICON_NAME}-se`,
    SG: `${GEO_FLAG_ICON_NAME}-sg`,
    SH: `${GEO_FLAG_ICON_NAME}-sh`,
    SI: `${GEO_FLAG_ICON_NAME}-si`,
    SJ: `${GEO_FLAG_ICON_NAME}-sj`,
    SK: `${GEO_FLAG_ICON_NAME}-sk`,
    SL: `${GEO_FLAG_ICON_NAME}-sl`,
    SM: `${GEO_FLAG_ICON_NAME}-sm`,
    SN: `${GEO_FLAG_ICON_NAME}-sn`,
    SO: `${GEO_FLAG_ICON_NAME}-so`,
    SR: `${GEO_FLAG_ICON_NAME}-sr`,
    SS: `${GEO_FLAG_ICON_NAME}-ss`,
    ST: `${GEO_FLAG_ICON_NAME}-st`,
    SV: `${GEO_FLAG_ICON_NAME}-sv`,
    SX: `${GEO_FLAG_ICON_NAME}-sx`,
    SY: `${GEO_FLAG_ICON_NAME}-sy`,
    SZ: `${GEO_FLAG_ICON_NAME}-sz`,
    TC: `${GEO_FLAG_ICON_NAME}-tc`,
    TD: `${GEO_FLAG_ICON_NAME}-td`,
    TG: `${GEO_FLAG_ICON_NAME}-tg`,
    TH: `${GEO_FLAG_ICON_NAME}-th`,
    TJ: `${GEO_FLAG_ICON_NAME}-tj`,
    TK: `${GEO_FLAG_ICON_NAME}-tk`,
    TL: `${GEO_FLAG_ICON_NAME}-tl`,
    TM: `${GEO_FLAG_ICON_NAME}-tm`,
    TN: `${GEO_FLAG_ICON_NAME}-tn`,
    TO: `${GEO_FLAG_ICON_NAME}-to`,
    TR: `${GEO_FLAG_ICON_NAME}-tr`,
    TT: `${GEO_FLAG_ICON_NAME}-tt`,
    TV: `${GEO_FLAG_ICON_NAME}-tv`,
    TW: `${GEO_FLAG_ICON_NAME}-tw`,
    TZ: `${GEO_FLAG_ICON_NAME}-tz`,
    UA: `${GEO_FLAG_ICON_NAME}-ua`,
    UG: `${GEO_FLAG_ICON_NAME}-ug`,
    US: `${GEO_FLAG_ICON_NAME}-us`,
    UY: `${GEO_FLAG_ICON_NAME}-uy`,
    UZ: `${GEO_FLAG_ICON_NAME}-uz`,
    VA: `${GEO_FLAG_ICON_NAME}-va`,
    VC: `${GEO_FLAG_ICON_NAME}-vc`,
    VE: `${GEO_FLAG_ICON_NAME}-ve`,
    VG: `${GEO_FLAG_ICON_NAME}-vg`,
    VI: `${GEO_FLAG_ICON_NAME}-vi`,
    VN: `${GEO_FLAG_ICON_NAME}-vn`,
    VU: `${GEO_FLAG_ICON_NAME}-vu`,
    WF: `${GEO_FLAG_ICON_NAME}-wf`,
    WS: `${GEO_FLAG_ICON_NAME}-ws`,
    YE: `${GEO_FLAG_ICON_NAME}-ye`,
    YT: `${GEO_FLAG_ICON_NAME}-yt`,
    ZA: `${GEO_FLAG_ICON_NAME}-za`,
    ZM: `${GEO_FLAG_ICON_NAME}-zm`,
    ZW: `${GEO_FLAG_ICON_NAME}-zw`
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
