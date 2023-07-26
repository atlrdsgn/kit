import React from 'react';
import { PageLayout } from '@/components/core';
import ComponentsPage from '@/components/core/components.page';
import DemoPopover from '@/components/react-kit/DemoPopover';
import DemoDropdown from '@/components/react-kit/DemoDropdown';
import DemoSelect from '@/components/react-kit/DemoSelect';
import {
  DemoBadge,
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
        <DemoBadge />
        <DemoButton />
        <DemoPopover />
        <DemoSwitch />
        <DemoSelect />
        <DemoDropdown />

        <DemoText />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
