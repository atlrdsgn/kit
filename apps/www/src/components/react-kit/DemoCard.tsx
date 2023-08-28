'use client';
import React from 'react';
import { Card, Text } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoCard = () => {
  return (
    <ComponentWrapper
      label='card'
      boxed>
      <Card>
        <Card.Content shadow='md'>
          <Card.Header level='H3'>Card Header</Card.Header>
          <p>
            Nostrud sunt pariatur aute reprehenderit. Aute elit Lorem id
            adipisicing labore. This is basic text content, you can provide
            images, links, and other content here as well.
          </p>
          <Text
            color='sapphire6'
            size='lg'
            weight='medium'
            font='inter'>
            This website is in– development.
          </Text>
        </Card.Content>
      </Card>
    </ComponentWrapper>
  );
};
