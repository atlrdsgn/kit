'use client';
import React from 'react';
import { Container, Section, Flex, Space, Text, Heading } from '@atlrdsgn/kit';
import { ColourBox } from './ColourBox';

export const DemoColour = () => {
  return (
    <Section>
      <Space size='lg' />
      <Container
        width='medium'
        align='center'>
        {/* <!-- CORE --> */}

        <Container
          width='medium'
          align='start'
          flush>
          <Heading
            align='left'
            size='H3'
            weight='semibold'
            font='system'>
            Core
          </Heading>
        </Container>

        {/* <!-- Jade --> */}
        <Section>
          <Text
            size='xs'
            weight='medium'
            font='mono'>
            .kit-jade
          </Text>
          <Flex
            direction={'row'}
            align={'center'}
            justify={'start'}
            gap={'xs'}
            wrap={'wrap'}
            style={{ marginBottom: '10px', marginTop: '10px' }}>
            <ColourBox colour={'jade0'} />
            <ColourBox colour={'jade1'} />
            <ColourBox colour={'jade2'} />
            <ColourBox colour={'jade3'} />
            <ColourBox colour={'jade4'} />
            <ColourBox colour={'jade5'} />
            <ColourBox colour={'jade6'} />
            <ColourBox colour={'jade7'} />
            <ColourBox colour={'jade8'} />
            <ColourBox colour={'jade9'} />
            <ColourBox colour={'jade10'} />
            <ColourBox colour={'jade11'} />
            <ColourBox colour={'jade12'} />
          </Flex>
        </Section>

        {/* <!-- sapphire --> */}
        <Section>
          <Text
            size='xs'
            weight='medium'
            font='mono'>
            .kit-sapphire
          </Text>
          <Flex
            direction={'row'}
            align={'center'}
            justify={'start'}
            gap={'xs'}
            wrap={'wrap'}
            style={{ marginBottom: '10px', marginTop: '10px' }}>
            <ColourBox colour={'sapphire0'} />
            <ColourBox colour={'sapphire1'} />
            <ColourBox colour={'sapphire2'} />
            <ColourBox colour={'sapphire3'} />
            <ColourBox colour={'sapphire4'} />
            <ColourBox colour={'sapphire5'} />
            <ColourBox colour={'sapphire6'} />
            <ColourBox colour={'sapphire7'} />
            <ColourBox colour={'sapphire8'} />
            <ColourBox colour={'sapphire9'} />
            <ColourBox colour={'sapphire10'} />
            <ColourBox colour={'sapphire11'} />
            <ColourBox colour={'sapphire12'} />
          </Flex>
        </Section>

        {/* <!-- Orange --> */}
        <Section>
          <Text
            size='xs'
            weight='medium'
            font='mono'>
            .kit-orange
          </Text>
          <Flex
            direction={'row'}
            align={'center'}
            justify={'start'}
            gap={'xs'}
            wrap={'wrap'}
            style={{ marginBottom: '10px', marginTop: '10px' }}>
            <ColourBox colour={'orange0'} />
            <ColourBox colour={'orange1'} />
            <ColourBox colour={'orange2'} />
            <ColourBox colour={'orange3'} />
            <ColourBox colour={'orange4'} />
            <ColourBox colour={'orange5'} />
            <ColourBox colour={'orange6'} />
            <ColourBox colour={'orange7'} />
            <ColourBox colour={'orange8'} />
            <ColourBox colour={'orange9'} />
            <ColourBox colour={'orange10'} />
            <ColourBox colour={'orange11'} />
            <ColourBox colour={'orange12'} />
          </Flex>
        </Section>

        {/* <!-- Grape --> */}

        {/* <!-- NEUTRAL --> */}
        <Container
          width='medium'
          align='start'
          flush>
          <Heading
            align='left'
            size='H3'
            weight='semibold'
            font='system'>
            Neutral
          </Heading>
        </Container>
        {/* <!-- carbon --> */}
        <Section>
          <Text
            size='xs'
            weight='medium'
            font='mono'>
            .kit-carbon
          </Text>
          <Flex
            direction={'row'}
            align={'center'}
            justify={'start'}
            gap={'xs'}
            wrap={'wrap'}
            style={{ marginBottom: '10px', marginTop: '10px' }}>
            <ColourBox colour={'carbon0'} />
            <ColourBox colour={'carbon1'} />
            <ColourBox colour={'carbon2'} />
            <ColourBox colour={'carbon3'} />
            <ColourBox colour={'carbon4'} />
            <ColourBox colour={'carbon5'} />
            <ColourBox colour={'carbon6'} />
            <ColourBox colour={'carbon7'} />
            <ColourBox colour={'carbon8'} />
            <ColourBox colour={'carbon9'} />
            <ColourBox colour={'carbon10'} />
            <ColourBox colour={'carbon11'} />
            <ColourBox colour={'carbon12'} />
          </Flex>
        </Section>

        {/* <!-- slate --> */}
        <Section>
          <Text
            size='xs'
            weight='medium'
            font='mono'>
            .kit-slate
          </Text>
          <Flex
            direction={'row'}
            align={'center'}
            justify={'start'}
            gap={'xs'}
            wrap={'wrap'}
            style={{ marginBottom: '10px', marginTop: '10px' }}>
            <ColourBox colour={'slate0'} />
            <ColourBox colour={'slate1'} />
            <ColourBox colour={'slate2'} />
            <ColourBox colour={'slate3'} />
            <ColourBox colour={'slate4'} />
            <ColourBox colour={'slate5'} />
            <ColourBox colour={'slate6'} />
            <ColourBox colour={'slate7'} />
            <ColourBox colour={'slate8'} />
            <ColourBox colour={'slate9'} />
            <ColourBox colour={'slate10'} />
            <ColourBox colour={'slate11'} />
            <ColourBox colour={'slate12'} />
          </Flex>
        </Section>

        {/* <!-- grey --> */}
        <Section>
          <Text
            size='xs'
            weight='medium'
            font='mono'>
            .kit-grey
          </Text>
          <Flex
            direction={'row'}
            align={'center'}
            justify={'start'}
            gap={'xs'}
            wrap={'wrap'}
            style={{ marginBottom: '10px', marginTop: '10px' }}>
            <ColourBox colour={'grey0'} />
            <ColourBox colour={'grey1'} />
            <ColourBox colour={'grey2'} />
            <ColourBox colour={'grey3'} />
            <ColourBox colour={'grey4'} />
            <ColourBox colour={'grey5'} />
            <ColourBox colour={'grey6'} />
            <ColourBox colour={'grey7'} />
            <ColourBox colour={'grey8'} />
            <ColourBox colour={'grey9'} />
            <ColourBox colour={'grey10'} />
            <ColourBox colour={'grey11'} />
            <ColourBox colour={'grey12'} />
          </Flex>
        </Section>

        {/* <!-- mauve --> */}
        <Section>
          <Text
            size='xs'
            weight='medium'
            font='mono'>
            .kit-mauve
          </Text>
          <Flex
            direction={'row'}
            align={'center'}
            justify={'start'}
            gap={'xs'}
            wrap={'wrap'}
            style={{ marginBottom: '10px', marginTop: '10px' }}>
            <ColourBox colour={'mauve1'} />
            <ColourBox colour={'mauve2'} />
            <ColourBox colour={'mauve3'} />
            <ColourBox colour={'mauve4'} />
            <ColourBox colour={'mauve5'} />
            <ColourBox colour={'mauve6'} />
            <ColourBox colour={'mauve7'} />
            <ColourBox colour={'mauve8'} />
            <ColourBox colour={'mauve9'} />
            <ColourBox colour={'mauve10'} />
            <ColourBox colour={'mauve11'} />
            <ColourBox colour={'mauve12'} />
          </Flex>
        </Section>

        {/* <!-- NEONS --> */}
        <Container
          width='medium'
          align='start'
          flush>
          <Heading
            align='left'
            size='H3'
            weight='semibold'
            font='system'>
            Neons
          </Heading>
        </Container>
        {/* <!-- azure --> */}
        <Section>
          <Text
            size='xs'
            weight='medium'
            font='mono'>
            .kit-azure
          </Text>
          <Flex
            direction={'row'}
            align={'center'}
            justify={'start'}
            gap={'xs'}
            wrap={'wrap'}
            style={{ marginBottom: '10px', marginTop: '10px' }}>
            <ColourBox colour={'azure0'} />
            <ColourBox colour={'azure1'} />
            <ColourBox colour={'azure2'} />
            <ColourBox colour={'azure3'} />
            <ColourBox colour={'azure4'} />
            <ColourBox colour={'azure5'} />
            <ColourBox colour={'azure6'} />
            <ColourBox colour={'azure7'} />
            <ColourBox colour={'azure8'} />
            <ColourBox colour={'azure9'} />
            <ColourBox colour={'azure10'} />
            <ColourBox colour={'azure11'} />
            <ColourBox colour={'azure12'} />
          </Flex>
        </Section>

        {/* <!-- lemon --> */}
        <Section>
          <Text
            size='xs'
            weight='medium'
            font='mono'>
            .kit-lemon
          </Text>
          <Flex
            direction={'row'}
            align={'center'}
            justify={'start'}
            gap={'xs'}
            wrap={'wrap'}
            style={{ marginBottom: '10px', marginTop: '10px' }}>
            <ColourBox colour={'lemon0'} />
            <ColourBox colour={'lemon1'} />
            <ColourBox colour={'lemon2'} />
            <ColourBox colour={'lemon3'} />
            <ColourBox colour={'lemon4'} />
            <ColourBox colour={'lemon5'} />
            <ColourBox colour={'lemon6'} />
            <ColourBox colour={'lemon7'} />
            <ColourBox colour={'lemon8'} />
            <ColourBox colour={'lemon9'} />
            <ColourBox colour={'lemon10'} />
            <ColourBox colour={'lemon11'} />
            <ColourBox colour={'lemon12'} />
          </Flex>
        </Section>
      </Container>
    </Section>
  );
};
