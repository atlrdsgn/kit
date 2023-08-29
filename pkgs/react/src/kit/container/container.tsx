import React from 'react';
import { clsx } from 'clsx';
import { container } from './container.css';
import type {
  // ..
  ContainerAlignment,
  ContainerBorder,
  ContainerFlush,
  ContainerVariantProps,
  ContainerWidth,
} from './container.css';

export type ContainerProps = ContainerVariantProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    className?: string;
    width?: ContainerWidth;
    align?: ContainerAlignment;
    border?: ContainerBorder | boolean;
    flush?: ContainerFlush | boolean;
  };

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  width = 'max',
  align = 'start',
  border = false,
  flush = false,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(className, container({ width, align, border, flush }))}>
      {children}
    </div>
  );
};

Container.displayName = 'Container';
