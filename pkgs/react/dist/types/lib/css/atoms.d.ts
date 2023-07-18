/// <reference types="react" />
import * as styleRes from './reset.css';
import { type Sprinkles } from './sprinkles.css';
export type Atoms = Sprinkles & {
    reset?: (styleRes.KitElement & keyof JSX.IntrinsicElements & React.ElementType) | 'div';
};
export declare const atoms: ({ reset, ...rest }: Atoms) => string;
//# sourceMappingURL=atoms.d.ts.map