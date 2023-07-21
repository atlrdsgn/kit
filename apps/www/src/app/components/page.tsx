import React from 'react';
import { PageLayout } from '@/components/core';
import ComponentsPage from '@/components/core/components.page';
import DemoPopover from '@/components/react-kit/DemoPopover';
import DemoSelect from '@/components/react-kit/DemoSelect';
import {
  DemoButton,
  DemoChip,
  DemoContainer,
  DemoSection,
  DemoSwitch,
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
        <DemoSwitch />
        <DemoSelect />

        <DemoText />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
