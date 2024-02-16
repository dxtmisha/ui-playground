var C = Object.defineProperty;
var k = (i, e, n) => e in i ? C(i, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : i[e] = n;
var h = (i, e, n) => (k(i, typeof e != "symbol" ? e + "" : e, n), n);
import { c as m, m as z, h as A } from "./string-BEtu6Ook.js";
import { u as S } from "./useEnv-Cz0t6GQt.js";
import { D as v } from "./DataStorage-CS_uBVlg.js";
import { t as p } from "./number-Bmx0fGP3.js";
function g(i) {
  if (i instanceof Date)
    return i;
  if (m(i))
    return /* @__PURE__ */ new Date();
  if (typeof i == "number")
    return new Date(i);
  let e = i, n = "";
  i.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (o, t, r) => (e = t, n = r, o));
  const a = (/^\d{4}\d{2}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(e) && `${e}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(e) && `${e}-01T00:00:00`) ?? (/^\d{4}$/.exec(e) && `${e}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}`) ?? e.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${a}${n}`);
}
const L = [
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
], P = "geo-code", l = class l {
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
    return L;
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
  static set(e, n) {
    this.location = e, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), n && this.storage.set(this.location);
  }
  /**
   * Returns the data about the country by its full code.<br>
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(e) {
    let n;
    return e && (e.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (n = this.getByCodeFull(e)), !n && e.match(/[A-Z]{2}/) && (n = this.getByCountry(this.toCountry(e))), !n && e.match(/[a-z]{2}/) && (n = this.getByLanguage(this.toLanguage(e)))), this.toFull(z(n ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.<br>
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country /<br>строка в виде язык-страна
   */
  static getByCodeFull(e) {
    return this.getList().find(
      (n) => A(e, [
        `${n.language}-${n.country}`,
        `${n.country}-${n.language}`
      ])
    );
  }
  /**
   * Returns the full data by country.<br>
   * Возвращает полные данные по стране.
   * @param country country /<br>страна
   */
  static getByCountry(e) {
    return this.getList().find((n) => {
      var a;
      return n.country === e || ((a = n == null ? void 0 : n.countryAlternative) == null ? void 0 : a.find((o) => o === e));
    });
  }
  /**
   * Returns the full data by language.<br>
   * Возвращает полные данные по языку.
   * @param language language /<br>язык
   */
  static getByLanguage(e) {
    return this.getList().find((n) => {
      var a;
      return n.language === e || ((a = n == null ? void 0 : n.languageAlternative) == null ? void 0 : a.find((o) => o === e));
    });
  }
  /**
   * Determines the current location.<br>
   * Определяет текущую локацию.
   */
  static findLocation() {
    var e;
    return this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || S("language") || "en-GB";
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
h(l, "storage", new v(P)), h(l, "location"), h(l, "item"), h(l, "language"), l.location = l.findLocation(), l.language = l.findLanguage(l.location), l.item = l.getByCode(l.location);
let c = l;
class B {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(e = c.getLocation()) {
    h(this, "geo");
    this.geo = c.find(e);
    const n = this.getLocation();
    if (n in d)
      return d[n];
    d[n] = this;
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
  display(e, n) {
    let a = { type: "language" }, o;
    n && (typeof n == "string" ? a.type = n : a = {
      ...a,
      ...n
    });
    try {
      e ? o = new Intl.DisplayNames(this.getLocation(), a).of(e) : a.type === "language" ? o = new Intl.DisplayNames(this.getLocation(), a).of(this.geo.language) : a.type === "region" && (o = new Intl.DisplayNames(this.getLocation(), a).of(this.geo.country));
    } catch {
    }
    return o ?? e ?? "";
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(e, n) {
    const a = {
      type: "language",
      style: n
    };
    return this.display(e, a);
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(e, n) {
    const a = {
      type: "region",
      style: n
    };
    return this.display(e, a);
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(e, n) {
    var a, o;
    return ((o = (a = this.numberObject(n)) == null ? void 0 : a.format) == null ? void 0 : o.call(a, p(e))) || e.toString();
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    var e, n, a, o, t;
    return ((t = (o = (a = (n = (e = this.numberObject()) == null ? void 0 : e.formatToParts) == null ? void 0 : n.call(e, 1.2)) == null ? void 0 : a.find) == null ? void 0 : o.call(a, (r) => r.type === "decimal")) == null ? void 0 : t.value) || ".";
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(e, n, a = !1) {
    const o = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof n == "string" ? { currency: n } : n || {}
    }, t = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...r) => (o.currency = r[2].toUpperCase(), r[1]));
    if (a) {
      const r = this.numberObject(o);
      return r ? r.formatToParts(p(e)).filter((s) => ["literal", "currency"].indexOf(s.type) === -1).join("") : e.toString();
    } else
      return this.number(t, o);
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(e, n) {
    const a = {
      style: "unit",
      ...typeof n == "string" ? { unit: n } : n || {}
    }, o = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...t) => (a.unit = t[2].toLowerCase(), t[1]));
    return this.number(o, a);
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(e, n) {
    return this.number(e, {
      style: "percent",
      ...n || {}
    });
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(e, n) {
    return this.percent(p(e) / 100, n);
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(e, n, a, o) {
    const t = g(e), r = typeof a == "string", s = this.dateOptions(n, r ? a : "short");
    return o && (s.hour12 = !1), r || Object.assign(s, a), t.toLocaleString(this.getLocation(), s);
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(e, n, a) {
    const o = g(e), t = a || /* @__PURE__ */ new Date(), r = {
      numeric: "auto",
      ...typeof n == "string" ? { style: n } : n || {}
    };
    let s = "second", u = (o.getTime() - t.getTime()) / 1e3;
    Math.abs(u) >= 60 && (s = "minute", u /= 60, Math.abs(u) >= 60 && (s = "hour", u /= 60, Math.abs(u) >= 24 && (s = "day", u /= 24, Math.abs(u) >= 30 && (s = "month", u /= 30, Math.abs(u) >= 12 && (s = "year", u /= 12)))));
    try {
      return new Intl.RelativeTimeFormat(this.getLocation(), r).format(Math.round(u), s);
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
  relativeLimit(e, n, a, o, t, r, s) {
    const u = g(e), y = a || /* @__PURE__ */ new Date(), f = new Date(y), M = new Date(y);
    return f.setDate(y.getDate() - n), M.setDate(y.getDate() + n), u >= f && u <= M ? this.relative(
      u,
      o,
      y
    ) : this.date(
      u,
      r,
      t,
      s
    );
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(e, n) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { month: n || "long" }).format(g(e));
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
    const n = [{
      label: "",
      value: void 0
    }];
    try {
      const a = /* @__PURE__ */ new Date(), o = Intl.DateTimeFormat(this.getLocation(), { month: e || "long" });
      for (let t = 0; t < 12; t++)
        a.setMonth(t), n.push({
          label: o.format(a).replace(/^./, (r) => r.toUpperCase()),
          value: t + 1
        });
    } catch {
    }
    return n;
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(e, n) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { weekday: n || "long" }).format(g(e));
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
    const n = [{
      label: "",
      value: void 0
    }];
    try {
      const a = /* @__PURE__ */ new Date(), o = Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }), t = a.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
      a.setDate(a.getDate() - t);
      for (let r = 0; r < 7; r++)
        n.push({
          label: o.format(a).replace(/^./, (s) => s.toUpperCase()),
          value: a.getDay()
        }), a.setDate(a.getDate() + 1);
    } catch {
    }
    return n;
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
  sort(e, n = (a, o) => [a, o]) {
    const a = new Intl.Collator(this.getLocation());
    return e.sort((o, t) => a.compare(...n(o, t)));
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
  dateOptions(e, n = "short") {
    const a = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(e) !== -1 && (a.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month"].indexOf(e) !== -1 && (a.month = n), ["full", "datetime", "date", void 0, "day"].indexOf(e) !== -1 && (a.day = "2-digit"), e !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(e) !== -1 && (a.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(e) !== -1 && (a.minute = "2-digit"), ["full", "time", "second"].indexOf(e) !== -1 && (a.second = "2-digit")), a;
  }
}
const d = {};
class D {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(e, n = "date", a = c.getLocation()) {
    h(this, "date");
    h(this, "hour24", !1);
    h(this, "watch");
    this.type = n, this.code = a, this.date = g(e);
  }
  /**
   * Returns an object for working with formatting.<br>
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new B(this.code);
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
    const n = this.getTimeZoneOffset();
    if (e === "minute")
      return n.toString();
    const a = n / 60 * -1;
    if (e === "hour")
      return this.getIntl().number(Math.trunc(a), { signDisplay: "always" });
    const o = this.getIntl().number(Math.trunc(a), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), t = a.toString().match(/.\d+/) ? "30" : "00";
    return e === "RFC" ? `${o}${t}` : `${o}:${t}`;
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
  locale(e = this.type, n) {
    return this.getIntl().date(
      this.date,
      e,
      n,
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
    const n = new D(this.date, this.type, "en-GB"), a = [];
    let o;
    return n.setHour24(!0), this.type === "hour-minute" ? o = n.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (a.push(n.localeYear()), a.push(n.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && a.push(n.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (o = n.locale("time"))), `${a.join("-")}${o ? `T${o}${e ? n.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.<br>
   * Изменять полностью дату.
   * @param value an integer value representing the number /<br>
   * целочисленное значение, представляющее число
   */
  setDate(e) {
    return this.date = g(e), this.update(), this;
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
    const e = this.date.getDay(), n = this.getFirstDayCode();
    return this.moveByDay(
      (n === 6 ? -1 : n) - e
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
export {
  D,
  c as G,
  B as a,
  g as t
};
