import type { CSSVarFunction } from '@vanilla-extract/private';
import { kit } from '../../lib';

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
  fontSize: CSSVarFunction,
  lineHeight: CSSVarFunction,
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

export const buttonSize = {
  [ButtonSizes.XS]: makeSizeConfig(
    kit.font.size.XS,
    kit.font.lineheight.XS,
    '4px 11px',
    '1px',
    '7px',
  ),
  [ButtonSizes.SM]: makeSizeConfig(
    kit.font.size.SM,
    kit.font.lineheight.SM,
    '6px 12px',
    '1px',
    '10px',
  ),
  [ButtonSizes.MD]: makeSizeConfig(
    kit.font.size.MD,
    kit.font.lineheight.MD,
    '6px 14px',
    '1px',
    '12px',
  ),
  [ButtonSizes.LG]: makeSizeConfig(
    kit.font.size.LG,
    kit.font.lineheight.LG,
    '8px 18px',
    '2px',
    '14px',
  ),
} as const;

// create color config objects.
export const makeColorConfig = (
  background: CSSVarFunction,
  color: CSSVarFunction,
  borderColor: CSSVarFunction,
  boxShadow: string,
  onHover: {
    background: CSSVarFunction;
    borderColor: CSSVarFunction;
    boxShadow: string;
  },
  onFocus: {
    boxShadow: string;
  },
): {
  background: CSSVarFunction;
  color: CSSVarFunction;
  borderColor: CSSVarFunction;
  boxShadow: string;
  onHover: {
    background: CSSVarFunction;
    borderColor: CSSVarFunction;
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
