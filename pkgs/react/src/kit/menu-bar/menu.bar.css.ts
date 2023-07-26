import { style } from '@vanilla-extract/css';
import { kit } from '../../lib';

const baseITEM = {
  boxSizing: 'border-box',
  cursor: 'pointer',
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'middle',
  userSelect: 'none',
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.XS,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.MD,
  width: 'auto',
  backgroundColor: kit.color.transparent,
  color: kit.color.carbon8,
  border: `1px solid ${kit.color.transparent}`,
  transition: 'all 0.3s ease-in-out',
} as const;

export const menuTrigger = style({});
export const menuSubTrigger = style({});

export const menuContent = style({});

export const menuSub = style({});
export const menuSubContent = style({});
export const menuSubItem = style({});

export const menuItem = style({
  ...baseITEM,
});
