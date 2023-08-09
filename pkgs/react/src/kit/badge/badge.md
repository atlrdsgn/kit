#### Badge

Displays a badge or label often used to indicate a status, category, count, or other contextual information.

#### Basic Usage

```tsx
import * as React from 'react';
import { Badge } from '@atlrdsgn/kit';

export const Example = () => <Badge>Badge</Badge>;
```

#### Appearance

```tsx
import * as React from 'react';
import { Badge } from '@atlrdsgn/kit';

export const Example = () => (
  <>
    <Badge appearance='primary'>Primary</Badge>
    <Badge appearance='secondary'>Secondary</Badge>
    <Badge appearance='success'>Success</Badge>
    <Badge appearance='warning'>Warning</Badge>
    <Badge appearance='danger'>Danger</Badge>
    <Badge appearance='info'>Info</Badge>
    <Badge appearance='light'>Light</Badge>
    <Badge appearance='dark'>Dark</Badge>
  </>
);
```
