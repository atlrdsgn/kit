import React from 'react';
import { type ContainerAlignment, type ContainerBorder, type ContainerVariantProps, type ContainerWidth } from './container.css';
export type ContainerProps = ContainerVariantProps & React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    className?: string;
    width?: ContainerWidth;
    align?: ContainerAlignment;
    border?: ContainerBorder | boolean;
};
export declare const Container: React.FC<ContainerProps>;
//# sourceMappingURL=container.d.ts.map