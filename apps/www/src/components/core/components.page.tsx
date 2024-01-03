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
            <Badge.Content content='Looking for the official docs' />
            <Badge.Icon svg='Small.Arrow.Right.Icon' />
          </Badge>

          <Space size='lg' />
          <Text
            color='carbon6'
            align='center'
            size='xxl'
            weight='semibold'
            font='system'>
            Atlr®Kit is an ever– expanding library of React components,
            primitives, and tools.
          </Text>

          <Space size='xl' />
        </Container>

        <Space size='xxl' />
      </Section>

      {children}
    </>
  );
}

export default ComponentsPage;
