import React from 'react';
import { PageLayout } from '@/components/core';
import { AppNavbar } from '@/components/navigation';

import ComponentsPage from '@/components/core/components.page';
import KitBadge from '@/components/docs/badge';

const ComponentsIndex = () => {
  return (
    <>
      <PageLayout type={'Standard'}>
        <AppNavbar />
        <ComponentsPage />

        <KitBadge />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
