/// <reference types="react" />
import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/** --------------- recipes ----------------- */
export declare const switchRoot: RuntimeFn<{
    size: Record<"small" | "medium", string>;
}>;
export declare const switchToggle: RuntimeFn<{
    size: Record<"small" | "medium", string>;
}>;
export type SwitchRootVariantProps = RecipeVariants<typeof switchRoot>;
export type SwitchToggleVariantProps = RecipeVariants<typeof switchToggle>;
export type SwitchRootProps = {
    size?: SwitchRootVariantProps;
} & React.HTMLAttributes<HTMLButtonElement>;
//# sourceMappingURL=switch.css.d.ts.map