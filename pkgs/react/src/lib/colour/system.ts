import { azure, hyper } from './neon';
import { carbon } from './carbon';
import { jade } from './jade';

import { lime } from './lime';
import { sapphire } from './sapphire';
import { slate } from './slate';
import { orange } from './orange';
import { mauve } from './mauve';
import { blackAlpha, whiteAlpha } from './alphas';

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
  ...whiteAlpha,
  ...blackAlpha,
  ...carbon,
  ...slate,

  // rest
  ...azure,
  ...lime,
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
  ...whiteAlpha,
  ...blackAlpha,
  ...carbon,
  ...slate,

  // rest
  ...azure,
  ...lime,
  ...hyper,
} as const;

export type KitColours = typeof kitColour;
export type DarkKitColours = typeof darkKitColour;

export type KitColour = keyof KitColours;
