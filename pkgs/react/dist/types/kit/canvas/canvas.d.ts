import React from 'react';
import { type CanvasVariantProps, type CanvasZVariants } from './canvas.css';
interface BaseCanvasProps {
    children: React.ReactNode;
    className?: string;
    z?: CanvasZVariants;
}
export type CanvasProps = BaseCanvasProps & CanvasVariantProps & React.HTMLAttributes<HTMLDivElement>;
export declare const Canvas: React.ForwardRefExoticComponent<BaseCanvasProps & {
    z?: "normal" | "top" | "default" | "blur" | "max" | undefined;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export type CanvasBlurProps = Omit<BaseCanvasProps, 'z'>;
export declare const CanvasBlur: React.ForwardRefExoticComponent<CanvasBlurProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=canvas.d.ts.map