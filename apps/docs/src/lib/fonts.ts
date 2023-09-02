import clsx from 'clsx';
import localFont from 'next/font/local';

export const MonaSans = localFont({
  src: '../kit-theme/mona-sans/Mona-Sans.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
});

export const fontClassName = clsx(MonaSans.variable);
