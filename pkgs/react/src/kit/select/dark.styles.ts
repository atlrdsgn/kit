import { kit } from '../../lib';

export const darkTriggerCSS = {
  borderColor: kit.color.carbon8,
  backgroundColor: kit.color.carbon9,
  color: kit.color.carbon0,

  HOV: { backgroundColor: kit.color.carbon8 },
  FOC: {
    boxShadow: `0px 0px 0px 4px rgba(74, 73, 126, 0.40), 0px 1px 2px 0px rgba(74, 73, 126, 0.40)`,
  },
} as const;

export const darkContentCSS = {
  borderColor: kit.color.carbon8,
  backgroundColor: kit.color.carbon9,
  color: kit.color.carbon0,
} as const;

export const darkItemTextCSS = {
  color: kit.color.carbon0,
} as const;
