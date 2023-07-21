import React from 'react';
import type { LogoProps } from '../types';

const BASE_COLORS = {
  background: '#9E9CA6',
  inner: '#F6F4F0',
} as const;

export const LogoIcon = ({
  color = BASE_COLORS.background,
  width,
  height,
  ...props
}: LogoProps) => {
  return (
    <svg
      width={width || '18'}
      height={height || '18'}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M6.9 16H11.1C14.6 16 16 14.6 16 11.1V6.9C16 3.4 14.6 2 11.1 2H6.9C3.4 2 2 3.4 2 6.9V11.1C2 14.6 3.4 16 6.9 16Z'
        fill={color}
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.14 6.49999L4 11.5H6.68L7.15 10.7H10.8L11.26 11.5H14L10.86 6.49999H7.14ZM7.82 9.53999L8.98 7.55999L10.12 9.53999H7.82Z'
        fill={BASE_COLORS.inner}
      />
      <path
        d='M12.35 8.14999C12.44 8.23999 12.54 8.30999 12.66 8.35999C12.78 8.40999 12.9 8.42999 13.04 8.42999C13.18 8.42999 13.3 8.40999 13.42 8.35999C13.54 8.30999 13.64 8.23999 13.73 8.14999C13.82 8.05999 13.89 7.95999 13.94 7.83999C13.99 7.71999 14.01 7.59999 14.01 7.45999C14.01 7.31999 13.99 7.19999 13.94 7.07999C13.89 6.95999 13.82 6.85999 13.73 6.76999C13.64 6.67999 13.54 6.60999 13.42 6.55999C13.3 6.50999 13.18 6.48999 13.04 6.48999C12.9 6.48999 12.78 6.50999 12.66 6.55999C12.54 6.60999 12.44 6.67999 12.35 6.76999C12.26 6.85999 12.19 6.95999 12.14 7.07999C12.09 7.19999 12.07 7.31999 12.07 7.45999C12.07 7.59999 12.09 7.71999 12.14 7.83999C12.19 7.95999 12.26 8.05999 12.35 8.14999ZM12.4 7.09999C12.47 6.98999 12.55 6.89999 12.66 6.83999C12.77 6.76999 12.89 6.73999 13.03 6.73999C13.17 6.73999 13.29 6.76999 13.39 6.83999C13.5 6.89999 13.59 6.98999 13.65 7.09999C13.72 7.20999 13.75 7.32999 13.75 7.46999C13.75 7.60999 13.72 7.72999 13.65 7.82999C13.59 7.93999 13.5 8.02999 13.39 8.08999C13.28 8.15999 13.16 8.18999 13.03 8.18999C12.9 8.18999 12.77 8.15999 12.66 8.08999C12.55 8.01999 12.46 7.93999 12.4 7.82999C12.33 7.71999 12.3 7.59999 12.3 7.46999C12.3 7.33999 12.33 7.20999 12.4 7.09999Z'
        fill={BASE_COLORS.inner}
      />
      <path
        d='M12.9 7.59999H13.08L13.23 7.89999H13.46L13.28 7.54999C13.28 7.54999 13.35 7.49999 13.38 7.45999C13.41 7.40999 13.43 7.35999 13.43 7.29999C13.43 7.23999 13.42 7.17999 13.39 7.13999C13.36 7.09999 13.32 7.05999 13.28 7.03999C13.24 7.01999 13.19 7.00999 13.15 7.00999H12.71V7.89999H12.92V7.59999H12.9ZM13.07 7.15999C13.07 7.15999 13.12 7.15999 13.15 7.18999C13.18 7.20999 13.19 7.23999 13.19 7.29999C13.19 7.35999 13.18 7.38999 13.15 7.40999C13.12 7.42999 13.09 7.44999 13.06 7.44999H12.89V7.16999H13.06L13.07 7.15999Z'
        fill={BASE_COLORS.inner}
      />
    </svg>
  );
};