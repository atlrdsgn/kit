import React, { useState } from 'react';
import { type KitMode, KitContext } from './context';
import { themes } from '../theme/kit.css';
import { colorModeStyle, type CSSProps } from '../css/mode';
import { style } from '@vanilla-extract/css';
import clsx from 'clsx';

export interface baseProviderProps {
  children: React.ReactNode;
  className?: string;
  defaultTheme?: KitMode;
  lightMode?: CSSProps; // Add this prop for light mode styles
  darkMode?: CSSProps; // Add this prop for dark mode styles
}

export type KitProviderProps = baseProviderProps &
  React.HTMLAttributes<HTMLDivElement>;

export const AlternateKitProvider: React.FC<KitProviderProps> = ({
  children,
  className,
  defaultTheme = 'light',
  lightMode,
  darkMode,
}: React.PropsWithChildren<KitProviderProps>) => {
  const [kitTheme, setTheme] = useState<KitMode>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const Mode = kitTheme === 'light' ? themes.dark : themes.light;

  // Generate the light and dark mode styles using colorModeStyle
  const styles = style({
    ...colorModeStyle({
      lightMode,
      darkMode,
    }),
  });

  return (
    <KitContext.Provider value={{ theme: kitTheme, toggleTheme }}>
      <div className={clsx(`${themes.base} ${Mode}`, styles, className)}>
        {children}
      </div>
    </KitContext.Provider>
  );
};
