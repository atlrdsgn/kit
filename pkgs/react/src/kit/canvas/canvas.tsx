import React from 'react';
import clsx from 'clsx';

import {
  type CanvasVariantProps,
  type CanvasZVariants,
  canvas,
  canvasBlur,
} from './canvas.css';

interface BaseCanvasProps {
  children: React.ReactNode;
  className?: string;
  z?: CanvasZVariants;
}

export type CanvasProps = BaseCanvasProps &
  CanvasVariantProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Canvas = React.forwardRef<HTMLDivElement, CanvasProps>(
  ({ children, className, z = 'default', ...rest }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={clsx(className, canvas({ z }))}
        {...rest}>
        {children}
      </div>
    );
  },
);

export type CanvasBlurProps = Omit<BaseCanvasProps, 'z'>;

export const CanvasBlur = React.forwardRef<HTMLDivElement, CanvasBlurProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={clsx(className, canvasBlur)}
        {...rest}>
        {children}
      </div>
    );
  },
);

Canvas.displayName = 'Canvas';
CanvasBlur.displayName = 'CanvasBlur';
