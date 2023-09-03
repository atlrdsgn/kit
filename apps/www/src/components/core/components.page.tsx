'use client';

import React from 'react';

// import { KitLogo } from '@/components/svg/kit.svg';
import { Badge, Container, Section, Text, Space } from '@atlrdsgn/kit';

function ComponentsPage({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Section style={{ marginTop: '60px' }}>
        <Space size='xxl' />
        <Container
          width='small'
          align='center'>
          <Badge
            size='small'
            appearance='carbon'>
            <Badge.Label
              size='xs'
              variant='carbon'>
              Install
            </Badge.Label>
            <Badge.Content content='Looking for the official docs?' />
            <Badge.Icon svg='Small.Arrow.Right.Icon' />
          </Badge>

          <Text
            color='carbon7'
            align='center'
            size='xxl'
            weight='medium'
            casing='none'
            className='take'>
            yarn add @atlrdsgn/kit
          </Text>
          <Space size='sm' />
          <Text
            color='carbon2'
            align='center'
            size='xs'
            weight='medium'
            font='system'
            casing='none'>
            Edit on CodeSandbox →
          </Text>
          <Space size='xl' />
          <Text
            color='sapphire6'
            align='center'
            size='lg'
            weight='medium'
            font='system'>
            Atelier® Kit is an ever– expanding library of React components,
            primitives, and tools.
          </Text>
        </Container>

        <Space size='xxl' />
      </Section>

      {children}
    </>
  );
}

export default ComponentsPage;
