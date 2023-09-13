'use client';
import React from 'react';
import { Container, Section, Flex, Space, KitIcon } from '@atlrdsgn/kit';

export const DemoIcons = () => {
  return (
    <Section>
      <Space size='xxl' />
      <Container
        width='medium'
        align='center'>
        {/* <!-- CORE --> */}

        <Flex>
          <KitIcon
            icon='Cursor.Icon'
            size={24}
          />
          <KitIcon
            icon='ARCube.Icon'
            size={24}
          />
          <KitIcon
            icon='ExpandFilled.Icon'
            size={24}
          />
        </Flex>
      </Container>
    </Section>
  );
};
