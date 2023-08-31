import type { IconProps } from '../../types';

export const ARCubeIcon = ({
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
        d='M13.2935 9.99243L11.6276 10.8553'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.6276 10.8553L9.94977 9.99243'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.6276 10.9631V13.1084'
        stroke={color}
        strokeWidth='1.1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.1832 7.41559L16.5054 8.27849'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.2671 7.37973L16.5892 6.52881'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.3151 7.41559V9.56086'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 7.34368L6.66588 6.48077'
        stroke={color}
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.13177 7.57147L6.79766 8.42239'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 7.49963V9.64491'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.6276 19.1368L9.94977 18.2739'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.6276 19.1368L13.2935 18.2739'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.6276 19.1367V16.9915'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.6372 16.5001L18.3151 15.6492V13.5039'
        stroke={color}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.2935 4.85092L11.6276 4L9.94977 4.85092H13.2935Z'
        fill='black'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66588 16.5001L5 15.6492V13.5039L6.66588 16.5001Z'
        fill='black'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ARCubeIcon;
