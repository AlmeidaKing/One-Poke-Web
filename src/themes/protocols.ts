export interface Colors {
  [key: string]: string;
}

export interface Fonts {
  fontFamily: string;
  fontWeight: {
    light: number;
    regular: number;
    semiBold: number;
    bold: number;
  };
}

export interface Borders {
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    big: string;
  };
}

export interface ThemeBody {
  colors: Colors;
  fonts: Fonts;
  borders: Borders;
}
