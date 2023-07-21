import '@/scss/index.scss';
import '@atlrdsgn/kit/css';

import { type Metadata } from 'next';
import ThemeProvider from '@/components/theme-provider';

const siteURL = 'https://kit.atlrdsgn.com';

export const metadata: Metadata = {
  metadataBase: new URL('https://kit.atlrdsgn.com'),
  title: '@atlrdsgn/kit',
  description: 'an ever– expanding library of design components.',
  manifest: `${siteURL}/site.webmanifest`,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
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
      <body style={{ opacity: 1 }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
