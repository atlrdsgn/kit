import { azure, cherry, lime, lemon, hyper } from './neon';
import { carbon, carbonDark } from './carbon';
import { jade, jadeDark } from './jade';
import { grey, greyDark } from './grey';
import { sapphire, sapphireDark } from './sapphire';
import { slate, slateDark } from './slate';
import { orange, orangeDark } from './orange';

export const kitColour = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#FFFFFF',
  black: '#000000',

  // core
  ...jade,
  ...sapphire,
  ...orange,

  // neutrals
  ...carbon,
  ...grey,
  ...slate,

  // neon
  ...azure,
  ...cherry,
  ...lime,
  ...lemon,
  ...hyper,
} as const;

export const darkKitColour = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#FFFFFF',
  black: '#000000',

  // core
  ...jadeDark,
  ...sapphireDark,
  ...orangeDark,

  // neutrals
  ...carbonDark,
  ...greyDark,
  ...slateDark,

  // neon
  ...azure,
  ...cherry,
  ...lime,
  ...lemon,
  ...hyper,
} as const;

export type KitColours = typeof kitColour;
export type DarkKitColours = typeof darkKitColour;
