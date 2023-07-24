import React from 'react';
import { PageLayout } from '@/components/core';
import ColourPage from '@/components/core/colour.page';
import { DemoColour } from '@/components/react-kit';

const ColourIndex = () => {
  return (
    <>
      <PageLayout type={'Standard'}>
        <ColourPage />

        <DemoColour />
      </PageLayout>
    </>
  );
};

export default ColourIndex;
