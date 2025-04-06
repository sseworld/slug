import { initialCharmap, initialMulticharmap, locales } from "./helpers";
import { CharMap, CharMapList, DefaultTypes, Options } from "./types";

export default class Slugifier {
  private static base64: (input: string) => string;
  private static locales: CharMapList = locales;
  private static defaultLocale: CharMap = {};
  private static initialCharmap: CharMap = initialCharmap;
  private static initialMulticharmap: CharMap = initialMulticharmap;

  private static default: DefaultTypes = {
    charmap: Slugifier.initialCharmap,
    mode: "pretty",
    modes: {
      rfc3986: {
        replacement: "-",
        remove: null,
        lower: true,
        charmap: Slugifier.initialCharmap,
        multicharmap: Slugifier.initialMulticharmap,
        trim: true,
      },
      pretty: {
        replacement: "-",
        remove: null,
        lower: true,
        charmap: Slugifier.initialCharmap,
        multicharmap: Slugifier.initialMulticharmap,
        trim: true,
      },
    },
    multicharmap: Slugifier.initialMulticharmap,
    fallback: true,
  };

  private initializeBase64() {
    if (typeof window !== "undefined") {
      if (window.btoa) {
        Slugifier.base64 = (input: string) =>
          btoa(unescape(encodeURIComponent(input)));
      } else {
        Slugifier.base64 = (input: string) => {
          const str = unescape(encodeURIComponent(input + ""));
          let output = "";
          for (
            let block,
              charCode,
              idx = 0,
              map =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            str.charAt(idx | 0) || ((map = "="), idx % 1);
            output += map.charAt(63 & (block >> (8 - (idx % 1) * 8)))
          ) {
            charCode = str.charCodeAt((idx += 3 / 4));
            if (charCode > 0xff) {
              throw new Error(
                "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
              );
            }
            block = (block << 8) | charCode;
          }
          return output;
        };
      }
    } else {
      Slugifier.base64 = (input: string) =>
        Buffer.from(input).toString("base64");
    }
  }
}
