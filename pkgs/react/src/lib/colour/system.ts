import { carbon, slate } from './neutral';
import { jade, sapphire, orange } from './core';
import { azure, cherry, lime, lemon } from './neon';

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
  ...slate,

  // neon
  ...azure,
  ...cherry,
  ...lime,
  ...lemon,
} as const;

export const darkKitColour = kitColour;
export type KitColours = typeof kitColour;
