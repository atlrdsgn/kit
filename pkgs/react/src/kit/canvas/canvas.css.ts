import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const Z_MAP = {
  default: '0',
  blur: '1',
  normal: '2',
  top: '10',
  max: '100',
} as const;

const z = styleVariants(Z_MAP, (value) => ({
  zIndex: value,
}));

/** ------------------------------- */

const baseCanvas = style({
  boxSizing: 'border-box',
  backgroundColor: kit.color.transparent,
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  maxWidth: '100vw',
  transform: 'translate(-50%, -50%)',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'inherit',
  margin: 'auto',
  padding: '0',
  width: '100%',
  position: 'absolute',
  top: '48%',
  left: '50%',
});

/** ------------------------------ */

export type CanvasVariantProps = RecipeVariants<typeof canvas>;
export type CanvasZVariants = keyof typeof z;

export const canvas = recipe({
  base: baseCanvas,
  variants: { z },
  defaultVariants: { z: 'default' },
});
