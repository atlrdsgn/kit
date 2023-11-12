import type { IconProps } from '../../types';

export const ArrowSortIcon = ({
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.25485 9.67618C9.05739 9.87365 9.05739 10.1938 9.25485 10.3912C9.45231 10.5887 9.77244 10.5887 9.9699 10.3912L12.1405 8.22067L14.311 10.3912C14.5085 10.5887 14.8286 10.5887 15.0261 10.3912C15.2235 10.1938 15.2235 9.87365 15.0261 9.67618L12.498 7.14809C12.4032 7.05327 12.2746 7 12.1405 7C12.0064 7 11.8778 7.05327 11.7829 7.14809L9.25485 9.67618ZM15.0261 14.3238C15.2235 14.1264 15.2235 13.8062 15.0261 13.6088C14.8286 13.4113 14.5085 13.4113 14.311 13.6088L12.1405 15.7794L9.9699 13.6088C9.77244 13.4113 9.45231 13.4113 9.25485 13.6088C9.05739 13.8062 9.05739 14.1264 9.25485 14.3238L11.7829 16.8519C11.9804 17.0494 12.3005 17.0494 12.498 16.8519L15.0261 14.3238Z'
        fill={color}
        stroke={color}
        strokeWidth='0.230769'
      />
    </svg>
  );
};

export default ArrowSortIcon;
