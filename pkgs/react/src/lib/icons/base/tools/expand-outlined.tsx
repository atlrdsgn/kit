import type { IconProps } from '../../types';

export const ExpandOutlinedIcon = ({
  className,
  color = 'currentColor',
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M9.725 18.5H13.775C17.15 18.5 18.5 17.15 18.5 13.775V9.725C18.5 6.35 17.15 5 13.775 5H9.725C6.35 5 5 6.35 5 9.725V13.775C5 17.15 6.35 18.5 9.725 18.5Z'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.8 7.70001L7.70001 15.8'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.8 10.4V7.70001H13.1'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.70001 13.1V15.8H10.4'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ExpandOutlinedIcon;
