import { azure, cherry, lime, lemon, hyper } from './neon';
import { carbon } from './carbon';
import { jade } from './jade';
import { grey } from './grey';
import { sapphire } from './sapphire';
import { slate } from './slate';
import { orange } from './orange';
import { mauve } from './mauve';

export const kitColour = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#FFFFFF',
  black: '#000000',

  // core
  ...jade,
  ...sapphire,
  ...orange,
  ...mauve,

  // neutrals
  ...carbon,
  ...grey,
  ...slate,

  // rest
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
  ...jade,
  ...sapphire,
  ...orange,
  ...mauve,

  // neutrals
  ...carbon,
  ...grey,
  ...slate,

  // rest
  ...azure,
  ...cherry,
  ...lime,
  ...lemon,
  ...hyper,
} as const;

export type KitColours = typeof kitColour;
export type DarkKitColours = typeof darkKitColour;

export type KitColour = keyof KitColours;
