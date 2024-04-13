'use client';

import React from 'react';
import { Badge, Stack } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const KitBadge = () => {
  return (
    <ComponentWrapper label='badge'>
      <Stack direction='vertical'>
        <Badge
          size='small'
          appearance='carbon'>
          <Badge.Label
            size='xs'
            variant='carbon'>
            Label
          </Badge.Label>
          <Badge.Content content='Sint velit irure officia lorem ipsum.' />
          <Badge.Icon svg='Small.Arrow.Right.Icon' />
        </Badge>

        <Badge
          size='small'
          appearance='jade'>
          <Badge.Label
            size='xs'
            variant='jade'>
            Jade
          </Badge.Label>
          <Badge.Content content='Sint velit irure officia lorem ipsum.' />
          <Badge.Icon svg='Small.Arrow.Right.Icon' />
        </Badge>

        <Badge
          size='small'
          appearance='sapphire'>
          <Badge.Label
            size='xs'
            variant='carbon'>
            Carbon w/ sapphire
          </Badge.Label>
          <Badge.Content content='Sint velit irure officia lorem ipsum.' />
          <Badge.Icon svg='Small.Arrow.Right.Icon' />
        </Badge>

        <Badge
          size='small'
          appearance='carbon'>
          <Badge.Label
            size='xs'
            variant='carbon'>
            This is my xs label
          </Badge.Label>
          <Badge.Content content='Sint velit irure officia lorem ipsum.' />
          <Badge.Icon svg='Arrow.Down.Icon' />
        </Badge>

        <Badge
          size='medium'
          appearance='carbon'>
          <Badge.Label
            size='sm'
            variant='carbon'>
            This label can grow
          </Badge.Label>
          <Badge.Content content='Sint velit irure officia lorem ipsum.' />
          <Badge.Icon svg='Small.Arrow.Right.Icon' />
        </Badge>
      </Stack>
    </ComponentWrapper>
  );
};

export default KitBadge;
