import React from 'react';
import { PageLayout } from '@/components/core';
import ComponentsPage from '@/components/core/components.page';
import {
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

        <DemoText />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
