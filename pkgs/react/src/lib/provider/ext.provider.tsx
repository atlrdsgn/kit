import React, { useState } from 'react';
import { type KitMode, KitContext } from './context';
import { type ThemeColour } from '../theme/theme.css';
import { kitColour, darkKitColour } from '../colour';
import { themes } from '../theme/kit.css';
import { colorModeStyle, type CSSProps } from '../css/mode';
import { style } from '@vanilla-extract/css';
import clsx from 'clsx';

interface BaseKitProps {
  children: React.ReactNode;
  className?: string;
  defaultTheme?: KitMode;
  lightMode?: CSSProps;
  darkMode?: CSSProps;
  background?: ThemeColour;
}

export type ExtendedKitProps = BaseKitProps &
  React.HTMLAttributes<HTMLDivElement>;

export const ExtendedKitProvider: React.FC<ExtendedKitProps> = ({
  children,
  className,
  defaultTheme = 'light',
  lightMode,
  darkMode,
  background = 'white',
}: React.PropsWithChildren<ExtendedKitProps>) => {
  const [kitTheme, setTheme] = useState<KitMode>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const Mode = kitTheme === 'light' ? themes.light : themes.dark;
  const appColor =
    kitTheme === 'light' ? kitColour[background] : darkKitColour[background];

  const themeStyles = style({
    ...colorModeStyle({
      lightMode,
      darkMode,
    }),
  });

  return (
    <KitContext.Provider value={{ theme: kitTheme, toggleTheme }}>
      <div
        className={clsx(`${themes.base} ${Mode}`, themeStyles, className)}
        style={{ backgroundColor: appColor }}>
        {children}
      </div>
    </KitContext.Provider>
  );
};
