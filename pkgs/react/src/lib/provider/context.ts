import { createContext, useContext } from 'react';

export type KitMode = 'light' | 'dark';

export type KitContextValue = {
  theme: KitMode;
  toggleTheme: () => void;
};

export const KitContext = createContext<KitContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = (): KitContextValue => {
  const context = useContext(KitContext);
  if (!context)
    throw new Error(
      'Atelier® Kit components must be used within [KitProvider]',
    );
  return context;
};
