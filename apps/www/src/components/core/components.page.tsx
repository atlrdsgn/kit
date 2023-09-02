'use client';

import React from 'react';

// import { KitLogo } from '@/components/svg/kit.svg';
import { Container, Section, Text, Space } from '@atlrdsgn/kit';

function ComponentsPage({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Section style={{ marginTop: '60px' }}>
        <Space size='xxl' />
        <Container
          width='small'
          align='center'>
          {/* <!-- Hold logo
          <KitLogo
            className='kitLogo logo'
            width={'80'}
            height={'55'}
            style={{
              zIndex: 11,
            }}
          />
          --> */}

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
