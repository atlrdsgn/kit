import React from 'react';
import * as styles from './grid.css';
import { type DivProps } from '../rect';
export interface GridProps extends DivProps {
    gridItemMinWidth?: string;
    /** TODO: Different columns API? See https://css-tricks.com/responsive-layouts-fewer-media-queries/ */
    gridMaxRowItems?: number;
}
export declare const gridStyles: typeof styles;
/**
 *
 * Grid layout with with responsive defaults,
 * but also fully customizable with standard CSS grid properties.
 */
export declare const Grid: React.ForwardRefExoticComponent<Omit<GridProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=grid.d.ts.map