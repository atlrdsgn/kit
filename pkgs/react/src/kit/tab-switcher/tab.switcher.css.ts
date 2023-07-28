import { style } from '@vanilla-extract/css';
import { kit } from '../../lib';

export const baseTabsLayout = style({
  display: 'flex',
  width: '100%',
  maxWidth: '400px',

  margin: 'auto',
  padding: 4,
  alignItems: 'center',
  justifyContent: 'center',

  gap: 8,

  backgroundColor: kit.color.carbon0,

  '@media': {
    '(prefers-color-scheme: dark)': {},
  },

  selectors: {
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'row',
    },
  },
});

export const tabsList = style({
  display: 'flex',
  width: '320px',
  maxWidth: '400px',

  margin: 'auto',
  padding: 4,
  alignItems: 'center',
  justifyContent: 'center',

  gap: 8,

  backgroundColor: kit.color.carbon1,
  borderRadius: kit.radii.LG,

  selectors: {
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'row',
    },
  },
});

export const baseItem = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  flex: '1 0 0',

  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 12,
  paddingRight: 12,

  borderRadius: kit.radii.MD,
} as const;

export const tabsItem = style({
  ...baseItem,

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.SEMIBOLD,
  lineHeight: kit.font.lineheight.SM,

  color: kit.color.carbon9,
  backgroundColor: kit.color.carbon2,
  border: 'none',

  cursor: 'pointer',
  selectors: {
    '&[data-state="active"]': {
      backgroundColor: kit.color.carbon0,
      color: kit.color.carbon8,
      boxShadow: `0px 2px 4px -2px rgba(17, 12, 34, 0.12)`,
    },
    '&[data-state="inactive"]': {
      backgroundColor: kit.color.transparent,
      color: kit.color.carbon9,
    },
    '&[data-state="disabled"]': {},
    '&[data-orientation="vertical"]': {},
    '&[data-orientation="horizontal"]': {},
  },
});

export const tabsContent = style({
  backgroundColor: kit.color.transparent,
  padding: 16,
  color: kit.color.carbon8,
  borderRadius: kit.radii.LG,

  maxWidth: '400px',
  width: '400px',
});
