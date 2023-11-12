import { useMDXComponents as originalUseMDXComponents } from '@mdx-js/react';
import type { ComponentType } from 'react';
import {
  createElement,
  DetailedHTMLProps,
  ImgHTMLAttributes,
  RefAttributes,
} from 'react';
import Image, { type ImageProps } from 'next/image';

// Define custom components for MDX
const DEFAULT_COMPONENTS: Record<string, ComponentType<any>> = {
  img: (
    props: ImageProps &
      ImgHTMLAttributes<HTMLImageElement> &
      RefAttributes<HTMLImageElement>,
  ) => {
    // Conditionally use Next.js Image or standard img tag
    const Component = typeof props.src === 'string' ? 'img' : Image;
    return createElement(Component, props);
  },
};

export const useMDXComponents: typeof originalUseMDXComponents = (
  components,
) => {
  return originalUseMDXComponents({
    ...DEFAULT_COMPONENTS,
    ...components,
  });
};

export { MDXProvider } from '@mdx-js/react';
export type { ComponentType as Component };
