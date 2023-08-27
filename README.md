# `ATELIERKIT®`

<a href="https://docs.atlrdsgn.com">
  <img width="1080" alt="atelierkit" src="https://cdn.atlrdsgn.com/assets/github/atlrdsgn/kit-cover.jpg">
</a>

An ever– expanding library of [React](https://reactjs.org/) components, primitives, and tools.

---

**Note**: This monorepo holds the source code for the following packages.

1. `@atlrdsgn/kit`
2. website [`apps/www`]
3. docs [`apps/docs`]
4. `@atlrdsgn/tsconfig`– private
5. `eslint-config-['atlrdsgn']`– private

### Getting started and using atelierkit

### 1. **Install**

To get started, add `@atlrdsgn/kit` to your dependencies.

```yarn
yarn add @atlrdsgn/kit
```

```pnpm
pnpm add @atlrdsgn/kit
```

```npm
npm install @atlrdsgn/kit
```

---

### 2. **Wrap your app**

**Import the `.css` file**, and _wrap your application_.

You need to wrap your app with the `KitProvider` context so that the .css file is available to all components.

```tsx
import '@atlrdsgn/kit/css';
import '...other_styles.css or .scss';

import { KitProvider } from '@atlrdsgn/kit';

export default function App({ Component, pageProps }) {
  return (
    <KitProvider>
      <Component {...pageProps} />
    </KitProvider>
  );
}
```

if you are using **Next.js** app directory you may need to create your own provider component, you can do that by creating a new component called `theme-provider.tsx` and adding the following code.

```tsx
'use client';

import { KitProvider } from '@atlrdsgn/kit';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <KitProvider>{children}</KitProvider>
    </>
  );
};

export default ThemeProvider;
```

import your theme-provider component into your `app/layout.tsx` file.

```tsx
import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

---

### 3. **Usage**

Build smaller components using individual primitives and elements.

```tsx
import React from 'react';
import { Container } from '@atlrdsgn/kit';

<Container width='medium'>..</Container>;
```

(or) import multiple primitives and compose complex components.

```tsx
import React from 'react';
import { Canvas, Text, Button } from '@atlrdsgn/kit';

export const DefaultExample = () => (
  <Canvas>
    <Text size='sm'>ATELIERKIT®</Text>
    <Button size='sm'>Small button</Button>
  </Canvas>
);
```

##### You can view full documentation at [docs.atlrdsgn.com](https://docs.atlrdsgn.com)

##### `© 2023 atlrdsgn®`
