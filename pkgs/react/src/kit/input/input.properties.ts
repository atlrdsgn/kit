import { kit } from '../../lib';

/** ---------------------------------------------- */

// enum for size variants
enum InputSize {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
}

// enum for color variants
enum InputVariant {
  CARBON = 'CARBON',
  JADE = 'JADE',
  ORANGE = 'ORANGE',
  SAPPHIRE = 'SAPPHIRE',
}

// shared input properties
const sharedInputCSS = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  width: '100%',
  margin: 'auto',

  fontFamily: kit.font.family.system,
  fontWeight: kit.font.weight.REGULAR,
} as const;

const typeNumber = {
  ...sharedInputCSS,

  fontVariantNumeric: 'tabular-nums',
} as const;

const inputSizeProperties = {
  fontSize: {
    [InputSize.XS]: kit.font.size.XS,
    [InputSize.SM]: kit.font.size.SM,
    [InputSize.MD]: kit.font.size.MD,
  },
  lineHeight: {
    [InputSize.XS]: kit.font.lineheight.XS,
    [InputSize.SM]: kit.font.lineheight.SM,
    [InputSize.MD]: kit.font.lineheight.MD,
  },
  padding: {
    [InputSize.XS]: '4px 12px',
    [InputSize.SM]: '6px 14px',
    [InputSize.MD]: '8px 16px',
  },
  borderWidth: {
    [InputSize.XS]: '1.4px',
    [InputSize.SM]: '1.6px',
    [InputSize.MD]: '2px',
  },
  borderRadius: {
    [InputSize.XS]: '9px',
    [InputSize.SM]: '10px',
    [InputSize.MD]: '12px',
  },
} as const;

const inputColorProperties = {
  backgroundColor: {
    [InputVariant.CARBON]: kit.color.carbon0,
    [InputVariant.JADE]: kit.color.white,
    [InputVariant.ORANGE]: kit.color.white,
    [InputVariant.SAPPHIRE]: kit.color.white,
  },
  color: {
    [InputVariant.CARBON]: kit.color.carbon8,
    [InputVariant.JADE]: kit.color.carbon9,
    [InputVariant.ORANGE]: kit.color.carbon9,
    [InputVariant.SAPPHIRE]: kit.color.carbon9,
  },
  borderColor: {
    [InputVariant.CARBON]: kit.color.carbon3,
    [InputVariant.JADE]: kit.color.carbon4,
    [InputVariant.ORANGE]: kit.color.carbon4,
    [InputVariant.SAPPHIRE]: kit.color.carbon4,
  },

  onHover: {
    backgroundColor: {
      [InputVariant.CARBON]: kit.color.white,
      [InputVariant.JADE]: kit.color.white,
      [InputVariant.ORANGE]: kit.color.white,
      [InputVariant.SAPPHIRE]: kit.color.white,
    },
    borderColor: {
      [InputVariant.CARBON]: kit.color.carbon3,
      [InputVariant.JADE]: kit.color.jade3,
      [InputVariant.ORANGE]: kit.color.orange3,
      [InputVariant.SAPPHIRE]: kit.color.sapphire2,
    },
    boxShadow: {
      [InputVariant.CARBON]: `0px 1px 2px 0px rgba(134, 142, 150, 0.25)`,
      [InputVariant.JADE]: `0px 1px 4px 0px rgba(43, 138, 62, 0.25)`,
      [InputVariant.ORANGE]: `0px 1px 4px 0px rgba(232, 89, 12, 0.25)`,
      [InputVariant.SAPPHIRE]: `0px 1px 4px 0px rgba(74, 73, 126, 0.25)`,
    },
  },
  onFocus: {
    backgroundColor: {
      [InputVariant.CARBON]: kit.color.white,
      [InputVariant.JADE]: kit.color.white,
      [InputVariant.ORANGE]: kit.color.white,
      [InputVariant.SAPPHIRE]: kit.color.white,
    },
    borderColor: {
      [InputVariant.CARBON]: kit.color.carbon4,
      [InputVariant.JADE]: kit.color.jade5,
      [InputVariant.ORANGE]: kit.color.orange4,
      [InputVariant.SAPPHIRE]: kit.color.sapphire3,
    },
    boxShadow: {
      [InputVariant.CARBON]: `0px 0px 0px 4px rgba(134, 142, 150, 0.20), 0px 1px 2px 0px rgba(134, 142, 150, 0.40)`,
      [InputVariant.JADE]: `0px 0px 0px 4px rgba(81, 207, 102, 0.20), 0px 1px 2px 0px rgba(81, 207, 102, 0.40)`,
      [InputVariant.ORANGE]: `0px 0px 0px 4px rgba(255, 140, 0, 0.20), 0px 1px 2px 0px rgba(255, 140, 0, 0.40)`,
      [InputVariant.SAPPHIRE]: `0px 0px 0px 4px rgba(74, 73, 126, 0.20), 0px 1px 2px 0px rgba(74, 73, 126, 0.40)`,
    },
  },

  // '@media (prefers-color-scheme: dark)'
  darkMode: {
    backgroundColor: {
      [InputVariant.CARBON]: kit.color.carbon9,
      [InputVariant.JADE]: kit.color.carbon9,
      [InputVariant.ORANGE]: kit.color.carbon9,
      [InputVariant.SAPPHIRE]: kit.color.carbon9,
    },
    color: {
      [InputVariant.CARBON]: kit.color.carbon3,
      [InputVariant.JADE]: kit.color.carbon3,
      [InputVariant.ORANGE]: kit.color.carbon3,
      [InputVariant.SAPPHIRE]: kit.color.carbon3,
    },
    borderColor: {
      [InputVariant.CARBON]: kit.color.carbon8,
      [InputVariant.JADE]: kit.color.carbon8,
      [InputVariant.ORANGE]: kit.color.carbon8,
      [InputVariant.SAPPHIRE]: kit.color.carbon8,
    },
    onHover: {
      backgroundColor: {},
      borderColor: {},
      boxShadow: {},
    },
    onFocus: {
      backgroundColor: {},
      borderColor: {},
      boxShadow: {},
    },
  },
} as const;

export const inputProperties = {
  core: sharedInputCSS,
  number: typeNumber,
  size: inputSizeProperties,
  variant: inputColorProperties,
} as const;

export type InputSizes = keyof typeof InputSize;
export type InputVariants = keyof typeof InputVariant;
export type InputProperties = typeof inputProperties;
