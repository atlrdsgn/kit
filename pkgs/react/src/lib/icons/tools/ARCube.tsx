import type { IconProps } from '../types';

export const ARCubeIcon = ({
  className,
  color = 'currentColor',
  size = 16,
  ...props
}: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <circle
        cx='8'
        cy='8'
        r='6'
        fill={color}
        fillOpacity='0.2'
      />
      <path
        d='M8 15C11.8617 15 15 11.8617 15 8C15 4.13833 11.8617 1 8 1C4.13833 1 1 4.13833 1 8C1 11.8617 4.13833 15 8 15ZM8 2.16667C11.2142 2.16667 13.8333 4.78583 13.8333 8C13.8333 11.2142 11.2142 13.8333 8 13.8333C4.78583 13.8333 2.16667 11.2142 2.16667 8C2.16667 4.78583 4.78583 2.16667 8 2.16667Z'
        fill={color}
      />
      <path
        d='M12.1417 5.90584L11.3192 5.08334L6.78091 9.62167L4.73925 7.58L3.91675 8.4025L6.78091 11.2725L12.1417 5.90584Z'
        fill={color}
      />
    </svg>
  );
};
