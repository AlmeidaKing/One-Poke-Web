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
    sm: '8px';
    md: '20px';
    big: '40px';
  };
}

export interface ThemeBody {
  colors: Colors;
  fonts: Fonts;
  borders: Borders;
}
