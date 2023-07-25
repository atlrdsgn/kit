import { createVar, style } from '@vanilla-extract/css';

export const accentVar = createVar();

const kitJadeList = {
  '0': '#ebfbee',
  '1': '#d3f9d8',
  '2': '#b2f2bb',
  '3': '#8ce99a',
  '4': '#69db7c',
  '5': '#51cf66',
  '6': '#40c057',
  '7': '#37b24d',
  '8': '#2f9e44',
  '9': '#2b8a3e',
} as Record<string, string>;

/*
$kit-jade-list: (
  '0': #ebfbee,
  '1': #d3f9d8,
  '2': #b2f2bb,
  '3': #8ce99a,
  '4': #69db7c,
  '5': #51cf66,
  '6': #40c057,
  '7': #37b24d,
  '8': #2f9e44,
  '9': #2b8a3e,
);
*/

export const jade = style({
  vars: {
    [accentVar]: kitJadeList['5'],
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [accentVar]: kitJadeList['3'],
      },
    },
  },
});

export const green = style({
  vars: {
    [accentVar]: 'blue',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [accentVar]: 'lightblue',
      },
    },
  },
});

export const pink = style({
  vars: {
    [accentVar]: 'pink',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [accentVar]: 'lightpink',
      },
    },
  },
});
