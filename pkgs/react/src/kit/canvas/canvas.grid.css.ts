import { style } from '@vanilla-extract/css';

export const canvasGrid = {
  width: '500px',
  height: '500px',
  border: '1px solid black',
} as const;

export const canvasWithGrid = style({
  ...canvasGrid,
});
