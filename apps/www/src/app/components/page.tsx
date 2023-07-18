import React from 'react';
import { PageLayout } from '@/components/core';
import ComponentsPage from '@/components/core/components.page';
import {
  DemoBanner,
  DemoButton,
  DemoChip,
  DemoContainer,
  DemoSection,
  DemoText,
} from '@/components/react-kit';

const ComponentsIndex = () => {
  return (
    <>
      <PageLayout type={'Standard'}>
        <ComponentsPage />

        <DemoSection />
        <DemoContainer />
        <DemoChip />
        <DemoButton />
        <DemoBanner />

        <DemoText />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
