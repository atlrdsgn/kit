import { style } from '@vanilla-extract/css';
import { kit } from '../../lib';

export const dataLabel = style({
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.XS,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.XS,
  textAlign: 'left',
  color: kit.color.current,
});

export const dataValue = style({
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size['3XL'],
  fontWeight: kit.font.weight.SEMIBOLD,
  lineHeight: kit.font.lineheight['3XL'],
  textAlign: 'left',
});

export const dataMeta = style({
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,
  textAlign: 'left',
  color: kit.color.current,
});
