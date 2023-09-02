import clsx from 'clsx';
import localFont from 'next/font/local';

export const MonaSans = localFont({
  src: '../../public/fonts/mona-sans/Mona-Sans.woff2',
  display: 'swap',
  style: 'normal',
  variable: '--font-mona-sans',
});

export const fontClassName = clsx(MonaSans.variable);
