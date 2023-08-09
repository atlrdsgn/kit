'use client';

import { KitProvider } from '@atlrdsgn/kit';
// import { ThemeProvider as Theme } from 'next-themes';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/*
    <Theme
      enableSystem
      attribute='class'>
    */}
      <KitProvider background='transparent'>{children}</KitProvider>
    </>
  );
};

export default ThemeProvider;
