import React from 'react';
import { type SectionSize, type SectionVariantProps } from './section.css';
interface BASE_SECTION_PROPS {
    children: React.ReactNode;
    className?: string;
    size?: SectionSize;
}
export type SectionProps = BASE_SECTION_PROPS & SectionVariantProps & React.HTMLAttributes<HTMLDivElement>;
export declare const Section: React.FC<SectionProps>;
export {};
//# sourceMappingURL=section.d.ts.map