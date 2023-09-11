import React from 'react';
import { PageLayout } from '@/components/core';
import { AppNavbar } from '@/components/navigation';

import ComponentsPage from '@/components/core/components.page';
import KitBadge from '@/components/docs/badge';
import KitButton from '@/components/docs/button';
import KitSelect from '@/components/docs/select';

const ComponentsIndex = () => {
  return (
    <>
      <PageLayout type={'Standard'}>
        <AppNavbar />
        <ComponentsPage />

        <KitBadge />
        <KitButton />
        <KitSelect />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
