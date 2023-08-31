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
        d='M8.67771 9.21142C8.44076 9.44837 8.44076 9.83254 8.67771 10.0695C8.91467 10.3064 9.29883 10.3064 9.53578 10.0695L12.1405 7.4648L14.7451 10.0695C14.9821 10.3064 15.3663 10.3064 15.6032 10.0695C15.8401 9.83254 15.8401 9.44837 15.6032 9.21142L12.5695 6.17771C12.4557 6.06392 12.3014 6 12.1405 6C11.9795 6 11.8252 6.06392 11.7114 6.17771L8.67771 9.21142ZM15.6032 14.7886C15.8401 14.5516 15.8401 14.1675 15.6032 13.9305C15.3663 13.6936 14.9821 13.6936 14.7451 13.9305L12.1405 16.5352L9.53578 13.9305C9.29883 13.6936 8.91467 13.6936 8.67771 13.9305C8.44076 14.1675 8.44076 14.5516 8.67771 14.7886L11.7114 17.8223C11.9484 18.0592 12.3325 18.0592 12.5695 17.8223L15.6032 14.7886Z'
        fill={color}
        stroke={color}
        strokeWidth='0.276923'
      />
    </svg>
  );
};

export default ArrowSortIcon;
