import React from 'react';
import { text } from './text.css';
import { clsx } from 'clsx';

import type {
  TextFontVariants,
  TextSizeVariants,
  TextAlignVariants,
  TextWeightVariants,
  TextColorVariants,
  TextCasingVariants,
  TextVariantProps,
} from './text.css';

interface TextElementProps {
  className?: string;
  font?: TextFontVariants;
  size?: TextSizeVariants;
  align?: TextAlignVariants;
  weight?: TextWeightVariants;
  color?: TextColorVariants;
  casing?: TextCasingVariants;
}

export type TextProps = TextElementProps &
  TextVariantProps &
  React.HTMLAttributes<HTMLParagraphElement>;
export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      font = 'inter',
      size = 'md',
      align = 'left',
      weight = 'medium',
      color = 'current',
      casing,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <p
        {...props}
        ref={forwardedRef}
        className={clsx(
          className,
          text({ font, size, align, weight, color, casing }),
        )}
      />
    );
  },
);

Text.displayName = 'Text';
