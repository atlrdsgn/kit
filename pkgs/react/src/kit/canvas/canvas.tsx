import React, { useEffect } from 'react';
import * as CSS from './canvas.css';
import { createKitClass } from '../../lib';
import { canvasWithGrid } from './canvas.grid.css';
import type { CanvasVariantProps, CanvasZVariants } from './canvas.css';

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
        className={createKitClass(CSS.canvas({ z }), className)}
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
        className={createKitClass(CSS.canvasBlur, className)}
        {...rest}>
        {children}
      </div>
    );
  },
);

export type CanvasWithGridProps = BaseCanvasProps &
  React.HTMLAttributes<HTMLCanvasElement>;

export const CanvasWithGrid = React.forwardRef<
  HTMLCanvasElement,
  CanvasWithGridProps
>(({ className, ...rest }: CanvasWithGridProps, forwardedRef) => {
  const canvasRef = forwardedRef as React.RefObject<HTMLCanvasElement>;

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const drawGrid = (ctx: CanvasRenderingContext2D, gridSize = 10) => {
      for (let x = 0; x <= ctx.canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, ctx.canvas.height);
      }

      for (let y = 0; y <= ctx.canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(ctx.canvas.width, y);
      }

      ctx.strokeStyle = '#ddd';
      ctx.stroke();
    };

    drawGrid(context);
  }, [canvasRef]); // Use canvasRef instead of forwardedRef

  return (
    <canvas
      ref={forwardedRef}
      className={createKitClass(canvasWithGrid, className)}
      {...rest}
    />
  );
});

Canvas.displayName = 'Canvas';
CanvasBlur.displayName = 'CanvasBlur';
CanvasWithGrid.displayName = 'CanvasWithGrid';
