import { kit } from '../../lib';
import { ButtonSizes, ButtonColor } from './button.utils';
import { sharedShadows as kitShadow } from '../@shared';

// button css globals
const sharedCSS = {
  textRendering: 'optimizeLegibility',
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

  // text properties
  userSelect: 'none',
  fontWeight: kit.font.weight.MEDIUM,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  // shared non-standard properties
  WebkitUserSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  MozUserSelect: 'none',
  MozTapHighlightColor: 'rgba(0,0,0,0)',
} as const;

// Button padding and border properties
const buttonSizeProperties = {
  fontSize: {
    [ButtonSizes.XS]: kit.font.size.XS,
    [ButtonSizes.SM]: kit.font.size.SM,
    [ButtonSizes.MD]: kit.font.size.MD,
    [ButtonSizes.LG]: kit.font.size.LG,
  },
  lineHeight: {
    [ButtonSizes.XS]: kit.font.lineheight.XS,
    [ButtonSizes.SM]: kit.font.lineheight.SM,
    [ButtonSizes.MD]: kit.font.lineheight.MD,
    [ButtonSizes.LG]: kit.font.lineheight.LG,
  },
  padding: {
    [ButtonSizes.XS]: '4px 11px',
    [ButtonSizes.SM]: '6px 12px',
    [ButtonSizes.MD]: '6px 14px',
    [ButtonSizes.LG]: '8px 18px',
  },
  borderWidth: {
    [ButtonSizes.XS]: '1px',
    [ButtonSizes.SM]: '1px',
    [ButtonSizes.MD]: '1px',
    [ButtonSizes.LG]: '2px',
  },
  borderRadius: {
    [ButtonSizes.XS]: '7px',
    [ButtonSizes.SM]: '10px',
    [ButtonSizes.MD]: '12px',
    [ButtonSizes.LG]: '14px',
  },
} as const;

const buttonColorProperties = {
  background: {
    // background color
    [ButtonColor.CARBON]: kit.color.carbon0,
    [ButtonColor.JADE]: kit.color.jade6,
    [ButtonColor.ORANGE]: kit.color.orange6,
    [ButtonColor.SAPPHIRE]: kit.color.sapphire6,
    [ButtonColor.GHOST]: kit.color.transparent,
  },
  color: {
    // text color
    [ButtonColor.CARBON]: kit.color.carbon8,
    [ButtonColor.JADE]: kit.color.jade0,
    [ButtonColor.ORANGE]: kit.color.orange0,
    [ButtonColor.SAPPHIRE]: kit.color.sapphire0,
    [ButtonColor.GHOST]: kit.color.carbon1,
  },
  borderColor: {
    // border color
    [ButtonColor.CARBON]: kit.color.carbon2,
    [ButtonColor.JADE]: kit.color.jade6,
    [ButtonColor.ORANGE]: kit.color.orange6,
    [ButtonColor.SAPPHIRE]: kit.color.sapphire6,
    [ButtonColor.GHOST]: kit.color.carbon2,
  },
  boxShadow: {
    // box shadow– initial.
    [ButtonColor.CARBON]: `0px 1px 2px -1px rgba(173, 181, 189, 0.25)`,
    [ButtonColor.JADE]: kitShadow.MINI,
    [ButtonColor.ORANGE]: kitShadow.MINI,
    [ButtonColor.SAPPHIRE]: kitShadow.MINI,
    [ButtonColor.GHOST]: kitShadow.MINI,
  },

  // hover properties
  onHover: {
    background: {
      // background color– on hover.
      [ButtonColor.CARBON]: kit.color.carbon0,
      [ButtonColor.JADE]: kit.color.jade6,
      [ButtonColor.ORANGE]: kit.color.orange6,
      [ButtonColor.SAPPHIRE]: kit.color.sapphire6,
      [ButtonColor.GHOST]: kit.color.transparent,
    },
    borderColor: {
      // border color– on hover.
      [ButtonColor.CARBON]: kit.color.carbon2,
      [ButtonColor.JADE]: kit.color.jade6,
      [ButtonColor.ORANGE]: kit.color.orange6,
      [ButtonColor.SAPPHIRE]: kit.color.sapphire6,
      [ButtonColor.GHOST]: kit.color.carbon2,
    },
    boxShadow: {
      // box shadow– on hover.
      [ButtonColor.CARBON]: `0px 1px 2px 0px rgba(173, 181, 189, 0.40)`,
      [ButtonColor.JADE]: `0px 1px 2px 0px rgba(173, 181, 189, 0.40)`,
      [ButtonColor.ORANGE]: `0px 1px 2px 0px rgba(173, 181, 189, 0.40)`,
      [ButtonColor.SAPPHIRE]: `0px 1px 2px 0px rgba(173, 181, 189, 0.40)`,
      [ButtonColor.GHOST]: `0px 1px 2px 0px rgba(173, 181, 189, 0.40)`,
    },
  },

  // focus properties
  onFocus: {
    boxShadow: {
      // box shadow– on focus.
      [ButtonColor.CARBON]: `0px 0px 0px 3.5px rgba(173, 181, 189, 0.35), 0px 1px 2px 0px #ADB5BD`,
      [ButtonColor.JADE]: `0px 0px 0px 3.5px rgba(64, 192, 87, 0.40), 0px 1px 1px 0px rgba(166, 166, 166, 0.30)`,
      [ButtonColor.ORANGE]: `0px 0px 0px 3.5px rgba(253, 126, 20, 0.40), 0px 1px 1px 0px rgba(163, 163, 163, 0.30)`,
      [ButtonColor.SAPPHIRE]: `0px 0px 0px 3.5px rgba(103, 90, 162, 0.40), 0px 1px 1px 0px rgba(140, 140, 140, 0.30)`,
      [ButtonColor.GHOST]: `0px 0px 0px 3.5px rgba(173, 181, 189, 0.35), 0px 1px 2px 0px #ADB5BD`,
    },
  },
} as const;

// Combined button styles
export const buttonProperties = {
  core: sharedCSS,
  size: {
    config: buttonSizeProperties,
  },
  color: {
    config: buttonColorProperties,
  },
} as const;

export type CSSButtonProperties = keyof typeof buttonProperties;

export type CSSButtonSizes = keyof typeof ButtonSizes;
export type CSSVariantColors = keyof typeof ButtonColor;
export type CSSButtonSizeProperties = keyof typeof buttonProperties.size.config;
export type CSSButtonColorProperties =
  keyof typeof buttonProperties.color.config;
