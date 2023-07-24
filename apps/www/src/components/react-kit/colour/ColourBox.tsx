'use client';

import React from 'react';
import { Rect, type DivProps } from '@atlrdsgn/kit';

interface ColourBoxProps {
  children?: React.ReactNode;
  colour?: DivProps['color'];
  className?: string;
}

export const ColourBox = ({
  children,
  colour,
  className,
  ...rest
}: ColourBoxProps) => {
  return (
    <Rect
      style={{ backgroundColor: `${colour}`, width: '80px', height: '80px' }}
      className={className}
      color={colour}
      {...rest}>
      {children}
    </Rect>
  );
};
