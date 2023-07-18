// The main theming object.
export { kit } from './theme/kit.css';

/** ------------ provider -------------- */
export { KitProvider, type KitProviderProps } from './provider';
export {
  KitContext,
  useTheme,
  type KitContextValue,
  type KitMode,
} from './provider';

/** ------------ css -------------- */
export { atoms, type Atoms } from './css';
export {
  sprinkles,
  type Sprinkles,
  mapResponsiveValue,
  mapColorValue,
} from './css';
export { breakpoints } from './css';
export { colorModeStyle } from './css';
export {
  type OptionalResponsiveValue,
  type RequiredResponsiveObject,
  type RequiredResponsiveValue,
  type OptionalResponsiveObject,
} from './css';
