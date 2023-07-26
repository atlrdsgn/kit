import React from 'react';
import clsx from 'clsx';
import { chip } from './chip.css';
import type { ChipVariantProps } from './chip.css';

export type ChipProps = ChipVariantProps &
  React.HTMLAttributes<HTMLSpanElement> & { className?: string };

export const Chip: React.FC<ChipProps> = ({
  children,
  className,
  size = 'sm',
  shape = 'pill',
  variant = 'carbon',
  removeShadow = false,
  ...rest
}) => (
  <span
    {...rest}
    className={clsx(className, chip({ size, shape, variant, removeShadow }))}>
    {children}
  </span>
);

Chip.displayName = 'Chip';
