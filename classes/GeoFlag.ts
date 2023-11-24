import { forEach } from '../functions/data.ts'

import { Geo } from './Geo.ts'
import { GeoIntl } from './GeoIntl.ts'
import {
  type GeoFlagItem,
  type GeoFlagNational,
  type GeoItemFull
} from '../types/geo.ts'

import ADImage from '../media/flags/AD.svg'
import AEImage from '../media/flags/AE.svg'
import AFImage from '../media/flags/AF.svg'
import AGImage from '../media/flags/AG.svg'
import AIImage from '../media/flags/AI.svg'
import ALImage from '../media/flags/AL.svg'
import AMImage from '../media/flags/AM.svg'
import ANImage from '../media/flags/AN.svg'
import AOImage from '../media/flags/AO.svg'
import AQImage from '../media/flags/AQ.svg'
import ARImage from '../media/flags/AR.svg'
import ASImage from '../media/flags/AS.svg'
import ATImage from '../media/flags/AT.svg'
import AUImage from '../media/flags/AU.svg'
import AWImage from '../media/flags/AW.svg'
import AXImage from '../media/flags/AX.svg'
import AZImage from '../media/flags/AZ.svg'
import BAImage from '../media/flags/BA.svg'
import BBImage from '../media/flags/BB.svg'
import BDImage from '../media/flags/BD.svg'
import BEImage from '../media/flags/BE.svg'
import BFImage from '../media/flags/BF.svg'
import BGImage from '../media/flags/BG.svg'
import BHImage from '../media/flags/BH.svg'
import BIImage from '../media/flags/BI.svg'
import BJImage from '../media/flags/BJ.svg'
import BLImage from '../media/flags/BL.svg'
import BMImage from '../media/flags/BM.svg'
import BNImage from '../media/flags/BN.svg'
import BOImage from '../media/flags/BO.svg'
import BQImage from '../media/flags/BQ.svg'
import BRImage from '../media/flags/BR.svg'
import BSImage from '../media/flags/BS.svg'
import BTImage from '../media/flags/BT.svg'
import BVImage from '../media/flags/BV.svg'
import BWImage from '../media/flags/BW.svg'
import BYImage from '../media/flags/BY.svg'
import BZImage from '../media/flags/BZ.svg'
import CAImage from '../media/flags/CA.svg'
import CCImage from '../media/flags/CC.svg'
import CDImage from '../media/flags/CD.svg'
import CFImage from '../media/flags/CF.svg'
import CGImage from '../media/flags/CG.svg'
import CHImage from '../media/flags/CH.svg'
import CIImage from '../media/flags/CI.svg'
import CKImage from '../media/flags/CK.svg'
import CLImage from '../media/flags/CL.svg'
import CMImage from '../media/flags/CM.svg'
import CNImage from '../media/flags/CN.svg'
import COImage from '../media/flags/CO.svg'
import CRImage from '../media/flags/CR.svg'
import CUImage from '../media/flags/CU.svg'
import CVImage from '../media/flags/CV.svg'
import CWImage from '../media/flags/CW.svg'
import CXImage from '../media/flags/CX.svg'
import CYImage from '../media/flags/CY.svg'
import CZImage from '../media/flags/CZ.svg'
import DEImage from '../media/flags/DE.svg'
import DJImage from '../media/flags/DJ.svg'
import DKImage from '../media/flags/DK.svg'
import DMImage from '../media/flags/DM.svg'
import DOImage from '../media/flags/DO.svg'
import DZImage from '../media/flags/DZ.svg'
import ECImage from '../media/flags/EC.svg'
import EEImage from '../media/flags/EE.svg'
import EGImage from '../media/flags/EG.svg'
import EHImage from '../media/flags/EH.svg'
import ERImage from '../media/flags/ER.svg'
import ESImage from '../media/flags/ES.svg'
import ETImage from '../media/flags/ET.svg'
import FIImage from '../media/flags/FI.svg'
import FJImage from '../media/flags/FJ.svg'
import FKImage from '../media/flags/FK.svg'
import FMImage from '../media/flags/FM.svg'
import FOImage from '../media/flags/FO.svg'
import FRImage from '../media/flags/FR.svg'
import GAImage from '../media/flags/GA.svg'
import GBImage from '../media/flags/GB.svg'
import GDImage from '../media/flags/GD.svg'
import GEImage from '../media/flags/GE.svg'
import GFImage from '../media/flags/GF.svg'
import GGImage from '../media/flags/GG.svg'
import GHImage from '../media/flags/GH.svg'
import GIImage from '../media/flags/GI.svg'
import GLImage from '../media/flags/GL.svg'
import GMImage from '../media/flags/GM.svg'
import GNImage from '../media/flags/GN.svg'
import GPImage from '../media/flags/GP.svg'
import GQImage from '../media/flags/GQ.svg'
import GRImage from '../media/flags/GR.svg'
import GTImage from '../media/flags/GT.svg'
import GUImage from '../media/flags/GU.svg'
import GWImage from '../media/flags/GW.svg'
import GYImage from '../media/flags/GY.svg'
import HKImage from '../media/flags/HK.svg'
import HMImage from '../media/flags/HM.svg'
import HNImage from '../media/flags/HN.svg'
import HRImage from '../media/flags/HR.svg'
import HTImage from '../media/flags/HT.svg'
import HUImage from '../media/flags/HU.svg'
import IDImage from '../media/flags/ID.svg'
import IEImage from '../media/flags/IE.svg'
import ILImage from '../media/flags/IL.svg'
import IMImage from '../media/flags/IM.svg'
import INImage from '../media/flags/IN.svg'
import IOImage from '../media/flags/IO.svg'
import IQImage from '../media/flags/IQ.svg'
import IRImage from '../media/flags/IR.svg'
import ISImage from '../media/flags/IS.svg'
import ITImage from '../media/flags/IT.svg'
import JEImage from '../media/flags/JE.svg'
import JMImage from '../media/flags/JM.svg'
import JOImage from '../media/flags/JO.svg'
import JPImage from '../media/flags/JP.svg'
import KEImage from '../media/flags/KE.svg'
import KGImage from '../media/flags/KG.svg'
import KHImage from '../media/flags/KH.svg'
import KIImage from '../media/flags/KI.svg'
import KMImage from '../media/flags/KM.svg'
import KNImage from '../media/flags/KN.svg'
import KPImage from '../media/flags/KP.svg'
import KRImage from '../media/flags/KR.svg'
import KWImage from '../media/flags/KW.svg'
import KYImage from '../media/flags/KY.svg'
import KZImage from '../media/flags/KZ.svg'
import LAImage from '../media/flags/LA.svg'
import LBImage from '../media/flags/LB.svg'
import LCImage from '../media/flags/LC.svg'
import LIImage from '../media/flags/LI.svg'
import LKImage from '../media/flags/LK.svg'
import LRImage from '../media/flags/LR.svg'
import LSImage from '../media/flags/LS.svg'
import LTImage from '../media/flags/LT.svg'
import LUImage from '../media/flags/LU.svg'
import LVImage from '../media/flags/LV.svg'
import LYImage from '../media/flags/LY.svg'
import MAImage from '../media/flags/MA.svg'
import MCImage from '../media/flags/MC.svg'
import MDImage from '../media/flags/MD.svg'
import MEImage from '../media/flags/ME.svg'
import MFImage from '../media/flags/MF.svg'
import MGImage from '../media/flags/MG.svg'
import MHImage from '../media/flags/MH.svg'
import MKImage from '../media/flags/MK.svg'
import MLImage from '../media/flags/ML.svg'
import MMImage from '../media/flags/MM.svg'
import MNImage from '../media/flags/MN.svg'
import MOImage from '../media/flags/MO.svg'
import MPImage from '../media/flags/MP.svg'
import MQImage from '../media/flags/MQ.svg'
import MRImage from '../media/flags/MR.svg'
import MSImage from '../media/flags/MS.svg'
import MTImage from '../media/flags/MT.svg'
import MUImage from '../media/flags/MU.svg'
import MVImage from '../media/flags/MV.svg'
import MWImage from '../media/flags/MW.svg'
import MXImage from '../media/flags/MX.svg'
import MYImage from '../media/flags/MY.svg'
import MZImage from '../media/flags/MZ.svg'
import NAImage from '../media/flags/NA.svg'
import NCImage from '../media/flags/NC.svg'
import NEImage from '../media/flags/NE.svg'
import NFImage from '../media/flags/NF.svg'
import NGImage from '../media/flags/NG.svg'
import NIImage from '../media/flags/NI.svg'
import NLImage from '../media/flags/NL.svg'
import NOImage from '../media/flags/NO.svg'
import NPImage from '../media/flags/NP.svg'
import NRImage from '../media/flags/NR.svg'
import NUImage from '../media/flags/NU.svg'
import NZImage from '../media/flags/NZ.svg'
import OMImage from '../media/flags/OM.svg'
import PAImage from '../media/flags/PA.svg'
import PEImage from '../media/flags/PE.svg'
import PFImage from '../media/flags/PF.svg'
import PGImage from '../media/flags/PG.svg'
import PHImage from '../media/flags/PH.svg'
import PKImage from '../media/flags/PK.svg'
import PLImage from '../media/flags/PL.svg'
import PMImage from '../media/flags/PM.svg'
import PNImage from '../media/flags/PN.svg'
import PRImage from '../media/flags/PR.svg'
import PSImage from '../media/flags/PS.svg'
import PTImage from '../media/flags/PT.svg'
import PWImage from '../media/flags/PW.svg'
import PYImage from '../media/flags/PY.svg'
import QAImage from '../media/flags/QA.svg'
import REImage from '../media/flags/RE.svg'
import ROImage from '../media/flags/RO.svg'
import RSImage from '../media/flags/RS.svg'
import RUImage from '../media/flags/RU.svg'
import RWImage from '../media/flags/RW.svg'
import SAImage from '../media/flags/SA.svg'
import SBImage from '../media/flags/SB.svg'
import SCImage from '../media/flags/SC.svg'
import SDImage from '../media/flags/SD.svg'
import SEImage from '../media/flags/SE.svg'
import SGImage from '../media/flags/SG.svg'
import SHImage from '../media/flags/SH.svg'
import SIImage from '../media/flags/SI.svg'
import SJImage from '../media/flags/SJ.svg'
import SKImage from '../media/flags/SK.svg'
import SLImage from '../media/flags/SL.svg'
import SMImage from '../media/flags/SM.svg'
import SNImage from '../media/flags/SN.svg'
import SOImage from '../media/flags/SO.svg'
import SRImage from '../media/flags/SR.svg'
import SSImage from '../media/flags/SS.svg'
import STImage from '../media/flags/ST.svg'
import SVImage from '../media/flags/SV.svg'
import SXImage from '../media/flags/SX.svg'
import SYImage from '../media/flags/SY.svg'
import SZImage from '../media/flags/SZ.svg'
import TCImage from '../media/flags/TC.svg'
import TDImage from '../media/flags/TD.svg'
import TGImage from '../media/flags/TG.svg'
import THImage from '../media/flags/TH.svg'
import TJImage from '../media/flags/TJ.svg'
import TKImage from '../media/flags/TK.svg'
import TLImage from '../media/flags/TL.svg'
import TMImage from '../media/flags/TM.svg'
import TNImage from '../media/flags/TN.svg'
import TOImage from '../media/flags/TO.svg'
import TRImage from '../media/flags/TR.svg'
import TTImage from '../media/flags/TT.svg'
import TVImage from '../media/flags/TV.svg'
import TWImage from '../media/flags/TW.svg'
import TZImage from '../media/flags/TZ.svg'
import UAImage from '../media/flags/UA.svg'
import UGImage from '../media/flags/UG.svg'
import USImage from '../media/flags/US.svg'
import UYImage from '../media/flags/UY.svg'
import UZImage from '../media/flags/UZ.svg'
import VAImage from '../media/flags/VA.svg'
import VCImage from '../media/flags/VC.svg'
import VEImage from '../media/flags/VE.svg'
import VGImage from '../media/flags/VG.svg'
import VIImage from '../media/flags/VI.svg'
import VNImage from '../media/flags/VN.svg'
import VUImage from '../media/flags/VU.svg'
import WFImage from '../media/flags/WF.svg'
import WSImage from '../media/flags/WS.svg'
import YEImage from '../media/flags/YE.svg'
import YTImage from '../media/flags/YT.svg'
import ZAImage from '../media/flags/ZA.svg'
import ZMImage from '../media/flags/ZM.svg'
import ZWImage from '../media/flags/ZW.svg'

/**
 * Class for working with Flags.<br>
 * Класс для работы с Флагами.
 */
export class GeoFlag {
  static flags: Record<string, string> = {
    AD: ADImage,
    AE: AEImage,
    AF: AFImage,
    AG: AGImage,
    AI: AIImage,
    AL: ALImage,
    AM: AMImage,
    AN: ANImage,
    AO: AOImage,
    AQ: AQImage,
    AR: ARImage,
    AS: ASImage,
    AT: ATImage,
    AU: AUImage,
    AW: AWImage,
    AX: AXImage,
    AZ: AZImage,
    BA: BAImage,
    BB: BBImage,
    BD: BDImage,
    BE: BEImage,
    BF: BFImage,
    BG: BGImage,
    BH: BHImage,
    BI: BIImage,
    BJ: BJImage,
    BL: BLImage,
    BM: BMImage,
    BN: BNImage,
    BO: BOImage,
    BQ: BQImage,
    BR: BRImage,
    BS: BSImage,
    BT: BTImage,
    BV: BVImage,
    BW: BWImage,
    BY: BYImage,
    BZ: BZImage,
    CA: CAImage,
    CC: CCImage,
    CD: CDImage,
    CF: CFImage,
    CG: CGImage,
    CH: CHImage,
    CI: CIImage,
    CK: CKImage,
    CL: CLImage,
    CM: CMImage,
    CN: CNImage,
    CO: COImage,
    CR: CRImage,
    CU: CUImage,
    CV: CVImage,
    CW: CWImage,
    CX: CXImage,
    CY: CYImage,
    CZ: CZImage,
    DE: DEImage,
    DJ: DJImage,
    DK: DKImage,
    DM: DMImage,
    DO: DOImage,
    DZ: DZImage,
    EC: ECImage,
    EE: EEImage,
    EG: EGImage,
    EH: EHImage,
    ER: ERImage,
    ES: ESImage,
    ET: ETImage,
    FI: FIImage,
    FJ: FJImage,
    FK: FKImage,
    FM: FMImage,
    FO: FOImage,
    FR: FRImage,
    GA: GAImage,
    GB: GBImage,
    GD: GDImage,
    GE: GEImage,
    GF: GFImage,
    GG: GGImage,
    GH: GHImage,
    GI: GIImage,
    GL: GLImage,
    GM: GMImage,
    GN: GNImage,
    GP: GPImage,
    GQ: GQImage,
    GR: GRImage,
    GT: GTImage,
    GU: GUImage,
    GW: GWImage,
    GY: GYImage,
    HK: HKImage,
    HM: HMImage,
    HN: HNImage,
    HR: HRImage,
    HT: HTImage,
    HU: HUImage,
    ID: IDImage,
    IE: IEImage,
    IL: ILImage,
    IM: IMImage,
    IN: INImage,
    IO: IOImage,
    IQ: IQImage,
    IR: IRImage,
    IS: ISImage,
    IT: ITImage,
    JE: JEImage,
    JM: JMImage,
    JO: JOImage,
    JP: JPImage,
    KE: KEImage,
    KG: KGImage,
    KH: KHImage,
    KI: KIImage,
    KM: KMImage,
    KN: KNImage,
    KP: KPImage,
    KR: KRImage,
    KW: KWImage,
    KY: KYImage,
    KZ: KZImage,
    LA: LAImage,
    LB: LBImage,
    LC: LCImage,
    LI: LIImage,
    LK: LKImage,
    LR: LRImage,
    LS: LSImage,
    LT: LTImage,
    LU: LUImage,
    LV: LVImage,
    LY: LYImage,
    MA: MAImage,
    MC: MCImage,
    MD: MDImage,
    ME: MEImage,
    MF: MFImage,
    MG: MGImage,
    MH: MHImage,
    MK: MKImage,
    ML: MLImage,
    MM: MMImage,
    MN: MNImage,
    MO: MOImage,
    MP: MPImage,
    MQ: MQImage,
    MR: MRImage,
    MS: MSImage,
    MT: MTImage,
    MU: MUImage,
    MV: MVImage,
    MW: MWImage,
    MX: MXImage,
    MY: MYImage,
    MZ: MZImage,
    NA: NAImage,
    NC: NCImage,
    NE: NEImage,
    NF: NFImage,
    NG: NGImage,
    NI: NIImage,
    NL: NLImage,
    NO: NOImage,
    NP: NPImage,
    NR: NRImage,
    NU: NUImage,
    NZ: NZImage,
    OM: OMImage,
    PA: PAImage,
    PE: PEImage,
    PF: PFImage,
    PG: PGImage,
    PH: PHImage,
    PK: PKImage,
    PL: PLImage,
    PM: PMImage,
    PN: PNImage,
    PR: PRImage,
    PS: PSImage,
    PT: PTImage,
    PW: PWImage,
    PY: PYImage,
    QA: QAImage,
    RE: REImage,
    RO: ROImage,
    RS: RSImage,
    RU: RUImage,
    RW: RWImage,
    SA: SAImage,
    SB: SBImage,
    SC: SCImage,
    SD: SDImage,
    SE: SEImage,
    SG: SGImage,
    SH: SHImage,
    SI: SIImage,
    SJ: SJImage,
    SK: SKImage,
    SL: SLImage,
    SM: SMImage,
    SN: SNImage,
    SO: SOImage,
    SR: SRImage,
    SS: SSImage,
    ST: STImage,
    SV: SVImage,
    SX: SXImage,
    SY: SYImage,
    SZ: SZImage,
    TC: TCImage,
    TD: TDImage,
    TG: TGImage,
    TH: THImage,
    TJ: TJImage,
    TK: TKImage,
    TL: TLImage,
    TM: TMImage,
    TN: TNImage,
    TO: TOImage,
    TR: TRImage,
    TT: TTImage,
    TV: TVImage,
    TW: TWImage,
    TZ: TZImage,
    UA: UAImage,
    UG: UGImage,
    US: USImage,
    UY: UYImage,
    UZ: UZImage,
    VA: VAImage,
    VC: VCImage,
    VE: VEImage,
    VG: VGImage,
    VI: VIImage,
    VN: VNImage,
    VU: VUImage,
    WF: WFImage,
    WS: WSImage,
    YE: YEImage,
    YT: YTImage,
    ZA: ZAImage,
    ZM: ZMImage,
    ZW: ZWImage
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
