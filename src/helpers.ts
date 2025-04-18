import { CharMap, CharMapList } from "./types";

export const locales: CharMapList = {
  // http://www.eki.ee/wgrs/rom1_bg.pdf
  bg: {
    Й: "Y",
    й: "y",
    X: "H",
    x: "h",
    Ц: "Ts",
    ц: "ts",
    Щ: "Sht",
    щ: "sht",
    Ъ: "A",
    ъ: "a",
    Ь: "Y",
    ь: "y",
  },
  // Need a reference URL for German, although this is pretty well-known.
  de: { Ä: "AE", ä: "ae", Ö: "OE", ö: "oe", Ü: "UE", ü: "ue" },
  // Need a reference URL for Serbian.
  sr: { đ: "dj", Đ: "DJ" },
  // https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/864314/ROMANIZATION_OF_UKRAINIAN.pdf
  uk: {
    И: "Y",
    и: "y",
    Й: "Y",
    й: "y",
    Ц: "Ts",
    ц: "ts",
    Х: "Kh",
    х: "kh",
    Щ: "Shch",
    щ: "shch",
    Г: "H",
    г: "h",
  },
};

export const initialMulticharmap: CharMap = {
  // multibyte devanagari characters (hindi, sanskrit, etc.)
  फ़: "Fi",
  ग़: "Ghi",
  ख़: "Khi",
  क़: "Qi",
  ड़: "ugDha",
  ढ़: "ugDhha",
  य़: "Yi",
  ज़: "Za",
  // hebrew
  // Refs: http://www.eki.ee/wgrs/rom1_he.pdf
  // Refs: https://en.wikipedia.org/wiki/Niqqud
  בִי: "i",
  בֵ: "e",
  בֵי: "e",
  בֶ: "e",
  בַ: "a",
  בָ: "a",
  בֹ: "o",
  וֹ: "o",
  בֻ: "u",
  וּ: "u",
  בּ: "b",
  כּ: "k",
  ךּ: "k",
  פּ: "p",
  שׁ: "sh",
  שׂ: "s",
  בְ: "e",
  חֱ: "e",
  חֲ: "a",
  חֳ: "o",
  בִ: "i",
};

// https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js
export const initialCharmap: CharMap = {
  // latin
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  Æ: "AE",
  Ç: "C",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  Ð: "D",
  Ñ: "N",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ő: "O",
  Ø: "O",
  Ō: "O",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  Ű: "U",
  Ý: "Y",
  Þ: "TH",
  ß: "ss",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  æ: "ae",
  ç: "c",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ð: "d",
  ñ: "n",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ő: "o",
  ø: "o",
  ō: "o",
  Œ: "OE",
  œ: "oe",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  ű: "u",
  ý: "y",
  þ: "th",
  ÿ: "y",
  ẞ: "SS",
  // greek
  α: "a",
  β: "b",
  γ: "g",
  δ: "d",
  ε: "e",
  ζ: "z",
  η: "h",
  θ: "th",
  ι: "i",
  κ: "k",
  λ: "l",
  μ: "m",
  ν: "n",
  ξ: "3",
  ο: "o",
  π: "p",
  ρ: "r",
  σ: "s",
  τ: "t",
  υ: "y",
  φ: "f",
  χ: "x",
  ψ: "ps",
  ω: "w",
  ά: "a",
  έ: "e",
  ί: "i",
  ό: "o",
  ύ: "y",
  ή: "h",
  ώ: "w",
  ς: "s",
  ϊ: "i",
  ΰ: "y",
  ϋ: "y",
  ΐ: "i",
  Α: "A",
  Β: "B",
  Γ: "G",
  Δ: "D",
  Ε: "E",
  Ζ: "Z",
  Η: "H",
  Θ: "Th",
  Ι: "I",
  Κ: "K",
  Λ: "L",
  Μ: "M",
  Ν: "N",
  Ξ: "3",
  Ο: "O",
  Π: "P",
  Ρ: "R",
  Σ: "S",
  Τ: "T",
  Υ: "Y",
  Φ: "F",
  Χ: "X",
  Ψ: "PS",
  Ω: "W",
  Ά: "A",
  Έ: "E",
  Ί: "I",
  Ό: "O",
  Ύ: "Y",
  Ή: "H",
  Ώ: "W",
  Ϊ: "I",
  Ϋ: "Y",
  // turkish
  ş: "s",
  Ş: "S",
  ı: "i",
  İ: "I",
  ğ: "g",
  Ğ: "G",
  // russian
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "yo",
  ж: "zh",
  з: "z",
  и: "i",
  й: "j",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "c",
  ч: "ch",
  ш: "sh",
  щ: "sh",
  ъ: "u",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
  А: "A",
  Б: "B",
  В: "V",
  Г: "G",
  Д: "D",
  Е: "E",
  Ё: "Yo",
  Ж: "Zh",
  З: "Z",
  И: "I",
  Й: "J",
  К: "K",
  Л: "L",
  М: "M",
  Н: "N",
  О: "O",
  П: "P",
  Р: "R",
  С: "S",
  Т: "T",
  У: "U",
  Ф: "F",
  Х: "H",
  Ц: "C",
  Ч: "Ch",
  Ш: "Sh",
  Щ: "Sh",
  Ъ: "U",
  Ы: "Y",
  Ь: "",
  Э: "E",
  Ю: "Yu",
  Я: "Ya",
  // ukranian
  Є: "Ye",
  І: "I",
  Ї: "Yi",
  Ґ: "G",
  є: "ye",
  і: "i",
  ї: "yi",
  ґ: "g",
  // czech
  č: "c",
  ď: "d",
  ě: "e",
  ň: "n",
  ř: "r",
  š: "s",
  ť: "t",
  ů: "u",
  ž: "z",
  Č: "C",
  Ď: "D",
  Ě: "E",
  Ň: "N",
  Ř: "R",
  Š: "S",
  Ť: "T",
  Ů: "U",
  Ž: "Z",
  // slovak
  ľ: "l",
  ĺ: "l",
  ŕ: "r",
  Ľ: "L",
  Ĺ: "L",
  Ŕ: "R",
  // polish
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ś: "s",
  ź: "z",
  ż: "z",
  Ą: "A",
  Ć: "C",
  Ę: "E",
  Ł: "L",
  Ń: "N",
  Ś: "S",
  Ź: "Z",
  Ż: "Z",
  // latvian
  ā: "a",
  ē: "e",
  ģ: "g",
  ī: "i",
  ķ: "k",
  ļ: "l",
  ņ: "n",
  ū: "u",
  Ā: "A",
  Ē: "E",
  Ģ: "G",
  Ī: "I",
  Ķ: "K",
  Ļ: "L",
  Ņ: "N",
  Ū: "U",
  // arabic
  أ: "a",
  إ: "i",
  ب: "b",
  ت: "t",
  ث: "th",
  ج: "g",
  ح: "h",
  خ: "kh",
  د: "d",
  ذ: "th",
  ر: "r",
  ز: "z",
  س: "s",
  ش: "sh",
  ص: "s",
  ض: "d",
  ط: "t",
  ظ: "th",
  ع: "aa",
  غ: "gh",
  ف: "f",
  ق: "k",
  ك: "k",
  ل: "l",
  م: "m",
  ن: "n",
  ه: "h",
  و: "o",
  ي: "y",
  ء: "aa",
  ة: "a",
  // farsi
  آ: "a",
  ا: "a",
  پ: "p",
  ژ: "zh",
  گ: "g",
  چ: "ch",
  ک: "k",
  ی: "i",
  // lithuanian
  ė: "e",
  į: "i",
  ų: "u",
  Ė: "E",
  Į: "I",
  Ų: "U",
  // romanian
  ț: "t",
  Ț: "T",
  ţ: "t",
  Ţ: "T",
  ș: "s",
  Ș: "S",
  ă: "a",
  Ă: "A",
  // vietnamese
  Ạ: "A",
  Ả: "A",
  Ầ: "A",
  Ấ: "A",
  Ậ: "A",
  Ẩ: "A",
  Ẫ: "A",
  Ằ: "A",
  Ắ: "A",
  Ặ: "A",
  Ẳ: "A",
  Ẵ: "A",
  Ẹ: "E",
  Ẻ: "E",
  Ẽ: "E",
  Ề: "E",
  Ế: "E",
  Ệ: "E",
  Ể: "E",
  Ễ: "E",
  Ị: "I",
  Ỉ: "I",
  Ĩ: "I",
  Ọ: "O",
  Ỏ: "O",
  Ồ: "O",
  Ố: "O",
  Ộ: "O",
  Ổ: "O",
  Ỗ: "O",
  Ơ: "O",
  Ờ: "O",
  Ớ: "O",
  Ợ: "O",
  Ở: "O",
  Ỡ: "O",
  Ụ: "U",
  Ủ: "U",
  Ũ: "U",
  Ư: "U",
  Ừ: "U",
  Ứ: "U",
  Ự: "U",
  Ử: "U",
  Ữ: "U",
  Ỳ: "Y",
  Ỵ: "Y",
  Ỷ: "Y",
  Ỹ: "Y",
  Đ: "D",
  ạ: "a",
  ả: "a",
  ầ: "a",
  ấ: "a",
  ậ: "a",
  ẩ: "a",
  ẫ: "a",
  ằ: "a",
  ắ: "a",
  ặ: "a",
  ẳ: "a",
  ẵ: "a",
  ẹ: "e",
  ẻ: "e",
  ẽ: "e",
  ề: "e",
  ế: "e",
  ệ: "e",
  ể: "e",
  ễ: "e",
  ị: "i",
  ỉ: "i",
  ĩ: "i",
  ọ: "o",
  ỏ: "o",
  ồ: "o",
  ố: "o",
  ộ: "o",
  ổ: "o",
  ỗ: "o",
  ơ: "o",
  ờ: "o",
  ớ: "o",
  ợ: "o",
  ở: "o",
  ỡ: "o",
  ụ: "u",
  ủ: "u",
  ũ: "u",
  ư: "u",
  ừ: "u",
  ứ: "u",
  ự: "u",
  ử: "u",
  ữ: "u",
  ỳ: "y",
  ỵ: "y",
  ỷ: "y",
  ỹ: "y",
  đ: "d",
  // kazakh
  Ә: "AE",
  ә: "ae",
  Ғ: "GH",
  ғ: "gh",
  Қ: "KH",
  қ: "kh",
  Ң: "NG",
  ң: "ng",
  Ү: "UE",
  ү: "ue",
  Ұ: "U",
  ұ: "u",
  Һ: "H",
  һ: "h",
  Ө: "OE",
  ө: "oe",
  // serbian
  ђ: "dj",
  ј: "j",
  љ: "lj",
  њ: "nj",
  ћ: "c",
  џ: "dz",
  Ђ: "Dj",
  Ј: "j",
  Љ: "Lj",
  Њ: "Nj",
  Ћ: "C",
  Џ: "Dz",
  ǌ: "nj",
  ǉ: "lj",
  ǋ: "NJ",
  ǈ: "LJ",
  // hindi
  अ: "a",
  आ: "aa",
  ए: "e",
  ई: "ii",
  ऍ: "ei",
  ऎ: "ae",
  ऐ: "ai",
  इ: "i",
  ओ: "o",
  ऑ: "oi",
  ऒ: "oii",
  ऊ: "uu",
  औ: "ou",
  उ: "u",
  ब: "B",
  भ: "Bha",
  च: "Ca",
  छ: "Chha",
  ड: "Da",
  ढ: "Dha",
  फ: "Fa",
  ग: "Ga",
  घ: "Gha",
  ग़: "Ghi",
  ह: "Ha",
  ज: "Ja",
  झ: "Jha",
  क: "Ka",
  ख: "Kha",
  ख़: "Khi",
  ल: "L",
  ळ: "Li",
  ऌ: "Li",
  ऴ: "Lii",
  ॡ: "Lii",
  म: "Ma",
  न: "Na",
  ङ: "Na",
  ञ: "Nia",
  ण: "Nae",
  ऩ: "Ni",
  ॐ: "oms",
  प: "Pa",
  क़: "Qi",
  र: "Ra",
  ऋ: "Ri",
  ॠ: "Ri",
  ऱ: "Ri",
  स: "Sa",
  श: "Sha",
  ष: "Shha",
  ट: "Ta",
  त: "Ta",
  ठ: "Tha",
  द: "Tha",
  थ: "Tha",
  ध: "Thha",
  ड़: "ugDha",
  ढ़: "ugDhha",
  व: "Va",
  य: "Ya",
  य़: "Yi",
  ज़: "Za",
  // azerbaijani
  ə: "e",
  Ə: "E",
  // georgian
  ა: "a",
  ბ: "b",
  გ: "g",
  დ: "d",
  ე: "e",
  ვ: "v",
  ზ: "z",
  თ: "t",
  ი: "i",
  კ: "k",
  ლ: "l",
  მ: "m",
  ნ: "n",
  ო: "o",
  პ: "p",
  ჟ: "zh",
  რ: "r",
  ს: "s",
  ტ: "t",
  უ: "u",
  ფ: "p",
  ქ: "k",
  ღ: "gh",
  ყ: "q",
  შ: "sh",
  ჩ: "ch",
  ც: "ts",
  ძ: "dz",
  წ: "ts",
  ჭ: "ch",
  ხ: "kh",
  ჯ: "j",
  ჰ: "h",
  // hebrew
  ב: "v",
  גּ: "g",
  ג: "g",
  ד: "d",
  דּ: "d",
  ה: "h",
  ו: "v",
  ז: "z",
  ח: "h",
  ט: "t",
  י: "y",
  כ: "kh",
  ך: "kh",
  ל: "l",
  מ: "m",
  ם: "m",
  נ: "n",
  ן: "n",
  ס: "s",
  פ: "f",
  ף: "f",
  ץ: "ts",
  צ: "ts",
  ק: "k",
  ר: "r",
  תּ: "t",
  ת: "t",
};
