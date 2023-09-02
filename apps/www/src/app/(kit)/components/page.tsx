import React from 'react';
import { PageLayout } from '@/components/core';
import { AppNavbar } from '@/components/navigation';

import ComponentsPage from '@/components/core/components.page';
import {
  DemoBadge,
  DemoTabSwitcher,
  DemoSelect,
  DemoTip,
} from '@/components/react-kit';

const ComponentsIndex = () => {
  return (
    <>
      <PageLayout type={'Standard'}>
        <AppNavbar />
        <ComponentsPage />

        <DemoBadge />
        <DemoTip />
        <DemoTabSwitcher />
        <DemoSelect />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
