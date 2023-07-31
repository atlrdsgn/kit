import React from 'react';
import { PageLayout } from '@/components/core';
import ComponentsPage from '@/components/core/components.page';
import {
  DemoBadge,
  DemoButton,
  DemoChip,
  DemoContainer,
  DemoSection,
  DemoSwitch,
  DemoTabSwitcher,
  DemoText,
  DemoInput,
  DemoSelect,
  DemoDropdown,
  DemoMenubar,
  DemoPopover,
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
        <DemoTabSwitcher />
        <DemoSelect />
        <DemoDropdown />
        <DemoMenubar />

        <DemoText />

        <DemoInput />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
