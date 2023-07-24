'use client';

import React from 'react';
import { Container, Section, Text, Heading, Space } from '@atlrdsgn/kit';

function ColourPage({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Section>
        <Space size='xxl' />
        <Container
          width='small'
          align='center'>
          <Heading
            align='center'
            size='H2'
            weight='semibold'
            font='system'>
            Colour System
          </Heading>
          <Space size='sm' />
          <Text
            color='jade7'
            align='center'
            size='lg'
            weight='medium'
            font='system'>
            The system has a set of 3 color palettes. We apply colors for
            components, backgrounds, shadows, borders, and content using these
            sets of colors.
          </Text>
        </Container>

        <Space size='xxl' />
      </Section>

      {children}
    </>
  );
}

export default ColourPage;
