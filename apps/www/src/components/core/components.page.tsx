'use client';

import React from 'react';
import content from '../../../web.config.json';
import { Container, Section, Text, Heading, Space } from '@atlrdsgn/kit';

function ComponentsPage({ children }: { children?: React.ReactNode }) {
  const { components } = content;

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
            {components.introduction}
          </Heading>
          <Space size='sm' />
          <Text
            color='jade7'
            align='center'
            size='lg'
            weight='medium'
            font='system'>
            {components.subtitle}
          </Text>
        </Container>

        <Space size='xxl' />
      </Section>

      {children}
    </>
  );
}

export default ComponentsPage;
