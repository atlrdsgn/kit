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
      backgroundColor={colour}
      style={{
        width: '40px',
        height: '40px',
        border: '1px solid gray',
      }}
      className={className}
      color={colour}
      {...rest}>
      {children}
    </Rect>
  );
};
