'use client';
import React from 'react';
import { Container, Text, Flex, Heading } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoText = () => {
  return (
    <ComponentWrapper label='text'>
      <Container width='small'>
        <Flex
          direction={'column'}
          align={'start'}
          justify={'start'}
          gap={'xs'}
          wrap={'wrap'}
          style={{ marginBottom: '20px', marginTop: '20px' }}>
          <Heading size='H3'>Lorem Ipsum</Heading>
          <Text
            size='sm'
            weight='normal'>
            Consequat quis dolor fugiat ullamco elit tempor excepteur ea sunt.
            Id ad excepteur magna do et in proident nulla. Culpa enim quis
            pariatur reprehenderit irure. Aliquip qui est mollit officia.
          </Text>
        </Flex>
      </Container>
    </ComponentWrapper>
  );
};
