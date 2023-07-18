import React from 'react';
import { canvas } from './canvas.css';
import clsx from 'clsx';

interface CanvasProps {
  children?: React.ReactNode;
  className?: string;
}

export const Canvas = React.forwardRef<HTMLDivElement, CanvasProps>(
  ({ children, ...rest }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={clsx(canvas)}
        {...rest}>
        {children}
      </div>
    );
  },
);

Canvas.displayName = 'Canvas';

export type { CanvasProps };
