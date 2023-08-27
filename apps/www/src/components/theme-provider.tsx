'use client';

import { KitProvider } from '@atlrdsgn/kit';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <KitProvider background='transparent'>{children}</KitProvider>
    </>
  );
};

export default ThemeProvider;
