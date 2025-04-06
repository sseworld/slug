export type CharMap = Record<string, string>;
export type CharMapList = Record<string, CharMap>;

export interface Mode {
  charmap?: CharMap | null | undefined;
  lower?: boolean | null | undefined;
  multicharmap?: CharMap | null | undefined;
  remove?: RegExp | null | undefined;
  replacement?: string | null | undefined;
  symbols?: boolean | null | undefined;
  trim?: boolean | null | undefined;
  fallback?: boolean | null | undefined;
}

export interface DefaultTypes {
  charmap: CharMap;
  mode: "pretty" | "rfc3986";
  modes: {
    pretty: Mode;
    rfc3986: Mode;
  };
  multicharmap: CharMap;
  fallback: boolean;
}

export type Options = {
  locale?: string | undefined;
  mode?: "pretty" | "rfc3986" | null | undefined;
} & Partial<Mode>;
