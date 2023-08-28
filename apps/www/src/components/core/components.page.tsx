'use client';

import React from 'react';

import { KitLogo } from './kit.svg';
import { Container, Section, Text, Space } from '@atlrdsgn/kit';

function ComponentsPage({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Section>
        <Space size='xxl' />
        <Container
          width='small'
          align='center'>
          <KitLogo
            className='kitLogo logo'
            width={'80'}
            height={'55'}
            style={{
              zIndex: 11,
            }}
          />

          <Text
            color='carbon2'
            align='center'
            size='xs'
            weight='bold'
            font='mono'
            casing='uppercase'>
            rooted in subtractive design.
          </Text>
          <Space size='lg' />
          <Text
            color='sapphire6'
            align='center'
            size='lg'
            weight='semibold'
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
