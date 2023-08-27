export enum ButtonSizes {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
}

export enum ButtonColor {
  CARBON = 'CARBON',
  JADE = 'JADE',
  ORANGE = 'ORANGE',
  SAPPHIRE = 'SAPPHIRE',
  GHOST = 'GHOST',
}

// create size config objects.
export const makeSizeConfig = (
  fontSize: string,
  lineHeight: string,
  padding: string,
  borderWidth: string,
  borderRadius: string,
): {
  fontSize: string;
  lineHeight: string;
  padding: string;
  borderWidth: string;
  borderRadius: string;
} => ({ fontSize, lineHeight, padding, borderWidth, borderRadius });

// create color config objects.
export const makeColorConfig = (
  background: string,
  color: string,
  borderColor: string,
  boxShadow: string,
  onHover: {
    background: string;
    borderColor: string;
    boxShadow: string;
  },
  onFocus: {
    boxShadow: string;
  },
): {
  background: string;
  color: string;
  borderColor: string;
  boxShadow: string;
  onHover: {
    background: string;
    borderColor: string;
    boxShadow: string;
  };
  onFocus: {
    boxShadow: string;
  };
} => ({
  background,
  color,
  borderColor,
  boxShadow,
  onHover,
  onFocus,
});

export type ButtonSizeConfig = ReturnType<typeof makeSizeConfig>;
export type ButtonColorConfig = ReturnType<typeof makeColorConfig>;
