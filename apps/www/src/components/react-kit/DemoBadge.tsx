'use client';
import React from 'react';
import { Badge } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoBadge = () => {
  return (
    <ComponentWrapper label='badge'>
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
    </ComponentWrapper>
  );
};
