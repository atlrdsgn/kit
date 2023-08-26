import { clsx } from 'clsx';

import * as styleRes from './reset.css';
import { type Sprinkles, sprinkles } from './sprinkles.css';

export type Atoms = Sprinkles & {
  reset?:
    | (styleRes.KitElement & keyof JSX.IntrinsicElements & React.ElementType)
    | 'div';
};

export const atoms = ({ reset, ...rest }: Atoms) => {
  const sprinklesClasses = sprinkles(rest);

  const resetClass = reset
    ? [styleRes.base, styleRes.element[reset as keyof typeof styleRes.element]]
    : null;

  return clsx(resetClass, sprinklesClasses);
};
