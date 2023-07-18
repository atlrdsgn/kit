import * as React from 'react';
export type AllOrNone<T> = T | {
    [K in keyof T]?: never;
};
export type ReactNodeNoStrings = React.ReactElement | React.ReactNodeArray | boolean | null | undefined;
export type EmptyObject = {
    [k: string]: unknown;
};
type Pretty<T> = T extends infer U ? {
    [K in keyof U]: U[K];
} : never;
export type Optional<T, K extends keyof T> = Pretty<Pick<Partial<T>, K> & Omit<T, K>>;
export {};
//# sourceMappingURL=utils.d.ts.map