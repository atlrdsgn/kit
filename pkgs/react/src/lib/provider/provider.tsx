import React, { useState } from 'react';

import { type KitMode, KitContext } from './context';
import { type ThemeColour } from '../theme';
import { kitColour, darkKitColour } from '../colour';
import { themes } from '../theme/kit.css';

interface ProviderProps {
  children: React.ReactNode;
  defaultTheme?: KitMode;
  background?: ThemeColour;
}

export type KitProviderProps = ProviderProps &
  React.HTMLAttributes<HTMLDivElement>;

export const KitProvider: React.FC<KitProviderProps> = ({
  children,
  defaultTheme = 'light',
  background = 'white', // initial color is white
}: React.PropsWithChildren<KitProviderProps>) => {
  const [kitTheme, setTheme] = useState<KitMode>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const Mode = kitTheme === 'light' ? themes.light : themes.dark;
  const appColor =
    kitTheme === 'light' ? kitColour[background] : darkKitColour[background];

  return (
    <KitContext.Provider value={{ theme: kitTheme, toggleTheme }}>
      <div
        className={`${themes.base} ${Mode}`}
        style={{ backgroundColor: appColor }}>
        {children}
      </div>
    </KitContext.Provider>
  );
};
