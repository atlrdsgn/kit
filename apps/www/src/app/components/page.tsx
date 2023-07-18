import React from 'react';
import { PageLayout } from '@/components/core';
import ComponentsPage from '@/components/core/components.page';
import DemoPopover from '@/components/react-kit/DemoPopover';
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
        <DemoPopover />

        <DemoText />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
