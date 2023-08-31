'use client';
import React from 'react';
import { KitProvider } from '@atlrdsgn/kit';

const AppContext = React.createContext<{ fontsLoaded: boolean }>({
  fontsLoaded: false,
});

export const useAppContext = () => React.useContext(AppContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <KitProvider background='transparent'>{children}</KitProvider>
    </>
  );
};

export default ThemeProvider;
