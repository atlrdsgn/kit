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
            size='H1'
            weight='bold'
            font='system'>
            {components.introduction}
          </Heading>

          <Text
            color='jade5'
            align='center'
            size='lg'
            weight='medium'
            font='system'>
            {components.subtitle}
          </Text>
        </Container>
      </Section>

      {children}
    </>
  );
}

export default ComponentsPage;
