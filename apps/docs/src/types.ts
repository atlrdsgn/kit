import type { PageOpts } from 'nextra';
import type { ProcessorOptions } from '@mdx-js/mdx';
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';

type Theme = string;

export type Flexsearch =
  | boolean
  | {
      /**
       * Whether to index code blocks
       * @default true
       */
      codeblocks: boolean;
      /**
       * A filter function to filter out files from indexing, and return the
       * index file key, or null to skip indexing.
       * A site can have multiple indexes, by default they're separated by
       * locales as multiple index files.
       */
      indexKey?: (
        filepath: string,
        route: string,
        locale?: string,
      ) => null | string;
    };
type Transform = (
  result: string,
  options: {
    route: string;
  },
) => string | Promise<string>;

export type KitDocsConfig = {
  theme: Theme;
  themeConfig?: string;
  defaultShowCopyCode?: boolean;
  flexsearch?: Flexsearch;
  staticImage?: boolean;
  readingTime?: boolean;
  latex?: boolean;
  codeHighlight?: boolean;
  /**
   * A function to modify the code of compiled MDX pages.
   * @experimental
   */
  transform?: Transform;
  /**
   * A function to modify the `pageOpts` prop passed to theme layouts.
   * @experimental
   */
  transformPageOpts?: (pageOpts: PageOpts) => PageOpts;
  mdxOptions?: Pick<ProcessorOptions, 'rehypePlugins' | 'remarkPlugins'> & {
    format?: 'detect' | 'mdx' | 'md';
    rehypePrettyCodeOptions?: Partial<RehypePrettyCodeOptions>;
  };
};
