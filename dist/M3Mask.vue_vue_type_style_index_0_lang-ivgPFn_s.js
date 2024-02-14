var K = Object.defineProperty;
var O = (o, e, t) => e in o ? K(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var i = (o, e, t) => (O(o, typeof e != "symbol" ? e + "" : e, t), t);
import { shallowRef as D, watchEffect as R, h as m, defineComponent as _, computed as T, openBlock as j, createBlock as W, unref as H } from "vue";
import { x as Y, d as G, A as B, f as I, l as Z, H as L, z as b, s as v, y as U, C as F, k as J, E as q, n as Q, I as X, v as ee, j as te, b as E, N as ne, q as ae } from "./DesignConstructorAbstract-SiNW5baF.js";
import { u as se } from "./useEnv-DC_yf41I.js";
import { D as ie } from "./DataStorage-BP7vt6zS.js";
import { t as A } from "./number-Bmx0fGP3.js";
import { C as f } from "./CacheItem-J86vAm6_.js";
import { u as w } from "./useInputCheck-LJHawoYg.js";
import { m as re } from "./event-MN4DTwoE.js";
function d(o) {
  if (o instanceof Date)
    return o;
  if (Y(o))
    return /* @__PURE__ */ new Date();
  if (typeof o == "number")
    return new Date(o);
  let e = o, t = "";
  o.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (a, s, r) => (e = s, t = r, a));
  const n = (/^\d{4}\d{2}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(e) && `${e}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(e) && `${e}-01T00:00:00`) ?? (/^\d{4}$/.exec(e) && `${e}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}`) ?? e.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${n}${t}`);
}
const oe = [
  {
    country: "US",
    countryAlternative: [
      "EN"
    ],
    language: "en",
    languageAlternative: [
      "us"
    ],
    firstDay: "Su",
    zone: "America/New_York",
    phoneCode: "1",
    phoneMask: [
      "+1-***-***-****"
    ]
  },
  {
    country: "GB",
    countryAlternative: [
      "UK"
    ],
    language: "en",
    firstDay: "Mo",
    zone: "Europe/London",
    phoneCode: "44",
    phoneMask: [
      "+44-**-****-****"
    ]
  },
  {
    country: "AF",
    language: "fa",
    firstDay: "Sa",
    zone: "Asia/Kabul",
    phoneCode: "93",
    phoneMask: [
      "+93-**-***-****"
    ]
  },
  {
    country: "AL",
    language: "sq",
    firstDay: "Mo",
    zone: "Europe/Tirane",
    phoneCode: "355",
    phoneMask: [
      "+355-***-***-***"
    ]
  },
  {
    country: "DZ",
    language: "ar",
    firstDay: "Sa",
    zone: "Africa/Algiers",
    phoneCode: "213",
    phoneMask: [
      "+213-**-***-****"
    ]
  },
  {
    country: "AS",
    language: "en",
    firstDay: null,
    zone: "Pacific/Pago_Pago",
    phoneCode: "1-684",
    phoneMask: [
      "+1-684-***-****"
    ]
  },
  {
    country: "AD",
    language: "ca",
    firstDay: "Mo",
    zone: "Europe/Andorra",
    phoneCode: "376",
    phoneMask: [
      "+376-***-***"
    ]
  },
  {
    country: "AO",
    language: "pt",
    firstDay: null,
    zone: "Africa/Lagos",
    phoneCode: "244",
    phoneMask: [
      "+244-***-***-***"
    ]
  },
  {
    country: "AI",
    language: "en",
    firstDay: null,
    zone: "America/Port_of_Spain",
    phoneCode: "1-264",
    phoneMask: [
      "+1-264-***-****"
    ]
  },
  {
    country: "AQ",
    language: "",
    firstDay: null,
    zone: "Antarctica/Troll",
    phoneCode: "672",
    phoneMask: [
      "+672-1-**-***"
    ]
  },
  {
    country: "AG",
    language: "en",
    firstDay: null,
    zone: "America/Antigua",
    phoneCode: "1-268",
    phoneMask: [
      "+1-268-***-****"
    ]
  },
  {
    country: "AR",
    language: "es",
    firstDay: "Su",
    zone: "America/Argentina/Buenos_Aires",
    phoneCode: "54",
    phoneMask: [
      "+54-***-***-****"
    ]
  },
  {
    country: "AM",
    language: "hy",
    firstDay: "Mo",
    zone: "Asia/Yerevan",
    phoneCode: "374",
    phoneMask: [
      "+374-**-***-***"
    ]
  },
  {
    country: "AW",
    language: "nl",
    firstDay: null,
    zone: "America/Curacao",
    phoneCode: "297",
    phoneMask: [
      "+297-***-****"
    ]
  },
  {
    country: "AU",
    language: "en",
    firstDay: "Mo",
    zone: "Australia/Sydney",
    phoneCode: "61",
    phoneMask: [
      "+61-*-****-****"
    ]
  },
  {
    country: "AT",
    language: "de",
    firstDay: "Mo",
    zone: "Europe/Vienna",
    phoneCode: "43",
    phoneMask: [
      "+43-***-***-****"
    ]
  },
  {
    country: "AZ",
    language: "az",
    firstDay: "Mo",
    zone: "Asia/Baku",
    phoneCode: "994",
    phoneMask: "+994-**-***-**-**"
  },
  {
    country: "BS",
    language: "en",
    firstDay: null,
    zone: "America/Nassau",
    phoneCode: "1-242",
    phoneMask: "+1-242-***-****"
  },
  {
    country: "BH",
    language: "ar",
    firstDay: "Sa",
    zone: "Asia/Bahrain",
    phoneCode: "973",
    phoneMask: "+973-****-****"
  },
  {
    country: "BD",
    language: "bn",
    firstDay: null,
    zone: "Asia/Dhaka",
    phoneCode: "880",
    phoneMask: "+880-**-***-***"
  },
  {
    country: "BB",
    language: "en",
    firstDay: null,
    zone: "America/Barbados",
    phoneCode: "1-246",
    phoneMask: "+1-246-***-****"
  },
  {
    country: "BY",
    language: "be",
    firstDay: "Mo",
    zone: "Europe/Minsk",
    phoneCode: "375",
    phoneMask: "+375-**-***-**-**"
  },
  {
    country: "BE",
    language: "nl",
    firstDay: "Mo",
    zone: "Europe/Brussels",
    phoneCode: "32",
    phoneMask: "+32-***-***-***"
  },
  {
    country: "BZ",
    language: "en",
    firstDay: "Su",
    zone: "America/Belize",
    phoneCode: "501",
    phoneMask: "+501-***-****"
  },
  {
    country: "BJ",
    language: "fr",
    firstDay: null,
    zone: "Africa/Lagos",
    phoneCode: "229",
    phoneMask: "+229-**-**-****"
  },
  {
    country: "BM",
    language: "en",
    firstDay: null,
    zone: "Atlantic/Bermuda",
    phoneCode: "1-441",
    phoneMask: "+1-441-***-****"
  },
  {
    country: "BT",
    language: "dz",
    firstDay: null,
    zone: "Asia/Thimphu",
    phoneCode: "975",
    phoneMask: [
      "+975-*-***-***",
      "+975-17-***-***"
    ]
  },
  {
    country: "BO",
    language: "es",
    firstDay: "Su",
    zone: "America/La_Paz",
    phoneCode: "591",
    phoneMask: "+591-*-***-****"
  },
  {
    country: "BA",
    language: "bs",
    firstDay: null,
    zone: "Europe/Belgrade",
    phoneCode: "387",
    phoneMask: [
      "+387-**-****",
      "+387-**-*****"
    ]
  },
  {
    country: "BW",
    language: "en",
    firstDay: null,
    zone: "Africa/Maputo",
    phoneCode: "267",
    phoneMask: "+267-**-***-***"
  },
  {
    country: "BR",
    language: "pt",
    firstDay: "Su",
    zone: "America/Sao_Paulo",
    phoneCode: "55",
    phoneMask: [
      "+55-**-****-****",
      "+55-**-*****-****"
    ]
  },
  {
    country: "IO",
    language: "en",
    firstDay: null,
    zone: "Indian/Chagos",
    phoneCode: "246",
    phoneMask: "+246-***-****"
  },
  {
    country: "VG",
    language: "en",
    firstDay: null,
    zone: "America/Port_of_Spain",
    phoneCode: "1-284",
    phoneMask: "+1-284-***-****"
  },
  {
    country: "BN",
    language: "ms",
    firstDay: "Mo",
    zone: "Asia/Brunei",
    phoneCode: "673",
    phoneMask: "+673-***-****"
  },
  {
    country: "BG",
    language: "bg",
    firstDay: "Mo",
    zone: "Europe/Sofia",
    phoneCode: "359",
    phoneMask: "+359-***-***-***"
  },
  {
    country: "BF",
    language: "fr",
    firstDay: null,
    zone: "Africa/Abidjan",
    phoneCode: "226",
    phoneMask: "+226-**-**-****"
  },
  {
    country: "BI",
    language: "fr",
    firstDay: null,
    zone: "Africa/Maputo",
    phoneCode: "257",
    phoneMask: "+257-**-**-****"
  },
  {
    country: "KH",
    language: "km",
    firstDay: null,
    zone: "Asia/Phnom_Penh",
    phoneCode: "855",
    phoneMask: "+855-**-***-***"
  },
  {
    country: "CM",
    phoneCode: "237",
    zone: "Africa/Lagos",
    language: "en",
    firstDay: null,
    phoneMask: "+237-****-****"
  },
  {
    country: "CA",
    phoneCode: "1",
    zone: "America/Toronto",
    language: "en",
    firstDay: "Su",
    phoneMask: "+1-***-***-****"
  },
  {
    country: "CV",
    phoneCode: "238",
    zone: "Atlantic/Cape_Verde",
    language: "pt",
    firstDay: null,
    phoneMask: "+238-***-**-**"
  },
  {
    country: "KY",
    phoneCode: "1-345",
    zone: "America/Cayman",
    language: "en",
    firstDay: null,
    phoneMask: "+1-345-***-****"
  },
  {
    country: "CF",
    phoneCode: "236",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+236-**-**-****"
  },
  {
    country: "TD",
    phoneCode: "235",
    zone: "Africa/Ndjamena",
    language: "fr",
    firstDay: null,
    phoneMask: "+235-**-**-**-**"
  },
  {
    country: "CL",
    phoneCode: "56",
    zone: "America/Santiago",
    language: "es",
    firstDay: "Su",
    phoneMask: "+56-*-****-****"
  },
  {
    country: "CN",
    phoneCode: "86",
    zone: "Asia/Shanghai",
    language: "zh",
    firstDay: "Su",
    phoneMask: [
      "+86-***-****-***",
      "+86-***-****-****",
      "+86-**-*****-*****"
    ]
  },
  {
    country: "CX",
    phoneCode: "61",
    zone: "Indian/Christmas",
    language: "en",
    firstDay: null
  },
  {
    country: "CC",
    phoneCode: "61",
    zone: "Indian/Cocos",
    language: "ms",
    firstDay: null
  },
  {
    country: "CO",
    phoneCode: "57",
    zone: "America/Bogota",
    language: "es",
    firstDay: "Su",
    phoneMask: "+57-***-***-****"
  },
  {
    country: "KM",
    phoneCode: "269",
    zone: "Indian/Comoro",
    language: "ar",
    firstDay: null,
    phoneMask: "+269-**-*****"
  },
  {
    country: "CK",
    phoneCode: "682",
    zone: "Pacific/Rarotonga",
    language: "en",
    firstDay: null,
    phoneMask: "+682-**-***"
  },
  {
    country: "CR",
    phoneCode: "506",
    zone: "America/Costa_Rica",
    language: "es",
    firstDay: "Su",
    phoneMask: "+506-****-****"
  },
  {
    country: "HR",
    phoneCode: "385",
    zone: "Europe/Belgrade",
    language: "hr",
    firstDay: "Mo",
    phoneMask: "+385-**-***-***"
  },
  {
    country: "CU",
    phoneCode: "53",
    zone: "America/Havana",
    language: "es",
    firstDay: null,
    phoneMask: "+53-*-***-****"
  },
  {
    country: "CW",
    phoneCode: "599",
    zone: "America/Curacao",
    language: "nl",
    firstDay: null,
    phoneMask: "+599-***-****"
  },
  {
    country: "CY",
    phoneCode: "357",
    zone: "Asia/Nicosia",
    language: "el",
    firstDay: null,
    phoneMask: "+357-**-***-***"
  },
  {
    country: "CZ",
    phoneCode: "420",
    zone: "Europe/Prague",
    language: "cs",
    firstDay: "Mo",
    phoneMask: "+420-***-***-***"
  },
  {
    country: "CD",
    phoneCode: "243",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+243-***-***-***"
  },
  {
    country: "DK",
    phoneCode: "45",
    zone: "Europe/Copenhagen",
    language: "da",
    firstDay: "Mo",
    phoneMask: "+45-**-**-**-**"
  },
  {
    country: "DJ",
    phoneCode: "253",
    zone: "Africa/Djibouti",
    language: "fr",
    firstDay: null,
    phoneMask: "+253-**-**-**-**"
  },
  {
    country: "DM",
    phoneCode: "1-767",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-767-***-****"
  },
  {
    country: "DO",
    phoneCode: "1-809",
    zone: "North America",
    language: "America/Santo_Domingo",
    firstDay: "Su",
    phoneMask: [
      "+1-809-***-****",
      "+1-829-***-****",
      "+1-849-***-****"
    ]
  },
  {
    country: "TL",
    phoneCode: "670",
    zone: "Asia/Dili",
    language: "tet",
    firstDay: null,
    phoneMask: [
      "+670-***-****",
      "+670-77-*-*****",
      "+670-78-*-*****"
    ]
  },
  {
    country: "EC",
    phoneCode: "593",
    zone: "America/Guayaquil",
    language: "es",
    firstDay: "Su",
    phoneMask: [
      "+593-*-***-****",
      "+593-**-***-****"
    ]
  },
  {
    country: "EG",
    phoneCode: "20",
    zone: "Africa/Cairo",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+20-***-***-****"
  },
  {
    country: "SV",
    phoneCode: "503",
    zone: "America/El_Salvador",
    language: "es",
    firstDay: "Su",
    phoneMask: "+503-**-**-****"
  },
  {
    country: "GQ",
    phoneCode: "240",
    zone: "Africa/Lagos",
    language: "es",
    firstDay: null,
    phoneMask: "+240-**-***-****"
  },
  {
    country: "ER",
    phoneCode: "291",
    zone: "Africa/Asmara",
    language: "aa",
    firstDay: null,
    phoneMask: "+291-*-***-***"
  },
  {
    country: "EE",
    phoneCode: "372",
    zone: "Europe/Tallinn",
    language: "et",
    firstDay: "Mo",
    phoneMask: [
      "+372-***-****",
      "+372-****-****"
    ]
  },
  {
    country: "ET",
    phoneCode: "251",
    zone: "Africa/Addis_Ababa",
    language: "am",
    firstDay: null,
    phoneMask: "+251-**-***-****"
  },
  {
    country: "FK",
    phoneCode: "500",
    zone: "Atlantic/Stanley",
    language: "en",
    firstDay: null,
    phoneMask: "+500-*****"
  },
  {
    country: "FO",
    phoneCode: "298",
    zone: "Atlantic/Faroe",
    language: "fo",
    firstDay: null,
    phoneMask: "+298-***-***"
  },
  {
    country: "FJ",
    phoneCode: "679",
    zone: "Pacific/Fiji",
    language: "en",
    firstDay: null,
    phoneMask: "+679-**-*****"
  },
  {
    country: "FI",
    phoneCode: "358",
    zone: "Europe/Helsinki",
    language: "fi",
    firstDay: "Mo",
    phoneMask: "+358-***-***-**-**"
  },
  {
    country: "FR",
    phoneCode: "33",
    zone: "Europe/Paris",
    language: "fr",
    firstDay: "Mo",
    phoneMask: [
      "+33-***-***-***",
      "+262-*****-****",
      "+508-**-****",
      "+590-***-***-***"
    ]
  },
  {
    country: "PF",
    phoneCode: "689",
    zone: "Pacific/Tahiti",
    language: "fr",
    firstDay: null,
    phoneMask: "+689-**-**-**"
  },
  {
    country: "GA",
    phoneCode: "241",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+241-*-**-**-**"
  },
  {
    country: "GM",
    phoneCode: "220",
    zone: "Africa/Abidjan",
    language: "en",
    firstDay: null,
    phoneMask: "+220-***-**-**"
  },
  {
    country: "GE",
    phoneCode: "995",
    zone: "Asia/Tbilisi",
    language: "ka",
    firstDay: "Mo",
    phoneMask: "+995-***-***-***"
  },
  {
    country: "DE",
    phoneCode: "49",
    zone: "Europe/Berlin",
    language: "de",
    firstDay: "Mo",
    phoneMask: [
      "+49-***-***",
      "+49-***-***-****",
      "+49-****-***-****"
    ]
  },
  {
    country: "GH",
    phoneCode: "233",
    zone: "Africa/Accra",
    language: "en",
    firstDay: null,
    phoneMask: "+233-***-***-***"
  },
  {
    country: "GI",
    phoneCode: "350",
    zone: "Europe/Gibraltar",
    language: "en",
    firstDay: null,
    phoneMask: "+350-***-*****"
  },
  {
    country: "GR",
    phoneCode: "30",
    zone: "Europe/Athens",
    language: "el",
    firstDay: "Mo",
    phoneMask: "+30-***-***-****"
  },
  {
    country: "GL",
    phoneCode: "299",
    zone: "America/Godthab",
    language: "kl",
    firstDay: null,
    phoneMask: "+299-**-**-**"
  },
  {
    country: "GD",
    phoneCode: "1-473",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-473-***-****"
  },
  {
    country: "GU",
    phoneCode: "1-671",
    zone: "Pacific/Guam",
    language: "en",
    firstDay: null,
    phoneMask: "+1-671-***-****"
  },
  {
    country: "GT",
    phoneCode: "502",
    zone: "America/Guatemala",
    language: "es",
    firstDay: "Su",
    phoneMask: "+502-*-***-****"
  },
  {
    country: "GG",
    phoneCode: "44-1481",
    zone: "Europe/London",
    language: "en",
    firstDay: null
  },
  {
    country: "GN",
    phoneCode: "224",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+224-**-***-***"
  },
  {
    country: "GW",
    phoneCode: "245",
    zone: "Africa/Bissau",
    language: "pt",
    firstDay: null,
    phoneMask: "+245-*-******"
  },
  {
    country: "GY",
    phoneCode: "592",
    zone: "America/Guyana",
    language: "en",
    firstDay: null,
    phoneMask: "+592-***-****"
  },
  {
    country: "HT",
    phoneCode: "509",
    zone: "America/Port-au-Prince",
    language: "ht",
    firstDay: null,
    phoneMask: "+509-**-**-****"
  },
  {
    country: "HN",
    phoneCode: "504",
    zone: "America/Tegucigalpa",
    language: "es",
    firstDay: "Su",
    phoneMask: "+504-****-****"
  },
  {
    country: "HK",
    phoneCode: "852",
    zone: "Asia/Hong_Kong",
    language: "zh",
    firstDay: "Su",
    phoneMask: "+852-****-****"
  },
  {
    country: "HU",
    phoneCode: "36",
    zone: "Europe/Budapest",
    language: "hu",
    firstDay: "Mo",
    phoneMask: "+36-***-***-***"
  },
  {
    country: "IS",
    phoneCode: "354",
    zone: "Atlantic/Reykjavik",
    language: "is",
    firstDay: "Mo",
    phoneMask: "+354-***-****"
  },
  {
    country: "IN",
    phoneCode: "91",
    zone: "Asia/Kolkata",
    language: "en",
    firstDay: "Mo",
    phoneMask: "+91-****-***-***"
  },
  {
    country: "ID",
    phoneCode: "62",
    zone: "Asia/Jakarta",
    language: "id",
    firstDay: "Mo",
    phoneMask: [
      "+62-**-***-**",
      "+62-**-***-***",
      "+62-**-***-****",
      "+62-8-**-***-***",
      "+62-8-**-***-****",
      "+62-8-**-***-**-***"
    ]
  },
  {
    country: "IR",
    phoneCode: "98",
    zone: "Asia/Tehran",
    language: "fa",
    firstDay: "Sa",
    phoneMask: "+98-***-***-****"
  },
  {
    country: "IQ",
    phoneCode: "964",
    zone: "Asia/Baghdad",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+964-***-***-****"
  },
  {
    country: "IE",
    firstDay: "Mo",
    language: "en",
    phoneCode: "353",
    phoneMask: "+353-***-***-***",
    zone: "Europe/Dublin"
  },
  {
    country: "IM",
    firstDay: null,
    language: "Pound",
    phoneCode: "44-1624",
    zone: "Isle of Man"
  },
  {
    country: "IL",
    firstDay: "Su",
    language: "he",
    languageAlternative: [
      "il"
    ],
    phoneCode: "972",
    phoneMask: [
      "+972-*-***-****",
      "+972-5-*-***-****"
    ],
    zone: "Asia/Jerusalem"
  },
  {
    country: "IT",
    firstDay: "Mo",
    language: "it",
    phoneCode: "39",
    phoneMask: "+39-***-****-***",
    zone: "Europe/Rome"
  },
  {
    country: "CI",
    phoneCode: "225",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+225-**-***-***"
  },
  {
    country: "JM",
    phoneCode: "1-876",
    zone: "America/Jamaica",
    language: "en",
    firstDay: "Su",
    phoneMask: "+1-876-***-****"
  },
  {
    country: "JP",
    phoneCode: "81",
    zone: "Asia/Tokyo",
    language: "ja",
    firstDay: "Su",
    phoneMask: [
      "+81-***-***-***",
      "+81-**-****-****"
    ]
  },
  {
    country: "JE",
    phoneCode: "44-1534",
    zone: "Europe/London",
    language: "en",
    firstDay: null
  },
  {
    country: "JO",
    phoneCode: "962",
    zone: "Asia/Amman",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+962-*-****-****"
  },
  {
    country: "KZ",
    phoneCode: "7",
    zone: "Asia/Almaty",
    language: "kk",
    firstDay: "Mo",
    phoneMask: [
      "+7-6-**-***-**-**",
      "+7-7-**-***-**-**"
    ]
  },
  {
    country: "KE",
    phoneCode: "254",
    zone: "Africa/Nairobi",
    language: "en",
    firstDay: "Su",
    phoneMask: "+254-***-******"
  },
  {
    country: "KI",
    phoneCode: "686",
    zone: "Pacific/Tarawa",
    language: "en",
    firstDay: null,
    phoneMask: "+686-**-***"
  },
  {
    country: "XK",
    phoneCode: "383",
    zone: "Europe/Belgrade",
    language: "sq",
    firstDay: "Mo"
  },
  {
    country: "KW",
    phoneCode: "965",
    zone: "Asia/Kuwait",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+965-****-****"
  },
  {
    country: "KG",
    phoneCode: "996",
    zone: "Asia/Bishkek",
    language: "ky",
    firstDay: "Mo",
    phoneMask: "+996-***-***-***"
  },
  {
    country: "LA",
    phoneCode: "856",
    zone: "Asia/Vientiane",
    language: "lo",
    firstDay: null,
    phoneMask: [
      "+856-**-***-***",
      "+856-20-**-***-***"
    ]
  },
  {
    country: "LV",
    phoneCode: "371",
    zone: "Europe/Riga",
    language: "lv",
    firstDay: "Mo",
    phoneMask: "+371-**-***-***"
  },
  {
    country: "LB",
    phoneCode: "961",
    zone: "Asia/Beirut",
    language: "ar",
    firstDay: "Mo",
    phoneMask: [
      "+961-*-***-***",
      "+961-**-***-***"
    ]
  },
  {
    country: "LS",
    phoneCode: "266",
    zone: "Africa/Johannesburg",
    language: "en",
    firstDay: null,
    phoneMask: "+266-*-***-****"
  },
  {
    country: "LR",
    phoneCode: "231",
    zone: "Africa/Monrovia",
    language: "en",
    firstDay: null,
    phoneMask: "+231-**-***-***"
  },
  {
    country: "LY",
    phoneCode: "218",
    zone: "Africa/Tripoli",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+218-**-***-***",
      "+218-21-***-****"
    ]
  },
  {
    country: "LI",
    phoneCode: "423",
    zone: "Europe/Zurich",
    language: "de",
    firstDay: null,
    phoneMask: "+423-***-***-****"
  },
  {
    country: "LT",
    phoneCode: "370",
    zone: "Europe/Vilnius",
    language: "lt",
    firstDay: "Mo",
    phoneMask: "+370-***-**-***"
  },
  {
    country: "LU",
    phoneCode: "352",
    zone: "Europe/Luxembourg",
    language: "lb",
    firstDay: "Mo",
    phoneMask: "+352-***-***-***"
  },
  {
    country: "MO",
    phoneCode: "853",
    zone: "Asia/Macau",
    language: "zh",
    firstDay: null,
    phoneMask: "+853-****-****"
  },
  {
    country: "MK",
    phoneCode: "389",
    zone: "Europe/Belgrade",
    language: "mk",
    firstDay: "Mo",
    phoneMask: "+389-**-***-***"
  },
  {
    country: "MG",
    phoneCode: "261",
    zone: "Indian/Antananarivo",
    language: "fr",
    firstDay: null,
    phoneMask: "+261-**-**-*****"
  },
  {
    country: "MW",
    phoneCode: "265",
    zone: "Africa/Maputo",
    language: "ny",
    firstDay: null,
    phoneMask: [
      "+265-*-****-****",
      "+265-1-***-***"
    ]
  },
  {
    country: "MY",
    phoneCode: "60",
    zone: "Asia/Kuala_Lumpur",
    language: "ms",
    firstDay: "Mo",
    phoneMask: [
      "+60-*-***-***",
      "+60-**-***-***",
      "+60-**-***-****",
      "+60-***-***-***"
    ]
  },
  {
    country: "MV",
    phoneCode: "960",
    zone: "Indian/Maldives",
    language: "dv",
    firstDay: null,
    phoneMask: "+960-***-****"
  },
  {
    country: "ML",
    phoneCode: "223",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+223-**-**-****"
  },
  {
    country: "MT",
    phoneCode: "356",
    zone: "Europe/Malta",
    language: "mt",
    firstDay: null,
    phoneMask: "+356-****-****"
  },
  {
    country: "MH",
    phoneCode: "692",
    zone: "Pacific/Majuro",
    language: "mh",
    firstDay: null,
    phoneMask: "+692-***-****"
  },
  {
    country: "MR",
    phoneCode: "222",
    zone: "Africa/Abidjan",
    language: "ar",
    firstDay: null,
    phoneMask: "+222-**-**-****"
  },
  {
    country: "MU",
    phoneCode: "230",
    zone: "Indian/Mauritius",
    language: "en",
    firstDay: null,
    phoneMask: "+230-***-****"
  },
  {
    country: "YT",
    phoneCode: "262",
    zone: "Indian/Mayotte",
    language: "fr",
    firstDay: null
  },
  {
    country: "MX",
    phoneCode: "52",
    zone: "America/Mexico_City",
    language: "es",
    firstDay: "Su",
    phoneMask: [
      "+52-**-**-****",
      "+52-***-***-****"
    ]
  },
  {
    country: "FM",
    phoneCode: "691",
    zone: "Pacific/Pohnpei",
    language: "en",
    firstDay: null,
    phoneMask: "+691-***-****"
  },
  {
    country: "MD",
    phoneCode: "373",
    zone: "Europe/Chisinau",
    language: "ro",
    firstDay: null,
    phoneMask: "+373-****-****"
  },
  {
    country: "MC",
    phoneCode: "377",
    zone: "Europe/Monaco",
    language: "fr",
    firstDay: "Mo",
    phoneMask: [
      "+377-**-***-***",
      "+377-***-***-***"
    ]
  },
  {
    country: "MN",
    phoneCode: "976",
    zone: "Asia/Ulaanbaatar",
    language: "mn",
    firstDay: "Mo",
    phoneMask: "+976-**-**-****"
  },
  {
    country: "ME",
    phoneCode: "382",
    zone: "Europe/Belgrade",
    language: "sr",
    firstDay: null,
    phoneMask: "+382-**-***-***"
  },
  {
    country: "MS",
    phoneCode: "1-664",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-664-***-****"
  },
  {
    country: "MA",
    phoneCode: "212",
    zone: "Africa/Casablanca",
    language: "ar",
    firstDay: "Mo",
    phoneMask: "+212-**-****-***"
  },
  {
    country: "MZ",
    phoneCode: "258",
    zone: "Africa/Maputo",
    language: "pt",
    firstDay: null,
    phoneMask: "+258-**-***-***"
  },
  {
    country: "MM",
    phoneCode: "95",
    zone: "Asia/Rangoon",
    language: "my",
    firstDay: null,
    phoneMask: [
      "+95-***-***",
      "+95-*-***-***",
      "+95-**-***-***"
    ]
  },
  {
    country: "NA",
    phoneCode: "264",
    zone: "Africa/Windhoek",
    language: "en",
    firstDay: null,
    phoneMask: "+264-**-***-****"
  },
  {
    country: "NR",
    phoneCode: "674",
    zone: "Pacific/Nauru",
    language: "na",
    firstDay: null,
    phoneMask: "+674-***-****"
  },
  {
    country: "NP",
    phoneCode: "977",
    zone: "Asia/Kathmandu",
    language: "ne",
    firstDay: null,
    phoneMask: "+977-**-***-***"
  },
  {
    country: "NL",
    phoneCode: "31",
    zone: "Europe/Amsterdam",
    language: "nl",
    firstDay: "Mo",
    phoneMask: "+31-**-***-****"
  },
  {
    country: "AN",
    phoneCode: "599",
    zone: "America/Curacao",
    language: "nl",
    firstDay: null,
    phoneMask: [
      "+599-***-****",
      "+599-9-***-****"
    ]
  },
  {
    country: "NC",
    phoneCode: "687",
    zone: "Pacific/Noumea",
    language: "fr",
    firstDay: null,
    phoneMask: "+687-**-****"
  },
  {
    country: "NZ",
    phoneCode: "64",
    zone: "Pacific/Auckland",
    language: "en",
    firstDay: "Mo",
    phoneMask: [
      "+64-**-***-***",
      "+64-***-***-***",
      "+64-***-***-****"
    ]
  },
  {
    country: "NI",
    phoneCode: "505",
    zone: "America/Managua",
    language: "es",
    firstDay: "Su",
    phoneMask: "+505-****-****"
  },
  {
    country: "NE",
    phoneCode: "227",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+227-**-**-****"
  },
  {
    country: "NG",
    phoneCode: "234",
    zone: "Africa/Lagos",
    language: "en",
    firstDay: null,
    phoneMask: [
      "+234-**-***-**",
      "+234-**-***-***",
      "+234-***-***-****"
    ]
  },
  {
    country: "NU",
    phoneCode: "683",
    zone: "Pacific/Niue",
    language: "niu",
    firstDay: null,
    phoneMask: "+683-****"
  },
  {
    country: "KP",
    phoneCode: "850",
    zone: "Asia/Pyongyang",
    language: "ko",
    firstDay: null,
    phoneMask: [
      "+850-***-***",
      "+850-**-***-***",
      "+850-****-****",
      "+850-***-****-***",
      "+850-****-*************",
      "+850-191-***-****"
    ]
  },
  {
    country: "MP",
    phoneCode: "1-670",
    zone: "Pacific/Saipan",
    language: "fil",
    firstDay: null,
    phoneMask: "+1-670-***-****"
  },
  {
    country: "NO",
    phoneCode: "47",
    zone: "Europe/Oslo",
    language: "no",
    firstDay: "Mo",
    phoneMask: "+47-***-**-***"
  },
  {
    country: "OM",
    phoneCode: "968",
    zone: "Asia/Muscat",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+968-**-***-***"
  },
  {
    country: "PK",
    phoneCode: "92",
    zone: "Asia/Karachi",
    language: "ur",
    firstDay: "Mo",
    phoneMask: "+92-***-***-****"
  },
  {
    country: "PW",
    phoneCode: "680",
    zone: "Pacific/Palau",
    language: "pau",
    firstDay: null,
    phoneMask: "+680-***-****"
  },
  {
    country: "PS",
    phoneCode: "970",
    zone: "Asia/Hebron",
    language: "ar",
    firstDay: null,
    phoneMask: "+970-**-***-****"
  },
  {
    country: "PA",
    phoneCode: "507",
    zone: "America/Panama",
    language: "es",
    firstDay: "Su",
    phoneMask: "+507-***-****"
  },
  {
    country: "PG",
    phoneCode: "675",
    zone: "Pacific/Port_Moresby",
    language: "en",
    firstDay: null,
    phoneMask: "+675-***-**-***"
  },
  {
    country: "PY",
    phoneCode: "595",
    zone: "America/Asuncion",
    language: "es",
    firstDay: "Mo",
    phoneMask: "+595-***-***-***"
  },
  {
    country: "PE",
    phoneCode: "51",
    zone: "America/Lima",
    language: "es",
    firstDay: "Su",
    phoneMask: "+51-***-***-***"
  },
  {
    country: "PH",
    phoneCode: "63",
    zone: "Asia/Manila",
    language: "tl",
    firstDay: "Su",
    phoneMask: "+63-***-***-****"
  },
  {
    country: "PN",
    phoneCode: "64",
    zone: "Pacific/Pitcairn",
    language: "en",
    firstDay: null
  },
  {
    country: "PL",
    phoneCode: "48",
    zone: "Europe/Warsaw",
    language: "pl",
    firstDay: "Mo",
    phoneMask: "+48-***-***-***"
  },
  {
    country: "PT",
    phoneCode: "351",
    zone: "Europe/Lisbon",
    language: "pt",
    firstDay: "Mo",
    phoneMask: "+351-**-***-****"
  },
  {
    country: "PR",
    phoneCode: "1-787",
    zone: "San Juan",
    language: "Dollar",
    firstDay: "Su"
  },
  {
    country: "QA",
    phoneCode: "974",
    zone: "Asia/Qatar",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+974-****-****"
  },
  {
    country: "CG",
    phoneCode: "242",
    zone: "Africa/Lagos",
    language: "fr",
    firstDay: null,
    phoneMask: "+242-**-***-****"
  },
  {
    country: "RE",
    phoneCode: "262",
    zone: "Indian/Reunion",
    language: "fr",
    firstDay: null,
    phoneMask: "+262-*****-****"
  },
  {
    country: "RO",
    phoneCode: "40",
    zone: "Europe/Bucharest",
    language: "ro",
    firstDay: "Mo",
    phoneMask: "+40-**-***-****"
  },
  {
    country: "RU",
    phoneCode: "7",
    zone: "Europe/Moscow",
    language: "ru",
    firstDay: "Mo",
    phoneMask: "+7-***-***-**-**"
  },
  {
    country: "RW",
    phoneCode: "250",
    zone: "Africa/Maputo",
    language: "rw",
    firstDay: null,
    phoneMask: "+250-***-***-***"
  },
  {
    country: "BL",
    phoneCode: "590",
    zone: "America/Port_of_Spain",
    language: "fr",
    firstDay: null
  },
  {
    country: "SH",
    phoneCode: "290",
    zone: "Africa/Abidjan",
    language: "en",
    firstDay: null,
    phoneMask: "+290-****"
  },
  {
    country: "KN",
    phoneCode: "1-869",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-869-***-****"
  },
  {
    country: "LC",
    phoneCode: "1-758",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-758-***-****"
  },
  {
    country: "MF",
    phoneCode: "590",
    zone: "America/Port_of_Spain",
    language: "fr",
    firstDay: null
  },
  {
    country: "PM",
    phoneCode: "508",
    zone: "America/Miquelon",
    language: "fr",
    firstDay: null
  },
  {
    country: "VC",
    phoneCode: "1-784",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-784-***-****"
  },
  {
    country: "WS",
    phoneCode: "685",
    zone: "Pacific/Apia",
    language: "sm",
    firstDay: null,
    phoneMask: "+685-**-****"
  },
  {
    country: "SM",
    phoneCode: "378",
    zone: "Europe/Rome",
    language: "it",
    firstDay: null,
    phoneMask: "+378-****-******"
  },
  {
    country: "ST",
    phoneCode: "239",
    zone: "Africa/Abidjan",
    language: "pt",
    firstDay: null,
    phoneMask: "+239-**-*****"
  },
  {
    country: "SA",
    phoneCode: "966",
    zone: "Asia/Riyadh",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+966-*-***-****",
      "+966-5-****-****"
    ]
  },
  {
    country: "SN",
    phoneCode: "221",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+221-**-***-****"
  },
  {
    country: "RS",
    phoneCode: "381",
    zone: "Europe/Belgrade",
    language: "sr",
    firstDay: "Mo",
    phoneMask: "+381-**-***-****"
  },
  {
    country: "SC",
    phoneCode: "248",
    zone: "Indian/Mahe",
    language: "en",
    firstDay: null,
    phoneMask: "+248-*-***-***"
  },
  {
    country: "SL",
    phoneCode: "232",
    zone: "Africa/Abidjan",
    language: "en",
    firstDay: null,
    phoneMask: "+232-**-******"
  },
  {
    country: "SG",
    phoneCode: "65",
    zone: "Asia/Singapore",
    language: "cmn",
    firstDay: "Mo",
    phoneMask: "+65-****-****"
  },
  {
    country: "SX",
    phoneCode: "1-721",
    zone: "America/Curacao",
    language: "nl",
    firstDay: null,
    phoneMask: "+1-721-***-****"
  },
  {
    country: "SK",
    phoneCode: "421",
    zone: "Europe/Prague",
    language: "sk",
    firstDay: "Mo",
    phoneMask: "+421-***-***-***"
  },
  {
    country: "SI",
    phoneCode: "386",
    zone: "Europe/Belgrade",
    language: "sl",
    firstDay: null,
    phoneMask: "+386-**-***-***"
  },
  {
    country: "SB",
    phoneCode: "677",
    zone: "Pacific/Guadalcanal",
    language: "en",
    firstDay: null,
    phoneMask: [
      "+677-*****",
      "+677-***-****"
    ]
  },
  {
    country: "SO",
    phoneCode: "252",
    zone: "Africa/Mogadishu",
    language: "so",
    firstDay: null,
    phoneMask: [
      "+252-*-***-***",
      "+252-**-***-***"
    ]
  },
  {
    country: "ZA",
    phoneCode: "27",
    zone: "Africa/Johannesburg",
    language: "zu",
    firstDay: "Su",
    phoneMask: "+27-**-***-****"
  },
  {
    country: "KR",
    phoneCode: "82",
    zone: "Asia/Seoul",
    language: "ko",
    firstDay: "Su",
    phoneMask: "+82-**-***-****"
  },
  {
    country: "SS",
    phoneCode: "211",
    zone: "Africa/Khartoum",
    language: "en",
    firstDay: null,
    phoneMask: "+211-**-***-****"
  },
  {
    country: "ES",
    phoneCode: "34",
    zone: "Europe/Madrid",
    language: "es",
    firstDay: "Mo",
    phoneMask: "+34-***-***-***"
  },
  {
    country: "LK",
    phoneCode: "94",
    zone: "Asia/Colombo",
    language: "si",
    firstDay: null,
    phoneMask: "+94-**-***-****"
  },
  {
    country: "SD",
    phoneCode: "249",
    zone: "Africa/Khartoum",
    language: "ar",
    firstDay: null,
    phoneMask: "+249-**-***-****"
  },
  {
    country: "SR",
    phoneCode: "597",
    zone: "America/Paramaribo",
    language: "nl",
    firstDay: null,
    phoneMask: [
      "+597-***-***",
      "+597-***-****"
    ]
  },
  {
    country: "SJ",
    phoneCode: "47",
    zone: "Europe/Oslo",
    language: "no",
    firstDay: null
  },
  {
    country: "SZ",
    phoneCode: "268",
    zone: "Africa/Johannesburg",
    language: "en",
    firstDay: null,
    phoneMask: "+268-**-**-****"
  },
  {
    country: "SE",
    phoneCode: "46",
    zone: "Europe/Stockholm",
    language: "sv",
    firstDay: "Mo",
    phoneMask: "+46-**-***-****"
  },
  {
    country: "CH",
    phoneCode: "41",
    zone: "Europe/Zurich",
    language: "de",
    firstDay: "Mo",
    phoneMask: "+41-**-***-****"
  },
  {
    country: "SY",
    phoneCode: "963",
    zone: "Asia/Damascus",
    language: "ar",
    firstDay: "Sa",
    phoneMask: "+963-**-****-***"
  },
  {
    country: "TW",
    phoneCode: "886",
    zone: "Asia/Taipei",
    language: "zh",
    firstDay: "Su",
    phoneMask: [
      "+886-****-****",
      "+886-*-****-****"
    ]
  },
  {
    country: "TJ",
    phoneCode: "992",
    zone: "Asia/Dushanbe",
    language: "tg",
    firstDay: null,
    phoneMask: "+992-**-***-****"
  },
  {
    country: "TZ",
    phoneCode: "255",
    zone: "Africa/Dar_es_Salaam",
    language: "sw",
    firstDay: null,
    phoneMask: "+255-**-***-****"
  },
  {
    country: "TH",
    phoneCode: "66",
    zone: "Asia/Bangkok",
    language: "th",
    firstDay: "Mo",
    phoneMask: "+66-**-***-****"
  },
  {
    country: "TG",
    phoneCode: "228",
    zone: "Africa/Abidjan",
    language: "fr",
    firstDay: null,
    phoneMask: "+228-**-***-***"
  },
  {
    country: "TK",
    phoneCode: "690",
    zone: "Pacific/Fakaofo",
    language: "tkl",
    firstDay: null,
    phoneMask: "+690-****"
  },
  {
    country: "TO",
    phoneCode: "676",
    zone: "Pacific/Tongatapu",
    language: "to",
    firstDay: null,
    phoneMask: "+676-*****"
  },
  {
    country: "TT",
    phoneCode: "1-868",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-868-***-****"
  },
  {
    country: "TN",
    phoneCode: "216",
    zone: "Africa/Tunis",
    language: "ar",
    firstDay: "Mo",
    phoneMask: "+216-**-***-***"
  },
  {
    country: "TR",
    phoneCode: "90",
    zone: "Europe/Istanbul",
    language: "tr",
    firstDay: "Mo",
    phoneMask: "+90-***-***-****"
  },
  {
    country: "TM",
    phoneCode: "993",
    zone: "Asia/Ashgabat",
    language: "tk",
    firstDay: null,
    phoneMask: "+993-*-***-****"
  },
  {
    country: "TC",
    phoneCode: "1-649",
    zone: "America/Grand_Turk",
    language: "en",
    firstDay: null,
    phoneMask: "+1-649-***-****"
  },
  {
    country: "TV",
    phoneCode: "688",
    zone: "Pacific/Funafuti",
    language: "tvl",
    firstDay: null,
    phoneMask: [
      "+688-2-****",
      "+688-90-****"
    ]
  },
  {
    country: "VI",
    phoneCode: "1-340",
    zone: "America/Port_of_Spain",
    language: "en",
    firstDay: null,
    phoneMask: "+1-340-***-****"
  },
  {
    country: "UG",
    phoneCode: "256",
    zone: "Africa/Kampala",
    language: "en",
    firstDay: null,
    phoneMask: "+256-***-***-***"
  },
  {
    country: "UA",
    phoneCode: "380",
    zone: "Europe/Kiev",
    language: "uk",
    languageAlternative: [
      "ua"
    ],
    firstDay: "Mo",
    phoneMask: "+380-**-***-**-**"
  },
  {
    country: "AE",
    phoneCode: "971",
    zone: "Asia/Dubai",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+971-*-***-****",
      "+971-5-*-***-****"
    ]
  },
  {
    country: "UY",
    phoneCode: "598",
    zone: "America/Montevideo",
    language: "es",
    firstDay: "Mo",
    phoneMask: "+598-*-***-**-**"
  },
  {
    country: "UZ",
    phoneCode: "998",
    zone: "Asia/Tashkent",
    language: "uz",
    firstDay: "Mo",
    phoneMask: "+998-**-***-****"
  },
  {
    country: "VU",
    phoneCode: "678",
    zone: "Pacific/Efate",
    language: "bi",
    firstDay: null,
    phoneMask: [
      "+678-*****",
      "+678-**-*****"
    ]
  },
  {
    country: "VA",
    phoneCode: "379",
    zone: "Europe/Rome",
    language: "la",
    firstDay: null,
    phoneMask: "+39-6-698-*****"
  },
  {
    country: "VE",
    phoneCode: "58",
    zone: "America/Caracas",
    language: "es",
    firstDay: "Su",
    phoneMask: "+58-***-***-****"
  },
  {
    country: "VN",
    phoneCode: "84",
    zone: "Asia/Ho_Chi_Minh",
    language: "vi",
    firstDay: "Mo",
    phoneMask: [
      "+84-**-****-***",
      "+84-***-****-***"
    ]
  },
  {
    country: "WF",
    phoneCode: "681",
    zone: "Pacific/Wallis",
    language: "wls",
    firstDay: null,
    phoneMask: "+681-**-****"
  },
  {
    country: "EH",
    phoneCode: "212",
    zone: "Africa/El_Aaiun",
    language: "ar",
    firstDay: null
  },
  {
    country: "YE",
    phoneCode: "967",
    zone: "Asia/Aden",
    language: "ar",
    firstDay: "Sa",
    phoneMask: [
      "+967-*-***-***",
      "+967-**-***-***",
      "+967-***-***-***"
    ]
  },
  {
    country: "ZM",
    phoneCode: "260",
    zone: "Africa/Maputo",
    language: "en",
    firstDay: null,
    phoneMask: "+260-**-***-****"
  },
  {
    country: "ZW",
    phoneCode: "263",
    zone: "Africa/Maputo",
    language: "en",
    firstDay: "Su",
    phoneMask: "+263-*-******"
  },
  {
    country: "GF",
    phoneCode: "594",
    zone: "America/Cayenne",
    language: "fr",
    firstDay: "Mo",
    phoneMask: "+594-*****-****"
  },
  {
    country: "MQ",
    phoneCode: "596",
    zone: "America/Martinique",
    language: "fr",
    firstDay: "Mo",
    phoneMask: "+596-***-**-**-**"
  },
  {
    country: "NF",
    phoneCode: "672-3",
    zone: "Pacific/Norfolk",
    language: "en",
    firstDay: "Mo",
    phoneMask: "+672-3-**-***"
  },
  {
    country: "IC",
    phoneCode: "3428",
    zone: "Europe/Berlin",
    language: "es",
    firstDay: "Mo"
  }
], he = "geo-code", g = class g {
  /**
   * Information about the current country.<br>
   * Информация об текущей стране.
   */
  static get() {
    return this.item;
  }
  /**
   * Current country.<br>
   * Текущая страна.
   */
  static getCountry() {
    return this.item.country;
  }
  /**
   * Current language.<br>
   * Текущий язык.
   */
  static getLanguage() {
    return this.language;
  }
  /**
   * Full format according to the standard.<br>
   * Полный формат согласно стандарту.
   */
  static getStandard() {
    return this.item.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  static getFirstDay() {
    return this.item.firstDay;
  }
  /**
   * Full format.<br>
   * Полный формат.
   */
  static getLocation() {
    return this.location;
  }
  /**
   * Obtaining processed data.<br>
   * Получение обработанных данных.
   */
  static getItem() {
    return {
      ...this.item,
      language: this.language
    };
  }
  /**
   * Returns the full list of countries.<br>
   * Возвращает полный список стран.
   */
  static getList() {
    return oe;
  }
  /**
   * Determines the current country by its full name.<br>
   * Определяет текущую страну по ее полному названию.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static find(e) {
    return this.getByCode(e);
  }
  /**
   * Returns a complete string with the country code and language.<br>
   * Возвращает полную строку с кодом страны и языка.
   * @param item object with data about the current country /<br>
   * объект с данными об текущей стране
   */
  static toStandard(e) {
    return `${e.language}-${e.country}`;
  }
  /**
   * Changes the data by the full code.<br>
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   * @param save save the result /<br>сохранить результат
   */
  static set(e, t) {
    this.location = e, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), t && this.storage.set(this.location);
  }
  /**
   * Returns the data about the country by its full code.<br>
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(e) {
    let t;
    return e && (e.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (t = this.getByCodeFull(e)), !t && e.match(/[A-Z]{2}/) && (t = this.getByCountry(this.toCountry(e))), !t && e.match(/[a-z]{2}/) && (t = this.getByLanguage(this.toLanguage(e)))), this.toFull(G(t ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.<br>
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country /<br>строка в виде язык-страна
   */
  static getByCodeFull(e) {
    return this.getList().find(
      (t) => B(e, [
        `${t.language}-${t.country}`,
        `${t.country}-${t.language}`
      ])
    );
  }
  /**
   * Returns the full data by country.<br>
   * Возвращает полные данные по стране.
   * @param country country /<br>страна
   */
  static getByCountry(e) {
    return this.getList().find((t) => {
      var n;
      return t.country === e || ((n = t == null ? void 0 : t.countryAlternative) == null ? void 0 : n.find((a) => a === e));
    });
  }
  /**
   * Returns the full data by language.<br>
   * Возвращает полные данные по языку.
   * @param language language /<br>язык
   */
  static getByLanguage(e) {
    return this.getList().find((t) => {
      var n;
      return t.language === e || ((n = t == null ? void 0 : t.languageAlternative) == null ? void 0 : n.find((a) => a === e));
    });
  }
  /**
   * Determines the current location.<br>
   * Определяет текущую локацию.
   */
  static findLocation() {
    var e;
    return this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || se("language") || "en-GB";
  }
  /**
   * Determines the current language.<br>
   * Определяет текущий язык.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static findLanguage(e) {
    return e && e.match(/[a-z]{2}/) ? this.toLanguage(e) : this.item.language;
  }
  /**
   * Returns the country code by its full language-country.<br>
   * Возвращает код страны по ее полному язык-страна.
   * @param code country code /<br>код страна
   */
  static toCountry(e) {
    return e.replace(/[^A-Z]+/g, "");
  }
  /**
   * Returns the language code by its full language-country.<br>
   * Возвращает код языка по его полному язык-страна.
   * @param code country code /<br>код страна
   */
  static toLanguage(e) {
    return e.replace(/[^a-z]+/g, "");
  }
  /**
   * Adding missing data.<br>
   * Добавление недостающих данных.
   * @param item object with data about the current country /<br>
   * объект с данными об текущей стране
   */
  static toFull(e) {
    return {
      ...e,
      standard: this.toStandard(e),
      firstDay: (e == null ? void 0 : e.firstDay) || "Mo"
    };
  }
};
i(g, "storage", new ie(he)), i(g, "location"), i(g, "item"), i(g, "language"), g.location = g.findLocation(), g.language = g.findLanguage(g.location), g.item = g.getByCode(g.location);
let k = g;
class x {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(e = k.getLocation()) {
    i(this, "geo");
    this.geo = k.find(e);
    const t = this.getLocation();
    if (t in S)
      return S[t];
    S[t] = this;
  }
  /**
   * Returns country code and language.<br>
   * Возвращает код страны и языка.
   */
  getLocation() {
    return this.geo.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  getFirstDay() {
    return this.geo.firstDay;
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(e, t) {
    let n = { type: "language" }, a;
    t && (typeof t == "string" ? n.type = t : n = {
      ...n,
      ...t
    });
    try {
      e ? a = new Intl.DisplayNames(this.getLocation(), n).of(e) : n.type === "language" ? a = new Intl.DisplayNames(this.getLocation(), n).of(this.geo.language) : n.type === "region" && (a = new Intl.DisplayNames(this.getLocation(), n).of(this.geo.country));
    } catch {
    }
    return a ?? e ?? "";
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(e, t) {
    const n = {
      type: "language",
      style: t
    };
    return this.display(e, n);
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(e, t) {
    const n = {
      type: "region",
      style: t
    };
    return this.display(e, n);
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(e, t) {
    var n, a;
    return ((a = (n = this.numberObject(t)) == null ? void 0 : n.format) == null ? void 0 : a.call(n, A(e))) || e.toString();
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    var e, t, n, a, s;
    return ((s = (a = (n = (t = (e = this.numberObject()) == null ? void 0 : e.formatToParts) == null ? void 0 : t.call(e, 1.2)) == null ? void 0 : n.find) == null ? void 0 : a.call(n, (r) => r.type === "decimal")) == null ? void 0 : s.value) || ".";
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(e, t, n = !1) {
    const a = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof t == "string" ? { currency: t } : t || {}
    }, s = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...r) => (a.currency = r[2].toUpperCase(), r[1]));
    if (n) {
      const r = this.numberObject(a);
      return r ? r.formatToParts(A(e)).filter((h) => ["literal", "currency"].indexOf(h.type) === -1).join("") : e.toString();
    } else
      return this.number(s, a);
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(e, t) {
    const n = {
      style: "unit",
      ...typeof t == "string" ? { unit: t } : t || {}
    }, a = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...s) => (n.unit = s[2].toLowerCase(), s[1]));
    return this.number(a, n);
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(e, t) {
    return this.number(e, {
      style: "percent",
      ...t || {}
    });
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(e, t) {
    return this.percent(A(e) / 100, t);
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(e, t, n, a) {
    const s = d(e), r = typeof n == "string", h = this.dateOptions(t, r ? n : "short");
    return a && (h.hour12 = !1), r || Object.assign(h, n), s.toLocaleString(this.getLocation(), h);
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(e, t, n) {
    const a = d(e), s = n || /* @__PURE__ */ new Date(), r = {
      numeric: "auto",
      ...typeof t == "string" ? { style: t } : t || {}
    };
    let h = "second", u = (a.getTime() - s.getTime()) / 1e3;
    Math.abs(u) >= 60 && (h = "minute", u /= 60, Math.abs(u) >= 60 && (h = "hour", u /= 60, Math.abs(u) >= 24 && (h = "day", u /= 24, Math.abs(u) >= 30 && (h = "month", u /= 30, Math.abs(u) >= 12 && (h = "year", u /= 12)))));
    try {
      return new Intl.RelativeTimeFormat(this.getLocation(), r).format(Math.round(u), h);
    } catch {
    }
    return "";
  }
  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.<br>
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param limit values that determine the output limit (values per day) /<br>
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day /<br>текущий день
   * @param relativeOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month /<br>представление месяца
   * @param type type of data format /<br>тип формата data
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  relativeLimit(e, t, n, a, s, r, h) {
    const u = d(e), l = n || /* @__PURE__ */ new Date(), c = new Date(l), y = new Date(l);
    return c.setDate(l.getDate() - t), y.setDate(l.getDate() + t), u >= c && u <= y ? this.relative(
      u,
      a,
      l
    ) : this.date(
      u,
      r,
      s,
      h
    );
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(e, t) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { month: t || "long" }).format(d(e));
    } catch {
    }
    return "";
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(e) {
    const t = [{
      label: "",
      value: void 0
    }];
    try {
      const n = /* @__PURE__ */ new Date(), a = Intl.DateTimeFormat(this.getLocation(), { month: e || "long" });
      for (let s = 0; s < 12; s++)
        n.setMonth(s), t.push({
          label: a.format(n).replace(/^./, (r) => r.toUpperCase()),
          value: s + 1
        });
    } catch {
    }
    return t;
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(e, t) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }).format(d(e));
    } catch {
    }
    return "";
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(e) {
    const t = [{
      label: "",
      value: void 0
    }];
    try {
      const n = /* @__PURE__ */ new Date(), a = Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }), s = n.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
      n.setDate(n.getDate() - s);
      for (let r = 0; r < 7; r++)
        t.push({
          label: a.format(n).replace(/^./, (h) => h.toUpperCase()),
          value: n.getDay()
        }), n.setDate(n.getDate() + 1);
    } catch {
    }
    return t;
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(e) {
    return this.date(e, "time");
  }
  /**
   * Sorts strings taking into account the characteristics of countries.<br>
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data /<br>массив с данными
   * @param compareFn a function for sorting /<br>функция для сортировки
   */
  sort(e, t = (n, a) => [n, a]) {
    const n = new Intl.Collator(this.getLocation());
    return e.sort((a, s) => n.compare(...t(a, s)));
  }
  /**
   * The object enables language-sensitive number formatting.<br>
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  numberObject(e) {
    try {
      return new Intl.NumberFormat(this.getLocation(), e);
    } catch {
    }
  }
  /**
   * Returns options for data according to its type.<br>
   * Возвращает options для data по его типу.
   * @param type type of data format /<br>тип формата data
   * @param display the representation of the month /<br>представление месяца
   */
  dateOptions(e, t = "short") {
    const n = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(e) !== -1 && (n.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month"].indexOf(e) !== -1 && (n.month = t), ["full", "datetime", "date", void 0, "day"].indexOf(e) !== -1 && (n.day = "2-digit"), e !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(e) !== -1 && (n.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(e) !== -1 && (n.minute = "2-digit"), ["full", "time", "second"].indexOf(e) !== -1 && (n.second = "2-digit")), n;
  }
}
const S = {};
class z {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(e, t = "date", n = k.getLocation()) {
    i(this, "date");
    i(this, "hour24", !1);
    i(this, "watch");
    this.type = t, this.code = n, this.date = d(e);
  }
  /**
   * Returns an object for working with formatting.<br>
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new x(this.code);
  }
  /**
   * Returns a Date object.<br>
   * Возвращает объект Date.
   */
  getDate() {
    return this.date;
  }
  /**
   * Returns the type of data output.<br>
   * Возвращает тип вывода данных.
   */
  getType() {
    return this.type;
  }
  /**
   * Returns the format of hours.<br>
   * Возвращает формат часов.
   */
  getHoursType() {
    const e = this.clone();
    return e.setHours(23), e.toLocaleTimeString(this.getIntl().getLocation(), { hour: "2-digit" }).match(/23/ig) ? "24" : "12";
  }
  /**
   * Whether to use 12-hour time.<br>
   * Использовать ли 12-часовой формат времени.
   */
  getHour24() {
    return this.hour24;
  }
  /**
   * The method returns the difference, in minutes, between
   * a date as evaluated in the UTC time zone, and the same date as evaluated
   * in the local time zone.<br>
   * Метод возвращает смещение часового пояса относительно часового пояса UTC
   * в минутах для текущей локали.
   */
  getTimeZoneOffset() {
    return this.date.getTimezoneOffset();
  }
  /**
   * Returns the time zone as a string.<br>
   * Возвращает временную зону в виде строки.
   * @param style the style of the returned data /<br>стиль возвращаемых данных
   */
  getTimeZone(e) {
    const t = this.getTimeZoneOffset();
    if (e === "minute")
      return t.toString();
    const n = t / 60 * -1;
    if (e === "hour")
      return this.getIntl().number(Math.trunc(n), { signDisplay: "always" });
    const a = this.getIntl().number(Math.trunc(n), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), s = n.toString().match(/.\d+/) ? "30" : "00";
    return e === "RFC" ? `${a}${s}` : `${a}:${s}`;
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    const e = this.getIntl().getFirstDay();
    return e === "Sa" ? 6 : e === "Su" ? 0 : 1;
  }
  /**
   * The method returns the year of the specified date according to local time.<br>
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear() {
    return this.date.getFullYear();
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.<br>
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return this.date.getMonth() + 1;
  }
  /**
   * The method returns the day of the month for the specified date according to local time.<br>
   * Метод возвращает день месяца указанной даты по местному времени
   */
  getDay() {
    return this.date.getDate();
  }
  /**
   * The method returns the hour for the specified date, according to local time.<br>
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return this.date.getHours();
  }
  /**
   * The method returns the minutes in the specified date according to local time.<br>
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return this.date.getMinutes();
  }
  /**
   * The method returns the seconds in the specified date according to local time.<br>
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return this.date.getSeconds();
  }
  /**
   * Returns the last day of the week.<br>
   * Возвращает последний день недели.
   */
  getMaxDay() {
    return this.getMonth() > 0 ? this.cloneDayLast().getDay() : 0;
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(e = this.type, t) {
    return this.getIntl().date(
      this.date,
      e,
      t,
      this.hour24
    );
  }
  /**
   * Returns the formatted year.<br>
   * Возвращает отформатированный год.
   * @param style the representation of the month /<br>представление месяца
   */
  localeYear(e = "numeric") {
    return this.locale("year", { year: e });
  }
  /**
   * Returns the formatted month.<br>
   * Возвращает отформатированный месяц.
   * @param style the representation of the month /<br>представление месяца
   */
  localeMonth(e = "long") {
    return this.locale("month", { month: e });
  }
  /**
   * Returns the formatted day.<br>
   * Возвращает отформатированный день.
   * @param style the representation of the month /<br>представление месяца
   */
  localeDay(e = "numeric") {
    return this.locale("day", { day: e });
  }
  /**
   * Returns the formatted hour.<br>
   * Возвращает отформатированный час.
   * @param style the representation of the month /<br>представление месяца
   */
  localeHour(e = "numeric") {
    return this.locale("hour", { hour: e });
  }
  /**
   * Returns the formatted minute.<br>
   * Возвращает отформатированную минуту.
   * @param style the representation of the month /<br>представление месяца
   */
  localeMinute(e = "numeric") {
    return this.locale("minute", { minute: e });
  }
  /**
   * Returns the formatted second.<br>
   * Возвращает отформатированную секунду.
   * @param style the representation of the month /<br>представление месяца
   */
  localeSecond(e = "numeric") {
    return this.locale("second", { second: e });
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(e = !0) {
    const t = new z(this.date, this.type, "en-GB"), n = [];
    let a;
    return t.setHour24(!0), this.type === "hour-minute" ? a = t.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (n.push(t.localeYear()), n.push(t.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && n.push(t.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (a = t.locale("time"))), `${n.join("-")}${a ? `T${a}${e ? t.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.<br>
   * Изменять полностью дату.
   * @param value an integer value representing the number /<br>
   * целочисленное значение, представляющее число
   */
  setDate(e) {
    return this.date = d(e), this.update(), this;
  }
  /**
   * Change the type of data output.<br>
   * Изменить тип вывода данных.
   * @param value type of output /<br>тип вывод
   */
  setType(e) {
    return this.type = e, this.update(), this;
  }
  /**
   * Whether to use 12-hour time.<br>
   * Использовать ли 12-часовой формат времени.
   * @param value If true, output the 12-hour time format /<br>
   * если true, выводить 12-часовой формат времени
   */
  setHour24(e) {
    return this.hour24 = e, this.update(), this;
  }
  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode(e) {
    return this.code = e, this;
  }
  /**
   * The function is called when the data is updated.<br>
   * Функция вызывается при обновлении данных.
   * @param watch the function calls /<br>функция вызывает
   */
  setWatch(e) {
    return this.watch = e, this;
  }
  /**
   * The method sets the full year for a specified date according to local time.<br>
   * Метод устанавливает полный год указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setYear(e) {
    return this.date.setFullYear(e), this.update(), this;
  }
  /**
   * The method sets the month for a specified date according to the currently set year.<br>
   * Метод устанавливает месяц указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setMonth(e) {
    return this.date.setMonth(e - 1), this.update(), this;
  }
  /**
   * The method changes the day of the month of a given Date instance, based on local time.<br>
   * Метод устанавливает день месяца указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setDay(e) {
    return this.date.setDate(e), this.update(), this;
  }
  /**
   * The method sets the hours for a specified date according to local time.<br>
   * Метод устанавливает часы указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setHour(e) {
    return this.date.setHours(e), this.update(), this;
  }
  /**
   * The method sets the minutes for a specified date according to local time
   *
   * Метод устанавливает минуты указанной даты по местному времени
   * @param value value / значения
   */
  setMinute(e) {
    return this.date.setMinutes(e), this.update(), this;
  }
  /**
   * The method sets the seconds for a specified date according to local time.<br>
   * Метод устанавливает секунды указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setSecond(e) {
    return this.date.setSeconds(e), this.update(), this;
  }
  /**
   * Shift the date by a given value in years.<br>
   * Сдвинуть дату на заданное значение в годах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByYear(e) {
    return this.setYear(this.date.getFullYear() + e), this;
  }
  /**
   * Shift the date by a given value in months.<br>
   * Сдвинуть дату на заданное значение в месяцах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByMonth(e) {
    return this.setMonth(this.date.getMonth() + 1 + e), this;
  }
  /**
   * Shift the date by a given value in days.<br>
   * Сдвинуть дату на заданное значение в днях.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByDay(e) {
    return this.setDay(this.date.getDate() + e), this;
  }
  /**
   * Shift the date by a given value in hours.<br>
   * Сдвинуть дату на заданное значение в часах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByHour(e) {
    return this.setHour(this.date.getHours() + e), this;
  }
  /**
   * Shift the date by a given value in minutes.<br>
   * Сдвинуть дату на заданное значение в минутах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByMinute(e) {
    return this.setMinute(this.date.getMinutes() + e), this;
  }
  /**
   * Shift the date by a given value in seconds.<br>
   * Сдвинуть дату на заданное значение в секундах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveBySecond(e) {
    return this.setSecond(this.date.getSeconds() + e), this;
  }
  /**
   * Translate to the first month.<br>
   * Переводить на первый месяц.
   */
  moveMonthFirst() {
    return this.setMonth(1), this;
  }
  /**
   * Translate to the first month.<br>
   * Переводить на первый месяц.
   */
  moveMonthLast() {
    return this.setMonth(12), this;
  }
  /**
   * Translate to the first day of the next month.<br>
   * Переводить на первый день следующего месяца.
   */
  moveMonthNext() {
    return this.setDay(1).moveByMonth(1), this;
  }
  /**
   * Translate to the first day of the previous month.<br>
   * Переводить на первый день предыдущего месяца.
   */
  moveMonthPrevious() {
    return this.setDay(1).moveByMonth(-1), this;
  }
  /**
   * Translate to the first day of the week.<br>
   * Переводить на первый день недели.
   */
  moveWeekdayFirst() {
    const e = this.date.getDay(), t = this.getFirstDayCode();
    return this.moveByDay(
      (t === 6 ? -1 : t) - e
    ), this;
  }
  /**
   * Translate to the last day of the week.<br>
   * Переводить на последний день недели.
   */
  moveWeekdayLast() {
    return this.moveWeekdayFirst().moveByDay(6), this;
  }
  /**
   * Translate to the first day of the first week of the month.<br>
   * Переводить на первый день первой недели месяца.
   */
  moveWeekdayFirstByMonth() {
    return this.moveDayFirst().moveWeekdayFirst(), this;
  }
  /**
   * Translate to the first day of the first full week of the following month.<br>
   * Переводить на первый день первой полной недели следующего месяца.
   */
  moveWeekdayLastByMonth() {
    return this.moveDayLast().moveWeekdayLast(), this;
  }
  /**
   * Translate to the next week.<br>
   * Переводить на следующую неделю.
   */
  moveWeekdayNext() {
    return this.moveWeekdayFirst().moveByDay(7), this;
  }
  /**
   * Translate to the previous week.<br>
   * Переводить на предыдущую неделю.
   */
  moveWeekdayPrevious() {
    return this.moveWeekdayFirst().moveByDay(-7), this;
  }
  /**
   * Translate to the first day of the month.<br>
   * Переводить на первый день месяца.
   */
  moveDayFirst() {
    return this.setDay(1), this;
  }
  /**
   * Translate to the last day of the month.<br>
   * Переводить на последний день месяца.
   */
  moveDayLast() {
    return this.setDay(1).moveByMonth(1).moveByDay(-1), this;
  }
  /**
   * Translate to the next day.<br>
   * Переводить на следующий день.
   */
  moveDayNext() {
    return this.moveByDay(1), this;
  }
  /**
   * Translate to the previous day.<br>
   * Переводить на предыдущий день.
   */
  moveDayPrevious() {
    return this.moveByDay(-1), this;
  }
  /**
   * Clone the Date object.<br>
   * Клонировать объект Date.
   */
  clone() {
    return new Date(this.date);
  }
  /**
   * Clone the GeoDate object.<br>
   * Клонировать объект GeoDate.
   */
  cloneClass() {
    return new this.constructor(
      this.clone(),
      this.type,
      this.code
    );
  }
  /**
   * Clone the GeoDate object and set the month to January.<br>
   * Клонировать объект GeoDate и установить месяц на январь.
   */
  cloneMonthFirst() {
    return this.cloneClass().moveMonthFirst();
  }
  /**
   * Clone the GeoDate object and move the month to the end of the year.<br>
   * Клонировать объект GeoDate и перевести месяц на конец года.
   */
  cloneMonthLast() {
    return this.cloneClass().moveMonthLast();
  }
  /**
   * Clone the GeoDate object and transfer it one month ahead.<br>
   * Клонировать объект GeoDate и перевести на 1 месяц вперед.
   */
  cloneMonthNext() {
    return this.cloneClass().moveMonthNext();
  }
  /**
   * Clone the GeoDate object and transfer it one month back.<br>
   * Клонировать объект GeoDate и перевести на 1 месяц назад.
   */
  cloneMonthPrevious() {
    return this.cloneClass().moveMonthPrevious();
  }
  /**
   * Returns the first day of the week according to the current date.<br>
   * Возвращает первый день недели по текущей дате.
   */
  cloneWeekdayFirst() {
    return this.cloneClass().moveWeekdayFirst();
  }
  /**
   * Returns the last day of the week according to the current date.<br>
   * Возвращает последний день недели по текущей дате.
   */
  cloneWeekdayLast() {
    return this.cloneClass().moveWeekdayLast();
  }
  /**
   * Returns the first day of the week according to the current month.<br>
   * Возвращает первый день недели по текущему месяцу.
   */
  cloneWeekdayFirstByMonth() {
    return this.cloneClass().moveWeekdayFirstByMonth();
  }
  /**
   * Returns the last day of the week according to the current month.<br>
   * Возвращает последний день недели по текущему месяцу.
   */
  cloneWeekdayLastByMonth() {
    return this.cloneClass().moveWeekdayLastByMonth();
  }
  /**
   * Returns the next week according to the current date.<br>
   * Возвращает следующую неделю по текущей дате.
   */
  cloneWeekdayNext() {
    return this.cloneClass().moveWeekdayNext();
  }
  /**
   * Returns the previous week according to the current date.<br>
   * Возвращает предыдущую неделю по текущей дате.
   */
  cloneWeekdayPrevious() {
    return this.cloneClass().moveWeekdayPrevious();
  }
  /**
   * Clone the GeoDate object and move the day to the beginning of the month.<br>
   * Клонировать объект GeoDate и перевести день на начало месяца.
   */
  cloneDayFirst() {
    return this.cloneClass().moveDayFirst();
  }
  /**
   * Clone the GeoDate object and move the day to the end of the month.<br>
   * Клонировать объект GeoDate и перевести день на конец месяца.
   */
  cloneDayLast() {
    return this.cloneClass().moveDayLast();
  }
  /**
   * Clone the GeoDate object and move by 1 day.<br>
   * Клонировать объект GeoDate и перевести на 1 день.
   */
  cloneDayNext() {
    return this.cloneClass().moveDayNext();
  }
  /**
   * Clone the GeoDate object and go back by 1 day.<br>
   * Клонировать объект GeoDate и вернуться на 1 день.
   */
  cloneDayPrevious() {
    return this.cloneClass().moveDayPrevious();
  }
  /**
   * Updating all values.<br>
   * Обновление всех значений.
   */
  update() {
    var e;
    return (e = this.watch) == null || e.call(
      this,
      this.date,
      this.type,
      this.hour24
    ), this;
  }
}
class ue {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    this.props = e;
  }
  /**
   * Is the mask numeric.<br>
   * Является ли маска числовой.
   */
  isNumber() {
    return this.get() === "number";
  }
  /**
   * Is the input mask a currency value.<br>
   * Является ли маска для ввода валютным значением.
   */
  isCurrency() {
    return this.get() === "currency";
  }
  /**
   * Is the input mask one of the numeric types.<br>
   * Является ли маска для ввода одним из числовых типов.
   */
  isCurrencyOrNumber() {
    return this.isNumber() || this.isCurrency();
  }
  /**
   * Is this a mask for email input.<br>
   * Является ли это маской для ввода email.
   */
  isEmail() {
    return this.get() === "email";
  }
  /**
   * Is the mask one of the types for time input.<br>
   * Является ли маска одним из типов для ввода времени.
   */
  isTime() {
    return [
      "full",
      "datetime",
      "time",
      "hour-minute",
      "hour",
      "minute",
      "second"
    ].indexOf(this.get()) !== -1;
  }
  /**
   * Is the mask one of the types for date input.<br>
   * Является ли маска одним из типов для ввода даты.
   */
  isDate() {
    return this.isTime() || [
      "date",
      "year-month",
      "month",
      "day"
    ].indexOf(this.get()) !== -1;
  }
  /**
   * Returns the type of mask.<br>
   * Возвращает тип маски.
   */
  get() {
    var e;
    return ((e = this.props) == null ? void 0 : e.type) ?? "text";
  }
  /**
   * Returns the type of mask for working with dates.<br>
   * Возвращает тип маски для работы с датами.
   */
  getByDate() {
    return this.isDate() ? this.get() : "date";
  }
}
class le {
  constructor() {
    i(this, "chars", []);
    i(this, "start", !1);
  }
  /**
   * Checks for records in the buffer.
   * Проверяет наличие записей в буфере.
   */
  is() {
    return this.chars.length > 0;
  }
  /**
   * Gets a list of all records in the buffer.<br>
   * Получает список всех записей в буфере.
   */
  get() {
    return this.chars;
  }
  /**
   * Inserts a new input symbol into the buffer.<br>
   * Вставляет новый символ ввода в буфер.
   * @param key symbol that needs to be added /<br>символ, который необходимо добавить
   */
  add(e) {
    return this.chars.push(e), this;
  }
  /**
   * Starts buffering data if data is being processed.<br>
   * Начинает буферизировать данные, если в обработке идут данные.
   * @param key symbol that needs to be added /<br>символ, который необходимо добавить
   */
  go(e) {
    return this.start ? (this.add(e), !1) : (this.goStart(), !0);
  }
  /**
   * Starts buffering data
   * Начинает буферизировать данные.
   */
  goStart() {
    return this.start = !0, this;
  }
  /**
   * Resets all values to the original.<br>
   * Сбрасывает все значения до исходного.
   */
  reset() {
    return this.resetChars(), this.start = !1, this;
  }
  /**
   * Resets the saved values.<br>
   * Сбрасывает сохраненные значения.
   */
  resetChars() {
    return this.chars = [], this;
  }
}
class ce {
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    i(this, "value", !1);
    this.buffer = e;
  }
  /**
   * Checks for focus on the element.<br>
   * Проверяет наличие фокуса у элемента.
   */
  is() {
    return this.value;
  }
  /**
   * Set the element state to focused.<br>
   * Установить состояние элемента на фокусированное.
   */
  in() {
    this.value = !0, this.buffer.reset();
  }
  /**
   * Reset the focus of the element.<br>
   * Сбросить фокус элемента.
   */
  out() {
    this.value = !1, this.buffer.reset();
  }
}
class ge {
  constructor() {
    i(this, "value", {});
  }
  /**
   * Checks if the selected group has a value.<br>
   * Проверяет, есть ли значение у выбранной группы.
   * @param groupName group name /<br>название группы
   */
  is(e) {
    return e in this.value;
  }
  /**
   * Returns the filling list by groups.<br>
   * Возвращает список заполнения по группам.
   */
  get() {
    return this.value;
  }
  /**
   * Returns data for caching.<br>
   * Возвращает данные для кеширования.
   */
  getCode() {
    return [
      ...Object.keys(this.value),
      ...Object.values(this.value)
    ];
  }
  /**
   * Returns the fill status by the group name.<br>
   * Возвращает заполненность по названию группы.
   * @param groupName group name /<br>название группы
   */
  getByIndex(e) {
    var t;
    return ((t = this.value) == null ? void 0 : t[e]) ?? 0;
  }
  /**
   * Adding a fill feature to the group for another 1 character.<br>
   * Добавление признака заполнения у группы на еще 1 символ.
   * @param groupName group name /<br>название группы
   */
  add(e) {
    return this.value[e] = this.getByIndex(e) + 1, this;
  }
  /**
   * Decrease by 1 the sign of the filled character in the group.<br>
   * Уменьшение на 1 признака заполненного символа у группы.
   * @param groupName group name /<br>название группы
   */
  pop(e) {
    return this.is(e) ? (--this.value[e] <= 0 && delete this.value[e], !0) : !1;
  }
  /**
   * Reset all records to the initial state.<br>
   * Сброс всех записей до начального состояния.
   */
  reset() {
    return this.value = {}, this;
  }
  /**
   * Process the mask so that the length of the rubber records increases
   * depending on the number of filled records.<br>
   * Обрабатывайте маску так, чтобы длина резиновых записей увеличивалась в
   * зависимости от количества заполненных записей.
   * @param mask selected mask /<br>выбранная маска
   */
  expandMask(e) {
    let t = e;
    return I(this.value, (n, a) => {
      t = t.replace(
        Z(a, "g", "([:value]+)"),
        (s) => `${s}${L(a, n)}`
      );
    }), t;
  }
}
class pe {
  constructor() {
    i(this, "char", "");
  }
  /**
   * Checks if the active group has a transition symbol.<br>
   * Проверяет, есть ли у активной группы символ перехода.
   */
  is() {
    return this.char !== "";
  }
  /**
   * Checks if the current character is a transition character.<br>
   * Проверяет, является ли текущий символ символом перехода.
   * @param char transition symbol /<br>символ перехода
   */
  isChar(e) {
    return this.char === e;
  }
  /**
   * Returns the current transition symbol.<br>
   * Возвращает текущий символ перехода.
   */
  get() {
    return this.char;
  }
  /**
   * Changes the transition symbol.<br>
   * Изменяет символ перехода.
   * @param char transition symbol /<br>символ перехода
   */
  set(e) {
    return this.char = e, this;
  }
  /**
   * Resets the values to the base ones.<br>
   * Сбрасывает значения до базовых.
   */
  reset() {
    return this.set("");
  }
}
class ye {
  constructor() {
    i(this, "length", 0);
  }
  /**
   * Checks if the values are filled in.<br>
   * Проверяет, заполнены ли значения.
   */
  is() {
    return this.get() > 0;
  }
  /**
   * Getting the length of input symbols.<br>
   * Получение длины вводимых символов.
   */
  get() {
    return this.length;
  }
  /**
   * Changing the length of input symbols.<br>
   * Изменение длины вводимых символов.
   * @param length new length /<br>новая длина
   */
  set(e) {
    return this.length = e, this;
  }
}
const fe = {
  Y: "[0-9]{4}",
  M: {
    type: "number",
    min: "1",
    max: "12"
  },
  D: (o) => {
    var t, n;
    return {
      type: "number",
      min: "1",
      max: new z(`${((t = o == null ? void 0 : o.Y) == null ? void 0 : t.value) ?? "2000"}-${((n = o == null ? void 0 : o.M) == null ? void 0 : n.value) ?? "01"}-01`).getMaxDay().toString()
    };
  },
  h: {
    type: "number",
    min: "0",
    max: "23"
  },
  m: {
    type: "number",
    min: "0",
    max: "59"
  },
  s: {
    type: "number",
    min: "0",
    max: "59"
  }
};
class de {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type object of the mask type class /<br>объект класса тип маски
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t) {
    this.props = e, this.type = t;
  }
  /**
   * Returns a DateTime object.<br>
   * Возвращает объект DateTime.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  getDatetime(e) {
    var t;
    return new z(e ?? "1987-12-18T10:20:30", this.type.getByDate(), (t = this.props) == null ? void 0 : t.language);
  }
  /**
   * Returns a mask for filling in the date.<br>
   * Возвращает маску для заполнения даты.
   */
  getMask() {
    return this.getDatetime().setHour24(!0).locale(void 0, "2-digit").replace("1987", "YYYY").replace("12", "MM").replace("18", "DD").replace("10", "hh").replace("20", "mm").replace("30", "ss").split("");
  }
  /**
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  getValue(e) {
    return this.getDatetime(e).locale(void 0, "2-digit");
  }
  /**
   * Returns the standardized date value.<br>
   * Возвращает стандартизированное значение даты.
   * @param date an object with a filled date, divided into groups of characters /<br>
   * объект с заполненной датой, разделенный на группы символов
   */
  getValueStandard(e) {
    var n, a, s, r, h, u;
    const t = `${((n = e == null ? void 0 : e.Y) == null ? void 0 : n.value) || "2000"}-${((a = e == null ? void 0 : e.M) == null ? void 0 : a.value) || "01"}-${((s = e == null ? void 0 : e.D) == null ? void 0 : s.value) || "01"}T${((r = e == null ? void 0 : e.h) == null ? void 0 : r.value) || "00"}:${((h = e == null ? void 0 : e.m) == null ? void 0 : h.value) || "00"}:${((u = e == null ? void 0 : e.s) == null ? void 0 : u.value) || "00"}`;
    return isNaN(Date.parse(t)) ? "" : this.getDatetime(t).standard(!1);
  }
  /**
   * Returns a validation template for the date.<br>
   * Возвращает шаблон проверки для даты.
   */
  getPattern() {
    return fe;
  }
  /**
   * Returns a list of symbols for output by group name.<br>
   * Возвращает список символов для вывода по названию группы.
   * @param groupName group name /<br>название группы
   */
  getView(e) {
    var t;
    return (t = this.getViewList()) == null ? void 0 : t[e];
  }
  /**
   * Returns a list of symbols for output by group.<br>
   * Возвращает список символов для вывода по группе.
   */
  getViewList() {
    return {
      Y: "y",
      M: "m",
      D: "d",
      h: "h",
      m: "m",
      s: "s"
    };
  }
}
class me {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param rubberItem
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, n) {
    this.props = e, this.type = t, this.rubberItem = n;
  }
  /**
   * Checks if there is a group for the remainder.<br>
   * Проверяет, есть ли группа для остатка.
   */
  isFractionRubber() {
    return this.props.fraction === !0;
  }
  /**
   * Gets an object for working with number formatting.<br>
   * Получает объект для работы с форматированием числа.
   */
  getIntl() {
    var e;
    return new x((e = this.props) == null ? void 0 : e.language);
  }
  /**
   * Getting the number of digits in the remainder.<br>
   * Получение количества чисел в остатке.
   */
  getFraction() {
    var t;
    if (this.type.isCurrency())
      return 2;
    const e = (t = this.props) == null ? void 0 : t.fraction;
    return typeof e == "number" ? e : typeof e == "string" && e.match(/[0-9]+/) ? Number(e) : this.rubberItem.is("f") ? this.rubberItem.getByIndex("f") + 1 : e === !0 ? 1 : 0;
  }
  /**
   * Returns masks for a number or price.<br>
   * Возвращает маски для числа или цены.
   */
  getMask() {
    return (this.type.isCurrency() ? this.getCurrency() : this.getNumber()).replace(/9/ig, "n").replace(/3/ig, "f").split("");
  }
  /**
   * Returns the settings of special characters for input.<br>
   * Возвращает настройки специальных символов для ввода.
   */
  getSpecial() {
    return {
      n: {},
      f: {
        defaultValue: "0"
      }
    };
  }
  /**
   * Getting instructions for forming a rubber mask.<br>
   * Получение инструкции для формирования резиновой маски.
   */
  getRubber() {
    return {
      n: {
        rubber: !0,
        transitionChar: this.getDecimal(),
        maxLength: 10
      },
      f: {
        rubber: this.isFractionRubber(),
        maxLength: 4
      }
    };
  }
  /**
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param value a string with a filled date /<br>строка с заполненной датой
   */
  getValueStandard(e) {
    var t, n;
    return `${((t = e == null ? void 0 : e.n) == null ? void 0 : t.value) || "0"}.${((n = e == null ? void 0 : e.f) == null ? void 0 : n.value) || "0"}`;
  }
  /**
   * Returns the data as a formatted number.<br>
   * Возвращает данные в виде отформатированного числа.
   */
  getNumber() {
    return this.getIntl().number(this.getNumberForString(), { maximumFractionDigits: 9 });
  }
  /**
   * Returns the data as a formatted price with a currency symbol.<br>
   * Возвращает данные в виде отформатированной цены с символом валюты.
   */
  getCurrency() {
    return this.getIntl().currency(this.getNumberForString());
  }
  /**
   * Returns a list of delimiter characters for transitioning to the drop group.<br>
   * Возвращает список символов-разделителей для перехода в группу дроп.
   */
  getDecimal() {
    return [this.getIntl().decimal(), "."];
  }
  /**
   * Returns a list of symbols for output by group name.<br>
   * Возвращает список символов для вывода по названию группы.
   */
  getView() {
    return "0";
  }
  /**
   * Returns a string with values for obtaining a formatted value.<br>
   * Возвращает строку со значениями для получения отформатированного значения.
   */
  getNumberForString() {
    var s;
    const e = this.getFraction(), t = L("9", this.rubberItem.getByIndex("n") + 1), n = e ? `.${L("3", e)}` : "", a = this.type.isCurrency() && ((s = this.props) != null && s.currency) ? ` ${this.props.currency}` : "";
    return `${t}${n}${a}`;
  }
}
class ke extends f {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param format
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, n) {
    super(() => this.initValue()), this.props = e, this.type = t, this.format = n;
  }
  /**
   * Checks if the character is special.<br>
   * Проверяет, является ли символ специальным.
   * @param char symbol for checking /<br>символ для проверки
   */
  isSpecial(e) {
    return this.get().indexOf(e) !== -1;
  }
  /**
   * Returns the transition symbol for the selected group.<br>
   * Проверяет, является ли символ перехода для выбранной группы.
   * @param groupName group name /<br>название группы
   * @param char symbol for checking /<br>символ для проверки
   */
  isTransitionChar(e, t) {
    const n = this.getTransitionChar(e);
    return n ? B(t, n) : !1;
  }
  /**
   * Checks if the special character is only 1.<br>
   * Проверяет, является ли специальный символ только 1.
   */
  isString() {
    return this.get().length <= 1;
  }
  /**
   * Checks if there are default values.<br>
   * Проверяет, есть ли значения по умолчанию.
   * @param groupName group name /<br>название группы
   */
  isDefault(e) {
    return !!this.getDefault(e);
  }
  /**
   * Returns a list of special symbols<br>.
   * Возвращает список специальных символов.
   */
  get() {
    var e, t;
    return this.getCache([
      (e = this.props) == null ? void 0 : e.type,
      (t = this.props) == null ? void 0 : t.special
    ]);
  }
  /**
   * Returns the first special symbol to determine the entry point.<br>
   * Возвращает первый специальный символ для определения места входа.
   */
  getFirst() {
    var e;
    return ((e = this.get()) == null ? void 0 : e[0]) ?? "*";
  }
  /**
   * Returns the default values.<br>
   * Возвращает значения по умолчанию.
   * @param groupName group name /<br>название группы
   */
  getDefault(e) {
    var t;
    return (t = this.getSpecialItem(e)) == null ? void 0 : t.defaultValue;
  }
  /**
   * Returns the transition symbol for the selected group.<br>
   * Возвращает символ перехода для выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getTransitionChar(e) {
    var t;
    return (t = this.getSpecialItem(e)) == null ? void 0 : t.transitionChar;
  }
  /**
   * Returns a regular expression for checking the incoming character by groups.<br>
   * Возвращает регулярное выражение для проверки входящего символа по группам.
   * @param groupName group name /<br>название группы
   */
  getMatch(e) {
    var t;
    return (t = this.getSpecialItem(e)) == null ? void 0 : t.match;
  }
  /**
   * Returns data for checking the selected group.<br>
   * Возвращает данные для проверки выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getPattern(e) {
    var t;
    return (t = this.getSpecialItem(e)) == null ? void 0 : t.pattern;
  }
  /**
   * Возвращает данные, по который будет отображать на экране.
   * @param groupName group name /<br>название группы
   */
  getView(e) {
    var t;
    return (t = this.getSpecialItem(e)) == null ? void 0 : t.view;
  }
  /**
   * Returns an array of all groups that have special symbols.<br>
   * Возвращает массив всех групп, у которых есть специальные символы.
   */
  getRubberList() {
    const e = {}, t = this.getSpecial();
    return b(t) && I(t, (n, a) => {
      n != null && n.rubber && (e[a] = n);
    }), e;
  }
  /**
   * Getting a special symbol from props.<br>
   * Получение специального символа из props.
   */
  getSpecial() {
    var e;
    return this.type.isCurrencyOrNumber() ? this.format.getSpecial() : ((e = this.props) == null ? void 0 : e.special) ?? "*";
  }
  /**
   * Getting data about a special symbol by group.<br>
   * Получение данных о специальном символе по группе.
   * @param groupName group name /<br>название группы
   */
  getSpecialItem(e) {
    const t = this.getSpecial();
    if (b(t) && e in t)
      return t[e];
  }
  /**
   * Processes all data and returns an array with a list of special symbols.<br>
   * Обрабатывает все данные и возвращает массив со списком специальных символов.
   */
  initValue() {
    if (this.type.isCurrencyOrNumber())
      return ["n", "f"];
    if (this.type.isTime())
      return ["Y", "M", "D", "h", "m", "s"];
    if (this.type.isDate())
      return ["Y", "M", "D"];
    const e = this.getSpecial();
    return v(e) ? e : U(e) ? Object.keys(e) : [e];
  }
}
const P = /[0-9]/;
class Me {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param special
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t) {
    this.props = e, this.special = t;
  }
  /**
   * Checks if the symbol fits.<br>
   * Проверяет, подходит ли символ.
   * @param char symbol for checking /<br>символ для проверки
   * @param groupName group for checking /<br>группа для проверки
   */
  is(e, t) {
    const n = this.get(t);
    return n instanceof RegExp ? !!e.match(n) : F(n) ? !!e.match(new RegExp(n)) : !!e.match(P);
  }
  /**
   * Returns the value of the regular expression for checking.<br>
   * Возвращает значение регулярного выражения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  get(e) {
    var t;
    return (e && this.special.getMatch(e)) ?? ((t = this.props) == null ? void 0 : t.match) ?? P;
  }
  /**
   * Returns only the characters that can be entered from the string.<br>
   * Возвращает только символы, доступные для ввода из строки.
   * @param text text for checking /<br>текст для проверки
   */
  filter(e) {
    const t = this.special.get();
    return e.split("").filter((n) => t.find((a) => this.is(n, a)));
  }
}
class Ce {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param special
   */
  constructor(e, t, n, a) {
    i(this, "inputs");
    this.props = e, this.type = t, this.date = n, this.special = a, this.inputs = new f(() => this.initInput());
  }
  /**
   * Checks if there is a global check of input data.<br>
   * Проверяет, есть ли глобальная проверка вводимых данных.
   */
  isCheck() {
    var e;
    return !!((e = this.props) != null && e.check);
  }
  /**
   * Returns data for verification by the group name.<br>
   * Возвращает данные для проверки по названию группы.
   * @param groupName group for checking /<br>группа для проверки
   */
  get(e) {
    var t;
    return e === "check" ? this.getCheck() : (t = this.getList()) == null ? void 0 : t[e];
  }
  /**
   * Returns a list of all available properties by groups.<br>
   * Возвращает список всех доступных свойств по группам.
   */
  getList() {
    const e = this.getByType();
    for (const t in e) {
      const n = this.getPattern(t);
      b(n) && b(e[t]) && Object.assign(e[t], n);
    }
    return e;
  }
  /**
   * Returns values for verification.<br>
   * Возвращает значения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  getPattern(e) {
    var t;
    return (e && this.special.getPattern(e)) ?? ((t = this.props) == null ? void 0 : t.pattern);
  }
  /**
   * Returns global data for input verification.<br>
   * Возвращает глобальные данные для проверки вводимых данных.
   */
  getCheck() {
    var e;
    return (e = this.props) == null ? void 0 : e.check;
  }
  /**
   * Returns an object for validation by its group.<br>
   * Возвращает объект для проверки на валидность по его группе.
   * @param groupName group for checking /<br>группа для проверки
   */
  getInput(e = "check") {
    var t;
    return (t = this.getInputList()) == null ? void 0 : t[e];
  }
  /**
   * Returns a list of objects for validation, divided by group name.<br>
   * Возвращает список объектов для проверки на валидность, разделенных по названию группы.
   */
  getInputList() {
    var e, t;
    return this.inputs.getCache([
      (e = this.props) == null ? void 0 : e.pattern,
      (t = this.props) == null ? void 0 : t.check
    ]);
  }
  /**
   * Returns a list of basic data for verification.<br>
   * Возвращает список базовых данных для проверки.
   */
  getByType() {
    if (this.type.isDate())
      return this.date.getPattern();
    const e = {};
    return this.special.get().forEach((t) => {
      e[t] = {};
    }), e;
  }
  /**
   * Initializes a list of input objects for validation.<br>
   * Инициализирует список объектов ввода для проверки на валидность.
   */
  initInput() {
    const e = {}, t = this.getCheck();
    return I(this.getList(), (n, a) => {
      e[a] = w(n, a);
    }), t && (e.check = w(t)), e;
  }
}
class De {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t) {
    this.props = e, this.type = t;
  }
  /**
   * Returns whether the type is a number or mirror.<br>
   * Возвращает, является ли тип номером или зеркальным.
   */
  isEnd() {
    var e;
    return this.type.isCurrencyOrNumber() || ((e = this.props) == null ? void 0 : e.dir) === "rtl" || !1;
  }
  /**
   * Checks if the alignment value is right.<br>
   * Проверяет, является ли значение выравнивания справа.
   */
  isRight() {
    var e;
    return ((e = this.props) == null ? void 0 : e.right) || this.isEnd();
  }
}
class be extends f {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param type
   * @param rubberItem
   * @param rubberTransition
   * @param special
   * @param match
   * @param format
   *
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, n, a, s, r, h) {
    super(() => this.initList()), this.props = e, this.type = t, this.rubberItem = n, this.rubberTransition = a, this.special = s, this.match = r, this.format = h;
  }
  /**
   * Checks if the selected group is rubber.<br>
   * Проверяет, является ли выбранная группа резиновой.
   * @param groupName group name /<br>название группы
   */
  is(e) {
    return e in this.getList();
  }
  /**
   * Checks if the symbol is a transition.<br>
   * Проверяет, является ли символ перехода.
   * @param char checkable symbol /<br>проверяемая переменная
   */
  isTransition(e) {
    return this.getTransitionList().indexOf(e) >= 0;
  }
  /**
   * Checks if the selected group has data and whether it is rubber.<br>
   * Проверяет, есть ли данные у выбранной группы и является ли она резиновой.
   * @param data values for verification /<br>значения для проверки
   * @param groupName group name /<br>название группы
   */
  isValue(e, t) {
    return t in e && this.is(t);
  }
  /**
   * Getting properties for the rubber group.<br>
   * Получение свойства для резиновой группы.
   * @param groupName group name /<br>название группы
   */
  get(e) {
    var t;
    return (t = this.getList()) == null ? void 0 : t[e];
  }
  /**
   * Getting a list of rubber groups.<br>
   * Получение списка резиновых групп.
   */
  getList() {
    var e, t;
    return this.getCache([
      (e = this.props) == null ? void 0 : e.type,
      (t = this.props) == null ? void 0 : t.special
    ]);
  }
  /**
   * Getting a list of transition symbols.<br>
   * Получение списка символов перехода.
   */
  getTransitionList() {
    return J(
      Object.values(this.getList()).filter(
        (e) => "transitionChar" in e && (F(e.transitionChar) || v(e.transitionChar))
      ),
      "transitionChar"
    ).flat();
  }
  /**
   * Updates the group of rubber symbols if all conditions are met and returns true.<br>
   * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
   * @param data values for verification /<br>значения для проверки
   * @param groupName group name /<br>название группы
   * @param char symbol for checking /<br>символ для проверки
   */
  update(e, t, n) {
    const a = this.get(t), s = e == null ? void 0 : e[t];
    return a && s ? B(n, a == null ? void 0 : a.transitionChar) || a != null && a.maxLength && (a == null ? void 0 : a.maxLength) <= (s == null ? void 0 : s.maxLength) ? (this.rubberTransition.set(t), !1) : (s.end && this.match.is(n, t) && !this.rubberTransition.isChar(t) && (this.rubberItem.add(t), this.rubberTransition.reset()), !0) : !1;
  }
  /**
   * Reduces the length of the entered symbol by its group.<br>
   * Уменьшает длину вводимого символа по его группе.
   * @param groupName group name /<br>название группы
   */
  pop(e) {
    return this.rubberItem.pop(e);
  }
  /**
   * Resets all states of all groups to the initial one.<br>
   * Сбрасывает все состояния всех групп до начального.
   */
  reset() {
    return this.rubberItem.reset(), this.rubberTransition.reset(), this;
  }
  /**
   * Processes data to get an object to work with elastic groups.<br>
   * Обрабатывает данные для получения объекта для работы с резиновыми группами.
   */
  initList() {
    const e = this.special.getRubberList();
    return this.type.isCurrencyOrNumber() ? q(
      this.format.getRubber(),
      e
    ) : e;
  }
}
class ve extends f {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param rubberItem
   * @param characterLength
   * @param date
   * @param format
   * @param special
   */
  constructor(t, n, a, s, r, h, u) {
    super(() => this.initMask());
    i(this, "info");
    this.props = t, this.type = n, this.rubberItem = a, this.characterLength = s, this.date = r, this.format = h, this.special = u, this.info = new f(() => this.initInfo());
  }
  /**
   * Returns the mask symbol by its index.<br>
   * Возвращает символ маски по его индексу.
   * @param index index of the symbol’s location /<br>индекс расположения символа
   */
  get(t) {
    var n;
    return ((n = this.getList()) == null ? void 0 : n[t]) ?? "";
  }
  /**
   * Returns an array with information about the location of all special characters.<br>
   * Возвращает массив с информацией о расположении всех специальных символов.
   */
  getInfo() {
    return this.info.getCache(this.getComparison());
  }
  /**
   * Returns information about the selection location.<br>
   * Возвращает информацию о месте выделения.
   * @param selection
   */
  getInfoBySelection(t) {
    const n = this.getInfo();
    return n.find((a) => a.key >= t) ?? n[n.length - 1];
  }
  /**
   * Returns the current mask.<br>
   * Возвращает текущую маску.
   */
  getList() {
    return this.getCache(this.getComparison());
  }
  /**
   * Returns the location number for replacement by its input symbol.<br>
   * Возвращает номер нахождения для замены по его символу ввода.
   * @param char input symbol /<br>символ ввода
   * @param selection minimum index for search <br>минимальный индекс для поиска
   */
  getByChar(t, n = -1) {
    let a = n;
    return this.getList().forEach((s, r) => {
      s === t && r >= n && (a = r);
    }), a;
  }
  /**
   * Returns the length of the active mask.<br>
   * Возвращает длину активной маски.
   */
  getLength() {
    return this.getList().length;
  }
  /**
   * Returns the length of the mask or the maximum length of masks if there are several.<br>
   * Возвращает длину маски или максимальную длину масок, если их несколько.
   */
  getMaxLength() {
    const t = this.getMask();
    return v(t) ? Q(t) : this.getList().length;
  }
  /**
   * Returns the length of only special characters.<br>
   * Возвращает длину только из специальных символов.
   */
  getLengthBySpecial() {
    return this.getInfo().length;
  }
  /**
   * Returns how many special characters were highlighted.<br>
   * Возвращает, сколько специальных символов было выделено.
   * @param start start of selection /<br>начало выделения
   * @param end end of selection /<br>конец выделения
   */
  getQuantity(t, n) {
    if (t === n)
      return 1;
    let a = 0;
    for (let s = t; s < n; s++)
      this.special.isSpecial(this.get(s)) && a++;
    return a;
  }
  /**
   * Returns data for cache to check for changes.<br>
   * Возвращает данные для кэша для проверки на изменения.
   */
  getComparison() {
    var t, n, a, s, r, h;
    return [
      this.characterLength.get(),
      ...this.rubberItem.getCode(),
      (t = this.props) == null ? void 0 : t.mask,
      (n = this.props) == null ? void 0 : n.special,
      (a = this.props) == null ? void 0 : a.fraction,
      (s = this.props) == null ? void 0 : s.currency,
      (r = this.props) == null ? void 0 : r.type,
      (h = this.props) == null ? void 0 : h.language
    ];
  }
  /**
   * Returns a list of masks.<br>
   * Возвращает список масок.
   */
  getMask() {
    var t;
    return ((t = this.props) == null ? void 0 : t.mask) ?? "";
  }
  /**
   * Returns the active mask.<br>
   * Возвращает активную маску.
   */
  getMaskActive() {
    const t = this.getMask();
    return v(t) ? t.find((n) => this.getSpecialLength(n) >= this.characterLength.get()) || (t == null ? void 0 : t[t.length - 1]) || "" : t;
  }
  /**
   * Returns the number of special characters in the current mask.<br>
   * Возвращает количество специальных символов в текущей маске.
   */
  getBasic() {
    return this.rubberItem.expandMask(this.getMaskActive()).split("");
  }
  /**
   * Returns the number of special characters in the current mask.<br>
   * Возвращает количество специальных символов в текущей маске.
   * @param mask selected mask /<br>выбранная маска
   */
  getSpecialLength(t) {
    return t.split("").filter((n) => this.special.isSpecial(n)).length;
  }
  /**
   * Generates a mask by type.<br>
   * Генерирует маску по типу.
   */
  initMask() {
    return this.type.isCurrencyOrNumber() ? this.format.getMask() : this.type.isDate() ? this.date.getMask() : this.getBasic();
  }
  /**
   * Generates information about special characters.<br>
   * Генерирует информацию о специальных символах.
   */
  initInfo() {
    const t = [];
    let n = 0;
    return this.getList().forEach((a, s) => {
      this.special.isSpecial(a) && (t.push({
        index: n,
        key: s,
        char: a
      }), n++);
    }), t;
  }
}
class ze {
  /**
   * Constructor
   * @param special
   * @param mask
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t) {
    i(this, "value", 0);
    i(this, "immediate", 0);
    i(this, "shift", !1);
    this.special = e, this.mask = t;
  }
  /**
   * Getting the selection key number.<br>
   * Получение номера ключа выделения.
   */
  get() {
    return this.value;
  }
  /**
   * Returns the selection number for the first element that is a special symbol.
   * Возвращает номер выделения для первого элемента, являющегося специальным символом.
   */
  getFirst() {
    var e, t;
    return (t = (e = this.mask.getInfo()) == null ? void 0 : e[0]) == null ? void 0 : t.key;
  }
  /**
   * Getting the current key of the selected character.<br>
   * Получение текущего ключа выделенного символа.
   */
  getFocus() {
    return this.getCharacter(this.value);
  }
  /**
   * Getting the next key of the selected character.<br>
   * Получение следующего ключа выделенного символа.
   */
  getNext() {
    return this.getCharacter(this.value + 1);
  }
  /**
   * Getting the previous key of the selected symbol.<br>
   * Получение предыдущего ключа выделенного символа.
   */
  getPrevious() {
    return this.getCharacter(this.value - 1);
  }
  /**
   * Getting the key number of the nearest special character.<br>
   * Получение номера ключа ближайшего специального символа.
   */
  getImmediate() {
    return this.getCharacter(this.immediate);
  }
  /**
   * Getting the number of the key shifted to the left direction.
   * Получение номера ключа, сдвинутого в левом направлении.
   */
  getShift() {
    return this.shift ? this.value > 0 ? this.getCharacter(this.value - 1) + 1 : 0 : this.getFocus();
  }
  /**
   * Changing the selection key number.<br>
   * Изменение номера ключа выделения.
   * @param selection selection number /<br>номер выделения
   */
  set(e) {
    return this.value = e, this;
  }
  /**
   * Changes the selection key number according to the mask structure.<br>
   * Изменяет номер ключа выделения по структуре маски.
   * @param selection selection number /<br>номер выделения
   * @param focus is the element in focus /<br>элемент в фокусе ли
   */
  setByMask(e, t = !0) {
    if (t) {
      let n, a;
      this.mask.getInfo().forEach((s) => {
        n === void 0 && s.key >= e && (n = s.index), s.key <= e && (a = s.index);
      }), this.set(n !== void 0 ? n : this.mask.getLengthBySpecial()), this.setImmediate(a !== void 0 ? a : this.mask.getLengthBySpecial());
    }
    return this;
  }
  /**
   * Changing the selection key for the nearest special character.<br>
   * Изменение ключа выделения для ближайшего специального символа.
   * @param immediate selection key number /<br>номер ключа выделения
   */
  setImmediate(e) {
    return this.immediate = e, this;
  }
  /**
   * Turning shift on or off.<br>
   * Включение или отключение сдвига.
   * @param shift value for shift /<br>значение для сдвига
   */
  setShift(e) {
    return this.shift = e, this;
  }
  /**
   * Resets the selection key for the nearest special character to the selection location.<br>
   * Сбрасывает ключ выделения для ближайшего специального символа до места выделения.
   */
  resetImmediate() {
    return this.immediate = this.value <= 0 ? 0 : this.value - 1, this;
  }
  /**
   * Move the selection location back by 1 step.
   * Передвигаем место выделения назад на 1 шаг.
   */
  goBack() {
    return this.value > 0 && this.value--, this;
  }
  /**
   * Move the selection location forward by 1 step.
   * Передвигаем место выделения вперед на 1 шаг.
   */
  goNext() {
    return this.value <= this.mask.getLength() && this.value++, this;
  }
  /**
   * Getting the key number at the selection location.<br>
   * Получение номера ключа по месту выделения.
   * @param selection selection location /<br>место выделения
   */
  getCharacter(e) {
    for (const t of this.mask.getInfo())
      if (t.index >= e)
        return t.key;
    return this.mask.getLength();
  }
}
const M = "~";
class Ae {
  /**
   * Constructor
   * @param rubberItem
   * @param characterLength
   * @param special
   * @param rubber
   * @param mask
   * @param selection
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, n, a, s, r) {
    i(this, "value", []);
    this.rubberItem = e, this.characterLength = t, this.special = n, this.rubber = a, this.mask = s, this.selection = r;
  }
  /**
   * Checks if the value is filled.<br>
   * Проверяет, заполнено ли значение.
   */
  is() {
    return this.value.length > 0;
  }
  /**
   * Checks if the selected character was previously deleted.<br>
   * Проверяет, является ли выделенный символ ранее удаленным.
   */
  isCharDelete() {
    const e = this.selection.get();
    return e in this.value && this.value[e] === M;
  }
  /**
   * Getting input characters.<br>
   * Получение вводимых символов.
   */
  get() {
    return this.value;
  }
  /**
   * Getting the selected mask character.<br>
   * Получение выбранного символа маски.
   */
  getFocus() {
    return this.mask.get(this.selection.getFocus());
  }
  /**
   * Getting the mask character by the key number of the nearest special character.<br>
   * Получение символа маски по номеру ключа ближайшего специального символа.
   */
  getImmediate() {
    return this.mask.get(this.selection.getImmediate());
  }
  /**
   * Getting the next mask character.<br>
   * Получение следующего символа маски.
   */
  getNext() {
    return this.mask.get(this.selection.getNext());
  }
  /**
   * Adding 1 entered character at its selection location.<br>
   * Добавление 1 введенного символа по месту его выделения.
   * @param char entered character /<br>введенный символ
   */
  add(e) {
    return this.value.splice(this.selection.get(), this.isCharDelete() ? 1 : 0, e), this.selection.goNext().resetImmediate(), this.updateLength(), this;
  }
  /**
   * Deleting 1 entered character at its selection location.<br>
   * Удаление 1 введенного символа по месту его выделения.
   */
  pop() {
    const e = this.selection.get() - 1;
    return this.isSpecialNextAnother() ? this.value[e] = M : (this.value.splice(e, 1), this.updateLength()), this.selection.goBack().resetImmediate(), this;
  }
  /**
   * Resets the values to the initial values.<br>
   * Сбрасывает значения до начальных значений.
   */
  reset() {
    return this.value = [], this.selection.set(0).resetImmediate(), this.updateLength(), this;
  }
  /**
   * Shifts by 1 value depending on the direction of selection change.<br>
   * Сдвигает на 1 значение в зависимости от направления изменения выделения.
   * @param status shift status /<br>статус сдвига
   */
  shift(e = 1) {
    return this.characterLength.set(this.value.length + e), this;
  }
  /**
   * Checks if there is another group of special characters ahead.<br>
   * Проверяет, если впереди другая группа специальных символов.
   */
  isSpecialNextAnother() {
    const e = this.selection.get() - 1, t = this.value.length;
    if (e >= 0 && e <= t) {
      const n = this.mask.getInfo(), a = n[e].char;
      if (!this.rubberItem.is(a)) {
        for (let s = e; s < t; s++)
          if (s in n) {
            const r = n[s].char;
            if (this.special.isSpecial(r) && a !== r)
              return !0;
          }
      }
    }
    return !1;
  }
  /**
   * Updates of the length of entered characters.<br>
   * Обновления длины введенных символов.
   */
  updateLength() {
    return this.characterLength.set(this.value.length), this;
  }
}
class Se extends f {
  constructor(e, t, n, a) {
    super(() => this.initValue()), this.rubberTransition = e, this.mask = t, this.special = n, this.character = a;
  }
  /**
   * Checks if the values are filled in.<br>
   * Проверяет, заполнены ли значения.
   */
  is() {
    return this.getLength() > 0;
  }
  /**
   * Receiving basic standard values.<br>
   * Получение базовых стандартных значений.
   */
  get() {
    return this.getCache([
      ...this.mask.getList(),
      ...this.character.get()
    ]);
  }
  /**
   * Getting the character from the basic standard values by its key number.<br>
   * Получение символа из базовых стандартных значений по его номеру ключа.
   * @param index key number /<br>номер ключа
   */
  getChar(e) {
    var t;
    return (t = this.get()) == null ? void 0 : t[e];
  }
  /**
   * Getting the length of basic standard values.<br>
   * Получение длины базовых стандартных значений.
   */
  getLength() {
    return this.get().length;
  }
  /**
   * Initialization of basic standard values.<br>
   * Инициализация базовых стандартных значений.
   */
  initValue() {
    const e = this.character.get(), t = [];
    let n = 0;
    for (const a of this.mask.getList())
      if (!this.special.isSpecial(a))
        t.push(a);
      else if (n in e) {
        if (t.push(e[n++]), n > e.length && this.rubberTransition.is() && !this.rubberTransition.isChar(a))
          break;
      } else
        break;
    return t.join("");
  }
}
class Le {
  /**
   * Constructor
   * @param type
   * @param date
   * @param format
   * @param mask
   * @param special
   * @param valueBasic
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, n, a, s, r) {
    i(this, "info");
    i(this, "valueFinal");
    this.type = e, this.date = t, this.format = n, this.mask = a, this.special = s, this.valueBasic = r, this.info = new f(() => this.initInfo()), this.valueFinal = new f(() => this.initValue());
  }
  /**
   * Checks if the mask is fully filled.<br>
   * Проверяет, полностью ли заполнена маска.
   */
  isFull() {
    for (const e of Object.values(this.getInfo()))
      if (!e.full)
        return !1;
    return !0;
  }
  /**
   * Checks if the mask is fully filled by length.<br>
   * Проверяет, полностью ли заполнена маска по длине.
   */
  isEnd() {
    for (const e of Object.values(this.getInfo()))
      if (!e.end)
        return !1;
    return !0;
  }
  /**
   * Checks if the values are fully filled in for the group.<br>
   * Проверяет, полностью ли заполнены значения по группе.
   * @param groupName group name /<br>название группы
   */
  isFullByGroup(e) {
    var t;
    return ((t = this.getInfoItem(e)) == null ? void 0 : t.full) ?? !1;
  }
  /**
   * Getting the final value for export.<br>
   * Получение конечного значения для экспорта.
   */
  get() {
    return this.type.isCurrencyOrNumber() ? this.format.getValueStandard(this.getInfo()) : this.type.isDate() ? this.isFull() ? this.date.getValueStandard(this.getInfo()) : "" : this.valueFinal.getCache([
      ...this.valueBasic.get()
    ]);
  }
  /**
   * Getting full information for global verification.<br>
   * Получение полной информации для глобальной проверки.
   */
  getForCheck() {
    const e = this.get();
    return {
      group: "check",
      value: e,
      maxLength: e.length,
      full: this.isFull(),
      end: this.isEnd(),
      chars: e.split("")
    };
  }
  /**
   * Receiving a list with information about standard values.<br>
   * Получение списка с информацией о стандартных значениях.
   */
  getInfo() {
    return this.info.getCache([
      this.valueBasic.get(),
      ...this.mask.getList()
    ]);
  }
  /**
   * Getting information for a specific group.<br>
   * Получение информации для конкретной группы.
   * @param groupName group name /<br>название группы
   */
  getInfoItem(e) {
    var t;
    return (t = this.getInfo()) == null ? void 0 : t[e];
  }
  /**
   * Checks if there is a value by the key number in the basic values.<br>
   * Проверяет, есть ли значение по номеру ключа в базовых значениях.
   * @param index key number /<br>номер ключа
   */
  isStandard(e) {
    return !!this.valueBasic.getChar(e);
  }
  /**
   * Adding a new character to the list, divided by groups, if it is not there,
   * and returning the property of the given group.<br>
   * Добавление нового символа в список, разделенный по группам, если его там нет,
   * и возвращение свойства данной группы.
   * @param data data for verification /<br>данные для проверки
   * @param groupName group name /<br>название группы
   */
  add(e, t) {
    return t in e || (e[t] = {
      group: t,
      value: "",
      maxLength: 0,
      full: !1,
      end: !1,
      chars: []
    }), e[t];
  }
  /**
   * Initialization of the list with information about standard values.<br>
   * Инициализация списка с информацией о стандартных значениях.
   */
  initInfo() {
    const e = this.valueBasic.get(), t = {};
    return this.mask.getList().forEach((n, a) => {
      if (this.special.isSpecial(n)) {
        const s = this.add(t, n);
        this.isStandard(a) && e[a] !== M && s.chars.push(e[a]), s.maxLength++, s.value = s.full ? s.chars.join("") : "", s.full = this.special.isDefault(n) || s.maxLength === s.chars.length, s.end = s.maxLength === s.chars.length;
      }
    }), t;
  }
  initValue() {
    const e = this.valueBasic.get().split(""), t = this.mask.getList();
    let n = "";
    for (const a in t)
      if (a in e)
        n += e[a];
      else {
        const s = this.special.getDefault(t[a]);
        s && (n += s);
      }
    return n;
  }
}
class Be {
  /**
   * Constructor
   * @param pattern
   * @param value
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t) {
    this.pattern = e, this.value = t;
  }
  /**
   * Checks if the current group has an error.<br>
   * Проверяет, есть ли ошибка у текущей группы.
   * @param groupName group name /<br>название группы
   */
  isError(e) {
    var n;
    const t = (n = this.get()) == null ? void 0 : n.group;
    return !!(t && (t === e || t === "check"));
  }
  /**
   * Checks the correctness of filling in the values.<br>
   * Проверяет корректность заполнения значений.
   */
  checkValidity() {
    return this.get() === void 0;
  }
  /**
   * We get an object with information about the error if there is an error, or undefined.<br>
   * Получаем объект с информацией об ошибке, если есть ошибка, или undefined.
   */
  get() {
    for (const e of Object.values(this.pattern.getInputList())) {
      const t = this.value.getInfoItem(e.group);
      if (t && t.full) {
        const n = e.check(t.value);
        if (n && !n.status)
          return n;
      }
    }
    return this.getValidationCheck();
  }
  /**
   * Getting an error message.<br>
   * Получение сообщения об ошибке.
   */
  getMessage() {
    var e;
    return ((e = this.get()) == null ? void 0 : e.validationMessage) ?? "";
  }
  /**
   * Getting global check data.<br>
   * Получение данных глобальной проверки.
   */
  getValidationCheck() {
    var e;
    if (this.value.isFull()) {
      const t = this.value.getForCheck();
      if (this.pattern.isCheck()) {
        const n = (e = this.pattern.getInput(t.group)) == null ? void 0 : e.check(t.value);
        if (n && !n.status)
          return n;
      }
      return {
        value: t.value,
        required: !0
      };
    }
    return {
      value: this.value.get(),
      required: !1
    };
  }
}
const Ie = "_";
class Te {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param format
   * @param special
   * @param rubber
   * @param mask
   * @param valueBasic
   * @param validation
   * @param className define class names for each symbol /<br>определить названия класс для каждого символа
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, n, a, s, r, h, u, l, c = "is-character") {
    this.props = e, this.type = t, this.date = n, this.format = a, this.special = s, this.rubber = r, this.mask = h, this.valueBasic = u, this.validation = l, this.className = c;
  }
  /**
   * Returns an array with information for displaying on the screen.<br>
   * Возвращает массив с информацией для вывода на экран.
   */
  get() {
    const e = [], t = this.valueBasic.get();
    return this.mask.getList().forEach((n, a) => {
      const s = t == null ? void 0 : t[a];
      e.push({
        className: `${this.className} ${this.className}--${this.getStatus(n, s)}`,
        value: this.getValue(n, s)
      });
    }), e;
  }
  /**
   * Getting the basic standard values for the input field.<br>
   * Получение базовых стандартных значений для поля ввода.
   */
  getInput() {
    const e = [], t = this.mask.getList();
    return this.valueBasic.get().split("").forEach((n, a) => {
      n === M ? e.push(
        this.getSpecialToView((t == null ? void 0 : t[a]) ?? "") ?? n
      ) : e.push(n);
    }), e.join("");
  }
  /**
   * Checks if the value is filled in.<br>
   * Проверяет, заполнено ли значение.
   * @param value input values /<br>вводимые значения
   */
  isValue(e) {
    return !!(e && e !== M);
  }
  /**
   * Returns the status by the entered symbol and the location.<br>
   * Возвращает статус по введенному символу и месту.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param value input values /<br>вводимые значения
   */
  getStatus(e, t) {
    return this.isValue(t) ? this.special.isSpecial(e) ? this.validation.isError(e) ? "error" : "special" : "standard" : this.rubber.isTransition(e) ? "transition" : "placeholder";
  }
  /**
   * Returns a symbol from a filled value by mask or special symbol.<br>
   * Возвращает символ из заполненного значения по маске или специальному символу.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param value input values /<br>вводимые значения
   */
  getValue(e, t) {
    return this.isValue(t) ? t : this.getSpecialToView(e);
  }
  /**
   * Returns a special symbol for output by the entered symbol.<br>
   * Возвращает специальный символ для вывода по введенному символу.
   * @param char checkable symbol /<br>проверяемая переменная
   */
  getSpecialToView(e) {
    var t;
    return this.special.isSpecial(e) ? this.getViewChar(e) ?? this.special.getView(e) ?? ((t = this.props) == null ? void 0 : t.view) ?? Ie : e;
  }
  /**
   * Returns a special symbol by symbol.<br>
   * Возвращает специальный символ по типу символа.
   * @param groupName group name /<br>название группы
   */
  getViewChar(e) {
    if (this.type.isDate())
      return this.date.getView(e);
    if (this.type.isCurrencyOrNumber())
      return this.format.getView();
  }
}
class Ee {
  /**
   * Constructor
   * @param validation
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t) {
    i(this, "type");
    i(this, "event");
    this.validation = e, this.callbackEvent = t;
  }
  /**
   * Checks whether additional data needs to be generated for the current event.<br>
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   */
  isValue() {
    return !!(this.type && ["input", "change"].indexOf(this.type) >= 0);
  }
  /**
   * Initializes event handling.<br>
   * Инициализирует обработку событий.
   */
  go() {
    if (this.type && this.event) {
      const e = this.isValue() ? this.validation.get() : void 0;
      this.callbackEvent(this.type, this.event, e);
    }
    return this;
  }
  /**
   * Changes the event type and event data.<br>
   * Изменяет тип события и данные события.
   * @param type event name /<br>название события
   * @param event event object /<br>объект события
   */
  set(e, t) {
    return this.setType(e), this.setEvent(t), this;
  }
  /**
   * Changes the event type.<br>
   * Изменяет тип события.
   * @param type event name /<br>название события
   */
  setType(e) {
    return this.type = e, this;
  }
  /**
   * Changes the event object.<br>
   * Изменяет объект события.
   * @param event event object /<br>объект события
   */
  setEvent(e) {
    return this.event = e, this;
  }
  /**
   * Resets the state.<br>
   * Сбрасывает состояние.
   */
  reset() {
    return this.resetType(), this.resetEvent(), this;
  }
  /**
   * Resets the type state.<br>
   * Сбрасывает состояние тип.
   */
  resetType() {
    return this.type = void 0, this;
  }
  /**
   * Resets the event state.<br>
   * Сбрасывает состояние события.
   */
  resetEvent() {
    return this.event = void 0, this;
  }
}
class we {
  /**
   * Constructor
   * @param type
   * @param buffer
   * @param focus
   * @param rubberTransition
   * @param date
   * @param special
   * @param match
   * @param rubber
   * @param mask
   * @param selection
   * @param character
   * @param valueBasic
   * @param value
   * @param emit
   * @param element input element /<br>элемент ввода
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, n, a, s, r, h, u, l, c, y, C, V, N, $) {
    this.type = e, this.buffer = t, this.focus = n, this.rubberTransition = a, this.date = s, this.special = r, this.match = h, this.rubber = u, this.mask = l, this.selection = c, this.character = y, this.valueBasic = C, this.value = V, this.emit = N, this.element = $;
  }
  /**
   * Adding new characters that can be entered by the user.<br>
   * Добавление новых вводимых символов.
   * @param selection number of the selected key /<br>номер выделенного ключа
   * @param chars a list of values that are entered by the user /<br>список вводимых значений
   * @param focus is the element focused /<br>находится ли элемент в фокусе
   */
  add(e, t, n = !0) {
    let a = !1;
    return this.selection.setByMask(e, n), this.rubberTransition.reset(), X(t).forEach((s) => {
      const r = this.character.getFocus(), h = this.character.getImmediate();
      this.selection.setShift(
        this.rubber.update(this.value.getInfo(), h, s)
      ), this.rubberTransition.is() ? this.selection.setByMask(
        this.mask.getByChar(this.rubberTransition.get(), this.selection.getImmediate()) + 1,
        n
      ) : this.match.is(s, r) && (this.character.shift(), this.character.getFocus() && (this.mask.getMaxLength() > this.valueBasic.getLength() || this.character.isCharDelete()) && (this.character.add(s), a = !0));
    }), this.goSelection(), a;
  }
  /**
   * Removing selected input characters.<br>
   * Удаление выделенных вводимых символов.
   * @param start location of the start of the selected area /<br>место начала выделенной области
   * @param end location of the end of the selected area /<br>конечный место выделенной области
   * @param focus is the element focused /<br>находится ли элемент в фокусе
   */
  pop(e, t = e, n = !0) {
    if (e >= 0 && t <= this.mask.getMaxLength()) {
      let a = this.mask.getQuantity(e, t);
      for (n && this.selection.setByMask(t); a--; )
        this.rubberTransition.reset(), this.character.pop(), this.character.shift(0), this.selection.setShift(
          this.rubber.pop(this.character.getFocus())
        );
      this.goSelection();
    }
    return this;
  }
  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset(e = "") {
    if (this.character.reset(), this.rubber.reset(), ee(e)) {
      const t = this.type.isDate() ? this.date.getValue(e) : e;
      this.add(0, this.extra(t.split("")));
    }
    return this;
  }
  /**
   * Removing extra values for insertion.<br>
   * Удаление лишних значений для вставки.
   * @param chars insertion of symbols /<br>вставка символов
   */
  extra(e) {
    var r, h;
    if (this.character.is())
      return e;
    const t = this.mask.getList(), n = [...e];
    let a = this.match.get((h = (r = this.mask.getInfo()) == null ? void 0 : r[0]) == null ? void 0 : h.char), s = 0;
    if (a)
      for (const u in t) {
        const l = t[u];
        if (this.special.isSpecial(l)) {
          for (let c = s; c < n.length && (s++, !n[c].match(a)); c++)
            ;
          a = this.match.get(l);
        } else if (l.match(a)) {
          let c = !1;
          for (let y = s; y < n.length; y++) {
            const C = n[y];
            if (s++, C.match(a)) {
              l === C ? (n.splice(y, 1), s--) : c = !0;
              break;
            }
          }
          if (c)
            break;
        }
      }
    return n;
  }
  /**
   * Restores the selection location.<br>
   * Восстанавливает место выделения.
   */
  goSelection(e = !0) {
    return this.focus.is() && requestAnimationFrame(() => {
      if (this.element.value && (!e || !this.goBuffer())) {
        const t = this.valueBasic.getLength(), n = this.selection.getShift(), a = t < n ? t : n;
        this.element.value.selectionEnd = a, this.element.value.selectionStart = a;
      }
    }), this;
  }
  /**
   * Checks if the data is in the buffer. If it is, then add it.<br>
   * Проверяет, если данный в буфер. Если есть, то добавляем.
   */
  goBuffer() {
    return this.buffer.is() ? (this.add(this.selection.getShift(), this.buffer.get()), this.buffer.resetChars(), !0) : (this.buffer.reset(), this.emit.go(), !1);
  }
}
class Pe {
  /**
   * Constructor
   * @param buffer
   * @param focus
   * @param characterLength
   * @param right
   * @param selection
   * @param valueBasic
   * @param validation
   * @param emit
   * @param data
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, n, a, s, r, h, u, l) {
    i(this, "change", !1);
    i(this, "unidentified");
    this.buffer = e, this.focus = t, this.characterLength = n, this.right = a, this.selection = s, this.valueBasic = r, this.validation = h, this.emit = u, this.data = l;
  }
  /**
   * Capture of the event in focus.<br>
   * Перехват события в фокусе.
   * @param event event object /<br>объект события
   */
  onFocus(e) {
    this.change = !1, this.focus.in(), this.emit.set("focus", e).go();
  }
  /**
   * Capture of the event when focus is lost.<br>
   * Перехват события при потере фокуса.
   * @param event event object /<br>объект события
   */
  onBlur(e) {
    this.change && this.emit.setType("change").go(), this.focus.out(), this.emit.set("blur", e).go();
  }
  /**
   * Intercepting keypress to get a character.<br>
   * Перехват нажатия для получения символа.
   * @param event invoked event /<br>вызываемое событие
   */
  onKeydown(e) {
    const t = this.getSelectionInfo(e), {
      start: n,
      end: a
    } = t;
    this.emit.set("keydown", e).go(), !this.isMetaKey(e) && (this.isKey(e) ? e.key === "Backspace" ? (n > 0 || n !== a) && this.data.pop(n, a) : e.key.length <= 1 && (n === a ? this.buffer.go(e.key) && this.data.add(n, e.key) : (this.buffer.goStart(), this.data.pop(n, a).add(this.selection.getShift(), e.key))) : this.unidentified = t);
  }
  /**
   * Intercept key release to check for arrow presses.<br>
   * Перехват отпуска клавиши для проверки нажатия на стрелки.
   * @param event invoked event /<br>вызываемое событие
   */
  onKeyup(e) {
    this.emit.set("keyup", e).go(), !this.isMetaKey(e) && this.isKey(e) && [
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft"
    ].indexOf(e.key) >= 0 && (this.makeToEnd(e), this.makeToStart(e));
  }
  /**
   * Intercepting the event before data modification.<br>
   * Перехват события перед изменением данных.
   * @param event invoked event /<br>вызываемое событие
   */
  onBeforeinput(e) {
    this.emit.set("beforeinput", e).go(), this.unidentified || (this.makeChange(e), re(e));
  }
  /**
   * Intercepting the event during data modification.
   * Перехват события при изменении данных.
   * @param event invoked event /<br>вызываемое событие
   */
  onInput(e) {
    if (this.unidentified) {
      const t = e.target;
      (this.unidentified.length > t.value.length || this.unidentified.start !== this.unidentified.end) && this.data.pop(this.unidentified.start, this.unidentified.end), "data" in e ? e.data && this.buffer.go(e.data) && this.data.add(this.unidentified.start, e.data) : this.data.reset(t.value), this.makeChange(e), this.unidentified = void 0;
    }
  }
  /**
   * Intercepting the event of data insertion from the buffer.<br>
   * Перехват события вставки данных из буфера.
   * @param event invoked event /<br>вызываемое событие
   */
  onPaste(e) {
    const {
      start: t,
      end: n
    } = this.getSelectionInfo(e);
    te(e).then((a) => {
      const s = a.split("");
      t === n ? this.data.add(t, this.data.extra(s)) : this.data.pop(t, n).add(this.selection.getShift(), this.data.extra(s)), this.change = !0, this.emit.set("paste", e).go();
    }).catch((a) => console.error("getClipboardData", a));
  }
  /**
   * Intercepting the change event, this is for intercepting the browser’s autocomplete event.<br>
   * Перехват события изменения, это для перехвата события автозаполнения в браузере.
   * @param event invoked event /<br>вызываемое событие
   */
  onChange(e) {
    const t = e.target;
    this.data.reset(t.value), this.emit.set("change", e).go();
  }
  /**
   * Intercepting the click event to change the selection location, if necessary.<br>
   * Перехват события клика для изменения места выделения, если это необходимо.
   * @param event invoked event /<br>вызываемое событие
   */
  onClick(e) {
    this.makeToEnd(e), this.makeToStart(e);
  }
  /**
   * Was the meta button pressed.<br>
   * Была ли нажата мета-кнопка.
   * @param event invoked event /<br>вызываемое событие
   */
  isMetaKey(e) {
    return e.metaKey || e.altKey || e.ctrlKey;
  }
  /**
   * Checks the key values in the event.<br>
   * Проверяет значения key в событии.
   * @param event invoked event /<br>вызываемое событие
   */
  isKey(e) {
    return "key" in e && e.key !== "Unidentified";
  }
  /**
   * Getting data about the selection at the event element.<br>
   * Получение данных о выделении у элемента события.
   * @param event invoked event /<br>вызываемое событие
   */
  getSelectionInfo(e) {
    const t = e.target;
    return {
      target: t,
      start: t.selectionStart ?? 0,
      end: t.selectionEnd ?? 0,
      length: t.value.length
    };
  }
  /**
   * Preparing to send an event.<br>
   * Подготовка для отправки события.
   * @param event invoked event /<br>вызываемое событие
   */
  makeChange(e) {
    this.change = !0, this.emit.set("input", e), !this.buffer.is() && (this.emit.go(), this.emit.resetType());
  }
  /**
   * Changes the cursor position if the alignment is right.<br>
   * Изменяет место указателя, если выравнивание справа.
   * @param event invoked event /<br>вызываемое событие
   */
  makeToEnd(e) {
    if (this.right.isRight()) {
      const t = this.valueBasic.getLength(), {
        target: n,
        start: a,
        end: s
      } = this.getSelectionInfo(e);
      a > t && (n.selectionStart = t), s > t && (n.selectionEnd = t);
    }
  }
  /**
   * Check when selecting from the front, before all special characters.<br>
   * Проверка при выделении спереди, перед всеми специальными символами.
   * @param event invoked event /<br>вызываемое событие
   */
  makeToStart(e) {
    const t = this.selection.getFirst(), {
      target: n,
      start: a
    } = this.getSelectionInfo(e);
    a < t && (n.selectionStart = t, n.selectionEnd = t);
  }
}
class Fe {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   */
  constructor(e, t, n, a = "is-character") {
    i(this, "type");
    i(this, "buffer");
    i(this, "focus");
    i(this, "rubberItem");
    i(this, "rubberTransition");
    i(this, "characterLength");
    i(this, "date");
    i(this, "format");
    i(this, "special");
    i(this, "match");
    i(this, "pattern");
    i(this, "right");
    i(this, "rubber");
    i(this, "item");
    i(this, "selection");
    i(this, "character");
    i(this, "valueBasic");
    i(this, "value");
    i(this, "validation");
    i(this, "view");
    i(this, "emit");
    i(this, "data");
    i(this, "event");
    i(this, "oldValue", "");
    this.type = new ue(e), this.buffer = new le(), this.focus = new ce(this.buffer), this.rubberItem = new ge(), this.rubberTransition = new pe(), this.characterLength = new ye(), this.date = new de(e, this.type), this.format = new me(
      e,
      this.type,
      this.rubberItem
    ), this.special = new ke(
      e,
      this.type,
      this.format
    ), this.match = new Me(e, this.special), this.pattern = new Ce(
      e,
      this.type,
      this.date,
      this.special
    ), this.right = new De(
      e,
      this.type
    ), this.rubber = new be(
      e,
      this.type,
      this.rubberItem,
      this.rubberTransition,
      this.special,
      this.match,
      this.format
    ), this.item = new ve(
      e,
      this.type,
      this.rubberItem,
      this.characterLength,
      this.date,
      this.format,
      this.special
    ), this.selection = new ze(
      this.special,
      this.item
    ), this.character = new Ae(
      this.rubberItem,
      this.characterLength,
      this.special,
      this.rubber,
      this.item,
      this.selection
    ), this.valueBasic = new Se(
      this.rubberTransition,
      this.item,
      this.special,
      this.character
    ), this.value = new Le(
      this.type,
      this.date,
      this.format,
      this.item,
      this.special,
      this.valueBasic
    ), this.validation = new Be(
      this.pattern,
      this.value
    ), this.view = new Te(
      e,
      this.type,
      this.date,
      this.format,
      this.special,
      this.rubber,
      this.item,
      this.valueBasic,
      this.validation,
      a
    ), this.emit = new Ee(
      this.validation,
      n
    ), this.data = new we(
      this.type,
      this.buffer,
      this.focus,
      this.rubberTransition,
      this.date,
      this.special,
      this.match,
      this.rubber,
      this.item,
      this.selection,
      this.character,
      this.valueBasic,
      this.value,
      this.emit,
      t
    ), this.event = new Pe(
      this.buffer,
      this.focus,
      this.characterLength,
      this.right,
      this.selection,
      this.valueBasic,
      this.validation,
      this.emit,
      this.data
    ), e != null && e.value && (this.oldValue = E(e == null ? void 0 : e.value), this.data.reset(this.oldValue));
  }
  /**
   * Receiving basic standard values.<br>
   * Получение базовых стандартных значений.
   */
  getValueBasic() {
    if (this.right.isRight()) {
      let e = "";
      return this.view.get().forEach((t) => {
        e += t.value;
      }), e;
    }
    return this.view.getInput();
  }
  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses() {
    return {
      "??--value": this.characterLength.is(),
      "??--end": this.right.isEnd()
    };
  }
  /**
   * Restores the selection location.<br>
   * Восстанавливает место выделения.
   */
  goSelection() {
    return this.data.goSelection(!1), this;
  }
  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset(e) {
    const t = E(e);
    return this.oldValue !== t ? (this.oldValue = t, this.data.reset(t), this.emit.set("reset", {}).go(), !0) : !1;
  }
}
class xe {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param element input element /<br>элемент ввода
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor(e, t, n, a = "is-character") {
    i(this, "mask");
    i(this, "valueBasic", D(""));
    i(this, "value", D(""));
    i(this, "view", D([]));
    i(this, "classes", D({}));
    i(this, "onFocus", (e) => this.mask.event.onFocus(e));
    i(this, "onBlur", (e) => this.mask.event.onBlur(e));
    i(this, "onKeydown", (e) => this.mask.event.onKeydown(e));
    i(this, "onKeyup", (e) => this.mask.event.onKeyup(e));
    i(this, "onBeforeinput", (e) => this.mask.event.onBeforeinput(e));
    i(this, "onInput", (e) => this.mask.event.onInput(e));
    i(this, "onChange", (e) => this.mask.event.onChange(e));
    i(this, "onPaste", (e) => this.mask.event.onPaste(e));
    i(this, "onClick", (e) => this.mask.event.onClick(e));
    this.mask = new Fe(
      e,
      t,
      (s, r, h) => {
        s === "input" && this.updateValue(), n(s, r, h);
      },
      a
    ), R(() => {
      this.mask.reset(e == null ? void 0 : e.value), this.updateValue();
    });
  }
  /**
   * Updating the entered data.<br>
   * Обновление введенных данных.
   */
  updateValue() {
    const e = this.mask.getValueBasic(), t = e !== this.valueBasic.value;
    return this.valueBasic.value = e, this.value.value = this.mask.value.get(), this.view.value = this.mask.view.get(), t && this.mask.goSelection(), this.classes.value = this.mask.getClasses(), this;
  }
}
class Ve extends ne {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, n, a) {
    super(
      t,
      n,
      a
    );
    i(this, "mask");
    this.mask = new xe(
      n,
      this.element,
      (s, r, h) => {
        var u;
        (u = this.emits) == null || u.call(
          this,
          s,
          r,
          h
        );
      },
      this.getSubClass(["character", "item"])
    ), this.init();
  }
  /**
   * Element for storing the final data.<br>
   * Элемент для хранения конечных данных.
   */
  renderData() {
    var n;
    const t = this.setup();
    if ((n = this.props) != null && n.name)
      return m("input", {
        type: "hidden",
        name: this.props.name,
        value: t.value.value
      });
  }
  /**
   * Rendering method for input.<br>
   * Метод рендеринга для ввода.
   */
  renderInput() {
    const t = this.setup();
    return m("input", {
      ref: this.element,
      class: t.classes.value.input,
      value: t.valueBasic.value,
      onFocus: t.onFocus,
      onBlur: t.onBlur,
      onKeydown: t.onKeydown,
      onKeyup: t.onKeyup,
      onBeforeinput: t.onBeforeinput,
      onInput: t.onInput,
      onChange: t.onChange,
      onPaste: t.onPaste,
      onClick: t.onClick
    });
  }
  /**
   * Rendering method for displaying the mask and the input data.<br>
   * Метод рендеринга для вывода маски и вводимых данных.
   */
  renderView() {
    const t = this.setup(), n = t.view.value;
    if (n.length > 0) {
      const a = [];
      return n.forEach((s, r) => {
        a.push(
          m("span", {
            key: r,
            class: s.className
          }, s.value)
        );
      }), m("span", { class: t.classes.value.character }, a);
    }
    return m("span", {
      class: t.classes.value.character,
      innerHTML: "&nbsp;"
    });
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      valueBasic: this.mask.valueBasic,
      value: this.mask.value,
      view: this.mask.view,
      onFocus: this.mask.onFocus,
      onBlur: this.mask.onBlur,
      onKeydown: this.mask.onKeydown,
      onKeyup: this.mask.onKeyup,
      onBeforeinput: this.mask.onBeforeinput,
      onInput: this.mask.onInput,
      onChange: this.mask.onChange,
      onPaste: this.mask.onPaste,
      onClick: this.mask.onClick
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        ...this.toClassName(this.mask.classes.value)
      },
      // :classes [!] System label / Системная метка
      input: this.getSubClass("input"),
      character: this.getSubClass("character"),
      characterItem: this.getSubClass("character__item")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    const t = this.setup(), n = [
      this.renderData(),
      this.renderInput(),
      this.renderView()
    ];
    return m("label", {
      ...this.getAttrs(),
      class: t.classes.value.main
    }, n);
  }
}
const p = {
  special: "*",
  match: /[0-9]/,
  type: "text",
  view: "_"
}, Ne = {
  // Values
  type: {
    type: String,
    default: p == null ? void 0 : p.type
  },
  name: String,
  value: [String, Number],
  mask: [String, Array],
  special: {
    type: [String, Array, Object],
    default: p == null ? void 0 : p.special
  },
  match: {
    type: [String, RegExp],
    default: p == null ? void 0 : p.match
  },
  pattern: Object,
  check: Object,
  fraction: [String, Boolean, Number],
  currency: String,
  // Options
  language: String,
  view: {
    type: String,
    default: p == null ? void 0 : p.view
  },
  // :prop [!] System label / Системная метка
  visible: Boolean,
  right: Boolean,
  dir: String
}, $e = {
  // :values [!] System label / Системная метка
  dir: ["ltr", "rtl"]
  // :values [!] System label / Системная метка
}, Ke = {
  ...Ne,
  // :prop [!] System label / Системная метка
  visible: Boolean,
  right: Boolean,
  dir: String
}, Ue = /* @__PURE__ */ _({
  __name: "M3Mask",
  props: { ...Ke },
  emits: ["focus", "blur", "keydown", "keyup", "beforeinput", "input", "change", "paste", "reset"],
  setup(o, { expose: e, emit: t }) {
    const n = t, a = o, s = T(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mask": !0,
        "m3-mask--visible": a.visible,
        "m3-mask--right": a.right,
        [`m3-mask--dir--${a.dir}`]: ae($e.dir, a.dir)
        // :classes-values [!] System label / Системная метка
      }
    })), r = T(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new Ve(
      "m3.mask",
      a,
      {
        emits: n,
        classes: s,
        styles: r
      }
    ), u = h.render();
    return e(h.expose()), (l, c) => (j(), W(H(u)));
  }
});
export {
  z as D,
  k as G,
  Ue as _,
  x as a,
  d as t
};
