import React from 'react';
import { PageLayout } from '@/components/core';
import { AppNavbar } from '@/components/navigation';

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
  DemoBanner,
  DemoTip,
  DemoCard,
} from '@/components/react-kit';

const ComponentsIndex = () => {
  return (
    <>
      <PageLayout type={'Standard'}>
        <AppNavbar />
        <ComponentsPage />

        <DemoSection />
        <DemoContainer />
        <DemoChip />
        <DemoBadge />
        <DemoBanner />
        <DemoButton />
        <DemoCard />
        <DemoPopover />
        <DemoTip />
        <DemoSwitch />
        <DemoTabSwitcher />
        <DemoSelect />
        <DemoDropdown />
        <DemoMenubar />
        <DemoInput />

        <DemoText />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
