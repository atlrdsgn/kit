import React from 'react';

export type AllOrNone<T> = T | { [K in keyof T]?: never };
export type MaybePromise<TType> = Promise<TType> | TType;

/*
 * Disallow string from React.ReactNode
 */
export type ReactNodeNoStrings =
  | React.ReactElement
  | React.ReactNode[]
  | boolean
  | null
  | undefined;

/* Basic empty type instead of using `{}`
 * https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
 */
export type EmptyObject = { [k: string]: unknown };

type Pretty<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

export type Optional<T, K extends keyof T> = Pretty<
  Pick<Partial<T>, K> & Omit<T, K>
>;

export {};
