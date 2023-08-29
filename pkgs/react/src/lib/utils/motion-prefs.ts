import type { StyleRule } from '@vanilla-extract/css';

export const motionSafe = (style: StyleRule) => ({
  '@media': {
    '(prefers-reduced-motion: no-preference)': style,
  },
});

export const motionReduce = (style: StyleRule) => ({
  '@media': {
    '(prefers-reduced-motion: reduce)': style,
  },
});

export const motionQueries = {
  safe: motionSafe,
  reduce: motionReduce,
} as const;

export type MotionSafe = typeof motionQueries.safe;
export type MotionReduce = typeof motionQueries.reduce;
export type MotionQuery = keyof typeof motionQueries;
