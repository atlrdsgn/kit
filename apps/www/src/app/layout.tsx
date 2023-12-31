import '@/scss/index.scss';
import '@atlrdsgn/kit/css';

import { MonaSans, fontClassName } from '@/lib/fonts';
import { clsx } from 'clsx';
import { AppHooks } from './hooks';

import type { Viewport } from 'next';
import type { Metadata } from 'next';
import ThemeProvider from '@/components/theme-provider';

const siteURL = 'https://kit.atlrdsgn.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kit.atlrdsgn.com'),
  title: '@atlrdsgn/kit',
  description: 'an ever– expanding library of design components.',
  manifest: `${siteURL}/site.webmanifest`,

  openGraph: {
    title: '@atlrdsgn/kit',
    description: 'an ever– expanding library of design components.',
    url: siteURL,
    siteName: '@atlrdsgn/kit',
    images: [
      {
        url: `${siteURL}/og-atlr.jpg`,
        width: 1200,
        height: 627,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/static/favicon/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: '@atlrdsgn/kit',
    description: 'an ever– expanding library of design components.',
    creator: '@chvndlerch',
    images: ['/og-atlr.jpg'],
  },
  category: '',
  verification: {},
  other: {
    custom: 'none',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body
        className={clsx(fontClassName, MonaSans.variable, 'sans-serif')}
        style={{ opacity: 0 }}>
        <ThemeProvider>{children}</ThemeProvider>
        <AppHooks />
      </body>
    </html>
  );
}
