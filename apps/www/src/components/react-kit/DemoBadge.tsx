'use client';
import React from 'react';
import { Badge } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoBadge = () => {
  return (
    <ComponentWrapper label='badge'>
      <Badge
        size='small'
        appearance='jade'>
        <Badge.Label
          size='xs'
          variant='jade'>
          Label
        </Badge.Label>
        <Badge.Content content='Sint velit irure officia lorem ipsum.' />
        <Badge.Icon svg='Small.Arrow.Right.Icon' />
      </Badge>
    </ComponentWrapper>
  );
};
