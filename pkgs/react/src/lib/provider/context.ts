import { createContext, useContext } from 'react';

export type KitMode = 'light' | 'dark' | 'system';

export type KitContextValue = {
  theme: KitMode;
  toggleTheme: (mode: KitMode) => void;
};

export const KitContext = createContext<KitContextValue>({
  theme: 'system',
  toggleTheme: () => {},
});

export const useTheme = (): KitContextValue => {
  const context = useContext(KitContext);
  if (!context)
    throw new Error(
      'Components must be used within [KitProvider], `useTheme` must be used within a `Theme`',
    );
  return context;
};
