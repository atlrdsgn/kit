import * as React from 'react';
import { type OptionalResponsiveObject, type OptionalResponsiveValue } from '../../lib';
import { type ReactNodeNoStrings } from '../@utils/utils';
import { type DivProps } from '../rect';
export type Direction = 'horizontal' | 'vertical';
export type Wrap = 1 | 0;
export declare const directionToFlexDirection: (direction: OptionalResponsiveValue<Direction> | undefined) => "column" | "row" | Partial<Record<string, "column" | "row">> | undefined;
export declare const wrapToFlexWrap: (wrap: OptionalResponsiveObject<true | false> | undefined) => "nowrap" | "wrap" | Partial<Record<string, "nowrap" | "wrap">> | undefined;
/** ------------------------------------------- */
export declare const validStackComponents: readonly ["a", "article", "div", "form", "header", "label", "li", "main", "section", "span"];
export type StackProps = {
    as?: (typeof validStackComponents)[number];
    align?: DivProps['alignItems'];
    children: ReactNodeNoStrings;
    direction?: OptionalResponsiveValue<Direction>;
    flex?: DivProps['flex'];
    justify?: DivProps['justifyContent'];
    space?: DivProps['gap'];
    wrap?: OptionalResponsiveObject<true | false>;
};
export declare const Stack: ({ as, align, children, justify, flex, direction, space, wrap, }: React.PropsWithChildren<StackProps>) => React.JSX.Element;
//# sourceMappingURL=stack.d.ts.map