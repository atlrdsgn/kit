import type { IconProps } from '../types';

export const CursorIcon = ({
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
        d='M14.7462 16.2207C14.8689 16.5154 14.7509 17.6313 14.1 17.89C13.4491 18.1486 12.6174 17.89 12.6174 17.89L11.1082 14.8717L8.5 17.4799V5.70001L16.4899 13.69H13.5131C13.6592 13.9701 14.5902 15.8464 14.7462 16.2207Z'
        fill='#000000'
        fillOpacity='0.5'
      />
      <path
        d='M9.2 7.38996V15.79L11.3 13.69L13.05 17.19C13.05 17.19 13.5234 17.341 13.75 17.19C13.9766 17.0389 14.202 16.7347 14.1 16.49C13.6186 15.3347 12.35 12.99 12.35 12.99H14.8L9.2 7.38996Z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill={color}
      />
    </svg>
  );
};

export default CursorIcon;
