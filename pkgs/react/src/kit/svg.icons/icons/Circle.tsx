import type { IconProps } from '../types';

export const CircleMediumIcon = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <circle
        cx='12'
        cy='12'
        r='8'
        fill={color}
      />
    </svg>
  );
};

export const CircleSmallIcon = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <circle
        cx='8'
        cy='8'
        r='6'
        fill={color}
      />
    </svg>
  );
};
