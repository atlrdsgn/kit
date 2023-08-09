import { kit } from '../../lib';

// enum for size variants
enum ButtonSize {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
}

// enum for color variants
enum ButtonColor {
  CARBON = 'CARBON',
  JADE = 'JADE',
  ORANGE = 'ORANGE',
  SAPPHIRE = 'SAPPHIRE',
  GHOST = 'GHOST',
}

// button css globals
export const sharedCSS = {
  fontVariantNumeric: 'tabular-nums',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  gap: '4px',
  transition: 'all 0.2s ease-in-out',
  willChange: 'color, backgroundColor',
  cursor: 'pointer',

  borderStyle: 'solid',

  WebkitUserSelect: 'none',
  // WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  MozUserSelect: 'none',
  MozTapHighlightColor: 'rgba(0,0,0,0)',
} as const;

// Button padding and border properties
const buttonSizeProperties = {
  padding: {
    [ButtonSize.XS]: '4px 11px',
    [ButtonSize.SM]: '6px 12px',
    [ButtonSize.MD]: '6px 14px',
    [ButtonSize.LG]: '8px 18px',
  },
  borderWidth: {
    [ButtonSize.XS]: '1px',
    [ButtonSize.SM]: '1px',
    [ButtonSize.MD]: '1px',
    [ButtonSize.LG]: '2px',
  },
  borderRadius: {
    [ButtonSize.XS]: '7px',
    [ButtonSize.SM]: '10px',
    [ButtonSize.MD]: '12px',
    [ButtonSize.LG]: '14px',
  },
} as const;

// Button text properties
const buttonTextProperties = {
  fontSize: {
    [ButtonSize.XS]: kit.font.size.XS,
    [ButtonSize.SM]: kit.font.size.SM,
    [ButtonSize.MD]: kit.font.size.MD,
    [ButtonSize.LG]: kit.font.size.LG,
  },
  lineHeight: {
    [ButtonSize.XS]: kit.font.lineheight.XS,
    [ButtonSize.SM]: kit.font.lineheight.SM,
    [ButtonSize.MD]: kit.font.lineheight.MD,
    [ButtonSize.LG]: kit.font.lineheight.LG,
  },

  // shared common text properties
  common: {
    userSelect: 'none',
    fontWeight: kit.font.weight.MEDIUM,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
} as const;

const buttonColorProperties = {
  background: {
    [ButtonColor.CARBON]: kit.color.carbon0,
    [ButtonColor.JADE]: kit.color.jade6,
    [ButtonColor.ORANGE]: kit.color.orange5,
    [ButtonColor.SAPPHIRE]: kit.color.sapphire5,
    [ButtonColor.GHOST]: 'transparent',
  },
  color: {
    [ButtonColor.CARBON]: kit.color.carbon8,
    [ButtonColor.JADE]: kit.color.jade0,
    [ButtonColor.ORANGE]: kit.color.orange0,
    [ButtonColor.SAPPHIRE]: kit.color.sapphire0,
    [ButtonColor.GHOST]: kit.color.carbon1,
  },
  borderColor: {
    [ButtonColor.CARBON]: kit.color.carbon2,
    [ButtonColor.JADE]: kit.color.jade6,
    [ButtonColor.ORANGE]: kit.color.orange4,
    [ButtonColor.SAPPHIRE]: kit.color.sapphire5,
    [ButtonColor.GHOST]: kit.color.carbon2,
  },
  boxShadow: {
    [ButtonColor.CARBON]: `0px 1px 2px -1px rgba(173, 181, 189, 0.25)`,
    [ButtonColor.JADE]: `0px 1px 2px -1px rgba(64, 192, 87, 0.25)`,
    [ButtonColor.ORANGE]: `0px 1px 2px -1px rgba(255, 191, 0, 0.25)`,
    [ButtonColor.SAPPHIRE]: `0px 1px 2px -1px rgba(17, 12, 34, 0.12)`,
    [ButtonColor.GHOST]: `0px 1px 2px -1px rgba(173, 181, 189, 0.25)`,
  },

  // hover properties
  onHover: {
    background: {
      [ButtonColor.CARBON]: kit.color.carbon1,
      [ButtonColor.JADE]: kit.color.jade7,
      [ButtonColor.ORANGE]: kit.color.orange6,
      [ButtonColor.SAPPHIRE]: kit.color.sapphire6,
      [ButtonColor.GHOST]: kit.color.transparent,
    },
    boxShadow: {
      [ButtonColor.CARBON]: `0px 1px 2px 0px rgba(173, 181, 189, 0.40)`,
      [ButtonColor.JADE]: `0px 1px 2px 0px rgba(64, 192, 87, 0.40)`,
      [ButtonColor.ORANGE]: `0px 1px 2px 0px rgba(255, 191, 0, 0.40)`,
      [ButtonColor.SAPPHIRE]: `0px 1px 2px 0px rgba(17, 12, 34, 0.40)`,
      [ButtonColor.GHOST]: `0px 1px 2px 0px rgba(173, 181, 189, 0.40)`,
    },
  },

  // focus properties
  onFocus: {
    boxShadow: {
      [ButtonColor.CARBON]: `0px 0px 0px 3.5px rgba(173, 181, 189, 0.35), 0px 1px 2px 0px #ADB5BD`,
      [ButtonColor.JADE]: `0px 0px 0px 3.5px rgba(64, 192, 87, 0.40), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
      [ButtonColor.ORANGE]: `0px 0px 0px 3.5px rgba(253, 126, 20, 0.40), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
      [ButtonColor.SAPPHIRE]: `0px 0px 0px 3.5px rgba(103, 90, 162, 0.40), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
      [ButtonColor.GHOST]: `0px 0px 0px 3.5px rgba(173, 181, 189, 0.35), 0px 1px 2px 0px #ADB5BD`,
    },
  },
} as const;

// Combined button styles
export const buttonProperties = {
  core: sharedCSS,
  text: buttonTextProperties.common,
  size: {
    config: {
      ...buttonSizeProperties,
      ...buttonTextProperties,
    },
  },
  color: {
    config: buttonColorProperties,
  },
} as const;

export type CSSButtonProperties = keyof typeof buttonProperties;

export type ButtonSizes = keyof typeof ButtonSize;
export type VariantColors = keyof typeof ButtonColor;
export type CSSButtonSizeProperties = keyof typeof buttonProperties.size.config;
export type CSSButtonColorProperties =
  keyof typeof buttonProperties.color.config;
