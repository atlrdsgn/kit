import { Context } from 'react';
/// <reference types="react" />
export type KitMode = 'light' | 'dark';
export type KitContextValue = {
    theme: KitMode;
    toggleTheme: () => void;
};
export declare const KitContext: Context<KitContextValue>;
export declare const useTheme: () => KitContextValue;
//# sourceMappingURL=context.d.ts.map