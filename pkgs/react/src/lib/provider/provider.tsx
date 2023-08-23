import React, { useState, useEffect } from 'react';
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
  // Sets the default theme to 'system'
  defaultTheme = 'system',
  background = 'carbon2',
}: React.PropsWithChildren<KitProviderProps>) => {
  const [kitTheme, setTheme] = useState<KitMode>(defaultTheme);

  useEffect(() => {
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    if (kitTheme === 'system') {
      setTheme(systemPref);
    }
  }, [kitTheme]);

  useEffect(() => {
    const systemPrefMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );
    const systemPreferenceListener = (event: { matches: boolean }) => {
      if (kitTheme === 'system') setTheme(event.matches ? 'dark' : 'light');
    };

    systemPrefMediaQuery.addEventListener('change', systemPreferenceListener);

    // Clean-up function
    return () => {
      systemPrefMediaQuery.removeEventListener(
        'change',
        systemPreferenceListener,
      );
    };
  }, [kitTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') return 'dark';
      if (prevTheme === 'dark') return 'system';
      return 'light';
    });
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
